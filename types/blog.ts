export interface BlogPostMetadata {
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  tags: string[];
  draft: boolean;
  slug: string;
  readingTime: string;
}

export interface BlogPost extends BlogPostMetadata {
  content: string;
}
