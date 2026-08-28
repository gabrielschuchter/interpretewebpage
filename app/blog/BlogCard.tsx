import Image from 'next/image';
import Link from 'next/link';
import { BLOG_CATEGORY_LABELS, BLOG_TYPE_LABELS } from '../../lib/blog/constants';
import { formatBlogDate, getReadingTimeLabel } from '../../lib/blog/format';
import type { BlogCardArticle } from '../../lib/blog/types';

export function BlogCover({ article, featured = false }: { article: BlogCardArticle; featured?: boolean }) {
  if (article.coverImage) {
    return (
      <div className="blog-cover">
        <Image
          src={article.coverImage}
          alt={article.coverAlt ?? ''}
          fill
          sizes={featured ? '(max-width: 720px) 100vw, 58vw' : '(max-width: 720px) 100vw, 33vw'}
        />
      </div>
    );
  }

  return (
    <div className="blog-cover blog-cover--fallback" aria-hidden="true">
      <span>Interprete. / {BLOG_CATEGORY_LABELS[article.category]}</span>
      <strong>LEIA<br />APLIQUE</strong>
      <i>{article.type}</i>
    </div>
  );
}
export function BlogCard({ article, featured = false }: { article: BlogCardArticle; featured?: boolean }) {
  const Heading = featured ? 'h2' : 'h3';

  return (
    <article className={'blog-card' + (featured ? ' blog-card--featured' : '')}>
      <Link className="blog-card-link" href={'/blog/' + article.slug} aria-label={'Ler: ' + article.title}>
        <BlogCover article={article} featured={featured} />
        <div className="blog-card-content">
          <div className="blog-card-labels">
            <span>{BLOG_TYPE_LABELS[article.type]}</span>
            <span>{BLOG_CATEGORY_LABELS[article.category]}</span>
          </div>
          <Heading>{article.title}</Heading>
          <p>{article.summary}</p>
          <div className="blog-card-meta">
            <span>{article.author}</span>
            <span aria-hidden="true">•</span>
            <time dateTime={article.publishedAt}>{formatBlogDate(article.publishedAt)}</time>
            <span aria-hidden="true">•</span>
            <span>{getReadingTimeLabel(article)}</span>
          </div>
        </div>
      </Link>
    </article>
  );
}
