# Decisões do sistema

Registro de decisões que complementam ou corrigem as fontes anteriores. A entrada mais recente não apaga a anterior: ela a substitui explicitamente.

## D001 — Proporção cromática corrigida
**Status:** aprovada  
**Data:** 2026-09-04  
**Escopo:** toda a marca

A seção 6.6 do Manual de Marca v1 mostra Pink Essence 60%, Crimson Violet 20%, Dark Amaranth 12% e Classic Crimson 8%.

A proporção aprovada pelos fundadores é:

- Pink Essence: 60%.
- Dark Amaranth: 20%.
- Crimson Violet: 12%.
- Vermelho de destaque: 8%.

O slot de 8% usa Classic Crimson OU Debian Red. A regra do manual “nunca dois vermelhos disputando a mesma peça” continua valendo.

**Consequência:** esta decisão prevalece sobre o gráfico/texto do PDF e deve ser refletida em tokens, templates, revisão e implementação.

## D002 — Source Serif Pro é a serif canônica
**Status:** aprovada por precedência documental  
**Data:** 2026-09-04

Os mockups de interface usam Source Serif 4 em sua implementação empacotada. O Manual de Marca define Source Serif Pro. Portanto, Source Serif 4 é artefato do protótipo e não substitui Source Serif Pro.

## D003 — Neutros de apoio dos mockups
**Status:** aprovada como camada de interface  
**Data:** 2026-09-04

Os mockups introduzem #FFFFFF, #40222F, #7A5A69, #E2D6D1 e #E4DAD5. Essas cores podem existir como tokens de suporte para superfície, texto secundário, borda e canvas. Não são “novas cores de marca”, não entram na proporção 60/20/12/8 e não podem competir visualmente com a paleta oficial.

## D004 — UI atual é legado
**Status:** aprovada  
**Data:** 2026-09-04

A implementação azul existente no repositório antecede o novo Manual de Marca. Classes academy-*, a paleta azul, DM Sans, o símbolo recriado em CSS, gradientes, sombras e a linguagem arredondada atual não são referência para novo trabalho.

Este commit não faz a migração visual do produto. Ele estabelece o contrato que deverá orientar uma migração separada e controlada.

## D005 — Sombra não é linguagem de hierarquia
**Status:** aprovada por interpretação do manual + mockups  
**Data:** 2026-09-04

O Manual proíbe sombra na logomarca e privilegia cor chapada, alto contraste e muito respiro; os mockups constroem hierarquia sobretudo com bordas e espaço. Portanto, novos componentes têm shadow:none por padrão. Camadas transitórias podem receber separação funcional excepcional, preferencialmente via backdrop e borda.

## D006 — Cantos predominantemente retos
**Status:** aprovada por referência de mockup  
**Data:** 2026-09-04

Painéis, cards, tabelas e formulários usam raio 0 por padrão. Raio 8 e pill são reservados para ativos da marca ou semântica genuína de chip/pílula. Isso evita importar a linguagem “soft SaaS” do site legado.

## D007 — Vermelho semântico é slot, não dupla
**Status:** aprovada  
**Data:** 2026-09-04

Classic Crimson é a ação/destaque padrão. Debian Red pode substituí-lo quando a peça pedir o acento previsto no manual. A coexistência dos dois como destaques concorrentes é proibida.

## Como adicionar decisão

Cada nova decisão deve registrar:
- problema;
- decisão;
- fonte ou evidência;
- alternativas rejeitadas;
- impacto em tokens/componentes;
- data e responsável pela aprovação.

Se a decisão alterar o contrato público do sistema, atualize também INTERPRETE_DESIGN_SYSTEM.md, tokens e CHANGELOG.md.
