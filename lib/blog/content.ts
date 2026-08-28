import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { blogFrontmatterSchema } from './schema';
import type { BlogArticle, BlogBrowserArticle } from './types';

const contentDirectory = path.join(process.cwd(), 'content', 'blog');
const publicDirectory = path.join(process.cwd(), 'public');

function isInsideDirectory(candidate: string, directory: string) {
  const relativePath = path.relative(directory, candidate);
  return relativePath !== '' && !relativePath.startsWith('..') && !path.isAbsolute(relativePath);
}
function getPlainText(markdown: string) {
  const fence = String.fromCharCode(96).repeat(3);
  return markdown
    .replace(new RegExp(fence + '[\\s\\S]*?' + fence, 'g'), ' ')
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/<[^>]+>/g, ' ')
    .replace(/[*_~>#|]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function getReadingTimeMinutes(plainText: string) {
  const wordCount = plainText ? plainText.split(/\s+/).length : 0;
  return Math.max(1, Math.ceil(wordCount / 200));
}

function validateCoverImage(coverImage: string | undefined, filePath: string) {
  if (!coverImage) return;

  const assetPath = path.resolve(publicDirectory, coverImage.slice(1));
  if (!isInsideDirectory(assetPath, publicDirectory) || !fs.existsSync(assetPath)) {
    throw new Error(filePath + ': coverImage "' + coverImage + '" não existe em public/.');
  }
}

function compareByPublicationDate(left: BlogArticle, right: BlogArticle) {
  return right.publishedAt.localeCompare(left.publishedAt) || right.slug.localeCompare(left.slug);
}

function parseArticle(filePath: string): BlogArticle {
  const slug = path.basename(filePath, '.md');

  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
    throw new Error(filePath + ': o nome do arquivo deve ser um slug kebab-case minúsculo.');
  }

  const source = fs.readFileSync(filePath, 'utf8');
  const parsed = matter(source);
  const result = blogFrontmatterSchema.safeParse(parsed.data);

  if (!result.success) {
    const issues = result.error.issues.map((issue) => issue.path.join('.') + ': ' + issue.message).join('; ');
    throw new Error(filePath + ': frontmatter inválido. ' + issues);
  }

  if (!parsed.content.trim()) {
    throw new Error(filePath + ': o corpo Markdown não pode estar vazio.');
  }

  validateCoverImage(result.data.coverImage, filePath);
  const plainText = getPlainText(parsed.content);

  return {
    ...result.data,
    slug,
    content: parsed.content.trim(),
    plainText,
    readingTimeMinutes: getReadingTimeMinutes(plainText),
  } satisfies BlogArticle;
}

export function getAllArticles() {
  if (!fs.existsSync(contentDirectory)) return [] as BlogArticle[];

  const articlePaths = fs.readdirSync(contentDirectory, { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith('.md'))
    .map((entry) => path.join(contentDirectory, entry.name))
    .sort((left, right) => left.localeCompare(right));

  const slugs = new Set<string>();
  const articles = articlePaths.map((filePath) => {
    const article = parseArticle(filePath);
    if (slugs.has(article.slug)) {
      throw new Error(filePath + ': slug duplicado "' + article.slug + '".');
    }
    slugs.add(article.slug);
    return article;
  });

  return articles;
}

export function getPublicArticles() {
  return getAllArticles()
    .filter((article) => !article.draft)
    .sort(compareByPublicationDate);
}

export function getArticleBySlug(slug: string | undefined) {
  return getPublicArticles().find((article) => article.slug === slug);
}

export function getFeaturedArticle(articles: BlogArticle[] = getPublicArticles()) {
  return articles
    .filter((article) => article.featured)
    .sort(compareByPublicationDate)[0] ?? articles[0];
}

export function getRelatedArticles(article: BlogArticle, limit = 3) {
  const normalizeTag = (tag: string) => tag.toLocaleLowerCase('pt-BR');

  return getPublicArticles()
    .filter((candidate) => candidate.slug !== article.slug)
    .map((candidate) => ({
      article: candidate,
      score: (candidate.category === article.category ? 4 : 0)
        + candidate.tags.filter((tag) => article.tags.some((articleTag) => normalizeTag(articleTag) === normalizeTag(tag))).length,
    }))
    .sort((left, right) => right.score - left.score
      || compareByPublicationDate(left.article, right.article))
    .slice(0, limit)
    .map(({ article: relatedArticle }) => relatedArticle);
}

export function toBrowserArticle(article: BlogArticle): BlogBrowserArticle {
  return {
    slug: article.slug,
    title: article.title,
    summary: article.summary,
    type: article.type,
    category: article.category,
    tags: article.tags,
    author: article.author,
    publishedAt: article.publishedAt,
    updatedAt: article.updatedAt,
    coverImage: article.coverImage,
    coverAlt: article.coverAlt,
    featured: article.featured,
    plainText: article.plainText,
    readingTimeMinutes: article.readingTimeMinutes,
  };
}
