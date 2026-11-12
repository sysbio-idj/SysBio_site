import { Header } from "@/components/header";
import { Icon, Logo } from "@/components/icon";
import { ScienceVisual } from "@/components/science-visual";
import { ToolCatalog } from "@/components/tool-catalog";
import { consultationHref, site } from "@/data/site";

export default function Home() {
  return (
    <>
      <Header />
      <main id="conteudo">
        <section
          id="inicio"
          className="hero container"
          aria-labelledby="hero-title"
        >
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="eyebrow-line" />
              {site.hero.eyebrow}
            </p>
            <h1 id="hero-title">
              {site.hero.title}
              <span>{site.hero.accent}</span>
            </h1>
            <p className="hero-description">{site.hero.description}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#ferramentas">
                {site.hero.primary}
                <Icon name="arrow" />
              </a>
              <a className="button button-outline" href="#contato">
                {site.hero.secondary}
                <Icon name="diagonal" />
              </a>
            </div>
            <p className="hero-note">{site.hero.note}</p>
          </div>
          <ScienceVisual />
        </section>
        <div className="discipline-strip">
          <div className="container">
            <span>DA BANCADA AO DADO.</span>
            <p>
              Bioinformática
              <i />
              Multiômicas
              <i />
              Bioestatística
              <i />
              Wet lab
            </p>
            <span>UMA VISÃO COMPLETA.</span>
          </div>
        </div>
        <section
          id="ferramentas"
          className="section container"
          aria-labelledby="tools-title"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">{site.tools.eyebrow}</p>
              <h2 id="tools-title">{site.tools.title}</h2>
            </div>
            <p className="section-description">{site.tools.description}</p>
          </div>
          <ToolCatalog />
        </section>
        <section
          id="expertise"
          className="expertise-section"
          aria-labelledby="expertise-title"
        >
          <div className="container section">
            <div className="section-heading">
              <div>
                <p className="eyebrow">{site.expertise.eyebrow}</p>
                <h2 id="expertise-title" className="preserve-lines">
                  {site.expertise.title}
                </h2>
              </div>
              <p className="section-description">
                {site.expertise.description}
              </p>
            </div>
            <div className="expertise-grid">
              {site.expertise.items.map((item) => (
                <article key={item.title} className="expertise-item">
                  <Icon name={item.icon} />
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section
          id="solucoes"
          className="section container solutions-section"
          aria-labelledby="solutions-title"
        >
          <div className="solutions-intro">
            <p className="eyebrow">{site.solutions.eyebrow}</p>
            <h2 id="solutions-title" className="preserve-lines">
              {site.solutions.title}
            </h2>
            <p className="section-description">{site.solutions.description}</p>
            <a href="#contato" className="text-link">
              Encontrar minha solução <Icon name="arrow" />
            </a>
          </div>
          <div className="solutions-list">
            {site.solutions.items.map((item, i) => (
              <article key={item.title} className="solution-item">
                <span className="solution-index">0{i + 1}</span>
                <div>
                  <span className="micro-label">{item.tag}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                <Icon name="diagonal" />
              </article>
            ))}
          </div>
        </section>
        <section
          id="sobre"
          className="about-section"
          aria-labelledby="about-title"
        >
          <div className="container about-inner">
            <div>
              <p className="eyebrow">{site.about.eyebrow}</p>
              <h2 id="about-title" className="preserve-lines">
                {site.about.title}
              </h2>
            </div>
            <div className="about-copy">
              <p>{site.about.description}</p>
              <p>{site.about.mission}</p>
              <ul className="values">
                {site.about.values.map((value) => (
                  <li key={value}>
                    <Icon name="check" />
                    {value}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <section
          id="contato"
          className="section container"
          aria-labelledby="contact-title"
        >
          <div className="contact-panel">
            <div className="contact-intro">
              <p className="eyebrow">
                <span className="status-dot" />
                {site.contact.eyebrow}
              </p>
              <h2 id="contact-title" className="preserve-lines">
                {site.contact.title}
              </h2>
              <p>{site.contact.description}</p>
            </div>
            <div className="contact-actions">
              <a href={consultationHref()} className="button button-light">
                {site.contact.cta}
                <Icon name="diagonal" />
              </a>
              <a className="contact-email" href={consultationHref()}>
                <Icon name="mail" />
                {site.email}
              </a>
              <p>{site.contact.note}</p>
              <span className="email-note">
                O contato abre seu aplicativo de e-mail.
              </span>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="container footer-main">
          <a href="#inicio" aria-label="SysBio — voltar ao início">
            <Logo />
          </a>
          <p>
            Ciência que conecta.
            <br />
            Tecnologia que simplifica.
          </p>
          <a href="#inicio" className="back-top">
            Voltar ao topo <Icon name="arrow" />
          </a>
        </div>
        <div className="container footer-bottom">
          <span>
            © {new Date().getFullYear()} SysBio. Todos os direitos reservados.
          </span>
          <span>Ciência, dados e tecnologia.</span>
        </div>
      </footer>
    </>
  );
}
