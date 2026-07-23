import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/components/modules/mdx-components";
import BlogCard, { formatPostDate } from "@/components/modules/blog-card";
import { getBlogStaticParams, getPostBySlug, getRelatedPosts } from "@/lib/blog";

export const dynamicParams = false;

export function generateStaticParams() {
  return getBlogStaticParams();
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  const canonical = `/blog/${post.slug}`;
  return {
    title: `${post.title} | Sudharsan GS`,
    description: post.description,
    alternates: { canonical },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: canonical,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: ["Sudharsan GS"],
      tags: post.tags,
    },
    twitter: { card: "summary_large_image", title: post.title, description: post.description },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();
  const related = getRelatedPosts(post);

  return (
    <main id="main-content" className="page-shell">
      <nav aria-label="Breadcrumb" className="mb-10 text-sm text-muted-foreground">
        <ol className="flex flex-wrap items-center gap-2">
          <li><Link href="/">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href="/blog">Writing</Link></li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-foreground">{post.title}</li>
        </ol>
      </nav>

      <article className="mx-auto max-w-3xl">
        <header className="pb-6">
          <p className="eyebrow">Essay</p>
          <h1 className="font-serif text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl">{post.title}</h1>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">{post.description}</p>
          <div className="mt-6 flex flex-wrap gap-x-3 gap-y-2 text-sm text-muted-foreground">
            <time dateTime={post.publishedAt}>{formatPostDate(post.publishedAt)}</time>
            <span aria-hidden="true">·</span>
            <span>{post.readingTime}</span>
            {post.updatedAt && <><span aria-hidden="true">·</span><span>Updated {formatPostDate(post.updatedAt)}</span></>}
          </div>
        </header>
        <div className="prose-editorial">
          <MDXRemote source={post.content} components={mdxComponents} />
        </div>
      </article>

      {related.length > 0 && (
        <aside aria-labelledby="related-heading" className="mx-auto mt-20 max-w-3xl">
          <h2 id="related-heading" className="font-serif text-3xl font-semibold">Related writing</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {related.map((item) => <BlogCard key={item.slug} post={item} headingLevel="h3" />)}
          </div>
        </aside>
      )}
    </main>
  );
}
