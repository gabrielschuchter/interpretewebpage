# Migração do site legado para o design system

## Estado atual

O repositório contém uma implementação anterior ao Manual de Marca. Ela usa uma identidade visual azul, DM Sans, componentes com sombras, arredondamentos amplos, gradientes e um símbolo recriado em CSS.

Arquivos centrais afetados:
- app/tokens.css
- app/globals.css
- app/components.tsx
- app/layout.tsx
- componentes e páginas que consomem classes academy-*

Isso não invalida a lógica do site. Significa apenas que o visual atual não deve ser usado como fonte de decisão.

## Princípio

Não fazer uma “troca de azul por vermelho”. O novo sistema muda cor, tipografia, geometria, logomarca, hierarquia e padrões. Uma substituição mecânica criaria uma interface híbrida e inconsistente.

## Fase 0 — concluída por este pacote

- preservar fontes de referência;
- importar ativos oficiais;
- estabelecer tokens e regras;
- registrar correção cromática;
- marcar o legado explicitamente;
- criar checklist e padrões.

Sem alteração visual de produção nesta fase.

## Fase 1 — fundação técnica

1. Carregar Source Serif Pro, Inter e IBM Plex Mono de fonte licenciada/aprovada.
2. Introduzir tokens canônicos em camada própria.
3. Criar primitives mínimas: Container, Stack, Cluster, Text, Heading, Button, Link.
4. Adicionar uso de SVG oficial para marca.
5. Remover dependência de cores cruas em componentes migrados.

Gate: nenhuma mudança de página completa antes de primitives passarem acessibilidade.

## Fase 2 — shell global

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
- azul/navi por tokens;
- pills genéricas por geometria do sistema;
- sombras por bordas/espaço.

Gate: desktop + mobile + teclado + reduced-motion.

## Fase 3 — componentes

Migrar por família:
1. Buttons/links.
2. Cards.
3. Formulários.
4. Accordions/tabs.
5. Alerts/toasts.
6. Tabelas/dados.
7. Article cards.

Não migrar um componente “por aparência”; alinhar anatomia, estados e semântica ao contrato de COMPONENTS.md.

## Fase 4 — páginas institucionais

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

## Fase 5 — blog e conteúdo

- aplicar 68ch e hierarquia editorial;
- revisar cards sem fotografia decorativa;
- garantir referência legível;
- adaptar templates do Pages CMS ao padrão editorial;
- revisar autoria pública conforme Manual de Marca.

## Fase 6 — produto/portal

Aplicar padrões de portal, guia, relatório e ferramenta de leitura crítica. A arquitetura funcional pode ser preservada; a hierarquia deve enfatizar próxima ação, estado e racional.

## Estratégia de compatibilidade

Durante transição:
- legado fica sob classes academy-*;
- componentes novos devem usar prefixo it-* ou CSS Modules/tokens novos;
- não misturar tokens antigos e novos no mesmo componente;
- uma página pode migrar por seção somente se a fronteira visual for deliberada e temporária;
- remover legado apenas quando não houver consumidor.

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
- reduced motion;
- screenshot visual comparada com o novo sistema, não com a identidade azul anterior.

## Não fazer

- busca/substituição global de hex;
- reconstruir logo com fonte;
- portar gradiente/sombra “porque já existia”;
- manter DM Sans em parte nova;
- adicionar verde/sucesso, amarelo/warning ou azul/info sem decisão do sistema;
- criar dezenas de variantes para acomodar legado;
- quebrar lógica funcional para obter consistência visual.

A meta é migrar sem contaminar o sistema novo com decisões antigas.
