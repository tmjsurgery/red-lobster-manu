import type { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/ui/HeroSection";
import MenuCard from "@/components/ui/MenuCard";
import PriceTable from "@/components/ui/PriceTable";
import FAQSection from "@/components/ui/FAQSection";
import MenuInterlink from "@/components/layout/MenuInterlink";
import { menuItems } from "@/lib/data";

export const metadata: Metadata = {
  title: "Red Lobster Menu: Kids Meals, Prices & Calories Guide 2026",
  description:
    "Official Red Lobster menu for kids in 2026. Check prices from $7.99, calorie counts, healthy sides, drinks, and meals for children ages 12 & under.",
  alternates: {
    canonical: "/kids-menu",
  },
  openGraph: {
    title: "Red Lobster Menu: Kids Meals, Prices & Calories Guide 2026",
    description:
      "Explore the official Red Lobster kids menu: meals for ages 12 & under from $7.99, calorie counts, healthy sides, and unlimited biscuits.",
    url: "https://redlobstermenu.site/kids-menu",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Red Lobster Menu: Kids Meals, Prices & Calories Guide 2026",
    description: "Official Red Lobster menu for kids in 2026 with prices and calories.",
  },
};

const kidsFaqs = [
  {
    question: "How much does a meal on the Red Lobster kids menu cost in 2026?",
    answer: "Kids meals at Red Lobster in 2026 range from $7.99 for Macaroni & Cheese up to $9.49 for Grilled Shrimp or Popcorn Shrimp. Each meal includes one individual side and a child's beverage.",
  },
  {
    question: "What is the age limit for the Red Lobster kids menu?",
    answer: "The Red Lobster kids menu is specifically designed and portioned for children ages 12 and under. However, takeout orders can generally be ordered by diners of any age.",
  },
  {
    question: "What sides and drinks come with a Red Lobster kids meal?",
    answer: "Kids can choose from sides including Steamed Broccoli (80 Cal), French Fries (350 Cal), Rice Pilaf (200 Cal), or Mashed Potatoes (250 Cal). Drinks include 1% white milk, chocolate milk, fruit juice, or kid fountain sodas.",
  },
  {
    question: "Do kids get free Cheddar Bay Biscuits at Red Lobster?",
    answer: "Yes! Every dine-in guest at Red Lobster receives complimentary, freshly baked Cheddar Bay Biscuits, including children ordering from the kids menu.",
  },
];

// Curate kids items
const kidsItems = menuItems.filter((i) => i.categorySlug === "kids");

export default function KidsMenuPage() {
  return (
    <div className="bg-[#F8FAFC]">
      {/* ── TOP HERO SECTION ─────────────────────────────────── */}
      <HeroSection
        title="Red Lobster Kids Menu 2026"
        subtitle="Wholesome, delicious, and kid-approved seafood, chicken, and pasta favorites designed for children ages 12 and under, starting at just $7.99."
        badge="Ages 12 & Under • Complete Meals with Sides & Drinks"
        ctaText="View Kids Meals"
        ctaLink="#kids-meals"
        secondaryCtaText="Nutrition Guide"
        secondaryCtaLink="/nutrition-calories"
        backgroundImage="/hero-section.webp"
        stats={[
          { label: "Price Range", value: "$7.99 – $9.49", sub: "Complete meal deal" },
          { label: "Lowest Calorie", value: "180 Cal", sub: "Grilled Shrimp meal" },
          { label: "Sides Included", value: "1 Side + Drink", sub: "Broccoli, fries, or rice" },
          { label: "Biscuits", value: "Free & Warm", sub: "Unlimited with meal" },
        ]}
        quickNav={[
          { label: "Kids Meals", href: "#kids-meals" },
          { label: "Price Table", href: "#price-table" },
          { label: "FAQs", href: "#faqs" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-4 text-xs text-gray-500 flex items-center gap-2">
          <Link href="/" className="hover:text-[#B33A3A] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#B33A3A] font-bold">Red Lobster Kids Menu 2026</span>
        </nav>

        {/* ── RESEARCH BYLINE & VERIFICATION BAR ───────────────── */}
        <div className="research-meta-bar mb-6 flex justify-between items-center">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-bold text-gray-800">By Family Dining Team</span>
            <span className="text-gray-400">|</span>
            <span>Kids Nutrition &amp; Pricing 2026</span>
            <span className="text-gray-400">|</span>
            <span className="text-emerald-700 font-semibold flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
              Prices Verified Against the Official Red Lobster App
            </span>
          </div>
          <span className="text-xs text-gray-400 hidden sm:inline">
            Ages 12 &amp; Under
          </span>
        </div>

        {/* ── KIDS MEALS SECTION ──────────────────────────────── */}
        <section id="kids-meals" className="mb-20 scroll-mt-20">
          <div className="text-center mb-8 max-w-3xl mx-auto">
            <h2 className="section-pill-banner">
              Red Lobster Kids Menu Meals &amp; 2026 Prices
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              Every kids meal is thoughtfully balanced and comes complete with your choice of side, a beverage, and warm Cheddar Bay Biscuits.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {kidsItems.map((item) => (
              <MenuCard key={item.id} item={item} servingNote="1 Side + Drink Included" />
            ))}
          </div>

          <PriceTable
            items={kidsItems}
            title="Red Lobster Kids Menu — 2026 Price Table"
            subtitle="Full calorie and pricing details for all items on the kids dining lineup."
            isPillHeading
          />
        </section>

        {/* ── FAQ SECTION ─────────────────────────────────────── */}
        <FAQSection
          faqs={kidsFaqs}
          title="Frequently Asked Questions About Red Lobster Kids Menu"
          subtitle="Clear answers regarding age limits, side choices, and beverage options for young diners."
          schemaId="kids-menu-faq-schema"
        />

        {/* ── INTERNAL LINKS ──────────────────────────────────── */}
        <MenuInterlink currentPage="/kids-menu" />
      </div>
    </div>
  );
}
