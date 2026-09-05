import type { Metadata } from 'next';
import { Footer, Header, PageShell } from '../components';
import { getPublicArticles, toBrowserArticle } from '../../lib/blog/content';
import { pageMetadata } from '../../lib/seo';
import { BlogIndexClient } from './BlogIndexClient';

export const metadata: Metadata = pageMetadata({
  title: 'Blog',
  description: 'Conteúdos do Interprete. sobre Prática Baseada em Evidências, leitura crítica e decisões aplicáveis.',
  pathname: '/blog',
});

export default function BlogPage() {
  const articles = getPublicArticles();

  return (
    <PageShell>
      <Header />
      <main className="blog-page">
        <BlogIndexClient articles={articles.map(toBrowserArticle)} />
      </main>
      <Footer />
    </PageShell>
  );
}
