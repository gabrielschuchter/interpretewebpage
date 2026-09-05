import type { Metadata } from 'next';
import Link from 'next/link';
import { Footer, Header, PageShell, SectionLabel } from './components';

export const metadata: Metadata = {
  title: 'Página não encontrada',
  description: 'A página que você tentou acessar não existe no Interprete.',
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: '/404',
  },
};

export default function NotFound() {
  return (
    <PageShell>
      <Header />
      <main className="not-found">
        <SectionLabel>404 / conteúdo não encontrado</SectionLabel>
        <h1>Este caminho não existe.</h1>
        <p>A página que você procura pode ter sido movida. Volte ao início ou continue pelo arquivo editorial.</p>
        <div className="actions">
          <Link className="it-button" href="/">Voltar ao início <span aria-hidden="true">↗</span></Link>
          <Link className="it-button it-button--secondary" href="/blog">Abrir o blog <span aria-hidden="true">↗</span></Link>
        </div>
      </main>
      <Footer />
    </PageShell>
  );
}
