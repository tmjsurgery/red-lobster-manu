import Link from "next/link";
import HeroSection from "@/components/ui/HeroSection";
import MenuInterlink from "@/components/layout/MenuInterlink";

export const metadata = {
  title: "About Red Lobster Menu Guide — Your Seafood Resource 2026",
  description:
    "Learn about RedLobsterMenu.site — an independent guide to the complete Red Lobster menu, estimated prices, happy hour deals, coupons, and nutrition info for 2026.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Red Lobster Menu Guide",
    description: "Learn about RedLobsterMenu.site — an independent fan guide for Red Lobster's menu, prices, and deals.",
    url: "https://redlobstermenu.site/about",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Red Lobster Menu Guide",
    description: "Learn about RedLobsterMenu.site — an independent fan guide.",
  }
};

const stats = [
  { label: "Menu Items Covered", value: "80+" },
  { label: "Categories Listed", value: "16" },
  { label: "Price Audits Completed", value: "Weekly" },
  { label: "Diners Guided", value: "50,000+" },
];

const teamValues = [
  {
    title: "Accuracy First",
    icon: "✓",
    desc: "We cross-reference multiple public sources and local restaurant menus to give you the most accurate estimated prices and menu details available.",
  },
  {
    title: "Always Updated for 2026",
    icon: "↻",
    desc: "Red Lobster's menu changes with the seasons. We monitor updates regularly and refresh our content to reflect new items, limited-time offers, and price changes.",
  },
  {
    title: "Seafood Enthusiasts",
    icon: "🦞",
    desc: "Our team consists of genuine seafood enthusiasts. We eat at Red Lobster ourselves, which gives us first-hand insight into what's really worth ordering.",
  },
  {
    title: "Transparent & Independent",
    icon: "◎",
    desc: "We cut straight to what matters — the food, the prices, and the deals. No biased reviews, no hidden fees, just the verified consumer facts you need.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-[#F8FAFC]">
      <HeroSection 
        title="About Red Lobster Menu Guide" 
        subtitle="Your clean, independent consumer guide helping seafood lovers explore Red Lobster's complete menu, verified prices, specials, and nutrition for 2026."
        badge="Independent Consumer Resource • 2026 Edition"
        ctaText="View Our Menu"
        ctaLink="/menu"
        secondaryCtaText="Dinner Menu"
        secondaryCtaLink="/dinner-menu"
        backgroundImage="/hero-section.webp"
        stats={[
          { label: "Categories", value: "16 Total", sub: "Complete Coverage" },
          { label: "Price Updates", value: "Weekly", sub: "Verified with App" },
          { label: "Independence", value: "100%", sub: "Unbiased Reviews" },
          { label: "Biscuits", value: "Unlimited", sub: "Dine-in Perk" },
        ]}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-4 text-xs text-gray-500 flex items-center gap-2">
          <Link href="/" className="hover:text-[#B33A3A] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#B33A3A] font-bold">About Our Guide</span>
        </nav>

        {/* ── RESEARCH BYLINE & VERIFICATION BAR ───────────────── */}
        <div className="research-meta-bar mb-8 flex justify-between items-center">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-bold text-gray-800">By Red Lobster Menu Editorial Board</span>
            <span className="text-gray-400">|</span>
            <span>Consumer Advocacy &amp; Price Transparency</span>
            <span className="text-gray-400">|</span>
            <span className="text-emerald-700 font-semibold flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
              Independent Research Portal
            </span>
          </div>
          <span className="text-xs text-gray-400 hidden sm:inline">
            About Us
          </span>
        </div>

        {/* Intro */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-[#EAD9D9] mb-12">
          <h2 className="section-pill-banner text-lg sm:text-2xl mb-6">
            Who We Are &amp; Our Mission
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-gray-800 mb-5">
            Welcome to <strong>RedLobsterMenu.site</strong> — your go-to, independent guide for everything related to the Red Lobster dining experience. We are a team of seafood enthusiasts and food researchers dedicated to making your next visit to Red Lobster as enjoyable and budget-friendly as possible.
          </p>
          <p className="text-gray-600 leading-relaxed mb-5 text-sm sm:text-base">
            Whether you are planning a family dinner, a casual lunch, or looking for the best Happy Hour deals, our site brings together all the information you need in one convenient place. From the full Red Lobster menu with estimated prices to exclusive coupon codes, allergen information, and insider ordering tips — we cover it all.
          </p>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
            Our goal is simple: help you walk into (or order from) any Red Lobster location with confidence, knowing exactly what to expect from the menu, what the estimated cost will be, and how to get the most value for your money.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-[#B33A3A] text-white rounded-2xl p-6 text-center shadow-sm"
            >
              <div className="text-3xl font-black mb-1">{stat.value}</div>
              <div className="text-xs text-red-100 font-bold uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Values */}
        <section className="mb-12">
          <div className="text-center mb-8 max-w-3xl mx-auto">
            <h2 className="section-pill-banner text-lg sm:text-2xl">
              Our Core Research Values
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {teamValues.map((v) => (
              <div key={v.title} className="lobster-card bg-white rounded-2xl p-6 shadow-sm border border-[#EAD9D9]">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl text-[#B33A3A] font-black">{v.icon}</span>
                  <h3 className="font-extrabold text-gray-900 text-lg">{v.title}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Independence Notice */}
        <div className="callout-box mb-12">
          <h3 className="font-black text-gray-900 text-base mb-2">⚠ Important — Independent Consumer Portal</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            <strong>RedLobsterMenu.site is an independent information website.</strong> We are not affiliated with, owned by, operated by, or endorsed by Red Lobster Hospitality LLC or RL Investor Holdings LLC. All prices listed are <em>estimates only</em> and may vary by location, time of year, and promotions. For official menus, exact pricing, online ordering, or customer service inquiries, please visit{" "}
            <a href="https://www.redlobster.com" target="_blank" rel="noopener noreferrer" className="underline font-bold text-[#B33A3A]">
              redlobster.com
            </a>.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center mb-12">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/menu"
              className="bg-[#B33A3A] hover:bg-[#992F2F] text-white font-extrabold text-xs uppercase tracking-wider py-3.5 px-8 rounded-full transition-colors shadow-md"
            >
              Browse Full Menu &rarr;
            </Link>
            <Link
              href="/dinner-menu"
              className="border-2 border-[#B33A3A] text-[#B33A3A] font-extrabold text-xs uppercase tracking-wider py-3.5 px-8 rounded-full hover:bg-red-50 transition-colors"
            >
              Dinner Feasts
            </Link>
          </div>
        </div>

        <MenuInterlink currentPage="/about" />
      </div>
    </div>
  );
}
