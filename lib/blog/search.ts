import MiniSearch from 'minisearch';
import { BLOG_CATEGORY_LABELS } from './constants';
import type { BlogBrowserArticle } from './types';

type SearchDocument = {
  id: string;
  title: string;
  tags: string;
  summary: string;
  category: string;
  body: string;
};

const searchOptions = {
  boost: {
    title: 6,
    tags: 4,
    summary: 2,
    category: 2,
    body: 1,
  },
  combineWith: 'AND' as const,
  prefix: true,
  fuzzy: 0.2,
};

export function normalizeBlogSearch(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLocaleLowerCase('pt-BR')
    .trim();
}
export function createBlogSearch(articles: BlogBrowserArticle[]) {
  const search = new MiniSearch<SearchDocument>({
    fields: ['title', 'tags', 'summary', 'category', 'body'],
    storeFields: ['id'],
    searchOptions,
  });

  search.addAll(articles.map((article) => ({
    id: article.slug,
    title: normalizeBlogSearch(article.title),
    tags: normalizeBlogSearch(article.tags.join(' ')),
    summary: normalizeBlogSearch(article.summary),
    category: normalizeBlogSearch(article.category + ' ' + BLOG_CATEGORY_LABELS[article.category]),
    body: normalizeBlogSearch(article.plainText),
  })));

  return search;
}

export function searchBlog(search: MiniSearch<SearchDocument>, query: string) {
  const normalizedQuery = normalizeBlogSearch(query);
  if (!normalizedQuery) return [];

  return search.search(normalizedQuery, searchOptions).map((result) => result.id);
}
