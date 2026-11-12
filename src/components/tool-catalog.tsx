"use client";

import { useState } from "react";
import { categories, site, tools } from "@/data/site";
import { Icon } from "./icon";

const normalize = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase("pt-BR");

export function ToolCatalog() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("Todas");
  const [access, setAccess] = useState("Todos os acessos");
  const filtered = tools.filter(
    (tool) =>
      (category === "Todas" || tool.category === category) &&
      (access === "Todos os acessos" || tool.access === access) &&
      normalize(
        [tool.name, tool.description, ...(tool.tags ?? [])].join(" "),
      ).includes(normalize(query.trim())),
  );
  const hasFilters = Boolean(
    query || category !== "Todas" || access !== "Todos os acessos",
  );

  return (
    <div className="catalog">
      <div className="catalog-controls">
        <label className="search-field">
          <Icon name="search" />
          <span className="sr-only">Buscar ferramentas</span>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={site.tools.placeholder}
            type="search"
          />
        </label>
        <label className="access-field">
          <span className="sr-only">Filtrar por acesso</span>
          <select value={access} onChange={(e) => setAccess(e.target.value)}>
            <option>Todos os acessos</option>
            <option>Gratuito</option>
            <option>Pago</option>
          </select>
        </label>
      </div>
      <div
        className="category-filters"
        role="group"
        aria-label="Categorias de ferramentas"
      >
        {categories.map((item) => (
          <button
            key={item}
            type="button"
            aria-pressed={category === item}
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <div aria-live="polite" aria-atomic="true">
        {filtered.length > 0 ? (
          <>
            <p className="result-count">
              {filtered.length}{" "}
              {filtered.length === 1
                ? "ferramenta encontrada"
                : "ferramentas encontradas"}
            </p>
            <div className="tool-grid">
              {filtered.map((tool) => (
                <article key={tool.id} className="tool-card">
                  <div className="tool-meta">
                    <span>{tool.category}</span>
                    <span className="access-badge">{tool.access}</span>
                  </div>
                  <h3>{tool.name}</h3>
                  <p>{tool.description}</p>
                  <a href={tool.href} className="text-link">
                    Acessar ferramenta <Icon name="diagonal" />
                  </a>
                </article>
              ))}
            </div>
          </>
        ) : (
          <div className="catalog-empty">
            <span className="empty-icon">
              <Icon name={tools.length ? "search" : "layers"} />
            </span>
            <div>
              <span className="micro-label">
                {tools.length ? "NENHUM RESULTADO" : "EM PREPARAÇÃO"}
              </span>
              <h3>
                {tools.length
                  ? "Não encontramos uma ferramenta."
                  : site.tools.emptyTitle}
              </h3>
              <p>
                {tools.length
                  ? "Tente outro termo ou selecione uma categoria diferente."
                  : site.tools.emptyDescription}
              </p>
              <div className="empty-actions">
                <a href="#contato" className="text-link">
                  {site.tools.emptyCta} <Icon name="arrow" />
                </a>
                {hasFilters && (
                  <button
                    className="clear-filters"
                    onClick={() => {
                      setQuery("");
                      setCategory("Todas");
                      setAccess("Todos os acessos");
                    }}
                  >
                    Limpar filtros
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
