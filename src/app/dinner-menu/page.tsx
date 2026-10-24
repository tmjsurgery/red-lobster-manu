import type { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/ui/HeroSection";
import MenuCard from "@/components/ui/MenuCard";
import PriceTable from "@/components/ui/PriceTable";
import FAQSchema from "@/components/seo/FAQSchema";
import MenuInterlink from "@/components/layout/MenuInterlink";
import { menuItems } from "@/lib/data";

export const metadata: Metadata = {
  title: "Red Lobster Menu: Dinner Prices, Feasts & Calories 2026",
  description:
    "Explore the full Red Lobster menu dinner prices for 2026. Browse Ultimate Feast, live Maine lobster, snow crab legs, steaks, pastas, calories, and sides.",
  alternates: {
    canonical: "/dinner-menu",
  },
  openGraph: {
    title: "Red Lobster Menu: Dinner Prices, Feasts & Calories 2026",
    description:
      "Explore the complete Red Lobster menu dinner prices for 2026: Signature Feasts, live Maine lobster, steak & lobster, and calorie counts.",
    url: "https://redlobstermenu.site/dinner-menu",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Red Lobster Menu: Dinner Prices, Feasts & Calories 2026",
    description: "Explore the complete Red Lobster menu dinner prices and feasts for 2026.",
  },
};

const dinnerFaqs = [
  {
    question: "What are the average dinner prices on the Red Lobster menu in 2026?",
    answer: "Most Red Lobster dinner entrées cost between $18.99 and $26.99. Signature Feasts like the Ultimate Feast cost $36.99, while Surf & Turf and Live Maine Lobster range from $39.99 to $45.00+ depending on market weight.",
  },
  {
    question: "What comes with dinner entrées at Red Lobster?",
    answer: "Every standard dinner entrée includes your choice of two individual side dishes (such as seasoned rice pilaf, baked potato, steamed broccoli, or french fries) along with unlimited warm Cheddar Bay Biscuits.",
  },
  {
    question: "What time does dinner start at Red Lobster?",
    answer: "Dinner service officially begins at 3:00 PM Monday through Friday, immediately following the conclusion of lunch hours. Full dinner menu pricing is available all day on Saturdays and Sundays at most locations.",
  },
  {
    question: "How many calories are in a typical Red Lobster dinner?",
    answer: "Dinner entrées range widely from lighter grilled options like Wood-Grilled Salmon (620 Cal) to hearty signature combinations like the Ultimate Feast (1,180 Cal) and Shrimp Linguini Alfredo (1,340 Cal).",
  },
];

// Curate key dinner items
const dinnerEntrees = menuItems.filter((i) =>
  ["sf1", "sf2", "sf3", "sf4", "ls1", "ls2", "sc1", "sc2", "p1", "p2", "hp1", "hp2"].includes(i.id)
);

export default function DinnerMenuPage() {
  return (
    <div>
      <FAQSchema id="dinner-menu-faq-schema" faqs={dinnerFaqs} />

      <HeroSection
        title="Red Lobster Dinner Menu 2026"
        subtitle="Savor legendary seafood combinations, wild-caught Maine lobster, Alaskan snow crab, hand-cut steaks, and handcrafted Alfredo pastas with verified 2026 prices."
        ctaText="Explore Menu Prices"
        ctaLink="/menu"
        backgroundImage="/hero-section.webp"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8 text-xs text-gray-500 flex items-center gap-2">
          <Link href="/" className="hover:text-[#7c1d27]">Home</Link>
          <span>/</span>
          <span className="text-gray-900 font-semibold">Red Lobster Dinner Menu</span>
        </nav>

        {/* ── OVERVIEW SECTION ─────────────────────────────────── */}
        <section className="mb-14">
          <div className="text-center mb-8">
            <span className="text-[#7c1d27] text-xs font-bold uppercase tracking-widest bg-red-50 px-3 py-1 rounded-full">
              Full Evening Dining
            </span>
            <h2 className="text-2xl md:text-4xl font-black text-gray-900 mt-2 mb-3">
              Red Lobster Dinner Menu Entrées &amp; 2026 Prices
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              Dinner at Red Lobster offers full-sized portions, premium shellfish additions, and choice of two sides plus unlimited hot Cheddar Bay Biscuits.
            </p>
          </div>

          {/* Dinner Highlights Quick Info */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { label: "Dinner Hours", val: "3:00 PM – Close", sub: "All day on weekends" },
              { label: "Sides Included", val: "2 Sides", sub: "With all standard entrées" },
              { label: "Price Range", val: "$18.99 – $39.99+", sub: "Verified for 2026" },
              { label: "Cheddar Biscuits", val: "Unlimited", sub: "Freshly baked every 15 min" },
            ].map((box) => (
              <div key={box.label} className="bg-white p-5 rounded-2xl border border-gray-200 text-center shadow-sm">
                <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">{box.label}</span>
                <div className="text-xl md:text-2xl font-black text-gray-900 mt-1">{box.val}</div>
                <span className="text-[11px] text-[#7c1d27] font-semibold">{box.sub}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── STRUCTURED DINNER CARDS ──────────────────────────── */}
        <section className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-gray-200 mb-8 gap-3">
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-gray-900">
                Signature Dinner Feasts &amp; Entrées
              </h2>
              <p className="text-xs md:text-sm text-gray-500 mt-1">
                Complete structured cards with 2026 pricing, calories, and SEO descriptions.
              </p>
            </div>
            <span className="bg-[#7c1d27] text-white text-xs font-bold px-3 py-1.5 rounded-full w-fit">
              {dinnerEntrees.length} Dinner Favorites
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {dinnerEntrees.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
        </section>

        {/* ── PROFESSIONAL PRICE TABLE ────────────────────────── */}
        <section className="mb-16">
          <PriceTable
            items={dinnerEntrees}
            title="Red Lobster Dinner Menu 2026 — Comprehensive Price & Calorie Table"
            subtitle="Full breakdown of calories and 2026 prices for all signature dinner platters, steaks, and pastas."
          />
        </section>

        {/* ── LUNCH VS DINNER SAVINGS TABLE ───────────────────── */}
        <section className="mb-16 bg-white p-6 md:p-8 rounded-3xl border border-gray-200 shadow-sm">
          <h2 className="text-2xl font-black text-gray-900 mb-3 text-center md:text-left">
            Red Lobster Dinner vs. Lunch: How Prices Compare
          </h2>
          <p className="text-sm text-gray-600 mb-6 max-w-2xl leading-relaxed">
            While lunch offers smaller portions at $8.99 to $14.99, dinner gives you full portions, higher protein, two full sides instead of one, and access to premium dishes like the Ultimate Feast and Steamed Live Maine Lobster.
          </p>

          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm text-left">
              <thead className="bg-[#7c1d27] text-white">
                <tr>
                  <th className="py-3 px-4 font-bold">Feature</th>
                  <th className="py-3 px-4 font-bold">Lunch Menu (11 AM–3 PM)</th>
                  <th className="py-3 px-4 font-bold">Dinner Menu (3 PM–Close)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="bg-white">
                  <td className="py-3 px-4 font-semibold text-gray-800">Average Entrée Price</td>
                  <td className="py-3 px-4 text-[#7c1d27] font-bold">$9.99 – $14.99</td>
                  <td className="py-3 px-4 text-gray-900 font-bold">$18.99 – $36.99</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 font-semibold text-gray-800">Sides Included</td>
                  <td className="py-3 px-4 text-gray-600">1 Side Dish</td>
                  <td className="py-3 px-4 text-gray-900 font-medium">2 Side Dishes</td>
                </tr>
                <tr className="bg-white">
                  <td className="py-3 px-4 font-semibold text-gray-800">Portion Size</td>
                  <td className="py-3 px-4 text-gray-600">Lunch-sized portion</td>
                  <td className="py-3 px-4 text-gray-900 font-medium">Full dinner portion</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 font-semibold text-gray-800">Cheddar Bay Biscuits</td>
                  <td className="py-3 px-4 text-emerald-700 font-medium">Unlimited for dine-in</td>
                  <td className="py-3 px-4 text-emerald-700 font-medium">Unlimited for dine-in</td>
                </tr>
                <tr className="bg-white">
                  <td className="py-3 px-4 font-semibold text-gray-800">Availability</td>
                  <td className="py-3 px-4 text-gray-600">Mon–Fri 11:00 AM – 3:00 PM</td>
                  <td className="py-3 px-4 text-gray-900 font-medium">Daily (all day on weekends)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ── DINNER FAQS ─────────────────────────────────────── */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">
              Frequently Asked Questions About Red Lobster Dinner Menu
            </h2>
            <p className="text-gray-500 text-sm max-w-xl mx-auto">
              Answers regarding dinner reservations, side substitutions, and pricing details.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {dinnerFaqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-2 text-base">{faq.question}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── INTERLINKS ──────────────────────────────────────── */}
        <MenuInterlink currentPage="/dinner-menu" />
      </div>
    </div>
  );
}
