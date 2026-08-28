import type { Metadata, Viewport } from 'next';
import { absoluteUrl, SITE_URL } from '../lib/site';
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
  icons: { icon: '/favicon.svg' },
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
  themeColor: '#041325',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
