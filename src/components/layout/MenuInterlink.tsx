import Link from "next/link";

interface MenuInterlinkProps {
  currentPage?: string;
}

export default function MenuInterlink({ currentPage }: MenuInterlinkProps) {
  const links = [
    {
      href: "/dinner-menu",
      title: "Red Lobster Dinner Menu",
      desc: "Ultimate Feasts, live lobster, steaks, pastas & 2 sides with unlimited biscuits",
      badge: "Dinner",
      icon: "🦞",
    },
    {
      href: "/lunch-menu",
      title: "Red Lobster Lunch Menu",
      desc: "$10 lunch specials, quick combos & hours Mon–Fri 11 AM–3 PM",
      badge: "Lunch",
      icon: "🍽️",
    },
    {
      href: "/specials",
      title: "Red Lobster Specials",
      desc: "Daily weekday deals, Endless Shrimp promos & Crabfest savings",
      badge: "Specials",
      icon: "🔥",
    },
    {
      href: "/appetizers",
      title: "Red Lobster Appetizers",
      desc: "Coconut Shrimp, seafood-stuffed mushrooms, queso dip & flatbreads",
      badge: "Starters",
      icon: "🍤",
    },
    {
      href: "/menu",
      title: "Full 2026 Menu Prices",
      desc: "Complete itemized price list across all 16 Red Lobster categories",
      badge: "Full Menu",
      icon: "📋",
    },
    {
      href: "/kids-menu",
      title: "Red Lobster Kids Menu",
      desc: "Portioned meals for ages 4–12 with healthy sides and drinks",
      badge: "Kids",
      icon: "🧒",
    },
    {
      href: "/nutrition-calories",
      title: "Nutrition & Calorie Guide",
      desc: "Complete calorie chart, sodium, protein, keto, and allergen guide",
      badge: "Nutrition",
      icon: "🥗",
    },
    {
      href: "/happy-hour",
      title: "Happy Hour Deals",
      desc: "$5 cocktails, discount appetizers & draft beers weekdays 3–6 PM",
      badge: "Drinks",
      icon: "🍹",
    },
  ];

  const filteredLinks = links.filter((l) => l.href !== currentPage);

  return (
    <nav aria-label="Explore Related Red Lobster Menu Pages" className="my-16 bg-white p-6 sm:p-8 rounded-3xl border border-gray-200/90 shadow-sm">
      <div className="text-center mb-8">
        <span className="bg-[#B33A3A] text-white text-xs font-black uppercase tracking-wider px-4 py-1.5 rounded-full inline-block shadow-sm">
          EXPLORE RED LOBSTER GUIDES
        </span>
        <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mt-3 tracking-tight">
          Explore All Red Lobster Menu Sections
        </h2>
        <p className="text-gray-600 text-sm max-w-xl mx-auto mt-2 leading-relaxed">
          Easily jump between verified 2026 prices, lunch specials, evening feasts, appetizer favorites, and nutrition charts.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="group bg-[#FAFAFA] hover:bg-white rounded-2xl p-5 border border-gray-200/80 hover:border-[#B33A3A] hover:shadow-md transition-all duration-200 flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-center mb-2.5">
                <span className="text-xl">{link.icon}</span>
                <span className="text-[10px] font-black uppercase tracking-wider text-[#B33A3A] bg-red-50 border border-red-100 px-2 py-0.5 rounded-full">
                  {link.badge}
                </span>
              </div>
              <h3 className="font-bold text-gray-900 text-base group-hover:text-[#B33A3A] transition-colors leading-snug">
                {link.title}
              </h3>
              <p className="text-gray-500 text-xs mt-1.5 leading-relaxed">
                {link.desc}
              </p>
            </div>
            <span className="text-xs font-bold text-[#B33A3A] mt-4 inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
              View Guide &rarr;
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
