import { Footer, Header, PageShell } from './components';

export default function Loading() {
  return <PageShell><Header /><main className="academy-loader-page"><div className="academy-container"><div className="academy-loader-heading" /><div className="academy-loader-row"><div className="academy-loader-card" /><div className="academy-loader-card" /><div className="academy-loader-card" /></div></div></main><Footer /></PageShell>;
}
