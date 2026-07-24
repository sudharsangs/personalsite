# Blog authoring

Create posts in this directory as `lowercase-kebab-case.mdx`. The filename is the canonical URL slug; do not add a `slug` field.

Every post must begin with:

```yaml
---
title: "A clear article title"
description: "A concise search and social description."
publishedAt: "2026-07-01"
updatedAt: "2026-07-23" # optional
tags:
  - Engineering
draft: false
---
```

- Dates use `YYYY-MM-DD`.
- `tags` must contain at least one string.
- Drafts are excluded from the homepage, blog index, related posts, and static routes.
- Put images in `public/blog/` and reference them with an absolute path such as `![Alt text](/blog/example.png)`.
- Use root-relative links for this site and full `https://` links for external sites.
- External links open in a new tab and are announced to screen readers.
- Run `pnpm build && pnpm start` for an exact local production preview. The build validates every MDX file and reports the offending filename.

> Note: this project currently uses Next.js 15.3.8. Its development error overlay has a confirmed incompatibility with runtime-evaluated MDX, so article pages should be previewed through the production server until Next.js is upgraded. Static production rendering is unaffected.
