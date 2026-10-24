import { categories, menuItems, faqs } from "@/lib/data";
import { blogPosts } from "@/lib/blogData";
import Link from "next/link";
import Image from "next/image";
import FAQSchema from "@/components/seo/FAQSchema";
import PriceTable from "@/components/ui/PriceTable";
import MenuInterlink from "@/components/layout/MenuInterlink";

export const metadata = {
  title: "Red Lobster Menu & Prices Guide 2026 | Full Food & Calorie Guide",
  description:
    "Explore the complete Red Lobster menu prices for 2026. Browse accurate prices, calories, $10 lunch specials, dinner feasts, daily deals, and coupon savings.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Red Lobster Menu & Prices Guide 2026 | Full Food & Calorie Guide",
    description:
      "Complete guide to the Red Lobster menu with 2026 prices, calories, $10 lunch specials, dinner feasts, and daily deals.",
    url: "https://redlobstermenu.site",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Red Lobster Menu & Prices Guide 2026",
    description: "Complete guide to the Red Lobster menu with 2026 prices and calories.",
  },
};

const quickStats = [
  { label: "Menu Items Covered", value: "80+" },
  { label: "Menu Categories", value: "16" },
  { label: "Starting Lunch Price", value: "$8.99" },
  { label: "Biscuits Included", value: "Unlimited" },
];

const whyUsItems = [
  {
    title: "Verified 2026 Pricing",
    desc: "We analyze national averages to provide the most realistic prices and price ranges for every dish from Starters to Desserts.",
  },
  {
    title: "Calorie & Nutrition Tracking",
    desc: "Every single dish features calorie counts and dietary advice to help you dine according to your health and fitness goals.",
  },
  {
    title: "Daily Deals & Specials",
    desc: "Stay updated on the $10 lunch menu, Happy Hour $5 drinks, Endless Shrimp, and daily weekday dinner promotions.",
  },
  {
    title: "Allergen & Diet Insights",
    desc: "Detailed breakdown of shellfish, gluten, dairy, and soy allergens so you and your family can dine safely and with confidence.",
  },
];

// Highlight top 6 popular items
const featuredItems = menuItems.filter((item) =>
  ["sf1", "sc1", "sc3", "sf3", "ss2", "be1"].includes(item.id)
);

export default function Home() {
  return (
    <div>
      {/* FAQ Schema for SEO rich snippets */}
      <FAQSchema id="homepage-faq-schema" faqs={faqs} />

      {/* ── HERO ──────────────────────────────────────── */}
      <section className="relative w-full md:min-h-[420px] flex flex-col justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{ backgroundImage: "url(/hero-section.webp)" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
        </div>

        <div className="relative z-10 px-4 md:px-12 lg:px-24 max-w-7xl w-full mx-auto py-12 md:py-20 mt-2 md:mt-0">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 bg-[#7c1d27]/90 text-white text-[10px] md:text-xs font-bold uppercase tracking-widest px-4 py-1.5 md:px-5 md:py-2 rounded-full mb-6 border border-[#5a131b]/50 shadow-sm backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              Updated for 2026
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-5 leading-tight drop-shadow-lg">
              Red Lobster Menu<br className="hidden md:block" /> &amp; Prices Guide 2026
            </h1>
            <p className="text-base md:text-xl text-gray-100 mb-8 leading-relaxed font-medium drop-shadow-md max-w-xl">
              Your ultimate resource for the complete Red Lobster menu: accurate prices, calorie counts, lunch specials, dinner feasts, and insider savings tips.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/menu"
                className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 bg-[#7c1d27] text-white font-black py-3.5 px-8 rounded-full hover:bg-[#5a131b] hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 shadow-lg border border-[#5a131b]"
              >
                Browse Menu Prices 
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </Link>
              <Link
                href="/specials"
                className="w-full sm:w-auto text-center inline-flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/30 text-white font-bold py-3.5 px-8 rounded-full hover:bg-white/20 hover:shadow-xl transition-all duration-300"
              >
                Today&apos;s Specials
              </Link>
            </div>
          </div>
        </div>

        {/* Stats bar at bottom of hero */}
        <div className="relative z-10 bg-black/60 backdrop-blur-sm border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 py-4 grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickStats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl font-black text-white">{s.value}</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* ── MENU CATEGORIES ───────────────────────────── */}
        <section className="mb-20" aria-labelledby="menu-categories-heading">
          <div className="text-center mb-10">
            <span className="text-[#7c1d27] text-xs font-bold uppercase tracking-widest bg-red-50 px-3 py-1 rounded-full">
              Full Selection
            </span>
            <h2 id="menu-categories-heading" className="text-3xl md:text-4xl font-black text-gray-900 mt-2 mb-3">
              Browse All 16 Red Lobster Menu Categories
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">
              From Crabfest Specials and Signature Feasts to Handcrafted Pastas and Kids Meals — find accurate 2026 prices and calorie counts for every item.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-10">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/menu/${category.slug}`}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg hover:border-[#7c1d27]/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="relative h-40 w-full overflow-hidden bg-gray-100">
                  <Image
                    src={category.image}
                    alt={`Red Lobster ${category.name} Menu Prices 2026`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <h3 className="absolute bottom-3 left-4 right-4 text-white font-black text-base leading-tight drop-shadow">
                    {category.name}
                  </h3>
                </div>
                <div className="p-4 flex flex-col flex-grow justify-between">
                  <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">{category.description}</p>
                  <span className="mt-3 inline-flex items-center text-[#7c1d27] text-xs font-bold group-hover:gap-2 transition-all">
                    View items &amp; prices →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/menu"
              className="inline-block bg-[#7c1d27] text-white font-bold py-3.5 px-10 rounded-full shadow-lg hover:shadow-xl hover:bg-[#5a131b] transition-all"
            >
              View Complete Red Lobster Menu
            </Link>
          </div>
        </section>

        {/* ── POPULAR ITEMS & PRICE TABLE ───────────────── */}
        <section className="mb-20" aria-labelledby="popular-items-heading">
          <div className="text-center mb-10">
            <span className="text-[#7c1d27] text-xs font-bold uppercase tracking-widest bg-red-50 px-3 py-1 rounded-full">
              Customer Favorites
            </span>
            <h2 id="popular-items-heading" className="text-3xl md:text-4xl font-black text-gray-900 mt-2 mb-3">
              Most Popular Red Lobster Menu Items in 2026
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">
              These dishes represent the pinnacle of Red Lobster dining. Here is the verified 2026 pricing and calorie summary.
            </p>
          </div>

          {/* Structured Cards Grid for Featured Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {featuredItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md hover:border-[#7c1d27]/30 transition-all flex flex-col"
              >
                <div className="relative h-44 w-full bg-gray-100">
                  <Image
                    src={item.image}
                    alt={`${item.name} - Red Lobster Menu Prices 2026`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-0.5 rounded-full text-xs font-semibold text-gray-800">
                    🔥 {item.calories}
                  </div>
                  <div className="absolute top-3 right-3 bg-[#7c1d27] text-white text-xs font-black px-2.5 py-0.5 rounded-full">
                    {item.price}
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="font-bold text-gray-900 text-base mb-2">{item.name}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed line-clamp-3 mb-4">{item.description}</p>
                  </div>
                  <div className="pt-3 border-t border-gray-100 flex justify-between items-center text-xs">
                    <span className="text-emerald-700 font-semibold">✓ Fresh &amp; Handcrafted</span>
                    <Link href={`/menu/${item.categorySlug}`} className="text-[#7c1d27] font-bold hover:underline">
                      Category &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Professional Price Table */}
          <PriceTable
            items={featuredItems}
            title="Red Lobster Top Entrées — 2026 Price & Calorie Table"
            subtitle="Quick overview of top-ordered items, calories, and prices for 2026."
          />
        </section>

        {/* ── QUICK GUIDES ───────────────────────────────── */}
        <section className="mb-20" aria-labelledby="guides-heading">
          <div className="text-center mb-10">
            <h2 id="guides-heading" className="text-3xl font-black text-gray-900 mb-3">
              Essential Red Lobster Menu Guides
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm">
              Explore dedicated menus for lunch specials, dinner feasts, kid-friendly dining, and complete nutrition data.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { href: "/lunch-menu", title: "Lunch Menu", desc: "$10 lunch specials & midday deals served Mon–Fri 11 AM–3 PM." },
              { href: "/dinner-menu", title: "Dinner Menu", desc: "Signature Feasts, live lobster, steaks, and pasta favorites." },
              { href: "/kids-menu", title: "Kids Menu", desc: "$7.99–$9.49 meals with sides and drinks for children under 12." },
              { href: "/nutrition-calories", title: "Nutrition & Calories", desc: "Complete calorie breakdown, keto options, and allergen tips." },
            ].map((g) => (
              <Link
                key={g.href}
                href={g.href}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:border-[#7c1d27]/40 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-black text-gray-900 mb-2">{g.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{g.desc}</p>
                </div>
                <span className="mt-4 text-[#7c1d27] font-bold text-sm">Explore Guide →</span>
              </Link>
            ))}
          </div>
        </section>

        {/* ── WHY TRUST US ───────────────────────────────── */}
        <section className="mb-20 bg-[#fdf2f3] rounded-3xl p-8 md:p-12 border border-[#e8b4b8]">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-[#7c1d27] mb-3">
              Why Diners Trust This Red Lobster Menu Guide
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto text-sm">
              We provide independent, transparent pricing insights, nutritional calculations, and verified savings hacks.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUsItems.map((w) => (
              <div key={w.title} className="bg-white rounded-2xl p-6 shadow-sm border border-red-50">
                <h3 className="font-bold text-gray-900 mb-2">{w.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── REWARDS PROGRAM ────────────────────────────── */}
        <section className="mb-20">
          <div className="bg-gray-900 rounded-3xl overflow-hidden flex flex-col lg:flex-row shadow-xl">
            <div className="p-8 md:p-12 lg:w-2/3 flex flex-col justify-center">
              <span className="inline-block bg-[#7c1d27] text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5 w-fit">
                Official Rewards
              </span>
              <h2 className="text-3xl font-black text-white mb-4">My Red Lobster Rewards℠ Guide</h2>
              <p className="text-gray-300 mb-6 leading-relaxed text-sm md:text-base">
                Earn 1 point for every $1 spent at Red Lobster. Redeem 125 points for complimentary appetizers, entrées, and exclusive discounts.
              </p>
              <ul className="space-y-2.5 mb-8">
                {["Earn points on every dine-in, to-go, or delivery order", "Unlock free food rewards at 125 points", "Annual birthday gift & member-only coupons"].map((b) => (
                  <li key={b} className="flex items-center gap-3 text-gray-200 text-sm">
                    <span className="text-green-400 font-bold">✓</span> {b}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.redlobster.com/rewards"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#7c1d27] text-white font-bold py-3 px-8 rounded-full hover:bg-[#5a131b] transition-colors text-sm"
                >
                  Join Official Rewards ↗
                </a>
                <Link
                  href="/coupons"
                  className="inline-block bg-white/10 text-white font-bold py-3 px-6 rounded-full hover:bg-white/20 transition-colors text-sm"
                >
                  View Promo Codes
                </Link>
              </div>
            </div>
            <div className="bg-[#7c1d27]/30 lg:w-1/3 flex items-center justify-center p-10 border-t lg:border-t-0 lg:border-l border-white/10">
              <div className="text-center">
                <div className="text-7xl font-black text-white mb-2">125</div>
                <p className="text-red-300 font-bold uppercase tracking-widest text-sm">Points = Free Reward</p>
                <p className="text-gray-400 text-xs mt-3 max-w-[180px] mx-auto">
                  Earn points on any Red Lobster menu item at participating locations
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── BLOG HIGHLIGHTS ────────────────────────────── */}
        <section className="mb-20" aria-labelledby="blog-heading">
          <div className="flex justify-between items-end border-b border-gray-200 pb-4 mb-10">
            <div>
              <h2 id="blog-heading" className="text-3xl font-black text-gray-900">
                Red Lobster Menu Dining Guides
              </h2>
              <p className="text-gray-500 mt-1 text-sm">Expert reviews, money-saving strategies, and item comparisons.</p>
            </div>
            <Link href="/blog" className="hidden sm:inline-block text-[#7c1d27] font-bold hover:underline text-sm">
              All articles →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.slice(0, 3).map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:border-[#7c1d27]/30 transition-all duration-300"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#7c1d27]">
                    {post.category}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center text-[10px] text-gray-400 mb-3 gap-2 font-medium uppercase tracking-wider">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#7c1d27] transition-colors leading-snug line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 mb-4 flex-grow text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>
                  <span className="text-[#7c1d27] font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read Article →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ── FAQ SECTION (SEO Schema Synced) ────────────── */}
        <section className="mb-16" aria-labelledby="faq-heading">
          <div className="text-center mb-10">
            <span className="text-[#7c1d27] text-xs font-bold uppercase tracking-widest bg-red-50 px-3 py-1 rounded-full">
              Common Questions
            </span>
            <h2 id="faq-heading" className="text-3xl font-black text-gray-900 mt-2 mb-3">
              Red Lobster Menu FAQs: Prices, Calories &amp; Ordering
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm">
              Answers to the most frequently asked questions regarding prices, nutrition, and deals.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-7 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h3 className="font-bold text-gray-900 mb-3 leading-snug text-base">{faq.question}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/faq" className="inline-block border-2 border-[#7c1d27] text-[#7c1d27] font-bold py-3 px-8 rounded-full hover:bg-[#fdf2f3] transition-colors text-sm">
              View All Red Lobster FAQs
            </Link>
          </div>
        </section>

        {/* ── INTERLINK ALL MENU SECTIONS ─────────────────── */}
        <MenuInterlink currentPage="/" />

      </div>
    </div>
  );
}
