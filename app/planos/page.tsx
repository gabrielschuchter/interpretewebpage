import type { Metadata } from 'next';
import { Button, Footer, Header, PageShell, SectionLabel } from '../components';
import { formats } from '../../lib/interprete/marketing';
import { contactUrl } from '../../lib/contact';

export const metadata: Metadata = {
  title: 'Formatos',
  description: 'Conheça os formatos de acompanhamento do Interprete.',
  alternates: { canonical: '/planos' },
};

export default function PlansPage() {
  return (
    <PageShell>
      <Header />
      <main className="academy-info-page">
        <section className="academy-info-hero">
          <div className="academy-container">
            <SectionLabel>Formatos do Interprete.</SectionLabel>
            <h1>Escolha o ritmo que combina com o seu momento.</h1>
            <p>Todos os formatos começam com um encontro inicial e organizam 12 semanas de estudo. A diferença está na frequência de encontros mensais.</p>
          </div>
        </section>
        <section className="academy-info-section" aria-labelledby="plans-title">
          <div className="academy-container">
            <div className="academy-section-intro"><h2 id="plans-title">Três formas de continuar estudando.</h2><p>Converse sobre seu ponto de partida antes de escolher. O formato é uma decisão de ritmo, não uma promessa de resultado.</p></div>
            <div className="academy-price-grid">
              {formats.map((format, index) => <article className={'academy-price-card' + (index === 1 ? ' is-featured' : '')} key={format.name}><div className="academy-price-topline"><span>0{index + 1}</span><span>12 semanas</span></div><span className="academy-price-kicker">{format.kicker}</span><h3>{format.name}</h3><p>{format.audience}</p><div className="academy-price-value"><s>{format.previousPrice}</s><strong>{format.price}</strong></div><small>{format.cadence}</small><a className="academy-button" href={contactUrl()} target="_blank" rel="noreferrer">Conversar sobre este formato <span aria-hidden="true">↗</span></a></article>)}
            </div>
          </div>
        </section>
        <section className="academy-info-callout"><div className="academy-container"><div><SectionLabel>Antes de decidir</SectionLabel><h2>Uma boa escolha começa pela conversa certa.</h2><p>Conte o que você quer entender e descubra qual formato faz sentido para seu momento.</p></div><Button href={contactUrl()}>Conversar agora</Button></div></section>
      </main>
      <Footer />
    </PageShell>
  );
}
