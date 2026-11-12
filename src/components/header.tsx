"use client";

import { useState } from "react";
import { site } from "@/data/site";
import { Icon, Logo } from "./icon";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <div className="container header-inner">
        <a
          href="#inicio"
          aria-label="SysBio — início"
          onClick={() => setOpen(false)}
        >
          <Logo />
        </a>
        <button
          className="menu-button"
          aria-expanded={open}
          aria-controls="main-nav"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span className={open ? "menu-open" : ""} />
        </button>
        <nav
          id="main-nav"
          aria-label="Navegação principal"
          className={open ? "navigation is-open" : "navigation"}
        >
          {site.navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <a
            className="nav-contact"
            href="#contato"
            onClick={() => setOpen(false)}
          >
            Vamos conversar <Icon name="diagonal" />
          </a>
        </nav>
      </div>
    </header>
  );
}
