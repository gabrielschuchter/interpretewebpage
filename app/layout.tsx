import type { Metadata } from 'next';
import { Atkinson_Hyperlegible_Next, IBM_Plex_Mono, Literata } from 'next/font/google';
import './tokens.css';
import './globals.css';
import './hero-overrides.css';
import './mobile-fixes.css';
import './entry-selection.css';
import './design-system-bridge.css';
import './typography.css';
export const metadata: Metadata = { title: 'Gabriel Schuchter — Nutrição, ensino e ciência', description: 'Acompanhamento nutricional e orientação individual em Prática Baseada em Evidências.', metadataBase: new URL('https://gabrielschuchter.com.br'), icons: { icon: '/favicon.svg' }, openGraph: { title: 'Gabriel Schuchter — Nutrição, ensino e ciência', description: 'Acompanhamento nutricional e orientação individual em Prática Baseada em Evidências.', url: 'https://gabrielschuchter.com.br', siteName: 'Gabriel Schuchter', locale: 'pt_BR', type: 'website' }, twitter: { card: 'summary_large_image', title: 'Gabriel Schuchter', description: 'Nutrição, ensino e ciência aplicados a trajetórias reais.' } };
const display = Literata({
  weight: 'variable',
  style: ['normal', 'italic'],
  subsets: ['latin', 'latin-ext'],
  axes: ['opsz'],
  variable: '--font-literata',
  display: 'swap',
  fallback: ['Iowan Old Style', 'Palatino Linotype', 'Georgia', 'serif'],
});
const body = Atkinson_Hyperlegible_Next({
  weight: 'variable',
  style: ['normal', 'italic'],
  subsets: ['latin', 'latin-ext'],
  variable: '--font-atkinson',
  display: 'swap',
  fallback: ['Segoe UI', 'Arial', 'sans-serif'],
});
const mono = IBM_Plex_Mono({
  weight: ['500'],
  style: 'normal',
  subsets: ['latin', 'latin-ext'],
  variable: '--font-plex-mono',
  display: 'swap',
  preload: false,
  fallback: ['SFMono-Regular', 'Consolas', 'monospace'],
});

export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="pt-BR" className={`${display.variable} ${body.variable} ${mono.variable}`}><body>{children}</body></html>; }
