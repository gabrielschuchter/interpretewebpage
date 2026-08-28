import { z } from 'zod';
import { BLOG_CATEGORIES, BLOG_TYPES } from './constants';

function isCalendarDate(value: string) {
  const [year, month, day] = value.split('-').map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));
  return date.getUTCFullYear() === year
    && date.getUTCMonth() === month - 1
    && date.getUTCDate() === day;
}

export const dateSchema = z.preprocess(
  (value) => value instanceof Date ? value.toISOString().slice(0, 10) : value,
  z.string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, 'Use uma data no formato YYYY-MM-DD.')
    .refine(isCalendarDate, 'Use uma data de calendário válida.')
);

const optionalDateSchema = z.preprocess(
  (value) => value === '' || value === null ? undefined : value,
  dateSchema.optional()
);

const optionalTimeSchema = z.preprocess(
  (value) => value === '' || value === null ? undefined : value,
  z.string()
    .trim()
    .regex(/^([01]\d|2[0-3]):[0-5]\d$/, 'Use um horário no formato HH:MM.')
    .optional()
);

const optionalLocationSchema = z.preprocess(
  (value) => value === '' || value === null ? undefined : value,
  z.string().trim().min(3).max(120).optional()
);

const callToActionUrlSchema = z.string().trim().refine(
  (value) => (value.startsWith('/') && !value.startsWith('//')) || /^https?:\/\/\S+$/i.test(value),
  'Use uma URL http(s) ou um caminho interno iniciado por /.'
);

const callToActionSchema = z.preprocess(
  (value) => {
    if (value === null) return undefined;
    if (value && typeof value === 'object' && Object.values(value).every((item) => item === '' || item === undefined || item === null)) {
      return undefined;
    }
    return value;
  },
  z.object({
    label: z.string().trim().min(2).max(80),
    url: callToActionUrlSchema,
  }).optional()
);

export const blogFrontmatterSchema = z.object({
  title: z.string().trim().min(8).max(140),
  summary: z.string().trim().min(24).max(320),
  type: z.enum(BLOG_TYPES),
  category: z.enum(BLOG_CATEGORIES),
  tags: z.array(z.string().trim().min(2)).min(1),
  author: z.string().trim().min(3),
  publishedAt: dateSchema,
  updatedAt: optionalDateSchema,
  coverImage: z.string().trim().startsWith('/').optional(),
  coverAlt: z.string().trim().min(8).optional(),
  featured: z.boolean().default(false),
  draft: z.boolean().default(true),
  callToAction: callToActionSchema,
  eventDate: optionalDateSchema,
  eventTime: optionalTimeSchema,
  eventLocation: optionalLocationSchema,
  references: z.array(z.object({
    citation: z.string().trim().min(4),
    url: z.string().url(),
  })).default([]),
}).superRefine((article, context) => {
  if (article.coverImage && !article.coverAlt) {
    context.addIssue({ code: 'custom', path: ['coverAlt'], message: 'coverAlt é obrigatório quando coverImage é preenchida.' });
  }
  if (article.coverAlt && !article.coverImage) {
    context.addIssue({ code: 'custom', path: ['coverImage'], message: 'coverImage é obrigatória quando coverAlt é preenchida.' });
  }
  if (article.type === 'evento' && !article.eventDate) {
    context.addIssue({ code: 'custom', path: ['eventDate'], message: 'Eventos exigem eventDate.' });
  }
  if ((article.eventTime || article.eventLocation) && !article.eventDate) {
    context.addIssue({ code: 'custom', path: ['eventDate'], message: 'eventDate é obrigatória quando eventTime ou eventLocation é preenchido.' });
  }
});

export type BlogFrontmatter = z.infer<typeof blogFrontmatterSchema>;
