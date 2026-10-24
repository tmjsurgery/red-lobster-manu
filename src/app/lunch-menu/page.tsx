import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import HeroSection from "@/components/ui/HeroSection";
import MenuInterlink from "@/components/layout/MenuInterlink";

// ─── SEO Metadata ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Red Lobster Menu: Lunch Prices, $10 Specials & Calories 2026",
  description:
    "Complete Red Lobster menu lunch prices for 2026. Explore $10 lunch specials, hours 11 AM–3 PM, calorie counts, daily deals, and discounts. Updated for 2026.",
  keywords: [
    "Red Lobster lunch menu",
    "Red Lobster lunch menu with prices",
    "Red Lobster $10 lunch specials",
    "Red Lobster $15 specials",
    "Red Lobster lunch hours",
    "Red Lobster daily deals",
    "Red Lobster lunch 2026",
    "Red Lobster lunch specials",
  ],
  alternates: {
    canonical: "/lunch-menu",
  },
  openGraph: {
    title: "Red Lobster Lunch Menu With Prices 2026 – $10 Specials & Daily Deals",
    description:
      "Complete Red Lobster lunch guide: $10 specials starting at $8.99, verified daily deals, lunch hours, new 2026 items, and calories. Updated for 2026.",
    url: "https://redlobstermenu.site/lunch-menu",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Red Lobster Lunch Menu With Prices 2026",
    description: "Full Red Lobster lunch menu with prices 2026.",
  }
};

// ─── JSON-LD Schema ───────────────────────────────────────────────────────────
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
      datePublished: "2026-05-07",
      dateModified: "2026-07-31",
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
        hasMenuSection: [
          {
            "@type": "MenuSection",
            name: "$10 Lunch Specials",
            hasMenuItem: [
              {
                "@type": "MenuItem",
                name: "Garlic Shrimp Scampi",
                description: "Bite-sized shrimp fried golden brown with cocktail sauce and choice of side.",
                offers: { "@type": "Offer", price: "9.99", priceCurrency: "USD" },
                nutrition: { "@type": "NutritionInformation", calories: "430 calories" },
              },
              {
                "@type": "MenuItem",
                name: "Crispy Cod Sandwich",
                description: "Hand-battered wild-caught cod, crunchy slaw, tartar sauce on toasted brioche bun.",
                offers: { "@type": "Offer", price: "9.99", priceCurrency: "USD" },
                nutrition: { "@type": "NutritionInformation", calories: "550 calories" },
              },
              {
                "@type": "MenuItem",
                name: "Parrot Isle Jumbo Coconut Shrimp",
                description: "Jumbo shrimp in coconut breading with piña colada dipping sauce.",
                offers: { "@type": "Offer", price: "10.99", priceCurrency: "USD" },
                nutrition: { "@type": "NutritionInformation", calories: "610 calories" },
              },
              {
                "@type": "MenuItem",
                name: "Soup, Salad & Cheddar Bay Biscuits",
                description: "Your choice of soup, garden or Caesar salad, and four warm Cheddar Bay Biscuits.",
                offers: { "@type": "Offer", price: "8.99", priceCurrency: "USD" },
                nutrition: { "@type": "NutritionInformation", calories: "380 calories" },
              },
            ],
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What are the Red Lobster lunch hours in 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Red Lobster lunch is served Monday through Friday from 11:00 AM to 3:00 PM at most U.S. locations. Weekend availability varies by location.",
          },
        },
        {
          "@type": "Question",
          name: "What is on the Red Lobster $10 lunch menu?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The $10 lunch specials include Garlic Shrimp Scampi ($9.99), Popcorn Shrimp ($9.99), Crispy Cod Sandwich ($9.99), Crispy Clam Strips ($9.99), Parrot Isle Jumbo Coconut Shrimp ($10.99), and Soup, Salad & Cheddar Bay Biscuits ($8.99). All include a side dish and unlimited biscuits.",
          },
        },
        {
          "@type": "Question",
          name: "What are the $15 specials at Red Lobster?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The $15 specials are part of the Daily Deals program. Fish & Chips is $15.99 and Linguini Alfredo is $14.99. Other deals include Lobster & Shrimp Scampi ($19.99), Crab Your Way ($24.99), and Steak & Lobster ($24.99).",
          },
        },
        {
          "@type": "Question",
          name: "Does Red Lobster have a lunch menu?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Red Lobster offers a dedicated weekday lunch menu at most U.S. locations from Monday through Friday, 11:00 AM to 3:00 PM, with prices starting as low as $8.99.",
          },
        },
        {
          "@type": "Question",
          name: "What new lunch items were added in 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Three new items were added in 2026: the Crispy Cod Sandwich, the Nashville Hot Chicken Sandwich, and the Wagyu Bacon Cheeseburger. The power bowl lineup also expanded with the Baja Shrimp Bowl, Sesame-Soy Salmon Bowl, and Kung Pao Noodles with Crispy Shrimp.",
          },
        },
        {
          "@type": "Question",
          name: "How does lunch pricing compare to dinner at Red Lobster?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Lunch items are typically 20–30% cheaper than comparable dinner dishes. For example, Garlic Shrimp Scampi runs approximately $13.99 at lunch vs. $18.99+ at dinner. Dining at lunch saves the average visitor $6–$14 per entrée.",
          },
        },
      ],
    },
  ],
};

// ─── Data ─────────────────────────────────────────────────────────────────────
const tenDollarSpecials = [
  { name: "Soup, Salad & Cheddar Bay Biscuits", desc: "Choice of soup + garden or Caesar salad + 4 warm biscuits.", price: "$8.99", cal: "~380 cal", badge: "Best Value", image: "/endless-soup-salad-biscuits.webp" },
  { name: "Garlic Shrimp Scampi", desc: "Shrimp sautéed in garlic butter served over linguini with choice of side.", price: "$9.99", cal: "~520 cal", badge: "Fan Favorite", image: "/garlic-shrimp-scampi.webp" },
  { name: "Popcorn Shrimp", desc: "Bite-sized shrimp fried golden brown with cocktail sauce + choice of side.", price: "$9.99", cal: "~430 cal", badge: "Classic", image: "/popcorn-shrimp.webp" },
  { name: "Crispy Clam Strips", desc: "Golden-fried clam strips with tartar sauce + choice of side.", price: "$9.99", cal: "~580 cal", badge: "Classic", image: "/fried-seafood-platter.webp" },
  { name: "Crispy Cod Sandwich", desc: "Hand-battered wild-caught cod, crunchy slaw, tartar sauce on toasted brioche bun + side.", price: "$9.99", cal: "~550 cal", badge: "New 2026", image: "/crispy-cod-sandwich-lunch.webp" },
  { name: "Parrot Isle Jumbo Coconut Shrimp", desc: "Jumbo shrimp in flaky coconut breading with piña colada dipping sauce + side.", price: "$10.99", cal: "~610 cal", badge: "Fan Favorite", image: "/parrot-isle-jumbo-coconut-shrimp.webp" },
];

const classicEntrees = [
  { name: "Walt's Favorite Shrimp", desc: "Hand-breaded butterflied shrimp with cocktail sauce + choice of side.", price: "$13.99", cal: "~690 cal", image: "/walts-favorite-shrimp.webp" },
  { name: "Shrimp Linguini Alfredo", desc: "Creamy Alfredo pasta with shrimp, half-portion at lunch.", price: "$14.99", cal: "~870 cal", image: "/shrimp-linguini-alfredo-lunch.webp" },
  { name: "Grilled Atlantic Salmon", desc: "Lightly seasoned Atlantic salmon with one side dish.", price: "$13.49", cal: "~480 cal", image: "/grilled-atlantic-salmon.webp" },
  { name: "Salmon New Orleans", desc: "Blackened salmon with Cajun butter shrimp topping + side.", price: "$20.49", cal: "~740 cal", image: "/salmon-new-orleans.webp" },
  { name: "Fish & Chips", desc: "Beer-battered wild-caught cod with Chesapeake fries, coleslaw & hush puppies.", price: "$15.99", cal: "~820 cal", image: "/fish-chips-lunch.webp" },
  { name: "Caesar Salad with Grilled Shrimp", desc: "Classic Caesar topped with two grilled shrimp skewers.", price: "$12.49", cal: "~460 cal", image: "/caesar-salad.webp" },
];

const newItems2026 = [
  { name: "Crispy Cod Sandwich", desc: "Hand-battered wild-caught cod, crunchy slaw, tartar sauce on a toasted brioche bun + side.", price: "$9.99–$14.99", cal: "~550 cal", badge: "New", image: "/crispy-cod-sandwich.webp" },
  { name: "Nashville Hot Chicken Sandwich", desc: "Spicy-sweet chicken tenders, ranch, fresh lettuce, zesty banana peppers on brioche bun + side.", price: "$12.99–$14.99", cal: "~700 cal", badge: "New", image: "/nashville-hot-chicken-sandwich.webp" },
  { name: "Wagyu Bacon Cheeseburger", desc: "Premium Wagyu beef, crispy bacon, sharp white cheddar, lettuce, tomato on brioche bun + side.", price: "$14.99–$16.99", cal: "~950 cal", badge: "New", image: "/wagyu-bacon-cheeseburger.webp" },
  { name: "Baja Shrimp Bowl", desc: "Seasoned shrimp, avocado, black beans, jalapeño ranch slaw, quinoa rice, pico de gallo, tortilla strips.", price: "$16.99–$17.99", cal: "~620 cal", badge: "Healthy", image: "/baja-shrimp-bowl.webp" },
  { name: "Sesame-Soy Salmon Bowl", desc: "Soy-ginger glazed salmon, crispy Brussels sprouts, quinoa rice, edamame, kale, sesame-soy vinaigrette.", price: "$17.99–$18.99", cal: "~580 cal", badge: "Healthy", image: "/sesame-soy-salmon-bowl.webp" },
  { name: "Kung Pao Noodles with Crispy Shrimp", desc: "Sweet-spicy soy-ginger noodles, crispy shrimp, edamame, cabbage, cashews, green onions.", price: "$16.99", cal: "~740 cal", badge: "Bold", image: "/kung-pao-noodles-with-crispy-shrimp.webp" },
];

const dailyDeals = [
  { day: "Monday", deal: "Endless Shrimp", note: "Select styles, seasonal", price: "~$20.99" },
  { day: "Tuesday", deal: "Linguini Alfredo", note: "Shrimp or chicken + side", price: "$14.99" },
  { day: "Wednesday", deal: "Steak & Lobster", note: "7 oz. sirloin + lobster tail + side", price: "$24.99" },
  { day: "Thursday", deal: "Lobster & Shrimp Scampi", note: "Lobster tail + garlic shrimp + side", price: "$19.99" },
  { day: "Friday", deal: "Fish & Chips", note: "Beer-battered cod + Chesapeake fries + coleslaw", price: "$15.99" },
];

const lunchHours = [
  { day: "Monday", hours: "11:00 AM – 3:00 PM" },
  { day: "Tuesday", hours: "11:00 AM – 3:00 PM" },
  { day: "Wednesday", hours: "11:00 AM – 3:00 PM" },
  { day: "Thursday", hours: "11:00 AM – 3:00 PM" },
  { day: "Friday", hours: "11:00 AM – 3:00 PM" },
  { day: "Saturday", hours: "Varies by location" },
  { day: "Sunday", hours: "Varies by location" },
];

const calorieData = [
  { name: "Soup, Salad & Biscuits Combo", cal: "~380 cal", protein: "~18g", goal: "Lightest full meal" },
  { name: "Popcorn Shrimp + broccoli", cal: "~430 cal", protein: "~22g", goal: "Low-cal fried pick" },
  { name: "Grilled Salmon (lunch)", cal: "~480 cal", protein: "~34g", goal: "Heart-healthy" },
  { name: "Caesar Salad + Grilled Shrimp", cal: "~460 cal", protein: "~29g", goal: "High-protein salad" },
  { name: "Garlic Shrimp Scampi", cal: "~520 cal", protein: "~26g", goal: "Balanced classic" },
  { name: "Sesame-Soy Salmon Bowl", cal: "~580 cal", protein: "~36g", goal: "Best omega-3" },
  { name: "Baja Shrimp Bowl", cal: "~620 cal", protein: "~31g", goal: "Filling & nutritious" },
  { name: "Walt's Favorite Shrimp", cal: "~690 cal", protein: "~24g", goal: "Indulgent classic" },
  { name: "Shrimp Linguini Alfredo", cal: "~870 cal", protein: "~28g", goal: "Most calorie-dense" },
];

const faqs = [
  {
    q: "Does Red Lobster have a lunch menu?",
    a: "Yes. A dedicated weekday lunch menu is available at most U.S. locations from Monday through Friday, 11:00 AM to 3:00 PM. It features smaller portions and lower prices than the dinner menu, with options starting as low as $8.99.",
  },
  {
    q: "What are the Red Lobster lunch hours in 2026?",
    a: "Standard lunch hours are Monday through Friday, 11:00 AM to 3:00 PM. Weekend availability varies by location — some run an all-day menu while others serve dinner pricing only. Call your local restaurant to confirm weekend hours.",
  },
  {
    q: "What is on the Red Lobster $10 lunch menu?",
    a: "The $10 lunch specials include Garlic Shrimp Scampi ($9.99), Popcorn Shrimp ($9.99), Crispy Clam Strips ($9.99), Crispy Cod Sandwich ($9.99), Parrot Isle Jumbo Coconut Shrimp ($10.99), and Soup, Salad & Cheddar Bay Biscuits ($8.99). All come with a side dish and unlimited biscuits.",
  },
  {
    q: "What are the $15 specials at Red Lobster?",
    a: "The $15 specials are part of the Daily Deals program. Fish & Chips is $15.99 and Linguini Alfredo is $14.99. Other deals include Lobster & Shrimp Scampi ($19.99), Crab Your Way ($24.99), and Steak & Lobster ($24.99). Prices verified from the official website.",
  },
  {
    q: "What new lunch items were added in 2026?",
    a: "Three new sandwiches launched in 2026: Crispy Cod Sandwich, Nashville Hot Chicken Sandwich, and Wagyu Bacon Cheeseburger. The bowl lineup also expanded with the Baja Shrimp Bowl, Sesame-Soy Salmon Bowl, and Kung Pao Noodles with Crispy Shrimp.",
  },
  {
    q: "How does lunch pricing compare to dinner at Red Lobster?",
    a: "Lunch items are typically 20–30% cheaper than comparable dinner dishes. For example, Garlic Shrimp Scampi is ~$13.99 at lunch vs. ~$18.99 at dinner. Dining at lunch saves the average visitor $6–$14 per entrée.",
  },
  {
    q: "Can I use Rewards or coupons on lunch orders?",
    a: "Yes. My Red Lobster Rewards points and member coupons can be applied to weekday lunch orders. However, they typically cannot be combined with active daily deal promotions. Choose whichever discount saves you more.",
  },
  {
    q: "Are Cheddar Bay Biscuits included with lunch?",
    a: "Yes. Every lunch entrée comes with unlimited warm Cheddar Bay Biscuits for dine-in guests. To-go orders typically include 4–6 biscuits per entrée ordered.",
  },
  {
    q: "What is the best Red Lobster lunch for under $10?",
    a: "The Soup, Salad & Cheddar Bay Biscuits at $8.99 is the absolute best option under $10. You get a cup of New England Clam Chowder or Lobster Bisque, a garden or Caesar salad, and four warm biscuits — a genuinely filling midday meal.",
  },
];

const badgeColors: Record<string, string> = {
  "Best Value": "bg-emerald-100 text-emerald-800",
  "Fan Favorite": "bg-red-100 text-red-700",
  Classic: "bg-gray-100 text-gray-700",
  "New 2026": "bg-blue-100 text-blue-700",
  New: "bg-blue-100 text-blue-700",
  Healthy: "bg-green-100 text-green-700",
  Bold: "bg-orange-100 text-orange-700",
};

// ─── Component ────────────────────────────────────────────────────────────────
export default function LunchMenuPage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <Script
        id="lunch-menu-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="bg-gray-50 min-h-screen">

        <HeroSection 
        title="Red Lobster Lunch Menu & Specials" 
        subtitle="Enjoy the $10 lunch specials and other great daily deals. Red Lobster lunch hours are Monday to Friday from 11 AM to 3 PM."
        ctaText="View Lunch Menu"
        ctaLink="#specials"
        backgroundImage="/hero-section.webp"
      />

        {/* ── Quick Summary Table ──────────────────────────────────── */}
        <div className="max-w-5xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-black text-gray-900 mb-6 text-center">Quick Summary at a Glance</h2>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-[#7c1d27] text-white">
                <tr>
                  <th className="text-left py-3 px-5 font-semibold">Detail</th>
                  <th className="text-left py-3 px-5 font-semibold">Information</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  ["Lunch Hours", "Monday–Friday, 11:00 AM – 3:00 PM"],
                  ["Weekend Lunch", "Varies by location — call ahead"],
                  ["$10 Lunch Specials", "6 items starting at $8.99"],
                  ["Price Range (Full Lunch Menu)", "$8.99 – $20.49"],
                  ["Daily Deals Available", "Mon through Fri at participating locations"],
                  ["Cheddar Bay Biscuits", "Unlimited with every dine-in meal"],
                  ["To-Go & Delivery", "Yes — via app, website & delivery partners"],
                  ["New 2026 Additions", "Crispy Cod Sandwich, Nashville Hot Chicken, Wagyu Bacon Cheeseburger"],
                  ["Happy Hour (Post-Lunch)", "3:00 PM – 6:00 PM weekdays, $5 select cocktails"],
                ].map(([d, i], idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="py-3 px-5 font-medium text-gray-800">{d}</td>
                    <td className="py-3 px-5 text-gray-600">{i}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-3 text-center">
            redlobstermenu.site is an independent guide. Prices may vary by location.
          </p>
        </div>

        <div className="max-w-5xl mx-auto px-4 pb-16 space-y-16">

          {/* ── What Is the Lunch Menu ───────────────────────────── */}
          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">What Is the Red Lobster Lunch Menu?</h2>
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm text-gray-700 leading-relaxed space-y-3">
              <p>
                The Red Lobster lunch menu is a dedicated weekday menu available at most U.S. locations from <strong>Monday through Friday, 11:00 AM to 3:00 PM.</strong> It features smaller portions than the dinner menu, faster service, and significantly lower prices — making it the smartest time to visit if you want premium seafood without the full dinner price tag.
              </p>
              <p>The weekday lunch menu is divided into five key tiers:</p>
              <ul className="list-disc list-inside space-y-1 pl-2">
                <li><strong>$10 Lunch Specials</strong> — the most affordable tier, starting at just $8.99</li>
                <li><strong>Lunch Classics</strong> — signature seafood entrées in lunch-sized portions</li>
                <li><strong>New 2026 Sandwiches & Bowls</strong> — freshly added this year</li>
                <li><strong>Daily Deals</strong> — rotating Mon–Fri specials from $14.99 to $24.99</li>
                <li><strong>$15 Specials</strong> — premium value meals including Lobster & Shrimp options</li>
              </ul>
              <p className="text-sm text-gray-500">
                Every lunch entrée comes with unlimited warm Cheddar Bay Biscuits — the seafood chain&apos;s iconic signature item.
              </p>
            </div>
          </section>

          {/* ── Lunch Hours ─────────────────────────────────────── */}
          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-2">Red Lobster Lunch Hours 2026</h2>
            <p className="text-gray-500 mb-5 text-sm">Confirmed hours for most U.S. locations. Always call ahead for weekend availability.</p>
            <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
              <table className="w-full text-sm">
                <thead className="bg-[#7c1d27] text-white">
                  <tr>
                    <th className="text-left py-3 px-5">Day</th>
                    <th className="text-left py-3 px-5">Lunch Hours</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {lunchHours.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="py-3 px-5 font-semibold text-gray-800">{row.day}</td>
                      <td className={`py-3 px-5 ${row.hours.includes("Varies") ? "text-orange-600 font-medium" : "text-gray-700"}`}>
                        {row.hours}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800">
              <strong>Pro Tip:</strong> Arrive before 2:30 PM on weekdays to get the full lunch selection. Some locations begin transitioning to the dinner menu closer to 3:00 PM.
            </div>
          </section>

          {/* ── $10 Specials ────────────────────────────────────── */}
          <section id="10-dollar-specials">
            <h2 className="text-2xl font-black text-gray-900 mb-2">Red Lobster $10 Lunch Menu — Full List With Prices</h2>
            <p className="text-gray-500 mb-6 text-sm">6 items available every weekday during lunch hours. Each includes a side dish and unlimited Cheddar Bay Biscuits.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {tenDollarSpecials.map((item) => (
                <div key={item.name} className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow">
                  <div className="relative h-48 w-full">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-gray-900 text-base leading-tight flex-1 mr-2">{item.name}</h3>
                      <span className={`text-xs font-bold px-2 py-1 rounded-full whitespace-nowrap ${badgeColors[item.badge] ?? "bg-gray-100 text-gray-700"}`}>
                        {item.badge}
                      </span>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed flex-grow mb-4">{item.desc}</p>
                    <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                      <span className="text-[#7c1d27] font-black text-lg">{item.price}</span>
                      <span className="text-gray-400 text-xs font-medium">{item.cal}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-sm text-emerald-800">
              <strong>Best pick under $10:</strong> Soup, Salad & Cheddar Bay Biscuits at $8.99 — pick New England Clam Chowder + Caesar Salad for the most filling low-cost meal on the entire menu.
            </div>
          </section>

          {/* ── Classic Entrées ─────────────────────────────────── */}
          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-2">Full Weekday Lunch Menu — Classic Entrées</h2>
            <p className="text-gray-500 mb-6 text-sm">Lunch-sized portions of signature dishes. Typically 20–30% cheaper than the dinner equivalent.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {classicEntrees.map((item) => (
                <div key={item.name} className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow">
                  <div className="relative h-48 w-full">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="font-bold text-gray-900 text-base mb-2">{item.name}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed flex-grow mb-4">{item.desc}</p>
                    <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                      <span className="text-[#7c1d27] font-black text-lg">{item.price}</span>
                      <span className="text-gray-400 text-xs font-medium">{item.cal}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── New 2026 Items ───────────────────────────────────── */}
          <section id="new-2026-items">
            <h2 className="text-2xl font-black text-gray-900 mb-2">New Lunch Items Added in 2026</h2>
            <p className="text-gray-500 mb-6 text-sm">3 new sandwiches + 3 new power bowls — the most significant lunch update in recent years.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {newItems2026.map((item) => (
                <div key={item.name} className="bg-white rounded-2xl border border-blue-100 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow">
                  <div className="relative h-48 w-full">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-gray-900 text-base leading-tight flex-1 mr-2">{item.name}</h3>
                      <span className={`text-xs font-bold px-2 py-1 rounded-full whitespace-nowrap ${badgeColors[item.badge] ?? "bg-gray-100 text-gray-700"}`}>
                        {item.badge}
                      </span>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed flex-grow mb-4">{item.desc}</p>
                    <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                      <span className="text-[#7c1d27] font-black text-lg">{item.price}</span>
                      <span className="text-gray-400 text-xs font-medium">{item.cal}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── $15 Specials / Daily Deals ────────────────────────── */}
          <section id="15-dollar-specials">
            <h2 className="text-2xl font-black text-gray-900 mb-2">What Are the $15 Specials at Red Lobster?</h2>
            <p className="text-gray-600 mb-4 text-sm leading-relaxed">
              The &quot;$15 specials&quot; refer to the <strong>Daily Deals program</strong> — a rotating set of value meals available every weekday at participating U.S. locations. The range runs from <strong>$14.99 to $24.99</strong>. Here is the complete verified list:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-4">
              {dailyDeals.map((d) => (
                <div key={d.day} className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 flex flex-col text-center hover:border-[#7c1d27] hover:shadow-md transition-all">
                  <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">{d.day}</span>
                  <h4 className="font-bold text-gray-900 text-sm mb-1 leading-tight">{d.deal}</h4>
                  <p className="text-gray-400 text-xs mb-3 flex-grow">{d.note}</p>
                  <span className="text-[#7c1d27] font-black text-xl">{d.price}</span>
                </div>
              ))}
            </div>
            <div className="bg-[#fdf2f3] border border-[#e8b4b8] rounded-xl p-4 text-sm text-gray-700">
              <strong>Best value Daily Deal:</strong> Fish &amp; Chips at $15.99 — the lowest-priced deal that includes a full entrée plus three sides (Chesapeake fries, coleslaw, hush puppies). Maximum food for minimum spend.
            </div>
          </section>

          {/* ── Lunch vs Dinner comparison ───────────────────────── */}
          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">Lunch vs. Dinner — Price Comparison</h2>
            <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
              <table className="w-full text-sm">
                <thead className="bg-[#7c1d27] text-white">
                  <tr>
                    <th className="text-left py-3 px-5">Category</th>
                    <th className="text-left py-3 px-5">Lunch Menu</th>
                    <th className="text-left py-3 px-5">Dinner Menu</th>
                    <th className="text-left py-3 px-5">Your Savings</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ["Starting Price", "$8.99", "$14.99", "Save ~$6"],
                    ["Average Entrée", "$11.99–$14.99", "$18.99–$28.99", "Save $7–$14"],
                    ["Shrimp Scampi", "~$13.99", "~$18.99", "Save ~$5"],
                    ["Grilled Salmon", "~$13.49", "~$19.99", "Save ~$6"],
                    ["Shrimp Alfredo", "~$14.99", "~$20.99", "Save ~$6"],
                    ["Cheddar Bay Biscuits", "Unlimited", "Unlimited", "Same"],
                  ].map(([cat, lunch, dinner, save], idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="py-3 px-5 font-medium text-gray-800">{cat}</td>
                      <td className="py-3 px-5 text-gray-700">{lunch}</td>
                      <td className="py-3 px-5 text-gray-500">{dinner}</td>
                      <td className="py-3 px-5 text-emerald-600 font-semibold">{save}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-3">
              Bottom line: dining during weekday lunch hours saves the average diner <strong>$6–$14 per entrée</strong>. For a table of two, that is up to $28 saved per visit.
            </p>
          </section>

          {/* ── Calories / Nutrition ────────────────────────────── */}
          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">Calories & Nutrition Guide</h2>
            <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
              <table className="w-full text-sm">
                <thead className="bg-[#7c1d27] text-white">
                  <tr>
                    <th className="text-left py-3 px-5">Item</th>
                    <th className="text-left py-3 px-5">Calories</th>
                    <th className="text-left py-3 px-5">Protein</th>
                    <th className="text-left py-3 px-5 hidden md:table-cell">Best For</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {calorieData.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="py-3 px-5 font-medium text-gray-800">{row.name}</td>
                      <td className="py-3 px-5 text-gray-700">{row.cal}</td>
                      <td className="py-3 px-5 text-gray-700">{row.protein}</td>
                      <td className="py-3 px-5 text-gray-500 hidden md:table-cell">{row.goal}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* ── How to Save More ─────────────────────────────────── */}
          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">How to Save More at Lunch — Stack Your Discounts</h2>
            <div className="space-y-4">
              {[
                {
                  step: "1",
                  title: "Dine-In During Weekday Lunch (11 AM – 3 PM)",
                  body: "Start with the built-in savings. Lunch entrées are $6–$14 cheaper than dinner equivalents — no coupon required, no code needed.",
                },
                {
                  step: "2",
                  title: "Join My Red Lobster Rewards (Free)",
                  body: "Earn 1 point per $1 spent, get a free appetizer on your birthday, access app-exclusive deals, and receive member coupons via email.",
                },
                {
                  step: "3",
                  title: "Apply Rewards Coupons to a Lunch Bill",
                  body: 'Members regularly receive "$5 off $20" or "20% off your check" coupons. Applying a $5 off coupon to an $11 lunch means paying just $6 for a full seafood meal.',
                },
                {
                  step: "4",
                  title: "Buy Gift Cards at a Discount",
                  body: "Retailers like Costco periodically sell $50 gift cards for $40 — an instant 20% off before you order. Combined with a Rewards coupon, total savings can reach 30%+.",
                },
                {
                  step: "5",
                  title: "Bridge Lunch Into Happy Hour (3 PM – 6 PM)",
                  body: "Happy Hour starts exactly when lunch ends. Stay for $5 select cocktails, $2 off starters, and reduced-price draft beer and wine — a genuine two-for-one win.",
                },
              ].map((s) => (
                <div key={s.step} className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#7c1d27] text-white flex items-center justify-center font-black text-lg flex-shrink-0">
                    {s.step}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{s.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{s.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── FAQ ─────────────────────────────────────────────── */}
          <section id="faq">
            <h2 className="text-2xl font-black text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
                  <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── Disclaimer & CTA ─────────────────────────────────── */}
          <section>
            <div className="bg-gray-100 border border-gray-200 rounded-xl p-5 text-xs text-gray-500 mb-8">
              <strong>Disclaimer:</strong> redlobstermenu.site is an independent menu guide and is not affiliated with Red Lobster Seafood Co. All prices are estimates based on publicly available information and may vary by location. Always confirm current pricing at{" "}
              <a href="https://www.redlobster.com" target="_blank" rel="noopener noreferrer" className="text-[#7c1d27] underline">redlobster.com</a>{" "}
              or your local restaurant.
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/menu" className="inline-block bg-[#7c1d27] text-white font-bold py-3 px-8 rounded-full hover:bg-[#5a131b] transition-colors">
                View Full Menu
              </Link>
              <Link href="/coupons" className="inline-block bg-white border-2 border-[#7c1d27] text-[#7c1d27] font-bold py-3 px-8 rounded-full hover:bg-[#fdf2f3] transition-colors">
                See Coupons & Deals
              </Link>
              <Link href="/happy-hour" className="inline-block bg-white border-2 border-gray-300 text-gray-700 font-bold py-3 px-8 rounded-full hover:bg-gray-50 transition-colors">
                Happy Hour Guide
              </Link>
            </div>
          </section>

          {/* ── Interlink Other Menu Pages ─────────────────────── */}
          <MenuInterlink currentPage="/lunch-menu" />

        </div>
      </div>
    </>
  );
}
