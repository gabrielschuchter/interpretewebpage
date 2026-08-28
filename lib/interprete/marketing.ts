export type AcademyTool = {
  title: string;
  description: string;
  detail: string;
  icon: 'question' | 'search' | 'book' | 'chart' | 'shield' | 'layers';
};

export type LearningGroup = {
  title: string;
  shortTitle: string;
  description: string;
  items: string[];
};

export const academyTools: AcademyTool[] = [
  {
    title: 'Pergunta clínica',
    description: 'Defina o que precisa ser decidido antes de abrir a busca.',
    detail: 'Um roteiro para transformar a dúvida da prática em uma pergunta investigável, sem reduzir o raciocínio a uma fórmula.',
    icon: 'question',
  },
  {
    title: 'Busca de evidências',
    description: 'Escolha onde e como procurar respostas relevantes.',
    detail: 'Organize termos, fontes e critérios para chegar a estudos que realmente respondem ao problema que você formulou.',
    icon: 'search',
  },
  {
    title: 'Leitura crítica',
    description: 'Reconstrua como um estudo chegou aos seus resultados.',
    detail: 'Passe pela pergunta, desenho, população, comparação, desfecho e risco de viés antes de aceitar uma conclusão.',
    icon: 'book',
  },
  {
    title: 'Interpretação estatística',
    description: 'Leia medidas de efeito e incerteza no contexto.',
    detail: 'Entenda o que uma estimativa, um intervalo de confiança e uma associação permitem dizer — e onde a interpretação termina.',
    icon: 'chart',
  },
  {
    title: 'Certeza da evidência',
    description: 'Calibre o quanto uma conclusão merece confiança.',
    detail: 'Separe o resultado observado da certeza que o conjunto de estudos oferece para cada desfecho relevante.',
    icon: 'shield',
  },
  {
    title: 'Aplicação à decisão',
    description: 'Leve a evidência para a situação que motivou a pergunta.',
    detail: 'Conecte resultados, limites e contexto sem transformar o artigo em uma resposta automática para todos os casos.',
    icon: 'layers',
  },
];

export const learningGroups: LearningGroup[] = [
  {
    title: 'Fundamentos da PBE',
    shortTitle: 'Fundamentos',
    description: 'Construa a base para reconhecer problemas, perguntas e tipos de evidência.',
    items: ['Problema e decisão', 'Pergunta clínica', 'PICO sem automatismo', 'Tipos de estudo'],
  },
  {
    title: 'Pergunta e busca',
    shortTitle: 'Perguntar',
    description: 'Aprenda a buscar com propósito e a reconhecer a evidência que responde à pergunta.',
    items: ['Termos e conceitos', 'Estratégia de busca', 'Bases e fontes', 'Triagem de resultados'],
  },
  {
    title: 'Leitura crítica',
    shortTitle: 'Avaliar',
    description: 'Leia o método, os resultados e as limitações de um estudo com ordem.',
    items: ['Validade interna', 'Risco de viés', 'Precisão', 'Relevância clínica'],
  },
  {
    title: 'Estatística e interpretação',
    shortTitle: 'Interpretar',
    description: 'Interprete estimativas, associações e incertezas sem perder o contexto.',
    items: ['Medidas de efeito', 'Intervalo de confiança', 'Associação e causalidade', 'Certeza da evidência'],
  },
  {
    title: 'Aplicação da evidência',
    shortTitle: 'Aplicar',
    description: 'Feche o ciclo conectando a melhor evidência disponível à decisão concreta.',
    items: ['Síntese da leitura', 'Contexto da decisão', 'Limites da conclusão', 'Próxima pergunta'],
  },
];

export const supportItems = [
  {
    title: 'Conversa inicial',
    description: 'O primeiro passo é entender seu momento e a pergunta que você quer conseguir investigar.',
    icon: 'message',
  },
  {
    title: 'Ritmo mensal',
    description: 'A frequência de encontros acompanha o formato escolhido: uma, duas ou quatro vezes por mês.',
    icon: 'calendar',
  },
  {
    title: 'Percurso de 12 semanas',
    description: 'O estudo pode avançar pelas fases do Interprete., do problema inicial à aplicação da evidência.',
    icon: 'route',
  },
  {
    title: 'Contato institucional',
    description: 'Um canal direto para conversar sobre o percurso, os formatos e o próximo passo possível.',
    icon: 'headset',
  },
] as const;

export const journeySlides = [
  {
    title: 'Começar pelo problema certo',
    description: 'A autonomia começa quando a dúvida deixa de ser apenas ampla e passa a orientar uma decisão.',
  },
  {
    title: 'Buscar com intenção',
    description: 'Termos, fontes e desenhos de estudo entram em cena porque respondem a uma pergunta concreta.',
  },
  {
    title: 'Entender como o resultado foi produzido',
    description: 'O método do estudo importa tanto quanto o número que aparece na tabela ou no resumo.',
  },
  {
    title: 'Ler efeito e incerteza juntos',
    description: 'Uma estimativa só se torna útil quando seus limites e sua relevância para a decisão também são lidos.',
  },
  {
    title: 'Voltar para a decisão',
    description: 'A evidência fecha o ciclo quando ajuda a pensar melhor sobre o contexto que originou a pergunta.',
  },
] as const;

export const faqItems = [
  {
    question: 'Como começo o percurso?',
    answer: 'A primeira conversa serve para entender seu momento, as dificuldades que aparecem no estudo e o caminho que faz sentido organizar a partir daí.',
  },
  {
    question: 'Como funcionam os formatos?',
    answer: 'Os três formatos têm duração de 12 semanas e começam com um encontro inicial. Depois, a frequência muda conforme a proposta: um, dois ou quatro encontros mensais.',
  },
  {
    question: 'Qual formato combina com meu momento?',
    answer: 'A escolha depende do seu nível de autonomia, do que você quer desenvolver e do ritmo de acompanhamento que pretende manter. A conversa inicial ajuda a tornar essa escolha concreta.',
  },
  {
    question: 'O que é trabalhado ao longo do estudo?',
    answer: 'O percurso passa por identificar o problema, formular a pergunta, buscar evidências, avaliar a validade, interpretar os resultados e aplicar à decisão clínica.',
  },
  {
    question: 'Preciso chegar com uma pergunta pronta?',
    answer: 'Não. O método parte de problemas e perguntas concretas, e a organização dessa pergunta faz parte do próprio processo de estudo.',
  },
  {
    question: 'O Interprete. substitui uma revisão sistemática ou uma orientação clínica?',
    answer: 'Não. O percurso ensina a ler e organizar evidências com mais critério. Ele não substitui diretrizes, avaliações profissionais, revisões sistemáticas ou decisões compartilhadas.',
  },
  {
    question: 'O conteúdo do blog faz parte do percurso?',
    answer: 'O blog é um arquivo editorial público para começar uma leitura. Ele pode abrir perguntas e conceitos; o acompanhamento organiza o estudo em um percurso próprio.',
  },
  {
    question: 'Como converso sobre o Interprete.?',
    answer: 'Use o canal de contato do site para contar o que você quer entender e conversar sobre o formato que faz sentido para o seu momento.',
  },
] as const;

export const formats = [
  {
    name: 'Orientação',
    kicker: 'Para buscar direção',
    audience: 'Para quem já possui experiência e quer organizar o próximo passo.',
    cadence: 'Encontro inicial + 1 encontro mensal de 1h',
    previousPrice: 'R$ 1.200',
    price: 'R$ 1.000',
  },
  {
    name: 'Aprofundamento',
    kicker: 'Para avançar com constância',
    audience: 'Para quem conhece os fundamentos e quer aprofundar leitura e aplicação.',
    cadence: 'Encontro inicial + 2 encontros mensais de 1h',
    previousPrice: 'R$ 1.300',
    price: 'R$ 1.100',
  },
  {
    name: 'Imersão clínica',
    kicker: 'Para acompanhar de perto',
    audience: 'Para quem busca uma imersão do básico às decisões mais complexas.',
    cadence: 'Encontro inicial + 4 encontros mensais de até 1h30',
    previousPrice: 'R$ 1.400',
    price: 'R$ 1.200',
  },
] as const;

export const trustTopics = [
  'Prática Baseada em Evidências',
  'Pergunta clínica',
  'Leitura crítica',
  'Epidemiologia clínica',
  'Estatística aplicada',
  'Interpretação de resultados',
  'Decisão contextualizada',
  'Estudo acompanhado',
] as const;
