# Migração do site para o Design System canônico

## Estado atual

As rotas públicas foram migradas para a linguagem canônica sem alterar a arquitetura funcional. Nomes técnicos que carregam histórico podem permanecer por compatibilidade, mas não definem mais classes, tokens, fontes, cores ou padrões visuais.

Arquivos centrais afetados:
- app/tokens.css
- app/globals.css
- app/components.tsx
- app/layout.tsx
- componentes e páginas que consumiam classes legadas; os consumidores públicos agora usam `it-*`

Isso não invalida a lógica do site. Significa apenas que o visual atual não deve ser usado como fonte de decisão.

## Princípio

Não fazer uma “troca de azul por vermelho”. O novo sistema muda cor, tipografia, geometria, logomarca, hierarquia e padrões. Uma substituição mecânica criaria uma interface híbrida e inconsistente.

## Fase 0 — concluída

- fontes de referência preservadas;
- assets oficiais importados e usados pelo runtime;
- tokens e regras canônicas estabelecidos;
- documentação, checklist e padrões alinhados ao Manual de Marca.

## Fase 1 — fundação técnica — concluída

1. Carregar Source Serif Pro, Inter e IBM Plex Mono de fonte licenciada/aprovada.
2. Introduzir tokens canônicos em camada própria.
3. Criar primitives mínimas: Container, Stack, Cluster, Text, Heading, Button, Link.
4. Adicionar uso de SVG oficial para marca.
5. Remover dependência de cores cruas em componentes migrados.

Gate atendido: lint, typecheck, build, foco visível, targets touch e motion tokens consistentes.

## Fase 2 — shell global — concluída

Migrar:
- layout/themeColor;
- header;
- navegação;
- menu mobile;
- footer;
- foco global;
- body/background/typografia.

Substituir:
- símbolo CSS por asset oficial;
- DM Sans por famílias canônicas;
- azul/navy por tokens canônicos;
- pills genéricas por geometria do sistema;
- sombras por bordas/espaço.

Gate atendido: desktop + tablet + mobile + teclado + motion system consistente.

## Fase 3 — componentes — concluída

Migrar por família:
1. Buttons/links.
2. Cards.
3. Formulários.
4. Accordions/tabs.
5. Alerts/toasts.
6. Tabelas/dados.
7. Article cards.

Não migrar um componente “por aparência”; alinhar anatomia, estados e semântica ao contrato de COMPONENTS.md.

## Fase 4 — páginas institucionais — concluída

Reconstruir landing usando PATTERNS.md:
- hero;
- origem;
- formato;
- somos/não somos;
- pilares;
- demonstração do método;
- FAQ;
- CTA;
- footer.

Validar proporção cromática em composição total e regra de um vermelho.

## Fase 5 — blog e conteúdo — concluída

- aplicar 68ch e hierarquia editorial;
- revisar cards sem fotografia decorativa;
- garantir referência legível;
- preservar templates do Pages CMS no padrão editorial;
- revisar autoria pública conforme Manual de Marca.

## Fase 6 — produto/portal

Aplicar padrões de portal, guia, relatório e ferramenta de leitura crítica. A arquitetura funcional pode ser preservada; a hierarquia deve enfatizar próxima ação, estado e racional.

## Estratégia de compatibilidade

Durante manutenção:
- componentes públicos usam prefixo `it-*` ou CSS Modules/tokens novos;
- não misturar tokens antigos e novos no mesmo componente;
- nomes técnicos legados podem ser removidos em uma alteração posterior sem mudar conteúdo ou comportamento;
- não reintroduzir a linguagem azul em novas superfícies.

## Verificação

Para cada etapa:
- lint;
- typecheck;
- build;
- teste de teclado;
- 320–390px mobile;
- 768px;
- 1024px;
- 1440px;
- zoom 200%;
- contraste;
- motion system consistente;
- screenshot visual comparada com o novo sistema, não com a identidade azul anterior.

## Não fazer

- fazer busca/substituição global de hex sem revisar a composição;
- reconstruir logo com fonte;
- portar gradiente/sombra “porque já existia”;
- manter DM Sans em parte nova;
- adicionar verde/sucesso, amarelo/warning ou azul/info sem decisão do sistema;
- criar dezenas de variantes para acomodar legado;
- quebrar lógica funcional para obter consistência visual.

A meta é manter a arquitetura estável sem contaminar o sistema novo com decisões antigas.
