# Implementation plan

## Diagnóstico
O repositório remoto estava vazio. A implementação parte de uma base Next.js nova, usando a pasta local `gabriel-schuchter-design-system` como fonte dos tokens e contratos.

## Arquitetura
Next.js App Router, TypeScript, CSS variables sem dependências UI adicionais. Rotas: `/`, `/acompanhamento-nutricional` e `/interprete`. Shell compartilhado com Header, Footer, Button e temas semânticos.

## Plano executado
1. Criar base Next.js e tokens globais.
2. Implementar navegação, Home e dois serviços.
3. Integrar fotografias reais fornecidas.
4. Implementar responsividade, estados de foco e metadata.
5. Validar build e revisar estados/links.

## Riscos e dados ausentes
Contato, agenda, CRN, redes sociais e preços não foram fornecidos; o CTA usa e-mail como fallback real, sem inventar dados.
