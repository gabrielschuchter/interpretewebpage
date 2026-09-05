import { Footer, Header, PageShell } from '../components';

export default function AboutLoading() {
  return <PageShell><Header /><main className="it-loader-page"><div className="it-container"><div className="it-loader-heading" /><div className="it-loader-card it-loader-card--article" /></div></main><Footer /></PageShell>;
}
