import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h1 className="mb-4 text-4xl">{children}</h1>,
    h2: ({ children }) => <h2 className="mb-3 mt-6 text-3xl">{children}</h2>,
    h3: ({ children }) => <h3 className="mb-2 mt-4 text-xl">{children}</h3>,
    ul: ({ children }) => (
      <ul className="list-disc prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert mb-4">
        {children}
      </ul>
    ),
    p: ({ children }) => (
      <p className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert mb-4">
        {children}
      </p>
    ),
    ...components,
  };
}
