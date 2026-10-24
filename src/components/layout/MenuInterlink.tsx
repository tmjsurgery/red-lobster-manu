import Link from "next/link";

interface MenuInterlinkProps {
  currentPage?: string;
}

export default function MenuInterlink({ currentPage }: MenuInterlinkProps) {
  const links = [
    { href: "/menu", title: "Red Lobster Menu Prices", desc: "Complete 2026 price list across all 16 categories", badge: "Full Menu" },
    { href: "/specials", title: "Red Lobster Menu Specials", desc: "Daily deals, Endless Shrimp & weekday discounts", badge: "Specials" },
    { href: "/lunch-menu", title: "Red Lobster Lunch Menu", desc: "$10 lunch specials, hours & midday savings", badge: "Lunch" },
    { href: "/dinner-menu", title: "Red Lobster Dinner Menu", desc: "Signature Feasts, live lobster & steaks", badge: "Dinner" },
    { href: "/kids-menu", title: "Red Lobster Kids Menu", desc: "Nutritious $7.99–$9.49 meals with sides & drinks", badge: "Kids" },
    { href: "/nutrition-calories", title: "Nutrition & Calories", desc: "Complete calorie chart, carbs, keto & allergens", badge: "Nutrition" },
    { href: "/happy-hour", title: "Happy Hour Deals", desc: "$5 drinks & $2 off appetizers every weekday 3–6 PM", badge: "Drinks" },
    { href: "/coupons", title: "Coupons & Promo Codes", desc: "Verified promo codes, BOGO deals & app savings", badge: "Coupons" },
  ];

  const filteredLinks = links.filter((l) => l.href !== currentPage);

  return (
    <nav aria-label="Explore Related Red Lobster Menu Pages" className="my-16 bg-gradient-to-br from-red-50/50 via-white to-gray-50 p-6 md:p-8 rounded-3xl border border-[#7c1d27]/20 shadow-sm">
      <div className="text-center mb-8">
        <span className="text-[#7c1d27] text-xs font-bold uppercase tracking-widest bg-red-100 px-3 py-1 rounded-full">
          Explore Red Lobster Guides
        </span>
        <h2 className="text-2xl md:text-3xl font-black text-gray-900 mt-2">
          Explore All Red Lobster Menu Sections
        </h2>
        <p className="text-gray-500 text-sm max-w-xl mx-auto mt-1">
          Quickly navigate between verified 2026 prices, daily specials, lunch &amp; dinner menus, and nutrition guides.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="group bg-white rounded-2xl p-5 border border-gray-100 hover:border-[#7c1d27]/40 hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#7c1d27] bg-red-50 px-2 py-0.5 rounded">
                  {link.badge}
                </span>
                <span className="text-gray-400 group-hover:text-[#7c1d27] group-hover:translate-x-1 transition-all text-sm font-bold">
                  →
                </span>
              </div>
              <h3 className="font-bold text-gray-900 text-base group-hover:text-[#7c1d27] transition-colors leading-snug">
                {link.title}
              </h3>
              <p className="text-gray-500 text-xs mt-1 leading-relaxed">
                {link.desc}
              </p>
            </div>
            <span className="text-xs font-bold text-[#7c1d27] mt-3 inline-block">
              View Guide &rarr;
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
