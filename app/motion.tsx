'use client';

import { useEffect, useRef, type CSSProperties, type ElementType, type PropsWithChildren } from 'react';

type MotionTag = 'div' | 'section' | 'article' | 'aside' | 'header' | 'main' | 'figure' | 'ul' | 'ol';

type RevealProps = PropsWithChildren<{
  as?: MotionTag;
  className?: string;
  delay?: number;
  stagger?: boolean;
  'aria-label'?: string;
  'aria-labelledby'?: string;
}>;

/**
 * Adds a viewport reveal without hiding content when JavaScript is unavailable.
 * The observer is disconnected after the first reveal to keep scroll work small.
 */
export function Reveal({ as = 'div', className = '', delay = 0, stagger = false, children, 'aria-label': ariaLabel, 'aria-labelledby': ariaLabelledBy }: RevealProps) {
  const nodeRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    node.dataset.motionReady = 'true';
    let fallbackTimer = 0;

    const reveal = () => {
      if (fallbackTimer) window.clearTimeout(fallbackTimer);
      node.dataset.motionVisible = 'true';
    };

    if (!('IntersectionObserver' in window)) {
      reveal();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        reveal();
        observer.disconnect();
      },
      { threshold: 0.14, rootMargin: '0px 0px -8% 0px' },
    );

    observer.observe(node);
    fallbackTimer = window.setTimeout(() => {
      const bounds = node.getBoundingClientRect();
      if (bounds.bottom <= 0 || (bounds.top < window.innerHeight && bounds.bottom > 0)) reveal();
    }, 900);

    return () => {
      observer.disconnect();
      if (fallbackTimer) window.clearTimeout(fallbackTimer);
    };
  }, []);

  const MotionComponent = as as ElementType;
  const style = delay ? ({ '--motion-delay': `${delay}ms` } as CSSProperties) : undefined;

  return (
    <MotionComponent
      ref={nodeRef}
      className={className}
      data-motion-reveal="true"
      data-motion-stagger={stagger ? 'true' : undefined}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      style={style}
    >
      {children}
    </MotionComponent>
  );
}
