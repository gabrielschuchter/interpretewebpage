# Arquitetura do blog

## Fonte de conteúdo

Cada publicação é um arquivo Markdown versionado em content/blog. O nome do arquivo é o slug canônico em kebab-case; não existe campo slug separado.

O frontmatter é lido com gray-matter e validado com Zod em lib/blog/schema.ts e lib/blog/content.ts. O corpo aceita headings, parágrafos, listas, blockquotes, tabelas, links e imagens via react-markdown com remark-gfm.

Campos editoriais mínimos:

- title, summary, type, category, tags e author;
- publishedAt e updatedAt opcional;
- featured e draft;
- coverImage e coverAlt opcionais como par;
- references e callToAction opcionais;
- campos de agenda opcionais para eventos.

## Drafts

draft: true é o default seguro no Pages CMS e no schema. O build ainda valida o arquivo, mas artigos em rascunho são excluídos de:

- índice, destaque, busca e filtros;
- relacionados;
- generateStaticParams;
- dados enviados ao Client Component;
- sitemap e páginas públicas.

Um artigo só deve receber draft: false após revisão editorial humana.

## Busca e relacionados

A busca é client-side para o corpus inicial. MiniSearch indexa título, tags, resumo, categoria e corpo em texto normalizado, ignorando acentos, aceitando prefixos e usando fuzzy moderado.

Relacionados são calculados no servidor por tags compartilhadas, categoria e data como desempate. O artigo atual e qualquer rascunho ficam fora do resultado.

## SSG e SEO

app/blog/[slug]/page.tsx usa generateStaticParams, dynamicParams = false e generateMetadata. O HTML de cada artigo é gerado no build. O JSON-LD usa BlogPosting, autoria institucional e publisher Interprete.

O sitemap é gerado por app/sitemap.ts a partir da mesma lista pública. A origem é derivada de NEXT_PUBLIC_SITE_URL ou VERCEL_PROJECT_PRODUCTION_URL; localhost é apenas fallback de desenvolvimento.

## Pages CMS

.pages.yml expõe a coleção Interprete. Blog em content/blog e mídias em public/blog. O CMS cria commits no Git; depois do commit, o pipeline executa lint, typecheck e build antes da publicação.

O draft deve permanecer ativado para uma nova entrada. Antes de marcar draft: false, confira texto, referências, links, capa/alt quando usados e o slug final.

## Como criar uma publicação

1. Crie content/blog/nome-do-artigo.md.
2. Preencha o frontmatter com os campos mínimos.
3. Escreva o corpo Markdown.
4. Rode npm run lint, npm run typecheck e npm run build.
5. Revise o índice, busca, filtros, artigo, referências e links.
6. Só então mude draft para false em uma revisão editorial aprovada.
