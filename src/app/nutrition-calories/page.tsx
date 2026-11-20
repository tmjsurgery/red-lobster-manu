import type { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/ui/HeroSection";
import MenuCard from "@/components/ui/MenuCard";
import FAQSection from "@/components/ui/FAQSection";
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
    answer: "Great keto choices include Steamed Live Maine Lobster (0g carbs), Wild-Caught Snow Crab Legs (0g carbs), Wood-Grilled Atlantic Salmon (1g carb), and Grilled Shrimp Skewers, paired with Steamed Broccoli (80 Cal, 4g net carbs) and drawn butter.",
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
  { item: "Steamed Broccoli", cal: "80 Cal", fat: "0g", carbs: "4g", protein: "3g", bestFor: "Zero guilt veggie side" },
  { item: "Garden Salad (no dressing)", cal: "110 Cal", fat: "1g", carbs: "12g", protein: "4g", bestFor: "Crisp low-calorie starter" },
  { item: "Chilled Shrimp Cocktail", cal: "130 Cal", fat: "1.5g", carbs: "8g", protein: "21g", bestFor: "High-protein lean appetizer" },
  { item: "Cheddar Bay Biscuit (1)", cal: "150 Cal", fat: "8g", carbs: "16g", protein: "3g", bestFor: "Iconic buttery indulgence" },
  { item: "Grilled Shrimp (Kids)", cal: "180 Cal", fat: "3g", carbs: "2g", protein: "24g", bestFor: "Light kids protein" },
  { item: "New England Clam Chowder (Cup)", cal: "240 Cal", fat: "14g", carbs: "18g", protein: "8g", bestFor: "Comforting starter" },
  { item: "Grilled Shrimp Skewers", cal: "380 Cal", fat: "6g", carbs: "4g", protein: "34g", bestFor: "Lightest full entrée" },
  { item: "Steamed Live Maine Lobster", cal: "440 Cal", fat: "3g (drawn butter adds ~200)", carbs: "0g", protein: "52g", bestFor: "Pure lean shellfish feast" },
  { item: "Walt's Favorite Shrimp", cal: "520 Cal", fat: "20g", carbs: "38g", protein: "24g", bestFor: "Crispy fried favorite" },
  { item: "Wood-Grilled Atlantic Salmon", cal: "540 Cal", fat: "32g", carbs: "2g", protein: "42g", bestFor: "Heart-healthy Omega-3s" },
  { item: "Garlic Shrimp Scampi", cal: "440 Cal", fat: "28g", carbs: "12g", protein: "32g", bestFor: "Garlic butter lover" },
  { item: "Baja Shrimp Power Bowl", cal: "620 Cal", fat: "24g", carbs: "62g", protein: "31g", bestFor: "Wholesome grains & fiber" },
  { item: "Surf & Turf (Steak & Lobster)", cal: "820 Cal", fat: "52g", carbs: "6g", protein: "58g", bestFor: "Protein powerhouse" },
  { item: "Ultimate Feast", cal: "1,280 Cal", fat: "64g", carbs: "42g", protein: "65g", bestFor: "Full seafood extravaganza" },
  { item: "Shrimp Linguini Alfredo", cal: "1,320 Cal", fat: "76g", carbs: "112g", protein: "44g", bestFor: "Rich creamy comfort" },
];

export default function NutritionCaloriesPage() {
  return (
    <div className="bg-[#F8FAFC]">
      {/* ── TOP HERO SECTION ─────────────────────────────────── */}
      <HeroSection
        title="Red Lobster Menu Nutrition & Calories 2026"
        subtitle="Make smart, informed dining choices with our complete 2026 calorie counts, macronutrient breakdowns, low-calorie favorites, and keto recommendations."
        badge="Official 2026 Nutrition Guide • Macros & Calories"
        ctaText="View Calorie Table"
        ctaLink="#calorie-table"
        secondaryCtaText="Allergen Information"
        secondaryCtaLink="/nutrition-allergen-guide"
        backgroundImage="/hero-section.webp"
        stats={[
          { label: "Lowest Entrée", value: "380 Cal", sub: "Grilled Shrimp Skewers" },
          { label: "1 Cheddar Biscuit", value: "150 Cal", sub: "8g Fat / 16g Carbs" },
          { label: "Highest Protein", value: "65g+", sub: "Ultimate Feast" },
          { label: "Zero Carb Picks", value: "Lobster & Crab", sub: "100% Keto Friendly" },
        ]}
        quickNav={[
          { label: "Calorie Table", href: "#calorie-table" },
          { label: "Healthy Entrées", href: "#healthy-entrees" },
          { label: "FAQs", href: "#faqs" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-4 text-xs text-gray-500 flex items-center gap-2">
          <Link href="/" className="hover:text-[#B33A3A] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#B33A3A] font-bold">Red Lobster Nutrition &amp; Calories 2026</span>
        </nav>

        {/* ── RESEARCH BYLINE & VERIFICATION BAR ───────────────── */}
        <div className="research-meta-bar mb-6 flex justify-between items-center">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-bold text-gray-800">By Dietary &amp; Nutrition Team</span>
            <span className="text-gray-400">|</span>
            <span>2026 Macronutrient &amp; Calorie Audit</span>
            <span className="text-gray-400">|</span>
            <span className="text-emerald-700 font-semibold flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
              Sourced from USDA &amp; Official Nutrition Guidelines
            </span>
          </div>
          <span className="text-xs text-gray-400 hidden sm:inline">
            Healthy Dining Guide
          </span>
        </div>

        {/* ── NUTRITION & CALORIE TABLE ───────────────────────── */}
        <section id="calorie-table" className="mb-20 scroll-mt-20">
          <div className="text-center mb-8 max-w-3xl mx-auto">
            <h2 className="section-pill-banner">
              Red Lobster Calorie &amp; Macro Comparison Table 2026
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Side-by-side calories, fat, net carbs, and protein counts across key Red Lobster dishes.
            </p>
          </div>

          <div className="competitor-table-container overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse min-w-[620px]">
              <thead>
                <tr>
                  <th className="py-3.5 px-4 font-black">Dish / Item</th>
                  <th className="py-3.5 px-4 font-black text-center">Calories</th>
                  <th className="py-3.5 px-4 font-black text-center">Total Fat</th>
                  <th className="py-3.5 px-4 font-black text-center">Carbs</th>
                  <th className="py-3.5 px-4 font-black text-center">Protein</th>
                  <th className="py-3.5 px-4 font-black">Nutritional Highlight</th>
                </tr>
              </thead>
              <tbody>
                {nutritionTableData.map((row, idx) => (
                  <tr key={row.item} className={idx % 2 === 0 ? "bg-white hover:bg-[#FFF8F8] transition-colors" : "bg-[#FAFCFF] hover:bg-[#FFF8F8] transition-colors"}>
                    <td className="py-3.5 px-4 font-extrabold text-gray-900">{row.item}</td>
                    <td className="py-3.5 px-4 text-center font-black text-[#B33A3A] whitespace-nowrap">🔥 {row.cal}</td>
                    <td className="py-3.5 px-4 text-center text-gray-700">{row.fat}</td>
                    <td className="py-3.5 px-4 text-center text-gray-700">{row.carbs}</td>
                    <td className="py-3.5 px-4 text-center font-bold text-emerald-700">{row.protein}</td>
                    <td className="py-3.5 px-4 text-gray-600 text-xs sm:text-sm">{row.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── HEALTHY PICKS UNDER 600 CALORIES ────────────────── */}
        <section id="healthy-entrees" className="mb-20 scroll-mt-20">
          <div className="text-center mb-8 max-w-3xl mx-auto">
            <h2 className="section-pill-banner">
              Best Healthy Red Lobster Entrées Under 600 Calories
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Eating healthy at Red Lobster is simple: choose wood-grilled seafood, steamed shellfish, and crisp vegetable sides.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {lowCalItems.map((item) => (
              <MenuCard key={item.id} item={item} servingNote="Healthy Choice" />
            ))}
          </div>
        </section>

        {/* ── FAQ SECTION ─────────────────────────────────────── */}
        <FAQSection
          faqs={nutritionFaqs}
          title="Frequently Asked Questions About Red Lobster Nutrition"
          subtitle="Detailed answers regarding biscuit calories, keto options, high-protein picks, and allergen considerations."
          schemaId="nutrition-faq-schema"
        />

        {/* ── INTERNAL LINKS ──────────────────────────────────── */}
        <MenuInterlink currentPage="/nutrition-calories" />
      </div>
    </div>
  );
}
