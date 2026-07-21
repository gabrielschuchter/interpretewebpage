# Pesquisa de animação e decisões de implementação

Data: 2026-07-21

## APIs consultadas

- HeroUI: componentes e estados de interface; o projeto já usa a biblioteca em `app/interactive.tsx`, mas as heroes usam links e botões semânticos para preservar a leveza da primeira dobra.
- GSAP: timelines, contexto de limpeza, ScrollTrigger e matchMedia foram considerados para cenas fixadas e caminhos desenhados.
- Motion: transições de estado, hover, press e layout foram considerados para seleções e superfícies interativas.
- CSS: transições curtas, temas, linhas, texturas, foco e responsividade são suficientes para as mudanças das heroes desta rodada.

## Decisões

1. Não adicionar GSAP, Motion ou Anime.js como dependências novas só para animar a primeira dobra. O conteúdo essencial funciona como HTML e React state; CSS controla as transições ambientais, linhas e estados de foco.
2. A Home usa um estado explícito de serviço para alterar a atmosfera, revelar a rota correspondente e atualizar a mensagem. O caminho continua sendo um link real.
3. Nutrição usa uma linha SVG e um grid estático como metáfora de continuidade. A linha não carrega informação essencial e não depende de scroll hijacking.
4. Interprete. usa uma composição de rota cartográfica, palavras de fundo e marcador. A leitura, o CTA e a navegação permanecem disponíveis sem qualquer animação.
5. O modal de conversa continua responsável pelo foco, Escape, retorno de foco e mensagem de WhatsApp contextualizada.

## Registro de propriedades

| Experiência | Engine | Propriedades | Trigger | Cleanup / fallback |
| --- | --- | --- | --- | --- |
| Portal Home | CSS + React state | background, stroke, color, transform | hover, focus, toque | estado inicial e links reais |
| Hero Nutrição | CSS + SVG | opacity, background, filter | entrada e foco | grid e texto estáticos |
| Hero Interprete. | CSS + SVG | opacity, color, transform | entrada e foco | mapa e copy continuam visíveis |
| Modal | React + CSS | visibility, transform, opacity | clique, teclado | listeners removidos ao desmontar |

Recursos deliberadamente não utilizados: cursor personalizado, parallax forte, scroll hijacking, loader de tela cheia, carrossel para informação essencial, arraste obrigatório, troca de conteúdo dependente de hover e cenas fixadas sem ganho claro de compreensão.

Fontes consultadas:

- [GSAP documentation](https://gsap.com/docs/v3/GSAP/)
- [Motion for React](https://motion.dev/docs/react)
- [HeroUI](https://heroui.com/)
