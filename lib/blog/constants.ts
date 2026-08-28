export const BLOG_TYPES = ['explicador', 'analise', 'evento'] as const;
export const BLOG_CATEGORIES = ['ciencia-pbe', 'estatistica', 'leitura-critica', 'epidemiologia'] as const;

export type BlogType = typeof BLOG_TYPES[number];
export type BlogCategory = typeof BLOG_CATEGORIES[number];

export const BLOG_TYPE_LABELS: Record<BlogType, string> = {
  explicador: 'Explicador',
  analise: 'Análise',
  evento: 'Evento',
};
export const BLOG_CATEGORY_LABELS: Record<BlogCategory, string> = {
  'ciencia-pbe': 'Ciência e PBE',
  estatistica: 'Estatística',
  'leitura-critica': 'Leitura crítica',
  epidemiologia: 'Epidemiologia',
};
