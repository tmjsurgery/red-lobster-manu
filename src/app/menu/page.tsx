import MenuFilterableList from "./MenuFilterableList";
import { Suspense } from "react";
import HeroSection from "@/components/ui/HeroSection";
import FAQSection from "@/components/ui/FAQSection";
import MenuInterlink from "@/components/layout/MenuInterlink";
import PriceTable from "@/components/ui/PriceTable";
import { menuItems } from "@/lib/data";
import Link from "next/link";

export const metadata = {
  title: "Red Lobster Menu Prices 2026 – Full Food & Calorie List",
  description:
    "Browse the complete 2026 Red Lobster menu prices with calories and descriptions. View prices for Ultimate Feast, lobster, crab, shrimp, pastas, and sides.",
  alternates: {
    canonical: "/menu",
  },
  openGraph: {
    title: "Red Lobster Menu Prices 2026 – Full Food & Calorie List",
    description:
      "Complete 2026 Red Lobster menu price list with calorie counts, seafood platters, lobster, and cheddar biscuits.",
    url: "https://redlobstermenu.site/menu",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Red Lobster Menu Prices 2026 – Full Food & Calorie List",
    description: "Complete 2026 Red Lobster menu price list with calorie counts and items.",
  },
};

const menuFaqs = [
  {
    question: "How much does a meal at Red Lobster cost in 2026?",
    answer: "On average, a lunch entrée at Red Lobster costs between $8.99 and $14.99, while dinner entrées range from $18.49 to $36.99. Premium options like Steamed Live Maine Lobster and Crabfest King Crab range from $39.99 to $49.99+.",
  },
  {
    question: "What is the most popular dish on the Red Lobster menu?",
    answer: "The Ultimate Feast ($49.79, 1,280 Cal) is Red Lobster's top-selling signature dish. Walt's Favorite Shrimp ($19.49, 520 Cal) and Garlic Shrimp Scampi ($18.49, 440 Cal) are also perennial favorites.",
  },
  {
    question: "Do Red Lobster menu prices include Cheddar Bay Biscuits?",
    answer: "Yes! Every dine-in entrée comes with complimentary, unlimited warm Cheddar Bay Biscuits. To-go orders generally include 2 to 4 biscuits per entrée ordered.",
  },
  {
    question: "Are calorie counts listed on the Red Lobster menu?",
    answer: "Yes, calories are provided for all entrées and sides. They range from 80 calories for Steamed Broccoli to 1,320 calories for rich pasta dishes like Shrimp Linguini Alfredo.",
  },
];

// Highlight selected flagship items across categories for a quick price table
const flagshipItems = menuItems.filter((i) =>
  ["sf1", "crab1", "boil1", "sc1", "ls1", "p1", "lf1", "ss1", "be1", "d1", "k2"].includes(i.id)
);

export default function AllMenuPage() {
  return (
    <div className="bg-[#F8FAFC]">
      {/* ── TOP HERO SECTION ─────────────────────────────────── */}
      <HeroSection 
        title="Red Lobster Menu Prices 2026" 
        subtitle="Explore our comprehensive 2026 price and calorie guide for all 16 Red Lobster categories. Search all 80+ dishes or filter by seafood favorites."
        badge="Official 2026 Food & Price Directory"
        ctaText="View Top Specials"
        ctaLink="/specials"
        secondaryCtaText="Dinner Menu Feasts"
        secondaryCtaLink="/dinner-menu"
        backgroundImage="/hero-section.webp"
        stats={[
          { label: "Total Categories", value: "16", sub: "Feasts, Steaks & Pastas" },
          { label: "Items Listed", value: "80+", sub: "Verified 2026 Prices" },
          { label: "Starting Lunch", value: "$8.99", sub: "Mon–Fri until 3 PM" },
          { label: "Cheddar Biscuits", value: "Unlimited", sub: "Complimentary for dine-in" },
        ]}
        quickNav={[
          { label: "Dinner Menu", href: "/dinner-menu" },
          { label: "Lunch Menu", href: "/lunch-menu" },
          { label: "Specials", href: "/specials" },
          { label: "Appetizers", href: "/appetizers" },
          { label: "Price Highlights", href: "#price-highlights" },
          { label: "Browse Dishes", href: "#all-items" },
          { label: "FAQs", href: "#faqs" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-4 text-xs text-gray-500 flex items-center gap-2">
          <Link href="/" className="hover:text-[#B33A3A] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#B33A3A] font-bold">All Red Lobster Menu Prices 2026</span>
        </nav>

        {/* ── RESEARCH BYLINE & VERIFICATION BAR ───────────────── */}
        <div className="research-meta-bar mb-6 flex justify-between items-center">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-bold text-gray-800">By Price Audit Team</span>
            <span className="text-gray-400">|</span>
            <span>Comprehensive 80+ Item Directory</span>
            <span className="text-gray-400">|</span>
            <span className="text-emerald-700 font-semibold flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
              Prices Verified Against the Official Red Lobster App
            </span>
          </div>
          <span className="text-xs text-gray-400 hidden sm:inline">
            16 Menu Categories
          </span>
        </div>

        {/* Quick Highlights Price Table */}
        <section id="price-highlights" className="mb-16 scroll-mt-20">
          <PriceTable
            items={flagshipItems}
            title="Red Lobster Menu Price &amp; Calorie Highlights 2026"
            subtitle="Benchmark prices and calorie counts for the most frequently ordered items across primary menu categories."
            isPillHeading
          />
        </section>

        {/* Filterable Menu Grid */}
        <section id="all-items" className="mb-20 scroll-mt-20">
          <div className="text-center mb-8 max-w-3xl mx-auto">
            <h2 className="section-pill-banner">
              Browse All Red Lobster Menu Items by Category
            </h2>
            <p className="text-gray-600 text-sm max-w-xl mx-auto mt-2 leading-relaxed">
              Type any dish, seafood style, or ingredient to filter cards instantly across all 16 categories.
            </p>
          </div>

          <Suspense fallback={<div className="text-center py-16 text-gray-500 font-semibold">Loading Red Lobster menu...</div>}>
            <MenuFilterableList />
          </Suspense>
        </section>

        {/* Pricing Notice */}
        <div className="callout-box mb-16">
          <h3 className="font-extrabold text-gray-900 text-lg mb-2">Important Note on Red Lobster Pricing</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            The prices listed across our Red Lobster guide are <strong>verified national averages for 2026</strong>. Menu pricing may vary slightly based on metropolitan location, local supply costs, and active promotions. Always verify current prices at your local restaurant or on the official <a href="https://www.redlobster.com" target="_blank" rel="noopener noreferrer" className="text-[#B33A3A] underline font-bold">redlobster.com</a> ordering portal.
          </p>
        </div>

        {/* FAQ Section */}
        <FAQSection
          faqs={menuFaqs}
          title="Frequently Asked Questions About Red Lobster Prices"
          subtitle="Answers to common questions about meal pricing, Cheddar Bay Biscuits, and calorie tracking."
          schemaId="menu-faq-schema"
        />

        {/* Interlink Component */}
        <MenuInterlink currentPage="/menu" />
      </div>
    </div>
  );
}
