import type { Metadata } from "next";
import BlogCard from "@/components/modules/blog-card";
import CTASection from "@/components/modules/cta-section";
import { getPublishedPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Engineering & Product Writing | Sudharsan GS",
  description: "Production notes on SaaS architecture, product engineering, technical trade-offs, GTM, and building FactoStack.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const posts = getPublishedPosts();
  return (
    <main id="main-content" className="page-shell">
      <header className="page-intro">
        <p className="eyebrow">Writing</p>
        <h1>Notes from building software.</h1>
        <p>What I’ve learned from building FactoStack and working on production systems.</p>
      </header>
      <section aria-labelledby="articles-heading">
        <h2 id="articles-heading" className="sr-only">Articles</h2>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post) => <BlogCard key={post.slug} post={post} />)}
        </div>
      </section>
      <CTASection />
    </main>
  );
}
