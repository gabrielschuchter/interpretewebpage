import { BlogCard } from './blog/BlogCard';
import { Button, Footer, Header, PageShell, SectionLabel } from './components';
import { contactUrl } from '../lib/contact';
import { getPublicArticles } from '../lib/blog/content';

const developmentItems = [
  {
    number: '01',
    title: 'Perguntas melhores',
    description: 'Transforme situações clínicas em perguntas claras, delimitadas e pesquisáveis.',
  },
  {
    number: '02',
    title: 'Leitura crítica',
    description: 'Leia artigos com método para reconhecer desenho, validade, incerteza e limites.',
  },
  {
    number: '03',
    title: 'Decisões aplicáveis',
    description: 'Conecte evidências ao contexto real e aplique o que faz sentido para cada decisão.',
  },
];

const processSteps = [
  'Identificar o problema clínico',
  'Formular uma pergunta estruturada',
  'Encontrar a melhor evidência disponível',
  'Avaliar a validade do estudo',
  'Interpretar os resultados',
  'Aplicar à decisão clínica',
];

const phases = [
  {
    number: '01—02',
    title: 'Pergunta e busca',
    description: 'Definição do problema, formulação da pergunta e escolha do tipo de artigo.',
  },
  {
    number: '03—08',
    title: 'Validade e resultados',
    description: 'Leitura crítica, confiabilidade, interpretação dos resultados e seus limites.',
  },
  {
    number: '09—12',
    title: 'Decisão e aplicação',
    description: 'Síntese da evidência e aplicação consciente à prática clínica.',
  },
];

const formats = [
  {
    name: 'Orientação',
    kicker: 'Para quem busca direção',
    audience: 'Você já tem experiência e quer organizar o próximo passo.',
    cadence: 'Encontro inicial + 1 encontro mensal de 1h',
    previousPrice: 'R$ 1.200',
    price: 'R$ 1.000',
  },
  {
    name: 'Aprofundamento',
    kicker: 'Para quem quer ir além',
    audience: 'Você conhece os fundamentos e quer aprofundar a leitura e a aplicação.',
    cadence: 'Encontro inicial + 2 encontros mensais de 1h',
    previousPrice: 'R$ 1.300',
    price: 'R$ 1.100',
  },
  {
    name: 'Imersão clínica',
    kicker: 'Para acompanhar de perto',
    audience: 'Você quer uma imersão contínua, do básico às decisões mais complexas.',
    cadence: 'Encontro inicial + 4 encontros mensais de até 1h30',
    previousPrice: 'R$ 1.400',
    price: 'R$ 1.200',
  },
];

export default function HomePage() {
  const recentArticles = getPublicArticles().slice(0, 3);

  return (
    <PageShell>
      <Header />
      <main>
        <section className="home-hero" aria-labelledby="home-title">
          <div className="home-hero-grid" aria-hidden="true" />
          <div className="home-hero-topline">
            <span>Interprete. / prática baseada em evidências</span>
            <span>Coordenadas para decidir melhor</span>
          </div>
          <div className="home-hero-layout">
            <div className="home-hero-copy">
              <SectionLabel>Leia. Aplique.</SectionLabel>
              <h1 id="home-title">Evidência que encontra a prática.</h1>
              <p className="lead">
                O Interprete. é um espaço de estudo orientado para quem quer ler a ciência com mais clareza e tomar decisões clínicas mais conscientes.
              </p>
              <div className="actions">
                <Button href={contactUrl()}>Começar uma conversa</Button>
                <a className="text-link text-link--light" href="#como-funciona">Entender como funciona <span aria-hidden="true">↓</span></a>
              </div>
            </div>
            <div className="home-hero-graphic" aria-hidden="true">
              <span className="hero-graphic-word hero-graphic-word--top">INTER</span>
              <span className="hero-graphic-word hero-graphic-word--bottom">PRETE.</span>
              <span className="hero-graphic-orbit hero-graphic-orbit--one" />
              <span className="hero-graphic-orbit hero-graphic-orbit--two" />
              <span className="hero-graphic-point" />
              <span className="hero-graphic-label hero-graphic-label--top">evidence / 01</span>
              <span className="hero-graphic-label hero-graphic-label--bottom">clinical practice</span>
            </div>
          </div>
          <div className="home-hero-bottomline">
            <span>Um método para continuar aprendendo</span>
            <span>↗</span>
            <strong>Interprete<span>.</span></strong>
          </div>
        </section>

        <section className="section intro-section" aria-labelledby="intro-title">
          <div className="section-index">01 / contexto</div>
          <div className="section-copy">
            <SectionLabel>O que é</SectionLabel>
            <h2 id="intro-title">A ciência não termina no artigo.</h2>
            <p>
              Entre encontrar uma evidência e usá-la bem existe um caminho. O Interprete. organiza esse caminho para que a leitura deixe de ser uma tarefa isolada e passe a apoiar decisões reais.
            </p>
            <p>
              A proposta combina orientação, leitura crítica e aplicação prática em um processo de estudo acompanhado, com espaço para perguntas concretas e raciocínio compartilhado.
            </p>
          </div>
        </section>

        <section className="section audience-section" aria-labelledby="audience-title">
          <div className="section-index">02 / ponto de partida</div>
          <div className="section-copy">
            <SectionLabel>Para quem é</SectionLabel>
            <h2 id="audience-title">Para quem quer interpretar antes de repetir.</h2>
            <div className="audience-list">
              <div>
                <span>01</span>
                <p>Profissionais e estudantes que querem ganhar autonomia para buscar e avaliar evidências.</p>
              </div>
              <div>
                <span>02</span>
                <p>Quem encontra artigos, mas ainda não sabe como julgar sua qualidade ou relevância.</p>
              </div>
              <div>
                <span>03</span>
                <p>Quem quer transformar uma dúvida da prática em um plano de estudo possível.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section development-section" aria-labelledby="development-title">
          <div className="section-heading">
            <SectionLabel>O que você desenvolve</SectionLabel>
            <h2 id="development-title">Mais clareza para perguntar, ler e decidir.</h2>
            <p>O acompanhamento de estudos trabalha habilidades que continuam úteis depois de cada encontro.</p>
          </div>
          <div className="development-grid">
            {developmentItems.map((item) => (
              <article className="development-card" key={item.number}>
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="process-section" id="como-funciona" aria-labelledby="process-title">
          <div className="dark-band">
            <div className="dark-band-inner">
              <div className="dark-band-heading">
                <SectionLabel>Plano de ação</SectionLabel>
                <h2 id="process-title">Um fluxo para sair da dúvida e chegar à decisão.</h2>
                <p>O processo segue os princípios da Prática Baseada em Evidências e pode ser aplicado a perguntas diferentes, sem depender de decorar respostas prontas.</p>
              </div>
              <ol className="action-grid">
                {processSteps.map((step, index) => (
                  <li key={step}>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <strong>{step}</strong>
                  </li>
                ))}
              </ol>
              <cite>01 → 06 / encontrar, entender, aplicar</cite>
            </div>
          </div>
        </section>

        <section className="section phases-section" aria-labelledby="phases-title">
          <div className="section-index">03 / percurso</div>
          <div className="section-copy">
            <SectionLabel>Como acontece</SectionLabel>
            <h2 id="phases-title">Doze semanas para construir um jeito de estudar.</h2>
            <div className="phase-grid">
              {phases.map((phase) => (
                <article className="phase-card" key={phase.number}>
                  <span className="phase-number">Semanas {phase.number}</span>
                  <h3>{phase.title}</h3>
                  <p>{phase.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section formats-section" id="formatos" aria-labelledby="formats-title">
          <div className="section-heading">
            <SectionLabel>Formatos confirmados</SectionLabel>
            <h2 id="formats-title">Escolha a intensidade que combina com o seu momento.</h2>
            <p>Todos os formatos começam com um encontro inicial para entender o ponto de partida e organizar o caminho de estudo.</p>
          </div>
          <div className="format-grid">
            {formats.map((format, index) => (
              <article className={'format-card' + (index === 1 ? ' format-card--featured' : '')} key={format.name}>
                <div className="format-card-topline">
                  <span>0{index + 1}</span>
                  {index === 1 ? <b>mais escolhido</b> : null}
                </div>
                <span className="format-card-kicker">{format.kicker}</span>
                <h3>{format.name}</h3>
                <p className="format-card-audience">{format.audience}</p>
                <div className="format-price">
                  <s>{format.previousPrice}</s>
                  <b>{format.price}</b>
                </div>
                <small>{format.cadence}</small>
              </article>
            ))}
          </div>
        </section>

        <section className="final-cta" aria-labelledby="final-cta-title">
          <div className="dark-band">
            <div className="dark-band-inner">
              <SectionLabel>Próximo passo</SectionLabel>
              <h2 id="final-cta-title">Toda boa decisão começa com uma boa pergunta.</h2>
              <p>Conte o que você quer entender e descubra qual formato faz sentido para o seu momento.</p>
              <Button href={contactUrl()}>Conversar sobre o Interprete.</Button>
            </div>
          </div>
        </section>

        <section className="section recent-section" aria-labelledby="recent-title">
          <div className="recent-heading">
            <div>
              <SectionLabel>Do caderno</SectionLabel>
              <h2 id="recent-title">Conteúdos recentes</h2>
            </div>
            <a className="text-link" href="/blog">Ver todos os conteúdos <span aria-hidden="true">→</span></a>
          </div>
          {recentArticles.length > 0 ? (
            <div className="blog-grid blog-grid--recent">
              {recentArticles.map((article) => <BlogCard key={article.slug} article={article} />)}
            </div>
          ) : (
            <p className="empty-state">Novos conteúdos serão publicados em breve.</p>
          )}
        </section>
      </main>
      <Footer />
    </PageShell>
  );
}
