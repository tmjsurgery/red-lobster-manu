import SectionHeader from "@/components/ui/SectionHeader";
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
  { label: "Menu Items Covered", value: "150+" },
  { label: "Categories Listed", value: "16" },
  { label: "Blog Guides Published", value: "3" },
  { label: "Visitors Helped", value: "10,000+" },
];

const teamValues = [
  {
    title: "Accuracy First",
    icon: "✓",
    desc: "We cross-reference multiple public sources to give you the most accurate estimated prices and menu details available.",
  },
  {
    title: "Always Updated",
    icon: "↻",
    desc: "Red Lobster's menu changes with the seasons. We monitor updates regularly and refresh our content to reflect new items, limited-time offers, and price changes.",
  },
  {
    title: "Fan-Driven",
    icon: "♥",
    desc: "Our team consists of genuine seafood enthusiasts. We eat at Red Lobster ourselves, which gives us first-hand insight into what's really worth ordering.",
  },
  {
    title: "No Fluff",
    icon: "◎",
    desc: "We cut straight to what matters — the food, the prices, and the deals. No lengthy filler, no pop-ups, just the information you need.",
  },
];

export default function AboutPage() {
  return (
    <div>
      <HeroSection 
        title="About Red Lobster Menu Guide" 
        subtitle="Your independent fan guide helping seafood lovers explore Red Lobster's full menu, estimated prices, happy hour deals, coupons, and nutrition info for 2026."
        ctaText="View Our Menu"
        ctaLink="/menu"
        backgroundImage="/hero-section.webp"
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

      {/* Intro */}
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Who We Are
        </h2>
        <p className="text-lg leading-relaxed text-gray-700 mb-5">
          Welcome to <strong>RedLobsterMenu.site</strong> — your go-to, independent guide for everything related to the Red Lobster dining experience. We are a team of seafood enthusiasts and food researchers dedicated to making your next visit to Red Lobster as enjoyable and budget-friendly as possible.
        </p>
        <p className="text-gray-600 leading-relaxed mb-5">
          Whether you are planning a family dinner, a casual lunch, or looking for the best Happy Hour deals, our site brings together all the information you need in one convenient place. From the full Red Lobster menu with estimated prices to exclusive coupon codes, allergen information, and insider ordering tips — we cover it all.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Our goal is simple: help you walk into (or order from) any Red Lobster location with confidence, knowing exactly what to expect from the menu, what the estimated cost will be, and how to get the most value for your money.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-[#7c1d27] text-white rounded-2xl p-6 text-center shadow-sm"
          >
            <div className="text-3xl font-black mb-1">{stat.value}</div>
            <div className="text-sm text-red-200 font-medium">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* What We Cover */}
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          What You Will Find on This Site
        </h2>
        <ul className="space-y-4 text-gray-700">
          <li className="flex gap-3">
            <span className="text-[#7c1d27] font-bold text-lg">→</span>
            <span><strong>Full Menu with Estimated Prices:</strong> Browse all 16 categories of the Red Lobster menu, from Starters and Seafood Boils to Pastas, Desserts, and Kids meals — each with estimated price ranges updated for 2026.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#7c1d27] font-bold text-lg">→</span>
            <span><strong>Lunch Menu Specials:</strong> A dedicated page covering Red Lobster&apos;s lunch-only deals, including the popular $10 and $15 weekday specials available from 11 AM to 3 PM.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#7c1d27] font-bold text-lg">→</span>
            <span><strong>Happy Hour Guide:</strong> We break down exactly when Red Lobster Happy Hour runs, which drinks are discounted, and how to make the most of the $5 cocktail deals.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#7c1d27] font-bold text-lg">→</span>
            <span><strong>Coupons &amp; Promo Codes:</strong> We regularly update our coupons page with working promo codes, seasonal deals, and tips for using the My Red Lobster Rewards program effectively.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#7c1d27] font-bold text-lg">→</span>
            <span><strong>Allergen &amp; Nutrition Guide:</strong> Detailed allergen breakdowns for shellfish, gluten, dairy, soy, and more — essential reading for anyone with dietary restrictions or food allergies.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#7c1d27] font-bold text-lg">→</span>
            <span><strong>Blog &amp; Ordering Guides:</strong> In-depth articles like &ldquo;The Ultimate Guide to the 2026 Menu&rdquo; and &ldquo;How to Save Big at Red Lobster&rdquo; to help you make smarter dining decisions.</span>
          </li>
        </ul>
      </div>

      {/* Values */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {teamValues.map((v) => (
            <div key={v.title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl text-[#7c1d27] font-black">{v.icon}</span>
                <h3 className="font-bold text-gray-900 text-lg">{v.title}</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Independence Notice */}
      <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-10">
        <h3 className="font-bold text-red-900 text-lg mb-3">⚠ Important — We Are an Independent Fan Site</h3>
        <p className="text-red-800 leading-relaxed">
          <strong>RedLobsterMenu.site is an independent information website.</strong> We are not affiliated with, owned by, operated by, or endorsed by Red Lobster Hospitality LLC or RL Investor Holdings LLC. All prices listed are <em>estimates only</em> and may vary by location, time of year, and promotions. For official menus, exact pricing, online ordering, or customer service inquiries, please visit{" "}
          <a href="https://www.redlobster.com" target="_blank" rel="noopener noreferrer" className="underline font-semibold">
            redlobster.com
          </a>.
        </p>
      </div>

      {/* CTA */}
      <div className="text-center">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Ready to Explore?</h3>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/menu"
            className="bg-[#7c1d27] text-white font-bold py-3 px-8 rounded-full hover:bg-[#5a131b] transition-colors"
          >
            Browse Full Menu
          </Link>
          <Link
            href="/coupons"
            className="border-2 border-[#7c1d27] text-[#7c1d27] font-bold py-3 px-8 rounded-full hover:bg-red-50 transition-colors"
          >
            View Coupons
          </Link>
        </div>
      </div>

      <MenuInterlink currentPage="/about" />
    </div>
    </div>
  );
}
