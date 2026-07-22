import Link from 'next/link';
import {MobileMenu} from './interactive';

export const whatsapp='https://wa.me/5534984123241';
export const contact=(message:string)=>`${whatsapp}?text=${encodeURIComponent(message)}`;

export function Header(){const contactHref=contact('Olá, Gabriel. Gostaria de agendar uma conversa inicial.');return <header className="site-header"><Link className="wordmark" href="/home">Gabriel Schuchter<span>.</span></Link><MobileMenu contactHref={contactHref}/><nav className="desktop-nav"><Link href="/home">Início</Link><Link href="/acompanhamento-nutricional">Nutrição</Link><Link href="/interprete">Interprete.</Link><a href="https://www.gruponutriwork.com.br" target="_blank" rel="noreferrer">Nutriwork ↗</a></nav><a className="header-cta" href={contactHref} target="_blank" rel="noreferrer">Agendar conversa</a></header>}
export function Footer(){return <footer className="footer"><div><div className="wordmark">Gabriel Schuchter<span>.</span></div><p>Nutrição, ensino e ciência aplicados a trajetórias reais.</p><p>Nutricionista · CRN9 38302/P</p></div><div className="footer-links"><Link href="/home">Início</Link><Link href="/acompanhamento-nutricional">Acompanhamento nutricional</Link><Link href="/interprete">Interprete.</Link><a href="https://instagram.com/gabrielschuchter" target="_blank" rel="noreferrer">Instagram ↗</a><a href={whatsapp} target="_blank" rel="noreferrer">WhatsApp ↗</a><a href="mailto:schuchtergabriel@gmail.com">schuchtergabriel@gmail.com</a></div><small>© {new Date().getFullYear()} Gabriel Schuchter</small></footer>}
export function Button({href,children,secondary=false}:{href:string;children:React.ReactNode;secondary?:boolean}){return <a className={secondary?'button button-secondary':'button'} href={href} target={href.startsWith('http')?'_blank':undefined} rel={href.startsWith('http')?'noreferrer':undefined}>{children} <span>↗</span></a>}
export function SectionLabel({children}:{children:React.ReactNode}){return <p className="section-label">{children}</p>}
export function PageShell({theme,children}:{theme:string;children:React.ReactNode}){return <div data-theme={theme}><Header/>{children}<Footer/></div>}
export function FAQ({items}:{items:{q:string;a:string}[]}){return <div className="faq">{items.map(item=><details key={item.q}><summary>{item.q}<span>+</span></summary><p>{item.a}</p></details>)}</div>}
export function Quote({children,source}:{children:React.ReactNode;source?:string}){return <blockquote><span className="quote-mark">“</span><p>{children}</p>{source&&<cite>{source}</cite>}</blockquote>}
