import type { Metadata } from 'next';
import Link from 'next/link';
import { Footer, Header, PageShell, SectionLabel } from '../components';

export const metadata: Metadata = {
  title: 'Sobre o Interprete.',
  description: 'Conheça o método editorial e formativo do Interprete.',
  alternates: { canonical: '/sobre' },
};

const principles = [
  ['Perguntar', 'Toda leitura começa por uma decisão ou dúvida que merece ser formulada com precisão.'],
  ['Interpretar', 'Resultados só ganham sentido quando método, incerteza e relevância são lidos juntos.'],
  ['Aplicar', 'A evidência volta para o contexto que originou a pergunta, com seus limites explícitos.'],
] as const;

export default function AboutPage() {
  return (
    <PageShell>
      <Header />
      <main className="academy-info-page">
        <section className="academy-info-hero academy-info-hero--blue">
          <div className="academy-container"><SectionLabel>Sobre o Interprete.</SectionLabel><h1>Aprender a ler evidências é aprender a fazer perguntas melhores.</h1><p>O Interprete. organiza Prática Baseada em Evidências, leitura crítica e aplicação em um percurso acompanhado — com conteúdo editorial para continuar a investigação.</p></div>
        </section>
        <section className="academy-info-section" aria-labelledby="about-method-title">
          <div className="academy-container academy-about-grid"><div><SectionLabel>O método</SectionLabel><h2 id="about-method-title">Um jeito de estudar que não termina no artigo.</h2></div><div className="academy-about-copy"><p>O percurso parte de problemas concretos e cria uma ordem para buscar, avaliar, interpretar e aplicar evidências. A proposta não é substituir fontes especializadas nem oferecer respostas automáticas: é desenvolver critérios para que cada decisão possa ser examinada com mais clareza.</p><p>O Blog é o arquivo público desse mesmo eixo editorial. Nele, conceitos, perguntas e leituras ajudam a abrir a próxima investigação.</p><Link className="academy-inline-link" href="/blog">Explorar o Blog <span aria-hidden="true">→</span></Link></div></div>
        </section>
        <section className="academy-info-section academy-info-section--gray" aria-labelledby="principles-title"><div className="academy-container"><div className="academy-section-intro"><h2 id="principles-title">Três movimentos do percurso.</h2><p>Uma sequência simples para não confundir acesso à informação com entendimento.</p></div><div className="academy-principle-grid">{principles.map(([title, description], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{description}</p></article>)}</div></div></section>
        <section className="academy-info-callout"><div className="academy-container"><div><SectionLabel>Próximo passo</SectionLabel><h2>Traga uma pergunta real para a conversa.</h2></div><Link className="academy-button academy-button--light" href="/#cursos">Ver o percurso <span aria-hidden="true">↗</span></Link></div></section>
      </main>
      <Footer />
    </PageShell>
  );
}
