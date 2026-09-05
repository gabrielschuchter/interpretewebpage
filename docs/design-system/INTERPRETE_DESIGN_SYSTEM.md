# Interprete. Design System

Versão 1.0 · setembro de 2026 · fonte canônica para produto, site, conteúdo, materiais e fornecedores.

O sistema traduz o Manual de Marca do Interprete. em regras implementáveis. Seu objetivo não é oferecer uma coleção de sugestões: é reduzir decisões arbitrárias e garantir que peças feitas por pessoas diferentes continuem parecendo pertencer à mesma escola.

## 1. Princípios

### 1.1 Racional antes do ornamento
A interface deve tornar estrutura, estado e raciocínio visíveis. Aparência nunca esconde incerteza, fonte, unidade ou limite.

### 1.2 Clareza editorial
Hierarquia vem de tipografia, espaço, contraste e bordas. A marca não depende de efeitos para parecer sofisticada.

### 1.3 Cor chapada
Gradientes são proibidos. Texturas podem existir como materialidade discreta, desde que não prejudiquem legibilidade ou substituam hierarquia.

### 1.4 Mobile-first
A menor tela é uma condição de projeto, não um recorte posterior. O conteúdo principal deve permanecer íntegro sem depender de hover, largura ampla ou interação precisa.

### 1.5 Rigor acessível
A marca é técnica sem ser hermética. Jargão é explicado. Dados são legíveis. Acessibilidade é requisito de marca.

## 2. Hierarquia de autoridade

Quando duas referências divergem, prevalece:

1. este documento e DECISIONS.md;
2. o Manual de Marca v1 e seus assets oficiais;
3. mockups aprovados, quando não contradizem este contrato;
4. código legado.

## 3. Cor

### 3.1 Paleta oficial

| Token | Nome | Hex | Função principal |
| --- | --- | --- | --- |
| color.pinkEssence | Pink Essence | #F1EBE8 | fundo claro dominante; texto sobre escuro |
| color.darkAmaranth | Dark Amaranth | #8C1535 | cor primária; marca; superfícies institucionais; menus |
| color.classicCrimson | Classic Crimson | #D62839 | conversão e destaque |
| color.debianRed | Debian Red | #D60858 | acento alternativo |
| color.crimsonViolet | Crimson Violet | #410230 | exceção crítica ou institucional; uso mínimo |

Neutros de apoio derivados dos mockups aprovados podem ser usados em interface, mas não alteram a paleta de marca:

| Token | Hex | Uso |
| --- | --- | --- |
| support.white | #FFFFFF | superfície elevada por contraste, não por sombra |
| support.ink | #40222F | corpo de texto quando uma camada intermediária for útil |
| support.muted | #7A5A69 | metadado e texto secundário com contraste suficiente |
| support.border | #E2D6D1 | divisória e borda sutil |
| support.canvas | #E4DAD5 | canvas externo, documentação e mockup; uso pontual |
| support.black | #000000 | versão monocromática e necessidades técnicas |

### 3.2 Proporção canônica

Em uma composição clara típica, use a seguinte dominância perceptiva aproximada:

- 58% Pink Essence.
- 28% Dark Amaranth.
- 7% Classic Crimson.
- 5% Debian Red.
- até 2% Crimson Violet.

Os percentuais são orientação de peso visual, não uma divisão literal de pixels. Crimson Violet é opcional e pode ficar em 0%. Classic Crimson e Debian Red ocupam o mesmo slot de acento: escolha um por peça, sem competição.

A proporção mede dominância visual aproximada, não pixels literais. Grandes áreas de fundo, blocos, tipografia pesada, bordas e CTAs têm pesos perceptivos diferentes. A regra serve para evitar igualdade cromática.

### 3.3 Exceção de superfície escura

Capas, aberturas de seção, fechamentos e peças de alta densidade simbólica podem usar Dark Amaranth como campo institucional e Pink Essence como texto. Crimson Violet fica reservado a aplicações críticas ou excepcionais e não deve virar o fundo padrão do produto. Use no máximo um vermelho de acento.

### 3.4 Combinações de contraste aprovadas

- Dark Amaranth sobre Pink Essence: aprovado para texto e marca.
- Ink sobre Pink Essence: aprovado para texto corrido.
- Pink Essence ou branco sobre Dark Amaranth: aprovado.
- Branco sobre Classic Crimson e Debian Red: apropriado para rótulos/ações em tamanho normal.
- Classic Crimson ou Debian Red sobre Pink Essence: não usar em corpo de leitura; reserve a display, ícone, borda ou elemento com contraste validado.

WCAG AA é o piso: 4,5:1 para texto normal e 3:1 para texto grande e componentes gráficos relevantes.

### 3.5 Tokens semânticos

- background.default = Pink Essence
- surface.default = White
- surface.brand = Dark Amaranth
- surface.dark = Dark Amaranth
- text.strong = Dark Amaranth
- text.body = Ink
- text.muted = Muted
- text.onDark = Pink Essence
- border.subtle = Border
- border.strong = Dark Amaranth
- action.primary = Dark Amaranth
- action.conversion = Classic Crimson
- action.alt = Debian Red
- focus = Dark Amaranth
- critical = Crimson Violet

Nunca troque um token semântico por uma cor crua dentro de componentes novos.

## 4. Tipografia

### 4.1 Famílias

**Source Serif Pro**  
Wordmark, títulos editoriais, frases de autoridade e momentos de alta hierarquia. Pesos usuais 600 e 400. Fallback: Georgia, Times New Roman, serif.

**Inter**  
Interface, navegação, botões, cards, formulários e leitura longa. Pesos usuais 400, 500, 600 e 700. Fallback: -apple-system, BlinkMacSystemFont, sans-serif.

**IBM Plex Mono**  
Dados, medidas, IDs, rótulos técnicos, pequenas taxonomias e tabelas numéricas. Usar com moderação. Fallback: Menlo, Consolas, monospace.

### 4.2 Escala digital

| Papel | Família | Tamanho | Peso | Linha |
| --- | --- | --- | --- | --- |
| Hero | Source Serif Pro | clamp(3rem, 6vw, 5.5rem) | 600 | .98–1.02 |
| Display | Source Serif Pro | clamp(2.5rem, 5vw, 4rem) | 600 | 1.05 |
| H1 | Source Serif Pro | clamp(2rem, 4vw, 3rem) | 600 | 1.10 |
| H2 | Source Serif Pro | clamp(1.75rem, 3vw, 2.25rem) | 600 | 1.15 |
| H3 | Source Serif Pro | clamp(1.375rem, 2vw, 1.75rem) | 600 | 1.20 |
| Body large | Inter | 1.125rem | 400 | 1.55 |
| Body | Inter | 1rem | 400 | 1.60 |
| Body small | Inter | .875rem | 400 | 1.55 |
| Label | IBM Plex Mono | .6875rem | 500/600 | 1.30 |
| Data | IBM Plex Mono | .875–1rem | 400/500 | 1.40 |

Rótulo técnico usa caixa alta e tracking entre .16em e .18em. Texto corrido fica alinhado à esquerda. Centralização é reservada a capa e fechamento.

### 4.3 Regras de leitura

- Largura de leitura ideal: até 68ch.
- Não reduzir corpo para “fazer caber”.
- Números e unidades devem permanecer inseparáveis quando isso evita ambiguidade.
- Tabelas numéricas alinham valores à direita ou por casa decimal quando necessário.

## 5. Espaçamento e grid

Escala base: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 72 e 96 px.

- Canvas máximo de interface institucional: 1440px; container de conteúdo: 1180–1280px, preferencialmente 1240px.
- Conteúdo editorial: até 68ch, com alvo de leitura de aproximadamente 740px.
- Padding lateral: 18–24px mobile, 32px tablet, 48px desktop.
- Grid: 4 colunas mobile, 8 tablet, 12 desktop.
- Gutters: 16px mobile, 24px tablet, 24px desktop.
- Breakpoints de referência: 480, 768, 1024 e 1280px.
- Se um componente precisa de mais um breakpoint para funcionar, priorize comportamento intrínseco antes de adicionar regra global.

Muito respiro é parte da identidade. Não comprimir cartões ou seções para aumentar densidade visual sem necessidade funcional.

## 6. Geometria

### 6.1 Bordas
- 1px: separação sutil.
- 2px: hierarquia forte, seleção, contêiner editorial ou ferramenta.
- Cor padrão: support.border; forte: Dark Amaranth.

### 6.2 Raio
- 0: padrão de cards, painéis e campos estruturais.
- 2px: microcorreção técnica.
- 8px: apenas ativos/pílulas aprovadas ou necessidades funcionais específicas.
- 999px: chip/pílula somente quando a semântica for realmente de pílula.

Grandes cartões arredondados não são linguagem padrão da marca.

### 6.3 Sombra
Padrão: none. Hierarquia usa borda, contraste, espaço e sobreposição real. Se uma camada transitória exigir separação, prefira backdrop sólido + borda; sombra deve ser excepcional, discreta e funcional, nunca estética.

## 7. Marca e logomarca

Use apenas arquivos em public/brand/.

### 7.1 Preferência
1. Wordmark quando houver espaço.
2. Pílula quando o fundo exigir contenção/contraste.
3. Símbolo I. quando a restrição de espaço for real: favicon, avatar, app icon.
4. Símbolo solto como marca d’água/aplicação discreta.

### 7.2 Proteção e mínimo
- Área de proteção: altura do “I” em todos os lados.
- Wordmark: mínimo 90px digital / 25mm impresso.
- Símbolo: mínimo 32px digital / 10mm impresso.
- Fundo claro: wordmark Dark Amaranth ou Crimson Violet quando o contraste estiver validado.
- Fundo escuro: wordmark Pink Essence.
- Monocromático: preto ou branco integral.

### 7.3 Proibições
Não distorcer, recolorir fora da paleta, sombrear, contornar, aplicar brilho/gradiente, girar, usar em baixo contraste ou redigitar/recriar. O ponto final nunca é removido.

## 8. Imagem, textura e ícones

### 8.1 Imagem
Não existe “foto para preencher espaço”. Uma imagem precisa informar, documentar ou contextualizar: estudo real, ambiente de aprendizagem, gráfico, captura de ferramenta, material de aula ou evidência visual pertinente.

Textura é permitida, sobretudo em peças editoriais, desde que:
- seja subordinada ao conteúdo;
- não reduza contraste;
- não vire ruído atrás de texto ou logo;
- não seja usada como substituto de informação.

### 8.2 Ícones
- Traço simples, 1.5–2px.
- Monocromáticos.
- Sem gradiente, duotone ou 3D.
- Ícone nunca é a única pista de estado; acompanhe com texto/label quando a interpretação não for universal.

## 9. Interação e movimento

- Alvos interativos: mínimo recomendado 44×44px.
- Foco visível: 2–3px, alto contraste, offset suficiente.
- Duração usual: 120–520ms, conforme o papel da interação.
- Movimento: priorizar opacity e transform; reveals usam distância pequena, blur leve e stagger discreto.
- Não usar animação decorativa contínua.
- O comportamento de movimento é único e consistente em todas as rotas; não criar ramificações por preferência do dispositivo.
- Hover não pode carregar informação indispensável.

## 10. Componentes essenciais

A anatomia detalhada está em COMPONENTS.md. O conjunto mínimo inclui:
Button, Link, Header/Nav, Card, Badge/Tag, Alert/Callout, inputs e selects, Checkbox/Radio/Switch, Accordion, Tabs, Menu/Popover, Modal/Dialog, Toast, Table, Data block, Reference/Citation, Article card, Empty state, Loading skeleton e Footer.

Regra comum: cada variante existe por diferença semântica, não para oferecer “opções visuais”.

## 11. Dados e visualização

- IBM Plex Mono para medidas e valores.
- Eixos, unidade, período e fonte sempre visíveis.
- Dark Amaranth como série principal.
- Classic Crimson ou Debian Red como série de destaque, conforme o slot ativo.
- Crimson Violet não é a primeira série e pode ser omitido.
- Não usar cor como único canal: combine com rótulo, padrão, forma ou anotação.
- Sem 3D, perspectiva, gradiente ou truncamento enganoso de eixo.
- O gráfico deve preservar magnitude e incerteza quando relevantes.
- Referência completa ou rastreável acompanha dado técnico.

## 12. Padrões de página e conteúdo

Padrões aprovados estão em PATTERNS.md e cobrem:
- landing/formação;
- portal do aluno;
- guia pré-aula;
- relatório pós-aula;
- ferramenta de leitura crítica;
- blog/artigo;
- newsletter;
- feed, carrossel e story;
- slides/aula;
- telas mobile.

Os mockups de Drive são referência de composição: bordas fortes, superfícies planas, muita área vazia, hierarquia editorial e ausência de efeitos. Não copie números, artigos ou textos fictícios como conteúdo real.

## 13. Acessibilidade

- WCAG AA como requisito mínimo.
- HTML semântico antes de ARIA.
- Ordem de foco acompanha ordem visual.
- Focus visible nunca removido.
- Labels persistentes em campos.
- Erro inclui texto/instrução, não só cor.
- Imagem informativa tem alt objetivo.
- Imagem puramente decorativa, quando excepcionalmente existir, tem alt vazio.
- Tabelas usam caption/th e escopo apropriado.
- Gráficos trazem resumo textual quando carregam informação.
- Vídeo/aula gravada deve prever legenda/transcrição no produto final.
- Zoom de 200% não pode destruir operação principal.

## 14. Conteúdo como parte do design

Toda peça deve:
1. pertencer a um pilar e território reconhecíveis;
2. permitir rastrear afirmação técnica;
3. expor o racional, não apenas o veredito;
4. mostrar grau de certeza e limitações;
5. definir jargão na primeira aparição;
6. terminar em pergunta, tarefa ou próximo passo quando o formato comportar.

A voz equilibra professor claro e paciente com mentor socrático. Ironia é leve, no máximo uma vez por peça, nunca dirigida a pessoa/profissão/aluno e não é linguagem recorrente de aula, guia, relatório ou avaliação.

## 15. Governança

### 15.1 Revisão cruzada
Quem produz não aprova sozinho. Material público passa por revisão de outra pessoa.

### 15.2 Versionamento
- Major: muda princípio, paleta, tipografia, proporção, linguagem estrutural ou contrato de componente.
- Minor: adiciona componente/padrão ou amplia regra sem quebrar.
- Patch: corrige ambiguidade ou documentação.

### 15.3 Alterações
Qualquer exceção recorrente deve virar decisão registrada. “Ficou bonito” não é justificativa suficiente; a decisão precisa declarar problema, evidência de uso, impacto e como será testada.

## 16. Regra final

O sistema deve fazer o Interprete. parecer uma escola que abre o raciocínio: editorial, clara, técnica, humana e deliberada. Quando houver dúvida entre duas soluções, escolha a que aumenta legibilidade, rastreabilidade e autonomia — não a que adiciona efeito.
