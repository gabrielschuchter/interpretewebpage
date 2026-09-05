'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { BLOG_CATEGORY_LABELS, BLOG_TYPE_LABELS } from '../lib/blog/constants';
import { formatBlogDate, getReadingTimeLabel } from '../lib/blog/format';
import type { BlogBrowserArticle } from '../lib/blog/types';
import { contactUrl } from '../lib/contact';
import {
  academyTools,
  faqItems,
  journeySlides,
  learningGroups,
  supportItems,
  trustTopics,
} from '../lib/interprete/marketing';
import { Button, SectionLabel } from './components';

type IconName = 'question' | 'search' | 'book' | 'chart' | 'shield' | 'layers' | 'message' | 'calendar' | 'route' | 'headset' | 'arrow';

function Icon({ name }: { name: IconName }) {
  const common = {
    width: 24,
    height: 24,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  };

  if (name === 'question') return <svg {...common}><circle cx="12" cy="12" r="9" /><path d="M9.7 9a2.4 2.4 0 1 1 3.95 1.84c-1.08.9-1.65 1.37-1.65 2.66" /><path d="M12 17.2h.01" /></svg>;
  if (name === 'search') return <svg {...common}><circle cx="10.8" cy="10.8" r="6.5" /><path d="m16 16 5 5" /><path d="M8.5 10.8h4.6" /><path d="M10.8 8.5v4.6" /></svg>;
  if (name === 'book') return <svg {...common}><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5z" /><path d="M4 5.5v16" /><path d="M8 7h8" /><path d="M8 11h8" /></svg>;
  if (name === 'chart') return <svg {...common}><path d="M4 20V4" /><path d="M4 20h17" /><path d="M8 16v-3" /><path d="M12 16V8" /><path d="M16 16v-6" /><path d="m7 9 4-3 4 2 4-4" /></svg>;
  if (name === 'shield') return <svg {...common}><path d="M12 3 19 6v5c0 4.7-2.75 8-7 10-4.25-2-7-5.3-7-10V6z" /><path d="m8.8 12 2.1 2.1 4.5-4.5" /></svg>;
  if (name === 'layers') return <svg {...common}><path d="m12 3 8 4-8 4-8-4z" /><path d="m4 12 8 4 8-4" /><path d="m4 17 8 4 8-4" /></svg>;
  if (name === 'message') return <svg {...common}><path d="M20 11.5a7.5 7.5 0 0 1-8 7.5 8.8 8.8 0 0 1-3.6-.8L4 20l1.4-3.4A7.3 7.3 0 0 1 4 12a7.5 7.5 0 0 1 8-7.5 7.5 7.5 0 0 1 8 7z" /><path d="M8 12h.01M12 12h.01M16 12h.01" /></svg>;
  if (name === 'calendar') return <svg {...common}><rect x="4" y="5" width="16" height="15" rx="2" /><path d="M8 3v4M16 3v4M4 10h16" /><path d="M8 14h3M8 17h5" /></svg>;
  if (name === 'route') return <svg {...common}><circle cx="5" cy="18" r="2" /><circle cx="19" cy="6" r="2" /><path d="M7 18h3.5a3.5 3.5 0 0 0 3.5-3.5V9.5A3.5 3.5 0 0 1 17.5 6H17" /></svg>;
  if (name === 'headset') return <svg {...common}><path d="M4 13v-1a8 8 0 0 1 16 0v1" /><path d="M4 13h3v6H5a1 1 0 0 1-1-1zM20 13h-3v6h2a1 1 0 0 1 1-1z" /><path d="M17 19h-2" /></svg>;
  return <svg {...common}><path d="M5 12h13" /><path d="m13 6 6 6-6 6" /></svg>;
}

function ToolPreview({ title, detail, icon, index }: { title: string; detail: string; icon: IconName; index: number }) {
  return (
    <div className="it-evidence-preview" aria-label={'Prévia do recurso ' + title}>
      <div className="it-evidence-preview-top">
        <span className="it-tech-label">Roteiro / {String(index + 1).padStart(2, '0')}</span>
        <span className="it-evidence-state"><Icon name={icon} /> em uso</span>
      </div>
      <div className="it-evidence-preview-rule" />
      <h3>{title}</h3>
      <p>{detail}</p>
      <dl className="it-evidence-grid">
        <div><dt>Pergunta</dt><dd>O que precisa ser decidido?</dd></div>
        <div><dt>Evidência</dt><dd>Qual fonte responde melhor?</dd></div>
        <div><dt>Limitação</dt><dd>O que o resultado não permite concluir?</dd></div>
      </dl>
    </div>
  );
}

function HomeArticleCard({ article, featured = false }: { article: BlogBrowserArticle; featured?: boolean }) {
  return (
    <article className={featured ? 'it-home-article is-featured' : 'it-home-article'}>
      <Link className="it-home-article-link" href={'/blog/' + article.slug} aria-label={'Ler: ' + article.title}>
        <div className="it-home-article-media">
          {article.coverImage ? (
            <Image src={article.coverImage} alt={article.coverAlt ?? ''} fill sizes="(max-width: 900px) 100vw, 33vw" />
          ) : (
            <>
              <span className="it-tech-label">{BLOG_CATEGORY_LABELS[article.category]}</span>
              <strong>{BLOG_TYPE_LABELS[article.type]}</strong>
              <span className="it-home-article-index">{article.title.slice(0, 1)}</span>
            </>
          )}
        </div>
        <div className="it-home-article-body">
          <div className="it-card-labels"><span>{BLOG_TYPE_LABELS[article.type]}</span><span>{BLOG_CATEGORY_LABELS[article.category]}</span></div>
          <h3>{article.title}</h3>
          <p>{article.summary}</p>
          <div className="it-card-meta"><span>{article.author}</span><span aria-hidden="true">·</span><time dateTime={article.publishedAt}>{formatBlogDate(article.publishedAt)}</time><span aria-hidden="true">·</span><span>{getReadingTimeLabel(article)}</span></div>
        </div>
      </Link>
    </article>
  );
}

function Hero() {
  return (
    <section className="it-hero" aria-labelledby="home-title">
      <div className="it-container it-hero-grid">
        <div className="it-hero-copy">
          <SectionLabel>Escola de prática baseada em evidências</SectionLabel>
          <h1 id="home-title">Aprenda a <em>interpretar evidências</em> e decida com mais autonomia.</h1>
          <p>O Interprete. organiza leitura crítica e aplicação em um percurso que começa na dúvida e volta para a decisão.</p>
          <div className="it-hero-actions">
            <Button href={contactUrl()} className="it-button--wide">Quero conhecer o Interprete.</Button>
            <Link className="it-text-link" href="/blog">Explorar conteúdos <span aria-hidden="true">↗</span></Link>
          </div>
          <dl className="it-hero-facts" aria-label="O que o percurso organiza">
            <div><dt>01</dt><dd>Perguntas reais</dd></div>
            <div><dt>02</dt><dd>Leitura com critério</dd></div>
            <div><dt>03</dt><dd>Decisão contextualizada</dd></div>
          </dl>
        </div>
        <div className="it-hero-method" aria-label="Método do Interprete.">
          <div className="it-hero-method-mark"><Image src="/brand/svg/simbolo-solto-creme.svg" alt="" width={570} height={677} priority /></div>
          <div className="it-hero-method-content">
            <span className="it-tech-label">O método em seis movimentos</span>
            <h2>O raciocínio aparece antes do veredito.</h2>
            <ol>
              <li><span>01</span>Identificar a decisão</li>
              <li><span>02</span>Formular a pergunta</li>
              <li><span>03</span>Buscar e avaliar</li>
              <li><span>04</span>Interpretar e aplicar</li>
            </ol>
          </div>
          <span className="it-hero-method-foot">Não aceite a evidência. Interprete.</span>
        </div>
      </div>
    </section>
  );
}

function TrustMarquee() {
  return (
    <section className="it-topic-rail" aria-labelledby="trust-title">
      <div className="it-container it-topic-rail-heading">
        <SectionLabel>Um eixo de estudo</SectionLabel>
        <h2 id="trust-title">Da dúvida à decisão, com as perguntas certas no caminho.</h2>
      </div>
      <div className="it-topic-rail-viewport" aria-label="Temas do percurso">
        <ul className="it-topic-rail-track">
          {trustTopics.map((topic) => <li className="it-topic-rail-item" key={topic}><span aria-hidden="true" />{topic}</li>)}
        </ul>
      </div>
    </section>
  );
}

function ToolsSection({ articles }: { articles: BlogBrowserArticle[] }) {
  const [activeTool, setActiveTool] = useState(0);
  const tool = academyTools[activeTool];

  return (
    <section id="ferramentas" className="it-section it-tools" aria-labelledby="tools-title">
      <div className="it-container">
        <div className="it-section-intro it-section-intro--split">
          <div><SectionLabel>Ferramentas de raciocínio</SectionLabel><h2 id="tools-title">Cada recurso organiza uma etapa da leitura.</h2></div>
          <p>Juntos, eles ajudam você a perguntar melhor, avaliar com critério e interpretar sem atalhos. Um caminho visível para cada dúvida.</p>
        </div>
        <div className="it-tools-layout">
          <div className="it-tool-list" role="tablist" aria-label="Etapas e recursos do Interprete.">
            {academyTools.map((candidate, index) => (
              <button
                key={candidate.title}
                id={'tool-tab-' + index}
                type="button"
                role="tab"
                aria-selected={activeTool === index}
                aria-controls="tool-panel"
                className={activeTool === index ? 'it-tool-card is-active' : 'it-tool-card'}
                onClick={() => setActiveTool(index)}
              >
                <span className="it-icon"><Icon name={candidate.icon} /></span>
                <span className="it-tool-card-copy"><strong>{candidate.title}</strong><small>{candidate.description}</small></span>
                <span className="it-tool-arrow" aria-hidden="true">→</span>
              </button>
            ))}
          </div>
          <div className="it-tools-preview-column" id="tool-panel" role="tabpanel" aria-labelledby={'tool-tab-' + activeTool} tabIndex={0}>
            <div className="it-tools-preview-heading"><SectionLabel>Um recurso por vez</SectionLabel><span className="it-tech-label">{String(activeTool + 1).padStart(2, '0')} / 06</span></div>
            <ToolPreview title={tool.title} detail={tool.detail} icon={tool.icon} index={activeTool} />
            <div className="it-tool-preview-copy"><h3>{tool.title}</h3><p>{tool.detail}</p><div><Link className="it-inline-link" href="/blog">Ler conteúdos relacionados <Icon name="arrow" /></Link><Link className="it-button it-button--small" href="/planos">Ver formatos <span aria-hidden="true">↗</span></Link></div></div>
          </div>
        </div>
        <div id="conteudos" className="it-home-blog">
          <div className="it-home-blog-heading"><div><SectionLabel>Conteúdos para continuar</SectionLabel><h3>Uma pergunta pode abrir a próxima leitura.</h3></div><Link className="it-inline-link" href="/blog">Ver todo o Blog <Icon name="arrow" /></Link></div>
          <div className="it-home-blog-grid">{articles.slice(0, 3).map((article, index) => <HomeArticleCard article={article} featured={index === 0} key={article.slug} />)}</div>
        </div>
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
    <section id="cursos" className="it-section it-courses" aria-labelledby="courses-title">
      <div className="it-container">
        <div className="it-courses-banner">
          <div><SectionLabel>Percurso de estudo</SectionLabel><h2 id="courses-title">Você não precisa chegar sabendo tudo.</h2></div>
          <p>O estudo parte de problemas reais e organiza as competências necessárias para buscar, avaliar e aplicar evidências.</p>
          <ul className="it-topic-list"><li>Prática Baseada em Evidências</li><li>Leitura crítica</li><li>Estatística aplicada</li><li>Decisão contextualizada</li></ul>
        </div>
        <div className="it-hierarchy-heading"><div><SectionLabel>Organização do estudo</SectionLabel><h3>Uma sequência para aprender com ordem.</h3></div><p>Escolha uma frente para ver as perguntas e habilidades que compõem o percurso.</p></div>
        <div className="it-hierarchy">
          <div className="it-group-list" role="tablist" aria-label="Frentes do percurso">
            {learningGroups.map((candidate, index) => <button key={candidate.title} id={'group-tab-' + index} type="button" role="tab" aria-selected={activeGroup === index} aria-controls="group-panel" className={activeGroup === index ? 'it-group-tab is-active' : 'it-group-tab'} onClick={() => changeGroup(index)}><span>0{index + 1}</span><strong>{candidate.title}</strong><i aria-hidden="true">→</i></button>)}
          </div>
          <div className="it-hierarchy-panel" id="group-panel" role="tabpanel" aria-labelledby={'group-tab-' + activeGroup} tabIndex={0}>
            <div className="it-hierarchy-panel-heading"><h4>{group.shortTitle}</h4><p>{group.description}</p></div>
            <div className="it-learning-items">
              {group.items.map((item, index) => {
                const itemOpen = openItem === index;
                const answerId = 'learning-answer-' + activeGroup + '-' + index;
                return <article className={itemOpen ? 'it-learning-item is-open' : 'it-learning-item'} key={item}>
                  <button type="button" aria-expanded={itemOpen} aria-controls={answerId} onClick={() => setOpenItem(itemOpen ? -1 : index)}><span>{String(index + 1).padStart(2, '0')}</span><strong>{item}</strong><i aria-hidden="true">{itemOpen ? '−' : '+'}</i></button>
                  <div className="it-learning-answer" id={answerId} hidden={!itemOpen}><p>Uma etapa do percurso para ler com mais ordem, reconhecer limites e voltar à decisão com contexto.</p></div>
                </article>;
              })}
            </div>
            <Link className="it-inline-link it-hierarchy-link" href="/planos">Conhecer os formatos <Icon name="arrow" /></Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function SupportSection() {
  return (
    <section id="suporte" className="it-section it-support" aria-labelledby="support-title">
      <div className="it-container">
        <div className="it-section-intro it-section-intro--split"><div><SectionLabel>Acompanhamento</SectionLabel><h2 id="support-title">Estudo com estrutura e contato.</h2></div><p>Você pode começar com uma dúvida. O percurso cria pontos de apoio para que ela não fique parada no meio do caminho.</p></div>
        <div className="it-support-grid">
          {supportItems.map((item, index) => <article className="it-support-card" key={item.title}><div className="it-support-card-top"><span className="it-icon"><Icon name={item.icon} /></span><span className="it-support-number">0{index + 1}</span></div><h3>{item.title}</h3><p>{item.description}</p></article>)}
        </div>
        <div className="it-centered-cta"><Button href={contactUrl()}>Começar pela conversa</Button></div>
      </div>
    </section>
  );
}

function MethodBoard() {
  return (
    <div className="it-method-board" aria-label="As seis etapas do percurso">
      <div className="it-method-board-title">Da pergunta<br /><em>à decisão.</em></div>
      <ol>{['Identificar', 'Formular', 'Buscar', 'Avaliar', 'Interpretar', 'Aplicar'].map((step, index) => <li key={step} className={index === 4 ? 'is-highlighted' : ''}><span>0{index + 1}</span>{step}</li>)}</ol>
    </div>
  );
}

function JourneySection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const slide = journeySlides[activeSlide];
  const selectSlide = (index: number) => setActiveSlide((index + journeySlides.length) % journeySlides.length);

  return (
    <section className="it-proof" aria-labelledby="proof-title">
      <div className="it-container">
        <div className="it-section-intro it-proof-intro"><SectionLabel>O raciocínio continua</SectionLabel><h2 id="proof-title">Autonomia para ler e decidir.</h2><p>A dedicação ao estudo ganha uma forma que continua depois de cada encontro: pergunta, evidência, interpretação e contexto.</p></div>
        <div className="it-proof-card"><div className="it-proof-card-copy"><div className="it-proof-card-heading"><span className="it-icon it-icon--inverse"><Icon name="route" /></span><h3>Um método para continuar estudando.</h3></div><p>O Interprete. não entrega conclusões prontas. Ele organiza um jeito de voltar à literatura quando surgir a próxima dúvida.</p><ul><li><span aria-hidden="true">✓</span> Perguntas mais específicas</li><li><span aria-hidden="true">✓</span> Leitura com critérios explícitos</li><li><span aria-hidden="true">✓</span> Resultados interpretados no contexto</li></ul><Link className="it-inline-link it-inline-link--inverse" href="/sobre">Entender o método <Icon name="arrow" /></Link></div><MethodBoard /></div>
        <div className="it-carousel"><div className="it-carousel-heading"><h3>O que você desenvolve</h3><div className="it-carousel-controls"><button type="button" aria-label="Voltar" onClick={() => selectSlide(activeSlide - 1)}>←</button><button type="button" aria-label="Avançar" onClick={() => selectSlide(activeSlide + 1)}>→</button></div></div><div className="it-carousel-window"><article className="it-journey-slide" aria-live="polite"><span className="it-tech-label">Etapa {String(activeSlide + 1).padStart(2, '0')}</span><h4>{slide.title}</h4><p>{slide.description}</p></article></div><div className="it-carousel-dots" aria-label="Etapas do desenvolvimento">{journeySlides.map((candidate, index) => <button key={candidate.title} type="button" aria-label={'Ver ' + candidate.title} aria-pressed={activeSlide === index} className={activeSlide === index ? 'is-active' : ''} onClick={() => selectSlide(index)}><span aria-hidden="true" /></button>)}</div></div>
      </div>
    </section>
  );
}

function CareerCta() {
  return (
    <section className="it-career-cta" aria-labelledby="career-title">
      <div className="it-container it-career-inner">
        <div className="it-career-rule" aria-hidden="true"><span>Interprete.</span><span>próximo passo</span></div>
        <div className="it-career-card"><SectionLabel>O próximo passo começa aqui</SectionLabel><h2 id="career-title">Uma pergunta pode mudar o jeito como você <em>estuda e decide.</em></h2><p>Conte o que você quer entender e descubra como organizar uma rota de estudo possível para o seu momento.</p><Button href={contactUrl()} className="it-button--light">Quero conversar</Button></div>
      </div>
    </section>
  );
}

function FaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section id="faq" className="it-section it-faq" aria-labelledby="faq-title">
      <div className="it-container">
        <div className="it-section-intro it-section-intro--split"><div><SectionLabel>Antes de começar</SectionLabel><h2 id="faq-title">Perguntas frequentes.</h2></div><p>O essencial para entender o percurso e chegar à conversa inicial com mais clareza.</p></div>
        <div className="it-faq-list">
          {faqItems.map((faq, index) => {
            const isOpen = openFaq === index;
            const answerId = 'faq-answer-' + index;
            return <article className={isOpen ? 'it-faq-item is-open' : 'it-faq-item'} key={faq.question}><button type="button" aria-expanded={isOpen} aria-controls={answerId} onClick={() => setOpenFaq(isOpen ? null : index)}><span>{faq.question}</span><i aria-hidden="true">{isOpen ? '−' : '+'}</i></button><div className="it-faq-answer" id={answerId} hidden={!isOpen}><p>{faq.answer}</p></div></article>;
          })}
        </div>
        <div className="it-centered-cta"><Button href={contactUrl()}>Quero conhecer o Interprete.</Button></div>
      </div>
    </section>
  );
}

export default function AcademyHome({ articles }: { articles: BlogBrowserArticle[] }) {
  return (
    <main className="it-home">
      <Hero />
      <TrustMarquee />
      <ToolsSection articles={articles} />
      <CoursesSection />
      <SupportSection />
      <JourneySection />
      <CareerCta />
      <FaqSection />
    </main>
  );
}
