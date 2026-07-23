import type { ComponentPropsWithoutRef } from "react";
import Image, { type ImageProps } from "next/image";

function headingId(children: unknown) {
  return String(children)
    .toLowerCase()
    .replace(/<[^>]*>/g, "")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export const mdxComponents = {
  h2: ({ children, ...props }: ComponentPropsWithoutRef<"h2">) => (
    <h2 id={headingId(children)} {...props}>{children}</h2>
  ),
  h3: ({ children, ...props }: ComponentPropsWithoutRef<"h3">) => (
    <h3 id={headingId(children)} {...props}>{children}</h3>
  ),
  a: ({ href = "", children, ...props }: ComponentPropsWithoutRef<"a">) => {
    const external = /^https?:\/\//.test(href);
    return (
      <a href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} {...props}>
        {children}
        {external && <span className="sr-only"> (opens in a new tab)</span>}
      </a>
    );
  },
  img: (props: ComponentPropsWithoutRef<"img">) => {
    if (!props.src || !props.alt) return null;
    return (
      <span className="article-image">
        <Image
          src={props.src as ImageProps["src"]}
          alt={props.alt}
          width={1200}
          height={675}
          sizes="(max-width: 768px) 100vw, 720px"
        />
      </span>
    );
  },
  pre: (props: ComponentPropsWithoutRef<"pre">) => (
    <div className="code-scroll" tabIndex={0} aria-label="Scrollable code example">
      <pre {...props} />
    </div>
  ),
};
