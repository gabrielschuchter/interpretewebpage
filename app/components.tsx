import Image from 'next/image';
import Link from 'next/link';
import { CONTACT_MESSAGE, contactUrl } from '../lib/contact';
import { HeaderScrollState, MobileMenu, SiteNavLink } from './interactive';
import { StudyIcon } from './visuals';

export function Header() {
  const contactHref = contactUrl();

  return (
    <header className="it-header">
      <HeaderScrollState />
      <div className="it-header-shell">
        <Link className="it-wordmark" href="/" aria-label="Interprete., voltar ao início">
          <Image className="it-wordmark-image" src="/brand/svg/wordmark-amaranto.svg" alt="Interprete." width={240} height={44} priority />
        </Link>
        <nav className="it-desktop-nav" aria-label="Navegação principal">
          <SiteNavLink href="/#metodo">A escola</SiteNavLink>
          <SiteNavLink href="/#ferramentas">Ferramentas</SiteNavLink>
          <SiteNavLink href="/#cursos">Percurso</SiteNavLink>
          <SiteNavLink href="/blog">Cadernos</SiteNavLink>
          <SiteNavLink href="/sobre">Sobre</SiteNavLink>
        </nav>
        <div className="it-header-actions">
          <SiteNavLink href="/planos" className="it-header-secondary">Formatos</SiteNavLink>
          <a className="it-header-primary" href={contactHref} target="_blank" rel="noreferrer">
            Começar <StudyIcon name="arrow" size={17} />
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
          <p>Uma escola para profissionais de saúde que querem ler, perguntar e decidir com mais critério.</p>
        </div>
        <nav className="it-footer-column" aria-label="Estudo">
          <strong>Estudo</strong>
          <Link href="/#metodo">A escola</Link>
          <Link href="/#ferramentas">Ferramentas</Link>
          <Link href="/#cursos">Percurso</Link>
          <Link href="/blog">Cadernos</Link>
        </nav>
        <nav className="it-footer-column" aria-label="Institucional">
          <strong>Institucional</strong>
          <Link href="/sobre">Sobre o Interprete.</Link>
          <Link href="/planos">Formatos</Link>
          <Link href="/#faq">Perguntas frequentes</Link>
          <a href={contactUrl()} target="_blank" rel="noreferrer">WhatsApp <StudyIcon name="arrow" size={15} /></a>
        </nav>
        <div className="it-footer-next">
          <span>Próximo passo</span>
          <a href={contactUrl(CONTACT_MESSAGE)} target="_blank" rel="noreferrer">
            Conversar sobre o Interprete. <StudyIcon name="arrow" size={17} />
          </a>
        </div>
      </div>
      <div className="it-container it-footer-bottom">
        <small>© {new Date().getFullYear()} Interprete. Todos os direitos reservados.</small>
        <span>Não aceite a evidência. Interprete.</span>
      </div>
      <a className="it-whatsapp" href={contactUrl()} target="_blank" rel="noreferrer" aria-label="Conversar com o Interprete. pelo WhatsApp">
        <StudyIcon name="message" size={23} />
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
    return <a className={classes} href={href} target="_blank" rel="noreferrer">{children}<StudyIcon name="arrow" size={17} /></a>;
  }

  return <Link className={classes} href={href}>{children}<StudyIcon name="arrow" size={17} /></Link>;
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="it-section-label">{children}</p>;
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return <div data-theme="interprete">{children}</div>;
}
