'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

export function SiteNavLink({ href, children, className = 'it-nav-link' }: { href: string; children: React.ReactNode; className?: string }) {
  const pathname = usePathname();
  const route = href.split('#')[0] || '/';
  const isCurrent = route !== '/' && pathname.startsWith(route);
  const classes = [className, isCurrent ? 'is-current' : ''].filter(Boolean).join(' ');

  return <Link className={classes} href={href} aria-current={isCurrent ? 'page' : undefined}>{children}</Link>;
}

export function HeaderScrollState() {
  useEffect(() => {
    const header = document.querySelector<HTMLElement>('.it-header');
    if (!header) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      header.toggleAttribute('data-scrolled', window.scrollY > 12);
    };
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}

export function MobileMenu({ contactHref }: { contactHref: string }) {
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const summaryRef = useRef<HTMLElement>(null);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== 'Escape' || !detailsRef.current?.open) return;
      detailsRef.current.open = false;
      setOpen(false);
      summaryRef.current?.focus();
    };

    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);

  const closeMenu = () => {
    if (detailsRef.current) detailsRef.current.open = false;
    setOpen(false);
  };
  const isCurrent = (href: string) => {
    const route = href.split('#')[0] || '/';
    return route !== '/' && pathname.startsWith(route);
  };
  const mobileLink = (href: string, label: string) => (
    <Link href={href} onClick={closeMenu} className={isCurrent(href) ? 'is-current' : undefined} aria-current={isCurrent(href) ? 'page' : undefined}>{label}</Link>
  );

  return (
    <details ref={detailsRef} className="it-mobile-menu" onToggle={(event) => setOpen(event.currentTarget.open)}>
      <summary ref={summaryRef} aria-expanded={open} aria-controls="it-mobile-navigation">
        <span className="it-menu-icon" aria-hidden="true"><i /><i /></span>
        <span className="sr-only">Abrir menu</span>
      </summary>
      <nav id="it-mobile-navigation" aria-label="Navegação móvel">
        {mobileLink('/#cursos', 'Formação')}
        {mobileLink('/#ferramentas', 'Ferramentas')}
        {mobileLink('/#conteudos', 'Conteúdos')}
        {mobileLink('/blog', 'Blog')}
        {mobileLink('/#suporte', 'Suporte')}
        {mobileLink('/planos', 'Ver formatos')}
        <a className="it-mobile-contact" href={contactHref} target="_blank" rel="noreferrer" onClick={closeMenu}>
          Quero começar <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </details>
  );
}
