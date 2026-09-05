import Image from 'next/image';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Footer, Header, PageShell } from '../../components';
import { getArticleBySlug, getPublicArticles, getRelatedArticles } from '../../../lib/blog/content';
import { BLOG_CATEGORY_LABELS, BLOG_TYPE_LABELS } from '../../../lib/blog/constants';
import { formatBlogDate, getEventDetailsLabel, getReadingTimeLabel } from '../../../lib/blog/format';
import { contactUrl } from '../../../lib/contact';
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
    '@graph': [
      {
        '@type': 'BlogPosting',
        '@id': canonicalUrl + '#article',
        url: canonicalUrl,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': canonicalUrl,
        },
        headline: article.title,
        description: article.summary,
        image: [imageUrl],
        articleSection: BLOG_CATEGORY_LABELS[article.category],
        keywords: article.tags,
        inLanguage: 'pt-BR',
        author: {
          '@type': 'Organization',
          name: article.author,
        },
        publisher: {
          '@id': absoluteUrl('/#organization'),
        },
        datePublished: article.publishedAt,
        dateModified: article.updatedAt ?? article.publishedAt,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Blog',
            item: absoluteUrl('/blog'),
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: article.title,
            item: canonicalUrl,
          },
        ],
      },
    ],
  }).replace(/</g, '\\u003c');

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: structuredData }} />;
}

function CitationBlock({ article }: { article: NonNullable<ReturnType<typeof getArticleBySlug>> }) {
  const year = article.publishedAt.slice(0, 4);
  const citation = `${article.author} (${year}). ${article.title}. Interprete. ${absoluteUrl('/blog/' + article.slug)}`;

  return (
    <section className="blog-citation" aria-labelledby="citation-title">
      <div>
        <p className="section-label">Como citar</p>
        <h2 id="citation-title">Leve esta leitura com você.</h2>
      </div>
      <p>{citation}</p>
    </section>
  );
}

function AuthorBlock({ author }: { author: string }) {
  return (
    <aside className="blog-author" aria-label="Autoria institucional">
      <div className="blog-author-mark" aria-hidden="true"><Image src="/brand/svg/simbolo-amaranto.svg" alt="" width={32} height={32} /></div>
      <div>
        <p className="section-label">Autoria institucional</p>
        <h2>{author}</h2>
        <p>Conteúdo editorial do Interprete. sobre leitura crítica, Prática Baseada em Evidências e aplicação à decisão.</p>
      </div>
    </aside>
  );
}

function ArticleSidebar({ articles, category }: { articles: ReturnType<typeof getPublicArticles>; category: string }) {
  const starterArticles = articles.slice(0, 3);

  return (
    <aside className="blog-article-sidebar" aria-label="Navegação editorial">
      <section className="blog-sidebar-block">
        <p className="subsection-label">Curadoria</p>
        <h2>Para começar</h2>
        <nav aria-label="Conteúdos para começar">
          <ol className="starter-list">
            {starterArticles.map((starterArticle, index) => (
              <li key={starterArticle.slug}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <a href={'/blog/' + starterArticle.slug}>{starterArticle.title}</a>
              </li>
            ))}
          </ol>
        </nav>
      </section>
      <section className="blog-sidebar-block">
        <p className="subsection-label">Arquivo</p>
        <h2>{category}</h2>
        <a className="it-inline-link" href="/blog">Ver todos os conteúdos <span aria-hidden="true">→</span></a>
      </section>
      <section className="blog-sidebar-cta">
        <p className="subsection-label">Estudo acompanhado</p>
        <h2>Uma pergunta pode virar uma rota.</h2>
        <p>Conheça o Interprete. e entenda como o estudo pode continuar com estrutura.</p>
        <a className="it-button" href={contactUrl()} target="_blank" rel="noreferrer">Quero conhecer <span aria-hidden="true">↗</span></a>
      </section>
    </aside>
  );
}

export default async function BlogArticlePage({ params }: BlogArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) notFound();

  const allRelatedArticles = getRelatedArticles(article, 5);
  const readAlsoArticles = allRelatedArticles.slice(0, 2);
  const relatedArticles = allRelatedArticles.slice(2);
  const publicArticles = getPublicArticles();
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
                <span aria-hidden="true">/</span>
                <span className="blog-breadcrumb-current">{article.title}</span>
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

          <div className="page-width blog-article-content-width">
            <figure className="blog-article-cover">
              <BlogCover article={article} featured />
            </figure>
            <div className="blog-article-layout">
              <div className="blog-article-main">
                <ShareActions slug={article.slug} title={article.title} summary={article.summary} />
                <MarkdownArticle content={article.content} />

                {readAlsoArticles.length > 0 && (
                  <section className="blog-read-also" aria-labelledby="read-also-title">
                    <p className="section-label">Leia também</p>
                    <h2 id="read-also-title">Outras perguntas para continuar.</h2>
                    <div className="blog-read-also-list">
                      {readAlsoArticles.map((readAlsoArticle) => (
                        <a key={readAlsoArticle.slug} href={'/blog/' + readAlsoArticle.slug}>
                          <span>{BLOG_CATEGORY_LABELS[readAlsoArticle.category]}</span>
                          <strong>{readAlsoArticle.title}</strong>
                          <span aria-hidden="true">↗</span>
                        </a>
                      ))}
                    </div>
                  </section>
                )}

                {article.callToAction && (
                  <aside className="blog-editorial-cta blog-editorial-cta--article" aria-label="Próximo passo deste conteúdo">
                    <div>
                      <p>Próximo passo</p>
                      <h2>{article.callToAction.label}</h2>
                    </div>
                    <a className="it-button" href={article.callToAction.url} target={externalCta ? '_blank' : undefined} rel={externalCta ? 'noreferrer' : undefined}>
                      Acessar <span aria-hidden="true">↗</span>
                    </a>
                  </aside>
                )}

                <aside className="blog-contextual-cta" aria-label="Conheça o Interprete.">
                  <div>
                    <p>Próximo passo</p>
                    <h2>Uma pergunta pode virar uma rota de estudo.</h2>
                    <span>Conheça o Interprete. e leve esta forma de ler para a sua prática.</span>
                  </div>
                  <a className="it-button" href="/planos">Ver formatos <span aria-hidden="true">↗</span></a>
                </aside>

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

                <CitationBlock article={article} />
                <AuthorBlock author={article.author} />
              </div>
              <ArticleSidebar articles={publicArticles} category={BLOG_CATEGORY_LABELS[article.category]} />
            </div>
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
