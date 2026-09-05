import type { Metadata } from 'next';
import { Button, Footer, Header, PageShell, SectionLabel } from '../components';
import { formats } from '../../lib/interprete/marketing';
import { contactUrl } from '../../lib/contact';
import { pageMetadata } from '../../lib/seo';
import { Reveal } from '../motion';

export const metadata: Metadata = pageMetadata({
  title: 'Formatos',
  description: 'Conheça os formatos de acompanhamento do Interprete.',
  pathname: '/planos',
});

export default function PlansPage() {
  return (
    <PageShell>
      <Header />
      <main className="it-info-page">
        <section className="it-info-hero">
          <Reveal as="div" className="it-container" stagger>
            <SectionLabel>Formatos do Interprete.</SectionLabel>
            <h1>Escolha o ritmo que combina com o seu momento.</h1>
            <p>Todos os formatos começam com um encontro inicial e organizam 12 semanas de estudo. A diferença está na frequência de encontros mensais.</p>
          </Reveal>
        </section>
        <section className="it-info-section" aria-labelledby="plans-title">
          <div className="it-container">
            <Reveal as="div" className="it-section-intro" stagger><SectionLabel>Ritmo de acompanhamento</SectionLabel><h2 id="plans-title">Três formas de continuar estudando.</h2><p>Converse sobre seu ponto de partida antes de escolher. O formato é uma decisão de ritmo, não uma promessa de resultado.</p></Reveal>
            <Reveal as="div" className="it-price-grid" stagger>
              {formats.map((format, index) => <article className={index === 1 ? 'it-price-card is-featured' : 'it-price-card'} key={format.name}><div className="it-price-topline"><span>0{index + 1}</span><span>12 semanas</span></div><span className="it-price-kicker">{format.kicker}</span><h3>{format.name}</h3><p>{format.audience}</p><div className="it-price-value"><s>{format.previousPrice}</s><strong>{format.price}</strong></div><small>{format.cadence}</small><a className="it-button" href={contactUrl()} target="_blank" rel="noreferrer">Conversar sobre este formato <span aria-hidden="true">↗</span></a></article>)}
            </Reveal>
          </div>
        </section>
        <section className="it-info-callout"><Reveal as="div" className="it-container" stagger><div><SectionLabel>Antes de decidir</SectionLabel><h2>Uma boa escolha começa pela conversa certa.</h2><p>Conte o que você quer entender e descubra qual formato faz sentido para seu momento.</p></div><Button href={contactUrl()}>Conversar agora</Button></Reveal></section>
      </main>
      <Footer />
    </PageShell>
  );
}
