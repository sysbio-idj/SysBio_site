# SysBio

Site institucional em Next.js, TypeScript e Tailwind CSS. Exportação estática; sem backend, banco de dados, login, pagamentos ou rastreadores.

Requisito: Node.js 20.9 ou superior (recomendado: Node.js 24 LTS).

```sh
npm install
npm run dev
```

Abra http://localhost:3000.

```sh
npm run typecheck
npm run build
```

O build estático é gerado em `out/`. Nenhum deploy é executado.

## Edição

- `src/data/site.ts`: textos, navegação, e-mail, categorias e ferramentas.
- `src/app/globals.css`: identidade visual e responsividade.
- `src/components/tool-catalog.tsx`: busca e filtros locais.
- `src/app/layout.tsx`: metadados de SEO. Configure URL canônica e sitemap quando o domínio oficial estiver definido.

O catálogo começa vazio intencionalmente. Para publicar uma ferramenta real, adicione um objeto ao array `tools` com `id`, `name`, `description`, `category`, `access` (`Gratuito` ou `Pago`) e `href`. `tags` é opcional. Links podem apontar para uma ferramenta hospedada ou uma rota implementada neste projeto. Não são exibidos cards demonstrativos nem links sem destino. Os filtros de busca ignoram acentos.

O contato usa `mailto:` com o endereço oficial e assunto preenchido; requer aplicativo de e-mail configurado. O endereço também fica visível para cópia. Nenhum formulário ou dado de pesquisa é coletado pelo site.

A ilustração vetorial da home é conceitual, não representa resultados científicos. A tipografia usa fontes locais do sistema, sem requisições a provedores externos.
