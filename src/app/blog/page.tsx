import { blogPosts } from "@/lib/blogData";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import MenuInterlink from "@/components/layout/MenuInterlink";

export const metadata = {
  title: "Red Lobster Menu Blog & Guides 2026 | Seafood Dining Tips",
  description:
    "Read expert guides on the Red Lobster menu in 2026. Learn money-saving hacks, Cheddar Bay Biscuits pairings, and top-rated seafood reviews.",
  alternates: {
    canonical: "/blog",
  }
};

export default function BlogListingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Red Lobster Guide Blog",
    "description": "Read our latest articles, guides, and reviews about dining at Red Lobster.",
    "url": "https://redlobstermenu.site/blog",
    "blogPost": blogPosts.map((post) => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "image": `https://redlobstermenu.site${post.image}`,
      "datePublished": new Date(post.date).toISOString(),
      "author": {
        "@type": "Person",
        "name": post.author
      },
      "url": `https://redlobstermenu.site/blog/${post.slug}`
    }))
  };

  return (
    <div className="bg-[#F8FAFC]">
      <Script
        id="blog-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Blog Hero */}
      <div className="bg-gradient-to-b from-white to-[#F8FAFC] py-14 px-4 border-b border-gray-200/80">
        <div className="max-w-4xl mx-auto text-center">
          <span className="category-pill text-xs uppercase tracking-wider mb-3">
            SEAFOOD DINING INSIGHTS
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mt-2 tracking-tight leading-tight">
            The Red Lobster <span className="text-[#B33A3A]">Insider Blog</span>
          </h1>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto mt-3 leading-relaxed">
            Discover insider tips for saving money, deep-dives into the 2026 menu, and reviews of your favorite seafood dishes.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 text-xs text-gray-500 flex items-center gap-2">
          <Link href="/" className="hover:text-[#B33A3A] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#B33A3A] font-bold">Seafood Dining Blog</span>
        </nav>

        {/* ── RESEARCH BYLINE & VERIFICATION BAR ───────────────── */}
        <div className="research-meta-bar mb-10 flex justify-between items-center">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-bold text-gray-800">By Food Editors &amp; Culinary Critics</span>
            <span className="text-gray-400">|</span>
            <span>Independent Seafood Editorial</span>
            <span className="text-gray-400">|</span>
            <span className="text-emerald-700 font-semibold flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
              2026 Verified Dining Advice
            </span>
          </div>
          <span className="text-xs text-gray-400 hidden sm:inline">
            Latest Articles
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.map((post) => (
            <Link 
              key={post.id} 
              href={`/blog/${post.slug}`}
              className="lobster-card flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm border border-[#EAD9D9] group"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-[11px] font-extrabold text-[#B33A3A] shadow-xs">
                  {post.category}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <div className="flex items-center text-[11px] text-gray-400 mb-2.5 space-x-2 font-semibold">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-lg font-black text-gray-900 mb-3 group-hover:text-[#B33A3A] transition-colors leading-snug line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-xs sm:text-sm mb-4 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
                <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-[#B33A3A] font-extrabold text-xs uppercase tracking-wider">
                  <span>Read Article</span>
                  <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <MenuInterlink currentPage="/blog" />
      </div>
    </div>
  );
}
