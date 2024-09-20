import React, { ComponentPropsWithoutRef } from "react";
import { Link } from "next-view-transitions";
import type { MDXComponents } from "mdx/types";
import { highlight } from "sugar-high";

type HeadingProps = ComponentPropsWithoutRef<"h1">;
type ParagraphProps = ComponentPropsWithoutRef<"p">;
type ListProps = ComponentPropsWithoutRef<"ul">;
type ListItemProps = ComponentPropsWithoutRef<"li">;
type AnchorProps = ComponentPropsWithoutRef<"a">;
type BlockquoteProps = ComponentPropsWithoutRef<"blockquote">;

const components: MDXComponents = {
  h1: (props: HeadingProps) => (
    <h1
      className="font-bold text-3xl mt-8 mb-4 text-black dark:text-white"
      {...props}
    />
  ),
  h2: (props: HeadingProps) => (
    <h2
      className="font-semibold text-2xl mt-8 mb-3 text-black dark:text-white"
      {...props}
    />
  ),
  h3: (props: HeadingProps) => (
    <h3
      className="font-medium text-xl mt-6 mb-2 text-black dark:text-white"
      {...props}
    />
  ),
  h4: (props: HeadingProps) => (
    <h4 className="font-medium text-black dark:text-white" {...props} />
  ),
  p: (props: ParagraphProps) => (
    <p className="text-black dark:text-white leading-7 mb-4" {...props} />
  ),
  ol: (props: ListProps) => (
    <ol
      className="text-black dark:text-white list-decimal pl-6 mb-4 space-y-2"
      {...props}
    />
  ),
  ul: (props: ListProps) => (
    <ul
      className="text-black dark:text-white list-disc pl-6 mb-4 space-y-2"
      {...props}
    />
  ),
  li: (props: ListItemProps) => (
    <li className="text-black dark:text-white" {...props} />
  ),
  em: (props: ComponentPropsWithoutRef<"em">) => (
    <em className="font-medium text-black dark:text-white" {...props} />
  ),
  strong: (props: ComponentPropsWithoutRef<"strong">) => (
    <strong className="font-medium text-black dark:text-white" {...props} />
  ),
  a: ({ href, children, ...props }: AnchorProps) => {
    const className =
      "text-blue-500 dark:text-blue-300 hover:text-blue-700 dark:hover:text-blue-500";
    if (href?.startsWith("/")) {
      return (
        <Link href={href} className={className} {...props}>
          <span>{children}</span>
        </Link>
      );
    }
    if (href?.startsWith("#")) {
      return (
        <a href={href} className={className} {...props}>
          <span>{children}</span>
        </a>
      );
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        {...props}
      >
        <span>{children}</span>
      </a>
    );
  },
  code: ({ children, ...props }: ComponentPropsWithoutRef<"code">) => {
    const codeHTML = highlight(children as string);
    return (
      <code
        dangerouslySetInnerHTML={{ __html: codeHTML }}
        className="text-black dark:text-white"
        {...props}
      />
    );
  },
  Table: ({ data }: { data: { headers: string[]; rows: string[][] } }) => (
    <table className="text-black dark:text-white">
      <thead>
        <tr>
          {data.headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.rows.map((row, index) => (
          <tr key={index}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  ),
  blockquote: (props: BlockquoteProps) => (
    <blockquote
      className="border-l-4 border-gray-300 dark:border-gray-600 pl-4 py-2 mb-4 italic text-gray-800 dark:text-gray-200"
      {...props}
    />
  ),
};

export function useMDXComponents(
  otherComponents: MDXComponents
): MDXComponents {
  return {
    ...otherComponents,
    ...components,
  };
}
