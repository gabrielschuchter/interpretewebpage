# Arquitetura do site Interprete

## Visão geral

O site usa Next.js 16, React 19, TypeScript, App Router e Tailwind CSS 4. A camada visual pública preserva a arquitetura de conteúdo e interação do produto, mas segue o Design System canônico do Interprete: canvas Pink Essence, superfícies planas, Dark Amaranth estrutural, tipografia editorial e leitura científica.

A experiência é editorial e institucional, não um clone visual de uma Academy: hierarquia vem de Source Serif Pro, Inter, IBM Plex Mono, espaço, bordas e cor chapada. Não há dependência de azul/navy, DM Sans, gradientes, blur, partículas, sombras decorativas ou marquee contínuo.

A landing é composta por `app/academy-home.tsx` por compatibilidade histórica de nome, mas suas seções usam classes `it-*` e assets oficiais. As interações permanecem separadas em tabs de ferramentas, grupos hierárquicos, accordions, carousel e FAQ; os dados de marketing ficam centralizados em `lib/interprete/marketing.ts`.

## Rotas

- `/` — landing institucional com hero, ferramentas, conteúdos recentes, percurso, suporte, método, CTA, FAQ e links para formatos.
- `/blog` — índice público com destaque, busca, filtro, cards e estado vazio.
- `/blog/[slug]` — artigo pré-renderizado, leitura, compartilhamento, referências, citação, CTA contextual e relacionados.
- `/planos` — formatos confirmados, preços atuais, cadência e CTA operacional.
- `/sobre` — princípios e modo de trabalho do Interprete, sem biografias ou números não confirmados.
- `/interprete` e `/home` — redirects permanentes para `/`.

O header e o footer compartilhados estão em `app/components.tsx`. O menu móvel está em `app/interactive.tsx`; a busca do blog e o compartilhamento permanecem componentes com estado no cliente. Os loaders de página usam skeleton plano, sem shimmer gradiente.

## Conteúdo e contato

O blog continua usando Markdown, `gray-matter`, Zod, SSG, `generateStaticParams`, `generateMetadata`, MiniSearch e o CMS baseado em `.pages.yml`. Rascunhos não são publicados.

O canal operacional é o WhatsApp configurado em `lib/contact.ts`. O número fica em um único ponto e as mensagens são institucionais. Não há depoimentos, certificados, universidades, professores ou métricas inventados.

## SEO

`lib/site.ts` resolve a origem a partir de `NEXT_PUBLIC_SITE_URL`, depois `VERCEL_PROJECT_PRODUCTION_URL` e, em desenvolvimento, `http://localhost:3000`.

O layout define metadata-base, title template, Open Graph, Twitter e ícone. Cada artigo define title, description, canonical, Open Graph, Twitter e JSON-LD `BlogPosting` com publisher Interprete. `app/sitemap.ts` lista a landing, o blog, formatos, sobre e artigos públicos; `app/robots.ts` referencia esse sitemap.

## Motion e acessibilidade

O CSS local limita movimento a transições de estado e respeita `prefers-reduced-motion`. O JavaScript porta estados de hover/focus, menu móvel, accordions, tabs, carousel, FAQ, feedback de navegação e loading. Controles mantêm nomes acessíveis, foco visível e área de toque de pelo menos 44px.

## Como rodar

```bash
npm ci
npm run dev
npm run lint
npm run typecheck
npm run build
```

O build falha de propósito quando um artigo tem frontmatter inválido, corpo vazio, slug fora do padrão, data inválida, CTA inválido, evento inconsistente ou capa referenciada inexistente.
