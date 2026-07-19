import dayjs from "dayjs";
import type { MetadataRoute } from "next";

import { SITE_INFO } from "@/config/site";
import { getAllPosts } from "@/features/blog/data/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts().map((post) => ({
    url: `${SITE_INFO.url}/blog/${post.slug}`,
    lastModified: dayjs(post.metadata.updatedAt).toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const routes: MetadataRoute.Sitemap = [
    {
      url: SITE_INFO.url,
      lastModified: dayjs().toISOString(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_INFO.url}/blog`,
      lastModified: dayjs().toISOString(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_INFO.url}/llms.txt`,
      lastModified: dayjs().toISOString(),
      changeFrequency: "monthly",
      priority: 0.3,
    },
  ];

  return [...routes, ...posts];
}
