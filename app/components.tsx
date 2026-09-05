import Image from 'next/image';
import Link from 'next/link';
import { CONTACT_MESSAGE, contactUrl } from '../lib/contact';
import { MobileMenu, SiteNavLink } from './interactive';

export function Header() {
  const contactHref = contactUrl();

  return (
    <header className="it-header">
      <div className="it-header-shell">
        <Link className="it-wordmark" href="/" aria-label="Interprete., voltar ao início">
          <Image className="it-wordmark-image" src="/brand/svg/wordmark-amaranto.svg" alt="Interprete." width={240} height={44} priority />
        </Link>
        <nav className="it-desktop-nav" aria-label="Navegação principal">
          <SiteNavLink href="/#cursos">Formação</SiteNavLink>
          <SiteNavLink href="/#ferramentas">Ferramentas</SiteNavLink>
          <SiteNavLink href="/#conteudos">Conteúdos</SiteNavLink>
          <SiteNavLink href="/blog">Blog</SiteNavLink>
          <SiteNavLink href="/#suporte">Suporte</SiteNavLink>
        </nav>
        <div className="it-header-actions">
          <SiteNavLink href="/planos" className="it-header-secondary">Ver formatos</SiteNavLink>
          <a className="it-header-primary" href={contactHref} target="_blank" rel="noreferrer">
            Quero começar <span aria-hidden="true">↗</span>
          </a>
        </div>
        <MobileMenu contactHref={contactHref} />
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="it-footer">
      <div className="it-container it-footer-grid">
        <div className="it-footer-brand">
          <Link className="it-wordmark" href="/" aria-label="Interprete., voltar ao início">
            <Image className="it-wordmark-image" src="/brand/svg/wordmark-creme.svg" alt="Interprete." width={240} height={44} />
          </Link>
          <p>Uma escola de prática baseada em evidências para profissionais de saúde.</p>
        </div>
        <nav className="it-footer-column" aria-label="Plataforma">
          <strong>Plataforma</strong>
          <Link href="/#ferramentas">Ferramentas</Link>
          <Link href="/#cursos">Formação</Link>
          <Link href="/#suporte">Suporte</Link>
          <Link href="/blog">Blog</Link>
        </nav>
        <nav className="it-footer-column" aria-label="Institucional">
          <strong>Institucional</strong>
          <Link href="/sobre">Sobre o Interprete.</Link>
          <Link href="/planos">Formatos</Link>
          <Link href="/#faq">Perguntas frequentes</Link>
          <a href={contactUrl()} target="_blank" rel="noreferrer">WhatsApp <span aria-hidden="true">↗</span></a>
        </nav>
        <div className="it-footer-next">
          <span>Próximo passo</span>
          <a href={contactUrl(CONTACT_MESSAGE)} target="_blank" rel="noreferrer">
            Conversar sobre o Interprete. <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
      <div className="it-container it-footer-bottom">
        <small>© {new Date().getFullYear()} Interprete. Todos os direitos reservados.</small>
        <span>Não aceite a evidência. Interprete.</span>
      </div>
      <a className="it-whatsapp" href={contactUrl()} target="_blank" rel="noreferrer" aria-label="Conversar com o Interprete. pelo WhatsApp">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 3.5A11.84 11.84 0 0 0 12.08 0C5.55 0 .24 5.31.24 11.84c0 2.09.55 4.13 1.6 5.93L.14 24l6.38-1.67a11.85 11.85 0 0 0 5.56 1.41h.01c6.53 0 11.84-5.31 11.84-11.84 0-3.17-1.23-6.15-3.43-8.4Zm-8.42 18.25h-.01a9.85 9.85 0 0 1-5.02-1.38l-.36-.21-3.79.99 1.01-3.7-.23-.38a9.83 9.83 0 1 1 8.4 4.68Zm5.4-7.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.51-1.78-1.69-2.08-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.5s1.07 2.9 1.22 3.1c.15.2 2.1 3.2 5.08 4.49.71.31 1.27.5 1.7.64.72.23 1.37.2 1.89.12.58-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z" /></svg>
      </a>
    </footer>
  );
}

export function Button({
  href,
  children,
  secondary = false,
  className = '',
}: {
  href: string;
  children: React.ReactNode;
  secondary?: boolean;
  className?: string;
}) {
  const classes = ['it-button', secondary ? 'it-button--secondary' : '', className].filter(Boolean).join(' ');
  const external = href.startsWith('http');

  if (external) {
    return <a className={classes} href={href} target="_blank" rel="noreferrer">{children}<span aria-hidden="true">↗</span></a>;
  }

  return <Link className={classes} href={href}>{children}<span aria-hidden="true">↗</span></Link>;
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="it-section-label">{children}</p>;
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return <div data-theme="interprete">{children}</div>;
}
