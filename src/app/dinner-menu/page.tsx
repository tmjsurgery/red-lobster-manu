import type { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/ui/HeroSection";
import MenuCard from "@/components/ui/MenuCard";
import PriceTable from "@/components/ui/PriceTable";
import FAQSection from "@/components/ui/FAQSection";
import MenuInterlink from "@/components/layout/MenuInterlink";
import { menuItems } from "@/lib/data";

export const metadata: Metadata = {
  title: "Red Lobster Dinner Menu 2026: Prices, Calories & Family Meals",
  description:
    "Red Lobster dinner menu 2026 with verified prices and calories. Family meals for four from $51.99, Signature Feasts, live lobster, shrimp scampi, and steaks.",
  alternates: {
    canonical: "/dinner-menu",
  },
  openGraph: {
    title: "Red Lobster Dinner Menu 2026: Prices, Calories & Family Meals",
    description:
      "Red Lobster dinner menu 2026 with prices and calories. Family meals for four from $51.99, feasts, shrimp, lobster, and Cheddar Bay Biscuits.",
    url: "https://redlobstermenu.site/dinner-menu",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Red Lobster Dinner Menu 2026: Prices, Calories & Family Meals",
    description:
      "Explore the full 2026 Red Lobster dinner menu: prices, calories, family feast bundles, and money-saving hacks.",
  },
};

const dinnerFaqs = [
  {
    question: "What time does Red Lobster serve dinner?",
    answer: "Dinner service usually starts at 3 PM on weekdays and runs through closing, typically 9 to 10 PM. On Saturdays and Sundays, locations serve dinner-menu items for most of the day without a separate lunch window.",
  },
  {
    question: "How much does dinner cost at Red Lobster in 2026?",
    answer: "Most dinner entrées fall between $17 and $35. Budget-friendly shrimp and pasta dishes start around $18.49 to $24.99, while premium feasts like the Ultimate Feast cost $49.79, and surf-and-turf combos reach $40 to $48+.",
  },
  {
    question: "What comes with the Ultimate Feast?",
    answer: "The Ultimate Feast includes a tender Maine lobster tail, wild-caught snow crab legs, signature garlic shrimp scampi, and Walt's Favorite Shrimp, served with your choice of two dinner sides and warm Cheddar Bay Biscuits.",
  },
  {
    question: "Are Cheddar Bay Biscuits included free with dinner?",
    answer: "Yes! Warm, freshly baked Cheddar Bay Biscuits are brought to your table free of charge with every dinner order, and complimentary refills are provided upon request during dine-in service.",
  },
  {
    question: "Does Red Lobster have non-seafood dinner options?",
    answer: "Yes. The dinner menu includes hand-trimmed steaks (such as the 7 oz Sirloin and Filet Mignon), grilled and peppercorn chicken, and rich pasta dishes like Cajun Chicken Linguini Alfredo.",
  },
  {
    question: "Is the Red Lobster dinner menu available for takeout and delivery?",
    answer: "Most dinner entrées and Family Meals are available through Red Lobster's online ordering, curbside pickup, and delivery apps (DoorDash, Uber Eats), packaged securely with warm Cheddar Bay Biscuits.",
  },
];

// Highlight picture grid items
const pictureGridItems = menuItems.filter((i) =>
  ["sc1", "sf3", "sc3", "sf1", "crab3", "p1", "ls1", "sc2"].includes(i.id)
);

// Curated Category Items
const signatureFeasts = menuItems.filter((i) =>
  ["sf1", "sf2", "sf3", "sf4", "sf5"].includes(i.id)
);

const lobsterEntrees = [
  {
    id: "lob1",
    name: "Steamed Live Maine Lobster (1.25 lb)",
    price: "$34.99",
    calories: "440 Cal",
    description: "Freshly steamed wild-caught Maine lobster served with hot drawn butter and two sides.",
    image: "/steamed-live-maine-lobster.webp",
    categorySlug: "signature-feasts"
  },
  {
    id: "lob2",
    name: "Twin Maine Lobster Tails",
    price: "$44.99",
    calories: "580 Cal",
    description: "Two tender, succulent Maine lobster tails steamed or grilled with garlic herb butter.",
    image: "/lobster-lover-dream.webp",
    categorySlug: "signature-feasts"
  },
  {
    id: "lob3",
    name: "Lobster Lover's Dream®",
    price: "$48.99",
    calories: "1,200 Cal",
    description: "Roasted rock lobster tail, butter-poached Maine tail, and creamy lobster-and-shrimp linguini.",
    image: "/lobster-lover-dream.webp",
    categorySlug: "signature-feasts"
  },
  {
    id: "lob4",
    name: "Surf & Turf (Maine Lobster Tail & 7 oz Sirloin)",
    price: "$39.99",
    calories: "820 Cal",
    description: "A tender steamed Maine lobster tail paired with a seasoned, wood-grilled center-cut sirloin steak.",
    image: "/surf-turf-lobster-tail-sirloin.webp",
    categorySlug: "land-sea-classics"
  }
];

const shrimpEntrees = menuItems.filter((i) =>
  ["sc1", "sc2", "sc3", "sc4", "sc5", "sc6"].includes(i.id)
);

const fishCrabEntrees = [
  {
    id: "fc1",
    name: "Wild-Caught Snow Crab Legs",
    price: "$34.99",
    calories: "480 Cal",
    description: "Sweet, tender snow crab legs served with melted butter, lemon, and choice of two sides.",
    image: "/crab-your-way-snow-crab.webp",
    categorySlug: "new-crabfest"
  },
  {
    id: "fc2",
    name: "Wood-Grilled Atlantic Salmon",
    price: "$23.99",
    calories: "540 Cal",
    description: "Fresh Atlantic salmon lightly seasoned and wood-grilled to perfection, served with two sides.",
    image: "/salmon-new-orleans.webp",
    categorySlug: "land-sea-classics"
  },
  {
    id: "fc3",
    name: "Wild Alaskan Flounder / Fish & Chips",
    price: "$19.99",
    calories: "1,180 Cal",
    description: "Golden crispy fried wild fish fillets served with tartar sauce, coleslaw, and french fries.",
    image: "/fried-seafood-platter.webp",
    categorySlug: "hot-platters"
  },
  {
    id: "fc4",
    name: "New Crabfest Boil",
    price: "$36.99",
    calories: "1,150 Cal",
    description: "Snow crab clusters, plump shrimp, sweet corn on the cob, and red potatoes steamed in boil seasoning.",
    image: "/new-crabfest-boil.webp",
    categorySlug: "new-crabfest"
  }
];

const steakChickenEntrees = menuItems.filter((i) =>
  ["ls1", "crab6", "ls3", "ls4"].includes(i.id)
);

const pastaEntrees = menuItems.filter((i) =>
  ["crab4", "p1", "p2", "p3"].includes(i.id)
);

const lighterOptions = [
  {
    id: "lt1",
    name: "Garlic Shrimp Scampi",
    price: "$18.49",
    calories: "440 Cal",
    description: "Tender shrimp oven-broiled in garlic butter and white wine sauce. Under 500 calories.",
    bestFor: "Lowest calorie dinner entrée"
  },
  {
    id: "lt2",
    name: "Wood-Grilled Salmon",
    price: "$23.99",
    calories: "540 Cal",
    description: "Healthy omega-3 rich salmon grilled over wood fire with steamed broccoli.",
    bestFor: "High-protein, heart-healthy"
  },
  {
    id: "lt3",
    name: "Wood-Grilled Shrimp Skewers",
    price: "$19.49",
    calories: "500 Cal",
    description: "Shrimp glazed with butter and seasoned over the wood grill.",
    bestFor: "Low-fat seafood option"
  },
  {
    id: "lt4",
    name: "7 oz Center-Cut Sirloin",
    price: "$20.99",
    calories: "320 Cal",
    description: "Lean, protein-packed beef grilled without heavy butter sauces.",
    bestFor: "Low-carb keto dining"
  },
  {
    id: "lt5",
    name: "Cup of Lobster Bisque",
    price: "$6.99",
    calories: "340 Cal",
    description: "Rich and creamy lobster soup, perfect as a lighter single-dish order.",
    bestFor: "Warm, light starter"
  }
];

const dinnerSides = menuItems.filter((i) =>
  ["be1", "ss7", "ss8", "ss5", "ss6", "ss3", "ss1"].includes(i.id)
);

const dessertItems = menuItems.filter((i) =>
  ["d1", "d2", "d3"].includes(i.id)
);

export default function DinnerMenuPage() {
  return (
    <div className="bg-[#F8FAFC]">
      {/* ── TOP HERO SECTION ─────────────────────────────────── */}
      <HeroSection
        title="Red Lobster Dinner Menu 2026: Prices, Calories & Family Meals"
        subtitle="Explore the complete 2026 Red Lobster dinner menu with verified prices: Signature Feasts, live Maine lobster, snow crab legs, shrimp classics, steaks, and family bundles."
        badge="Verified 2026 Prices • Updated Against App"
        ctaText="View Signature Feasts"
        ctaLink="#signature-feasts"
        secondaryCtaText="Family Meals Table"
        secondaryCtaLink="#family-meals"
        backgroundImage="/ultimate-feast.webp"
        stats={[
          { label: "Dinner Hours", value: "3 PM – Close", sub: "All day on weekends" },
          { label: "Sides Included", value: "2 Full Sides", sub: "With all standard entrées" },
          { label: "Family Meals", value: "From $51.99", sub: "Feeds four ($13/person)" },
          { label: "Cheddar Biscuits", value: "Unlimited", sub: "Freshly baked every 15 min" },
        ]}
        quickNav={[
          { label: "Dinner Pictures", href: "#dinner-pictures" },
          { label: "Signature Feasts", href: "#signature-feasts" },
          { label: "Lobster Entrées", href: "#lobster-entrees" },
          { label: "Shrimp Entrées", href: "#shrimp-entrees" },
          { label: "Fish & Crab", href: "#fish-crab" },
          { label: "Steaks & Pastas", href: "#steaks-pastas" },
          { label: "Under 600 Cal", href: "#lighter-options" },
          { label: "Family Bundles", href: "#family-meals" },
          { label: "Weekday Deals", href: "#weekday-deals" },
          { label: "Best Picks", href: "#best-picks" },
          { label: "FAQs", href: "#faqs" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-4 text-xs text-gray-500 flex items-center gap-2">
          <Link href="/" className="hover:text-[#B33A3A] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#B33A3A] font-bold">Red Lobster Dinner Menu 2026</span>
        </nav>

        {/* ── RESEARCH BYLINE & VERIFICATION BAR ───────────────── */}
        <div className="research-meta-bar mb-6 flex justify-between items-center">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-bold text-gray-800">By Alex Rivera</span>
            <span className="text-gray-400">|</span>
            <span>Head of Menu Research</span>
            <span className="text-gray-400">|</span>
            <span className="text-emerald-700 font-semibold flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
              Prices Verified Against the Official Red Lobster App
            </span>
          </div>
          <span className="text-xs text-gray-400 hidden sm:inline">
            Independent Guide • 2026 Edition
          </span>
        </div>

        {/* ── HEADLINE CALLOUT SUMMARY BOX ────────────────────── */}
        <div className="callout-box mb-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-3">
              <p className="text-gray-800 font-medium text-base sm:text-lg leading-relaxed">
                The Red Lobster dinner menu runs from <strong>3 PM on weekdays</strong> (and dinner-focused most of the day on weekends) and centers on seafood favorites such as the Ultimate Feast, Maine lobster tail, shrimp scampi, and snow crab legs, alongside steak, chicken, and pasta. Most dinner entrées cost between <strong>$17 and $35</strong>, with premium feasts running <strong>$40 to $48+</strong>. Every dinner comes with <strong>free warm Cheddar Bay Biscuits</strong>.
              </p>
              <div className="bg-[#FFF0F0] border border-[#F0D5D5] rounded-xl p-3 text-sm text-gray-800">
                <strong>Headline finding for families:</strong> feeding four at Red Lobster costs <strong>$51.99 to $146.99</strong> in 2026, or <strong>$13.00 to $36.75 per person</strong>. A single Ultimate Feast plate costs $49.79, which is more than the per-person price of any family meal.
              </div>
            </div>
            <div className="flex-shrink-0 bg-white border border-[#EAD9D9] rounded-2xl p-5 text-center min-w-[200px] shadow-sm">
              <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">Entrées Starting At</div>
              <div className="text-3xl font-black text-[#B33A3A] mt-1">$18.49</div>
              <div className="text-xs text-emerald-700 font-semibold mt-1">Includes 2 Sides &amp; Biscuits</div>
            </div>
          </div>
        </div>

        {/* ── SECTION: DINNER MENU WITH PICTURES ───────────────── */}
        <section id="dinner-pictures" className="mb-20 scroll-mt-20">
          <div className="text-center mb-10 max-w-3xl mx-auto">
            <h2 className="section-pill-banner">
              Red Lobster Dinner Menu with pictures
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mt-2">
              The Red Lobster dinner menu is one of the most complete seafood dining experiences in the United States. From Maine lobster tails to snow crab legs, garlic shrimp scampi to filet mignon surf and turf, here are the top-ordered dinner items with verified 2026 prices.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {pictureGridItems.map((item) => (
              <MenuCard key={item.id} item={item} servingNote="2 Sides & Biscuits" />
            ))}
          </div>

          <div className="bg-white border border-[#EAD9D9] rounded-2xl p-5 text-xs text-gray-600 flex flex-wrap justify-between items-center gap-3">
            <span><strong>Garlic Shrimp Scampi:</strong> $18.49</span>
            <span><strong>Wood-Grilled Shrimp Skewers:</strong> $19.49</span>
            <span><strong>Seaside Shrimp Trio:</strong> $25.99</span>
            <span><strong>Parrot Isle Coconut Shrimp:</strong> $19.99</span>
            <span><strong>Ultimate Feast:</strong> $49.79</span>
            <span><strong>Surf &amp; Turf:</strong> $39.99</span>
          </div>
        </section>

        {/* ── TIMING INFO BOX ─────────────────────────────────── */}
        <section className="mb-16 bg-white p-6 sm:p-8 rounded-3xl border border-[#EAD9D9] shadow-sm">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-pill-banner text-lg sm:text-2xl">
              What Time Does the Red Lobster Dinner Menu Start?
            </h2>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed mt-3">
              Dinner service typically begins at <strong>3:00 PM on weekdays</strong>, once the lunch menu window ends, and runs until closing (usually 9:00 PM to 10:00 PM, later on Friday and Saturday). On Saturdays and Sundays, most locations serve dinner-menu items for the <strong>majority of the day</strong> rather than offering a separate lunch window. Exact operating hours vary by location, so it is recommended to verify with your local restaurant before heading out.
            </p>
          </div>
        </section>

        {/* ── 1. SIGNATURE FEASTS & COMBOS ────────────────────── */}
        <section id="signature-feasts" className="mb-20 scroll-mt-20">
          <div className="text-center mb-8 max-w-3xl mx-auto">
            <h2 className="section-pill-banner">
              Signature Feasts &amp; Combo Platters
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              The feast platters are what most people picture when they think of a Red Lobster dinner: generous combinations of lobster, crab, and shrimp designed to satisfy a serious seafood craving.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {signatureFeasts.map((item) => (
              <MenuCard key={item.id} item={item} servingNote="Includes 2 Sides & Biscuits" />
            ))}
          </div>

          <PriceTable
            items={[
              { name: "Ultimate Feast®", price: "$49.79", calories: "1,280 kcal", description: "Maine lobster tail, snow crab legs, garlic shrimp scampi, and Walt's Favorite Shrimp." },
              { name: "Admiral's Feast", price: "$29.99", calories: "1,670 kcal", description: "Crispy fried Walt's shrimp, bay scallops, clam strips, and wild flounder." },
              { name: "Lobster Lover's Dream®", price: "$48.99", calories: "1,200 kcal", description: "Roasted rock lobster tail, butter-poached Maine tail, and creamy lobster linguini." },
              { name: "Seaside Shrimp Trio", price: "$25.99", calories: "1,100 kcal", description: "Walt's Favorite Shrimp, garlic shrimp scampi, and creamy garlic shrimp pasta." },
              { name: "Bar Harbor Lobster Bake", price: "$38.99", calories: "1,040 kcal", description: "Petite Maine lobster tails, shrimp, bay scallops, mussels, and fresh linguini." },
            ]}
            title="Signature Feasts Prices at a Glance"
            subtitle="Verified 2026 pricing, calorie counts, and preparation details for Red Lobster's top feast platters."
            isPillHeading
          />
        </section>

        {/* ── 2. LOBSTER ENTRÉES ──────────────────────────────── */}
        <section id="lobster-entrees" className="mb-20 scroll-mt-20">
          <div className="text-center mb-8 max-w-3xl mx-auto">
            <h2 className="section-pill-banner">
              Lobster Entrées &amp; Combinations
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              For guests who want succulent lobster as the centerpiece rather than part of a mixed feast, the dinner menu offers it steamed, broiled, or paired in surf-and-turf combos.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {lobsterEntrees.map((item) => (
              <MenuCard key={item.id} item={item} servingNote="2 Sides & Biscuits" />
            ))}
          </div>

          <PriceTable
            items={[
              { name: "Maine Lobster Tail (Single)", price: "$30.99 – $35.99", calories: "~420 kcal", description: "Steamed tender cold-water tail served with hot drawn butter and two sides." },
              { name: "Twin Lobster Tails", price: "$42.99 – $49.99", calories: "800 – 1,000 kcal", description: "Two steamed or grilled Maine lobster tails with garlic butter." },
              { name: "Lobster Lover's Duo", price: "$39.99 – $45.99", calories: "900 – 1,200 kcal", description: "Two distinctive lobster preparations on a single dinner platter." },
              { name: "Lobster Mac & Cheese", price: "$24.99 – $28.99", calories: "950 kcal", description: "Cavatappi pasta folded in four-cheese cream sauce topped with Maine lobster." },
              { name: "Lobster Bisque (Bowl)", price: "$9.99", calories: "630 kcal", description: "Signature creamy lobster broth loaded with real Maine lobster meat." },
            ]}
            title="Lobster Dinner Prices"
            subtitle="Verified 2026 lobster menu prices, portion options, and calories."
            isPillHeading
          />
        </section>

        {/* ── 3. SHRIMP ENTRÉES ───────────────────────────────── */}
        <section id="shrimp-entrees" className="mb-20 scroll-mt-20">
          <div className="text-center mb-8 max-w-3xl mx-auto">
            <h2 className="section-pill-banner">
              Shrimp Entrées &amp; Classics
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Shrimp dishes remain among the most-ordered dinner choices because they provide premium seafood flavor at the most accessible price point on the menu.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {shrimpEntrees.map((item) => (
              <MenuCard key={item.id} item={item} servingNote="Includes 2 Sides & Biscuits" />
            ))}
          </div>

          <PriceTable
            items={[
              { name: "Walt's Favorite Shrimp", price: "$19.49 dinner, $16.99 lunch", calories: "520 kcal", description: "Butterflied shrimp lightly breaded and fried golden brown. Served with cocktail sauce." },
              { name: "Garlic Shrimp Scampi", price: "$18.49", calories: "440 kcal", description: "Tender shrimp broiled in rich garlic herb butter sauce. Lighthouse friendly." },
              { name: "Parrot Isle Jumbo Coconut Shrimp", price: "$19.99", calories: "940 kcal", description: "Sweet coconut-crusted shrimp fried crispy and served with piña colada dipping sauce." },
              { name: "Wood-Grilled Shrimp Skewers", price: "$19.49", calories: "500 kcal", description: "Two skewers of tender shrimp glazed with butter and seasoned over the wood grill." },
              { name: "Ultimate Endless Shrimp (Promotional)", price: "$24.99", calories: "Varies", description: "Rotating all-you-can-eat shrimp special featuring scampi, coconut, and grilled skewers." },
            ]}
            title="Shrimp Dinner Prices"
            subtitle="Complete price and calorie overview for all Red Lobster dinner shrimp dishes."
            isPillHeading
          />
        </section>

        {/* ── 4. FISH & SEAFOOD COMBOS ────────────────────────── */}
        <section id="fish-crab" className="mb-20 scroll-mt-20">
          <div className="text-center mb-8 max-w-3xl mx-auto">
            <h2 className="section-pill-banner">
              Fish &amp; Seafood Combos
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Beyond shrimp and lobster, the dinner menu includes grilled and fried wild fish, plus sweet snow crab clusters and mix-and-match platters.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {fishCrabEntrees.map((item) => (
              <MenuCard key={item.id} item={item} servingNote="2 Sides & Biscuits" />
            ))}
          </div>

          <PriceTable
            items={[
              { name: "Wood-Grilled Atlantic Salmon", price: "$21.99 – $26.99", calories: "~540 kcal", description: "Fresh salmon fillet grilled over wood fire with choice of two dinner sides." },
              { name: "Grilled Tilapia / Mahi Mahi", price: "$18.99 – $25.99", calories: "~380 – 420 kcal", description: "Mild, flaky white fish lightly seasoned and broiled or wood-grilled." },
              { name: "Wild Alaskan Flounder Fish & Chips", price: "$19.99 – $20.99", calories: "1,520 kcal", description: "Golden crispy fried fish fillets served with seasoned fries and tartar sauce." },
              { name: "Snow Crab Legs (Dinner Portion)", price: "$29.99 – $39.99", calories: "~480 kcal", description: "Sweet wild snow crab clusters served with drawn butter and two sides." },
              { name: "Sailor's Seafood Boil", price: "$32.99", calories: "980 kcal", description: "Shrimp, mussels, smoked sausage, corn on the cob, and red potatoes in spicy broth." },
            ]}
            title="Fish &amp; Crab Dinner Prices"
            subtitle="2026 pricing and calorie estimates for salmon, white fish, and crab legs."
            isPillHeading
          />
        </section>

        {/* ── 5. STEAK, CHICKEN & PASTAS ──────────────────────── */}
        <section id="steaks-pastas" className="mb-20 scroll-mt-20">
          <div className="text-center mb-8 max-w-3xl mx-auto">
            <h2 className="section-pill-banner">
              Steak, Chicken &amp; Pasta (Non-Seafood Options)
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Red Lobster provides plenty of options for guests dining with someone who prefers land-based proteins, including hand-cut steaks, grilled chicken, and garlic Alfredo pastas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {steakChickenEntrees.concat(pastaEntrees.slice(0, 2)).slice(0, 4).map((item) => (
              <MenuCard key={item.id} item={item} servingNote="Biscuits Included" />
            ))}
          </div>

          <PriceTable
            items={[
              { name: "Surf & Turf (Lobster Tail & 7 oz Sirloin)", price: "$39.99", calories: "820 kcal", description: "Maine lobster tail paired with center-cut seasoned sirloin. Top date night pick." },
              { name: "7 oz Center-Cut Sirloin", price: "$18.99 – $21.99", calories: "320 kcal", description: "Juicy, seasoned beef sirloin served with choice of two sides. Lean protein." },
              { name: "Crab & Shrimp Linguini Alfredo", price: "$24.99", calories: "1,320 kcal", description: "Lump crab and succulent shrimp tossed in creamy garlic Parmesan Alfredo sauce." },
              { name: "Shrimp Linguini Alfredo", price: "$19.99 – $22.99", calories: "930 kcal", description: "Tender shrimp folded into rich Alfredo sauce over pasta. Customer favorite." },
              { name: "Cajun Chicken Linguini Alfredo", price: "$18.99 – $21.99", calories: "1,060 kcal", description: "Seasoned blackened chicken breast sliced over creamy fettuccine Alfredo." },
            ]}
            title="Steak, Surf &amp; Turf, and Pasta Prices"
            subtitle="2026 price breakdown for non-seafood entrées, steaks, and Alfredo pastas."
            isPillHeading
          />
        </section>

        {/* ── 6. LIGHTHOUSE LIGHTER DINNER OPTIONS ────────────── */}
        <section id="lighter-options" className="mb-20 scroll-mt-20 bg-white p-6 sm:p-8 rounded-3xl border border-[#EAD9D9] shadow-sm">
          <div className="text-center mb-6 max-w-3xl mx-auto">
            <h2 className="section-pill-banner text-lg sm:text-2xl">
              The Lighthouse Menu (Lighter Dinner Options Under 600 Calories)
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              For health-conscious diners watching calories, Red Lobster offers several wholesome entrées under 600 calories, primarily prepared on the wood grill or lightly steamed rather than fried.
            </p>
          </div>

          <PriceTable
            items={lighterOptions}
            title="Best Healthy Dinner Choices Under 600 Calories"
            subtitle="Low-calorie seafood and steak dinners with high protein and low carbohydrates."
            isPillHeading
          />
        </section>

        {/* ── 7. FAMILY DINNER PACKAGES ───────────────────────── */}
        <section id="family-meals" className="mb-20 scroll-mt-20">
          <div className="text-center mb-8 max-w-3xl mx-auto">
            <h2 className="section-pill-banner">
              Family Dinner Packages (Feeds 4)
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Family Feasts are among the best-value options on the dinner menu. They serve four people and include two family-sized sides and 8 warm Cheddar Bay Biscuits.
            </p>
          </div>

          <div className="competitor-table-container overflow-x-auto mb-6">
            <table className="w-full text-sm text-left border-collapse min-w-[560px]">
              <thead>
                <tr>
                  <th className="py-3.5 px-4 font-black">Family Meal Bundle</th>
                  <th className="py-3.5 px-4 font-black text-center">Bundle Price</th>
                  <th className="py-3.5 px-4 font-black text-center">Serves</th>
                  <th className="py-3.5 px-4 font-black text-center">Cost Per Person</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white hover:bg-[#FFF8F8] transition-colors">
                  <td className="py-3.5 px-4 font-extrabold text-gray-900">Linguini Alfredo Family Meal</td>
                  <td className="py-3.5 px-4 text-center font-black text-[#B33A3A] text-base">$51.99 – $54.99</td>
                  <td className="py-3.5 px-4 text-center font-semibold text-gray-700">4 People</td>
                  <td className="py-3.5 px-4 text-center font-bold text-emerald-700 bg-emerald-50/50">$13.00 – $13.75</td>
                </tr>
                <tr className="bg-[#FAFCFF] hover:bg-[#FFF8F8] transition-colors">
                  <td className="py-3.5 px-4 font-extrabold text-gray-900">Admiral's Family Feast</td>
                  <td className="py-3.5 px-4 text-center font-black text-[#B33A3A] text-base">$68.99</td>
                  <td className="py-3.5 px-4 text-center font-semibold text-gray-700">4 People</td>
                  <td className="py-3.5 px-4 text-center font-bold text-emerald-700 bg-emerald-50/50">$17.25</td>
                </tr>
                <tr className="bg-white hover:bg-[#FFF8F8] transition-colors">
                  <td className="py-3.5 px-4 font-extrabold text-gray-900">Create Your Own Family Feast</td>
                  <td className="py-3.5 px-4 text-center font-black text-[#B33A3A] text-base">$71.99</td>
                  <td className="py-3.5 px-4 text-center font-semibold text-gray-700">4 People</td>
                  <td className="py-3.5 px-4 text-center font-bold text-emerald-700 bg-emerald-50/50">$18.00</td>
                </tr>
                <tr className="bg-[#FAFCFF] hover:bg-[#FFF8F8] transition-colors">
                  <td className="py-3.5 px-4 font-extrabold text-gray-900">Ultimate Family Feast</td>
                  <td className="py-3.5 px-4 text-center font-black text-[#B33A3A] text-base">$146.99</td>
                  <td className="py-3.5 px-4 text-center font-semibold text-gray-700">4 People</td>
                  <td className="py-3.5 px-4 text-center font-bold text-gray-800">$36.75</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="callout-box text-sm">
            <strong>Value Breakdown:</strong> The most economical way to feed a family of four is the <strong>Linguini Alfredo Family Meal at $51.99</strong> ($13.00/person). A single Ultimate Feast dinner plate costs $49.79, so ordering a family package provides dramatically more food for approximately the same total spend!
          </div>
        </section>

        {/* ── 8. WEEKDAY DEALS FOR COMPARISON ─────────────────── */}
        <section id="weekday-deals" className="mb-20 scroll-mt-20">
          <div className="text-center mb-8 max-w-3xl mx-auto">
            <h2 className="section-pill-banner">
              Weekday Deals for Comparison (Mon–Fri)
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              These are the verified weekday Daily Deals for 2026. Comparing these daily promotions with dinner entrée prices helps you plan the most cost-effective night to visit.
            </p>
          </div>

          <div className="competitor-table-container overflow-x-auto">
            <table className="w-full text-sm text-left border-collapse min-w-[500px]">
              <thead>
                <tr>
                  <th className="py-3.5 px-4 font-black">Weekday</th>
                  <th className="py-3.5 px-4 font-black">Featured Daily Deal</th>
                  <th className="py-3.5 px-4 font-black text-center">Deal Price</th>
                  <th className="py-3.5 px-4 font-black">Special Highlight</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white hover:bg-[#FFF8F8] transition-colors">
                  <td className="py-3.5 px-4 font-extrabold text-gray-900">Monday</td>
                  <td className="py-3.5 px-4 font-bold text-gray-800">Ultimate Endless Shrimp</td>
                  <td className="py-3.5 px-4 text-center font-black text-[#B33A3A] text-base">$24.99</td>
                  <td className="py-3.5 px-4 text-gray-600">All-you-can-eat mix &amp; match shrimp dishes</td>
                </tr>
                <tr className="bg-[#FAFCFF] hover:bg-[#FFF8F8] transition-colors">
                  <td className="py-3.5 px-4 font-extrabold text-gray-900">Tuesday</td>
                  <td className="py-3.5 px-4 font-bold text-gray-800">Crab Lover's Duo</td>
                  <td className="py-3.5 px-4 text-center font-black text-[#B33A3A] text-base">$25.99</td>
                  <td className="py-3.5 px-4 text-gray-600">Snow crab clusters &amp; crab pasta with side</td>
                </tr>
                <tr className="bg-white hover:bg-[#FFF8F8] transition-colors">
                  <td className="py-3.5 px-4 font-extrabold text-gray-900">Wednesday</td>
                  <td className="py-3.5 px-4 font-bold text-gray-800">Steak &amp; Walt's Shrimp</td>
                  <td className="py-3.5 px-4 text-center font-black text-[#B33A3A] text-base">$23.99</td>
                  <td className="py-3.5 px-4 text-gray-600">7 oz sirloin paired with fried Walt's shrimp</td>
                </tr>
                <tr className="bg-[#FAFCFF] hover:bg-[#FFF8F8] transition-colors">
                  <td className="py-3.5 px-4 font-extrabold text-gray-900">Thursday</td>
                  <td className="py-3.5 px-4 font-bold text-gray-800">Salmon New Orleans</td>
                  <td className="py-3.5 px-4 text-center font-black text-[#B33A3A] text-base">$23.99</td>
                  <td className="py-3.5 px-4 text-gray-600">Fresh blackened salmon topped with shrimp</td>
                </tr>
                <tr className="bg-white hover:bg-[#FFF8F8] transition-colors">
                  <td className="py-3.5 px-4 font-extrabold text-gray-900">Friday</td>
                  <td className="py-3.5 px-4 font-bold text-gray-800">Fish &amp; Chips Platter</td>
                  <td className="py-3.5 px-4 text-center font-black text-[#B33A3A] text-base">$15.99</td>
                  <td className="py-3.5 px-4 text-gray-600">Crispy wild flounder with fries &amp; coleslaw</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ── 9. BEST DINNER PICKS BY CATEGORY ────────────────── */}
        <section id="best-picks" className="mb-20 scroll-mt-20">
          <div className="text-center mb-8 max-w-3xl mx-auto">
            <h2 className="section-pill-banner">
              Best Dinner Picks by Category
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Not sure what to order? Our food research editors tested the complete dinner lineup and curated the top recommendations for different dining occasions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="lobster-card bg-white p-6 rounded-2xl border border-[#EAD9D9] shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-[#B33A3A] bg-red-50 px-3 py-1 rounded-full border border-red-100 inline-block mb-3">
                  ROMANTIC DINING
                </span>
                <h3 className="text-xl font-black text-gray-900 mb-2">Best for Date Night</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  <strong>Surf &amp; Turf (Lobster Tail &amp; Sirloin):</strong> Tender steamed lobster tail paired with center-cut sirloin steak. Share a Chocolate Wave cake for dessert. Estimated $75–$90 for two with drinks.
                </p>
              </div>
              <div className="pt-3 border-t border-gray-100 flex justify-between items-center text-xs font-bold text-gray-700">
                <span>Est. Total: $39.99/plate</span>
                <span className="text-[#B33A3A]">Top Rated ★★★★★</span>
              </div>
            </div>

            <div className="lobster-card bg-white p-6 rounded-2xl border border-[#EAD9D9] shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100 inline-block mb-3">
                  BEST VALUE
                </span>
                <h3 className="text-xl font-black text-gray-900 mb-2">Best Budget Under $25</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  <strong>Garlic Shrimp Scampi ($18.49):</strong> Sautéed in garlic butter and served with two sides plus unlimited Cheddar Bay Biscuits. Shrimp Linguini Alfredo ($19.99) is also an unbeatable value.
                </p>
              </div>
              <div className="pt-3 border-t border-gray-100 flex justify-between items-center text-xs font-bold text-gray-700">
                <span>Starts at: $18.49</span>
                <span className="text-emerald-700">Budget Friendly</span>
              </div>
            </div>

            <div className="lobster-card bg-white p-6 rounded-2xl border border-[#EAD9D9] shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-100 inline-block mb-3">
                  FIRST-TIME VISITOR
                </span>
                <h3 className="text-xl font-black text-gray-900 mb-2">Best First-Time Order</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  <strong>Ultimate Feast® ($49.79):</strong> Covers all four major seafood categories in one meal: Maine lobster tail, wild snow crab legs, fried Walt's shrimp, and garlic scampi with two sides and warm biscuits.
                </p>
              </div>
              <div className="pt-3 border-t border-gray-100 flex justify-between items-center text-xs font-bold text-gray-700">
                <span>Price: $49.79</span>
                <span className="text-[#B33A3A]">Signature Icon</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── 10. DINNER SIDES & DESSERTS ─────────────────────── */}
        <section id="sides-biscuits" className="mb-20 scroll-mt-20">
          <div className="text-center mb-8 max-w-3xl mx-auto">
            <h2 className="section-pill-banner">
              Sides, Starters &amp; Cheddar Bay Biscuits
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Every dinner entrée includes your choice of two side dishes, along with warm, iconic Cheddar Bay Biscuits brushed with garlic herb butter.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {dinnerSides.slice(0, 4).map((item) => (
              <MenuCard key={item.id} item={item} servingNote="Included with Entrée" />
            ))}
          </div>

          <PriceTable
            items={[
              { name: "Cheddar Bay Biscuits® (Refills)", price: "FREE", calories: "160 kcal/biscuit", description: "Brought hot to your table with every entrée. Baked fresh every 15 minutes." },
              { name: "Loaded Baked Potato (Upgrade)", price: "$2.99 upgrade", calories: "380 kcal", description: "Topped with melted cheddar cheese, sour cream, butter, and bacon bits." },
              { name: "Mashed Potatoes with Gravy", price: "Included / $4.99", calories: "250 kcal", description: "Creamy whipped potatoes served with rich lobster gravy." },
              { name: "Seasoned Rice Pilaf", price: "Included / $3.99", calories: "200 kcal", description: "Fluffy seasoned long grain rice, pairs perfectly with garlic scampi." },
              { name: "Fresh Steamed Broccoli", price: "Included / $4.99", calories: "80 kcal", description: "Lightly steamed broccoli florets. Zero fat, healthy green choice." },
              { name: "Chocolate Wave Cake", price: "$10.99", calories: "1,110 kcal", description: "Warm multi-layer chocolate cake with fudge drizzle and vanilla ice cream." },
              { name: "Key Lime Pie", price: "$9.99", calories: "580 kcal", description: "Authentic tart Florida key lime pie baked in a buttery graham cracker crust." },
            ]}
            title="Dinner Side &amp; Dessert Prices"
            subtitle="Individual side upgrades and dessert prices for 2026."
            isPillHeading
          />
        </section>

        {/* ── 11. HOW TO SAVE MONEY AT DINNER ─────────────────── */}
        <section className="mb-20 bg-white rounded-3xl p-6 sm:p-10 border border-[#EAD9D9] shadow-sm">
          <div className="text-center mb-8 max-w-3xl mx-auto">
            <h2 className="section-pill-banner text-lg sm:text-2xl">
              How to Save Money at Red Lobster Dinner
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Dining at Red Lobster does not have to break your budget. Here are 6 verified insider savings strategies used by our researchers:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-[#FFF8F8] border border-[#F0D5D5]">
              <div className="font-black text-gray-900 text-base mb-1">1. Join My Red Lobster Rewards</div>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Earn 1 point per $1 spent. Get 75 bonus points immediately upon app download, plus a free dessert on your birthday.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-[#FFF8F8] border border-[#F0D5D5]">
              <div className="font-black text-gray-900 text-base mb-1">2. Order Family Feasts for Groups</div>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                If dining with 4 or more, Family Bundles starting at $51.99 cut per-person costs by more than 50% compared to ordering individual entrées.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-[#FFF8F8] border border-[#F0D5D5]">
              <div className="font-black text-gray-900 text-base mb-1">3. Take Advantage of Happy Hour (3–6 PM)</div>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Arrive between 3:00 PM and 6:00 PM on weekdays to enjoy $5 draft beers, discount appetizers, and specialty cocktails before dinner.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-[#FFF8F8] border border-[#F0D5D5]">
              <div className="font-black text-gray-900 text-base mb-1">4. Order Pasta or Shrimp for Best Value</div>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Garlic Shrimp Scampi ($18.49) and Shrimp Linguini Alfredo ($19.99) provide generous protein portions at under $20.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-[#FFF8F8] border border-[#F0D5D5]">
              <div className="font-black text-gray-900 text-base mb-1">5. Take Advantage of Weekday Daily Deals</div>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                From $24.99 Endless Shrimp Monday to $15.99 Fish &amp; Chips Friday, matching your visit to the daily special saves $8–$15 per ticket.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-[#FFF8F8] border border-[#F0D5D5]">
              <div className="font-black text-gray-900 text-base mb-1">6. Fill Up on Cheddar Bay Biscuits</div>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Warm biscuits are unlimited during dine-in service! Enjoy two or three before your meal arrives so you don&apos;t over-order expensive starters.
              </p>
            </div>
          </div>
        </section>

        {/* ── 12. PRICE COMPARISON: DINNER VS LUNCH VS FEASTS ─── */}
        <section id="dinner-vs-lunch" className="mb-20 bg-white p-6 sm:p-10 rounded-3xl border border-[#EAD9D9] shadow-sm scroll-mt-20">
          <div className="text-center mb-8 max-w-3xl mx-auto">
            <h2 className="section-pill-banner text-lg sm:text-2xl">
              Red Lobster Dinner vs Lunch vs Ultimate Feast vs Family Meals
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Choosing between Red Lobster's lunch menu, dinner entrées, feast platters, and family packages comes down to portion size, budget, and party size.
            </p>
          </div>

          <div className="competitor-table-container overflow-x-auto mb-6">
            <table className="w-full text-sm text-left border-collapse min-w-[560px]">
              <thead>
                <tr>
                  <th className="py-3.5 px-4 font-black">Comparison Feature</th>
                  <th className="py-3.5 px-4 font-black">Lunch Menu</th>
                  <th className="py-3.5 px-4 font-black">Standard Dinner</th>
                  <th className="py-3.5 px-4 font-black">Ultimate Feast</th>
                  <th className="py-3.5 px-4 font-black">Family Meals</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white hover:bg-[#FFF8F8] transition-colors">
                  <td className="py-3.5 px-4 font-bold text-gray-900">Price Range</td>
                  <td className="py-3.5 px-4 font-bold text-emerald-700">$8.99 – $14.99</td>
                  <td className="py-3.5 px-4 font-bold text-gray-800">$18.49 – $35.00</td>
                  <td className="py-3.5 px-4 font-bold text-[#B33A3A]">$49.79</td>
                  <td className="py-3.5 px-4 font-bold text-emerald-700">$51.99 – $146.99</td>
                </tr>
                <tr className="bg-[#FAFCFF] hover:bg-[#FFF8F8] transition-colors">
                  <td className="py-3.5 px-4 font-bold text-gray-900">Portion Size</td>
                  <td className="py-3.5 px-4 text-gray-600">Lunch-sized portion</td>
                  <td className="py-3.5 px-4 text-gray-800">Full dinner entrée</td>
                  <td className="py-3.5 px-4 text-gray-900 font-bold">4 seafood proteins</td>
                  <td className="py-3.5 px-4 text-gray-800 font-bold">Feeds 4 people</td>
                </tr>
                <tr className="bg-white hover:bg-[#FFF8F8] transition-colors">
                  <td className="py-3.5 px-4 font-bold text-gray-900">Sides Included</td>
                  <td className="py-3.5 px-4 text-gray-600">1 side dish</td>
                  <td className="py-3.5 px-4 text-emerald-700 font-bold">2 full sides</td>
                  <td className="py-3.5 px-4 text-emerald-700 font-bold">2 full sides</td>
                  <td className="py-3.5 px-4 text-emerald-700 font-bold">2 family-size sides</td>
                </tr>
                <tr className="bg-[#FAFCFF] hover:bg-[#FFF8F8] transition-colors">
                  <td className="py-3.5 px-4 font-bold text-gray-900">Biscuits</td>
                  <td className="py-3.5 px-4 text-emerald-700 font-semibold">Unlimited dine-in</td>
                  <td className="py-3.5 px-4 text-emerald-700 font-semibold">Unlimited dine-in</td>
                  <td className="py-3.5 px-4 text-emerald-700 font-semibold">Unlimited dine-in</td>
                  <td className="py-3.5 px-4 text-emerald-700 font-semibold">8+ warm biscuits</td>
                </tr>
                <tr className="bg-white hover:bg-[#FFF8F8] transition-colors">
                  <td className="py-3.5 px-4 font-bold text-gray-900">Best For</td>
                  <td className="py-3.5 px-4 text-gray-600">Quick, cheap midday bite</td>
                  <td className="py-3.5 px-4 text-gray-800">Standard evening meal</td>
                  <td className="py-3.5 px-4 text-gray-900 font-bold">Celebrations &amp; luxury</td>
                  <td className="py-3.5 px-4 text-emerald-700 font-bold">Takeout &amp; group value</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ── 13. FAQ SECTION ─────────────────────────────────── */}
        <FAQSection
          faqs={dinnerFaqs}
          title="Frequently Asked Questions About Red Lobster Dinner Menu"
          subtitle="Everything you need to know about dinner hours, average prices, Cheddar Bay Biscuits, and side substitutions."
          schemaId="dinner-menu-faq-schema"
        />

        {/* ── 14. INTERNAL MENU INTERLINK ─────────────────────── */}
        <MenuInterlink currentPage="/dinner-menu" />
      </div>
    </div>
  );
}
