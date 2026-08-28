export function HeroArtwork() {
  return (
    <div className="visual-art visual-art--hero" aria-hidden="true">
      <div className="visual-art-corner visual-art-corner--top">INTERPRETE. / 01</div>
      <div className="visual-art-corner visual-art-corner--bottom">LEIA / INTERPRETE / APLIQUE</div>
      <div className="hero-paper hero-paper--back">
        <span>pergunta clínica</span>
        <i />
        <i />
        <i />
      </div>
      <div className="hero-paper hero-paper--front">
        <div className="hero-paper-header">
          <span>MAPA DE ESTUDO</span>
          <span>01 / 06</span>
        </div>
        <strong>Qual evidência<br />responde melhor?</strong>
        <div className="hero-paper-route">
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="hero-paper-footer">
          <span>buscar</span>
          <span>avaliar</span>
          <span>aplicar</span>
        </div>
      </div>
      <span className="visual-art-orbit visual-art-orbit--one" />
      <span className="visual-art-orbit visual-art-orbit--two" />
      <span className="visual-art-point" />
    </div>
  );
}

export function ProductMockup() {
  return (
    <div className="product-mockup" aria-hidden="true">
      <div className="product-mockup-topline">
        <span>Interprete.</span>
        <span>ROTA / 12 SEMANAS</span>
      </div>
      <div className="product-mockup-grid">
        <div className="product-mockup-sidebar">
          <span className="is-active">01 Pergunta</span>
          <span>02 Busca</span>
          <span>03 Validade</span>
          <span>04 Aplicação</span>
        </div>
        <div className="product-mockup-main">
          <span className="product-mockup-label">Ponto de partida</span>
          <h3>O que precisa ser decidido?</h3>
          <p>Uma pergunta bem formulada transforma o excesso de informação em uma rota de leitura.</p>
          <div className="product-mockup-lines">
            <span />
            <span />
            <span />
          </div>
          <div className="product-mockup-tag">LEIA / APLIQUE</div>
        </div>
      </div>
      <div className="product-mockup-bottomline">
        <span>problema</span>
        <span>→</span>
        <span>pergunta</span>
        <span>→</span>
        <span>decisão</span>
      </div>
    </div>
  );
}

export function SectionArtwork({ label, title }: { label: string; title: string }) {
  return (
    <div className="section-artwork" aria-hidden="true">
      <div className="section-artwork-grid" />
      <div className="section-artwork-topline">
        <span>INTERPRETE.</span>
        <span>{label}</span>
      </div>
      <div className="section-artwork-title">{title}</div>
      <div className="section-artwork-chart">
        <span className="section-artwork-axis section-artwork-axis--x" />
        <span className="section-artwork-axis section-artwork-axis--y" />
        <span className="section-artwork-chart-line section-artwork-chart-line--one" />
        <span className="section-artwork-chart-line section-artwork-chart-line--two" />
        <span className="section-artwork-dot section-artwork-dot--one" />
        <span className="section-artwork-dot section-artwork-dot--two" />
        <span className="section-artwork-dot section-artwork-dot--three" />
      </div>
      <div className="section-artwork-bottomline">ler · testar · aplicar</div>
    </div>
  );
}
