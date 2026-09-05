# Interprete. Design System

## Status

Versão inicial implementável. Este documento é a referência de produto para a interface do Interprete. e deve ser lido junto do manual de marca e do diretório `assets/`.

## Fonte de verdade

- Regras de marca e conteúdo: `assets/interprete-manual-de-marca.v1.pdf`.
- Regras editoriais e governança: `assets/manual-marca-interprete.docx`.
- Assinaturas oficiais: `assets/interprete-logomarcas/`.
- Tokens executáveis: `app/tokens.css` e `lib/design-system.ts`.
- Referência viva: `/design-system`.

## Paleta e proporção

| Cor | Hex | Função | Proporção |
| --- | --- | --- | ---: |
| Pink Essence | `#F1EBE8` | Canvas claro dominante | ~58% |
| Dark Amaranth | `#8C1535` | Cor estrutural, marca e CTA primário | ~28% |
| Classic Crimson | `#D62839` | Conversão e destaque | ~7% |
| Debian Red | `#D60858` | Acento alternativo | ~5% |
| Crimson Violet | `#410230` | Uso crítico/excepcional | até ~2% |

Os percentuais são dominância perceptiva. Crimson Violet pode ficar em 0% e não deve ser usado como fundo padrão, cabeçalho, navegação, CTA primário, texto corrido, borda padrão ou primeira série de gráfico. Classic Crimson e Debian Red são alternativas do mesmo slot de acento.

## Tipografia

- `Source Serif Pro`: wordmark, títulos editoriais e frases de autoridade.
- `Inter`: interface, botões, planos, cards e texto corrido.
- `IBM Plex Mono`: rótulos, dados, tags técnicas e tabelas.

Fallbacks: Georgia/Times para display, system sans para interface e Menlo/Consolas para mono.

## Marca

- Escrever sempre `Interprete.` com o ponto final.
- Preferir o wordmark quando houver espaço.
- Usar o símbolo isolado em favicon, avatar, redes sociais e espaços reduzidos.
- Respeitar área de proteção igual à altura do `I` em todos os lados.
- Tamanho mínimo digital: wordmark 90 px; símbolo 32 px.
- Não distorcer, recolorir, sombrear, girar, aplicar gradiente, sobrepor em fundo carregado ou recriar o lettering.

## Interface

- Fundo Pink Essence é o padrão; Dark Amaranth é a superfície institucional principal. Crimson Violet fica reservado a usos críticos/excepcionais.
- Uma cor domina, duas apoiam e uma corta. Evitar dar o mesmo peso a todas as cores.
- Usar grid explícito, bastante respiro e texto corrido alinhado à esquerda.
- Áreas clicáveis devem ter no mínimo 44 px em mobile.
- Estados de foco devem ser sempre visíveis e usar `--color-focus`/`--focus-ring`.
- Movimento deve usar os tokens centrais de duração, easing, distância e stagger do sistema.

## Conteúdo

Toda peça precisa:

1. Pertencer a um pilar e a um território.
2. Ter fonte rastreável para afirmações técnicas.
3. Expor o racional, não só a conclusão.
4. Explicitar a incerteza quando ela existir.
5. Terminar com pergunta, ação ou próximo passo.
6. Passar por revisão de alguém que não escreveu.

## Pilares e territórios

Todo conteúdo ou superfície editorial deve declarar os dois campos abaixo antes de ser produzido.

### Pilares

- Busca: encontrar a evidência certa para a pergunta certa.
- Interpretação: entender o que o estudo mede, não mede e autoriza dizer.
- Transitividade: fazer a ponte entre o dado e o paciente real.
- Letramento crítico: reconhecer autoridade, gráficos enganosos e os próprios vieses.

### Territórios

- O bastidor da decisão: mostrar o caminho, não apenas o veredito.
- A autoridade sob suspeita: questionar a afirmação, nunca atacar a pessoa.
- Do artigo ao paciente: testar aplicabilidade, viabilidade e contexto.
- O erro como método: tornar revisões de crença visíveis e honestas.
- Formação e começo de carreira: acolher a insegurança sem condescendência.

## Voz e tom

O sistema combina professor claro e paciente com mentor socrático. O texto deve ser direto, didático, horizontal e rigoroso. Ironia leve é possível uma vez por peça e somente contra ideias, práticas ou argumentos.

Evitar discurso motivacional, promessa de transformação, prova social baseada em paciente, ataque nominal, certeza maior que a evidência e assinatura individual.

## Escala tipográfica

| Elemento | Família | Tamanho de referência | Entrelinha |
| --- | --- | ---: | ---: |
| Título de peça | Source Serif Pro SemiBold | 32–44 pt | 1,15 |
| Subtítulo | Source Serif Pro SemiBold | 18–24 pt | 1,2 |
| Rótulo de seção | IBM Plex Mono | 8–10 pt | espaçamento +2 |
| Texto corrido | Inter Regular | 11–13 pt | 1,3 |
| Legenda e nota | Inter Regular | 9–10 pt | 1,2 |
| Dado numérico | IBM Plex Mono | 10–12 pt | alinhado à tabela |

## Mockups de referência

`assets/Mockups-01.html` é referência de direção para seis superfícies: landing, portal, guia/relatório, ferramenta, newsletter e mobile. Ele informa composição, ritmo, densidade e hierarquia; não substitui os tokens nem autoriza copiar fontes remotas, conteúdo ou cores fora deste sistema.

## Implementação atual

As rotas públicas usam tokens canônicos, classes `it-*` e assets oficiais. Componentes novos devem usar exclusivamente os tokens `--color-*`, `--font-*`, `--space-*`, `--radius-*` e `--motion-*`; nomes técnicos legados não são referência visual.

### Estado da migração

- Fundação de tokens: implementada.
- Assinaturas oficiais, favicon e logo compartilhado: implementados.
- Página viva de referência em `/design-system`: implementada.
- Landing, páginas institucionais, blog, loaders e estados de erro: migrados; cores e mockups azuis não devem ser usados como referência para novos componentes.
