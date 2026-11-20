import type { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/ui/HeroSection";
import MenuCard from "@/components/ui/MenuCard";
import PriceTable from "@/components/ui/PriceTable";
import FAQSection from "@/components/ui/FAQSection";
import MenuInterlink from "@/components/layout/MenuInterlink";
import { menuItems } from "@/lib/data";

export const metadata: Metadata = {
  title: "Red Lobster Appetizers Menu & Prices 2026: Starters & Dips",
  description:
    "Explore the full 2026 Red Lobster appetizers menu with verified prices and calories. Discover Parrot Isle Coconut Shrimp, seafood-stuffed mushrooms, lobster flatbread, and dips.",
  alternates: {
    canonical: "/appetizers",
  },
  openGraph: {
    title: "Red Lobster Appetizers Menu & Prices 2026: Starters & Dips",
    description:
      "Full 2026 Red Lobster appetizers menu: coconut shrimp, stuffed mushrooms, mozzarella cheesesticks, and shareable dips.",
    url: "https://redlobstermenu.site/appetizers",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Red Lobster Appetizers Menu & Prices 2026",
    description: "Explore Red Lobster appetizer prices, shareable starters, and calories for 2026.",
  },
};

const appetizerFaqs = [
  {
    question: "What are the most popular appetizers at Red Lobster in 2026?",
    answer: "The top-selling Red Lobster appetizers are Parrot Isle Jumbo Coconut Shrimp ($14.99), Seafood-Stuffed Mushrooms ($13.49), and warm Crab Queso Dip ($12.99). The Chilled Jumbo Shrimp Cocktail ($13.99) is also a favorite for guests seeking a low-calorie, high-protein starter.",
  },
  {
    question: "How much do appetizers cost on the Red Lobster menu?",
    answer: "Red Lobster appetizer prices range from $10.99 for Mozzarella Cheesesticks up to $16.49 for premium options like the Lobster Flatbread. During weekday Happy Hour (3:00 PM to 6:00 PM), select appetizers are discounted by $2 to $3.",
  },
  {
    question: "Do appetizers come with Cheddar Bay Biscuits?",
    answer: "Dine-in guests receive complimentary unlimited Cheddar Bay Biscuits with any meal order, including when ordering starters and beverages.",
  },
  {
    question: "Which Red Lobster appetizer has the lowest calories?",
    answer: "The Chilled Jumbo Shrimp Cocktail is the lowest-calorie appetizer on the menu at just 130 calories and 21 grams of lean protein. Steamed edamame and garden salads are also great low-calorie starter choices.",
  },
  {
    question: "Can appetizers be ordered as an entrée?",
    answer: "Yes, many guests order two or three shareable appetizers (such as coconut shrimp and seafood-stuffed mushrooms) to create their own custom sampler meal.",
  },
];

// Curated Starters
const warmSeafoodStarters = menuItems.filter((i) =>
  ["s2", "s6", "s7", "crab7", "crab8"].includes(i.id)
);

const crispyStarters = menuItems.filter((i) =>
  ["s1", "s3", "s4"].includes(i.id)
);

const chilledAndLight = menuItems.filter((i) =>
  ["s5", "ss1", "ss2"].includes(i.id)
);

const allAppetizerItems = menuItems.filter((i) => i.categorySlug === "starters" || ["crab7", "crab8"].includes(i.id));

export default function AppetizersPage() {
  return (
    <div className="bg-[#F8FAFC]">
      {/* ── TOP HERO SECTION ─────────────────────────────────── */}
      <HeroSection
        title="Red Lobster Appetizers Menu & Prices 2026"
        subtitle="Kick off your seafood dining experience with signature shareable starters: coconut shrimp with piña colada sauce, bubbly seafood-stuffed mushrooms, crispy calamari, and creamy crab queso dip."
        badge="Official 2026 Appetizers Guide • Verified Prices & Calories"
        ctaText="View Signature Starters"
        ctaLink="#warm-starters"
        secondaryCtaText="Happy Hour Savings"
        secondaryCtaLink="/happy-hour"
        backgroundImage="/seafood-stuffed-mushrooms.webp"
        stats={[
          { label: "Price Range", value: "$10.99 – $16.49", sub: "Verified for 2026" },
          { label: "Happy Hour", value: "3 PM – 6 PM", sub: "$2 off select starters" },
          { label: "Lowest Calorie", value: "130 Cal", sub: "Chilled Shrimp Cocktail" },
          { label: "Cheddar Biscuits", value: "Unlimited", sub: "Complimentary for dine-in" },
        ]}
        quickNav={[
          { label: "Warm Seafood Starters", href: "#warm-starters" },
          { label: "Crispy Bites", href: "#crispy-starters" },
          { label: "Chilled & Soups", href: "#chilled-starters" },
          { label: "Price Table", href: "#price-table" },
          { label: "FAQs", href: "#faqs" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-4 text-xs text-gray-500 flex items-center gap-2">
          <Link href="/" className="hover:text-[#B33A3A] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#B33A3A] font-bold">Red Lobster Appetizers Menu 2026</span>
        </nav>

        {/* ── RESEARCH BYLINE & VERIFICATION BAR ───────────────── */}
        <div className="research-meta-bar mb-6 flex justify-between items-center">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-bold text-gray-800">By Starters &amp; Small Plates Team</span>
            <span className="text-gray-400">|</span>
            <span>Appetizers &amp; Dips Audit 2026</span>
            <span className="text-gray-400">|</span>
            <span className="text-emerald-700 font-semibold flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
              Prices Verified Against the Official Red Lobster App
            </span>
          </div>
          <span className="text-xs text-gray-400 hidden sm:inline">
            Shareable Seafood Starters
          </span>
        </div>

        {/* ── CATEGORY 1: WARM SEAFOOD STARTERS ───────────────── */}
        <section id="warm-starters" className="mb-20 scroll-mt-20">
          <div className="text-center mb-8 max-w-3xl mx-auto">
            <h2 className="section-pill-banner">
              Warm Seafood Starters &amp; Shareable Dips
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Melted Monterey Jack cheese, sweet lump crab, and succulent lobster meat baked into bubbling skillet dips and artisan flatbreads.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {warmSeafoodStarters.map((item) => (
              <MenuCard key={item.id} item={item} servingNote="Perfect for Sharing" />
            ))}
          </div>
        </section>

        {/* ── CATEGORY 2: CRISPY APPETIZERS ───────────────────── */}
        <section id="crispy-starters" className="mb-20 scroll-mt-20">
          <div className="text-center mb-8 max-w-3xl mx-auto">
            <h2 className="section-pill-banner">
              Crispy Finger Foods &amp; Jumbo Shrimp
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Hand-breaded coconut shrimp, flash-fried calamari tossed with sweet bell peppers, and golden mozzarella cheesesticks served with warm marinara.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {crispyStarters.map((item) => (
              <MenuCard key={item.id} item={item} servingNote="Crispy &amp; Golden" />
            ))}
          </div>
        </section>

        {/* ── CATEGORY 3: CHILLED SEAFOOD & SOUPS ─────────────── */}
        <section id="chilled-starters" className="mb-20 scroll-mt-20">
          <div className="text-center mb-8 max-w-3xl mx-auto">
            <h2 className="section-pill-banner">
              Chilled Seafood &amp; Starters
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Plump cocktail shrimp served over crushed ice with tangy cocktail sauce, and comforting bowls of New England clam chowder.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {chilledAndLight.map((item) => (
              <MenuCard key={item.id} item={item} servingNote="Light Starter" />
            ))}
          </div>
        </section>

        {/* ── COMPREHENSIVE PRICE TABLE ───────────────────────── */}
        <section id="price-table" className="mb-20 scroll-mt-20">
          <PriceTable
            items={allAppetizerItems}
            title="Red Lobster Appetizers 2026 — Complete Price &amp; Calorie Table"
            subtitle="Full calorie counts, 2026 prices, and serving recommendations for all Red Lobster starters."
            isPillHeading
          />
        </section>

        {/* ── FAQ SECTION ─────────────────────────────────────── */}
        <FAQSection
          faqs={appetizerFaqs}
          title="Frequently Asked Questions About Red Lobster Appetizers"
          subtitle="Helpful answers about appetizer pricing, calorie counts, Happy Hour discounts, and biscuit service."
          schemaId="appetizers-faq-schema"
        />

        {/* ── INTERNAL LINKS ──────────────────────────────────── */}
        <MenuInterlink currentPage="/appetizers" />
      </div>
    </div>
  );
}
