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

A decisão D001 fixa a hierarquia canônica: Pink Essence aproximadamente 58%, Dark Amaranth aproximadamente 28%, Classic Crimson aproximadamente 7%, Debian Red aproximadamente 5% e Crimson Violet até aproximadamente 2%. Crimson Violet é excepcional e pode ficar em 0%; Classic Crimson e Debian Red são alternativas do mesmo slot de acento.

## Hard gates

- Não inventar cores. Em UI nova, usar tokens do sistema.
- Não usar a identidade azul legada, nomes técnicos ou classes --academy-* como referência visual. O runtime público migrado usa classes `it-*`.
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
- Implementação nova deve ser mobile-first e seguir os motion tokens centrais do site.
- Conteúdo público da marca não recebe assinatura individual.

## Regra de alteração

Uma mudança que contradiga o sistema não é “ajuste visual”: é mudança de design system. Registre-a primeiro em DECISIONS.md e atualize tokens, documentação e exemplos na mesma mudança.

## Legado

Os arquivos app/tokens.css, app/globals.css, app/components.tsx e app/layout.tsx são a implementação pública dos tokens canônicos. Não reintroduza classes, cores, marca recriada, gradientes, sombras ou arredondamentos da identidade azul legada. Consulte docs/design-system/MIGRATION.md antes de alterar a linguagem visual.

## Definição de pronto

Nenhuma UI nova está pronta sem passar pelo checklist de marca, interface, acessibilidade e conteúdo de docs/design-system/CHECKLIST.md.
