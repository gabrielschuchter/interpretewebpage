import type { Metadata } from 'next';
import { Manrope, Newsreader } from 'next/font/google';
import './tokens.css';
import './globals.css';
import './hero-overrides.css';
import './mobile-fixes.css';
import './entry-selection.css';
import './design-system-bridge.css';
export const metadata: Metadata = { title: 'Gabriel Schuchter — Nutrição, ensino e ciência', description: 'Acompanhamento nutricional e orientação individual em Prática Baseada em Evidências.', metadataBase: new URL('https://gabrielschuchter.com.br'), icons: { icon: '/favicon.svg' }, openGraph: { title: 'Gabriel Schuchter — Nutrição, ensino e ciência', description: 'Acompanhamento nutricional e orientação individual em Prática Baseada em Evidências.', url: 'https://gabrielschuchter.com.br', siteName: 'Gabriel Schuchter', locale: 'pt_BR', type: 'website' }, twitter: { card: 'summary_large_image', title: 'Gabriel Schuchter', description: 'Nutrição, ensino e ciência aplicados a trajetórias reais.' } };
const serif = Newsreader({ weight: ['400', '500', '600'], subsets: ['latin'], display: 'swap' });
const sans = Manrope({ weight: ['400', '500', '600', '700'], subsets: ['latin'], display: 'swap' });
const fontStyle = { '--gs-font-display': serif.style.fontFamily, '--gs-font-body': sans.style.fontFamily, '--serif': 'var(--gs-font-display)', '--sans': 'var(--gs-font-body)' } as React.CSSProperties;

export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="pt-BR"><body style={fontStyle}>{children}</body></html>; }
