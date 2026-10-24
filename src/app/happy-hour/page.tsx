import SectionHeader from "@/components/ui/SectionHeader";
import Link from "next/link";
import Script from "next/script";
import HeroSection from "@/components/ui/HeroSection";
import FAQSchema from "@/components/seo/FAQSchema";
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
    <div>
      <Script id="happy-hour-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      <HeroSection 
        title="Red Lobster Happy Hour" 
        subtitle="$5 cocktails, $5 beers, $5 wines, and $2 off your favorite starters. The best time to visit Red Lobster without breaking the bank."
        ctaText="View Drink Menu"
        ctaLink="/menu/beverages"
        backgroundImage="/hero-section.webp"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Drink Specials */}
        <SectionHeader title=" Happy Hour Drink Specials" />
        <p className="text-center text-gray-500 mb-8 -mt-4 text-sm">
          $5-$6 on select cocktails, beers, and wines during Happy Hour.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {drinkDeals.map((item) => (
            <div
              key={item.name}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex items-center gap-4 hover:shadow-md hover:border-[#7c1d27] transition-all"
            >
              <span className="text-4xl">{item.icon}</span>
              <div>
                <h3 className="font-bold text-gray-900">{item.name}</h3>
                <span className="text-[#7c1d27] font-black text-xl">{item.price}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Appetizer Deals */}
        <SectionHeader title=" Happy Hour Appetizer Deals" />
        <p className="text-center text-gray-500 mb-8 -mt-4 text-sm">
          $2 off all of these popular starters during Happy Hour.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {foodDeals.map((item) => (
            <div
              key={item.name}
              className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 flex items-center justify-between hover:shadow-md transition-shadow"
            >
              <span className="font-semibold text-gray-800">{item.name}</span>
              <span className="bg-green-100 text-green-800 text-sm font-bold px-3 py-1 rounded-full">
                {item.discount}
              </span>
            </div>
          ))}
        </div>

        {/* Participating Locations & Terms */}
        <SectionHeader title="Participating Locations & Terms" />
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden mb-12">
          
          <div className="p-6 md:p-8 border-b border-gray-200">
            <h3 className="text-2xl font-black text-[#7c1d27] mb-4">Food & Drinks Happy Hour</h3>
            <p className="text-gray-700 mb-4 font-medium">
              Introducing $5 Drink Specials & $2 Off Select Appetizers from 3-6pm at participating locations. Only available in:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm text-gray-600">
              <ul className="list-disc pl-4 space-y-1">
                <li>Alabama</li>
                <li>Arizona</li>
                <li>Arkansas</li>
                <li>California</li>
                <li>Colorado</li>
                <li>Connecticut</li>
                <li>Delaware</li>
                <li>Florida</li>
                <li>Georgia <span className="text-xs text-gray-400 block leading-tight">(exc. Buford, Canton, Duluth, Newnan, Smyrna; Gainesville 4-6pm)</span></li>
                <li>Idaho</li>
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
                <li>Minnesota</li>
                <li>Missouri</li>
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
                <li>Oregon</li>
                <li>Pennsylvania</li>
              </ul>
              <ul className="list-disc pl-4 space-y-1">
                <li>South Carolina <span className="text-xs text-gray-400 block leading-tight">(from 4-6pm)</span></li>
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

          <div className="p-6 md:p-8 bg-gray-50 border-b border-gray-200">
            <h3 className="text-2xl font-black text-[#7c1d27] mb-4">Food ONLY Happy Hour</h3>
            <p className="text-gray-700 mb-4 font-medium">
              $2 off select appetizers (beverage offerings not available). Only available in:
            </p>
            <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1 md:columns-2">
              <li>Georgia Cities: Buford, Canton, Duluth, Newman, Smyrna</li>
              <li>Mississippi</li>
              <li>North Carolina</li>
              <li>Oklahoma</li>
              <li>Utah</li>
            </ul>
          </div>

          <div className="p-6 md:p-8 text-xs text-gray-500 leading-relaxed bg-[#f9f9f9]">
            <p className="mb-2">
              <strong>* Happy Hour Terms:</strong> Offers available Monday through Friday only between 3pm to 6pm, at participating locations. Beverage offers are not valid in the following locations: GA (cities: Buford, Canton, Duluth, Gainesville [except permitted between 4-6pm], Newnan, Smyrna), MS, NC, OK, SC (except permitted M-F from 4-6pm), and UT. 
            </p>
            <p>
              Price indicated for food and beverage offers excludes applicable taxes and gratuities. Available for Dine-in only; To Go and Delivery excluded. Offer may not be combined with any other offer or coupon.
            </p>
          </div>
        </div>

        <div className="text-center my-8">
          <Link
            href="/specials"
            className="inline-block bg-[#7c1d27] text-white font-bold py-3 px-8 rounded-full hover:bg-[#5a131b] transition-colors shadow-md text-sm"
          >
            View All Red Lobster Specials &rarr;
          </Link>
        </div>

        <MenuInterlink currentPage="/happy-hour" />
      </div>
    </div>
  );
}
