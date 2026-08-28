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
  const common = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, 'aria-hidden': true };

  if (name === 'question') return <svg {...common}><circle cx="12" cy="12" r="9" /><path d="M9.7 9a2.4 2.4 0 1 1 3.95 1.84c-1.08.9-1.65 1.37-1.65 2.66" /><path d="M12 17.2h.01" /></svg>;
  if (name === 'search') return <svg {...common}><circle cx="10.8" cy="10.8" r="6.5" /><path d="m16 16 5 5" /><path d="M8.5 10.8h4.6" /><path d="M10.8 8.5v4.6" /></svg>;
  if (name === 'book') return <svg {...common}><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5z" /><path d="M4 5.5v16" /><path d="M8 7h8" /><path d="M8 11h8" /></svg>;
  if (name === 'chart') return <svg {...common}><path d="M4 20V4" /><path d="M4 20h17" /><path d="M8 16v-3" /><path d="M12 16V8" /><path d="M16 16v-6" /><path d="m7 9 4-3 4 2 4-4" /></svg>;
  if (name === 'shield') return <svg {...common}><path d="M12 3 19 6v5c0 4.7-2.75 8-7 10-4.25-2-7-5.3-7-10V6z" /><path d="m8.8 12 2.1 2.1 4.5-4.5" /></svg>;
  if (name === 'layers') return <svg {...common}><path d="m12 3 8 4-8 4-8-4z" /><path d="m4 12 8 4 8-4" /><path d="m4 17 8 4 8-4" /></svg>;
  if (name === 'message') return <svg {...common}><path d="M20 11.5a7.5 7.5 0 0 1-8 7.5 8.8 8.8 0 0 1-3.6-.8L4 20l1.4-3.4A7.3 7.3 0 0 1 4 12a7.5 7.5 0 0 1 8-7.5 7.5 7.5 0 0 1 8 7z" /><path d="M8 12h.01M12 12h.01M16 12h.01" /></svg>;
  if (name === 'calendar') return <svg {...common}><rect x="4" y="5" width="16" height="15" rx="2" /><path d="M8 3v4M16 3v4M4 10h16" /><path d="M8 14h3M8 17h5" /></svg>;
  if (name === 'route') return <svg {...common}><circle cx="5" cy="18" r="2" /><circle cx="19" cy="6" r="2" /><path d="M7 18h3.5a3.5 3.5 0 0 0 3.5-3.5V9.5A3.5 3.5 0 0 1 17.5 6H17" /></svg>;
  if (name === 'headset') return <svg {...common}><path d="M4 13v-1a8 8 0 0 1 16 0v1" /><path d="M4 13h3v6H5a1 1 0 0 1-1-1zM20 13h-3v6h2a1 1 0 0 0 1-1z" /><path d="M17 19h-2" /></svg>;
  return <svg {...common}><path d="M5 12h13" /><path d="m13 6 6 6-6 6" /></svg>;
}

function ToolPreview({ title, detail, icon }: { title: string; detail: string; icon: IconName }) {
  return (
    <div className="academy-tool-preview">
      <div className="academy-tool-window-bar"><span /><span /><span /></div>
      <div className="academy-tool-window-body">
        <div className="academy-tool-window-sidebar" aria-hidden="true">
          <i /><i /><i /><i /><i />
        </div>
        <div className="academy-tool-window-content">
          <div className="academy-tool-window-heading"><span className="academy-icon academy-icon--blue"><Icon name={icon} /></span><div><span>Roteiro de estudo</span><strong>{title}</strong></div></div>
          <p>{detail}</p>
          <div className="academy-tool-lines"><i /><i /><i /><i /></div>
          <div className="academy-tool-window-footer"><span>Interprete.</span><span aria-hidden="true">↗</span></div>
        </div>
      </div>
    </div>
  );
}

function BlogPreviewCard({ article, featured = false }: { article: BlogBrowserArticle; featured?: boolean }) {
  return (
    <article className={'academy-blog-card' + (featured ? ' academy-blog-card--featured' : '')}>
      <Link href={'/blog/' + article.slug} aria-label={'Ler: ' + article.title}>
        <div className="academy-blog-card-cover">
          {article.coverImage ? <Image src={article.coverImage} alt={article.coverAlt ?? ''} fill sizes="(max-width: 900px) 100vw, 33vw" /> : <><span>{BLOG_CATEGORY_LABELS[article.category]}</span><strong>{article.title}</strong><i aria-hidden="true">{article.type === 'analise' ? 'ANÁLISE' : 'INTERPRETE.'}</i></>}
        </div>
        <div className="academy-blog-card-body">
          <div className="academy-card-labels"><span>{BLOG_TYPE_LABELS[article.type]}</span><span>{BLOG_CATEGORY_LABELS[article.category]}</span></div>
          <h3>{article.title}</h3>
          <p>{article.summary}</p>
          <div className="academy-blog-meta"><span>{article.author}</span><span aria-hidden="true">•</span><time dateTime={article.publishedAt}>{formatBlogDate(article.publishedAt)}</time><span aria-hidden="true">•</span><span>{getReadingTimeLabel(article)}</span></div>
        </div>
      </Link>
    </article>
  );
}

function Hero() {
  return (
    <section className="academy-hero" aria-labelledby="home-title">
      <div className="academy-hero-copy">
        <div className="academy-hero-copy-inner">
          <div className="academy-live-badge"><span aria-hidden="true" /><span>Formação acompanhada para perguntas reais</span></div>
          <h1 id="home-title">Aprenda a <span>interpretar evidências</span> e decida com mais autonomia.</h1>
          <p>O Interprete. organiza Prática Baseada em Evidências, leitura crítica e aplicação em um percurso que começa na dúvida e volta para a decisão.</p>
          <div className="academy-hero-actions">
            <Button href={contactUrl()} className="academy-button--wide">Quero conhecer o Interprete.</Button>
            <Link className="academy-hero-text-link" href="/blog">Explorar conteúdos <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </div>
      <div className="academy-hero-visual">
        <Image src="/interprete/hero-phone.webp" alt="Composição visual de uma jornada de estudo em um celular" fill priority sizes="(max-width: 1023px) 100vw, 50vw" className="academy-hero-image" />
      </div>
    </section>
  );
}

function TrustMarquee() {
  const items = [...trustTopics, ...trustTopics, ...trustTopics];

  return (
    <section className="academy-trust" aria-labelledby="trust-title">
      <div className="academy-container academy-trust-heading">
        <h2 id="trust-title">Um mesmo método para transformar dúvidas em <span>decisões mais claras.</span></h2>
      </div>
      <div className="academy-marquee-viewport" aria-hidden="true">
        <div className="academy-marquee-track">
          {items.map((topic, index) => <div className="academy-marquee-item" key={topic + '-' + index}><span className="academy-marquee-dot" />{topic}</div>)}
        </div>
      </div>
    </section>
  );
}

function ToolsSection({ articles }: { articles: BlogBrowserArticle[] }) {
  const [activeTool, setActiveTool] = useState(0);
  const tool = academyTools[activeTool];

  return (
    <section id="ferramentas" className="academy-section academy-tools" aria-labelledby="tools-title">
      <div className="academy-container">
        <div className="academy-section-intro">
          <h2 id="tools-title">Resolva desafios da sua pesquisa com um caminho de <span>mais clareza.</span></h2>
          <p>Cada recurso organiza uma etapa específica da leitura. Juntos, eles ajudam você a perguntar melhor, avaliar com critério e interpretar sem atalhos.</p>
        </div>
        <div className="academy-tools-layout">
          <div className="academy-tool-list" role="tablist" aria-label="Etapas e recursos do Interprete.">
            {academyTools.map((candidate, index) => (
              <button
                key={candidate.title}
                type="button"
                role="tab"
                aria-selected={activeTool === index}
                className={'academy-tool-card' + (activeTool === index ? ' is-active' : '')}
                onClick={() => setActiveTool(index)}
              >
                <span className="academy-icon"><Icon name={candidate.icon} /></span>
                <span className="academy-tool-card-copy"><strong>{candidate.title}</strong><small>{candidate.description}</small></span>
                <span className="academy-tool-arrow" aria-hidden="true">→</span>
              </button>
            ))}
          </div>
          <div className="academy-tools-preview-column">
            <div className="academy-tools-preview-heading"><SectionLabel>Um recurso por vez</SectionLabel></div>
            <ToolPreview title={tool.title} detail={tool.detail} icon={tool.icon} />
            <div className="academy-tool-preview-copy"><h3>{tool.title}</h3><p>{tool.detail}</p><div><Link className="academy-inline-link" href="/blog">Ler conteúdos relacionados <Icon name="arrow" /></Link><Link className="academy-button academy-button--small" href="/planos">Ver formatos <span aria-hidden="true">↗</span></Link></div></div>
          </div>
        </div>
        <div id="conteudos" className="academy-blog-strip">
          <div className="academy-blog-strip-heading"><div><SectionLabel>Conteúdos para continuar</SectionLabel><h3>Uma pergunta pode abrir a próxima leitura.</h3></div><Link className="academy-inline-link" href="/blog">Ver todo o Blog <Icon name="arrow" /></Link></div>
          <div className="academy-blog-strip-grid">{articles.slice(0, 3).map((article, index) => <BlogPreviewCard article={article} featured={index === 0} key={article.slug} />)}</div>
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
    <section id="cursos" className="academy-section academy-courses" aria-labelledby="courses-title">
      <div className="academy-container">
        <div className="academy-courses-banner">
          <h2 id="courses-title">PERCURSO</h2>
          <p className="academy-courses-lead">Você não precisa chegar sabendo tudo.</p>
          <p className="academy-courses-subtitle">O estudo parte de problemas reais e organiza as competências necessárias para buscar, avaliar e aplicar evidências.</p>
          <div className="academy-chip-row"><span>Prática Baseada em Evidências</span><span>Leitura crítica</span><span>Estatística aplicada</span><span>Decisão contextualizada</span></div>
        </div>
        <div className="academy-hierarchy-heading"><div><SectionLabel>Organização do estudo</SectionLabel><h3>Uma estrutura hierárquica para aprender com sequência.</h3></div><p>Escolha uma frente para ver as perguntas e habilidades que compõem o percurso.</p></div>
        <div className="academy-hierarchy">
          <div className="academy-group-list" role="tablist" aria-label="Frentes do percurso">
            {learningGroups.map((candidate, index) => <button key={candidate.title} type="button" role="tab" aria-selected={activeGroup === index} className={'academy-group-tab' + (activeGroup === index ? ' is-active' : '')} onClick={() => changeGroup(index)}><span>0{index + 1}</span><strong>{candidate.title}</strong><i aria-hidden="true">→</i></button>)}
          </div>
          <div className="academy-hierarchy-panel" role="tabpanel">
            <div className="academy-hierarchy-panel-heading"><h4>{group.shortTitle}</h4><p>{group.description}</p></div>
            <div className="academy-learning-items">
              {group.items.map((item, index) => {
                const itemOpen = openItem === index;
                return <article className={'academy-learning-item' + (itemOpen ? ' is-open' : '')} key={item}>
                  <button type="button" aria-expanded={itemOpen} onClick={() => setOpenItem(itemOpen ? -1 : index)}><span>{String(index + 1).padStart(2, '0')}</span><strong>{item}</strong><i aria-hidden="true">{itemOpen ? '−' : '+'}</i></button>
                  <div className="academy-learning-answer"><p>{itemOpen ? 'Uma etapa do percurso para ler com mais ordem, reconhecer limites e voltar à decisão com contexto.' : ''}</p></div>
                </article>;
              })}
            </div>
            <Link className="academy-inline-link academy-hierarchy-link" href="/planos">Conhecer os formatos <Icon name="arrow" /></Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function SupportSection() {
  return (
    <section id="suporte" className="academy-section academy-support" aria-labelledby="support-title">
      <div className="academy-container">
        <div className="academy-section-intro academy-support-intro"><h2 id="support-title">Suporte como você nunca viu <br className="academy-desktop-only" />em nenhum lugar</h2><p>Você pode começar com uma dúvida. O percurso cria pontos de apoio para que ela não fique parada no meio do caminho.</p></div>
        <div className="academy-support-grid">
          {supportItems.map((item, index) => <article className="academy-support-card" key={item.title}><div className="academy-support-card-top"><span className="academy-icon"><Icon name={item.icon} /></span><span className="academy-support-number">0{index + 1}</span></div><h3>{item.title}</h3><p>{item.description}</p></article>)}
        </div>
        <div className="academy-centered-cta"><Button href={contactUrl()}>Comece pelo próximo passo</Button></div>
      </div>
    </section>
  );
}

function MethodBoard() {
  return (
    <div className="academy-method-board" aria-label="As seis etapas do percurso">
      <div className="academy-method-board-title">Da pergunta<br /><em>à decisão.</em></div>
      <ol>{['Identificar', 'Formular', 'Buscar', 'Avaliar', 'Interpretar', 'Aplicar'].map((step, index) => <li key={step} className={index === 4 ? 'is-highlighted' : ''}><span>0{index + 1}</span>{step}</li>)}</ol>
      <div className="academy-method-board-line" aria-hidden="true" />
    </div>
  );
}

function JourneySection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const slide = journeySlides[activeSlide];
  const selectSlide = (index: number) => setActiveSlide((index + journeySlides.length) % journeySlides.length);

  return (
    <section className="academy-proof" aria-labelledby="proof-title">
      <div className="academy-section academy-proof-inner">
        <div className="academy-container">
          <div className="academy-section-intro academy-proof-intro"><h2 id="proof-title">Autonomia para ler e decidir</h2><p>A dedicação ao estudo ganha uma forma que continua depois de cada encontro: pergunta, evidência, interpretação e contexto.</p></div>
          <div className="academy-proof-card"><div className="academy-proof-card-copy"><div className="academy-proof-card-heading"><span className="academy-icon academy-icon--blue"><Icon name="route" /></span><h3>Um método para continuar estudando</h3></div><p>O Interprete. não entrega conclusões prontas. Ele organiza um jeito de voltar à literatura quando surgir a próxima dúvida.</p><ul><li><span>✓</span> Perguntas mais específicas</li><li><span>✓</span> Leitura com critérios explícitos</li><li><span>✓</span> Resultados interpretados no contexto</li></ul><Link className="academy-inline-link" href="/sobre">Entender o método <Icon name="arrow" /></Link></div><MethodBoard /></div>
          <div className="academy-carousel"><div className="academy-carousel-heading"><h3 id="journey-carousel-title">O que você desenvolve</h3><div className="academy-carousel-controls"><button type="button" aria-label="Voltar" onClick={() => selectSlide(activeSlide - 1)}>←</button><button type="button" aria-label="Avançar" onClick={() => selectSlide(activeSlide + 1)}>→</button></div></div><div className="academy-carousel-window"><article className="academy-journey-slide" aria-live="polite"><h4>{slide.title}</h4><p>{slide.description}</p></article></div><div className="academy-carousel-dots" role="tablist" aria-label="Etapas do desenvolvimento">{journeySlides.map((candidate, index) => <button key={candidate.title} type="button" role="tab" aria-label={'Ver ' + candidate.title} aria-selected={activeSlide === index} className={activeSlide === index ? 'is-active' : ''} onClick={() => selectSlide(index)} />)}</div></div>
        </div>
      </div>
    </section>
  );
}

const particleNodes = [
  ['8%', '22%'], ['18%', '42%'], ['29%', '18%'], ['38%', '54%'], ['51%', '25%'], ['62%', '47%'], ['73%', '17%'], ['84%', '40%'], ['93%', '23%'], ['14%', '78%'], ['31%', '82%'], ['49%', '73%'], ['69%', '84%'], ['87%', '70%'],
] as const;

function CareerCta() {
  return (
    <section className="academy-career-cta" aria-labelledby="career-title">
      <div className="academy-particle-field" aria-hidden="true">
        {particleNodes.map(([left, top], index) => <span key={left + top} className={'academy-particle academy-particle-' + (index % 4)} style={{ left, top }} />)}
        {particleNodes.slice(0, 8).map(([left, top], index) => <i key={'line-' + left + top} className="academy-particle-line" style={{ left, top, transform: 'rotate(' + (index * 19 - 28) + 'deg)' }} />)}
      </div>
      <div className="academy-container academy-career-inner">
        <div className="academy-concept-avatar-row" aria-hidden="true"><span>P</span><span>B</span><span>E</span><span>Q</span><span>↗</span></div>
        <div className="academy-career-card"><SectionLabel>O próximo passo começa aqui</SectionLabel><h2 id="career-title">Uma pergunta pode transformar o jeito como você <span>estuda e decide.</span></h2><p>Conte o que você quer entender e descubra como organizar uma rota de estudo possível para o seu momento.</p><Button href={contactUrl()} className="academy-button--light">Quero conversar</Button></div>
      </div>
    </section>
  );
}

function FaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section id="faq" className="academy-section academy-faq" aria-labelledby="faq-title">
      <div className="academy-container">
        <div className="academy-section-intro"><h2 id="faq-title">Perguntas frequentes</h2><p>O essencial para entender o percurso e chegar à conversa inicial com mais clareza.</p></div>
        <div className="academy-faq-list">
          {faqItems.map((faq, index) => {
            const isOpen = openFaq === index;
            return <article className={'academy-faq-item' + (isOpen ? ' is-open' : '')} key={faq.question}><button type="button" aria-expanded={isOpen} onClick={() => setOpenFaq(isOpen ? null : index)}><span>{faq.question}</span><i aria-hidden="true">⌄</i></button><div className="academy-faq-answer"><p>{faq.answer}</p></div></article>;
          })}
        </div>
        <div className="academy-centered-cta"><Button href={contactUrl()}>Quero conhecer o Interprete.</Button></div>
      </div>
    </section>
  );
}

export default function AcademyHome({ articles }: { articles: BlogBrowserArticle[] }) {
  return (
    <main className="academy-home">
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
