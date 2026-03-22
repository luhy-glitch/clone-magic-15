

# Migrate Blog Posts from Database to Static JSON

## Overview
Export all blog posts from the database to a static JSON file and create a local hook that reads from it, swapping imports in Blogg.tsx and BloggArtikel.tsx.

## Steps

### 1. Create `src/data/blogPosts.json`
Export all 28 blog posts from the `blog_posts` table as a JSON array. Each object includes: `id`, `slug`, `title`, `date`, `tag`, `excerpt`, `content`, `image_url`, `image_alt`, `updated_at`, `key_takeaways`. The file will be sorted by date descending.

Since the Supabase query tool returns data in a non-standard format, I will use `psql` to export the data as proper JSON directly to a file, then copy it into the codebase.

### 2. Create `src/hooks/useBlogPostsLocal.ts`
- Import the JSON file and the `DbBlogPost` interface from the existing hook
- Export `useBlogPosts()` and `useBlogPost(slug)` with identical signatures and return types
- Use `useQuery` wrapping synchronous JSON reads so the interface (loading states, error handling) stays identical
- Re-export `DbBlogPost` for convenience

### 3. Update `src/pages/Blogg.tsx`
Change import from `useBlogPosts` to `useBlogPostsLocal`:
```typescript
import { useBlogPosts } from "@/hooks/useBlogPostsLocal";
```

### 4. Update `src/pages/BloggArtikel.tsx`
Change import from `useBlogPost, useBlogPosts` to `useBlogPostsLocal`:
```typescript
import { useBlogPost, useBlogPosts } from "@/hooks/useBlogPostsLocal";
```

### 5. No deletions
The original `useBlogPosts.ts` hook and Supabase connection remain untouched.

## Technical Details

- The JSON file will be ~200KB containing all 28 posts with full content
- `useBlogPostsLocal` will use `useQuery` with `initialData` from the JSON import, making it synchronous (no loading spinner) while keeping the same hook interface
- The `DbBlogPost` interface is reused from the existing hook file
- No visual changes to the blog

## Files affected

| File | Action |
|------|--------|
| `src/data/blogPosts.json` | Create (exported from DB) |
| `src/hooks/useBlogPostsLocal.ts` | Create |
| `src/pages/Blogg.tsx` | Update import |
| `src/pages/BloggArtikel.tsx` | Update import |

