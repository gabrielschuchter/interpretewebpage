import type { SVGProps } from 'react';

export type StudyIconName =
  | 'question'
  | 'search'
  | 'book'
  | 'chart'
  | 'shield'
  | 'layers'
  | 'message'
  | 'calendar'
  | 'route'
  | 'headset'
  | 'arrow'
  | 'quote'
  | 'bookmark'
  | 'note'
  | 'filter'
  | 'checklist'
  | 'reference'
  | 'play'
  | 'close';

type StudyIconProps = SVGProps<SVGSVGElement> & {
  name: StudyIconName;
  size?: number;
};

export function StudyIcon({ name, size = 24, className, ...props }: StudyIconProps) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.6,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
    className,
    ...props,
  };

  if (name === 'question') return <svg {...common}><circle cx="12" cy="12" r="8.5" /><path d="M9.6 9.2a2.55 2.55 0 1 1 4.1 2.03c-1.12.84-1.7 1.33-1.7 2.6" /><path d="M12 17.35h.01" /></svg>;
  if (name === 'search') return <svg {...common}><circle cx="10.7" cy="10.7" r="6.5" /><path d="m15.5 15.5 5 5" /><path d="M8.6 10.7h4.2M10.7 8.6v4.2" /></svg>;
  if (name === 'book') return <svg {...common}><path d="M4.5 5.1A2.1 2.1 0 0 1 6.6 3H20v16.4H6.6a2.1 2.1 0 0 0-2.1 2.1z" /><path d="M4.5 5.1v16.4" /><path d="M8 7h8M8 10.6h8" /></svg>;
  if (name === 'chart') return <svg {...common}><path d="M4 20V4M4 20h17" /><path d="M8 16v-3M12 16V8M16 16v-6" /><path d="m7.2 9.2 4-3 4 2 4-4" /></svg>;
  if (name === 'shield') return <svg {...common}><path d="M12 3.2 19 6v5c0 4.65-2.7 8-7 9.8C7.7 19 5 15.65 5 11V6z" /><path d="m8.8 12 2.1 2.1 4.5-4.5" /></svg>;
  if (name === 'layers') return <svg {...common}><path d="m12 3 8 4-8 4-8-4z" /><path d="m4 12 8 4 8-4M4 17l8 4 8-4" /></svg>;
  if (name === 'message') return <svg {...common}><path d="M20 11.8a7.4 7.4 0 0 1-7.9 7.4 8.7 8.7 0 0 1-3.6-.8L4 20l1.35-3.4a7.3 7.3 0 0 1-1.4-4.3 7.5 7.5 0 0 1 8-7.5 7.5 7.5 0 0 1 8.05 7Z" /><path d="M8.2 12h.01M12 12h.01M15.8 12h.01" /></svg>;
  if (name === 'calendar') return <svg {...common}><rect x="4" y="5" width="16" height="15" rx="1" /><path d="M8 3v4M16 3v4M4 10h16M8 14h3M8 17h5" /></svg>;
  if (name === 'route') return <svg {...common}><circle cx="5" cy="18" r="2" /><circle cx="19" cy="6" r="2" /><path d="M7 18h3.5a3.5 3.5 0 0 0 3.5-3.5V9.5A3.5 3.5 0 0 1 17.5 6H17" /></svg>;
  if (name === 'headset') return <svg {...common}><path d="M4 13v-1a8 8 0 0 1 16 0v1" /><path d="M4 13h3v6H5a1 1 0 0 1-1-1zM20 13h-3v6h2a1 1 0 0 0 1-1z" /><path d="M17 19h-2" /></svg>;
  if (name === 'arrow') return <svg {...common}><path d="M4 12h15" /><path d="m13 6 6 6-6 6" /></svg>;
  if (name === 'quote') return <svg {...common}><path d="M7.2 6.2H4.5v5.1h4v-2.7c0-1.1-.45-1.75-1.3-2.4ZM16.7 6.2H14v5.1h4v-2.7c0-1.1-.45-1.75-1.3-2.4Z" fill="currentColor" stroke="none" /></svg>;
  if (name === 'bookmark') return <svg {...common}><path d="M6 4h12v16l-6-3.8L6 20z" /></svg>;
  if (name === 'note') return <svg {...common}><path d="M5 4h14v16H5z" /><path d="M8 8h8M8 11.5h6M8 15h4" /></svg>;
  if (name === 'filter') return <svg {...common}><path d="M4 5h16l-6.2 7.2v5.2L10.2 19v-6.8z" /></svg>;
  if (name === 'checklist') return <svg {...common}><path d="M5 4h14v16H5z" /><path d="m8 9 1.4 1.4L12 7.8M13.5 9H16M8 14l1.4 1.4 2.6-2.6M13.5 14H16" /></svg>;
  if (name === 'reference') return <svg {...common}><path d="M8 5.3c1.4-1 3-.7 4 .2v14c-1-.9-2.6-1.2-4-.2-1.4-1-3-.7-4 .2v-14c1-.9 2.6-1.2 4-.2ZM16 5.3c-1.4-1-3-.7-4 .2v14c1-.9 2.6-1.2 4-.2 1.4-1 3-.7 4 .2v-14c-1-.9-2.6-1.2-4-.2Z" /></svg>;
  if (name === 'play') return <svg {...common}><path d="m8 5 11 7-11 7z" /></svg>;
  return <svg {...common}><path d="m6 6 12 12M18 6 6 18" /></svg>;
}

export function AccentMark({ className = '' }: { className?: string }) {
  return <span className={'it-accent-mark ' + className} aria-hidden="true" />;
}
