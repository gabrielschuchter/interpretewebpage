'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { BLOG_CATEGORIES, BLOG_CATEGORY_LABELS } from '../../lib/blog/constants';
import type { BlogCategory } from '../../lib/blog/constants';
import { contactUrl } from '../../lib/contact';
import { createBlogSearch, searchBlog } from '../../lib/blog/search';
import type { BlogBrowserArticle } from '../../lib/blog/types';
import { Reveal } from '../motion';
import { StudyIcon } from '../visuals';
import { BlogCard } from './BlogCard';

type CategoryFilter = 'all' | BlogCategory;

function filterByCategory(articles: BlogBrowserArticle[], category: CategoryFilter) {
  return category === 'all' ? articles : articles.filter((article) => article.category === category);
}

function SearchControl({ query, onChange, onClear }: { query: string; onChange: (value: string) => void; onClear: () => void }) {
  return <div className="blog-search"><label htmlFor="blog-search-input">Pesquisar conteúdos</label><div className="blog-search-control"><StudyIcon name="search" size={22} /><input id="blog-search-input" type="search" value={query} onChange={(event) => onChange(event.target.value)} placeholder="O que você quer entender?" autoComplete="off" />{query && <button type="button" className="search-clear" onClick={onClear}>Limpar</button>}</div></div>;
}

function BlogSidebar({ articles, availableCategories, category, onCategoryChange }: { articles: BlogBrowserArticle[]; availableCategories: BlogCategory[]; category: CategoryFilter; onCategoryChange: (category: CategoryFilter) => void }) {
  const starterArticles = articles.slice(0, 3);
  return <aside className="blog-sidebar" aria-label="Descoberta editorial"><section className="blog-sidebar-block"><p className="subsection-label">curadoria</p><h2>Para começar</h2>{starterArticles.length > 0 ? <nav aria-label="Conteúdos para começar"><ol className="starter-list">{starterArticles.map((article, index) => <li key={article.slug}><span>0{index + 1}</span><Link href={'/blog/' + article.slug}>{article.title}</Link></li>)}</ol></nav> : <p className="blog-sidebar-empty">Novos conteúdos serão publicados aqui.</p>}</section><section className="blog-sidebar-block"><p className="subsection-label">arquivo</p><h2>Categorias</h2><div className="blog-sidebar-categories"><button type="button" className={category === 'all' ? 'is-selected' : undefined} aria-pressed={category === 'all'} onClick={() => onCategoryChange('all')}>Todas</button>{availableCategories.map((candidate) => <button key={candidate} type="button" className={category === candidate ? 'is-selected' : undefined} aria-pressed={category === candidate} onClick={() => onCategoryChange(candidate)}>{BLOG_CATEGORY_LABELS[candidate]} <span aria-hidden="true">↗</span></button>)}</div></section><section className="blog-sidebar-cta"><p className="subsection-label">estudo acompanhado</p><h2>Uma pergunta pode virar uma rota.</h2><p>Conheça o Interprete. e entenda como o estudo pode continuar com estrutura.</p><a className="it-button" href={contactUrl()} target="_blank" rel="noreferrer">Quero conhecer <StudyIcon name="arrow" size={17} /></a></section></aside>;
}

export function BlogIndexClient({ articles }: { articles: BlogBrowserArticle[] }) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<CategoryFilter>('all');
  const search = useMemo(() => createBlogSearch(articles), [articles]);
  const availableCategories = useMemo(() => BLOG_CATEGORIES.filter((candidate) => articles.some((article) => article.category === candidate)), [articles]);
  const featuredArticle = useMemo(() => articles.find((article) => article.featured) ?? articles[0], [articles]);
  const matchingSlugs = useMemo(() => searchBlog(search, query), [query, search]);
  const isDiscoveryMode = !query.trim() && category === 'all';
  const results = useMemo(() => {
    const categoryMatches = filterByCategory(articles, category);
    if (!query.trim()) return categoryMatches;
    const articlesBySlug = new Map(categoryMatches.map((article) => [article.slug, article]));
    return matchingSlugs.flatMap((slug) => { const article = articlesBySlug.get(slug); return article ? [article] : []; });
  }, [articles, category, matchingSlugs, query]);
  const gridArticles = isDiscoveryMode && featuredArticle ? results.filter((article) => article.slug !== featuredArticle.slug) : results;
  const hasActiveFilter = Boolean(query.trim()) || category !== 'all';
  const clearFilters = () => { setQuery(''); setCategory('all'); };

  return <>
    <section className="blog-hero blog-hero--portal" aria-labelledby="blog-title"><Reveal as="div" className="page-width blog-hero-layout" stagger><div className="blog-hero-copy"><div className="blog-hero-kicker"><span>cadernos / 01</span><span>ciência · prática · pessoas</span></div><h1 id="blog-title">Conteúdos para <em>continuar pensando.</em></h1><p>Prática Baseada em Evidências, leitura crítica, epidemiologia clínica e interpretação de resultados — com espaço para o que ainda precisa ser perguntado.</p><div className="blog-hero-question"><StudyIcon name="question" size={22} /><span>Uma biblioteca para começar uma leitura mais consciente.</span></div></div><div className="blog-hero-material"><Image src="/interprete/visual-library/classical/statue-fragment.webp" alt="Fragmento clássico em preto e branco, recortado como detalhe visual do caderno." fill sizes="(max-width: 720px) 100vw, 30vw" /><span>ler / observar / interpretar</span></div></Reveal></section>
    <section className="blog-discovery blog-discovery--portal" aria-labelledby="blog-list-title"><Reveal as="div" className="page-width" stagger><div className="blog-search-row"><SearchControl query={query} onChange={setQuery} onClear={() => setQuery('')} /><div className="blog-filter-options" aria-label="Filtrar conteúdos por categoria"><span className="blog-filter-label"><StudyIcon name="filter" size={16} /> filtros</span><button type="button" className={category === 'all' ? 'is-selected' : undefined} aria-pressed={category === 'all'} onClick={() => setCategory('all')}>Todas</button>{availableCategories.map((candidate) => <button key={candidate} type="button" className={category === candidate ? 'is-selected' : undefined} aria-pressed={category === candidate} onClick={() => setCategory(candidate)}>{BLOG_CATEGORY_LABELS[candidate]}</button>)}</div></div><div className="blog-results-bar"><p className="blog-results-count" aria-live="polite" aria-atomic="true">{results.length === 1 ? '1 conteúdo encontrado' : results.length + ' conteúdos encontrados'}</p>{hasActiveFilter && <button type="button" className="text-button" onClick={clearFilters}>Limpar busca e filtros</button>}</div>{isDiscoveryMode && featuredArticle && <section className="blog-featured" aria-labelledby="blog-featured-title"><div className="blog-section-heading"><p>em destaque</p><h2 id="blog-featured-title">Um ponto de partida para a próxima leitura.</h2></div><BlogCard article={featuredArticle} featured /></section>}<div className="blog-portal-layout"><section className="blog-listing" aria-labelledby="blog-list-title"><div className="blog-section-heading"><p>{hasActiveFilter ? 'resultado da busca' : 'conteúdos recentes'}</p><h2 id="blog-list-title">{hasActiveFilter ? 'Encontre um conteúdo' : 'Mais leituras para continuar'}</h2></div>{gridArticles.length > 0 ? <Reveal as="div" className="blog-grid blog-grid--portal" stagger>{gridArticles.map((article) => <BlogCard key={article.slug} article={article} />)}</Reveal> : <div className="blog-empty" role="status"><p>{articles.length === 0 ? 'Ainda não há conteúdos públicos.' : 'Nenhum conteúdo corresponde a essa busca e filtro.'}</p>{hasActiveFilter && <button type="button" onClick={clearFilters}>Limpar busca e filtros</button>}</div>}</section><BlogSidebar articles={articles} availableCategories={availableCategories} category={category} onCategoryChange={setCategory} /></div><section className="blog-editorial-cta blog-editorial-cta--portal" aria-label="Próximo passo"><div><p>estudo acompanhado</p><h2>Quer levar uma pergunta mais longe?</h2><span>O conteúdo abre uma rota. O Interprete. ajuda a percorrê-la.</span></div><a className="it-button" href="/#cursos">Conhecer o percurso <StudyIcon name="arrow" size={17} /></a></section></Reveal></section>
  </>;
}
