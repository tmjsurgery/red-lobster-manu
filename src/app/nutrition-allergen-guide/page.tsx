import Link from "next/link";
import HeroSection from "@/components/ui/HeroSection";
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
    color: "bg-red-50/60 border-red-200",
    headerColor: "text-red-900",
    highRisk: ["Snow Crab Legs", "Walt's Favorite Shrimp", "Lobster Tail dishes", "Garlic Shrimp Scampi", "Coconut Shrimp", "Shrimp Linguini Alfredo", "Endless Shrimp"],
    note: "Cross-contact risk is EXTREMELY high at Red Lobster - seafood is the kitchen's primary ingredient.",
  },
  {
    name: "Gluten / Wheat",
    icon: "🌾",
    color: "bg-amber-50/60 border-amber-200",
    headerColor: "text-amber-900",
    highRisk: ["Cheddar Bay Biscuits", "All pasta dishes", "Coconut Shrimp (breaded)", "Fish & Chips (beer-battered)", "Crispy Calamari", "Lobster Flatbread", "Most soups"],
    note: "Avoid all fried, breaded, and pasta items. No gluten-free kitchen certification exists.",
  },
  {
    name: "Dairy",
    icon: "🥛",
    color: "bg-blue-50/60 border-blue-200",
    headerColor: "text-blue-900",
    highRisk: ["Shrimp Linguini Alfredo", "Cheddar Bay Biscuits", "Crab Queso", "Drawn butter dishes", "Mac & Cheese (kids)", "Most cream-based sauces"],
    note: "Most signature sauces include butter or cream. Request plain preparations if dairy-sensitive.",
  },
  {
    name: "Eggs",
    icon: "🍳",
    color: "bg-yellow-50/60 border-yellow-200",
    headerColor: "text-yellow-900",
    highRisk: ["Fried/breaded coatings", "Caesar salad dressing", "Tartar sauce", "Coleslaw dressing", "Aioli-based sauces"],
    note: "Eggs are common in dressings, sauces, and fried coatings - always ask.",
  },
  {
    name: "Fish (Finfish)",
    icon: "🐟",
    color: "bg-cyan-50/60 border-cyan-200",
    headerColor: "text-cyan-900",
    highRisk: ["Salmon dishes", "Crispy Cod Sandwich", "Fish & Chips", "Flounder", "Mahi-Mahi (seasonal)", "Caesar dressing (anchovies)"],
    note: "Cross-contact via shared fryers and grills means even non-fish dishes may be contaminated.",
  },
  {
    name: "Soy",
    icon: "🌱",
    color: "bg-emerald-50/60 border-emerald-200",
    headerColor: "text-emerald-900",
    highRisk: ["All fried items (soybean oil blend)", "Certain marinades", "Edamame (in bowls)", "Some sauces"],
    note: "Per FDA rules, highly-refined soybean oil used in frying is allergen-label exempt. Still verify if sensitive.",
  },
  {
    name: "Peanuts",
    icon: "🥜",
    color: "bg-orange-50/60 border-orange-200",
    headerColor: "text-orange-900",
    highRisk: ["Possible in select desserts", "Cross-contact in shared kitchen"],
    note: "Peanuts have low prevalence on the standard menu but cross-contact in a shared kitchen is always possible.",
  },
  {
    name: "Tree Nuts",
    icon: "🌰",
    color: "bg-stone-50/80 border-stone-200",
    headerColor: "text-stone-900",
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
    <div className="bg-[#F8FAFC]">
      <HeroSection 
        title="Red Lobster Allergen & Diet Guide 2026" 
        subtitle="A comprehensive guide to the 8 major food allergens at Red Lobster, including gluten-sensitive choices, high-risk items, and essential safety tips."
        badge="Health & Diet Directory • 2026 Edition"
        ctaText="View Calorie Counts"
        ctaLink="/nutrition-calories"
        secondaryCtaText="Full Menu"
        secondaryCtaLink="/menu"
        backgroundImage="/hero-section.webp"
        stats={[
          { label: "Major Allergens", value: "8 Tracked", sub: "FDA major allergens" },
          { label: "Shellfish Risk", value: "High", sub: "Shared kitchen surfaces" },
          { label: "Gluten Kitchen", value: "Not Certified", sub: "Cross-contact possible" },
          { label: "Safe Picks", value: "Steamed Seafood", sub: "Ask for plain prep" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-4 text-xs text-gray-500 flex items-center gap-2">
          <Link href="/" className="hover:text-[#B33A3A] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#B33A3A] font-bold">Red Lobster Allergen &amp; Diet Guide 2026</span>
        </nav>

        {/* ── RESEARCH BYLINE & VERIFICATION BAR ───────────────── */}
        <div className="research-meta-bar mb-6 flex justify-between items-center">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-bold text-gray-800">By Food Safety &amp; Allergen Team</span>
            <span className="text-gray-400">|</span>
            <span>2026 FDA Allergen Cross-Contact Review</span>
            <span className="text-gray-400">|</span>
            <span className="text-emerald-700 font-semibold flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
              Verified Against Official Restaurant Disclosures
            </span>
          </div>
          <span className="text-xs text-gray-400 hidden sm:inline">
            Consumer Safety Notice
          </span>
        </div>

        {/* Critical Warning */}
        <div className="callout-box mb-12 border-l-4 border-l-red-600">
          <div className="flex items-start gap-4">
            <span className="text-3xl flex-shrink-0">⚠️</span>
            <div>
              <h2 className="font-black text-gray-900 text-lg mb-1">Critical Allergy Disclaimer</h2>
              <p className="text-gray-700 text-sm leading-relaxed">
                <strong>Red Lobster CANNOT guarantee any menu item is allergen-free.</strong> All items are handcrafted
                in kitchens that use shared cooking surfaces, shared fryers, and shared prep stations. Cross-contact
                is possible for ALL allergens. If you have a severe allergy or Celiac disease, please speak directly
                with a manager before ordering.
              </p>
            </div>
          </div>
        </div>

        {/* 8 Allergens */}
        <section className="mb-16">
          <div className="text-center mb-8 max-w-3xl mx-auto">
            <h2 className="section-pill-banner">
              The 8 Major Food Allergens at Red Lobster
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Understand the specific risks, ingredients, and dishes associated with each major food allergen group.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {allergens.map((allergen) => (
              <div
                key={allergen.name}
                className={`lobster-card rounded-2xl border p-6 ${allergen.color} shadow-sm`}
              >
                <h3 className={`font-black text-xl mb-1 flex items-center gap-2 ${allergen.headerColor}`}>
                  <span>{allergen.icon}</span> {allergen.name}
                </h3>
                <p className="text-gray-600 text-xs italic mb-3">{allergen.note}</p>
                <p className="text-xs font-black uppercase tracking-wider text-gray-500 mb-2">
                  High-Risk Dishes:
                </p>
                <ul className="space-y-1">
                  {allergen.highRisk.map((item) => (
                    <li key={item} className="text-xs sm:text-sm text-gray-700 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Gluten-Free Guide */}
        <section className="mb-16">
          <div className="text-center mb-8 max-w-3xl mx-auto">
            <h2 className="section-pill-banner">
              Items Without Gluten-Containing Ingredients
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Red Lobster does NOT have a certified gluten-free kitchen. These items have no gluten ingredients but carry cross-contact risk.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {glutenFreeItems.map((item) => (
              <div
                key={item.name}
                className="lobster-card bg-white border border-[#EAD9D9] rounded-2xl p-5 shadow-sm"
              >
                <h4 className="font-extrabold text-emerald-800 text-base mb-1">{item.name}</h4>
                <p className="text-gray-600 text-xs leading-relaxed">{item.note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tips */}
        <section className="mb-16">
          <div className="text-center mb-8 max-w-3xl mx-auto">
            <h2 className="section-pill-banner text-lg sm:text-2xl">
              5 Essential Tips for Dining Safely at Red Lobster
            </h2>
          </div>

          <div className="space-y-4 mb-12 max-w-3xl mx-auto">
            {[
              { num: "1", tip: "Tell your server about your allergy immediately upon seating — before you even look at the menu." },
              { num: "2", tip: "Ask to speak directly with the kitchen manager for severe allergies (Celiac disease, anaphylactic shellfish allergy)." },
              { num: "3", tip: "Request the physical Allergen Guide booklet from your server — it is maintained in every restaurant." },
              { num: "4", tip: 'For plain preparations, specify "steamed with no seasoning" and "no drawn butter" to minimize cross-contact.' },
              { num: "5", tip: "Download the official Red Lobster Allergen Guide PDF directly on redlobster.com prior to your visit." },
            ].map((item) => (
              <div key={item.num} className="lobster-card flex items-start gap-4 bg-white border border-[#EAD9D9] rounded-2xl p-5 shadow-sm">
                <div className="w-8 h-8 rounded-full bg-[#B33A3A] text-white font-black flex items-center justify-center flex-shrink-0 text-sm shadow-sm">
                  {item.num}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed pt-1">{item.tip}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Official Link */}
        <div className="callout-box text-center mb-12 max-w-2xl mx-auto">
          <p className="text-gray-600 text-sm mb-4">
            For the most up-to-date and legally certified allergen matrix, always consult the official source:
          </p>
          <a
            href="https://www.redlobster.com/nutrition"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#B33A3A] hover:bg-[#992F2F] text-white font-extrabold text-xs uppercase tracking-wider py-3.5 px-8 rounded-full transition-colors shadow-md"
          >
            View Official Red Lobster Nutrition &amp; Allergen PDF →
          </a>
        </div>

        <MenuInterlink currentPage="/nutrition-allergen-guide" />
      </div>
    </div>
  );
}
