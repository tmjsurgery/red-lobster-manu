import type { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/ui/HeroSection";
import MenuCard from "@/components/ui/MenuCard";
import PriceTable from "@/components/ui/PriceTable";
import FAQSchema from "@/components/seo/FAQSchema";
import MenuInterlink from "@/components/layout/MenuInterlink";
import { menuItems } from "@/lib/data";

export const metadata: Metadata = {
  title: "Red Lobster Menu Specials & Daily Deals 2026 – Save on Seafood",
  description:
    "Discover current Red Lobster menu specials for 2026: $10 lunch deals, Endless Shrimp, Monday–Friday daily deals, Crabfest promotions, and Happy Hour discounts.",
  alternates: {
    canonical: "/specials",
  },
  openGraph: {
    title: "Red Lobster Menu Specials & Daily Deals 2026",
    description:
      "Explore official Red Lobster menu specials: $10 lunch deals, weekday daily specials, Endless Shrimp, and coupon savings for 2026.",
    url: "https://redlobstermenu.site/specials",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Red Lobster Menu Specials & Daily Deals 2026",
    description: "Explore official Red Lobster menu specials and daily deals for 2026.",
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
    question: "What are the daily specials on the Red Lobster menu in 2026?",
    answer: "Red Lobster's weekday daily specials include: Monday Endless Shrimp (~$20.99), Tuesday Shrimp or Chicken Linguini Alfredo ($14.99), Wednesday Steak & Lobster ($24.99), Thursday Lobster & Shrimp Scampi ($19.99), and Friday Fish & Chips ($15.99).",
  },
  {
    question: "What is on the Red Lobster $10 specials menu?",
    answer: "The $10 lunch specials include Soup, Salad & Cheddar Bay Biscuits ($8.99), Garlic Shrimp Scampi ($9.99), Popcorn Shrimp ($9.99), Crispy Cod Sandwich ($12.49), and Parrot Isle Coconut Shrimp ($10.99), available weekdays 11 AM to 3 PM.",
  },
  {
    question: "Does Red Lobster still do Endless Shrimp in 2026?",
    answer: "Yes, Endless Shrimp is offered as a limited-time seasonal promotion and on select Monday daily deal menus at participating locations, priced at approximately $20.99 to $25.99.",
  },
  {
    question: "How do I get coupons and discounts on Red Lobster menu specials?",
    answer: "Sign up for My Red Lobster Rewards to earn 1 point per $1 spent, receive a birthday voucher, and get exclusive monthly promo codes such as 10% to 20% off online orders.",
  },
];

// Special featured promotional items
const specialMenuItems = menuItems.filter((i) =>
  ["crab3", "lf1", "bs1", "sc3", "sf1", "lf5"].includes(i.id)
);

export default function SpecialsPage() {
  return (
    <div>
      <FAQSchema id="specials-faq-schema" faqs={specialsFaqs} />

      <HeroSection
        title="Red Lobster Menu Specials 2026"
        subtitle="Save big with current Red Lobster specials: verified Monday–Friday daily deals, $10 lunch offers, Happy Hour drink specials, and seasonal Crabfest feasts."
        ctaText="View Lunch Specials"
        ctaLink="/lunch-menu"
        backgroundImage="/hero-section.webp"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-8 text-xs text-gray-500 flex items-center gap-2">
          <Link href="/" className="hover:text-[#7c1d27]">Home</Link>
          <span>/</span>
          <span className="text-gray-900 font-semibold">Red Lobster Menu Specials</span>
        </nav>

        {/* ── WEEKDAY DAILY DEALS SECTION ──────────────────────── */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <span className="text-[#7c1d27] text-xs font-bold uppercase tracking-widest bg-red-50 px-3 py-1 rounded-full">
              Monday Through Friday
            </span>
            <h2 className="text-2xl md:text-4xl font-black text-gray-900 mt-2 mb-3">
              Official Red Lobster Daily Deals for 2026
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm leading-relaxed">
              Every weekday features a designated signature dish at a substantial discount from standard dinner menu prices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
            {dailyDealsData.map((deal) => (
              <div
                key={deal.day}
                className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm flex flex-col justify-between hover:border-[#7c1d27] hover:shadow-md transition-all text-center"
              >
                <div>
                  <span className="inline-block text-[11px] font-black uppercase tracking-wider text-[#7c1d27] bg-red-50 px-2.5 py-0.5 rounded-full mb-2">
                    {deal.day}
                  </span>
                  <h3 className="font-bold text-gray-900 text-base mb-1.5 leading-snug">{deal.deal}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed mb-3">{deal.desc}</p>
                </div>
                <div className="pt-3 border-t border-gray-100">
                  <span className="text-xl font-black text-[#7c1d27] block">{deal.price}</span>
                  <span className="text-[11px] text-gray-400 mt-0.5 block">🔥 {deal.cal}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#fdf2f3] border border-[#e8b4b8] rounded-2xl p-5 text-xs md:text-sm text-gray-700 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <strong className="text-[#7c1d27]">Pro Tip:</strong> All daily deals include complimentary unlimited warm Cheddar Bay Biscuits for dine-in guests!
            </div>
            <Link
              href="/coupons"
              className="text-[#7c1d27] font-bold underline whitespace-nowrap"
            >
              Check Coupon Codes &rarr;
            </Link>
          </div>
        </section>

        {/* ── FEATURED SPECIALS MENU CARDS ────────────────────── */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <span className="text-[#7c1d27] text-xs font-bold uppercase tracking-widest bg-red-50 px-3 py-1 rounded-full">
              Featured Specials
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 mt-2 mb-2">
              Featured Red Lobster Menu Specials Dishes
            </h2>
            <p className="text-gray-500 text-sm max-w-xl mx-auto">
              Structured cards featuring accurate 2026 pricing, calorie counts, and details for special promotional entrées.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialMenuItems.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
        </section>

        {/* ── SPECIALS PRICE TABLE ───────────────────────────── */}
        <section className="mb-16">
          <PriceTable
            items={specialMenuItems}
            title="Red Lobster Specials 2026 — Price & Calorie Comparison Table"
            subtitle="Side-by-side comparison of promotional entrées, calorie loads, and verified 2026 value pricing."
          />
        </section>

        {/* ── SPECIALS FAQS ──────────────────────────────────── */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">
              Frequently Asked Questions About Red Lobster Specials
            </h2>
            <p className="text-gray-500 text-sm max-w-xl mx-auto">
              Everything you need to know about redeeming daily deals, promo codes, and meal combos.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {specialsFaqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-2 text-base">{faq.question}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── INTERLINKS ──────────────────────────────────────── */}
        <MenuInterlink currentPage="/specials" />
      </div>
    </div>
  );
}
