import { MetadataRoute } from "next";
import { getPaginatedPosts } from "@/lib/wordpress";

const baseUrl = "https://maogeo.top";
const contentUpdatedAt = new Date("2026-07-23T00:00:00+08:00");

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let postRoutes: MetadataRoute.Sitemap = [];

  try {
    const data = await getPaginatedPosts({ first: 100 });
    postRoutes = data.posts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    }));
  } catch (error) {
    console.error("Failed to generate sitemap post routes", error);
  }

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: contentUpdatedAt, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/waimaojianzhan`, lastModified: contentUpdatedAt, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/geo-tools`, lastModified: contentUpdatedAt, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/geo-seo-youhua`, lastModified: contentUpdatedAt, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/server-recommendation`, lastModified: contentUpdatedAt, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/blog`, lastModified: contentUpdatedAt, changeFrequency: "daily", priority: 0.9 },
    { url: `${baseUrl}/privacy-policy`, lastModified: contentUpdatedAt, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/terms-of-service`, lastModified: contentUpdatedAt, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/sitemap`, lastModified: contentUpdatedAt, changeFrequency: "monthly", priority: 0.5 },
  ];

  return [...staticRoutes, ...postRoutes];
}
