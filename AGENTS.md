# Interprete. — regras obrigatórias para agentes

Este repositório contém o sistema de design canônico do Interprete. Antes de criar, refatorar ou revisar qualquer interface, leia:

1. docs/design-system/INTERPRETE_DESIGN_SYSTEM.md
2. docs/design-system/DECISIONS.md
3. docs/design-system/CHECKLIST.md
4. docs/design-system/COMPONENTS.md e docs/design-system/PATTERNS.md quando aplicável
5. brand/README.md para uso de marca e ativos

## Fonte de verdade

A ordem de precedência é:

1. docs/design-system/INTERPRETE_DESIGN_SYSTEM.md e decisões aprovadas em docs/design-system/DECISIONS.md.
2. Correções explícitas registradas pelos fundadores.
3. Manual de Marca v1, preservado em brand/source/.
4. Ativos oficiais em public/brand/.
5. Mockups aprovados em brand/source/ como referência de implementação.
6. Código atual do site apenas como legado técnico, nunca como referência visual.

A decisão D001 corrige a seção 6.6 do Manual de Marca: a proporção canônica é Pink Essence 60%, Dark Amaranth 20%, Crimson Violet 12% e um slot de vermelho de destaque de 8%. O slot de 8% usa Classic Crimson OU Debian Red; nunca os dois competindo na mesma composição.

## Hard gates

- Não inventar cores. Em UI nova, usar tokens do sistema.
- Não usar a paleta azul --academy-* como referência. O site existente antecede este sistema e é legado.
- Não usar gradientes.
- Não criar logomarca com texto, CSS, pseudo-elementos ou ícones improvisados. Usar os arquivos oficiais.
- O ponto final faz parte de “Interprete.” e nunca é removido.
- Não aplicar sombra decorativa como linguagem de hierarquia. Priorizar espaço, contraste, borda e cor chapada.
- Não usar fotografia ou ilustração meramente decorativa.
- Não colocar dois vermelhos em disputa. Classic Crimson e Debian Red são alternativas de acento.
- Source Serif Pro = editorial/display; Inter = interface e leitura; IBM Plex Mono = dados/rótulos técnicos.
- Fundo claro é o padrão. Superfície escura é exceção deliberada para capas, aberturas, fechamentos e momentos simbólicos.
- Todo estado deve continuar compreensível sem depender apenas de cor.
- Texto corrido deve atingir WCAG AA; Classic Crimson e Debian Red não são cores de corpo sobre Pink Essence.
- Implementação nova deve ser mobile-first e respeitar prefers-reduced-motion.
- Conteúdo público da marca não recebe assinatura individual.

## Regra de alteração

Uma mudança que contradiga o sistema não é “ajuste visual”: é mudança de design system. Registre-a primeiro em DECISIONS.md e atualize tokens, documentação e exemplos na mesma mudança.

## Legado

Os arquivos app/tokens.css, app/globals.css, app/components.tsx e partes de app/layout.tsx ainda carregam a identidade azul anterior. Não copie classes academy-*, cores, marca recriada, gradientes, sombras ou arredondamentos desse legado para trabalho novo. Consulte docs/design-system/MIGRATION.md antes de migrá-los.

## Definição de pronto

Nenhuma UI nova está pronta sem passar pelo checklist de marca, interface, acessibilidade e conteúdo de docs/design-system/CHECKLIST.md.
