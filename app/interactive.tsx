'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export function MobileMenu({ contactHref }: { contactHref: string }) {
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const summaryRef = useRef<HTMLElement>(null);
  const [open, setOpen] = useState(false);

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

  return (
    <details
      ref={detailsRef}
      className="academy-mobile-menu"
      onToggle={(event) => setOpen(event.currentTarget.open)}
    >
      <summary ref={summaryRef} aria-expanded={open} aria-controls="academy-mobile-navigation">
        <span className="academy-menu-icon" aria-hidden="true"><i /><i /><i /></span>
        <span className="sr-only">Abrir menu</span>
      </summary>
      <nav id="academy-mobile-navigation" aria-label="Navegação móvel">
        <Link href="/#cursos" onClick={closeMenu}>Formação</Link>
        <Link href="/#ferramentas" onClick={closeMenu}>Ferramentas</Link>
        <Link href="/#conteudos" onClick={closeMenu}>Conteúdos</Link>
        <Link href="/blog" onClick={closeMenu}>Blog</Link>
        <Link href="/#suporte" onClick={closeMenu}>Suporte</Link>
        <Link href="/planos" onClick={closeMenu}>Ver formatos</Link>
        <a className="academy-mobile-contact" href={contactHref} target="_blank" rel="noreferrer" onClick={closeMenu}>
          Quero começar <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </details>
  );
}
