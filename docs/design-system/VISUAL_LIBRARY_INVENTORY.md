# Inventário da biblioteca visual do Interprete.

Data da auditoria: 5 de setembro de 2026

Este inventário registra a leitura das cinco referências externas e das dez pranchas autorais usadas na reconstrução visual do site institucional. A regra de autoridade é: instruções do fundador nesta tarefa > Design System canônico anexado > biblioteca autoral do Interprete. > referências externas de comportamento > mockups legados.

As referências externas foram usadas apenas para estudar composição, escala, crop, transição, profundidade e ritmo. Nenhum logo, texto, fotografia ou identidade de terceiros foi copiado. As pranchas autorais foram tratadas como matéria-prima visual; as composições antigas não foram reproduzidas literalmente quando conflitavam com as hard rules do Design System.

## Referências externas

| Arquivo | Leitura de comportamento | Decisão para o site |
| --- | --- | --- |
| Referência 01 | Close clássico em preto e branco, alto contraste, grain e crop muito próximo. | Reinterpretada como detalhe fotográfico e tensão de escala na biblioteca visual; sem copiar a imagem. |
| Referência 02 | Fragmento clássico claro, massa branca e recorte escultórico atravessando o campo. | Absorvida como regra de fragmento, máscara e foreground/background; o site usa o recorte autoral do Interprete. |
| Referência 03 | Página universitária escura com imagem de viewport, sobreposição, navegação, cards e transições de profundidade. | Usada para o comportamento de camadas e mudança de superfície; não determina a paleta nem a identidade do Interprete. |
| Referência 04 | Tipografia gigante sobre imagem institucional e ocupação integral da primeira dobra. | Reinterpretada na relação headline/campo visual, com escala responsiva e função editorial. |
| Referência 05 | Preto e branco com gesto cromático, halftone, tipo extremo, fragmentos e transições entre regiões. | Absorvida como ritmo, intervenção, anotação e conexão; sem importar ativos de terceiros. |

## Pranchas autorais

| Prancha | Conteúdo observado | Aplicação na reconstrução |
| --- | --- | --- |
| 01 — essência da marca | Pink Essence com papel, Dark Amaranth estrutural, Classic Crimson como gesto, tipografia serif/mono, botânica, círculo, crop clássico, mão e microgrid. | Base material da home, cabeçalho, notas, linhas, índices, textura de papel e fragmento clássico extraído. |
| 02 — biblioteca visual | Famílias de evidência, interpretação, leitura crítica, anotações, gráficos, prática clínica, pessoas e passagem de evidência para decisão. | Taxonomia das composições e do DNA escolar; orienta a distribuição de imagem, nota, dado e conexão nas rotas. |
| 03 — website/hero | Explorações de hero com headline, estátua, círculo e CTAs, além de variações de composição digital. | Usada como fonte de fragmentos e proporções. O hero final é um academic canvas e não repete a fórmula estátua + círculo + título gigante. |
| 04 — blog e artigos | Listagem, featured article, cabeçalho de artigo, autoria, citação, referências, limitações, relacionados e labels. | Reconstrução integral de `/blog` e `/blog/[slug]`, com largura de leitura, trilho editorial e compartilhamento preservados. |
| 05 — iconografia | Ícones de busca, artigo, livro, vídeo, áudio, calendário, biblioteca, download, seta, play, checklist, pergunta, evidência, citação, pessoa, grupo, comentário, filtro, bookmark, gráfico, tabela, pasta, certificado e link. | `StudyIcon` em `app/visuals.tsx`, com stroke fino, proporção compacta e uso sem círculos decorativos genéricos. |
| 06 — visualização científica | Forest plot, intervalo de confiança, effect size, risco, NNT, GRADE, fluxograma, resumo de evidência e tabelas. | Recorte real do forest plot na home; linguagem de dados aplicada à seção de ciência e ao artigo sem transformar ciência em decoração. |
| 07 — templates editoriais | Sistemas de post, índice, microtipografia, composição modular e chamadas editoriais. | Ritmo de labels, índices, chamadas e cards do Blog e da biblioteca de conteúdos. |
| 08 — sistema fotográfico | Equipe real, retratos, mãos, papel, leitura, aula, tela, interação e contexto; tratamento natural e não-stock. | Quatro recortes reais para a biblioteca: `team`, `hand-writing`, `portrait` e `classroom`. |
| 09 — motion system | Reveal, desenho de linha, máscara, entrada de nota, conexão, foco e progressão; sem partículas ou parallax gratuito. | CSS transitions/reveals, underlines, mudança de foco das abas, linha de progresso do artigo e gestos de hover/foco. |
| 10 — kit institucional | Aplicações institucionais, superfícies, assinatura, organização de informação e contato. | Regras compartilhadas de Header, Footer, CTA, páginas institucionais e estados de contato. |

## Assets autorais extraídos e reaproveitados

Os arquivos abaixo foram extraídos com recortes selecionados das pranchas e convertidos para WebP de retina. Nenhuma prancha inteira foi publicada como imagem de fundo ou “PDF em HTML”.

| Asset no código | Origem e função | Rotas / comportamento |
| --- | --- | --- |
| `public/interprete/visual-library/photography/team.webp` | Prancha 08, faixa de equipe em situação de estudo; 1260 × 438. | Home e `/sobre`; faixa horizontal em desktop, crop mais fechado no mobile. |
| `public/interprete/visual-library/photography/hand-writing.webp` | Prancha 08, mão anotando ao lado de livros; 680 × 566. | Home, na ferramenta de pergunta; imagem inline no caderno de estudo, sem crop agressivo no mobile. |
| `public/interprete/visual-library/photography/portrait.webp` | Prancha 08, retrato contextual; 660 × 566. | Biblioteca fotográfica para a composição institucional e variações responsivas. |
| `public/interprete/visual-library/photography/classroom.webp` | Prancha 08, ambiente de aula; 684 × 566. | `/sobre`; detalhe de vida real da escola com moldura e anotação. |
| `public/interprete/visual-library/classical/statue-fragment.webp` | Prancha 01, detalhe escultórico em preto e branco; 474 × 993. | Hero da home e hero do Blog; máscara/crop e camada foreground, nunca estátua inteira como solução automática. |
| `public/interprete/visual-library/texture/paper-grain.webp` | Prancha 01, amostra de papel/grain; 272 × 220. | Textura discreta de `PAPER`, repetida via CSS sem filtro pesado ou blur. |
| `public/interprete/visual-library/visualization/forest-plot.webp` | Prancha 06, recorte de forest plot; 915 × 834. | Seção de visualização científica da home; `object-fit: contain` e legenda para manter os dados legíveis. |

## Mapeamento de materialidade e interação

- `PAPER`: superfícies claras de leitura, hero da home e páginas informativas; textura de papel com contraste suficiente.
- `GLASS`: reservado às camadas contextuais do caderno/hero, sem transformar toda interface em vidro.
- `ANNOTATION`: notas deslocadas, sublinhados, círculos, índice e pergunta condutora.
- `HIGHLIGHT`: gesto de Classic Crimson para marcar conteúdo existente, não para criar decoração aleatória.
- `NOTE`: comentários de campo, limitações, autoria e contexto lateral.
- `FICHA`: blocos de síntese no percurso e no Blog, com função didática própria.
- `RAIL`: trilho de método, progresso do artigo e sequência de estudo.

## Cobertura por rota

| Rota | Famílias do DNA presentes | Biblioteca aplicada |
| --- | --- | --- |
| `/` | Escola/estudo, marcas de interpretação, camadas, cultura clássica contemporânea, vida real, movimento de raciocínio. | Fragmento, papel, mão, forest plot, equipe, ícones, rail, abas e reveals. |
| `/blog` | Escola/estudo, marcas de interpretação, camadas, cultura clássica contemporânea, movimento de raciocínio. | Fragmento, paper/grain, iconografia, labels, filtros, busca e curadoria. |
| `/blog/[slug]` | Escola/estudo, marcas de interpretação, camadas, cultura clássica contemporânea, vida real, movimento de raciocínio. | Cabeçalho editorial, reading rail, share actions, leitura em camadas, referências, citação e relacionados. |
| `/planos` | Escola/estudo, marcas de interpretação, camadas, vida real, movimento de raciocínio. | Fichas de formato, linha de progressão, anotação e CTA institucional. |
| `/sobre` | Escola/estudo, marcas de interpretação, camadas, cultura clássica contemporânea, vida real. | Classroom/team photography, quote, princípios, material paper e leitura institucional. |

## Critérios de exclusão

Não foram publicados: imagens de terceiros das referências externas; pranchas inteiras; logos recriados; blobs, gradientes, glow, partículas, WebGL, mockups em perspectiva, ícones utilitários em círculos, grade 3×N como gramática geral ou a composição legada de estátua inteira + círculo + headline gigante.

Os recortes foram mantidos como matéria visual identificável, mas recombinados em comportamento web: scroll, foco, hover, tabs, rails, estados responsivos, progresso de leitura, navegação e mudanças de camada.
