# Mapa de motion e estados

O port usa somente os comportamentos que aparecem na experiência Academy e que têm função clara na página.

| Experiência | Implementação | Gatilho/estado |
| --- | --- | --- |
| Marquee de temas | `@keyframes scrollMarquee`, 30s linear; 18s em telas pequenas | Contínuo no bloco de temas. |
| Badge de abertura | `pulse` | Pulsação contínua do ponto verde da hero. |
| Botão flutuante | `whatsappPulse` | Pulsação contínua do botão de contato. |
| Entrada do menu | `fadein` | Abertura do menu móvel. |
| Destaque do carousel | `fadein2` | Troca de item pelos controles, dots ou teclado. |
| Linha do painel | `scan-light` | Movimento leve na composição visual do método. |
| Hover de links e cards | Transições de cor, sombra e deslocamento | Pointer e foco visível. |
| Ferramentas | Aba controlada por estado React | Clique/teclado troca painel e contador. |
| Hierarquia | Tabs controladas por estado React | Clique/teclado troca frente e reinicia o accordion. |
| Accordions | Grid rows com opacidade e padding | Clique/teclado abre ou fecha uma resposta. |
| Carousel | Controles, dots e `aria-live` | Clique/teclado navega pelos cinco itens. |

Não há ramo de CSS ou JavaScript para desativar essas transições. O objetivo é preservar a linguagem de motion da fonte em todas as larguras testadas.
