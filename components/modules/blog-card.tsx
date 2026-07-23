import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { BlogPostMetadata } from "@/types/blog";

const dateFormatter = new Intl.DateTimeFormat("en-IN", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

export function formatPostDate(date: string) {
  return dateFormatter.format(new Date(`${date}T00:00:00Z`));
}

export default function BlogCard({ post, headingLevel = "h2" }: { post: BlogPostMetadata; headingLevel?: "h2" | "h3" }) {
  const Heading = headingLevel;
  return (
    <article className="group flex h-full flex-col rounded-xl bg-secondary/30 p-6">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium text-muted-foreground">
        <time dateTime={post.publishedAt}>{formatPostDate(post.publishedAt)}</time>
        <span aria-hidden="true">·</span>
        <span>{post.readingTime}</span>
      </div>
      <Heading className="mt-4 font-serif text-2xl font-semibold leading-[1.18] tracking-tight">
        <Link href={`/blog/${post.slug}`} className="hover:text-primary">{post.title}</Link>
      </Heading>
      <p className="mt-4 flex-1 text-sm leading-6 text-muted-foreground">{post.description}</p>
      <div className="mt-6 flex items-end justify-between gap-4">
        <ul className="flex flex-wrap gap-1.5" aria-label="Tags">
          {post.tags.slice(0, 2).map((tag) => (
            <li key={tag} className="text-xs font-medium text-muted-foreground">{tag}</li>
          ))}
        </ul>
        <Link href={`/blog/${post.slug}`} className="inline-flex min-h-11 shrink-0 items-center gap-2 text-sm font-semibold text-primary">
          Read <ArrowRight className="h-4 w-4" aria-hidden="true" />
          <span className="sr-only">{post.title}</span>
        </Link>
      </div>
    </article>
  );
}
