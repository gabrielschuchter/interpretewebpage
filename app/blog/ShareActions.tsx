'use client';

import { useState } from 'react';
import { absoluteUrl } from '../../lib/site';

async function copyToClipboard(value: string) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(value);
    return;
  }

  const textarea = document.createElement('textarea');
  textarea.value = value;
  textarea.setAttribute('readonly', '');
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.append(textarea);
  textarea.select();
  const copied = document.execCommand('copy');
  textarea.remove();
  if (!copied) throw new Error('O navegador não permitiu copiar o link.');
}
export function ShareActions({ slug, title, summary }: { slug: string; title: string; summary: string }) {
  const [status, setStatus] = useState('');
  const fallbackUrl = absoluteUrl('/blog/' + slug);

  const copyLink = async () => {
    try {
      await copyToClipboard(window.location.href || fallbackUrl);
      setStatus('Link copiado para a área de transferência.');
    } catch {
      setStatus('Não foi possível copiar o link neste navegador.');
    }
  };

  const share = async () => {
    if (!navigator.share) {
      await copyLink();
      return;
    }

    try {
      await navigator.share({
        title,
        text: summary,
        url: window.location.href || fallbackUrl,
      });
      setStatus('Compartilhamento concluído.');
    } catch (error) {
      if (error instanceof DOMException && error.name === 'AbortError') return;
      await copyLink();
    }
  };

  return (
    <div className="blog-share" aria-label="Compartilhar conteúdo">
      <span>Compartilhar</span>
      <div className="blog-share-actions">
        <button type="button" onClick={() => void share()}>
          <span aria-hidden="true">↗</span> Compartilhar
        </button>
        <button type="button" onClick={() => void copyLink()}>
          <span aria-hidden="true">□</span> Copiar link
        </button>
      </div>
      <span className="sr-only" aria-live="polite">{status}</span>
    </div>
  );
}
