import { faqs } from "@/lib/data";
import HeroSection from "@/components/ui/HeroSection";
import FAQSection from "@/components/ui/FAQSection";
import MenuInterlink from "@/components/layout/MenuInterlink";
import Link from "next/link";

export const metadata = {
  title: "Red Lobster Menu FAQs: Prices, Calories & Ordering 2026",
  description:
    "Common questions about the Red Lobster menu answered: 2026 prices, calorie counts, Cheddar Bay Biscuits, lunch specials, and takeout options.",
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: "Red Lobster Menu FAQs: Prices, Calories & Ordering 2026",
    description: "Common questions about the Red Lobster menu answered: 2026 prices and calories.",
    url: "https://redlobstermenu.site/faq",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Red Lobster Menu FAQs: Prices, Calories & Ordering 2026",
    description: "Common questions about the Red Lobster menu answered: 2026 prices and calories.",
  }
};

export default function FAQPage() {
  return (
    <div className="bg-[#F8FAFC]">
      <HeroSection 
        title="Frequently Asked Questions (2026)" 
        subtitle="Got questions about Red Lobster dining? Find clear, verified answers on menu prices, operating hours, Cheddar Bay Biscuits, and rewards."
        badge="Help &amp; Answers • 2026 Knowledgebase"
        ctaText="View Menu Prices"
        ctaLink="/menu"
        secondaryCtaText="Dinner Guide"
        secondaryCtaLink="/dinner-menu"
        backgroundImage="/hero-section.webp"
        stats={[
          { label: "Questions Answered", value: "20+ FAQs", sub: "Prices & Hours" },
          { label: "Cheddar Biscuits", value: "Unlimited", sub: "Dine-in policy" },
          { label: "Lunch Hours", value: "11 AM – 3 PM", sub: "Mon – Fri" },
          { label: "Dinner Hours", value: "3 PM – Close", sub: "All day weekends" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-4 text-xs text-gray-500 flex items-center gap-2">
          <Link href="/" className="hover:text-[#B33A3A] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#B33A3A] font-bold">Frequently Asked Questions</span>
        </nav>

        {/* ── RESEARCH BYLINE & VERIFICATION BAR ───────────────── */}
        <div className="research-meta-bar mb-6 flex justify-between items-center">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-bold text-gray-800">By Customer Support &amp; Dining Editors</span>
            <span className="text-gray-400">|</span>
            <span>2026 Policy &amp; Menu Verification</span>
            <span className="text-gray-400">|</span>
            <span className="text-emerald-700 font-semibold flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
              Verified Against the Official Red Lobster App
            </span>
          </div>
          <span className="text-xs text-gray-400 hidden sm:inline">
            Help Center
          </span>
        </div>

        <FAQSection
          faqs={faqs}
          title="Top Questions Asked by Red Lobster Guests"
          subtitle="Everything you need to know about pricing, portions, biscuits, and ordering policies."
          schemaId="main-faq-page-schema"
        />

        <MenuInterlink currentPage="/faq" />
      </div>
    </div>
  );
}
