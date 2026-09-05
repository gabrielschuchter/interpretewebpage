'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, type KeyboardEvent } from 'react';
import { BLOG_CATEGORY_LABELS, BLOG_TYPE_LABELS } from '../lib/blog/constants';
import { formatBlogDate, getReadingTimeLabel } from '../lib/blog/format';
import type { BlogBrowserArticle } from '../lib/blog/types';
import { contactUrl } from '../lib/contact';
import { academyTools, faqItems, journeySlides, learningGroups, supportItems, trustTopics } from '../lib/interprete/marketing';
import { Button, SectionLabel } from './components';
import { Reveal } from './motion';
import { StudyIcon, type StudyIconName } from './visuals';

function handleTabKey(
  event: KeyboardEvent<HTMLButtonElement>,
  currentIndex: number,
  total: number,
  tabPrefix: string,
  onSelect: (index: number) => void,
) {
  const direction = event.key === 'ArrowRight' || event.key === 'ArrowDown'
    ? 1
    : event.key === 'ArrowLeft' || event.key === 'ArrowUp'
      ? -1
      : 0;
  const nextIndex = event.key === 'Home'
    ? 0
    : event.key === 'End'
      ? total - 1
      : direction
        ? (currentIndex + direction + total) % total
        : null;

  if (nextIndex === null) return;
  event.preventDefault();
  onSelect(nextIndex);
  document.getElementById(tabPrefix + nextIndex)?.focus();
}

function HomeArticleCard({ article, featured = false }: { article: BlogBrowserArticle; featured?: boolean }) {
  return (
    <article className={featured ? 'it-library-item is-featured' : 'it-library-item'}>
      <Link className="it-library-link" href={'/blog/' + article.slug} aria-label={'Ler: ' + article.title}>
        <div className="it-library-index"><span>/{article.category}</span><strong>{featured ? 'em foco' : 'leitura'}</strong></div>
        <div className="it-library-copy">
          <div className="it-card-labels"><span>{BLOG_TYPE_LABELS[article.type]}</span><span>{BLOG_CATEGORY_LABELS[article.category]}</span></div>
          <h3>{article.title}</h3>
          <p>{article.summary}</p>
        </div>
        <div className="it-library-meta"><span>{article.author}</span><time dateTime={article.publishedAt}>{formatBlogDate(article.publishedAt)}</time><span>{getReadingTimeLabel(article)}</span><StudyIcon name="arrow" size={18} /></div>
      </Link>
    </article>
  );
}

function Hero() {
  return (
    <section className="it-home-hero" aria-labelledby="home-title">
      <div className="it-container it-hero-grid">
        <Reveal as="div" className="it-hero-copy" stagger>
          <div className="it-hero-kicker"><SectionLabel>Interprete. / escola viva</SectionLabel><span>campo 01 / 06</span></div>
          <h1 id="home-title">Aprender a <em>interpretar</em> muda a pergunta.</h1>
          <p className="it-hero-lede">Uma escola de prática baseada em evidências para profissionais de saúde que querem ler melhor, perguntar com precisão e voltar à decisão com contexto.</p>
          <div className="it-hero-actions">
            <Button href={contactUrl()} className="it-button--wide">Quero conhecer o Interprete.</Button>
            <Link className="it-text-link" href="/blog">Abrir os cadernos <StudyIcon name="arrow" size={18} /></Link>
          </div>
          <div className="it-hero-question"><StudyIcon name="question" size={22} /><span>O que esta evidência permite concluir — e o que ainda precisa ser perguntado?</span></div>
        </Reveal>

        <Reveal as="div" className="it-hero-canvas" aria-label="Composição de estudo do Interprete." stagger>
          <div className="it-canvas-header"><span>superfície de estudo</span><span>evidência → contexto</span></div>
          <div className="it-hero-art">
            <span className="it-hero-art-number">A / observar</span>
            <div className="it-hero-art-circle" aria-hidden="true" />
            <Image src="/interprete/visual-library/classical/statue-fragment.webp" alt="Fragmento clássico em preto e branco, usado como detalhe da biblioteca visual do Interprete." fill sizes="(max-width: 767px) 86vw, 38vw" priority className="it-hero-statue" />
            <span className="it-hero-art-note">não aceitar<br />sem interpretar</span>
            <span className="it-hero-art-line" aria-hidden="true" />
            <span className="it-hero-art-caption">fragmento / matéria / atenção</span>
            <div className="it-hero-note"><StudyIcon name="note" size={20} /><p>O raciocínio aparece<br />antes do veredito.</p></div>
          </div>
          <div className="it-hero-flow" aria-label="Movimento da escola">
            <span><b>01</b>dúvida</span><i aria-hidden="true" /><span><b>02</b>evidência</span><i aria-hidden="true" /><span><b>03</b>decisão</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function MethodSection() {
  const steps = [
    ['Perguntar', 'Nomear o problema antes de abrir a busca.'],
    ['Buscar', 'Encontrar a evidência que realmente responde à pergunta.'],
    ['Avaliar', 'Reconstruir como o resultado foi produzido.'],
    ['Interpretar', 'Ler efeito, incerteza e relevância juntos.'],
    ['Aplicar', 'Voltar ao contexto sem transformar artigo em atalho.'],
  ] as const;

  return (
    <section id="metodo" className="it-method-section" aria-labelledby="method-title">
      <div className="it-container it-method-layout">
        <Reveal as="aside" className="it-side-rail" stagger>
          <span>02</span><span>método</span><i aria-hidden="true" />
        </Reveal>
        <Reveal as="div" className="it-method-copy" stagger>
          <SectionLabel>Uma escola de raciocínio</SectionLabel>
          <h2 id="method-title">A dúvida não é um desvio. É o começo do estudo.</h2>
          <p>O Interprete. transforma a leitura em prática: a gente explicita a pergunta, acompanha as escolhas e deixa visível onde a evidência termina.</p>
          <div className="it-method-statement"><span>“</span><p>Mais que respostas.<br /><em>Melhores perguntas.</em></p></div>
        </Reveal>
        <Reveal as="ol" className="it-method-list" stagger>
          {steps.map(([title, description], index) => (
            <li key={title}><span className="it-method-number">0{index + 1}</span><div><h3>{title}</h3><p>{description}</p></div><StudyIcon name="arrow" size={17} /></li>
          ))}
        </Reveal>
      </div>
      <div className="it-topic-rail" aria-label="Territórios de estudo">
        <div className="it-container it-topic-rail-inner"><span className="it-tech-label">um eixo de estudo</span><div className="it-topic-track">{trustTopics.map((topic) => <span key={topic}>{topic}<i aria-hidden="true" /></span>)}</div></div>
      </div>
    </section>
  );
}

function ToolCanvas({ index, title, detail }: { index: number; title: string; detail: string }) {
  const isChart = index === 3;
  return (
    <div className="it-tool-canvas">
      <div className="it-tool-paper">
        <div className="it-paper-heading"><span>caderno de estudo / 0{index + 1}</span><span>rascunho</span></div>
        <div className="it-paper-rule" aria-hidden="true" />
        <div className="it-paper-content">
          <div><SectionLabel>{title}</SectionLabel><h3>{detail}</h3></div>
          <div className="it-paper-prompts">
            <div><span>01</span><p>O que precisamos saber?</p><b>anotar</b></div>
            <div><span>02</span><p>Qual é o limite do resultado?</p><b>perguntar</b></div>
            <div><span>03</span><p>Como isso volta para a decisão?</p><b>conectar</b></div>
          </div>
          {isChart ? (
            <figure className="it-tool-plot"><Image src="/interprete/visual-library/visualization/forest-plot.webp" alt="Recorte autoral de um forest plot com estimativas e intervalos de confiança." fill sizes="(max-width: 767px) 88vw, 34vw" /><figcaption>efeito + incerteza / leitura conjunta</figcaption></figure>
          ) : (
            <figure className="it-tool-photo"><Image src="/interprete/visual-library/photography/hand-writing.webp" alt="Mão anotando em um caderno ao lado de livros." fill sizes="(max-width: 767px) 88vw, 34vw" /><figcaption>um gesto também organiza o pensamento</figcaption></figure>
          )}
        </div>
      </div>
      <div className="it-glass-note"><StudyIcon name="note" size={20} /><p><strong>Nota de campo</strong><br />Não confunda o dado com a decisão.</p></div>
    </div>
  );
}

function ToolsSection({ articles }: { articles: BlogBrowserArticle[] }) {
  const [activeTool, setActiveTool] = useState(0);
  const tool = academyTools[activeTool];

  return (
    <section id="ferramentas" className="it-tools-section" aria-labelledby="tools-title">
      <div className="it-container">
        <Reveal as="div" className="it-section-lead it-section-lead--wide" stagger>
          <div><SectionLabel>03 / ferramentas de raciocínio</SectionLabel><h2 id="tools-title">Cada etapa deixa uma marca diferente na leitura.</h2></div>
          <p>Ferramentas não servem para decorar a resposta. Elas ajudam a mostrar como uma pergunta se transforma em evidência, interpretação e próximo passo.</p>
        </Reveal>
        <Reveal as="div" className="it-tools-layout" stagger>
          <div className="it-tool-tabs" role="tablist" aria-label="Etapas de raciocínio" aria-orientation="vertical">
            {academyTools.map((candidate, index) => (
              <button key={candidate.title} id={'tool-tab-' + index} type="button" role="tab" aria-selected={activeTool === index} aria-controls="tool-panel" tabIndex={activeTool === index ? 0 : -1} className={activeTool === index ? 'is-active' : ''} onClick={() => setActiveTool(index)} onKeyDown={(event) => handleTabKey(event, index, academyTools.length, 'tool-tab-', setActiveTool)}>
                <span className="it-tab-number">0{index + 1}</span><StudyIcon name={candidate.icon as StudyIconName} size={23} /><span><strong>{candidate.title}</strong><small>{candidate.description}</small></span><StudyIcon name="arrow" size={17} />
              </button>
            ))}
          </div>
          <div className="it-tool-panel" id="tool-panel" role="tabpanel" aria-labelledby={'tool-tab-' + activeTool} tabIndex={0} key={activeTool}>
            <div className="it-tool-panel-meta"><span>um recurso por vez</span><b>{String(activeTool + 1).padStart(2, '0')} / 06</b></div>
            <ToolCanvas index={activeTool} title={tool.title} detail={tool.detail} />
          </div>
        </Reveal>
        <div className="it-tool-footnote"><span>o método fica visível quando a interface deixa espaço para a pergunta</span><Link className="it-inline-link" href="/sobre">Ler sobre o método <StudyIcon name="arrow" size={17} /></Link></div>
        {articles.length > 0 && <div className="it-home-library-preview"><div><SectionLabel>Uma leitura abre outra</SectionLabel><h3>Os cadernos públicos continuam o estudo.</h3></div><Link className="it-inline-link" href="/blog">Abrir cadernos <StudyIcon name="arrow" size={17} /></Link><div className="it-library-preview-list">{articles.slice(0, 2).map((article) => <HomeArticleCard article={article} key={article.slug} />)}</div></div>}
      </div>
    </section>
  );
}

function CoursesSection() {
  const [activeGroup, setActiveGroup] = useState(0);
  const [openItem, setOpenItem] = useState(0);
  const group = learningGroups[activeGroup];

  const changeGroup = (index: number) => {
    setActiveGroup(index);
    setOpenItem(0);
  };

  return (
    <section id="cursos" className="it-courses-section" aria-labelledby="courses-title">
      <div className="it-container">
        <Reveal as="div" className="it-section-lead it-section-lead--dark" stagger>
          <div><SectionLabel>04 / percurso de formação</SectionLabel><h2 id="courses-title">Você não precisa chegar sabendo tudo.</h2></div>
          <p>O estudo parte de problemas reais e organiza as competências necessárias para buscar, avaliar e aplicar evidências.</p>
        </Reveal>
        <Reveal as="div" className="it-courses-workbench" stagger>
          <div className="it-course-index" role="tablist" aria-label="Frentes do percurso" aria-orientation="vertical">
            <span className="it-course-index-title">mapa de estudo</span>
            {learningGroups.map((candidate, index) => <button key={candidate.title} id={'group-tab-' + index} type="button" role="tab" aria-selected={activeGroup === index} aria-controls="group-panel" tabIndex={activeGroup === index ? 0 : -1} className={activeGroup === index ? 'is-active' : ''} onClick={() => changeGroup(index)} onKeyDown={(event) => handleTabKey(event, index, learningGroups.length, 'group-tab-', changeGroup)}><span>0{index + 1}</span><strong>{candidate.title}</strong><i aria-hidden="true">↗</i></button>)}
          </div>
          <div className="it-course-sheet" id="group-panel" role="tabpanel" aria-labelledby={'group-tab-' + activeGroup} tabIndex={0}>
            <div className="it-course-sheet-top"><span>frente selecionada</span><b>{String(activeGroup + 1).padStart(2, '0')} / 05</b></div>
            <SectionLabel>{group.shortTitle}</SectionLabel><h3>{group.description}</h3>
            <div className="it-learning-items">
              {group.items.map((item, index) => {
                const itemOpen = openItem === index;
                const answerId = 'learning-answer-' + activeGroup + '-' + index;
                return <article className={itemOpen ? 'it-learning-item is-open' : 'it-learning-item'} key={item}><button type="button" aria-expanded={itemOpen} aria-controls={answerId} onClick={() => setOpenItem(itemOpen ? -1 : index)}><span>0{index + 1}</span><strong>{item}</strong><i aria-hidden="true">{itemOpen ? '−' : '+'}</i></button><div className="it-learning-answer" id={answerId} data-open={itemOpen ? 'true' : 'false'} aria-hidden={!itemOpen}><p>Uma etapa do percurso para ler com mais ordem, reconhecer limites e voltar à decisão com contexto.</p></div></article>;
              })}
            </div>
            <Link className="it-inline-link" href="/planos">Conhecer os formatos <StudyIcon name="arrow" size={17} /></Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ClassroomSection() {
  return (
    <section id="suporte" className="it-classroom-section" aria-labelledby="classroom-title">
      <div className="it-container it-classroom-layout">
        <Reveal as="div" className="it-classroom-image" stagger>
          <Image src="/interprete/visual-library/photography/team.webp" alt="Equipe diversa reunida em um ambiente de estudo." fill sizes="(max-width: 767px) 100vw, 52vw" />
          <span>vida real da escola / pessoas</span>
        </Reveal>
        <Reveal as="div" className="it-classroom-copy" stagger>
          <SectionLabel>05 / acompanhamento</SectionLabel><h2 id="classroom-title">Estudar também é ter com quem voltar à pergunta.</h2><p>O percurso combina estrutura e contato para que a dúvida não fique parada no meio do caminho. A frequência acompanha o formato escolhido.</p>
          <ul className="it-support-list">{supportItems.map((item, index) => <li key={item.title}><span>0{index + 1}</span><StudyIcon name={item.icon as StudyIconName} size={21} /><div><strong>{item.title}</strong><p>{item.description}</p></div></li>)}</ul>
          <Button href={contactUrl()} secondary>Começar pela conversa</Button>
        </Reveal>
      </div>
    </section>
  );
}

function EvidenceSection() {
  return (
    <section className="it-evidence-section" aria-labelledby="evidence-title">
      <div className="it-container it-evidence-layout">
        <Reveal as="div" className="it-evidence-copy" stagger><SectionLabel>06 / ciência que se pode ler</SectionLabel><h2 id="evidence-title">Um número não pensa sozinho.</h2><p>Effect size, intervalo de confiança, risco e contexto são partes do mesmo raciocínio. A visualização precisa preservar magnitude, incerteza e fonte.</p><div className="it-data-notes"><span><b>RR</b> medida de efeito</span><span><b>IC 95%</b> faixa de incerteza</span><span><b>n</b> pessoas observadas</span></div><Link className="it-inline-link it-inline-link--inverse" href="/blog">Ler uma explicação <StudyIcon name="arrow" size={17} /></Link></Reveal>
        <Reveal as="figure" className="it-evidence-figure" stagger><div className="it-evidence-figure-head"><span>visualização / estudo</span><span>fonte visível</span></div><Image src="/interprete/visual-library/visualization/forest-plot.webp" alt="Forest plot com cinco estudos, estimativas relativas e intervalos de confiança." fill sizes="(max-width: 767px) 92vw, 40vw" /><figcaption>Recorte da biblioteca visual autoral. O dado continua legível; a interpretação vem junto.</figcaption></Reveal>
      </div>
    </section>
  );
}

function JourneySection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const slide = journeySlides[activeSlide];
  const selectSlide = (index: number) => setActiveSlide((index + journeySlides.length) % journeySlides.length);

  return (
    <section className="it-journey-section" aria-labelledby="journey-title">
      <div className="it-container it-journey-layout">
        <Reveal as="div" className="it-journey-heading" stagger><SectionLabel>O estudo continua</SectionLabel><h2 id="journey-title">A autonomia aparece no próximo problema.</h2><p>O objetivo não é terminar com uma conclusão pronta. É sair sabendo voltar à literatura quando surgir a próxima dúvida.</p></Reveal>
        <Reveal as="div" className="it-journey-console" stagger>
          <div className="it-journey-console-head"><span>movimento de raciocínio</span><span>{String(activeSlide + 1).padStart(2, '0')} / 05</span></div>
          <article key={activeSlide} aria-live="polite"><span className="it-journey-tag">etapa {String(activeSlide + 1).padStart(2, '0')}</span><h3>{slide.title}</h3><p>{slide.description}</p></article>
          <div className="it-journey-controls"><button type="button" aria-label="Etapa anterior" onClick={() => selectSlide(activeSlide - 1)}>←</button><div>{journeySlides.map((candidate, index) => <button key={candidate.title} type="button" aria-label={'Ver ' + candidate.title} aria-pressed={activeSlide === index} className={activeSlide === index ? 'is-active' : ''} onClick={() => selectSlide(index)}><span aria-hidden="true" /></button>)}</div><button type="button" aria-label="Próxima etapa" onClick={() => selectSlide(activeSlide + 1)}>→</button></div>
        </Reveal>
      </div>
    </section>
  );
}

function LibrarySection({ articles }: { articles: BlogBrowserArticle[] }) {
  return (
    <section id="conteudos" className="it-library-section" aria-labelledby="library-title">
      <div className="it-container">
        <Reveal as="div" className="it-section-lead it-section-lead--library" stagger><div><SectionLabel>Cadernos públicos</SectionLabel><h2 id="library-title">Leia como quem estuda: com tempo para perguntar.</h2></div><div><p>Conteúdo confiável, crítico e aplicável para profissionais de saúde que acreditam em uma prática baseada em evidências.</p><Link className="it-inline-link" href="/blog">Ver todos os cadernos <StudyIcon name="arrow" size={17} /></Link></div></Reveal>
        {articles.length > 0 ? <Reveal as="div" className="it-library-list" stagger>{articles.map((article, index) => <HomeArticleCard key={article.slug} article={article} featured={index === 0} />)}</Reveal> : <p className="it-empty-state">Novos cadernos serão publicados em breve.</p>}
      </div>
    </section>
  );
}

function ClosingSection() {
  return <section className="it-closing-section" aria-labelledby="closing-title"><div className="it-container it-closing-inner"><div className="it-closing-mark" aria-hidden="true"><span /><span /></div><Reveal as="div" className="it-closing-copy" stagger><SectionLabel>Próximo passo</SectionLabel><h2 id="closing-title">Traga uma pergunta real para a conversa.</h2><p>Conte o que você quer entender e descubra como organizar uma rota de estudo possível para o seu momento.</p><Button href={contactUrl()} className="it-button--light">Quero conversar</Button></Reveal></div></section>;
}

function FaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return <section id="faq" className="it-faq-section" aria-labelledby="faq-title"><div className="it-container it-faq-layout"><Reveal as="div" className="it-faq-heading" stagger><SectionLabel>Antes de começar</SectionLabel><h2 id="faq-title">Perguntas frequentes.</h2><p>O essencial para entender o percurso e chegar à conversa inicial com mais clareza.</p></Reveal><Reveal as="div" className="it-faq-list" stagger>{faqItems.map((faq, index) => { const isOpen = openFaq === index; const answerId = 'faq-answer-' + index; return <article className={isOpen ? 'it-faq-item is-open' : 'it-faq-item'} key={faq.question}><button type="button" aria-expanded={isOpen} aria-controls={answerId} onClick={() => setOpenFaq(isOpen ? null : index)}><span>{faq.question}</span><i aria-hidden="true">{isOpen ? '−' : '+'}</i></button><div className="it-faq-answer" id={answerId} data-open={isOpen ? 'true' : 'false'} aria-hidden={!isOpen}><p>{faq.answer}</p></div></article>; })}</Reveal></div></section>;
}

export default function AcademyHome({ articles }: { articles: BlogBrowserArticle[] }) {
  return <main className="it-home"><Hero /><MethodSection /><ToolsSection articles={articles} /><CoursesSection /><ClassroomSection /><EvidenceSection /><JourneySection /><LibrarySection articles={articles} /><ClosingSection /><FaqSection /></main>;
}
