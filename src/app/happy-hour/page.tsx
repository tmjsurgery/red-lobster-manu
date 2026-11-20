import Link from "next/link";
import Script from "next/script";
import HeroSection from "@/components/ui/HeroSection";
import MenuInterlink from "@/components/layout/MenuInterlink";

export const metadata = {
  title: "Red Lobster Menu: Happy Hour Deals & Times 2026 | Guide",
  description:
    "Explore Red Lobster menu happy hour specials for 2026. Available weekdays 3:00–6:00 PM: $5 cocktails, draft beers, and $2 off signature appetizers.",
  alternates: {
    canonical: "/happy-hour",
  },
  openGraph: {
    title: "Red Lobster Menu: Happy Hour Deals & Times 2026 | Guide",
    description: "Explore Red Lobster menu happy hour specials for 2026. Weekdays 3:00–6:00 PM with $5 drinks.",
    url: "https://redlobstermenu.site/happy-hour",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Red Lobster Menu: Happy Hour Deals & Times 2026 | Guide",
    description: "Explore Red Lobster menu happy hour specials for 2026.",
  }
};

const drinkDeals = [
  { name: "Classic Margarita", price: "$5", icon: "🍸" },
  { name: "Top-Shelf Long Island Iced Tea", price: "$5", icon: "🍹" },
  { name: "Tito's Twisted Strawberry Lemonade", price: "$5", icon: "🍓" },
  { name: "Select Draft Beers", price: "$5", icon: "🍺" },
  { name: "Wine by the Glass (select)", price: "$5 - $6", icon: "🍷" },
];

const foodDeals = [
  { name: "Lobster Flatbread", discount: "$2 OFF" },
  { name: "Crab Queso", discount: "$2 OFF" },
  { name: "Seafood-Stuffed Mushrooms", discount: "$2 OFF" },
  { name: "Lobster Dip", discount: "$2 OFF" },
  { name: "Mozzarella Cheesesticks", discount: "$2 OFF" },
  { name: "Crispy Calamari & Vegetables", discount: "$2 OFF" },
  { name: "Escargot", discount: "$2 OFF" },
];

export default function HappyHourPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "Red Lobster Happy Hour",
    "description": "Weekday happy hour featuring $5 cocktails and discounted appetizers.",
    "eventSchedule": {
      "@type": "Schedule",
      "byDay": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "startTime": "15:00",
      "endTime": "18:00"
    },
    "location": {
      "@type": "Place",
      "name": "Participating Red Lobster Locations"
    }
  };

  return (
    <div className="bg-[#F8FAFC]">
      <Script id="happy-hour-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      <HeroSection 
        title="Red Lobster Happy Hour 2026" 
        subtitle="$5 cocktails, $5 beers, $5 wines, and $2 off your favorite starters. The best time to visit Red Lobster without breaking the bank."
        badge="Weekdays 3:00 PM – 6:00 PM • Verified Drink & Appetizer Deals"
        ctaText="View Drink Menu"
        ctaLink="/menu/beverages"
        secondaryCtaText="All Daily Deals"
        secondaryCtaLink="/specials"
        backgroundImage="/hero-section.webp"
        stats={[
          { label: "Drink Deals", value: "$5.00", sub: "Cocktails & beers" },
          { label: "Appetizers", value: "$2 OFF", sub: "Select hot starters" },
          { label: "Hours", value: "3 – 6 PM", sub: "Monday through Friday" },
          { label: "Biscuits", value: "Unlimited", sub: "Fresh & hot at table" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-4 text-xs text-gray-500 flex items-center gap-2">
          <Link href="/" className="hover:text-[#B33A3A] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#B33A3A] font-bold">Red Lobster Happy Hour Deals 2026</span>
        </nav>

        {/* ── RESEARCH BYLINE & VERIFICATION BAR ───────────────── */}
        <div className="research-meta-bar mb-6 flex justify-between items-center">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-bold text-gray-800">By Beverage &amp; Bar Editors</span>
            <span className="text-gray-400">|</span>
            <span>Happy Hour Audit 2026</span>
            <span className="text-gray-400">|</span>
            <span className="text-emerald-700 font-semibold flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
              Verified Weekday Times &amp; State Availability
            </span>
          </div>
          <span className="text-xs text-gray-400 hidden sm:inline">
            3:00 PM – 6:00 PM Mon–Fri
          </span>
        </div>

        {/* Drink Specials */}
        <section className="mb-16">
          <div className="text-center mb-8 max-w-3xl mx-auto">
            <h2 className="section-pill-banner">
              Happy Hour Drink Specials ($5)
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Enjoy $5 to $6 pricing on select cocktails, ice-cold draft beers, and wines during Happy Hour.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {drinkDeals.map((item) => (
              <div
                key={item.name}
                className="lobster-card bg-white rounded-2xl border border-[#EAD9D9] shadow-sm p-6 flex items-center gap-4 group"
              >
                <span className="text-4xl">{item.icon}</span>
                <div>
                  <h3 className="font-extrabold text-gray-900 group-hover:text-[#B33A3A] transition-colors">{item.name}</h3>
                  <span className="text-[#B33A3A] font-black text-2xl">{item.price}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Appetizer Deals */}
        <section className="mb-16">
          <div className="text-center mb-8 max-w-3xl mx-auto">
            <h2 className="section-pill-banner">
              Happy Hour Appetizer Deals ($2 OFF)
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              $2 off all of these popular seafood starters during weekday Happy Hour hours.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {foodDeals.map((item) => (
              <div
                key={item.name}
                className="lobster-card bg-white rounded-2xl border border-[#EAD9D9] shadow-sm p-5 flex items-center justify-between"
              >
                <span className="font-bold text-gray-900 text-sm sm:text-base">{item.name}</span>
                <span className="bg-emerald-50 text-emerald-800 text-xs font-black px-3.5 py-1.5 rounded-full border border-emerald-200/80">
                  {item.discount}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Participating Locations & Terms */}
        <section className="mb-16">
          <div className="text-center mb-8 max-w-3xl mx-auto">
            <h2 className="section-pill-banner text-lg sm:text-2xl">
              Participating Locations &amp; State Guidelines
            </h2>
          </div>

          <div className="bg-white rounded-3xl border border-[#EAD9D9] shadow-sm overflow-hidden mb-12">
            <div className="p-6 md:p-8 border-b border-[#F0E3E3]">
              <h3 className="text-xl font-black text-[#B33A3A] mb-3">Food &amp; Drinks Happy Hour</h3>
              <p className="text-gray-700 mb-4 text-sm font-medium">
                Introducing $5 Drink Specials &amp; $2 Off Select Appetizers from 3–6 PM at participating locations across 40+ states:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs sm:text-sm text-gray-600">
                <ul className="list-disc pl-4 space-y-1">
                  <li>Alabama</li>
                  <li>Arizona</li>
                  <li>Arkansas</li>
                  <li>California</li>
                  <li>Colorado</li>
                  <li>Connecticut</li>
                  <li>Delaware</li>
                  <li>Florida</li>
                </ul>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Illinois</li>
                  <li>Indiana</li>
                  <li>Iowa</li>
                  <li>Kansas</li>
                  <li>Kentucky</li>
                  <li>Louisiana</li>
                  <li>Maryland</li>
                  <li>Michigan</li>
                </ul>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Montana</li>
                  <li>Nebraska</li>
                  <li>Nevada</li>
                  <li>New Jersey</li>
                  <li>New Mexico</li>
                  <li>New York</li>
                  <li>North Dakota</li>
                  <li>Ohio</li>
                </ul>
                <ul className="list-disc pl-4 space-y-1">
                  <li>South Dakota</li>
                  <li>Tennessee</li>
                  <li>Texas</li>
                  <li>Virginia</li>
                  <li>Washington</li>
                  <li>West Virginia</li>
                  <li>Wisconsin</li>
                  <li>Wyoming</li>
                </ul>
              </div>
            </div>

            <div className="p-6 md:p-8 bg-[#FFFBFB] text-xs text-gray-600 leading-relaxed border-t border-[#F0E3E3]">
              <p className="mb-2">
                <strong>* Happy Hour Terms:</strong> Offers available Monday through Friday only between 3:00 PM to 6:00 PM at participating restaurants. Beverage specials are subject to state and local alcohol laws.
              </p>
              <p>
                Price indicated excludes applicable sales taxes and server tips. Dine-in only. May not be combined with any other coupon or promo code.
              </p>
            </div>
          </div>
        </section>

        <div className="text-center my-10">
          <Link
            href="/specials"
            className="inline-block bg-[#B33A3A] hover:bg-[#992F2F] text-white font-extrabold text-xs uppercase tracking-wider py-3.5 px-8 rounded-full transition-all shadow-md text-sm"
          >
            View All Red Lobster Specials &rarr;
          </Link>
        </div>

        <MenuInterlink currentPage="/happy-hour" />
      </div>
    </div>
  );
}
