import Link from "next/link";
import { ArrowRight } from "lucide-react";
import BlogCard from "@/components/modules/blog-card";
import { getPublishedPosts } from "@/lib/blog";

export default function WritingPreview() {
  const posts = getPublishedPosts().slice(0, 3);
  return (
    <section className="section-block" aria-labelledby="writing-heading">
      <div className="section-heading">
        <div className="max-w-2xl">
          <p className="eyebrow">Writing</p>
          <h2 id="writing-heading">Notes on engineering and building products.</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Mostly things I’ve learned while building and running FactoStack.
          </p>
        </div>
        <Link href="/blog" className="text-link">View all writing <ArrowRight aria-hidden="true" /></Link>
      </div>
      <div className="mt-9 grid gap-4 md:grid-cols-3">
        {posts.map((post) => <BlogCard key={post.slug} post={post} headingLevel="h3" />)}
      </div>
    </section>
  );
}
