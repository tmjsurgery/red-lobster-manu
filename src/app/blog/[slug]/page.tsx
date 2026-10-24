import { blogPosts } from "@/lib/blogData";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import MenuInterlink from "@/components/layout/MenuInterlink";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata(props: Props) {
  const params = await props.params;
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return { title: "Post Not Found - Red Lobster Menu Guide" };

  return {
    title: `${post.title} | Red Lobster Menu Guide`,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: new Date(post.date).toISOString(),
      authors: [post.author],
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

export default async function BlogPostPage(props: Props) {
  const params = await props.params;
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts.filter((p) => p.id !== post.id).slice(0, 2);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt,
    "image": `https://redlobstermenu.site${post.image}`,
    "datePublished": new Date(post.date).toISOString(),
    "dateModified": new Date(post.date).toISOString(),
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "The Red Lobster Menu Guide",
      "logo": {
        "@type": "ImageObject",
        "url": "https://redlobstermenu.site/favicon-96x96.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://redlobstermenu.site/blog/${post.slug}`
    }
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://redlobstermenu.site/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://redlobstermenu.site/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": `https://redlobstermenu.site/blog/${post.slug}`
      }
    ]
  };

  return (
    <>
      <Script id="article-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Script id="breadcrumb-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      
      <article className="bg-[#fffcf9] min-h-screen pb-20 pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumbs */}
          <nav className="flex text-sm text-gray-500 mb-8 font-medium">
            <Link href="/" className="hover:text-[#7c1d27] transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-[#7c1d27] transition-colors">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800 font-bold truncate max-w-xs sm:max-w-md">{post.title}</span>
          </nav>

          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Main Content Column */}
            <div className="lg:w-[70%]">
              
              {/* Title Header */}
              <div className="mb-8 border-b border-gray-200 pb-8">
                <span className="text-[#7c1d27] font-bold uppercase tracking-widest text-xs mb-3 block">
                  {post.category}
                </span>
                <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
                  {post.title}
                </h1>
                <div className="flex flex-wrap items-center text-sm text-gray-600 font-medium space-x-4">
                  <span>By <span className="font-bold text-gray-900">{post.author}</span></span>
                  <span className="hidden md:inline">•</span>
                  <span>{post.date}</span>
                  <span className="hidden md:inline">•</span>
                  <span>{post.readTime}</span>
                </div>
              </div>

              {/* Main Image */}
              <div className="relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden mb-10 shadow-sm border border-gray-100">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Table of Contents Box */}
              <div className="bg-white border-2 border-[#7c1d27]/10 rounded-2xl p-6 mb-12 shadow-sm text-center">
                <h3 className="font-bold text-gray-900 uppercase tracking-widest text-sm mb-4">Table of Contents</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  <a href="#" className="inline-block border border-[#7c1d27] text-[#7c1d27] font-bold text-sm px-4 py-1.5 rounded-full hover:bg-[#7c1d27] hover:text-white transition-colors">The Classics That Never Miss</a>
                  <a href="#" className="inline-block border border-[#7c1d27] text-[#7c1d27] font-bold text-sm px-4 py-1.5 rounded-full hover:bg-[#7c1d27] hover:text-white transition-colors">New Additions in 2026</a>
                  <a href="#" className="inline-block border border-[#7c1d27] text-[#7c1d27] font-bold text-sm px-4 py-1.5 rounded-full hover:bg-[#7c1d27] hover:text-white transition-colors">The Art of the Side Dish</a>
                </div>
              </div>

              {/* Content Body */}
              <div 
                className="prose prose-lg prose-red max-w-none 
                  prose-headings:font-black prose-headings:text-gray-900 
                  prose-h2:text-3xl prose-h2:mt-10 prose-h2:mb-6 prose-h2:border-b prose-h2:border-[#7c1d27]/20 prose-h2:pb-3
                  prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
                  prose-li:text-gray-700 prose-li:mb-2
                  prose-strong:text-gray-900 prose-strong:font-bold
                  prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-6
                  prose-table:w-full prose-table:border-collapse prose-table:mb-8
                  prose-th:bg-gray-100 prose-th:p-3 prose-th:text-left prose-th:border prose-th:border-gray-200
                  prose-td:p-3 prose-td:border prose-td:border-gray-200"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
              
              <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between">
                <Link href="/blog" className="text-[#7c1d27] font-bold hover:underline mb-4 sm:mb-0 flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Back to all articles
                </Link>
                <div className="flex space-x-3">
                  <span className="text-sm font-bold text-gray-500 uppercase tracking-widest mr-2 flex items-center">Share:</span>
                  <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#7c1d27] hover:text-white transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                  </button>
                  <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#7c1d27] hover:text-white transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Sidebar Column */}
            <div className="lg:w-[30%] space-y-10">
              
              {/* Search Widget */}
              <div className="bg-white p-6 shadow-sm border border-gray-200">
                <form className="flex" action="/blog">
                  <input type="text" placeholder="Search..." className="flex-grow border border-gray-300 p-2 text-sm focus:outline-none focus:border-[#7c1d27]" />
                  <button type="submit" className="bg-[#7c1d27] text-white px-4 hover:bg-[#5a131b] transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                  </button>
                </form>
              </div>

              {/* Recent Posts Widget */}
              <div className="bg-white p-6 shadow-sm border border-gray-200">
                <h3 className="font-black text-gray-900 border-b-2 border-[#7c1d27] inline-block pb-1 mb-6 text-lg uppercase tracking-wide">Recent Posts</h3>
                <div className="space-y-4">
                  {relatedPosts.map((related) => (
                    <Link key={related.id} href={`/blog/${related.slug}`} className="block group border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                      <h4 className="font-semibold text-gray-800 text-sm leading-snug group-hover:text-[#7c1d27] transition-colors mb-1">{related.title}</h4>
                      <span className="text-xs text-gray-500 uppercase tracking-wider">{related.date}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Categories Widget */}
              <div className="bg-white p-6 shadow-sm border border-gray-200">
                <h3 className="font-black text-gray-900 border-b-2 border-[#7c1d27] inline-block pb-1 mb-6 text-lg uppercase tracking-wide">Categories</h3>
                <ul className="space-y-3 text-sm text-gray-600 font-medium">
                  <li><Link href="#" className="hover:text-[#7c1d27] border-b border-dashed border-gray-300 pb-1 flex justify-between"><span>Menu Guides</span></Link></li>
                  <li><Link href="#" className="hover:text-[#7c1d27] border-b border-dashed border-gray-300 pb-1 flex justify-between"><span>Tips & Tricks</span></Link></li>
                  <li><Link href="#" className="hover:text-[#7c1d27] border-b border-dashed border-gray-300 pb-1 flex justify-between"><span>Food History</span></Link></li>
                  <li><Link href="#" className="hover:text-[#7c1d27] border-b border-dashed border-gray-300 pb-1 flex justify-between"><span>Seafood Deals</span></Link></li>
                </ul>
              </div>

              {/* Pages Widget */}
              <div className="bg-white p-6 shadow-sm border border-gray-200">
                <h3 className="font-black text-gray-900 border-b-2 border-[#7c1d27] inline-block pb-1 mb-6 text-lg uppercase tracking-wide">Pages</h3>
                <ul className="space-y-3 text-sm text-[#7c1d27] font-bold">
                  <li><Link href="/menu" className="hover:underline">Full Menu</Link></li>
                  <li><Link href="/locations" className="hover:underline">Find a Location</Link></li>
                  <li><Link href="/coupons" className="hover:underline">Coupons & Promo Codes</Link></li>
                  <li><Link href="/faq" className="hover:underline">Frequently Asked Questions</Link></li>
                </ul>
              </div>

            </div>
          </div>

          <div className="mt-12">
            <MenuInterlink />
          </div>
        </div>
      </article>
    </>
  );
}
