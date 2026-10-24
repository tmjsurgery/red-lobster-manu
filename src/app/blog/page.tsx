import SectionHeader from "@/components/ui/SectionHeader";
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
    <>
      <Script
        id="blog-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Blog Hero */}
      <div className="bg-gray-50 py-16 px-4 border-b border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-[#7c1d27] font-bold tracking-widest uppercase text-sm mb-3 block">Official Guides & Tips</span>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
            The Red Lobster <span className="text-[#7c1d27]">Insider Blog</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Discover insider tips for saving money, deep-dives into the menu, and honest reviews of your favorite seafood dishes.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts.map((post) => (
            <Link 
              key={post.id} 
              href={`/blog/${post.slug}`}
              className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:border-[#7c1d27]/30 transition-all duration-300"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#7c1d27] shadow-sm">
                  {post.category}
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center text-xs text-gray-500 mb-4 space-x-3 font-medium uppercase tracking-wider">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#7c1d27] transition-colors leading-snug">{post.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow leading-relaxed">{post.excerpt}</p>
                <div className="flex items-center text-[#7c1d27] font-bold text-sm">
                  Read Article 
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <MenuInterlink currentPage="/blog" />
      </div>
    </>
  );
}
