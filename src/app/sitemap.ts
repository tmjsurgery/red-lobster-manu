import { MetadataRoute } from "next";
import { categories } from "@/lib/data";
import { blogPosts } from "@/lib/blogData";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://redlobstermenu.site");

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { route: "", priority: 1.0, changeFrequency: "daily" as const },
    { route: "/menu", priority: 0.9, changeFrequency: "daily" as const },
    { route: "/specials", priority: 0.9, changeFrequency: "daily" as const },
    { route: "/lunch-menu", priority: 0.9, changeFrequency: "weekly" as const },
    { route: "/dinner-menu", priority: 0.9, changeFrequency: "weekly" as const },
    { route: "/kids-menu", priority: 0.8, changeFrequency: "weekly" as const },
    { route: "/nutrition-calories", priority: 0.8, changeFrequency: "weekly" as const },
    { route: "/happy-hour", priority: 0.8, changeFrequency: "weekly" as const },
    { route: "/coupons", priority: 0.8, changeFrequency: "daily" as const },
    { route: "/nutrition-allergen-guide", priority: 0.7, changeFrequency: "weekly" as const },
    { route: "/locations", priority: 0.7, changeFrequency: "monthly" as const },
    { route: "/blog", priority: 0.7, changeFrequency: "weekly" as const },
    { route: "/faq", priority: 0.7, changeFrequency: "weekly" as const },
    { route: "/about", priority: 0.5, changeFrequency: "monthly" as const },
    { route: "/contact", priority: 0.5, changeFrequency: "monthly" as const },
    { route: "/disclaimer", priority: 0.3, changeFrequency: "monthly" as const },
    { route: "/privacy-policy", priority: 0.3, changeFrequency: "monthly" as const },
    { route: "/terms-conditions", priority: 0.3, changeFrequency: "monthly" as const },
  ].map((page) => ({
    url: `${BASE_URL}${page.route}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  const categoryPages = categories.map((category) => ({
    url: `${BASE_URL}/menu/${category.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const blogPages = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...categoryPages, ...blogPages];
}
