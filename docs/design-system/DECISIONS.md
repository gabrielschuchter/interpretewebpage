# Decisões do sistema

Registro de decisões que complementam ou corrigem as fontes anteriores. A entrada mais recente não apaga a anterior: ela a substitui explicitamente.

## D001 — Hierarquia cromática canônica
**Status:** aprovada  
**Data:** 2026-09-04  
**Escopo:** toda a marca

A composição orientadora aprovada para interfaces e peças claras é:

- Pink Essence: aproximadamente 58%.
- Dark Amaranth: aproximadamente 28%.
- Classic Crimson: aproximadamente 7%.
- Debian Red: aproximadamente 5%.
- Crimson Violet: até aproximadamente 2%, apenas em situações excepcionais.

Os percentuais medem dominância perceptiva, não pixels literais. Dark Amaranth é a cor estrutural principal. Crimson Violet não deve ocupar fundo padrão, cabeçalho, navegação, CTA primário, texto corrido, borda padrão ou primeira série de gráfico. Classic Crimson e Debian Red são alternativas do mesmo slot de acento e não devem competir na mesma peça.

**Consequência:** esta decisão prevalece sobre qualquer composição anterior e deve ser refletida em tokens, templates, revisão e implementação.

## D002 — Source Serif Pro é a serif canônica
**Status:** aprovada por precedência documental  
**Data:** 2026-09-04

Source Serif Pro é a família serif canônica para títulos editoriais, chamadas de autoridade e leitura institucional. Fallbacks não alteram a decisão de marca.

## D003 — Neutros de apoio dos mockups
**Status:** aprovada como camada de interface  
**Data:** 2026-09-04

Os mockups introduzem #FFFFFF, #40222F, #7A5A69, #E2D6D1 e #E4DAD5. Essas cores podem existir como tokens de suporte para superfície, texto secundário, borda e canvas. Não são “novas cores de marca”, não entram na composição 58/28/7/5/até-2 e não podem competir visualmente com a paleta oficial.

## D004 — UI atual é legado
**Status:** aprovada  
**Data:** 2026-09-04

A implementação azul existente no repositório antecede o novo Manual de Marca. Classes e nomes técnicos legados podem permanecer temporariamente por compatibilidade, mas a superfície pública migrada usa tokens `it-*`, assets oficiais, tipografia canônica, cor chapada, bordas e espaço. O legado não é referência visual para novo trabalho.

Esta decisão é considerada concluída para as rotas públicas do site; qualquer superfície nova deve entrar pelo contrato canônico, não reabrir a linguagem legada.

## D005 — Sombra não é linguagem de hierarquia
**Status:** aprovada por interpretação do manual + mockups  
**Data:** 2026-09-04

O Manual proíbe sombra na logomarca e privilegia cor chapada, alto contraste e muito respiro; os mockups constroem hierarquia sobretudo com bordas e espaço. Portanto, novos componentes têm shadow:none por padrão. Camadas transitórias podem receber separação funcional excepcional, preferencialmente via superfície sólida e borda.

## D006 — Cantos predominantemente retos
**Status:** aprovada por referência de mockup  
**Data:** 2026-09-04

Painéis, cards, tabelas e formulários usam raio 0 por padrão. Raio 8 e pill são reservados para ativos da marca ou semântica genuína de chip/pílula. Isso evita importar a linguagem “soft SaaS” do site legado.

## D007 — Vermelho semântico é slot, não dupla
**Status:** aprovada  
**Data:** 2026-09-04

Dark Amaranth é a ação primária e a cor estrutural padrão. Classic Crimson é o acento de conversão; Debian Red pode substituí-lo quando a peça pedir o acento previsto no manual. A coexistência dos dois como destaques concorrentes é proibida. Crimson Violet fica reservado a usos críticos ou excepcionais.

## Como adicionar decisão

Cada nova decisão deve registrar:
- problema;
- decisão;
- fonte ou evidência;
- alternativas rejeitadas;
- impacto em tokens/componentes;
- data e responsável pela aprovação.

Se a decisão alterar o contrato público do sistema, atualize também INTERPRETE_DESIGN_SYSTEM.md, tokens e CHANGELOG.md.
