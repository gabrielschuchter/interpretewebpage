import type { Metadata } from 'next';
import { Footer, Header, PageShell } from '../components';
import { getPublicArticles, toBrowserArticle } from '../../lib/blog/content';
import { BlogIndexClient } from './BlogIndexClient';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Conteúdos do Interprete. sobre Prática Baseada em Evidências, leitura crítica e decisões aplicáveis.',
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'Blog | Interprete.',
    description: 'Conteúdos do Interprete. sobre Prática Baseada em Evidências, leitura crítica e decisões aplicáveis.',
    url: '/blog',
    type: 'website',
  },
};

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
