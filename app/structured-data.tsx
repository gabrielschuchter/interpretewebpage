import { absoluteUrl, SITE_URL } from '../lib/site';

const siteDescription = 'Formação acompanhada em Prática Baseada em Evidências, leitura crítica e aplicação de resultados.';

export function SiteStructuredData() {
  const structuredData = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': absoluteUrl('/#organization'),
        name: 'Interprete.',
        url: SITE_URL,
        logo: absoluteUrl('/brand/favicon/favicon-512.png'),
        description: siteDescription,
      },
      {
        '@type': 'WebSite',
        '@id': absoluteUrl('/#website'),
        name: 'Interprete.',
        url: SITE_URL,
        inLanguage: 'pt-BR',
        publisher: { '@id': absoluteUrl('/#organization') },
      },
    ],
  }).replace(/</g, '\\u003c');

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: structuredData }} />;
}
