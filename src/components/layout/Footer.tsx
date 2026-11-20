import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1C1917] text-gray-300 mt-20 w-full border-t-4 border-[#B33A3A]">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Brand & Desc */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-flex flex-col mb-4 group">
              <span className="text-2xl font-black tracking-tight flex items-center gap-2 text-white">
                <span className="text-3xl">🦞</span> RED LOBSTER
              </span>
              <span className="text-xs font-bold tracking-widest text-[#B33A3A] uppercase">
                Menu &amp; Price Guide 2026
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              Your clean, independent, and verified guide to the complete Red Lobster menu: prices, calories, lunch specials, dinner feasts, and insider savings tips for 2026.
            </p>
          </div>

          {/* Column 2: Main Menus */}
          <div>
            <h4 className="text-white font-black mb-4 tracking-wider uppercase text-xs border-b border-gray-800 pb-2">
              Menu Sections
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/dinner-menu" className="hover:text-white transition-colors">Red Lobster Dinner Menu</Link></li>
              <li><Link href="/lunch-menu" className="hover:text-white transition-colors">Red Lobster Lunch Menu</Link></li>
              <li><Link href="/specials" className="hover:text-white transition-colors">Daily Deals &amp; Specials</Link></li>
              <li><Link href="/appetizers" className="hover:text-white transition-colors">Appetizers &amp; Starters</Link></li>
              <li><Link href="/menu" className="hover:text-white transition-colors">Full 2026 Menu Prices</Link></li>
              <li><Link href="/kids-menu" className="hover:text-white transition-colors">Kids Menu &amp; Meals</Link></li>
              <li><Link href="/nutrition-calories" className="hover:text-white transition-colors">Nutrition &amp; Calories Guide</Link></li>
            </ul>
          </div>

          {/* Column 3: Savings & Guides */}
          <div>
            <h4 className="text-white font-black mb-4 tracking-wider uppercase text-xs border-b border-gray-800 pb-2">
              Savings &amp; Specials
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/happy-hour" className="hover:text-white transition-colors">Happy Hour Specials (3–6 PM)</Link></li>
              <li><Link href="/coupons" className="hover:text-white transition-colors">Verified Coupons &amp; Promo Codes</Link></li>
              <li><Link href="/nutrition-allergen-guide" className="hover:text-white transition-colors">Allergen &amp; Diet Information</Link></li>
              <li><Link href="/locations" className="hover:text-white transition-colors">Find Red Lobster Locations</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Seafood Dining Blog</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors">Frequently Asked Questions</Link></li>
            </ul>
          </div>

          {/* Column 4: Legal & About */}
          <div>
            <h4 className="text-white font-black mb-4 tracking-wider uppercase text-xs border-b border-gray-800 pb-2">
              About &amp; Information
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">About Our Guide</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-conditions" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full border-t border-gray-800"></div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 pb-2 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs leading-relaxed text-gray-500 max-w-3xl">
            <strong>Disclaimer:</strong> redlobstermenu.site is an independent consumer information portal. It is not affiliated with, sponsored by, or endorsed by Red Lobster Hospitality LLC or RL Investor Holdings LLC. All trademarks, service marks, food names, and logos are property of their respective owners. Prices and nutritional details are estimated for 2026.
          </p>
          <p className="text-xs text-gray-500 whitespace-nowrap">
            &copy; 2026 Red Lobster Menu Guide.
          </p>
        </div>
      </div>
    </footer>
  );
}
