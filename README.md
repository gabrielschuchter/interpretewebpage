# Interprete.

Site institucional do Interprete., com landing page e blog editorial estático sobre Prática Baseada em Evidências.

## Desenvolvimento

~~~bash
npm ci
npm run dev
~~~

Abra http://localhost:3000.

## Verificação

~~~bash
npm run lint
npm run typecheck
npm run build
~~~

## Rotas

- / — landing institucional do Interprete.
- /blog — índice público com busca e filtro por categoria.
- /blog/[slug] — artigo estático renderizado a partir de Markdown.
- /interprete — redirect permanente para /.
- /home — redirect permanente para /.

## Conteúdo

Os artigos ficam em content/blog e são validados durante o build. A configuração do Pages CMS está em .pages.yml; o padrão de novos conteúdos é draft: true.

## URL pública

Defina NEXT_PUBLIC_SITE_URL para gerar canonical, Open Graph e sitemap com a origem pública. Na Vercel, VERCEL_PROJECT_PRODUCTION_URL é usado como fallback quando a variável pública não estiver definida.

## Design system do Interprete.

O sistema de design canônico está em [docs/design-system](docs/design-system/README.md). Novas interfaces e migrações devem seguir `AGENTS.md` e o checklist obrigatório.

A identidade azul existente é legado e não deve ser usada como referência visual para trabalho novo. Ativos oficiais estão em `public/brand/`; fontes originais e inventário do Google Drive ficam em `brand/source/`.
