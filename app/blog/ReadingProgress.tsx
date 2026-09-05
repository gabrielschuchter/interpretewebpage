'use client';

import { useEffect, useRef } from 'react';

export function ReadingProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    const article = document.getElementById('article-reader');
    if (!bar || !article) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const bounds = article.getBoundingClientRect();
      const distance = Math.max(1, article.scrollHeight - window.innerHeight);
      const progress = Math.min(1, Math.max(0, -bounds.top / distance));
      bar.style.transform = `scaleX(${progress})`;
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return <div className="blog-reading-progress" aria-hidden="true"><div ref={barRef} /></div>;
}
