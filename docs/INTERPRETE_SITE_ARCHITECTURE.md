# Arquitetura do site Interprete.

## Visão geral

O site usa Next.js 16, React 19, TypeScript, App Router e Tailwind CSS 4. A identidade visual é a que já existia na página do Interprete.: Literata para títulos, Atkinson Hyperlegible para texto, IBM Plex Mono para rótulos e uma paleta mineral com cartografia, linhas e marcações editoriais.

A aplicação é estática onde o conteúdo permite. Não há banco, CMS executado no site público, API de conteúdo ou autenticação.

## Rotas

- / — landing institucional, com proposta, público, desenvolvimento, processo, formatos, CTA e conteúdos recentes.
- /blog — índice público com destaque, busca, filtro e estado vazio.
- /blog/[slug] — artigo pré-renderizado, referências, relacionados e compartilhamento.
- /interprete e /home — redirects permanentes para /.
- Rotas pessoais antigas foram removidas; não fazem parte da aplicação.

O header e o footer são compartilhados por PageShell em app/components.tsx. O menu móvel é o único componente de navegação com estado no cliente.

## Contato

O canal operacional é o WhatsApp configurado em lib/contact.ts. O número fica em um único ponto e todas as mensagens são institucionais. Não há e-mail ou rede social no site.

## SEO

lib/site.ts resolve a origem a partir de NEXT_PUBLIC_SITE_URL, depois VERCEL_PROJECT_PRODUCTION_URL e, em desenvolvimento, http://localhost:3000.

O layout define metadata-base, title template, Open Graph, Twitter e ícone. Cada artigo define title, description, canonical, Open Graph, Twitter e JSON-LD BlogPosting. app/sitemap.ts lista somente a landing, o blog e artigos públicos; app/robots.ts referencia esse sitemap.

## Como rodar

~~~bash
npm ci
npm run dev
npm run lint
npm run typecheck
npm run build
~~~

O build falha de propósito quando um artigo tem frontmatter inválido, corpo vazio, slug fora do padrão, data inválida, CTA inválido, evento inconsistente ou capa referenciada inexistente.
