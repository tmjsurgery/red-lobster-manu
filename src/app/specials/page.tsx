import type { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/ui/HeroSection";
import MenuCard from "@/components/ui/MenuCard";
import PriceTable from "@/components/ui/PriceTable";
import FAQSection from "@/components/ui/FAQSection";
import MenuInterlink from "@/components/layout/MenuInterlink";
import { menuItems } from "@/lib/data";

export const metadata: Metadata = {
  title: "Red Lobster Menu Specials & Daily Deals 2026: Save on Seafood",
  description:
    "Discover the official 2026 Red Lobster menu specials: Monday–Friday daily deals, Endless Shrimp promotions, $10 lunch offers, and Crabfest feasts with verified pricing.",
  alternates: {
    canonical: "/specials",
  },
  openGraph: {
    title: "Red Lobster Menu Specials & Daily Deals 2026",
    description:
      "Explore official 2026 Red Lobster menu specials: daily deals, $10 lunch promotions, Endless Shrimp, and coupon savings.",
    url: "https://redlobstermenu.site/specials",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Red Lobster Menu Specials & Daily Deals 2026",
    description: "Explore official Red Lobster menu specials, daily deals, and discounts for 2026.",
  },
};

const dailyDealsData = [
  { day: "Monday", deal: "Endless Shrimp (Seasonal)", desc: "Mix and match favorites like Garlic Scampi, Walt's Shrimp, and Coconut Shrimp.", price: "$20.99", cal: "600–1,200 Cal" },
  { day: "Tuesday", deal: "Linguini Alfredo Deal", desc: "Choice of creamy Shrimp or Cajun Chicken Linguini Alfredo with unlimited biscuits.", price: "$14.99", cal: "1,260–1,390 Cal" },
  { day: "Wednesday", deal: "Steak & Lobster Special", desc: "A tender 7 oz center-cut sirloin steak paired with a roasted Maine lobster tail.", price: "$24.99", cal: "980 Cal" },
  { day: "Thursday", deal: "Lobster & Shrimp Scampi", desc: "Maine lobster tail paired with a skillet of broiled garlic butter shrimp scampi.", price: "$19.99", cal: "890 Cal" },
  { day: "Friday", deal: "Fish & Chips Friday", desc: "Crispy beer-battered wild cod fillet served with seasoned fries, slaw, and hush puppies.", price: "$15.99", cal: "1,080 Cal" },
];

const specialsFaqs = [
  {
    question: "What are the official weekday daily specials at Red Lobster in 2026?",
    answer: "Red Lobster's weekday promotions include: Monday Endless Shrimp (~$20.99), Tuesday Shrimp or Chicken Linguini Alfredo ($14.99), Wednesday Steak & Lobster ($24.99), Thursday Lobster & Shrimp Scampi ($19.99), and Friday Fish & Chips ($15.99). All include warm Cheddar Bay Biscuits.",
  },
  {
    question: "What is on the Red Lobster $10 specials menu?",
    answer: "The $10 lunch specials include Soup, Salad & Cheddar Bay Biscuits ($8.99), Garlic Shrimp Scampi ($9.99), Popcorn Shrimp ($9.99), Crispy Cod Sandwich ($9.99), and Parrot Isle Coconut Shrimp ($10.99), available Monday through Friday from 11 AM to 3 PM.",
  },
  {
    question: "Does Red Lobster still offer Endless Shrimp in 2026?",
    answer: "Yes, Endless Shrimp is offered as a limited-time seasonal promotion and as part of Monday daily deal specials at participating locations, priced at approximately $20.99 to $24.99.",
  },
  {
    question: "How do I get coupons and extra discounts at Red Lobster?",
    answer: "Join My Red Lobster Rewards to earn 1 point per $1 spent, receive a birthday voucher, and get exclusive monthly promo codes such as 10% to 20% off online orders and discount appetizer rewards.",
  },
  {
    question: "Are daily specials available for takeout or delivery?",
    answer: "Most daily deals are valid for dine-in guests. Many locations also extend these promotions to online pickup orders placed directly through the official Red Lobster website or app.",
  },
];

// Special featured promotional items
const specialFeasts = menuItems.filter((i) =>
  ["crab3", "sf1", "lf1", "hp2", "crab1"].includes(i.id)
);

const specialLunchAndApps = menuItems.filter((i) =>
  ["sc3", "lf5", "crab4", "bs1", "crab8"].includes(i.id)
);

export default function SpecialsPage() {
  return (
    <div className="bg-[#F8FAFC]">
      {/* ── TOP HERO SECTION ─────────────────────────────────── */}
      <HeroSection
        title="Red Lobster Menu Specials & Daily Deals 2026"
        subtitle="Save big with official Red Lobster specials: verified Monday–Friday daily deals, $10 lunch offers, Happy Hour drink specials, and seasonal Crabfest feasts."
        badge="Official 2026 Specials • Verified Weekday Savings"
        ctaText="View Daily Deals"
        ctaLink="#daily-deals"
        secondaryCtaText="Explore $10 Lunch Deals"
        secondaryCtaLink="/lunch-menu#ten-dollar-specials"
        backgroundImage="/new-crabfest-boil.webp"
        stats={[
          { label: "Daily Deals", value: "Mon – Fri", sub: "All day at participating locations" },
          { label: "Tuesday Deal", value: "$14.99", sub: "Shrimp or Chicken Alfredo" },
          { label: "Wednesday Deal", value: "$24.99", sub: "Steak & Maine Lobster" },
          { label: "Cheddar Biscuits", value: "Unlimited", sub: "Included with every meal" },
        ]}
        quickNav={[
          { label: "Daily Deals (Mon–Fri)", href: "#daily-deals" },
          { label: "Signature Specials", href: "#featured-specials" },
          { label: "Lunch & Appetizer Deals", href: "#lunch-deals" },
          { label: "Specials Price Table", href: "#specials-table" },
          { label: "FAQs", href: "#faqs" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-4 text-xs text-gray-500 flex items-center gap-2">
          <Link href="/" className="hover:text-[#B33A3A] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#B33A3A] font-bold">Red Lobster Menu Specials 2026</span>
        </nav>

        {/* ── RESEARCH BYLINE & VERIFICATION BAR ───────────────── */}
        <div className="research-meta-bar mb-6 flex justify-between items-center">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-bold text-gray-800">By Specials &amp; Savings Editor</span>
            <span className="text-gray-400">|</span>
            <span>Weekday Promotions Audit 2026</span>
            <span className="text-gray-400">|</span>
            <span className="text-emerald-700 font-semibold flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
              Prices Verified Against the Official Red Lobster App
            </span>
          </div>
          <span className="text-xs text-gray-400 hidden sm:inline">
            Active 2026 Promotions
          </span>
        </div>

        {/* ── CATEGORY 1: WEEKDAY DAILY DEALS ─────────────────── */}
        <section id="daily-deals" className="mb-20 scroll-mt-20">
          <div className="text-center mb-8 max-w-3xl mx-auto">
            <h2 className="section-pill-banner">
              Official Red Lobster Daily Deals for 2026
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Every weekday features a designated signature dish at a substantial discount from standard dinner prices, including unlimited warm Cheddar Bay Biscuits.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
            {dailyDealsData.map((deal) => (
              <div
                key={deal.day}
                className="lobster-card bg-white rounded-2xl p-5 border border-[#EAD9D9] shadow-sm flex flex-col justify-between text-center group"
              >
                <div>
                  <span className="inline-block text-[11px] font-black uppercase tracking-wider text-white bg-[#B33A3A] px-3 py-1 rounded-full mb-3 shadow-sm">
                    {deal.day}
                  </span>
                  <h3 className="font-extrabold text-gray-900 text-base mb-2 group-hover:text-[#B33A3A] transition-colors leading-snug">
                    {deal.deal}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed mb-4">{deal.desc}</p>
                </div>
                <div className="pt-3 border-t border-gray-100">
                  <span className="text-2xl font-black text-[#B33A3A] block">{deal.price}</span>
                  <span className="text-[11px] text-gray-400 mt-1 block">🔥 {deal.cal}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="callout-box flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl">💡</span>
              <div className="text-sm text-gray-800">
                <strong className="text-[#B33A3A]">Insider Tip:</strong> All daily deals include complimentary unlimited warm Cheddar Bay Biscuits and choice of side!
              </div>
            </div>
            <Link
              href="/coupons"
              className="bg-[#B33A3A] hover:bg-[#992F2F] text-white text-xs font-extrabold uppercase tracking-wider py-2.5 px-5 rounded-full whitespace-nowrap transition-colors shadow-sm"
            >
              Check Coupon Codes &rarr;
            </Link>
          </div>
        </section>

        {/* ── CATEGORY 2: FEATURED SPECIALTY ENTRÉES ───────────── */}
        <section id="featured-specials" className="mb-20 scroll-mt-20">
          <div className="text-center mb-8 max-w-3xl mx-auto">
            <h2 className="section-pill-banner">
              Featured Promotional Seafood Feasts
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Top-selling feasts, seasonal boils, and chef specials currently offered at promotional pricing.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {specialFeasts.map((item) => (
              <MenuCard key={item.id} item={item} servingNote="Promo Price • 2 Sides" />
            ))}
          </div>
        </section>

        {/* ── CATEGORY 3: LUNCH & APPETIZER SPECIALS ───────────── */}
        <section id="lunch-deals" className="mb-20 scroll-mt-20">
          <div className="text-center mb-8 max-w-3xl mx-auto">
            <h2 className="section-pill-banner">
              Lunch Specials &amp; Happy Hour Appetizers
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Explore discounted shareable dips, jumbo coconut shrimp, and lunchtime favorites under $15.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {specialLunchAndApps.map((item) => (
              <MenuCard key={item.id} item={item} servingNote="Value Special" />
            ))}
          </div>
        </section>

        {/* ── SPECIALS PRICE TABLE ───────────────────────────── */}
        <section id="specials-table" className="mb-20 scroll-mt-20">
          <PriceTable
            items={[...specialFeasts, ...specialLunchAndApps]}
            title="Red Lobster Specials 2026 — Comprehensive Price Table"
            subtitle="Side-by-side comparison of promotional entrées, calorie loads, and verified 2026 value pricing."
            isPillHeading
          />
        </section>

        {/* ── FAQ SECTION ─────────────────────────────────────── */}
        <FAQSection
          faqs={specialsFaqs}
          title="Frequently Asked Questions About Red Lobster Specials"
          subtitle="Everything you need to know about weekday daily deals, Endless Shrimp return dates, and coupon stacking."
          schemaId="specials-faq-schema"
        />

        {/* ── INTERNAL LINKS ──────────────────────────────────── */}
        <MenuInterlink currentPage="/specials" />
      </div>
    </div>
  );
}
