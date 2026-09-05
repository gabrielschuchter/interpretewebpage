# Biblioteca de componentes — contrato

Os componentes abaixo descrevem anatomia, variantes e estados. Não são uma licença para multiplicar opções visuais. Variantes existem quando mudam semântica ou comportamento.

## 1. Button

### Anatomia
Label + ícone opcional + estado.

### Variantes
- Primary: fundo Classic Crimson, texto branco, borda da própria cor.
- Secondary: fundo transparente/Pink Essence, texto Crimson Violet, borda 2px Crimson Violet.
- Tertiary: texto Dark Amaranth/Crimson Violet, sem caixa; sublinhado ou indicação visual no hover/focus.
- Destructive/critical: Crimson Violet como superfície + Pink Essence/white, acompanhado de linguagem explícita. Não usar Debian/Classic apenas para “parecer perigoso”.

### Tamanhos
- sm: altura mínima 36px apenas em contexto denso e não touch.
- md: 44px mínimo.
- lg: 48–52px.
Touch target final nunca abaixo de 44×44px sem área de toque compensatória.

### Estados
Default, hover, active, focus-visible, disabled, loading.  
Disabled reduz contraste apenas o suficiente para indicar indisponibilidade; label continua legível. Loading mantém largura para não gerar salto de layout.

### Regras
- Sem gradiente.
- Sem sombra decorativa.
- Raio 0 por padrão.
- Debian Red pode substituir Classic Crimson numa peça, mas então Classic Crimson sai da composição como acento concorrente.

## 2. Link

- Inline editorial: sublinhado persistente ou ao menos affordance inequívoca sem depender de cor.
- Navegação: Inter medium; área de toque adequada.
- Link técnico/DOI: pode usar IBM Plex Mono.
- Externo: ícone opcional, mas o texto deve continuar suficiente.

## 3. Header / Navigation

### Anatomia
Wordmark oficial + navegação principal + ação contextual.

- Usar SVG oficial do wordmark.
- Não reconstruir “Interprete.” com texto/CSS.
- Cabeçalho claro por padrão: Pink Essence/white, borda inferior forte/sutil.
- Cabeçalho escuro é permitido em capa/abertura, mantendo wordmark creme.
- Mobile: menu explícito, foco gerenciado e fechamento previsível.
- Um CTA primário por nível de navegação.

## 4. Card

### Padrão
- superfície White ou Pink Essence;
- borda 1px support.border ou 2px Crimson Violet;
- raio 0;
- shadow none;
- padding 24–32px;
- título Source Serif Pro quando editorial; Inter semibold quando operacional.

### Variantes
- Editorial: título serif + metadados.
- Operational: título Inter + estado/ação.
- Data: IBM Plex Mono para métricas.
- Selected: borda 2px Crimson Violet + marcador textual/ícone; não depender só de cor.

Cards não devem virar pequenos “banners decorativos”. Cada card representa uma unidade real.

## 5. Badge / Tag

- IBM Plex Mono, uppercase, 10–12px equivalente, tracking alto.
- Dark Amaranth/Pink Essence para marca/estado neutro.
- Classic Crimson/white para destaque se esse for o vermelho ativo.
- Debian Red/white como alternativa de acento.
- Crimson Violet/Pink Essence para crítico.
- Não usar duas famílias de vermelho na mesma composição.
- Tags interativas devem parecer controles e ter foco/target adequados; tags estáticas não simulam botão.

## 6. Alert / Callout

### Semântica
- Information: borda/fundo Dark Amaranth com contraste apropriado ou superfície clara com faixa Dark Amaranth.
- Attention: Classic Crimson ou vermelho de acento ativo + ícone/texto.
- Critical: Crimson Violet + texto claro.
- Success/confirmed: Dark Amaranth + check + label “confirmado/concluído”; o sistema não precisa introduzir verde apenas por convenção.

Sempre incluir ícone ou label textual. Nunca confiar só na cor.

## 7. Text input / Textarea / Select

- Label persistente acima do campo.
- Helper text abaixo.
- Borda 1px support.border; focus 2px Dark Amaranth/Crimson Violet.
- Fundo white.
- Texto Crimson Violet/Ink.
- Placeholder muted, nunca substitui label.
- Erro: mensagem explícita + ícone/marcador; cor de acento é apoio.
- Altura mínima 44px.
- Raio 0.
- Textarea redimensionável quando possível.

## 8. Checkbox / Radio / Switch

- Área clicável >=44px.
- Estado selecionado deve ter forma/ícone além de cor.
- Checkbox: check visível.
- Radio: ponto interno.
- Switch apenas para estado binário imediato; não usar switch para ação que exige salvar/confirmar.
- Label é clicável.

## 9. Accordion

- Trigger ocupa a largura toda.
- Pergunta/título em Inter semibold ou Source Serif Pro em contexto editorial.
- Indicador de expansão muda forma/orientação.
- Divisórias visíveis.
- Sem card arredondado por item.
- aria-expanded e associação com painel obrigatórias.

## 10. Tabs

- Apenas para visões equivalentes da mesma tarefa.
- Tab ativa: borda inferior/lateral 2px + peso de texto; não apenas mudança de cor.
- Teclado segue padrão de tabs quando o widget é implementado como ARIA tabs.
- Em mobile, se não couber, priorizar scroll horizontal acessível ou transformar o padrão; não comprimir texto.

## 11. Menu / Popover

- Superfície White ou Dark Amaranth conforme contexto.
- Borda 2px Crimson Violet ou equivalente no escuro.
- Sem sombra por padrão; se precisar separar de conteúdo visualmente complexo, usar backdrop/borda e registrar a exceção.
- Focus trap somente quando a semântica exigir modal; popover comum não deve prender foco.

## 12. Modal / Dialog

- Backdrop sólido/translúcido em Crimson Violet, sem blur decorativo obrigatório.
- Painel White/Pink Essence, borda 2px.
- Cabeçalho, conteúdo e ações claramente separados.
- Botão fechar com nome acessível.
- Foco inicial deliberado, focus trap e retorno de foco ao acionador.
- Ação primária única e ação de cancelamento clara.

## 13. Toast / Notification

- Feedback curto, não substitui mensagem persistente de erro importante.
- Ícone + label.
- Não desaparecer cedo demais.
- Deve ser anunciado por live region quando apropriado.
- Não usar verde como dependência semântica; utilizar tokens da marca + texto/ícone.

## 14. Table

- Cabeçalho Inter semibold; números IBM Plex Mono.
- Linha de cabeçalho 2px Crimson Violet; linhas internas 1px support.border.
- Sem zebra automática se a separação por linhas resolver.
- Valores alinhados à direita; rótulos à esquerda.
- Unidade no cabeçalho ou junto ao valor de modo consistente.
- Caption/descrição quando a tabela é informativa.
- Mobile: priorizar scroll horizontal com cabeçalho preservado ou transformação sem perda de relação; não esconder colunas importantes sem alternativa.

## 15. Data block / Metric

Anatomia:
rótulo técnico + valor + unidade + intervalo/incerteza + contexto temporal/fonte.

- Label: IBM Plex Mono uppercase.
- Valor: IBM Plex Mono, destaque por tamanho.
- Intervalo e n não podem ser reduzidos a nota ilegível.
- Se a interpretação depende de comparação, exibir a referência/base.

Exemplo conceitual: RR 0,82 · IC95% 0,70–0,96 · n = 1.240.

## 16. Reference / Citation

- Corpo Inter pequeno; DOI/PMID/identificador pode ser Mono.
- Link sublinhado.
- Em peça científica, a fonte deve ser rastreável mesmo quando a referência completa vive no final.
- Não transformar referência em “rodapé invisível”.

## 17. Article card

Anatomia:
tipo/categoria → título → resumo → data/tempo de leitura → próximo passo.

- Título Source Serif Pro.
- Metadados Inter/Mono.
- Imagem apenas se informativa; fallback tipográfico é preferível a fotografia decorativa.
- O card inteiro pode ser link, mas não aninhar controles interativos.

## 18. Empty state

- Título factual.
- Explicação breve do porquê está vazio.
- Próximo passo real.
- Sem ilustração genérica.
- Se o vazio é esperado, não tratar como erro.

## 19. Loading / Skeleton

- Preferir reserva de espaço estável.
- Skeleton plano, sem shimmer gradiente.
- Se duração puder ser longa, usar texto de status.
- Respeitar reduced motion.

## 20. Footer

- Wordmark oficial.
- Navegação institucional.
- Dados legais/contato.
- Fundo Pink Essence ou escuro institucional.
- Não transformar footer em grande banner promocional.
- Assinatura pública é Interprete., não fundador individual.

## 21. Composição entre componentes

1. Uma área tem um CTA primário.
2. Bordas fortes não se acumulam em todas as camadas.
3. Um painel filho não precisa repetir a mesma cor de marca do pai.
4. Densidade de labels Mono deve permanecer baixa.
5. O sistema deve continuar legível em grayscale.
6. Componentes novos entram aqui apenas depois de provar necessidade recorrente.
