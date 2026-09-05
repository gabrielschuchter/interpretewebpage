/* eslint-disable @next/next/no-img-element */
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export function MarkdownArticle({ content }: { content: string }) {
  return (
    <div className="blog-markdown">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          a: ({ href, children, node: _node, ...props }) => {
            const external = Boolean(href?.startsWith('http://') || href?.startsWith('https://'));
            return <a href={href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined} {...props}>{children}</a>;
          },
          img: ({ src, alt, node: _node, ...props }) => src ? <img src={src} alt={alt ?? ''} loading="lazy" {...props} /> : null,
          table: ({ children, node: _node, ...props }) => (
            <div className="blog-table-scroll">
              <table {...props}>{children}</table>
            </div>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
