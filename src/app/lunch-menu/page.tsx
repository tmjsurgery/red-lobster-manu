import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import HeroSection from "@/components/ui/HeroSection";
import MenuCard from "@/components/ui/MenuCard";
import PriceTable from "@/components/ui/PriceTable";
import FAQSection from "@/components/ui/FAQSection";
import MenuInterlink from "@/components/layout/MenuInterlink";

export const metadata: Metadata = {
  title: "Red Lobster Lunch Menu: Prices, $10 Specials & Calories 2026",
  description:
    "Complete Red Lobster lunch menu with 2026 prices: $10 lunch specials starting at $8.99, hours 11 AM–3 PM Mon–Fri, power bowls, sandwiches, and calorie guide.",
  alternates: {
    canonical: "/lunch-menu",
  },
  openGraph: {
    title: "Red Lobster Lunch Menu: Prices, $10 Specials & Calories 2026",
    description:
      "Explore the 2026 Red Lobster lunch menu: $10 specials, power bowls, daily deals, lunch hours 11 AM–3 PM, and calorie counts.",
    url: "https://redlobstermenu.site/lunch-menu",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Red Lobster Lunch Menu: Prices, $10 Specials & Calories 2026",
    description: "Full Red Lobster lunch menu with prices, $10 specials, and calories for 2026.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://redlobstermenu.site/lunch-menu",
      url: "https://redlobstermenu.site/lunch-menu",
      name: "Red Lobster Lunch Menu With Prices 2026",
      description:
        "Full Red Lobster lunch menu with prices for 2026. $10 specials, daily deals, lunch hours 11 AM–3 PM, new items, and calorie guide.",
      inLanguage: "en-US",
      isPartOf: { "@id": "https://redlobstermenu.site/" },
    },
    {
      "@type": "Restaurant",
      name: "Red Lobster",
      servesCuisine: "Seafood",
      url: "https://www.redlobster.com",
      openingHours: "Mo-Fr 11:00-15:00",
      priceRange: "$$",
      hasMenu: {
        "@type": "Menu",
        name: "Red Lobster Lunch Menu 2026",
        url: "https://redlobstermenu.site/lunch-menu",
      },
    },
  ],
};

const tenDollarSpecials = [
  { id: "l1", name: "Soup, Salad & Cheddar Bay Biscuits", description: "Choice of warm soup + fresh garden or Caesar salad + 4 warm Cheddar Bay Biscuits.", price: "$8.99", calories: "380 Cal", image: "/endless-soup-salad-biscuits.webp", categorySlug: "lunch-favorites" },
  { id: "l2", name: "Garlic Shrimp Scampi (Lunch)", description: "Tender shrimp sautéed in savory garlic butter served over pasta with choice of one side.", price: "$9.99", calories: "520 Cal", image: "/garlic-shrimp-scampi.webp", categorySlug: "lunch-favorites" },
  { id: "l3", name: "Popcorn Shrimp (Lunch)", description: "Bite-sized shrimp fried golden brown with cocktail sauce and choice of one side dish.", price: "$9.99", calories: "430 Cal", image: "/popcorn-shrimp.webp", categorySlug: "lunch-favorites" },
  { id: "l4", name: "Crispy Cod Sandwich (Lunch)", description: "Hand-battered wild-caught cod, crunchy slaw, and tartar sauce on a toasted brioche bun with fries.", price: "$9.99", calories: "550 Cal", image: "/crispy-cod-sandwich.webp", categorySlug: "lunch-favorites" },
  { id: "l5", name: "Parrot Isle Jumbo Coconut Shrimp (Lunch)", description: "Jumbo shrimp tossed in crispy coconut breading with sweet piña colada dipping sauce.", price: "$10.99", calories: "610 Cal", image: "/parrot-isle-jumbo-coconut-shrimp.webp", categorySlug: "lunch-favorites" },
  { id: "l6", name: "Crispy Clam Strips (Lunch)", description: "Golden-fried clam strips served with tangy tartar sauce, coleslaw, and seasoned fries.", price: "$9.99", calories: "580 Cal", image: "/fried-seafood-platter.webp", categorySlug: "lunch-favorites" },
];

const lunchEntrees = [
  { id: "le1", name: "Walt's Favorite Shrimp (Lunch)", description: "Hand-breaded butterflied shrimp served with cocktail sauce and choice of side dish.", price: "$13.99", calories: "690 Cal", image: "/walts-favorite-shrimp.webp", categorySlug: "lunch-favorites" },
  { id: "le2", name: "Shrimp Linguini Alfredo (Lunch)", description: "Creamy garlic Parmesan Alfredo with sautéed shrimp, lunch-portioned for midday dining.", price: "$14.99", calories: "870 Cal", image: "/shrimp-linguini-alfredo-lunch.webp", categorySlug: "pastas" },
  { id: "le3", name: "Grilled Atlantic Salmon (Lunch)", description: "Freshly wood-grilled Atlantic salmon fillet served with choice of seasoned rice or steamed broccoli.", price: "$13.49", calories: "480 Cal", image: "/grilled-atlantic-salmon.webp", categorySlug: "seafood-entrees" },
  { id: "le4", name: "Fish & Chips (Lunch)", description: "Crispy beer-battered wild cod fillet served with Chesapeake fries and creamy tartar sauce.", price: "$15.99", calories: "820 Cal", image: "/fried-seafood-platter.webp", categorySlug: "lunch-favorites" },
  { id: "le5", name: "Salmon New Orleans (Lunch)", description: "Blackened salmon fillet crowned with shrimp sautéed in Cajun butter sauce and one side.", price: "$20.49", calories: "740 Cal", image: "/salmon-new-orleans.webp", categorySlug: "seafood-entrees" },
  { id: "le6", name: "Caesar Salad with Grilled Shrimp", description: "Crisp romaine lettuce, Parmesan cheese, and garlic croutons topped with grilled shrimp skewers.", price: "$12.49", calories: "460 Cal", image: "/caesar-salad.webp", categorySlug: "soups-sides" },
];

const powerBowlsHandhelds = [
  { id: "pb1", name: "Baja Shrimp Bowl", description: "Seasoned shrimp, avocado, black beans, jalapeño ranch slaw, quinoa rice, and pico de gallo.", price: "$16.99", calories: "620 Cal", image: "/baja-shrimp-bowl.webp", categorySlug: "bowls-sandwiches" },
  { id: "pb2", name: "Sesame-Soy Salmon Bowl", description: "Soy-ginger glazed salmon, crispy Brussels sprouts, quinoa rice, edamame, and sesame vinaigrette.", price: "$17.99", calories: "580 Cal", image: "/sesame-soy-salmon-bowl.webp", categorySlug: "bowls-sandwiches" },
  { id: "pb3", name: "Kung Pao Noodles with Crispy Shrimp", description: "Sweet-spicy noodles with fried shrimp, tender edamame, shredded cabbage, and toasted cashews.", price: "$16.99", calories: "740 Cal", image: "/kung-pao-noodles-with-crispy-shrimp.webp", categorySlug: "pastas" },
  { id: "pb4", name: "Wagyu Bacon Cheeseburger", description: "Half-pound grilled Wagyu patty, Applewood smoked bacon, white cheddar, lettuce, tomato on brioche.", price: "$15.99", calories: "950 Cal", image: "/wagyu-bacon-cheeseburger.webp", categorySlug: "bowls-sandwiches" },
  { id: "pb5", name: "Nashville Hot Chicken Sandwich", description: "Spicy-sweet fried chicken tenders, cooling ranch, lettuce, and banana peppers on toasted brioche.", price: "$13.99", calories: "700 Cal", image: "/nashville-hot-chicken-sandwich.webp", categorySlug: "bowls-sandwiches" },
];

const weekdayDeals = [
  { day: "Monday", deal: "Endless Shrimp (Seasonal)", price: "$20.99", note: "Mix & match garlic scampi, Walt's, and coconut shrimp" },
  { day: "Tuesday", deal: "Linguini Alfredo Deal", price: "$14.99", note: "Shrimp or Cajun Chicken Alfredo + unlimited biscuits" },
  { day: "Wednesday", deal: "Steak & Lobster Pairing", price: "$24.99", note: "7 oz center-cut sirloin + tender Maine lobster tail" },
  { day: "Thursday", deal: "Lobster & Shrimp Scampi", price: "$19.99", note: "Maine lobster tail + skillet of garlic shrimp scampi" },
  { day: "Friday", deal: "Fish & Chips Friday", price: "$15.99", note: "Beer-battered cod + fries + creamy slaw" },
];

const lunchFaqs = [
  {
    question: "What are the official Red Lobster lunch hours in 2026?",
    answer: "Red Lobster lunch is officially served Monday through Friday from 11:00 AM to 3:00 PM at most U.S. restaurants. On Saturdays and Sundays, dinner menu pricing is served all day at the majority of locations.",
  },
  {
    question: "What is included on the Red Lobster $10 lunch menu?",
    answer: "The $10 lunch specials include Soup, Salad & Cheddar Bay Biscuits ($8.99), Garlic Shrimp Scampi ($9.99), Popcorn Shrimp ($9.99), Crispy Cod Sandwich ($9.99), Crispy Clam Strips ($9.99), and Parrot Isle Coconut Shrimp ($10.99). All lunch entrées include your choice of a side and unlimited Cheddar Bay Biscuits.",
  },
  {
    question: "How much cheaper is lunch than dinner at Red Lobster?",
    answer: "Dining during lunch saves between 20% and 35% compared to dinner. For example, Garlic Shrimp Scampi is $9.99–$13.99 at lunch versus $18.49 at dinner, saving $5 to $9 per person.",
  },
  {
    question: "Are Cheddar Bay Biscuits included with lunch entrées?",
    answer: "Yes! All dine-in lunch entrées come with warm, unlimited Cheddar Bay Biscuits baked fresh every 15 minutes. To-go lunch orders include 2 to 4 biscuits per entrée.",
  },
  {
    question: "Can I order dinner items during lunch hours?",
    answer: "Yes, the full dinner menu — including the Ultimate Feast, Live Maine Lobster, and Crabfest Boils — is available to order during lunch hours at standard dinner pricing.",
  },
];

export default function LunchMenuPage() {
  return (
    <div className="bg-[#F8FAFC]">
      <Script id="lunch-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── TOP HERO SECTION ─────────────────────────────────── */}
      <HeroSection
        title="Red Lobster Lunch Menu & Prices 2026"
        subtitle="Enjoy quick, satisfying midday meals starting at just $8.99. Browse $10 lunch specials, fresh seafood power bowls, crispy sandwiches, and verified lunch hours."
        badge="Official 2026 Lunch Guide • Verified Weekday Prices"
        ctaText="View $10 Lunch Specials"
        ctaLink="#ten-dollar-specials"
        secondaryCtaText="Check Lunch Hours"
        secondaryCtaLink="#lunch-hours"
        backgroundImage="/shrimp-linguini-alfredo-lunch.webp"
        stats={[
          { label: "Lunch Hours", value: "11 AM – 3 PM", sub: "Monday through Friday" },
          { label: "Starting Price", value: "$8.99", sub: "Soup, Salad & Biscuits" },
          { label: "$10 Specials", value: "6 Dishes", sub: "Under $11 every weekday" },
          { label: "Cheddar Biscuits", value: "Unlimited", sub: "Included with dine-in" },
        ]}
        quickNav={[
          { label: "$10 Specials", href: "#ten-dollar-specials" },
          { label: "Classic Lunch", href: "#classic-lunch" },
          { label: "Bowls & Sandwiches", href: "#bowls-sandwiches" },
          { label: "Daily Deals", href: "#weekday-deals" },
          { label: "Lunch Hours", href: "#lunch-hours" },
          { label: "FAQs", href: "#faqs" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-4 text-xs text-gray-500 flex items-center gap-2">
          <Link href="/" className="hover:text-[#B33A3A] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#B33A3A] font-bold">Red Lobster Lunch Menu 2026</span>
        </nav>

        {/* ── RESEARCH BYLINE & VERIFICATION BAR ───────────────── */}
        <div className="research-meta-bar mb-6 flex justify-between items-center">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-bold text-gray-800">By Menu Research Team</span>
            <span className="text-gray-400">|</span>
            <span>Weekday Midday Dining Guide</span>
            <span className="text-gray-400">|</span>
            <span className="text-emerald-700 font-semibold flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
              Prices Verified Against the Official Red Lobster App
            </span>
          </div>
          <span className="text-xs text-gray-400 hidden sm:inline">
            Mon–Fri 11 AM – 3 PM
          </span>
        </div>

        {/* ── HOURS & VALUE CALLOUT BOX ────────────────────────── */}
        <div id="lunch-hours" className="callout-box mb-12 scroll-mt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2 space-y-2">
              <span className="category-pill text-xs uppercase tracking-wider mb-2">
                HOURS &amp; AVAILABILITY
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
                When Is the Lunch Menu Served?
              </h2>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                The Red Lobster lunch menu runs <strong>Monday through Friday from 11:00 AM to 3:00 PM</strong> at participating locations across the United States. Guests enjoy prompt service tailored for workday lunch breaks, lunch-proportioned entrées, one included side, and unlimited warm Cheddar Bay Biscuits.
              </p>
            </div>
            <div className="bg-white border border-[#EAD9D9] rounded-2xl p-5 text-center shadow-sm">
              <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">Average Lunch Savings</div>
              <div className="text-3xl font-black text-[#B33A3A] mt-1">20% – 35%</div>
              <div className="text-xs text-emerald-700 font-semibold mt-1">vs. evening dinner pricing</div>
            </div>
          </div>
        </div>

        {/* ── CATEGORY 1: $10 LUNCH SPECIALS ──────────────────── */}
        <section id="ten-dollar-specials" className="mb-20 scroll-mt-20">
          <div className="text-center mb-8 max-w-3xl mx-auto">
            <h2 className="section-pill-banner">
              Red Lobster $10 Lunch Specials (Starting $8.99)
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Available Monday through Friday until 3:00 PM. Each meal includes your choice of side and unlimited Cheddar Bay Biscuits.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {tenDollarSpecials.map((item) => (
              <MenuCard key={item.id} item={item} servingNote="1 Side + Biscuits" />
            ))}
          </div>

          <PriceTable
            items={tenDollarSpecials}
            title="$10 Lunch Specials Price Table"
            subtitle="Verified 2026 pricing and calorie counts for Red Lobster's famous weekday $10 specials."
            isPillHeading
          />
        </section>

        {/* ── CATEGORY 2: CLASSIC LUNCH ENTRÉES ───────────────── */}
        <section id="classic-lunch" className="mb-20 scroll-mt-20">
          <div className="text-center mb-8 max-w-3xl mx-auto">
            <h2 className="section-pill-banner">
              Classic Lunch Seafood Entrées
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Generous midday portions of hand-breaded shrimp, grilled Atlantic salmon, beer-battered fish &amp; chips, and rich Alfredo pastas.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {lunchEntrees.map((item) => (
              <MenuCard key={item.id} item={item} servingNote="1 Side + Biscuits" />
            ))}
          </div>

          <PriceTable
            items={lunchEntrees}
            title="Classic Lunch Entrée Prices"
            subtitle="Overview of midday favorites, calories, and prices for shrimp, salmon, and pasta dishes."
            isPillHeading
          />
        </section>

        {/* ── CATEGORY 3: BOWLS & HANDHELDS ───────────────────── */}
        <section id="bowls-sandwiches" className="mb-20 scroll-mt-20">
          <div className="text-center mb-8 max-w-3xl mx-auto">
            <h2 className="section-pill-banner">
              Power Bowls &amp; Handheld Sandwiches
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Nutritious quinoa bowls packed with fresh vegetables, premium Wagyu bacon cheeseburgers, spicy Nashville chicken, and sweet-spicy noodles.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {powerBowlsHandhelds.map((item) => (
              <MenuCard key={item.id} item={item} servingNote="Dine-In • Takeout" />
            ))}
          </div>

          <PriceTable
            items={powerBowlsHandhelds}
            title="Bowls &amp; Handhelds Price Table"
            subtitle="Price breakdown for modern bowls, artisan burgers, and specialty sandwiches."
            isPillHeading
          />
        </section>

        {/* ── WEEKDAY DAILY DEALS AT LUNCH ────────────────────── */}
        <section id="weekday-deals" className="mb-20 scroll-mt-20">
          <div className="text-center mb-8 max-w-3xl mx-auto">
            <h2 className="section-pill-banner">
              Weekday Daily Deals Available All Day
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Red Lobster&apos;s celebrated Daily Deals are honored during both lunch and dinner hours on their designated weekdays.
            </p>
          </div>

          <div className="competitor-table-container overflow-x-auto">
            <table className="w-full text-sm text-left border-collapse min-w-[500px]">
              <thead>
                <tr>
                  <th className="py-3.5 px-4 font-black">Day of Week</th>
                  <th className="py-3.5 px-4 font-black">Daily Special Dish</th>
                  <th className="py-3.5 px-4 font-black text-center">2026 Price</th>
                  <th className="py-3.5 px-4 font-black">Included Perks</th>
                </tr>
              </thead>
              <tbody>
                {weekdayDeals.map((d, idx) => (
                  <tr key={d.day} className={idx % 2 === 0 ? "bg-white hover:bg-[#FFF8F8] transition-colors" : "bg-[#FAFCFF] hover:bg-[#FFF8F8] transition-colors"}>
                    <td className="py-3.5 px-4 font-extrabold text-gray-900">{d.day}</td>
                    <td className="py-3.5 px-4 font-bold text-[#B33A3A]">{d.deal}</td>
                    <td className="py-3.5 px-4 text-center font-black text-gray-900">{d.price}</td>
                    <td className="py-3.5 px-4 text-gray-600">{d.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── FAQ SECTION ─────────────────────────────────────── */}
        <FAQSection
          faqs={lunchFaqs}
          title="Frequently Asked Questions About Red Lobster Lunch"
          subtitle="Answers to common questions about lunch hours, $10 specials, biscuit allowances, and takeout orders."
          schemaId="lunch-menu-faq-schema"
        />

        {/* ── INTERNAL LINKS ──────────────────────────────────── */}
        <MenuInterlink currentPage="/lunch-menu" />
      </div>
    </div>
  );
}
