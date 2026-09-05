export const brand = {
  name: 'Interprete.',
  colors: {
    pinkEssence: '#F1EBE8',
    crimsonViolet: '#410230',
    darkAmaranth: '#8C1535',
    classicCrimson: '#D62839',
    debianRed: '#D60858',
    white: '#FFFFFF',
  },
  proportion: {
    pinkEssence: 58,
    darkAmaranth: 28,
    classicCrimson: 7,
    debianRed: 5,
    crimsonVioletMax: 2,
  },
  logo: { wordmarkMinDigitalPx: 90, symbolMinDigitalPx: 32, protectionUnit: 'altura do I' },
  typography: { display: 'Source Serif Pro', body: 'Inter', mono: 'IBM Plex Mono' },
} as const;

export const designSystemRules = [
  'O ponto final pertence ao nome e nunca é removido.',
  'A peça precisa pertencer a um pilar e a um território identificáveis.',
  'Toda afirmação técnica precisa de fonte rastreável.',
  'O racional aparece; a conclusão nunca é apresentada isoladamente.',
  'A peça termina com pergunta, ação ou próximo passo.',
  'Quem escreve não aprova.',
] as const;

export type BrandColor = keyof typeof brand.colors;
