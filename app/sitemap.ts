import type { MetadataRoute } from 'next';
import { getPublicArticles } from '../lib/blog/content';
import { absoluteUrl } from '../lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const articles = getPublicArticles();

  return [
    {
      url: absoluteUrl('/'),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: absoluteUrl('/blog'),
      lastModified: articles[0] ? new Date(articles[0].updatedAt ?? articles[0].publishedAt) : new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: absoluteUrl('/planos'),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: absoluteUrl('/sobre'),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    ...articles.map((article) => ({
      url: absoluteUrl('/blog/' + article.slug),
      lastModified: new Date(article.updatedAt ?? article.publishedAt),
      changeFrequency: 'monthly' as const,
      priority: article.featured ? 0.8 : 0.6,
    })),
  ];
}
