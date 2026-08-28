import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Footer, Header, PageShell } from '../../components';
import { getArticleBySlug, getPublicArticles, getRelatedArticles } from '../../../lib/blog/content';
import { BLOG_CATEGORY_LABELS, BLOG_TYPE_LABELS } from '../../../lib/blog/constants';
import { formatBlogDate, getEventDetailsLabel, getReadingTimeLabel } from '../../../lib/blog/format';
import { absoluteUrl } from '../../../lib/site';
import { BlogCard, BlogCover } from '../BlogCard';
import { MarkdownArticle } from '../MarkdownArticle';
import { ShareActions } from '../ShareActions';

export const dynamicParams = false;

type BlogArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getPublicArticles().map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: BlogArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: 'Conteúdo não encontrado',
      description: 'Este conteúdo não está disponível.',
      robots: {
        index: false,
        follow: true,
      },
      alternates: {
        canonical: '/blog',
      },
    };
  }

  const imageUrl = absoluteUrl(article.coverImage ?? '/og-interprete.svg');

  return {
    title: article.title,
    description: article.summary,
    alternates: {
      canonical: '/blog/' + article.slug,
    },
    openGraph: {
      title: article.title + ' | Interprete.',
      description: article.summary,
      url: '/blog/' + article.slug,
      type: 'article',
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt ?? article.publishedAt,
      authors: [article.author],
      images: [{
        url: imageUrl,
        alt: article.coverAlt ?? 'Interprete.',
      }],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title + ' | Interprete.',
      description: article.summary,
      images: [imageUrl],
    },
  };
}

function ArticleStructuredData({ article }: { article: NonNullable<ReturnType<typeof getArticleBySlug>> }) {
  const canonicalUrl = absoluteUrl('/blog/' + article.slug);
  const imageUrl = absoluteUrl(article.coverImage ?? '/og-interprete.svg');
  const structuredData = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonicalUrl,
    },
    headline: article.title,
    description: article.summary,
    image: [imageUrl],
    author: {
      '@type': 'Organization',
      name: article.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Interprete.',
      logo: {
        '@type': 'ImageObject',
        url: absoluteUrl('/favicon.svg'),
      },
    },
    datePublished: article.publishedAt,
    dateModified: article.updatedAt ?? article.publishedAt,
  }).replace(/</g, '\\u003c');

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: structuredData }} />;
}

export default async function BlogArticlePage({ params }: BlogArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) notFound();

  const relatedArticles = getRelatedArticles(article);
  const eventDetails = getEventDetailsLabel(article);
  const externalCta = article.callToAction?.url.startsWith('http');

  return (
    <PageShell>
      <Header />
      <main className="blog-article-page">
        <ArticleStructuredData article={article} />
        <article>
          <header className="blog-article-hero">
            <div className="page-width page-width--narrow">
              <nav className="blog-breadcrumb" aria-label="Caminho de navegação">
                <a href="/blog">Blog</a>
                <span aria-hidden="true">/</span>
                <span aria-current="page">{BLOG_CATEGORY_LABELS[article.category]}</span>
              </nav>
              <div className="blog-card-labels">
                <span>{BLOG_TYPE_LABELS[article.type]}</span>
                <span>{BLOG_CATEGORY_LABELS[article.category]}</span>
              </div>
              {eventDetails && <p className="blog-event-details"><span>Evento</span>{eventDetails}</p>}
              <h1>{article.title}</h1>
              <p className="blog-article-summary">{article.summary}</p>
              <div className="blog-article-meta">
                <span>Por {article.author}</span>
                <span aria-hidden="true">•</span>
                <time dateTime={article.publishedAt}>Publicado em {formatBlogDate(article.publishedAt)}</time>
                {article.updatedAt && <><span aria-hidden="true">•</span><time dateTime={article.updatedAt}>Atualizado em {formatBlogDate(article.updatedAt)}</time></>}
                <span aria-hidden="true">•</span>
                <span>{getReadingTimeLabel(article)}</span>
              </div>
            </div>
          </header>

          <div className="page-width page-width--narrow">
            <figure className="blog-article-cover">
              <BlogCover article={article} featured />
            </figure>
            <div className="blog-article-layout">
              <ShareActions slug={article.slug} title={article.title} summary={article.summary} />
              <MarkdownArticle content={article.content} />
            </div>

            {article.references.length > 0 && (
              <section className="blog-references" aria-labelledby="references-title">
                <p className="section-label">Referências</p>
                <h2 id="references-title">Para aprofundar a leitura</h2>
                <ol>
                  {article.references.map((reference) => (
                    <li key={reference.url}><a href={reference.url} target="_blank" rel="noreferrer">{reference.citation}</a></li>
                  ))}
                </ol>
              </section>
            )}

            {article.callToAction && (
              <aside className="blog-editorial-cta" aria-label="Próximo passo deste conteúdo">
                <div>
                  <p>Próximo passo</p>
                  <h2>{article.callToAction.label}</h2>
                </div>
                <a className="button" href={article.callToAction.url} target={externalCta ? '_blank' : undefined} rel={externalCta ? 'noreferrer' : undefined}>
                  Acessar <span aria-hidden="true">↗</span>
                </a>
              </aside>
            )}

            <aside className="blog-cta" aria-label="Conheça o Interprete.">
              <div>
                <p>Continue praticando</p>
                <h2>Transforme uma leitura importante em uma rota de estudo.</h2>
              </div>
              <a className="button" href="/#formatos">Ver formatos <span aria-hidden="true">↗</span></a>
            </aside>
          </div>
        </article>

        {relatedArticles.length > 0 && (
          <section className="blog-related" aria-labelledby="related-title">
            <div className="page-width">
              <div className="blog-section-heading">
                <p>Continue por aqui</p>
                <h2 id="related-title">Conteúdos relacionados</h2>
              </div>
              <div className="blog-grid">
                {relatedArticles.map((relatedArticle) => <BlogCard key={relatedArticle.slug} article={relatedArticle} />)}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </PageShell>
  );
}
