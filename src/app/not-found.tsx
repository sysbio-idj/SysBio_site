import Link from "next/link";
import { Logo } from "@/components/icon";

export default function NotFound() {
  return (
    <main className="not-found container">
      <Logo />
      <p className="eyebrow">PÁGINA NÃO ENCONTRADA</p>
      <h1>
        Vamos encontrar
        <br />
        outro caminho.
      </h1>
      <p>
        Esta página não está disponível. Explore as soluções e a expertise da
        SysBio.
      </p>
      <Link href="/" className="button button-primary">
        Voltar ao início →
      </Link>
    </main>
  );
}
