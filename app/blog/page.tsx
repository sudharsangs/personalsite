import type { Metadata } from "next";
import BlogCard from "@/components/modules/blog-card";
import { getPublishedPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Writing | Sudharsan GS",
  description: "Notes on building FactoStack, software engineering, and practical product development.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const posts = getPublishedPosts();
  return (
    <main id="main-content" className="page-shell">
      <header className="page-intro">
        <p className="eyebrow">Writing</p>
        <h1>Working notes.</h1>
        <p>Product decisions, engineering trade-offs, and lessons from building FactoStack.</p>
      </header>
      <section aria-labelledby="articles-heading">
        <h2 id="articles-heading" className="sr-only">Articles</h2>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post) => <BlogCard key={post.slug} post={post} />)}
        </div>
      </section>
    </main>
  );
}
