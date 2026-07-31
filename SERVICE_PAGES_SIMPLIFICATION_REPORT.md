# Relatório — simplificação das páginas de serviço

## Proteção e branches

- Estado anterior preservado e publicado em `backup/service-pages-before-simplification`.
- Tag criada e publicada: `backup-before-service-copy-refactor`.
- Implementação feita em `feat/simplify-service-pages`.
- Nenhum histórico da `main` foi reescrito.

## Acompanhamento nutricional

Preservada a hero existente. Abaixo dela, a página foi reduzida a:

- uma seção objetiva com formação, registro profissional, experiência e os sete itens de “O que você recebe”;
- uma dobra final para a primeira conversa gratuita, sem chamá-la de consulta e sem prometer avaliação, diagnóstico ou prescrição;
- rodapé.

Foram removidos da renderização os blocos intermediários de processo, prova social, FAQ, suporte promocional e componentes de recomendação.

## Interprete.

Preservada a composição da hero, com a foto solicitada `gabriel-microfone.jpg` e moldura vertical ajustada para manter rosto e microfone enquadrados.

O conteúdo abaixo da hero foi reimplementado em HTML/CSS nativos, na ordem editorial do PDF:

1. Quem sou eu.
2. O que é o Interprete. e seus três pilares.
3. Plano de ação com os seis passos e referência bibliográfica.
4. Plano operacional das 12 semanas.
5. Formatos e valores atuais dos planos.
6. Primeira conversa gratuita.

Os diagramas foram convertidos em listas e grades responsivas, sem incorporar páginas rasterizadas ou criar visualizador de PDF.

## Divergências comerciais

Os nomes, frequências, quantidades, durações e valores dos três planos conferem entre o PDF e os dados atuais do repositório:

- Orientação: R$ 1.200 → R$ 1.000; um encontro mensal de uma hora; R$ 250 por hora.
- Aprofundamento: R$ 1.300 → R$ 1.100; dois encontros mensais de uma hora; R$ 185 por hora.
- Imersão clínica: R$ 1.400 → R$ 1.200; quatro encontros mensais de até uma hora e meia; R$ 90 por aula.

O PDF e a versão anterior traziam a expressão “melhor custo-benefício”. Ela não foi publicada na nova página por depender de confirmação comercial. O terceiro cartão mantém apenas destaque visual de composição, sem selo ou promessa.

## Limpeza e validação

- Removidos imports e renderizações de `FAQ`, `Quote`, `PathSelector`, `NutritionCycle`, `InterpreteDemo`, `Timeline`, `PlanAdvisor` e `InPageNav` das páginas afetadas.
- Removidos os blocos antigos de planos, depoimentos, FAQ e processo nutricional do bridge de estilos.
- `npm run lint` passou; artefatos de browser em `output/playwright` passaram a ser ignorados pelo ESLint.
- `npx tsc --noEmit` passou.
- `npm run build` passou e gerou as rotas `/acompanhamento-nutricional` e `/interprete` como páginas estáticas.
- CTAs finais verificados com mensagens de WhatsApp específicas para cada página.
- Modais das CTAs existentes da hero verificados e mantidos.
- Viewports 320, 360, 390, 430, 768, 820, 1024, 1280, 1440 e 1920 verificados sem rolagem horizontal.
- Screenshots gerados em `output/playwright/service-pages/`:
  - `acompanhamento-nutricional-desktop.png`
  - `acompanhamento-nutricional-tablet.png`
  - `acompanhamento-nutricional-mobile.png`
  - `interprete-desktop.png`
  - `interprete-tablet.png`
  - `interprete-mobile.png`

As heroes foram comparadas antes/depois; a composição foi mantida. No Interprete, a única alteração visual intencional adicional foi a substituição solicitada da foto e o ajuste da moldura.

## Decisões pendentes

- Confirmar humanamente se o destaque visual do terceiro plano deve permanecer ou se os três cartões devem ter o mesmo tratamento.
- Confirmar se a expressão comercial “melhor custo-benefício” deve voltar em algum momento.
