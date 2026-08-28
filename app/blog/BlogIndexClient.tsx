'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { BLOG_CATEGORIES, BLOG_CATEGORY_LABELS } from '../../lib/blog/constants';
import { contactUrl } from '../../lib/contact';
import { createBlogSearch, searchBlog } from '../../lib/blog/search';
import type { BlogBrowserArticle } from '../../lib/blog/types';
import type { BlogCategory } from '../../lib/blog/constants';
import { BlogCard } from './BlogCard';

type CategoryFilter = 'all' | BlogCategory;

function filterByCategory(articles: BlogBrowserArticle[], category: CategoryFilter) {
  return category === 'all' ? articles : articles.filter((article) => article.category === category);
}

function SearchControl({ query, onChange, onClear }: { query: string; onChange: (value: string) => void; onClear: () => void }) {
  return (
    <div className="blog-search">
      <label htmlFor="blog-search-input">Pesquisar conteúdos</label>
      <div className="blog-search-control">
        <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="6.5" /><path d="m16 16 4 4" /></svg>
        <input
          id="blog-search-input"
          type="search"
          value={query}
          onChange={(event) => onChange(event.target.value)}
          placeholder="O que você quer entender?"
          autoComplete="off"
        />
        {query && <button type="button" className="search-clear" onClick={onClear}>Limpar</button>}
      </div>
    </div>
  );
}

function BlogSidebar({
  articles,
  availableCategories,
  category,
  onCategoryChange,
}: {
  articles: BlogBrowserArticle[];
  availableCategories: BlogCategory[];
  category: CategoryFilter;
  onCategoryChange: (category: CategoryFilter) => void;
}) {
  const starterArticles = articles.slice(0, 3);

  return (
    <aside className="blog-sidebar" aria-label="Descoberta editorial">
      <section className="blog-sidebar-block">
        <p className="subsection-label">Curadoria</p>
        <h2>Para começar</h2>
        <nav aria-label="Conteúdos para começar">
          <ol className="starter-list">
            {starterArticles.map((article, index) => (
              <li key={article.slug}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <Link href={'/blog/' + article.slug}>{article.title}</Link>
              </li>
            ))}
          </ol>
        </nav>
      </section>
      <section className="blog-sidebar-block">
        <p className="subsection-label">Arquivo</p>
        <h2>Categorias</h2>
        <div className="blog-sidebar-categories">
          <button type="button" className={category === 'all' ? 'is-selected' : undefined} aria-pressed={category === 'all'} onClick={() => onCategoryChange('all')}>Todas</button>
          {availableCategories.map((candidate) => (
            <button key={candidate} type="button" className={category === candidate ? 'is-selected' : undefined} aria-pressed={category === candidate} onClick={() => onCategoryChange(candidate)}>
              {BLOG_CATEGORY_LABELS[candidate]} <span aria-hidden="true">→</span>
            </button>
          ))}
        </div>
      </section>
      <section className="blog-sidebar-cta">
        <p className="subsection-label">Estudo acompanhado</p>
        <h2>Uma pergunta pode virar uma rota.</h2>
        <p>Conheça o Interprete. e entenda como o estudo pode continuar com estrutura.</p>
        <a className="button" href={contactUrl()} target="_blank" rel="noreferrer">Quero conhecer <span aria-hidden="true">↗</span></a>
      </section>
    </aside>
  );
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
      <section className="blog-hero blog-hero--portal" aria-labelledby="blog-title">
        <div className="page-width">
          <div className="blog-hero-topline">
            <span>Interprete. / arquivo editorial</span>
            <span>buscar · ler · aplicar</span>
          </div>
          <div className="blog-hero-layout">
            <div>
              <h1 id="blog-title">Conteúdos do Interprete.</h1>
              <p>Prática Baseada em Evidências, leitura crítica, epidemiologia clínica e interpretação de resultados.</p>
            </div>
            <div className="blog-hero-search">
              <SearchControl query={query} onChange={setQuery} onClear={() => setQuery('')} />
              <span>Uma biblioteca para começar uma leitura mais consciente.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-category-bar" aria-label="Filtrar conteúdos por categoria">
        <div className="page-width">
          <span className="blog-filter-label">Categorias</span>
          <div className="blog-filter-options">
            <button type="button" className={category === 'all' ? 'is-selected' : undefined} aria-pressed={category === 'all'} onClick={() => setCategory('all')}>Todas</button>
            {availableCategories.map((candidate) => (
              <button key={candidate} type="button" className={category === candidate ? 'is-selected' : undefined} aria-pressed={category === candidate} onClick={() => setCategory(candidate)}>
                {BLOG_CATEGORY_LABELS[candidate]}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="blog-discovery blog-discovery--portal" aria-labelledby="blog-list-title">
        <div className="page-width">
          <div className="blog-results-bar">
            <p className="blog-results-count" aria-live="polite" aria-atomic="true">
              {results.length === 1 ? '1 conteúdo encontrado' : results.length + ' conteúdos encontrados'}
            </p>
            {hasActiveFilter && <button type="button" className="text-button" onClick={clearFilters}>Limpar busca e filtros</button>}
          </div>

          {isDiscoveryMode && featuredArticle && (
            <section className="blog-featured" aria-labelledby="blog-featured-title">
              <div className="blog-section-heading">
                <p>Em destaque</p>
                <h2 id="blog-featured-title">Um ponto de partida para a próxima leitura.</h2>
              </div>
              <BlogCard article={featuredArticle} featured />
            </section>
          )}

          <div className="blog-portal-layout">
            <section className="blog-listing" aria-labelledby="blog-list-title">
              <div className="blog-section-heading">
                <p>{hasActiveFilter ? 'Resultado da busca' : 'Conteúdos recentes'}</p>
                <h2 id="blog-list-title">{hasActiveFilter ? 'Encontre um conteúdo' : 'Mais leituras para continuar'}</h2>
              </div>
              {gridArticles.length > 0 ? (
                <div className="blog-grid blog-grid--portal">
                  {gridArticles.map((article) => <BlogCard key={article.slug} article={article} />)}
                </div>
              ) : (
                <div className="blog-empty" role="status">
                  <p>{articles.length === 0 ? 'Ainda não há conteúdos públicos.' : 'Nenhum conteúdo corresponde a essa busca e filtro.'}</p>
                  {hasActiveFilter && <button type="button" onClick={clearFilters}>Limpar busca e filtros</button>}
                </div>
              )}
            </section>
            <BlogSidebar
              articles={articles}
              availableCategories={availableCategories}
              category={category}
              onCategoryChange={setCategory}
            />
          </div>

          <section className="blog-editorial-cta blog-editorial-cta--portal" aria-label="Próximo passo">
            <div>
              <p>Estudo acompanhado</p>
              <h2>Quer levar uma pergunta mais longe?</h2>
              <span>O conteúdo abre uma rota. O Interprete. ajuda a percorrê-la.</span>
            </div>
            <a className="button" href="/#formacao">Conhecer a formação <span aria-hidden="true">↗</span></a>
          </section>
        </div>
      </section>
    </>
  );
}
