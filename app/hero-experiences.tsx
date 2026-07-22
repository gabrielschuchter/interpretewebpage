'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import type { CSSProperties } from 'react';
import { SectionLabel } from './components';
import { ServiceModalTrigger } from './interactive';

type HeroStyle = CSSProperties & {
  '--hero-accent'?: string;
  '--hero-soft'?: string;
};

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export function HomeHero() {
  const [active, setActive] = useState<'nutrition' | 'interprete' | null>(null);
  const style: HeroStyle = {
    '--hero-accent': active === 'nutrition' ? '#28543e' : active === 'interprete' ? '#aa722a' : '#27241f',
    '--hero-soft': active === 'nutrition' ? '#dfe9df' : active === 'interprete' ? '#ead9bb' : '#eee7da',
  };

  return <section className={`hero home-hero-v2 ${active ? `is-${active}` : ''}`} style={style} onMouseLeave={() => setActive(null)} aria-labelledby="home-hero-title">
    <div className="home-hero-topline">
      <span className="home-hero-signature">Gabriel Schuchter<span>.</span></span>
      <span className="home-hero-meta">nutrição · ensino · ciência</span>
      <span className="home-hero-location">Uberlândia / online</span>
    </div>

    <div className="home-hero-composition">
      <div className="home-hero-copy">
        <div className="home-hero-titleblock">
          <SectionLabel>Uma marca pessoal em dois territórios</SectionLabel>
          <h1 id="home-hero-title">Nutrição <em>e</em> evidência <span>na prática.</span></h1>
          <p>Gabriel Schuchter é nutricionista, professor e pesquisador. Escolha o caminho que melhor descreve o que você precisa agora.</p>
        </div>
      </div>

      <figure className="home-hero-portrait">
        <div className="home-portrait-frame">
          <Image src="/gabriel-home.jpg" alt="Gabriel Schuchter em retrato profissional" fill priority sizes="(max-width: 760px) 88vw, 43vw" />
        </div>
        <span className="home-hero-greeting">oi<span>.</span></span>
        <figcaption>Gabriel Schuchter · professor e pesquisador</figcaption>
      </figure>

      <div className="home-hero-service home-hero-service--left">
        <span className="hero-service-index">01 / cuidado contínuo</span>
        <Link href="/acompanhamento-nutricional" className="home-service-path" onMouseEnter={() => setActive('nutrition')} onFocus={() => setActive('nutrition')}>
          <strong>Acompanhamento <em>nutricional</em></strong>
          <span>Uma estratégia que continua sendo ajustada para funcionar na sua vida.</span>
          <Arrow />
        </Link>
        <span className="home-service-context">rotina · suporte · ajustes</span>
      </div>

      <div className="home-hero-service home-hero-service--right">
        <span className="hero-service-index">02 / leitura crítica</span>
        <Link href="/interprete" className="home-service-path" onMouseEnter={() => setActive('interprete')} onFocus={() => setActive('interprete')}>
          <strong>Interprete<span>.</span></strong>
          <span>Aulas particulares para desenvolver autonomia na leitura e aplicação de evidências.</span>
          <Arrow />
        </Link>
        <span className="home-service-context">artigo · decisão · autonomia</span>
      </div>
    </div>

    <div className="home-hero-bottomline">
      <span className="home-hero-message">{active === 'nutrition' ? 'Estratégias que se adaptam à sua vida.' : active === 'interprete' ? 'Aprenda a se orientar entre evidências.' : 'Duas formas de trabalhar. Uma mesma atenção ao contexto.'}</span>
      <ServiceModalTrigger initialService="unknown" className="hero-conversation-button">Conversa inicial gratuita <Arrow /></ServiceModalTrigger>
      <span className="home-hero-scroll">desça para escolher um ponto de partida ↓</span>
    </div>

    <svg className="home-hero-route" viewBox="0 0 1200 720" fill="none" aria-hidden="true">
      <path className="route-organic" d="M60 575C220 440 270 585 415 505C530 442 520 260 690 315C855 368 846 542 1125 230" />
      <path className="route-cartographic" d="M120 130C300 130 305 258 465 260C640 263 650 114 830 142C965 163 964 370 1130 385" />
      <circle cx="1125" cy="230" r="5" />
    </svg>
  </section>;
}

export function NutritionHero() {
  return <section className="hero service-hero nutrition-hero-v2" aria-labelledby="nutrition-hero-title">
    <div className="nutrition-grid-lines" aria-hidden="true" />
    <div className="nutrition-hero-copy">
      <div className="nutrition-hero-kicker"><SectionLabel>Acompanhamento nutricional</SectionLabel><span>01 / 03</span></div>
      <h1 id="nutrition-hero-title">Acompanhamento nutricional que <em>continua depois da consulta.</em></h1>
      <p className="lead">A estratégia é construída a partir da sua rotina e ajustada conforme sua evolução, suas dificuldades e as mudanças que acontecem no caminho.</p>
      <div className="actions">
        <ServiceModalTrigger initialService="nutrition" className="button">Quero entender meu acompanhamento <Arrow /></ServiceModalTrigger>
        <Link className="hero-text-action" href="#como-funciona">Ver o processo antes de decidir <Arrow /></Link>
      </div>
      <div className="nutrition-hero-details"><span>conversa inicial gratuita</span><span>sem compromisso</span><span>CRN9 38302/P</span></div>
    </div>
    <figure className="nutrition-hero-portrait">
      <div className="nutrition-portrait-halo" aria-hidden="true" />
      <div className="nutrition-portrait-frame"><Image src="/gabriel-nutrition.jpg" alt="Gabriel Schuchter sorrindo em um retrato natural" fill priority sizes="(max-width: 760px) 88vw, 47vw" /></div>
      <svg className="nutrition-organic-line" viewBox="0 0 600 700" fill="none" aria-hidden="true"><path d="M46 80C220 6 440 87 363 223C278 372 105 280 142 440C164 540 336 474 556 640" /><circle cx="46" cy="80" r="5" /><circle cx="556" cy="640" r="5" /></svg>
      <figcaption><span>o método tem estrutura</span><strong>mas a aplicação encontra você</strong></figcaption>
    </figure>
    <div className="nutrition-hero-stamp"><span className="mono-note">REGISTRO DE CONTINUIDADE</span><strong>consulta ≠ acompanhamento</strong><p>O suporte e os ajustes continuam ativos entre os encontros.</p></div>
  </section>;
}

export function InterpreteHero() {
  return <section className="hero service-hero interprete-hero-v2" aria-labelledby="interprete-hero-title">
    <div className="interprete-map-lines" aria-hidden="true"><span /><span /><span /><i /><i /></div>
    <div className="interprete-hero-words" aria-hidden="true"><span>LEIA</span><span>APLIQUE</span></div>
    <div className="interprete-hero-copy">
      <div className="interprete-hero-kicker"><SectionLabel>Interprete. / aulas particulares</SectionLabel><span>12 semanas · 03 planos</span></div>
      <h1 id="interprete-hero-title">Aprenda a interpretar evidências <em>— não apenas a repetir conclusões.</em></h1>
      <p className="lead">Aulas particulares em Prática Baseada em Evidências para construir leitura crítica, raciocínio e aplicação com mais autonomia.</p>
      <div className="actions"><ServiceModalTrigger initialService="interprete" className="button interprete-hero-button">Quero uma rota de estudo <Arrow /></ServiceModalTrigger><Link className="hero-text-action" href="#como-funciona">Ver como as aulas funcionam <Arrow /></Link></div>
    </div>
    <figure className="interprete-hero-portrait">
      <div className="interprete-paper-frame"><Image src="/gabriel-interprete.jpg" alt="Gabriel Schuchter em retrato para a página Interprete." fill priority sizes="(max-width: 760px) 82vw, 31vw" /></div>
      <span className="interprete-hero-marker">.</span>
      <figcaption><span>LAT 18°55′</span><span>LONG 48°16′</span><strong>um território se lê por camadas</strong></figcaption>
    </figure>
    <div className="interprete-hero-footer"><span>resultado publicado</span><span>limitações</span><span>interpretação</span><span>aplicação</span><b>Interprete<span>.</span></b></div>
  </section>;
}
