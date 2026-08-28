# Arquitetura do site Interprete

## Visão geral

O site usa Next.js 16, React 19, TypeScript, App Router e Tailwind CSS 4. A camada visual pública segue a arquitetura estrutural da Psicometria Online Academy fornecida no source kit: header escuro em cápsula, hero dividido, faixa de confiança em marquee, painel de ferramentas, percurso hierárquico, suporte, seção azul de método, CTA final, FAQ e footer.

O clone preserva a linguagem de layout, densidade, tipografia local DM Sans, paleta azul/navy/cinza claro, raios, bordas, sombras, estados e ritmo vertical da fonte. A identidade, a navegação e os textos são do Interprete; alegações, instituições, pessoas, depoimentos e métricas da Academy não são reutilizados quando não há confirmação equivalente.

A landing é composta por `app/academy-home.tsx`, que mantém as interações da página em componentes pequenos: tabs de ferramentas, grupos hierárquicos, accordions, carousel de percurso, FAQ, marquee e CTA com partículas. Os dados de marketing ficam centralizados em `lib/interprete/marketing.ts`.

## Rotas

- `/` — landing institucional com hero, ferramentas, conteúdos recentes, percurso, suporte, método, CTA, FAQ e links para formatos.
- `/blog` — índice público com destaque, busca, filtro, cards e estado vazio.
- `/blog/[slug]` — artigo pré-renderizado, leitura, compartilhamento, referências, citação, CTA contextual e relacionados.
- `/planos` — formatos confirmados, preços atuais, cadência e CTA operacional.
- `/sobre` — princípios e modo de trabalho do Interprete, sem biografias ou números não confirmados.
- `/interprete` e `/home` — redirects permanentes para `/`.

O header e o footer compartilhados estão em `app/components.tsx`. O menu móvel está em `app/interactive.tsx`; a busca do blog e o compartilhamento permanecem componentes com estado no cliente. Os loaders de página usam skeleton/shimmer da mesma linguagem visual.

## Conteúdo e contato

O blog continua usando Markdown, `gray-matter`, Zod, SSG, `generateStaticParams`, `generateMetadata`, MiniSearch e o CMS baseado em `.pages.yml`. Rascunhos não são publicados.

O canal operacional é o WhatsApp configurado em `lib/contact.ts`. O número fica em um único ponto e as mensagens são institucionais. Não há depoimentos, certificados, universidades, professores ou métricas inventados.

## SEO

`lib/site.ts` resolve a origem a partir de `NEXT_PUBLIC_SITE_URL`, depois `VERCEL_PROJECT_PRODUCTION_URL` e, em desenvolvimento, `http://localhost:3000`.

O layout define metadata-base, title template, Open Graph, Twitter e ícone. Cada artigo define title, description, canonical, Open Graph, Twitter e JSON-LD `BlogPosting` com publisher Interprete. `app/sitemap.ts` lista a landing, o blog, formatos, sobre e artigos públicos; `app/robots.ts` referencia esse sitemap.

## Motion e acessibilidade

O CSS local inclui os keyframes usados pela experiência: marquee, pulse de avatar/WhatsApp, reveal, shimmer, scan-light, spin, trail e scale-pulse. O JavaScript porta estados de hover/focus, menu móvel animado, accordions, tabs, carousel, FAQ, feedback de navegação e loading. Não existe lógica de detecção ou desativação de animações por preferência do sistema; os estados continuam determinísticos para a validação visual solicitada.

## Como rodar

```bash
npm ci
npm run dev
npm run lint
npm run typecheck
npm run build
```

O build falha de propósito quando um artigo tem frontmatter inválido, corpo vazio, slug fora do padrão, data inválida, CTA inválido, evento inconsistente ou capa referenciada inexistente.
