# Auditoria do design system oficial

## Fonte de verdade

- Fonte original: `C:\Users\gabsc\Documents\Codex\gabriel-schuchter-design-system\design-system`.
- Cópia versionada no projeto: `app/tokens.css`.
- Contratos de implementação: `design-system/01_GLOBAL_FOUNDATIONS.md`, `05_COMPONENT_LIBRARY.md` e `08_IMPLEMENTATION_GUIDE.md`.
- O sistema oficial usa três famílias: Literata para display/editorial, Atkinson Hyperlegible Next para corpo/UI e IBM Plex Mono para dados e metadados funcionais.

## Tokens oficiais encontrados

`app/tokens.css` define containers (`--gs-container`, `--gs-container-wide`), leitura (`--gs-reading`), gutters e gaps, escala de espaçamento de 0 a 160px, raios de 4px a pill, foco, sombras, curvas e tempos de movimento. Também define as paletas semânticas completas para `home`, `nutrition`, `interprete`, superfícies escuras e estados.

Os temas são aplicados por `data-theme` e expõem `--theme-background`, `--theme-surface`, `--theme-text`, `--theme-text-muted`, `--theme-primary`, `--theme-border`, `--theme-focus` e equivalentes de cada serviço.

## Conflitos identificados

1. `app/tokens.css` existia, mas não era importado pelo layout; portanto não governava a cascata.
2. `app/globals.css` redefinia tokens com valores literais para cores, fontes, gutters, container, raios, sombras e movimentos.
3. `app/hero-overrides.css` e `app/entry-selection.css` repetiam cores e tempos fora da escala oficial.
4. `next/font` expunha aliases locais (`--serif`, `--sans`, `--mono`) sem ligá-los aos tokens `--gs-font-*`.
5. Tailwind v4 e `@heroui/styles` estavam presentes como infraestrutura, mas nenhum componente HeroUI era usado. A auditoria não encontrou componente externo controlando a anatomia das páginas; o conflito visual vinha da ordem/importação de CSS e das duplicações locais. A importação visual de HeroUI foi removida; a dependência permanece instalada para não ampliar o escopo da migração.

## Estratégia aplicada

- Importar `tokens.css` antes das camadas de componentes.
- Expor os tokens oficiais ao `@theme inline` do Tailwind sem duplicar valores.
- Fazer os aliases legados apontarem para tokens semânticos, preservando a estrutura existente.
- Ligar as fontes carregadas pelo Next aos tokens oficiais.
- Trocar cores, raios, sombras, gutters, container e tempos recorrentes dos estilos de entrada/hero por variáveis oficiais.
- Manter os componentes, interações, animações, rotas e conteúdo; não substituir a biblioteca própria por componentes genéricos.

## Exceções controladas

Grafismos SVG, filtros de fotografia e geometrias editoriais continuam locais porque são parte da composição dos heroes, não tokens de interface. Eles continuam herdando a cor temática sempre que há um token semântico equivalente.
