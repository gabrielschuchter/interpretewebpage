import { Footer, Header, PageShell } from '../components';

export default function PlansLoading() {
  return <PageShell><Header /><main className="it-loader-page"><div className="it-container"><div className="it-loader-heading" /><div className="it-loader-row"><div className="it-loader-card" /><div className="it-loader-card" /><div className="it-loader-card" /></div></div></main><Footer /></PageShell>;
}
