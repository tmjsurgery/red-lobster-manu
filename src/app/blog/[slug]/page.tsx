import { blogPosts } from "@/lib/blogData";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import MenuInterlink from "@/components/layout/MenuInterlink";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata(props: Props) {
  const params = await props.params;
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return { title: "Post Not Found - Red Lobster Menu Guide" };

  const metaTitle = post.seoTitle || `${post.title} | Red Lobster Menu Guide`;
  const metaDescription = post.seoDescription || post.excerpt;

  return {
    title: metaTitle,
    description: metaDescription,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
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
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage(props: Props) {
  const params = await props.params;
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts.filter((p) => p.id !== post.id).slice(0, 3);

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
        "url": "https://redlobstermenu.site/web-app-manifest-192x192.png"
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

  const recipeJsonLd = post.recipe
    ? {
        "@context": "https://schema.org",
        "@type": "Recipe",
        name: post.title,
        image: [`https://redlobstermenu.site${post.image}`],
        description: post.excerpt,
        author: {
          "@type": "Person",
          name: post.author,
        },
        datePublished: new Date(post.date).toISOString(),
        prepTime: post.recipe.prepTime,
        cookTime: post.recipe.cookTime,
        totalTime: post.recipe.totalTime,
        recipeYield: post.recipe.yield,
        recipeCategory: post.category,
        recipeCuisine: "American",
        keywords: "Red Lobster, Cheddar Bay Biscuits, Copycat Recipe, Biscuits",
        recipeIngredient: post.recipe.ingredients,
        recipeInstructions: post.recipe.instructions.map((step, idx) => ({
          "@type": "HowToStep",
          name: `Step ${idx + 1}`,
          text: step,
          position: idx + 1,
        })),
        ...(post.recipe.nutrition
          ? {
              nutrition: {
                "@type": "NutritionInformation",
                calories: post.recipe.nutrition.calories,
                fatContent: post.recipe.nutrition.fatContent,
                saturatedFatContent: post.recipe.nutrition.saturatedFatContent,
                carbohydrateContent: post.recipe.nutrition.carbohydrateContent,
                proteinContent: post.recipe.nutrition.proteinContent,
                sodiumContent: post.recipe.nutrition.sodiumContent,
              },
            }
          : {}),
      }
    : null;

  const faqJsonLd =
    post.faqs && post.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: post.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }
      : null;

  return (
    <div className="bg-[#F8FAFC]">
      <Script id="article-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Script id="breadcrumb-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {recipeJsonLd && (
        <Script id="recipe-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(recipeJsonLd) }} />
      )}
      {faqJsonLd && (
        <Script id="faq-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      )}
      
      <article className="min-h-screen pb-20 pt-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center text-xs text-gray-500 mb-6 font-medium gap-2">
            <Link href="/" className="hover:text-[#B33A3A] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-[#B33A3A] transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-[#B33A3A] font-bold truncate max-w-xs sm:max-w-md">{post.title}</span>
          </nav>

          {/* ── RESEARCH BYLINE & VERIFICATION BAR ───────────────── */}
          <div className="research-meta-bar mb-8 flex justify-between items-center">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-bold text-gray-800">By {post.author}</span>
              <span className="text-gray-400">|</span>
              <span>{post.date}</span>
              <span className="text-gray-400">|</span>
              <span>{post.readTime}</span>
              <span className="text-gray-400">|</span>
              <span className="text-emerald-700 font-semibold flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
                Verified 2026 Content
              </span>
            </div>
            <span className="text-xs text-gray-400 hidden sm:inline">
              {post.category}
            </span>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Main Content Column */}
            <div className="lg:w-[70%]">
              
              {/* Title Header */}
              <div className="mb-6">
                <span className="category-pill text-xs uppercase tracking-wider mb-3">
                  {post.category}
                </span>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mt-2 mb-4 leading-tight tracking-tight">
                  {post.title}
                </h1>
                {post.recipe && (
                  <div className="mt-4 flex flex-wrap gap-3">
                    <a
                      href="#recipe-card"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#B33A3A] text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-sm hover:bg-[#992F2F] transition-all"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                      Jump to Recipe
                    </a>
                  </div>
                )}
                {post.slug === "red-lobster-lunch-menu-with-prices-2026" && (
                  <div className="mt-4 flex flex-wrap gap-3">
                    <a
                      href="#lunch-summary"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#B33A3A] text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-sm hover:bg-[#992F2F] transition-all"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                      Jump to Price Table &amp; Specials
                    </a>
                  </div>
                )}
                {post.slug === "red-lobster-dinner-menu-with-prices-2026" && (
                  <div className="mt-4 flex flex-wrap gap-3">
                    <a
                      href="#dinner-summary"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#B33A3A] text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-sm hover:bg-[#992F2F] transition-all"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                      Jump to Price Table &amp; Feasts
                    </a>
                  </div>
                )}
              </div>

              {/* Main Image */}
              <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden mb-10 shadow-sm border border-[#EAD9D9]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Content Body */}
              <div 
                className="prose prose-lg prose-red max-w-none 
                  prose-headings:font-black prose-headings:text-gray-900 
                  prose-h2:text-2xl sm:prose-h2:text-3xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:border-b prose-h2:border-[#EAD9D9] prose-h2:pb-2
                  prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
                  prose-li:text-gray-700 prose-li:mb-2
                  prose-strong:text-gray-900 prose-strong:font-black
                  prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-6
                  prose-table:w-full prose-table:border-collapse prose-table:mb-8 prose-table:rounded-2xl prose-table:overflow-hidden
                  prose-th:bg-[#B33A3A] prose-th:text-white prose-th:p-3.5 prose-th:text-left
                  prose-td:p-3.5 prose-td:border-b prose-td:border-[#F0E3E3]"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
              
              <div className="mt-14 pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between">
                <Link href="/blog" className="text-[#B33A3A] font-extrabold text-xs uppercase tracking-wider hover:underline mb-4 sm:mb-0 flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Back to all articles
                </Link>
              </div>
            </div>

            {/* Sidebar Column */}
            <div className="lg:w-[30%] space-y-8">
              {/* Recent Posts Widget */}
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-[#EAD9D9]">
                <h3 className="section-pill-banner text-sm uppercase tracking-wider mb-6">Recent Articles</h3>
                <div className="space-y-4">
                  {relatedPosts.map((related) => (
                    <Link key={related.id} href={`/blog/${related.slug}`} className="block group border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                      <h4 className="font-extrabold text-gray-800 text-sm leading-snug group-hover:text-[#B33A3A] transition-colors mb-1">{related.title}</h4>
                      <span className="text-[11px] text-gray-400 font-semibold">{related.date}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Quick Navigation Pages Widget */}
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-[#EAD9D9]">
                <h3 className="section-pill-banner text-sm uppercase tracking-wider mb-4">Quick Guides</h3>
                <ul className="space-y-2.5 text-xs sm:text-sm font-bold text-gray-700">
                  <li><Link href="/dinner-menu" className="hover:text-[#B33A3A] block py-1 border-b border-gray-100">🦞 Dinner Menu &amp; Feasts</Link></li>
                  <li><Link href="/lunch-menu" className="hover:text-[#B33A3A] block py-1 border-b border-gray-100">🍽️ $10 Lunch Specials</Link></li>
                  <li><Link href="/specials" className="hover:text-[#B33A3A] block py-1 border-b border-gray-100">🔥 Weekday Daily Deals</Link></li>
                  <li><Link href="/nutrition-calories" className="hover:text-[#B33A3A] block py-1 border-b border-gray-100">🥗 Nutrition &amp; Calories</Link></li>
                  <li><Link href="/coupons" className="hover:text-[#B33A3A] block py-1">🎟️ Verified Promo Codes</Link></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <MenuInterlink currentPage={`/blog/${post.slug}`} />
          </div>
        </div>
      </article>
    </div>
  );
}
