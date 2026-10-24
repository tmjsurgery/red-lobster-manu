import type { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/ui/HeroSection";
import MenuCard from "@/components/ui/MenuCard";
import PriceTable from "@/components/ui/PriceTable";
import FAQSchema from "@/components/seo/FAQSchema";
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
    answer: "Kids can choose from sides including Steamed Broccoli (40 Cal), French Fries (290 Cal), Rice Pilaf (170 Cal), or Mashed Potatoes (220 Cal). Drinks include 1% white milk, chocolate milk, fruit juice, or kid fountain sodas.",
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
    <div>
      <FAQSchema id="kids-menu-faq-schema" faqs={kidsFaqs} />

      <HeroSection
        title="Red Lobster Kids Menu 2026"
        subtitle="Wholesome, delicious, and kid-approved seafood, chicken, and pasta favorites designed for children ages 12 and under, starting at just $7.99."
        ctaText="View Nutrition Guide"
        ctaLink="/nutrition-calories"
        backgroundImage="/hero-section.webp"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8 text-xs text-gray-500 flex items-center gap-2">
          <Link href="/" className="hover:text-[#7c1d27]">Home</Link>
          <span>/</span>
          <span className="text-gray-900 font-semibold">Red Lobster Kids Menu</span>
        </nav>

        {/* ── OVERVIEW SECTION ─────────────────────────────────── */}
        <section className="mb-14">
          <div className="text-center mb-8">
            <span className="text-[#7c1d27] text-xs font-bold uppercase tracking-widest bg-red-50 px-3 py-1 rounded-full">
              Ages 12 &amp; Under
            </span>
            <h2 className="text-2xl md:text-4xl font-black text-gray-900 mt-2 mb-3">
              Red Lobster Kids Menu Meals &amp; 2026 Prices
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              Every kids meal is thoughtfully balanced and comes complete with your choice of side, a beverage, and warm Cheddar Bay Biscuits.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { label: "Price Range", val: "$7.99 – $9.49", sub: "Complete meal deal" },
              { label: "Lowest Calorie", val: "180 Cal", sub: "Grilled Shrimp meal" },
              { label: "Sides Included", val: "1 Side + Drink", sub: "Broccoli, fries, or rice" },
              { label: "Biscuits", val: "Free & Warm", sub: "Unlimited with meal" },
            ].map((box) => (
              <div key={box.label} className="bg-white p-5 rounded-2xl border border-gray-200 text-center shadow-sm">
                <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">{box.label}</span>
                <div className="text-xl md:text-2xl font-black text-gray-900 mt-1">{box.val}</div>
                <span className="text-[11px] text-[#7c1d27] font-semibold">{box.sub}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── STRUCTURED KIDS CARDS ────────────────────────────── */}
        <section className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-gray-200 mb-8 gap-3">
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-gray-900">
                Kids Menu Entrées &amp; Calorie Counts
              </h2>
              <p className="text-xs md:text-sm text-gray-500 mt-1">
                Structured cards with 2026 pricing, calories, and SEO descriptions.
              </p>
            </div>
            <span className="bg-[#7c1d27] text-white text-xs font-bold px-3 py-1.5 rounded-full w-fit">
              {kidsItems.length} Kid Favorites
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {kidsItems.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
        </section>

        {/* ── PROFESSIONAL PRICE TABLE ────────────────────────── */}
        <section className="mb-16">
          <PriceTable
            items={kidsItems}
            title="Red Lobster Kids Menu 2026 — Price & Nutrition Table"
            subtitle="Accurate prices and calorie counts for every kids entrée."
          />
        </section>

        {/* ── NUTRITION & SIDES GUIDE FOR PARENTS ─────────────── */}
        <section className="mb-16 bg-white p-6 md:p-8 rounded-3xl border border-gray-200 shadow-sm">
          <h2 className="text-2xl font-black text-gray-900 mb-3 text-center md:text-left">
            Parents Guide: Healthiest Combinations on the Kids Menu
          </h2>
          <p className="text-sm text-gray-600 mb-6 max-w-2xl leading-relaxed">
            Looking for nutritious choices? Pair lean proteins with fresh vegetable sides to keep calories and sodium under control:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 bg-emerald-50 rounded-2xl border border-emerald-200">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                Healthiest Option
              </span>
              <h3 className="font-bold text-gray-900 text-base mt-2 mb-1">Grilled Shrimp + Steamed Broccoli</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Only 220 total calories with 24g of lean protein and essential vitamins. Ask for no butter on the broccoli for an ultra-lean dinner.
              </p>
            </div>

            <div className="p-5 bg-blue-50 rounded-2xl border border-blue-200">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-800 bg-blue-100 px-2 py-0.5 rounded">
                High Protein
              </span>
              <h3 className="font-bold text-gray-900 text-base mt-2 mb-1">Grilled Chicken + Seasoned Rice</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                380 total calories with 30g of protein and mild seasonings suitable for sensitive palates.
              </p>
            </div>

            <div className="p-5 bg-amber-50 rounded-2xl border border-amber-200">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-2 py-0.5 rounded">
                Comfort Favorite
              </span>
              <h3 className="font-bold text-gray-900 text-base mt-2 mb-1">Macaroni &amp; Cheese + Milk</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Creamy Kraft mac &amp; cheese paired with 1% milk delivers 530 calories and great calcium for growing bones.
              </p>
            </div>
          </div>
        </section>

        {/* ── KIDS FAQS ───────────────────────────────────────── */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">
              Frequently Asked Questions About the Kids Menu
            </h2>
            <p className="text-gray-500 text-sm max-w-xl mx-auto">
              Common questions answered for families dining at Red Lobster.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {kidsFaqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-2 text-base">{faq.question}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── INTERLINKS ──────────────────────────────────────── */}
        <MenuInterlink currentPage="/kids-menu" />
      </div>
    </div>
  );
}
