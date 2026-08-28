'use client';

import Link from 'next/link';
import { useRef, useState } from 'react';

export function MobileMenu({ contactHref }: { contactHref: string }) {
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const summaryRef = useRef<HTMLElement>(null);
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    if (detailsRef.current) detailsRef.current.open = false;
    setOpen(false);
  };

  return (
    <details
      ref={detailsRef}
      className="mobile-menu"
      onToggle={(event) => setOpen(event.currentTarget.open)}
      onKeyDown={(event) => {
        if (event.key === 'Escape' && detailsRef.current?.open) {
          event.preventDefault();
          closeMenu();
          summaryRef.current?.focus();
        }
      }}
    >
      <summary ref={summaryRef} aria-expanded={open} aria-controls="mobile-navigation">
        Menu
      </summary>
      <nav id="mobile-navigation" aria-label="Navegação móvel">
        <Link href="/#como-funciona" onClick={closeMenu}>Como funciona</Link>
        <Link href="/#formatos" onClick={closeMenu}>Formatos</Link>
        <Link href="/blog" onClick={closeMenu}>Blog</Link>
        <a className="mobile-contact" href={contactHref} target="_blank" rel="noreferrer" onClick={closeMenu}>
          Conversa inicial <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </details>
  );
}
