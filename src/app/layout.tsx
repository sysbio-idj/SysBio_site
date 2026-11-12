import type { Metadata, Viewport } from "next";
import { site } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  title: "SysBio | Ciência, dados e tecnologia para sua pesquisa",
  description: site.description,
  applicationName: site.name,
  openGraph: {
    title: "SysBio | Soluções para sua pesquisa",
    description: site.description,
    locale: "pt_BR",
    type: "website",
    siteName: site.name,
  },
  twitter: {
    card: "summary",
    title: "SysBio | Soluções para sua pesquisa",
    description: site.description,
  },
  robots: { index: true, follow: true },
};
export const viewport: Viewport = { themeColor: "#ffffff" };

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        <a href="#conteudo" className="skip-link">
          Pular para o conteúdo
        </a>
        {children}
      </body>
    </html>
  );
}
