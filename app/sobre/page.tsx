import type { Metadata } from 'next';
import Link from 'next/link';
import { Footer, Header, PageShell, SectionLabel } from '../components';
import { pageMetadata } from '../../lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Sobre o Interprete.',
  description: 'Conheça o método editorial e formativo do Interprete.',
  pathname: '/sobre',
});

const principles = [
  ['Perguntar', 'Toda leitura começa por uma decisão ou dúvida que merece ser formulada com precisão.'],
  ['Interpretar', 'Resultados só ganham sentido quando método, incerteza e relevância são lidos juntos.'],
  ['Aplicar', 'A evidência volta para o contexto que originou a pergunta, com seus limites explícitos.'],
] as const;

export default function AboutPage() {
  return (
    <PageShell>
      <Header />
      <main className="it-info-page">
        <section className="it-info-hero it-info-hero--brand">
          <div className="it-container"><SectionLabel>Sobre o Interprete.</SectionLabel><h1>Aprender a ler evidências é aprender a fazer perguntas melhores.</h1><p>O Interprete. organiza Prática Baseada em Evidências, leitura crítica e aplicação em um percurso acompanhado — com conteúdo editorial para continuar a investigação.</p></div>
        </section>
        <section className="it-info-section" aria-labelledby="about-method-title">
          <div className="it-container it-about-grid"><div><SectionLabel>O método</SectionLabel><h2 id="about-method-title">Um jeito de estudar que não termina no artigo.</h2></div><div className="it-about-copy"><p>O percurso parte de problemas concretos e cria uma ordem para buscar, avaliar, interpretar e aplicar evidências. A proposta não é substituir fontes especializadas nem oferecer respostas automáticas: é desenvolver critérios para que cada decisão possa ser examinada com mais clareza.</p><p>O Blog é o arquivo público desse mesmo eixo editorial. Nele, conceitos, perguntas e leituras ajudam a abrir a próxima investigação.</p><Link className="it-inline-link" href="/blog">Explorar o Blog <span aria-hidden="true">→</span></Link></div></div>
        </section>
        <section className="it-info-section it-info-section--subtle" aria-labelledby="principles-title"><div className="it-container"><div className="it-section-intro"><SectionLabel>Uma prática em três movimentos</SectionLabel><h2 id="principles-title">A sequência importa.</h2><p>Uma estrutura simples para não confundir acesso à informação com entendimento.</p></div><div className="it-principle-grid">{principles.map(([title, description], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{description}</p></article>)}</div></div></section>
        <section className="it-info-callout"><div className="it-container"><div><SectionLabel>Próximo passo</SectionLabel><h2>Traga uma pergunta real para a conversa.</h2></div><Link className="it-button it-button--light" href="/#cursos">Ver o percurso <span aria-hidden="true">↗</span></Link></div></section>
      </main>
      <Footer />
    </PageShell>
  );
}
