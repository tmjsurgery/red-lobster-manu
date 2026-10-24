import type { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/ui/HeroSection";
import MenuCard from "@/components/ui/MenuCard";
import PriceTable from "@/components/ui/PriceTable";
import FAQSchema from "@/components/seo/FAQSchema";
import MenuInterlink from "@/components/layout/MenuInterlink";
import { menuItems } from "@/lib/data";

export const metadata: Metadata = {
  title: "Red Lobster Menu Nutrition & Calories 2026 – Full Calorie Guide",
  description:
    "Complete Red Lobster menu nutrition and calories guide for 2026. Compare calorie counts, carbs, protein, fat, and sodium for seafood, pastas, sides, and biscuits.",
  alternates: {
    canonical: "/nutrition-calories",
  },
  openGraph: {
    title: "Red Lobster Menu Nutrition & Calories 2026",
    description:
      "Complete 2026 calorie and nutrition guide for the Red Lobster menu. Low-calorie seafood picks, keto options, protein counts, and biscuits.",
    url: "https://redlobstermenu.site/nutrition-calories",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Red Lobster Menu Nutrition & Calories 2026",
    description: "Complete 2026 calorie and nutrition guide for the Red Lobster menu.",
  },
};

const nutritionFaqs = [
  {
    question: "How many calories are in Red Lobster Cheddar Bay Biscuits?",
    answer: "A single Red Lobster Cheddar Bay Biscuit contains approximately 150 calories, 8g of total fat (4g saturated), 16g of carbohydrates, and 380mg of sodium. A standard serving of 2 biscuits equals 300 calories.",
  },
  {
    question: "What is the lowest calorie entrée on the Red Lobster menu?",
    answer: "The Grilled Shrimp Skewers (380 Cal, $17.99) and Steamed Live Maine Lobster (440 Cal, $39.99) are the lowest calorie full entrées. For appetizers, the Chilled Jumbo Shrimp Cocktail contains just 130 calories.",
  },
  {
    question: "What are the best keto and low-carb options at Red Lobster?",
    answer: "Great keto choices include Steamed Live Maine Lobster (0g carbs), Wild-Caught Snow Crab Legs (0g carbs), Wood-Grilled Atlantic Salmon (1g carb), and Grilled Shrimp Skewers, paired with Steamed Broccoli (40 Cal, 4g net carbs) and drawn butter.",
  },
  {
    question: "Which Red Lobster dishes have the highest protein?",
    answer: "The Ultimate Feast packs over 65g of protein, while Wood-Grilled Salmon provides 42g of protein, and the Surf & Turf delivers over 58g of lean protein.",
  },
  {
    question: "Where can I find Red Lobster allergen information?",
    answer: "We offer a dedicated Red Lobster Allergen Guide covering shellfish, gluten, dairy, eggs, soy, and nut sensitivities, with specific safe-dining ordering recommendations.",
  },
];

const lowCalItems = menuItems.filter((i) =>
  ["s5", "sc4", "sf4", "ls3", "ss5", "k1"].includes(i.id)
);

const nutritionTableData = [
  { item: "Steamed Broccoli", cal: "40 Cal", fat: "0g", carbs: "4g", protein: "3g", bestFor: "Zero guilt veggie side" },
  { item: "Garden Salad (no dressing)", cal: "110 Cal", fat: "1g", carbs: "12g", protein: "4g", bestFor: "Crisp low-calorie starter" },
  { item: "Chilled Shrimp Cocktail", cal: "130 Cal", fat: "1.5g", carbs: "8g", protein: "21g", bestFor: "High-protein lean appetizer" },
  { item: "Cheddar Bay Biscuit (1)", cal: "150 Cal", fat: "8g", carbs: "16g", protein: "3g", bestFor: "Iconic buttery indulgence" },
  { item: "Grilled Shrimp (Kids)", cal: "180 Cal", fat: "3g", carbs: "2g", protein: "24g", bestFor: "Light kids protein" },
  { item: "New England Clam Chowder (Cup)", cal: "240 Cal", fat: "14g", carbs: "18g", protein: "8g", bestFor: "Comforting starter" },
  { item: "Grilled Shrimp Skewers", cal: "380 Cal", fat: "6g", carbs: "4g", protein: "34g", bestFor: "Lightest full entrée" },
  { item: "Steamed Live Maine Lobster", cal: "440 Cal", fat: "3g (drawn butter adds ~200)", carbs: "0g", protein: "52g", bestFor: "Pure lean shellfish feast" },
  { item: "Walt's Favorite Shrimp", cal: "480 Cal", fat: "20g", carbs: "38g", protein: "24g", bestFor: "Crispy fried favorite" },
  { item: "Wood-Grilled Atlantic Salmon", cal: "620 Cal", fat: "32g", carbs: "2g", protein: "42g", bestFor: "Heart-healthy Omega-3s" },
  { item: "Garlic Shrimp Scampi", cal: "780 Cal", fat: "48g", carbs: "12g", protein: "32g", bestFor: "Garlic butter lover" },
  { item: "Baja Shrimp Power Bowl", cal: "710 Cal", fat: "24g", carbs: "62g", protein: "31g", bestFor: "Wholesome grains & fiber" },
  { item: "Surf & Turf (Steak & Lobster)", cal: "980 Cal", fat: "52g", carbs: "6g", protein: "58g", bestFor: "Protein powerhouse" },
  { item: "Ultimate Feast", cal: "1,180 Cal", fat: "64g", carbs: "42g", protein: "65g", bestFor: "Full seafood extravaganza" },
  { item: "Shrimp Linguini Alfredo", cal: "1,340 Cal", fat: "76g", carbs: "112g", protein: "44g", bestFor: "Rich creamy comfort" },
];

export default function NutritionCaloriesPage() {
  return (
    <div>
      <FAQSchema id="nutrition-faq-schema" faqs={nutritionFaqs} />

      <HeroSection
        title="Red Lobster Menu Nutrition & Calories"
        subtitle="Make smart, informed dining choices with our complete 2026 calorie counts, macronutrient breakdowns, low-calorie favorites, and keto recommendations."
        ctaText="View Allergen Guide"
        ctaLink="/nutrition-allergen-guide"
        backgroundImage="/hero-section.webp"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8 text-xs text-gray-500 flex items-center gap-2">
          <Link href="/" className="hover:text-[#7c1d27]">Home</Link>
          <span>/</span>
          <span className="text-gray-900 font-semibold">Red Lobster Menu Nutrition &amp; Calories</span>
        </nav>

        {/* ── OVERVIEW STATS ──────────────────────────────────── */}
        <section className="mb-14">
          <div className="text-center mb-8">
            <span className="text-[#7c1d27] text-xs font-bold uppercase tracking-widest bg-red-50 px-3 py-1 rounded-full">
              2026 Dietary Data
            </span>
            <h2 className="text-2xl md:text-4xl font-black text-gray-900 mt-2 mb-3">
              Red Lobster Menu Calories &amp; Macronutrient Guide
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              Whether you are counting calories, following a low-carb keto lifestyle, or aiming to hit high protein goals, here is everything you need to navigate the Red Lobster menu.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { label: "Lowest Calorie", val: "40 Cal", sub: "Steamed Broccoli" },
              { label: "Leanest Entrée", val: "380 Cal", sub: "Grilled Shrimp Skewers" },
              { label: "Cheddar Biscuit", val: "150 Cal", sub: "8g fat, 16g carbs each" },
              { label: "Highest Protein", val: "65g+", sub: "Ultimate Feast" },
            ].map((box) => (
              <div key={box.label} className="bg-white p-5 rounded-2xl border border-gray-200 text-center shadow-sm">
                <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">{box.label}</span>
                <div className="text-xl md:text-2xl font-black text-gray-900 mt-1">{box.val}</div>
                <span className="text-[11px] text-[#7c1d27] font-semibold">{box.sub}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── LOW-CALORIE STRUCTURED CARDS ────────────────────── */}
        <section className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-gray-200 mb-8 gap-3">
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-gray-900">
                Top Low-Calorie &amp; High-Protein Red Lobster Dishes
              </h2>
              <p className="text-xs md:text-sm text-gray-500 mt-1">
                Delicious entrées and starters clocking in under 650 calories with high nutritional density.
              </p>
            </div>
            <span className="bg-emerald-700 text-white text-xs font-bold px-3 py-1.5 rounded-full w-fit">
              Healthy Picks
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {lowCalItems.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
        </section>

        {/* ── COMPREHENSIVE NUTRITION & CALORIE TABLE ──────────── */}
        <section className="mb-16">
          <div className="mb-4 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-black text-gray-900">
              Red Lobster Menu 2026 — Comprehensive Calorie &amp; Macro Table
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Estimated calorie counts, fat, carbs, protein, and health highlights across popular items.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm bg-white">
            <table className="w-full text-left text-sm border-collapse min-w-[640px]">
              <thead>
                <tr className="bg-[#7c1d27] text-white">
                  <th scope="col" className="py-3.5 px-4 font-bold">Item Name</th>
                  <th scope="col" className="py-3.5 px-4 font-bold text-center">Calories</th>
                  <th scope="col" className="py-3.5 px-4 font-bold text-center">Fat</th>
                  <th scope="col" className="py-3.5 px-4 font-bold text-center">Carbs</th>
                  <th scope="col" className="py-3.5 px-4 font-bold text-center">Protein</th>
                  <th scope="col" className="py-3.5 px-4 font-bold">Best For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {nutritionTableData.map((row, index) => (
                  <tr
                    key={row.item}
                    className={index % 2 === 0 ? "bg-white hover:bg-red-50/40 transition-colors" : "bg-gray-50/70 hover:bg-red-50/40 transition-colors"}
                  >
                    <td className="py-3.5 px-4 font-bold text-gray-900">{row.item}</td>
                    <td className="py-3.5 px-4 text-center font-bold text-[#7c1d27]">{row.cal}</td>
                    <td className="py-3.5 px-4 text-center text-gray-600">{row.fat}</td>
                    <td className="py-3.5 px-4 text-center text-gray-600">{row.carbs}</td>
                    <td className="py-3.5 px-4 text-center text-emerald-700 font-semibold">{row.protein}</td>
                    <td className="py-3.5 px-4 text-xs text-gray-500">{row.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[11px] text-gray-400 mt-2 text-right">
            * Calorie data is estimated based on standard recipe preparations without additional butter or dressing sauces.
          </p>
        </section>

        {/* ── KETO & HEALTHY ORDERING TIPS ─────────────────────── */}
        <section className="mb-16 bg-white p-6 md:p-8 rounded-3xl border border-gray-200 shadow-sm">
          <h2 className="text-2xl font-black text-gray-900 mb-3 text-center md:text-left">
            How to Order Healthy &amp; Keto at Red Lobster
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="p-5 bg-amber-50/70 rounded-2xl border border-amber-200">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-2 py-0.5 rounded">
                Keto / Low-Carb
              </span>
              <h3 className="font-bold text-gray-900 text-base mt-2 mb-1">Stick to Steamed &amp; Grilled</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Order Live Maine Lobster, Snow Crab Legs, or Grilled Salmon. Substitute high-carb fries or pasta with steamed broccoli or a garden salad with oil and vinegar.
              </p>
            </div>

            <div className="p-5 bg-emerald-50/70 rounded-2xl border border-emerald-200">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                Watch the Sodium
              </span>
              <h3 className="font-bold text-gray-900 text-base mt-2 mb-1">Ask for &ldquo;No Extra Salt&rdquo;</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Seafood naturally contains sodium, and restaurant seasoning rubs add more. Request your fish or chicken grilled &ldquo;without seasoning butter&rdquo; for lower sodium intake.
              </p>
            </div>

            <div className="p-5 bg-blue-50/70 rounded-2xl border border-blue-200">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-800 bg-blue-100 px-2 py-0.5 rounded">
                The Biscuit Budget
              </span>
              <h3 className="font-bold text-gray-900 text-base mt-2 mb-1">150 Calories per Biscuit</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Cheddar Bay Biscuits are irresistibly delicious. Plan ahead: eating 3 biscuits adds 450 calories and 24g of fat to your meal before your entrée arrives!
              </p>
            </div>
          </div>
        </section>

        {/* ── NUTRITION FAQS ──────────────────────────────────── */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">
              Frequently Asked Questions About Red Lobster Nutrition &amp; Calories
            </h2>
            <p className="text-gray-500 text-sm max-w-xl mx-auto">
              Answers regarding calorie calculations, dietary customizations, and healthy dining.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {nutritionFaqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-2 text-base">{faq.question}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── INTERLINKS ──────────────────────────────────────── */}
        <MenuInterlink currentPage="/nutrition-calories" />
      </div>
    </div>
  );
}
