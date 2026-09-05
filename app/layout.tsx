import type { Metadata, Viewport } from 'next';
import { absoluteUrl, SITE_URL } from '../lib/site';
import { brand } from '../lib/design-system';
import { SiteStructuredData } from './structured-data';
import './tokens.css';
import './globals.css';

const siteTitle = 'Interprete. — Prática Baseada em Evidências';
const siteDescription = 'Formação acompanhada em Prática Baseada em Evidências, leitura crítica e aplicação de resultados.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: siteTitle,
    template: '%s | Interprete.',
  },
  description: siteDescription,
  applicationName: 'Interprete.',
  publisher: 'Interprete.',
  alternates: { canonical: '/' },
  icons: { icon: '/brand/favicon/favicon-32.png' },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: SITE_URL,
    siteName: 'Interprete.',
    locale: 'pt_BR',
    type: 'website',
    images: [{ url: absoluteUrl('/og-interprete.svg'), width: 1200, height: 630, alt: 'Interprete.' }],
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
  themeColor: brand.colors.pinkEssence,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body><SiteStructuredData />{children}</body>
    </html>
  );
}
