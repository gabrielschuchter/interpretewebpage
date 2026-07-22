import Image from 'next/image';
import Link from 'next/link';

export function EntrySelection(){
  return <main className="entry-selection" data-theme="home" aria-labelledby="entry-title">
    <div className="entry-selection-orbit entry-selection-orbit--one" aria-hidden="true" />
    <div className="entry-selection-orbit entry-selection-orbit--two" aria-hidden="true" />
    <header className="entry-selection-header">
      <span className="entry-selection-mark">GS<span>.</span></span>
    </header>
    <div className="entry-selection-intro">
      <div className="entry-selection-portrait">
        <Image src="/gabriel-home-smile.jpg" alt="Gabriel Schuchter sorrindo" fill priority sizes="(max-width: 760px) 140px, 180px" />
      </div>
      <div>
        <p className="entry-selection-eyebrow">Gabriel Schuchter</p>
        <h1 id="entry-title">Por onde <em>começamos?</em></h1>
        <p className="entry-selection-lead">Escolha o caminho que combina com o que você procura agora.</p>
      </div>
    </div>
    <nav className="entry-selection-choices" aria-label="Escolha um caminho">
      <Link className="entry-choice entry-choice--nutrition" href="/acompanhamento-nutricional">
        <span className="entry-choice-number">01</span>
        <span className="entry-choice-copy"><strong>Acompanhamento <em>Nutricional</em></strong><small>Uma estratégia que acompanha a vida real.</small></span>
        <span className="entry-choice-arrow" aria-hidden="true">↗</span>
      </Link>
      <Link className="entry-choice entry-choice--interprete" href="/interprete">
        <span className="entry-choice-number">02</span>
        <span className="entry-choice-copy"><strong>Aulas particulares em <em>Prática Baseada em Evidências</em></strong><small>Aprenda a ler, interpretar e aplicar evidências.</small></span>
        <span className="entry-choice-arrow" aria-hidden="true">↗</span>
      </Link>
    </nav>
    <footer className="entry-selection-footer">
      <Link href="/home">Conhecer o trabalho de Gabriel</Link>
      <a href="https://www.gruponutriwork.com.br" target="_blank" rel="noreferrer">Nutriwork ↗</a>
      <span>Uberlândia / online</span>
    </footer>
  </main>;
}
