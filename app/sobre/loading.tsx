import { Footer, Header, PageShell } from '../components';

export default function AboutLoading() {
  return <PageShell><Header /><main className="academy-loader-page"><div className="academy-container"><div className="academy-loader-heading" /><div className="academy-loader-card academy-loader-card--article" /></div></main><Footer /></PageShell>;
}
