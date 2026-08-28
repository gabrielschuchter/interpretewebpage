import { BlogCard } from './blog/BlogCard';
import { Button, Footer, Header, PageShell, SectionLabel } from './components';
import { HeroArtwork, ProductMockup, SectionArtwork } from './home-visuals';
import { contactUrl } from '../lib/contact';
import { getFeaturedArticle, getPublicArticles } from '../lib/blog/content';

const productPillars = [
  {
    number: '01',
    title: 'Formação',
    description: 'Uma base para entender como perguntas, desenhos de estudo e resultados se relacionam.',
    detail: 'construir repertório',
  },
  {
    number: '02',
    title: 'Prática',
    description: 'Perguntas da prática viram oportunidades concretas para buscar, avaliar e interpretar evidências.',
    detail: 'aprender fazendo',
  },
  {
    number: '03',
    title: 'Acompanhamento',
    description: 'Encontros com ritmo definido para organizar o estudo e dar continuidade ao processo.',
    detail: 'seguir uma rota',
  },
];

const processSteps = [
  { number: '01', title: 'Identificar', description: 'o problema clínico' },
  { number: '02', title: 'Formular', description: 'uma pergunta estruturada' },
  { number: '03', title: 'Buscar', description: 'a melhor evidência disponível' },
  { number: '04', title: 'Avaliar', description: 'a validade do estudo' },
  { number: '05', title: 'Interpretar', description: 'os resultados e seus limites' },
  { number: '06', title: 'Aplicar', description: 'à decisão clínica' },
];

const phases = [
  {
    number: '01—02',
    title: 'Pergunta e busca',
    description: 'Identificação do problema, formulação da pergunta e escolha do tipo de artigo.',
    question: 'Qual tipo de artigo devo procurar?',
  },
  {
    number: '03—08',
    title: 'Validade e resultados',
    description: 'Leitura crítica, confiabilidade, interpretação dos resultados e seus limites.',
    question: 'Esse estudo é confiável? O que esse resultado significa?',
  },
  {
    number: '09—12',
    title: 'Decisão e aplicação',
    description: 'Síntese da evidência e aplicação consciente à prática clínica.',
    question: 'Como aplicar isso ao meu contexto?',
  },
];

const supportItems = [
  {
    number: '01',
    title: 'Encontro inicial',
    description: 'Todos os formatos começam com uma conversa para entender o ponto de partida e organizar o caminho de estudo.',
  },
  {
    number: '02',
    title: 'Ritmo mensal',
    description: 'A frequência de encontros acompanha o formato escolhido: uma, duas ou quatro vezes por mês.',
  },
  {
    number: '03',
    title: 'Percurso de 12 semanas',
    description: 'O estudo pode avançar pelas três fases do Interprete., do problema inicial à aplicação da evidência.',
  },
];

const audienceItems = [
  'Estudantes que querem começar a buscar evidências para perguntas reais.',
  'Profissionais que desejam ler artigos com mais critério e clareza.',
  'Quem encontra estudos, mas ainda tem dificuldade para julgar qualidade e relevância.',
  'Quem quer transformar uma dúvida da prática em um plano de estudo possível.',
];

const formats = [
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
];

const faqs = [
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
    answer: 'O método parte de problemas e perguntas concretas, e a organização dessa pergunta faz parte do próprio processo de estudo.',
  },
];

export default function HomePage() {
  const articles = getPublicArticles();
  const featuredArticle = getFeaturedArticle(articles);
  const resourceArticles = articles.slice(0, 4);
  const recentArticles = articles
    .filter((article) => article.slug !== featuredArticle?.slug)
    .slice(0, 3);

  return (
    <PageShell>
      <Header />
      <main className="home-page">
        <section className="home-hero home-hero--v2" aria-labelledby="home-title">
          <div className="home-hero-grid" aria-hidden="true" />
          <div className="page-width home-hero-inner">
            <div className="home-hero-topline">
              <span>Interprete. / formação</span>
              <span>01 / ler · interpretar · aplicar</span>
            </div>
            <div className="home-hero-layout">
              <div className="home-hero-copy">
                <SectionLabel>Formação em Prática Baseada em Evidências</SectionLabel>
                <h1 id="home-title">Aprenda a interpretar evidências e decidir com autonomia.</h1>
                <p className="lead">O Interprete. é uma formação acompanhada para transformar dúvidas da prática em perguntas, leituras e decisões mais conscientes.</p>
                <div className="actions">
                  <Button href={contactUrl()}>Quero conhecer</Button>
                  <a className="text-link text-link--light" href="#como-funciona">Ver como funciona <span aria-hidden="true">↓</span></a>
                </div>
              </div>
              <HeroArtwork />
            </div>
            <div className="home-hero-bottomline">
              <span>Uma rota para estudar melhor</span>
              <span>↗</span>
              <strong>Interprete<span>.</span></strong>
            </div>
          </div>
        </section>

        <section className="home-section home-product" id="formacao" aria-labelledby="product-title">
          <div className="page-width home-product-grid">
            <div className="home-copy-block">
              <SectionLabel>O que é o Interprete.</SectionLabel>
              <h2 id="product-title">Não é sobre acumular respostas prontas.</h2>
              <p className="home-copy-lead">É sobre construir um jeito próprio de se orientar na literatura científica e levar uma evidência até a decisão que precisa ser tomada.</p>
              <p>O estudo combina Prática Baseada em Evidências, leitura crítica e aplicação prática em um percurso acompanhado. A autonomia aparece quando você entende o que procurar, como avaliar e o que um resultado permite dizer.</p>
              <div className="before-after" aria-label="Da dúvida à autonomia">
                <div>
                  <span>Antes</span>
                  <p>Que estudo eu procuro?<br />Esse artigo é confiável?<br />O que esse resultado significa?</p>
                </div>
                <div>
                  <span>Depois</span>
                  <p>Buscar melhor.<br />Avaliar com critério.<br />Aplicar com contexto.</p>
                </div>
              </div>
              <Button href="#como-funciona" secondary>Entender o percurso</Button>
            </div>
            <ProductMockup />
          </div>
        </section>

        <section className="home-section home-pillars" aria-labelledby="pillars-title">
          <div className="page-width">
            <div className="section-heading section-heading--wide">
              <div>
                <SectionLabel>Uma formação em três frentes</SectionLabel>
                <h2 id="pillars-title">O estudo ganha estrutura para continuar depois de cada encontro.</h2>
              </div>
              <p>O produto é organizado para que conteúdo, prática e acompanhamento façam parte da mesma rota.</p>
            </div>
            <div className="pillar-grid">
              {productPillars.map((pillar) => (
                <article className="pillar-card" key={pillar.number}>
                  <div className="pillar-card-topline"><span>{pillar.number}</span><span>{pillar.detail}</span></div>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.description}</p>
                  <span className="pillar-card-arrow" aria-hidden="true">↗</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="home-dark-section home-flow" id="como-funciona" aria-labelledby="flow-title">
          <div className="page-width">
            <div className="dark-section-intro">
              <SectionLabel>Plano de ação</SectionLabel>
              <h2 id="flow-title">Do problema à decisão, uma etapa de cada vez.</h2>
              <p>O objetivo não é decorar respostas. É aprender a seguir um fluxo que torna a busca e a interpretação mais conscientes.</p>
            </div>
            <ol className="evidence-flow">
              {processSteps.map((step) => (
                <li key={step.number}>
                  <span>{step.number}</span>
                  <strong>{step.title}</strong>
                  <p>{step.description}</p>
                </li>
              ))}
            </ol>
            <p className="dark-section-caption">01 → 06 / encontrar · entender · aplicar</p>
          </div>
        </section>

        <section className="home-section home-journey" aria-labelledby="journey-title">
          <div className="page-width home-journey-grid">
            <div className="home-copy-block">
              <SectionLabel>Plano operacional</SectionLabel>
              <h2 id="journey-title">Doze semanas para construir um jeito de estudar.</h2>
              <p className="home-copy-lead">Os três formatos têm duração de 12 semanas. O percurso organiza o estudo em fases que respondem às perguntas mais comuns de quem começa a ler evidências.</p>
              <a className="text-link" href="#formatos">Ver formatos <span aria-hidden="true">→</span></a>
            </div>
            <div className="journey-phases">
              {phases.map((phase) => (
                <article className="journey-phase" key={phase.number}>
                  <div className="journey-phase-number">Semanas {phase.number}</div>
                  <h3>{phase.title}</h3>
                  <p>{phase.description}</p>
                  <strong>“{phase.question}”</strong>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="home-section home-resources" id="recursos" aria-labelledby="resources-title">
          <div className="page-width">
            <div className="section-heading section-heading--wide">
              <div>
                <SectionLabel>Recursos para começar</SectionLabel>
                <h2 id="resources-title">Algumas perguntas já podem abrir a próxima leitura.</h2>
              </div>
              <p>Conteúdos reais do arquivo editorial para começar a buscar, avaliar e interpretar evidências.</p>
            </div>
            {resourceArticles.length > 0 ? (
              <div className="resource-grid">
                {resourceArticles.map((article) => <BlogCard key={article.slug} article={article} compact />)}
              </div>
            ) : (
              <p className="empty-note">Novos conteúdos serão publicados em breve.</p>
            )}
            <a className="text-link" href="/blog">Explorar todos os conteúdos <span aria-hidden="true">→</span></a>
          </div>
        </section>

        <section className="home-dark-section home-support" aria-labelledby="support-title">
          <div className="page-width">
            <div className="support-intro">
              <div>
                <SectionLabel>Como o estudo continua</SectionLabel>
                <h2 id="support-title">Acompanhamento que dá forma ao processo.</h2>
              </div>
              <p>Estudar PBE pode começar com uma dúvida. O acompanhamento ajuda a transformar essa dúvida em uma rota possível, com um ritmo que corresponda ao seu momento.</p>
            </div>
            <div className="support-grid">
              {supportItems.map((item) => (
                <article className="support-card" key={item.number}>
                  <span>{item.number}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="home-section home-audience" aria-labelledby="audience-title">
          <div className="page-width home-audience-grid">
            <div className="home-copy-block">
              <SectionLabel>Para quem é</SectionLabel>
              <h2 id="audience-title">Para quem quer interpretar antes de repetir.</h2>
              <p className="home-copy-lead">O Interprete. é para quem quer depender menos de conclusões prontas e mais de um processo claro de decisão.</p>
            </div>
            <ul className="audience-cards">
              {audienceItems.map((item, index) => (
                <li key={item}><span>{String(index + 1).padStart(2, '0')}</span><p>{item}</p></li>
              ))}
            </ul>
          </div>
        </section>

        <section className="home-section home-formats" id="formatos" aria-labelledby="formats-title">
          <div className="page-width">
            <div className="section-heading section-heading--wide">
              <div>
                <SectionLabel>Formatos confirmados</SectionLabel>
                <h2 id="formats-title">Escolha a intensidade que combina com o seu momento.</h2>
              </div>
              <p>Todos começam com um encontro inicial. A diferença está no ritmo de encontros mensais e no nível de acompanhamento que você procura.</p>
            </div>
            <div className="format-grid format-grid--v2">
              {formats.map((format, index) => (
                <article className={'format-card format-card--v2' + (index === 1 ? ' format-card--featured' : '')} key={format.name}>
                  <div className="format-card-topline"><span>0{index + 1}</span><span>12 semanas</span></div>
                  <span className="format-card-kicker">{format.kicker}</span>
                  <h3>{format.name}</h3>
                  <p className="format-card-audience">{format.audience}</p>
                  <div className="format-price"><s>{format.previousPrice}</s><b>{format.price}</b></div>
                  <small>{format.cadence}</small>
                  <a className="format-card-link" href={contactUrl()} target="_blank" rel="noreferrer">Conversar sobre este formato <span aria-hidden="true">↗</span></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="home-section home-content" id="conteudos" aria-labelledby="content-title">
          <div className="page-width">
            <div className="section-heading section-heading--wide">
              <div>
                <SectionLabel>Conteúdos do Interprete.</SectionLabel>
                <h2 id="content-title">Leia uma ideia. Leve uma pergunta adiante.</h2>
              </div>
              <p>Conceitos e ferramentas para buscar, avaliar, interpretar e aplicar evidências com mais segurança.</p>
            </div>
            {featuredArticle ? (
              <div className="home-content-layout">
                <BlogCard article={featuredArticle} featured />
                <div className="home-content-recent">
                  <p className="subsection-label">Mais recentes</p>
                  {recentArticles.map((article) => <BlogCard key={article.slug} article={article} compact />)}
                </div>
              </div>
            ) : (
              <p className="empty-note">Novos conteúdos serão publicados em breve.</p>
            )}
            <a className="text-link" href="/blog">Ver todos os conteúdos <span aria-hidden="true">→</span></a>
          </div>
        </section>

        <section className="home-section home-faq" aria-labelledby="faq-title">
          <div className="page-width home-faq-grid">
            <div className="home-copy-block">
              <SectionLabel>Perguntas frequentes</SectionLabel>
              <h2 id="faq-title">Antes de começar, algumas respostas.</h2>
              <p className="home-copy-lead">O essencial para entender o percurso e chegar à conversa inicial com mais clareza.</p>
            </div>
            <div className="faq-list">
              {faqs.map((faq) => (
                <details key={faq.question}>
                  <summary>{faq.question}<span aria-hidden="true">+</span></summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="home-final-cta" aria-labelledby="final-cta-title">
          <div className="page-width home-final-cta-inner">
            <SectionLabel>Próximo passo</SectionLabel>
            <h2 id="final-cta-title">Uma boa decisão começa com uma pergunta que pode ser investigada.</h2>
            <p>Conte o que você quer entender e descubra qual formato faz sentido para o seu momento.</p>
            <Button href={contactUrl()}>Conversar sobre o Interprete.</Button>
            <SectionArtwork label="rota / 06" title="APLIQUE" />
          </div>
        </section>
      </main>
      <Footer />
    </PageShell>
  );
}
