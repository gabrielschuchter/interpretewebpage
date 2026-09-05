import Image from 'next/image';
import { brand, designSystemRules } from '../../lib/design-system';
import styles from './page.module.css';

const colorLabels: Record<keyof typeof brand.colors, string> = {
  pinkEssence: 'Pink Essence', crimsonViolet: 'Crimson Violet', darkAmaranth: 'Dark Amaranth',
  classicCrimson: 'Classic Crimson', debianRed: 'Debian Red', white: 'White',
};

const logoVariants = [
  ['wordmark-amaranto.svg', 'Wordmark em Dark Amaranth'],
  ['wordmark-creme.svg', 'Wordmark em Pink Essence'],
  ['pilula-amaranto.svg', 'Pílula em Dark Amaranth'],
  ['simbolo-amaranto.svg', 'Símbolo em Dark Amaranth'],
] as const;

export const metadata = {
  title: 'Design system',
  description: 'Referência interna do sistema de design do Interprete.',
  robots: { index: false, follow: false },
};

export default function DesignSystemPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Image src="/brand/svg/wordmark-creme.svg" alt="Interprete." width={240} height={44} priority />
        <span className={styles.kicker}>Design system · v1</span>
      </header>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>Sistema de identidade e interface</p>
        <h1>Racional exposto. Cor chapada. Texto sem rodeio.</h1>
        <p>Esta é a referência viva para construir produtos, páginas e materiais do Interprete. com consistência.</p>
      </section>
      <section className={styles.section} aria-labelledby="colors-title">
        <div className={styles.sectionHeading}><p className={styles.eyebrow}>01 · Cor</p><h2 id="colors-title">Dominância, não igualdade</h2><p>Composição orientadora: Pink Essence ~58%, Dark Amaranth ~28%, Classic Crimson ~7%, Debian Red ~5% e Crimson Violet até ~2%.</p></div>
        <div className={styles.colorGrid}>{(Object.entries(brand.colors) as [keyof typeof brand.colors, string][]).map(([key, value]) => <article className={styles.colorCard} key={key}><div className={styles.swatch} style={{ backgroundColor: value }} /><div><strong>{colorLabels[key]}</strong><code>{value}</code>{key !== 'white' && <small>{brand.proportion[key as keyof typeof brand.proportion] ?? 'apoio'}%</small>}</div></article>)}</div>
      </section>
      <section className={`${styles.section} ${styles.dark}`} aria-labelledby="type-title">
        <div className={styles.sectionHeading}><p className={styles.eyebrow}>02 · Tipografia</p><h2 id="type-title">Três famílias, três funções</h2></div>
        <div className={styles.typeGrid}><div><span>Display</span><h3 className={styles.display}>Source Serif Pro</h3><p>Títulos editoriais, wordmark e frases de autoridade.</p></div><div><span>Interface</span><h3 className={styles.body}>Inter</h3><p>Interface, botões, planos, cards e texto corrido.</p></div><div><span>Dados</span><h3 className={styles.mono}>IBM Plex Mono</h3><p>Rótulos, métricas, tags técnicas e tabelas.</p></div></div>
      </section>
      <section className={styles.section} aria-labelledby="logos-title">
        <div className={styles.sectionHeading}><p className={styles.eyebrow}>03 · Marca</p><h2 id="logos-title">Assinaturas oficiais</h2><p>Use wordmark sempre que houver espaço. O símbolo é reduzido e nunca substitui automaticamente o reconhecimento do nome.</p></div>
        <div className={styles.logoGrid}>{logoVariants.map(([file, label]) => <article className={styles.logoCard} key={file}><Image src={'/brand/svg/' + file} alt={label} width={240} height={80} /><span>{label}</span></article>)}</div>
      </section>
      <section className={`${styles.section} ${styles.canvas}`} aria-labelledby="components-title">
        <div className={styles.sectionHeading}><p className={styles.eyebrow}>04 · Componentes</p><h2 id="components-title">Estados e linguagem de interface</h2></div>
        <div className={styles.componentRow}><a className={styles.button} href="#components-title">Ação principal <span aria-hidden="true">↗</span></a><button className={styles.buttonSecondary} type="button">Ação secundária</button><span className={styles.tag}>RÓTULO / DADO</span></div>
        <div className={styles.panel}><span className={styles.eyebrow}>Princípio</span><h3>Nenhuma receita pronta.</h3><p>Entregamos o raciocínio necessário para construir uma decisão própria e contextualizada.</p></div>
      </section>
      <section className={`${styles.section} ${styles.dark}`} aria-labelledby="rules-title">
        <div className={styles.sectionHeading}><p className={styles.eyebrow}>05 · Governança</p><h2 id="rules-title">Antes de publicar</h2></div>
        <ol className={styles.rules}>{designSystemRules.map((rule, index) => <li key={rule}><span>0{index + 1}</span>{rule}</li>)}</ol>
      </section>
    </main>
  );
}
