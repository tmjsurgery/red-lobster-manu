import SectionHeader from "@/components/ui/SectionHeader";
import Link from "next/link";
import Script from "next/script";
import HeroSection from "@/components/ui/HeroSection";
import FAQSchema from "@/components/seo/FAQSchema";
import MenuInterlink from "@/components/layout/MenuInterlink";

export const metadata = {
  title: "Red Lobster Menu: Allergen & Nutrition Guide 2026",
  description:
    "Complete Red Lobster menu allergen and nutrition guide for 2026. Find gluten-free options, calorie counts, shellfish cross-contact warnings, and safe dining tips.",
  alternates: {
    canonical: "/nutrition-allergen-guide",
  },
  openGraph: {
    title: "Red Lobster Menu: Allergen & Nutrition Guide 2026",
    description: "Complete Red Lobster menu allergen and nutrition guide for 2026. Find gluten-free options and calorie counts.",
    url: "https://redlobstermenu.site/nutrition-allergen-guide",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Red Lobster Menu: Allergen & Nutrition Guide 2026",
    description: "Complete Red Lobster menu allergen and nutrition guide for 2026.",
  }
};

const allergens = [
  {
    name: "Shellfish",
    icon: "🦞",
    color: "bg-red-50 border-red-200",
    headerColor: "text-red-800",
    highRisk: ["Snow Crab Legs", "Walt's Favorite Shrimp", "Lobster Tail dishes", "Garlic Shrimp Scampi", "Coconut Shrimp", "Shrimp Linguini Alfredo", "Endless Shrimp"],
    note: "Cross-contact risk is EXTREMELY high at Red Lobster - seafood is the kitchen's primary ingredient.",
  },
  {
    name: "Gluten / Wheat",
    icon: "",
    color: "bg-amber-50 border-amber-200",
    headerColor: "text-amber-800",
    highRisk: ["Cheddar Bay Biscuits", "All pasta dishes", "Coconut Shrimp (breaded)", "Fish & Chips (beer-battered)", "Crispy Calamari", "Lobster Flatbread", "Most soups"],
    note: "Avoid all fried, breaded, and pasta items. No gluten-free kitchen certification exists.",
  },
  {
    name: "Dairy",
    icon: "",
    color: "bg-blue-50 border-blue-200",
    headerColor: "text-blue-800",
    highRisk: ["Shrimp Linguini Alfredo", "Cheddar Bay Biscuits", "Crab Queso", "Drawn butter dishes", "Mac & Cheese (kids)", "Most cream-based sauces"],
    note: "Most signature sauces include butter or cream. Request plain preparations if dairy-sensitive.",
  },
  {
    name: "Eggs",
    icon: "",
    color: "bg-yellow-50 border-yellow-200",
    headerColor: "text-yellow-800",
    highRisk: ["Fried/breaded coatings", "Caesar salad dressing", "Tartar sauce", "Coleslaw dressing", "Aioli-based sauces"],
    note: "Eggs are common in dressings, sauces, and fried coatings - always ask.",
  },
  {
    name: "Fish (Finfish)",
    icon: "",
    color: "bg-cyan-50 border-cyan-200",
    headerColor: "text-cyan-800",
    highRisk: ["Salmon dishes", "Crispy Cod Sandwich", "Fish & Chips", "Flounder", "Mahi-Mahi (seasonal)", "Caesar dressing (anchovies)"],
    note: "Cross-contact via shared fryers and grills means even non-fish dishes may be contaminated.",
  },
  {
    name: "Soy",
    icon: "",
    color: "bg-green-50 border-green-200",
    headerColor: "text-green-800",
    highRisk: ["All fried items (soybean oil blend)", "Certain marinades", "Edamame (in bowls)", "Some sauces"],
    note: "Per FDA rules, highly-refined soybean oil used in frying is allergen-label exempt. Still verify if sensitive.",
  },
  {
    name: "Peanuts",
    icon: "",
    color: "bg-orange-50 border-orange-200",
    headerColor: "text-orange-800",
    highRisk: ["Possible in select desserts", "Cross-contact in shared kitchen"],
    note: "Peanuts have low prevalence on the standard menu but cross-contact in a shared kitchen is always possible.",
  },
  {
    name: "Tree Nuts",
    icon: "",
    color: "bg-stone-50 border-stone-200",
    headerColor: "text-stone-800",
    highRisk: ["Select desserts", "Pecan-crusted fish (seasonal)", "Cashews in Kung Pao Noodles bowl"],
    note: "Always ask your server about specific seasonal dishes that may include pecan or other nut preparations.",
  },
];

const glutenFreeItems = [
  { name: "Steamed Live Maine Lobster", note: "Plain prep - no seasoning or drawn butter" },
  { name: "Snow Crab Legs (Plain)", note: "Steamed only - verify no sauces added" },
  { name: "Chilled Shrimp Cocktail", note: "Verify cocktail sauce ingredients with server" },
  { name: "Grilled Fish Fillets", note: "Request plain - no marinade" },
  { name: "Baked Potato (Plain)", note: "No butter, no toppings" },
  { name: "Steamed Broccoli / Vegetables", note: "Request plain - no butter sauce" },
];

export default function AllergenMenuPage() {
  return (
    <div>
      <HeroSection 
        title="Red Lobster Allergen Menu & Nutrition Guide" 
        subtitle="A comprehensive guide to the 8 major allergens at Red Lobster, including gluten-free options, high-risk items, and how to dine safely."
        ctaText="View Menu"
        ctaLink="/menu"
        backgroundImage="/hero-section.webp"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Critical Warning */}
        <div className="bg-red-50 border-2 border-red-300 rounded-2xl p-6 mb-12 flex gap-4 items-start">
          <span className="text-3xl"></span>
          <div>
            <h2 className="font-black text-red-800 text-xl mb-2">Critical Disclaimer</h2>
            <p className="text-red-700 text-sm leading-relaxed">
              <strong>Red Lobster CANNOT guarantee any menu item is allergen-free.</strong> All items are handcrafted
              in kitchens that use shared cooking surfaces, shared fryers, and shared prep stations. Cross-contact
              is possible for ALL allergens. If you have a severe allergy or Celiac disease, please speak directly
              with a manager before ordering.
            </p>
          </div>
        </div>

        {/* 8 Allergens */}
        <SectionHeader title="The 8 Major Allergens" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {allergens.map((allergen) => (
            <div
              key={allergen.name}
              className={`rounded-2xl border p-6 ${allergen.color}`}
            >
              <h3 className={`font-black text-xl mb-1 flex items-center gap-2 ${allergen.headerColor}`}>
                <span>{allergen.icon}</span> {allergen.name}
              </h3>
              <p className="text-gray-600 text-xs italic mb-3">{allergen.note}</p>
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                High-Risk Items:
              </p>
              <ul className="space-y-1">
                {allergen.highRisk.map((item) => (
                  <li key={item} className="text-sm text-gray-700 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Gluten-Free Guide */}
        <SectionHeader title="Items Without Gluten-Containing Ingredients" />
        <p className="text-center text-gray-500 mb-6 -mt-4 text-sm max-w-2xl mx-auto">
           Red Lobster does NOT have a certified gluten-free kitchen. These items have no gluten ingredients
          but carry cross-contact risk.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {glutenFreeItems.map((item) => (
            <div
              key={item.name}
              className="bg-green-50 border border-green-200 rounded-xl p-5"
            >
              <h4 className="font-bold text-green-800 mb-1">{item.name}</h4>
              <p className="text-green-700 text-xs">{item.note}</p>
            </div>
          ))}
        </div>

        {/* Tips */}
        <SectionHeader title="5 Tips for Dining Safely" />
        <div className="space-y-4 mb-12">
          {[
            { num: "1", tip: "Tell your server about your allergy immediately upon seating - before you look at the menu." },
            { num: "2", tip: "Ask to speak with the manager for severe allergies (Celiac disease, anaphylactic shellfish allergy)." },
            { num: "3", tip: "Request the physical Allergen Guide booklet from your server - it is available in all restaurants." },
            { num: "4", tip: 'For plain preparations, ask for items "steamed with no seasoning" and "no drawn butter" to minimize risk.' },
            { num: "5", tip: "Download the official Red Lobster Allergen Guide PDF at redlobster.com (footer → Nutritional Info)." },
          ].map((item) => (
            <div key={item.num} className="flex items-start gap-4 bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
              <div className="w-8 h-8 rounded-full bg-[#7c1d27] text-white font-black flex items-center justify-center flex-shrink-0 text-sm">
                {item.num}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed pt-0.5">{item.tip}</p>
            </div>
          ))}
        </div>

        {/* Official Link */}
        <div className="text-center bg-gray-50 border border-gray-200 rounded-2xl p-8 mb-8">
          <p className="text-gray-600 mb-4">
            For the most up-to-date and accurate allergen information, always check the official source:
          </p>
          <a
            href="https://www.redlobster.com/nutrition"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#7c1d27] text-white font-bold py-3 px-8 rounded-full hover:bg-[#5a131b] transition-colors"
          >
            View Official Red Lobster Nutrition & Allergen Guide →
          </a>
        </div>

        <div className="text-center my-8">
          <Link
            href="/nutrition-calories"
            className="inline-block bg-[#7c1d27] text-white font-bold py-3 px-8 rounded-full hover:bg-[#5a131b] transition-colors shadow-md text-sm"
          >
            Explore Complete Red Lobster Calorie &amp; Macro Guide &rarr;
          </Link>
        </div>

        <MenuInterlink currentPage="/nutrition-allergen-guide" />
      </div>
    </div>
  );
}
