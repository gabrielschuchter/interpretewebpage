'use client';

import { useMemo, useState } from 'react';
import { BLOG_CATEGORIES, BLOG_CATEGORY_LABELS } from '../../lib/blog/constants';
import { createBlogSearch, searchBlog } from '../../lib/blog/search';
import type { BlogBrowserArticle } from '../../lib/blog/types';
import type { BlogCategory } from '../../lib/blog/constants';
import { BlogCard } from './BlogCard';

type CategoryFilter = 'all' | BlogCategory;

function filterByCategory(articles: BlogBrowserArticle[], category: CategoryFilter) {
  return category === 'all' ? articles : articles.filter((article) => article.category === category);
}

export function BlogIndexClient({ articles }: { articles: BlogBrowserArticle[] }) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<CategoryFilter>('all');
  const search = useMemo(() => createBlogSearch(articles), [articles]);
  const availableCategories = useMemo(
    () => BLOG_CATEGORIES.filter((candidate) => articles.some((article) => article.category === candidate)),
    [articles],
  );
  const featuredArticle = useMemo(
    () => articles.find((article) => article.featured) ?? articles[0],
    [articles],
  );
  const matchingSlugs = useMemo(() => searchBlog(search, query), [query, search]);
  const isDiscoveryMode = !query.trim() && category === 'all';
  const results = useMemo(() => {
    const categoryMatches = filterByCategory(articles, category);
    if (!query.trim()) return categoryMatches;

    const articlesBySlug = new Map(categoryMatches.map((article) => [article.slug, article]));
    return matchingSlugs.flatMap((slug) => {
      const article = articlesBySlug.get(slug);
      return article ? [article] : [];
    });
  }, [articles, category, matchingSlugs, query]);
  const gridArticles = isDiscoveryMode && featuredArticle
    ? results.filter((article) => article.slug !== featuredArticle.slug)
    : results;
  const hasActiveFilter = Boolean(query.trim()) || category !== 'all';

  const clearFilters = () => {
    setQuery('');
    setCategory('all');
  };

  return (
    <>
      <section className="blog-hero" aria-labelledby="blog-title">
        <div className="page-width">
          <div className="blog-hero-topline">
            <span>Interprete. / arquivo editorial</span>
            <span>ler · testar · aplicar</span>
          </div>
          <h1 id="blog-title">Ideias para ler evidências com mais clareza.</h1>
          <p>Conteúdos sobre Prática Baseada em Evidências, leitura crítica e decisões aplicáveis.</p>
        </div>
      </section>

      <section className="blog-discovery" aria-labelledby="blog-list-title">
        <div className="page-width">
          <div className="blog-toolbar">
            <div className="blog-search">
              <label htmlFor="blog-search-input">Pesquisar conteúdos</label>
              <div className="blog-search-control">
                <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="6.5" /><path d="m16 16 4 4" /></svg>
                <input
                  id="blog-search-input"
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Ex.: intervalo, causalidade, leitura crítica"
                  autoComplete="off"
                />
                {query && <button type="button" className="search-clear" onClick={() => setQuery('')}>Limpar</button>}
              </div>
            </div>
            <div className="blog-filters" aria-label="Filtrar conteúdos por categoria">
              <span className="blog-filter-label">Categoria</span>
              <div className="blog-filter-options">
                <button type="button" className={category === 'all' ? 'is-selected' : undefined} aria-pressed={category === 'all'} onClick={() => setCategory('all')}>Todas</button>
                {availableCategories.map((candidate) => (
                  <button key={candidate} type="button" className={category === candidate ? 'is-selected' : undefined} aria-pressed={category === candidate} onClick={() => setCategory(candidate)}>
                    {BLOG_CATEGORY_LABELS[candidate]}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <p className="blog-results-count" aria-live="polite" aria-atomic="true">
            {results.length === 1 ? '1 conteúdo encontrado' : results.length + ' conteúdos encontrados'}
          </p>

          {isDiscoveryMode && featuredArticle && (
            <section className="blog-featured" aria-labelledby="blog-featured-title">
              <div className="blog-section-heading">
                <p>Em destaque</p>
                <h2 id="blog-featured-title">Um ponto de partida para a próxima leitura.</h2>
              </div>
              <BlogCard article={featuredArticle} featured />
            </section>
          )}

          <section className="blog-listing" aria-labelledby="blog-list-title">
            <div className="blog-section-heading">
              <p>{hasActiveFilter ? 'Resultado da busca' : 'Arquivo editorial'}</p>
              <h2 id="blog-list-title">{hasActiveFilter ? 'Encontre um conteúdo' : 'Mais leituras para continuar'}</h2>
            </div>
            {gridArticles.length > 0 ? (
              <div className="blog-grid">
                {gridArticles.map((article) => <BlogCard key={article.slug} article={article} />)}
              </div>
            ) : (
              <div className="blog-empty" role="status">
                <p>{articles.length === 0 ? 'Ainda não há conteúdos públicos.' : 'Nenhum conteúdo corresponde a essa busca e filtro.'}</p>
                {hasActiveFilter && <button type="button" onClick={clearFilters}>Limpar busca e filtros</button>}
              </div>
            )}
          </section>
        </div>
      </section>
    </>
  );
}
