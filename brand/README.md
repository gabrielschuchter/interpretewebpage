# Ativos de marca — Interprete.

Esta pasta documenta a origem e o contrato dos ativos oficiais. Arquivos de uso em runtime ficam em public/brand/.

## Estrutura

- public/brand/svg/ — vetores oficiais; opção preferencial para web.
- public/brand/png/ — bitmaps transparentes oficiais.
- public/brand/favicon/ — ícones oficiais em 32, 64, 180 e 512 px.
- brand/source/ — fontes de referência preservadas do Google Drive: Manual de Marca, documento de trabalho, mockups, pacote original e inventário.
- brand/source/SOURCES.md — IDs, nomes e relação de precedência.

## Variantes

- wordmark-* — assinatura principal. Use sempre que houver espaço.
- pilula-* — wordmark dentro do container aprovado. Use quando o fundo exigir contenção.
- simbolo-* — “I.” em quadrado arredondado para avatar, favicon e espaços restritos.
- simbolo-solto-* — “I.” sem container para marca d’água e aplicação discreta.

## Cores dos nomes

- amaranto = Dark Amaranth #8C1535
- violeta = Crimson Violet #410230
- crimson = Classic Crimson #D62839
- creme = Pink Essence #F1EBE8
- preto/branco = versões monocromáticas

## Regras

1. O ponto final é parte do nome.
2. Não redigitar/reconstruir o wordmark.
3. Não distorcer.
4. Não recolorir fora da paleta.
5. Não aplicar sombra, contorno, brilho ou gradiente.
6. Não girar.
7. Não usar sobre imagem carregada/baixo contraste.
8. Área de proteção: altura do “I” em todos os lados.
9. Mínimo digital: wordmark 90px; símbolo 32px.
10. Em fundo claro: Crimson Violet ou Dark Amaranth. Em fundo escuro: Pink Essence.

## Nota de precedência

A composição canônica do projeto, conforme `docs/design-system/DECISIONS.md`, D001, é uma orientação de dominância perceptiva:

**Pink Essence ~58% · Dark Amaranth ~28% · Classic Crimson ~7% · Debian Red ~5% · Crimson Violet até ~2%.**

Crimson Violet pode ficar em 0% e não é cor padrão de fundo, navegação, CTA, texto ou borda. Classic Crimson e Debian Red ocupam o mesmo slot de acento; nunca competem na mesma peça.
