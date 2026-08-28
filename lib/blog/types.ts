import type { BlogCategory, BlogType } from './constants';

export type BlogReference = {
  citation: string;
  url: string;
};

export type BlogCallToAction = {
  label: string;
  url: string;
};

export type BlogArticle = {
  slug: string;
  title: string;
  summary: string;
  type: BlogType;
  category: BlogCategory;
  tags: string[];
  author: string;
  publishedAt: string;
  updatedAt?: string;
  coverImage?: string;
  coverAlt?: string;
  featured: boolean;
  draft: boolean;
  references: BlogReference[];
  callToAction?: BlogCallToAction;
  eventDate?: string;
  eventTime?: string;
  eventLocation?: string;
  content: string;
  plainText: string;
  readingTimeMinutes: number;
};

export type BlogBrowserArticle = Pick<
  BlogArticle,
  | 'slug'
  | 'title'
  | 'summary'
  | 'type'
  | 'category'
  | 'tags'
  | 'author'
  | 'publishedAt'
  | 'updatedAt'
  | 'coverImage'
  | 'coverAlt'
  | 'featured'
  | 'plainText'
  | 'readingTimeMinutes'
>;
export type BlogCardArticle = Pick<
  BlogArticle,
  | 'slug'
  | 'title'
  | 'summary'
  | 'type'
  | 'category'
  | 'author'
  | 'publishedAt'
  | 'coverImage'
  | 'coverAlt'
  | 'readingTimeMinutes'
>;
