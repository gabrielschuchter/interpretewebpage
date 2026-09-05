import type { Metadata } from 'next';
import { absoluteUrl } from './site';

const defaultImage = absoluteUrl('/og-interprete.svg');

export function pageMetadata({
  title,
  description,
  pathname,
  type = 'website',
}: {
  title: string;
  description: string;
  pathname: string;
  type?: 'website' | 'article';
}): Metadata {
  const socialTitle = title + ' | Interprete.';

  return {
    title,
    description,
    alternates: { canonical: pathname },
    openGraph: {
      title: socialTitle,
      description,
      url: absoluteUrl(pathname),
      siteName: 'Interprete.',
      locale: 'pt_BR',
      type,
      images: [{
        url: defaultImage,
        width: 1200,
        height: 630,
        alt: 'Interprete.',
      }],
    },
    twitter: {
      card: 'summary_large_image',
      title: socialTitle,
      description,
      images: [defaultImage],
    },
  };
}
