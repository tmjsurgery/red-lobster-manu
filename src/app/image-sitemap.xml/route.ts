import { categories, menuItems } from "@/lib/data";
import { blogPosts } from "@/lib/blogData";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://redlobstermenu.site");

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const urlEntries: { loc: string; images: string[] }[] = [];

  urlEntries.push({
    loc: `${BASE_URL}/`,
    images: [`${BASE_URL}/hero-section.webp`, `${BASE_URL}/ultimate-feast.webp`],
  });

  urlEntries.push({
    loc: `${BASE_URL}/specials`,
    images: [`${BASE_URL}/hero-section.webp`, `${BASE_URL}/new-crabfest-boil.webp`],
  });

  urlEntries.push({
    loc: `${BASE_URL}/dinner-menu`,
    images: [`${BASE_URL}/hero-section.webp`, `${BASE_URL}/ultimate-feast.webp`, `${BASE_URL}/surf-turf-lobster-tail-sirloin.webp`],
  });

  urlEntries.push({
    loc: `${BASE_URL}/kids-menu`,
    images: [`${BASE_URL}/hero-section.webp`, `${BASE_URL}/popcorn-shrimp.webp`, `${BASE_URL}/macaroni-cheese.webp`],
  });

  urlEntries.push({
    loc: `${BASE_URL}/nutrition-calories`,
    images: [`${BASE_URL}/hero-section.webp`, `${BASE_URL}/grilled-shrimp.webp`, `${BASE_URL}/grilled-atlantic-salmon.webp`],
  });

  for (const category of categories) {
    const itemImages = menuItems
      .filter((item) => item.categorySlug === category.slug)
      .map((item) => item.image);

    const images = Array.from(new Set([category.image, ...itemImages]));

    urlEntries.push({
      loc: `${BASE_URL}/menu/${category.slug}`,
      images: images.map((img) => `${BASE_URL}${img}`),
    });
  }

  for (const post of blogPosts) {
    urlEntries.push({
      loc: `${BASE_URL}/blog/${post.slug}`,
      images: [`${BASE_URL}${post.image}`],
    });
  }

  const body = urlEntries
    .map(
      (entry) => `  <url>
    <loc>${escapeXml(entry.loc)}</loc>
${entry.images.map((img) => `    <image:image>\n      <image:loc>${escapeXml(img)}</image:loc>\n    </image:image>`).join("\n")}
  </url>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${body}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
