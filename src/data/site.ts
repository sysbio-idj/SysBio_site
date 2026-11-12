// Edite aqui os textos institucionais, canais e catálogo.
export const site = {
  name: "SysBio",
  email: "sysbio.idj@gmail.com",
  description:
    "Consultoria em bioinformática, multiômicas, bioestatística e wet lab. Integramos ciência, dados e tecnologia para transformar perguntas em resultados.",
  navigation: [
    { label: "Ferramentas", href: "#ferramentas" },
    { label: "Expertise", href: "#expertise" },
    { label: "Soluções", href: "#solucoes" },
    { label: "Sobre", href: "#sobre" },
  ],
  hero: {
    eyebrow: "CIÊNCIA CONECTADA À SUA PESQUISA",
    title: "Ciência, dados e tecnologia.",
    accent: "Soluções para sua pesquisa.",
    description:
      "Da pergunta científica à interpretação dos dados. Integramos bioinformática, estatística e laboratório para dar clareza ao próximo passo da sua pesquisa.",
    primary: "Explorar ferramentas",
    secondary: "Solicitar consultoria",
    note: "Rigor científico. Tecnologia acessível. Soluções sob medida.",
  },
  tools: {
    eyebrow: "01 / FERRAMENTAS",
    title: "Menos barreiras. Mais descobertas.",
    description:
      "Um espaço para simplificar análises do dia a dia, com ferramentas online gratuitas ou de baixo custo.",
    placeholder: "Buscar uma ferramenta ou análise…",
    emptyTitle: "O próximo passo está em construção.",
    emptyDescription:
      "Estamos preparando o catálogo de ferramentas da SysBio. Enquanto isso, conte com nossa expertise para encontrar uma solução para sua análise.",
    emptyCta: "Conversar sobre uma análise",
  },
  expertise: {
    eyebrow: "02 / EXPERTISE",
    title: "Diferentes especialidades.\nUma visão integrada.",
    description:
      "Conectamos métodos, escalas e tecnologias para responder à sua pergunta científica com contexto e precisão.",
    items: [
      {
        title: "Transcriptômica",
        description:
          "Expressão gênica, análise diferencial e interpretação funcional.",
        icon: "dna",
      },
      {
        title: "Single-cell",
        description:
          "Heterogeneidade celular, populações e estados biológicos.",
        icon: "cells",
      },
      {
        title: "Multiômicas",
        description:
          "Conexões entre camadas moleculares e processos biológicos.",
        icon: "layers",
      },
      {
        title: "Bioestatística",
        description:
          "Desenho de análises, testes e modelos alinhados à hipótese.",
        icon: "chart",
      },
      {
        title: "Citometria",
        description:
          "Estratégias de análise e caracterização de populações celulares.",
        icon: "dots",
      },
      {
        title: "Biologia molecular",
        description:
          "Estratégias experimentais para investigar mecanismos biológicos.",
        icon: "molecule",
      },
      {
        title: "Wet lab",
        description:
          "Planejamento de experimentos e apoio à execução laboratorial.",
        icon: "flask",
      },
      {
        title: "Integração de dados",
        description:
          "Dados de diferentes fontes em uma interpretação consistente.",
        icon: "network",
      },
    ],
  },
  solutions: {
    eyebrow: "03 / SOLUÇÕES",
    title: "Sua pergunta define\no caminho.",
    description:
      "Uma análise pontual ou um fluxo completo de pesquisa. Construímos a solução a partir do que seu projeto precisa.",
    items: [
      {
        title: "Consultoria científica",
        description:
          "Do planejamento experimental à interpretação de resultados, com orientação metodológica em cada etapa.",
        tag: "ESTRATÉGIA & ANÁLISE",
      },
      {
        title: "Pipelines e automações",
        description:
          "Fluxos em R e Python para organizar dados, reduzir tarefas manuais e tornar análises reprodutíveis.",
        tag: "R & PYTHON",
      },
      {
        title: "Dashboards e ferramentas",
        description:
          "Interfaces e aplicações analíticas personalizadas para explorar dados e apoiar decisões científicas.",
        tag: "DESENVOLVIMENTO SOB MEDIDA",
      },
    ],
  },
  about: {
    eyebrow: "04 / SOBRE A SYSBIO",
    title: "Ciência rigorosa.\nAcesso descomplicado.",
    description:
      "A SysBio conecta ciência e tecnologia para tornar análises mais acessíveis. Reunimos bioinformática, bioestatística e conhecimento experimental em soluções que fazem sentido para cada pesquisa.",
    mission:
      "Nossa proposta é simples: democratizar o acesso a ferramentas analíticas e oferecer acompanhamento especializado quando a pergunta exige um olhar mais profundo.",
    values: [
      "Rigor metodológico",
      "Reprodutibilidade",
      "Clareza em cada etapa",
    ],
  },
  contact: {
    eyebrow: "VAMOS CONVERSAR",
    title: "Qual é a próxima pergunta\nda sua pesquisa?",
    description:
      "Conte o que você precisa investigar. Vamos entender o contexto e pensar nos próximos passos com você.",
    cta: "Solicitar consultoria",
    note: "Para começar, compartilhe seu objetivo, tipo de dado e etapa atual do projeto. Não envie dados sensíveis no primeiro contato.",
  },
};

export const categories = [
  "Todas",
  "Bioinformática",
  "Estatística",
  "Visualização",
  "Planejamento experimental",
] as const;
export type Tool = {
  id: string;
  name: string;
  description: string;
  category: Exclude<(typeof categories)[number], "Todas">;
  access: "Gratuito" | "Pago";
  href: string;
  tags?: string[];
};

// Inclua apenas ferramentas reais e publicadas. href pode ser uma rota local ou URL HTTPS.
export const tools: Tool[] = [];

export function consultationHref(subject = "Consultoria científica | SysBio") {
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}`;
}
