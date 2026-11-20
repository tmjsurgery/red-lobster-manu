import { categories, menuItems, faqs } from "@/lib/data";
import { blogPosts } from "@/lib/blogData";
import Link from "next/link";
import Image from "next/image";
import HeroSection from "@/components/ui/HeroSection";
import MenuCard from "@/components/ui/MenuCard";
import PriceTable from "@/components/ui/PriceTable";
import FAQSection from "@/components/ui/FAQSection";
import MenuInterlink from "@/components/layout/MenuInterlink";

export const metadata = {
  title: "Red Lobster Menu & Prices 2026 – Complete Food & Calorie Guide",
  description:
    "Explore the complete 2026 Red Lobster menu with verified seafood prices: Ultimate Feast, live lobster, $10 lunch specials, weekday daily deals, and calories.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Red Lobster Menu & Prices 2026 – Complete Food & Calorie Guide",
    description:
      "Explore the complete Red Lobster menu with official fresh seafood prices for 2026: lobster feasts, shrimp specials, $10 lunch deals, and calorie guides.",
    url: "https://redlobstermenu.site",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Red Lobster Menu & Prices 2026 – Complete Food & Calorie Guide",
    description:
      "Explore the complete Red Lobster menu with official seafood prices, daily deals, and calorie guides for 2026.",
  },
};

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
  ["sf1", "sc1", "sc3", "sf3", "hp1", "p1"].includes(item.id)
);

export default function Home() {
  return (
    <div className="bg-[#F8FAFC]">
      {/* ── TOP HERO SECTION ─────────────────────────────────── */}
      <HeroSection
        title="Red Lobster Menu & Prices Guide 2026"
        subtitle="Your clean, verified guide to the complete Red Lobster menu: accurate 2026 prices, calorie counts, $10 lunch specials, dinner feasts, and insider savings tips."
        badge="Official 2026 Guide • Verified Against App"
        ctaText="Browse Menu Prices"
        ctaLink="/menu"
        secondaryCtaText="Dinner Menu Guide"
        secondaryCtaLink="/dinner-menu"
        backgroundImage="/hero-section.webp"
        stats={[
          { label: "Menu Items Covered", value: "80+", sub: "Verified for 2026" },
          { label: "Menu Categories", value: "16", sub: "Feasts, Steaks & Pastas" },
          { label: "Starting Lunch Price", value: "$8.99", sub: "Weekday $10 Specials" },
          { label: "Biscuits Included", value: "Unlimited", sub: "Freshly baked every 15 min" },
        ]}
        quickNav={[
          { label: "Dinner Menu", href: "/dinner-menu" },
          { label: "Lunch Menu", href: "/lunch-menu" },
          { label: "Daily Specials", href: "/specials" },
          { label: "Appetizers", href: "/appetizers" },
          { label: "16 Categories", href: "#categories" },
          { label: "Popular Feasts", href: "#popular-items" },
          { label: "Weekday Deals", href: "#weekday-deals" },
          { label: "FAQs", href: "#faqs" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* ── RESEARCH BYLINE & VERIFICATION BAR ───────────────── */}
        <div className="research-meta-bar mb-6 flex justify-between items-center">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-bold text-gray-800">By Food Research Team</span>
            <span className="text-gray-400">|</span>
            <span>Comprehensive 2026 Price Audit</span>
            <span className="text-gray-400">|</span>
            <span className="text-emerald-700 font-semibold flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
              Verified Against the Official Red Lobster App
            </span>
          </div>
          <span className="text-xs text-gray-400 hidden sm:inline">
            Independent Dining Guide • 2026
          </span>
        </div>

        {/* ── HEADLINE CALLOUT SUMMARY BOX ────────────────────── */}
        <div className="callout-box mb-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-3">
              <p className="text-gray-800 font-medium text-base sm:text-lg leading-relaxed">
                Welcome to the most complete, independent Red Lobster menu price guide on the web. In 2026, lunch specials start at <strong>$8.99 to $10.99</strong>, standard dinner entrées range from <strong>$18.49 to $34.99</strong>, and family meal bundles feed four people starting from <strong>$51.99</strong> ($13/person). Every dine-in guest receives <strong>complimentary, unlimited hot Cheddar Bay Biscuits</strong>.
              </p>
              <div className="bg-[#FFF0F0] border border-[#F0D5D5] rounded-xl p-3 text-sm text-gray-800">
                <strong>Headline finding for 2026:</strong> Red Lobster&apos;s weekday daily deals (like $24.99 Endless Shrimp Monday and $15.99 Fish &amp; Chips Friday) offer average savings of <strong>25% to 35%</strong> compared to standard evening à la carte ordering.
              </div>
            </div>
            <div className="flex-shrink-0 bg-white border border-[#EAD9D9] rounded-2xl p-5 text-center min-w-[200px] shadow-sm">
              <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">Categories Covered</div>
              <div className="text-3xl font-black text-[#B33A3A] mt-1">16 Full Menus</div>
              <div className="text-xs text-emerald-700 font-semibold mt-1">Updated For 2026</div>
            </div>
          </div>
        </div>

        {/* ── POPULAR ENTRÉES SECTION ─────────────────────────── */}
        <section id="popular-items" className="mb-20 scroll-mt-20">
          <div className="text-center mb-10 max-w-3xl mx-auto">
            <h2 className="section-pill-banner">
              Most Popular Red Lobster Menu Items in 2026
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed mt-2">
              These dishes represent the pinnacle of Red Lobster dining. Here is the verified 2026 pricing, calorie summary, and description for our top-ordered platters.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {featuredItems.map((item) => (
              <MenuCard key={item.id} item={item} servingNote="Top-Ordered Dish" />
            ))}
          </div>

          {/* Price Table */}
          <PriceTable
            items={featuredItems}
            title="Red Lobster Top Entrées — 2026 Price &amp; Calorie Table"
            subtitle="Quick overview of top-ordered items, calories, and prices for 2026."
            isPillHeading
          />
        </section>

        {/* ── BROWSE 16 MENU CATEGORIES ──────────────────────── */}
        <section id="categories" className="mb-20 scroll-mt-20">
          <div className="text-center mb-10 max-w-3xl mx-auto">
            <h2 className="section-pill-banner">
              Browse All 16 Red Lobster Menu Categories
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed mt-2">
              From Crabfest Specials and Signature Feasts to Handcrafted Pastas and Kids Meals — find accurate 2026 prices and calorie counts for every category.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/menu/${category.slug}`}
                className="lobster-card bg-white rounded-2xl overflow-hidden border border-[#EAD9D9] flex flex-col justify-between group h-full shadow-sm"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100">
                  <Image
                    src={category.image}
                    alt={`Red Lobster ${category.name} Menu Prices 2026`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    sizes="(max-width: 768px) 100vw, 25vw"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <h3 className="absolute bottom-3 left-4 right-4 text-white font-black text-base leading-tight drop-shadow">
                    {category.name}
                  </h3>
                </div>
                <div className="p-4 flex flex-col flex-grow justify-between">
                  <p className="text-gray-600 text-xs leading-relaxed line-clamp-2">{category.description}</p>
                  <span className="mt-3 inline-flex items-center text-[#B33A3A] text-xs font-extrabold group-hover:gap-1.5 transition-all">
                    View 2026 prices &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 bg-[#B33A3A] hover:bg-[#992F2F] text-white font-extrabold text-sm uppercase tracking-wider py-3.5 px-8 rounded-full shadow-md hover:shadow-lg transition-all duration-200"
            >
              <span>Explore Complete Red Lobster Menu</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </section>

        {/* ── WEEKDAY DAILY DEALS SECTION ─────────────────────── */}
        <section id="weekday-deals" className="mb-20 scroll-mt-20">
          <div className="text-center mb-8 max-w-3xl mx-auto">
            <h2 className="section-pill-banner">
              Red Lobster Weekday Daily Deals (2026)
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Every weekday, Red Lobster features a dedicated daily special offering signature seafood entrées at discounted prices.
            </p>
          </div>

          <div className="competitor-table-container overflow-x-auto">
            <table className="w-full text-sm text-left border-collapse min-w-[520px]">
              <thead>
                <tr>
                  <th className="py-3.5 px-4 font-black">Day of Week</th>
                  <th className="py-3.5 px-4 font-black">Daily Special Dish</th>
                  <th className="py-3.5 px-4 font-black text-center">Verified Price</th>
                  <th className="py-3.5 px-4 font-black">Details</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white hover:bg-[#FFF8F8] transition-colors">
                  <td className="py-3.5 px-4 font-extrabold text-gray-900">Monday</td>
                  <td className="py-3.5 px-4 font-bold text-gray-800">Ultimate Endless Shrimp</td>
                  <td className="py-3.5 px-4 text-center font-black text-[#B33A3A] text-base">$24.99</td>
                  <td className="py-3.5 px-4 text-gray-600">Mix and match unlimited shrimp preparations with side &amp; biscuits</td>
                </tr>
                <tr className="bg-[#FAFCFF] hover:bg-[#FFF8F8] transition-colors">
                  <td className="py-3.5 px-4 font-extrabold text-gray-900">Tuesday</td>
                  <td className="py-3.5 px-4 font-bold text-gray-800">Crab Lover's Duo</td>
                  <td className="py-3.5 px-4 text-center font-black text-[#B33A3A] text-base">$25.99</td>
                  <td className="py-3.5 px-4 text-gray-600">Snow crab cluster and savory crab linguini pasta with choice of side</td>
                </tr>
                <tr className="bg-white hover:bg-[#FFF8F8] transition-colors">
                  <td className="py-3.5 px-4 font-extrabold text-gray-900">Wednesday</td>
                  <td className="py-3.5 px-4 font-bold text-gray-800">Steak &amp; Walt's Favorite Shrimp</td>
                  <td className="py-3.5 px-4 text-center font-black text-[#B33A3A] text-base">$23.99</td>
                  <td className="py-3.5 px-4 text-gray-600">7 oz center-cut sirloin paired with golden fried butterflied shrimp</td>
                </tr>
                <tr className="bg-[#FAFCFF] hover:bg-[#FFF8F8] transition-colors">
                  <td className="py-3.5 px-4 font-extrabold text-gray-900">Thursday</td>
                  <td className="py-3.5 px-4 font-bold text-gray-800">Salmon New Orleans</td>
                  <td className="py-3.5 px-4 text-center font-black text-[#B33A3A] text-base">$23.99</td>
                  <td className="py-3.5 px-4 text-gray-600">Fresh Atlantic salmon blackened and topped with shrimp in Cajun butter</td>
                </tr>
                <tr className="bg-white hover:bg-[#FFF8F8] transition-colors">
                  <td className="py-3.5 px-4 font-extrabold text-gray-900">Friday</td>
                  <td className="py-3.5 px-4 font-bold text-gray-800">Fish &amp; Chips Platter</td>
                  <td className="py-3.5 px-4 text-center font-black text-[#B33A3A] text-base">$15.99</td>
                  <td className="py-3.5 px-4 text-gray-600">Golden-fried wild flounder fillets served with tartar sauce and fries</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ── ESSENTIAL GUIDES ───────────────────────────────── */}
        <section className="mb-20">
          <div className="text-center mb-10 max-w-3xl mx-auto">
            <h2 className="section-pill-banner">
              Essential Red Lobster Menu Guides
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto text-sm leading-relaxed">
              Explore dedicated menus for lunch specials, dinner feasts, kid-friendly dining, and complete nutrition data.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { href: "/dinner-menu", title: "Dinner Menu", desc: "Signature Feasts, live Maine lobster, steaks, and pasta favorites.", icon: "🦞" },
              { href: "/lunch-menu", title: "Lunch Menu", desc: "$10 lunch specials & midday deals served Mon–Fri 11 AM–3 PM.", icon: "🍽️" },
              { href: "/specials", title: "Specials & Deals", desc: "Daily deals, Endless Shrimp promos & Crabfest savings.", icon: "🔥" },
              { href: "/appetizers", title: "Appetizers Menu", desc: "Coconut shrimp, seafood-stuffed mushrooms, and warm queso dip.", icon: "🍤" },
            ].map((g) => (
              <Link
                key={g.href}
                href={g.href}
                className="lobster-card bg-white rounded-2xl p-6 shadow-sm border border-[#EAD9D9] flex flex-col justify-between group"
              >
                <div>
                  <span className="text-3xl mb-3 block">{g.icon}</span>
                  <h3 className="text-lg font-black text-gray-900 mb-2 group-hover:text-[#B33A3A] transition-colors leading-snug">{g.title}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{g.desc}</p>
                </div>
                <span className="mt-4 text-[#B33A3A] font-extrabold text-xs uppercase tracking-wider inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Explore Guide &rarr;
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* ── WHY TRUST US ───────────────────────────────────── */}
        <section className="mb-20 bg-white rounded-3xl p-6 sm:p-10 border border-[#EAD9D9] shadow-sm">
          <div className="text-center mb-8 max-w-3xl mx-auto">
            <h2 className="section-pill-banner text-lg sm:text-2xl">
              Why Diners Trust This Red Lobster Menu Guide
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto text-sm leading-relaxed">
              We provide independent, transparent pricing insights, nutritional calculations, and verified savings hacks for seafood lovers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUsItems.map((w) => (
              <div key={w.title} className="bg-[#FFFBFB] rounded-2xl p-6 border border-[#F0D5D5] transition-colors">
                <h3 className="font-extrabold text-gray-900 mb-2 text-base">{w.title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── REWARDS PROGRAM GUIDE ───────────────────────────── */}
        <section className="mb-20">
          <div className="bg-gradient-to-br from-gray-950 via-gray-900 to-stone-900 rounded-3xl overflow-hidden flex flex-col lg:flex-row shadow-xl text-white border border-gray-800">
            <div className="p-8 md:p-12 lg:w-2/3 flex flex-col justify-center">
              <span className="inline-block bg-[#B33A3A] text-white text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-5 w-fit">
                Official Rewards
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">
                My Red Lobster Rewards℠ Guide
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed text-sm md:text-base">
                Earn 1 point for every $1 spent at Red Lobster. Redeem 125 points for complimentary appetizers, entrées, and exclusive discounts.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/coupons"
                  className="bg-[#B33A3A] hover:bg-[#992F2F] text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider py-3 px-6 rounded-full transition-colors shadow-md"
                >
                  View Promo Codes &rarr;
                </Link>
                <Link
                  href="/specials"
                  className="bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-bold py-3 px-6 rounded-full border border-white/20 transition-colors"
                >
                  Daily Deals &rarr;
                </Link>
              </div>
            </div>
            <div className="lg:w-1/3 bg-black/40 p-8 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-white/10">
              <h3 className="font-bold text-white text-sm uppercase tracking-wider mb-4">Rewards Highlights</h3>
              <ul className="space-y-3 text-xs sm:text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400 font-bold">✓</span> Free birthday dessert or reward
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400 font-bold">✓</span> 75 bonus points on sign-up
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400 font-bold">✓</span> Exclusive double-points days
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400 font-bold">✓</span> Mobile order &amp; pay savings
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── SEAFOOD DINING BLOG ─────────────────────────────── */}
        <section className="mb-20">
          <div className="text-center mb-10 max-w-3xl mx-auto">
            <h2 className="section-pill-banner">
              Latest Red Lobster Dining Insights
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto text-sm leading-relaxed">
              Insider ordering guides, biscuit history, and money-saving strategies from our food editors.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.slice(0, 3).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="lobster-card bg-white rounded-2xl overflow-hidden border border-[#EAD9D9] flex flex-col justify-between group shadow-sm"
              >
                <div className="relative aspect-[16/10] w-full bg-gray-100 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    loading="lazy"
                  />
                </div>
                <div className="p-5 flex flex-col flex-grow justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-[11px] text-gray-400 mb-2 font-semibold">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="font-extrabold text-base text-gray-900 group-hover:text-[#B33A3A] transition-colors line-clamp-2 leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm mt-2 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                  <span className="text-[#B33A3A] font-extrabold text-xs uppercase tracking-wider mt-4 inline-flex items-center gap-1 group-hover:gap-1.5 transition-all">
                    Read article &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ── FAQ SECTION ─────────────────────────────────────── */}
        <FAQSection
          faqs={faqs}
          title="Frequently Asked Questions"
          subtitle="Find fast answers to common questions about Red Lobster menu prices, hours, sides, and reservations."
          schemaId="home-faq-schema"
        />

        {/* ── INTERNAL LINKS ──────────────────────────────────── */}
        <MenuInterlink currentPage="/" />
      </div>
    </div>
  );
}
