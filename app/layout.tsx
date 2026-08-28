import type { Metadata, Viewport } from 'next';
import { Atkinson_Hyperlegible_Next, IBM_Plex_Mono, Literata } from 'next/font/google';
import { absoluteUrl, SITE_URL } from '../lib/site';
import './tokens.css';
import './globals.css';

const siteTitle = 'Interprete. — Prática Baseada em Evidências';
const siteDescription = 'Mentorias particulares para interpretar evidências, construir raciocínio e aplicar conhecimento com mais autonomia.';

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

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: siteTitle,
    template: '%s | Interprete.',
  },
  description: siteDescription,
  applicationName: 'Interprete.',
  publisher: 'Interprete.',
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: SITE_URL,
    siteName: 'Interprete.',
    locale: 'pt_BR',
    type: 'website',
    images: [{
      url: absoluteUrl('/og-interprete.svg'),
      width: 1200,
      height: 630,
      alt: 'Interprete.',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: [absoluteUrl('/og-interprete.svg')],
  },
};

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f4ede1',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={display.variable + ' ' + body.variable + ' ' + mono.variable}>
      <body>{children}</body>
    </html>
  );
}
