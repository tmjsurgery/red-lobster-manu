import MenuFilterableList from "./MenuFilterableList";
import { Suspense } from "react";
import HeroSection from "@/components/ui/HeroSection";
import FAQSchema from "@/components/seo/FAQSchema";
import MenuInterlink from "@/components/layout/MenuInterlink";
import PriceTable from "@/components/ui/PriceTable";
import { menuItems } from "@/lib/data";

export const metadata = {
  title: "Red Lobster Menu Prices 2026 – Full Food & Calorie List",
  description:
    "Browse the complete Red Lobster menu prices for 2026 with calories and descriptions. View prices for Ultimate Feast, lobster, crab, shrimp, pastas, and sides.",
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
    answer: "On average, a lunch entrée at Red Lobster costs between $8.99 and $14.99, while dinner entrées range from $18.99 to $36.99. Premium options like Steamed Live Maine Lobster and Crabfest King Crab range from $39.99 to $49.99+.",
  },
  {
    question: "What is the most popular dish on the Red Lobster menu?",
    answer: "The Ultimate Feast ($36.99, 1,180 Cal) is Red Lobster's top-selling signature dish. Walt's Favorite Shrimp ($19.99, 480 Cal) and Garlic Shrimp Scampi ($18.49, 780 Cal) are also perennial favorites.",
  },
  {
    question: "Do Red Lobster menu prices include Cheddar Bay Biscuits?",
    answer: "Yes! Every dine-in entrée comes with complimentary, unlimited warm Cheddar Bay Biscuits. To-go orders generally include 2 to 4 biscuits per entrée ordered.",
  },
  {
    question: "Are calorie counts listed on the Red Lobster menu?",
    answer: "Yes, calories are provided for all entrées and sides. They range from 40 calories for Steamed Broccoli to 1,340 calories for rich pasta dishes like Shrimp Linguini Alfredo.",
  },
];

// Highlight selected flagship items across categories for a quick price table
const flagshipItems = menuItems.filter((i) =>
  ["sf1", "crab1", "boil1", "sc1", "ls1", "p1", "lf1", "ss1", "be1", "d1", "k2"].includes(i.id)
);

export default function AllMenuPage() {
  return (
    <div>
      {/* FAQ Schema for SEO rich snippets */}
      <FAQSchema id="menu-faq-schema" faqs={menuFaqs} />

      <HeroSection 
        title="Red Lobster Menu Prices 2026" 
        subtitle="Explore our comprehensive 2026 price and calorie guide for all 16 Red Lobster categories. Use the search bar to locate specific dishes or filter by seafood favorites."
        ctaText="View Top Specials"
        ctaLink="/specials"
        backgroundImage="/hero-section.webp"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Quick Highlights Price Table */}
        <section className="mb-14">
          <PriceTable
            items={flagshipItems}
            title="Red Lobster Menu Price & Calorie Highlights 2026"
            subtitle="Benchmark prices and calorie counts for the most frequently ordered items across primary menu categories."
          />
        </section>

        {/* Filterable Menu Grid */}
        <section>
          <div className="text-center mb-8">
            <span className="text-[#7c1d27] text-xs font-bold uppercase tracking-widest bg-red-50 px-3 py-1 rounded-full">
              Interactive Menu
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 mt-2">
              Browse All Red Lobster Menu Items by Category
            </h2>
            <p className="text-gray-500 text-sm mt-1 max-w-xl mx-auto">
              Type any item, seafood style, or ingredient to filter cards instantly.
            </p>
          </div>

          <Suspense fallback={<div className="text-center py-12 text-gray-500">Loading Red Lobster menu...</div>}>
            <MenuFilterableList />
          </Suspense>
        </section>

        {/* Pricing Notice */}
        <div className="mt-16 bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-200">
          <h3 className="font-bold text-gray-900 text-base mb-2">Important Note on Red Lobster Pricing</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            The prices listed across our Red Lobster guide are <strong>verified national estimates for 2026</strong>. Menu pricing varies based on metropolitan market, regional ingredient costs, and active franchise promotions. Always verify current pricing at your local restaurant or on the official <a href="https://www.redlobster.com" target="_blank" rel="noopener noreferrer" className="text-[#7c1d27] underline font-medium">redlobster.com</a> ordering portal.
          </p>
        </div>

        {/* Interlink Component */}
        <MenuInterlink currentPage="/menu" />
      </div>
    </div>
  );
}
