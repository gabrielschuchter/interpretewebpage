import { getPublicArticles, toBrowserArticle } from '../lib/blog/content';
import { Footer, Header, PageShell } from './components';
import AcademyHome from './academy-home';

export default function HomePage() {
  const articles = getPublicArticles().map(toBrowserArticle);

  return (
    <PageShell>
      <Header />
      <AcademyHome articles={articles} />
      <Footer />
    </PageShell>
  );
}
