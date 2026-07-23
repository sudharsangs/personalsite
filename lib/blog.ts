import "server-only";

import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";
import type { BlogPost, BlogPostMetadata } from "@/types/blog";

const BLOG_DIRECTORY = path.join(process.cwd(), "content", "blog");
const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;
const SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

function fail(filename: string, message: string): never {
  throw new Error(`Invalid blog post "${filename}": ${message}`);
}

function validateDate(filename: string, field: string, value: unknown) {
  if (typeof value !== "string" || !ISO_DATE.test(value)) {
    fail(filename, `"${field}" must be a date in YYYY-MM-DD format.`);
  }
  if (Number.isNaN(new Date(`${value}T00:00:00Z`).getTime())) {
    fail(filename, `"${field}" is not a valid date.`);
  }
}

function parsePost(filename: string): BlogPost {
  const slug = filename.replace(/\.mdx$/, "");
  if (!SLUG.test(slug)) {
    fail(filename, "the filename must be a lowercase kebab-case slug.");
  }

  const raw = fs.readFileSync(path.join(BLOG_DIRECTORY, filename), "utf8");
  const { data, content } = matter(raw);

  for (const field of ["title", "description", "publishedAt", "tags", "draft"]) {
    if (data[field] === undefined) fail(filename, `missing required "${field}" field.`);
  }
  if (typeof data.title !== "string" || !data.title.trim()) {
    fail(filename, `"title" must be a non-empty string.`);
  }
  if (typeof data.description !== "string" || !data.description.trim()) {
    fail(filename, `"description" must be a non-empty string.`);
  }
  validateDate(filename, "publishedAt", data.publishedAt);
  if (data.updatedAt !== undefined) validateDate(filename, "updatedAt", data.updatedAt);
  if (!Array.isArray(data.tags) || data.tags.length === 0 || data.tags.some((tag) => typeof tag !== "string" || !tag.trim())) {
    fail(filename, `"tags" must be a non-empty list of strings.`);
  }
  if (typeof data.draft !== "boolean") {
    fail(filename, `"draft" must be true or false.`);
  }
  if (!content.trim()) fail(filename, "article content cannot be empty.");

  return {
    title: data.title.trim(),
    description: data.description.trim(),
    publishedAt: data.publishedAt,
    updatedAt: data.updatedAt,
    tags: data.tags.map((tag: string) => tag.trim()),
    draft: data.draft,
    slug,
    readingTime: readingTime(content).text,
    content,
  };
}

function allPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIRECTORY)) return [];
  const files = fs.readdirSync(BLOG_DIRECTORY).filter((file) => file.endsWith(".mdx"));
  const seen = new Set<string>();
  const posts = files.map((filename) => {
    const post = parsePost(filename);
    if (seen.has(post.slug)) fail(filename, `duplicate slug "${post.slug}".`);
    seen.add(post.slug);
    return post;
  });
  return posts.sort((a, b) => b.publishedAt.localeCompare(a.publishedAt) || a.title.localeCompare(b.title));
}

export function getPublishedPosts(): BlogPostMetadata[] {
  return allPosts()
    .filter((post) => !post.draft)
    .map((post) => ({
      title: post.title,
      description: post.description,
      publishedAt: post.publishedAt,
      updatedAt: post.updatedAt,
      tags: post.tags,
      draft: post.draft,
      slug: post.slug,
      readingTime: post.readingTime,
    }));
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return allPosts().find((post) => post.slug === slug && !post.draft);
}

export function getRelatedPosts(post: BlogPostMetadata, limit = 3): BlogPostMetadata[] {
  const tags = new Set(post.tags.map((tag) => tag.toLowerCase()));
  return getPublishedPosts()
    .filter((candidate) => candidate.slug !== post.slug)
    .map((candidate) => ({
      candidate,
      score: candidate.tags.filter((tag) => tags.has(tag.toLowerCase())).length,
    }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score || b.candidate.publishedAt.localeCompare(a.candidate.publishedAt))
    .slice(0, limit)
    .map(({ candidate }) => candidate);
}

export function getBlogStaticParams() {
  return getPublishedPosts().map(({ slug }) => ({ slug }));
}
