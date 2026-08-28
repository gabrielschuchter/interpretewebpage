import Link from 'next/link';
import { CONTACT_MESSAGE, contactUrl } from '../lib/contact';
import { MobileMenu } from './interactive';

export function Header() {
  const contactHref = contactUrl();

  return (
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="Interprete., voltar ao início">
        Interprete<span>.</span>
      </Link>
      <MobileMenu contactHref={contactHref} />
      <nav className="desktop-nav" aria-label="Navegação principal">
        <Link href="/#como-funciona">Como funciona</Link>
        <Link href="/#formatos">Formatos</Link>
        <Link href="/blog">Blog</Link>
      </nav>
      <a className="header-cta" href={contactHref} target="_blank" rel="noreferrer">
        Conversa inicial <span aria-hidden="true">↗</span>
      </a>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div>
          <Link className="wordmark" href="/" aria-label="Interprete., voltar ao início">
            Interprete<span>.</span>
          </Link>
          <p className="footer-description">Leitura crítica e aplicação de evidências para decisões mais conscientes.</p>
        </div>
        <nav className="footer-links" aria-label="Navegação do rodapé">
          <Link href="/">Início</Link>
          <Link href="/#como-funciona">Como funciona</Link>
          <Link href="/#formatos">Formatos</Link>
          <Link href="/blog">Blog</Link>
          <a href={contactUrl()} target="_blank" rel="noreferrer">WhatsApp <span aria-hidden="true">↗</span></a>
        </nav>
        <div className="footer-contact">
          <span className="footer-label">Conversa inicial</span>
          <a className="footer-contact-link" href={contactUrl(CONTACT_MESSAGE)} target="_blank" rel="noreferrer">Entender o próximo passo <span aria-hidden="true">↗</span></a>
        </div>
      </div>
      <div className="footer-bottom">
        <small>© {new Date().getFullYear()} Interprete. Todos os direitos reservados.</small>
        <span className="footer-coordinate" aria-hidden="true">LEIA / APLIQUE</span>
      </div>
    </footer>
  );
}

export function Button({
  href,
  children,
  secondary = false,
}: {
  href: string;
  children: React.ReactNode;
  secondary?: boolean;
}) {
  const external = href.startsWith('http');

  if (external) {
    return (
      <a className={secondary ? 'button button-secondary' : 'button'} href={href} target="_blank" rel="noreferrer">
        {children} <span aria-hidden="true">↗</span>
      </a>
    );
  }

  return (
    <Link className={secondary ? 'button button-secondary' : 'button'} href={href}>
      {children} <span aria-hidden="true">↗</span>
    </Link>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="section-label">{children}</p>;
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return <div data-theme="interprete">{children}</div>;
}
