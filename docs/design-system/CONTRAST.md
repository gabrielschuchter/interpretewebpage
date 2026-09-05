# Contraste e combinações de cor

Referência de acessibilidade para a paleta aprovada. Razões abaixo são aproximadas pelo algoritmo WCAG de luminância relativa.

## Combinações principais

| Primeiro plano | Fundo | Razão aprox. | Uso |
| --- | --- | ---: | --- |
| Crimson Violet #410230 | Pink Essence #F1EBE8 | 13.94:1 | corpo, títulos, UI |
| Dark Amaranth #8C1535 | Pink Essence #F1EBE8 | 7.82:1 | texto, marca, rótulo |
| White #FFFFFF | Dark Amaranth #8C1535 | 9.24:1 | texto em superfície de marca |
| White #FFFFFF | Classic Crimson #D62839 | 4.97:1 | botão/rótulo |
| White #FFFFFF | Debian Red #D60858 | 5.20:1 | botão/rótulo alternativo |
| Muted #7A5A69 | Pink Essence #F1EBE8 | ~5.09:1 | texto secundário |
| Ink #40222F | Pink Essence #F1EBE8 | ~11.96:1 | corpo |

## Combinações proibidas para corpo

- Classic Crimson #D62839 sobre Pink Essence: ~4.21:1.
- Debian Red #D60858 sobre Pink Essence: ~4.41:1.

Ambas ficam abaixo de 4,5:1 para texto normal. Podem existir como elemento de display/ícone/borda quando o critério aplicável for atendido, mas não como cor padrão de parágrafo.

## Regras

1. WCAG AA é o piso: 4,5:1 para texto normal; 3:1 para texto grande e componentes gráficos relevantes.
2. Não considerar contraste apenas pelo hex: opacity, imagem, textura e blending mudam o resultado final.
3. Focus ring precisa se diferenciar do fundo e do próprio componente.
4. Estado não depende apenas de cor.
5. Se uma combinação nova for necessária, medir e registrar antes de incorporá-la aos tokens.
6. Em superfície escura, preferir Pink Essence/white para leitura.
7. Não clarear o vermelho até ele “passar” sem registrar nova cor; isso violaria a paleta.

## Dados e gráficos

Cor sozinha não codifica categoria ou estado. Adicionar rótulo direto, padrão, forma, anotação ou estilo de linha. Em impressões monocromáticas, a leitura principal deve sobreviver.
