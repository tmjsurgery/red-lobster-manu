import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#111] text-gray-300 mt-20 w-full border-t border-[#7c1d27]/20">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Brand & Desc */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-flex flex-col mb-4 group">
              <span className="text-2xl font-black tracking-tight flex items-center gap-2 text-white">
                <span className="text-3xl">🦞</span> RED LOBSTER
              </span>
              <span className="text-xs font-bold tracking-widest text-[#7c1d27] uppercase">
                Menu &amp; Price Guide 2026
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              Your comprehensive, independent guide to the complete Red Lobster menu, estimated prices, calories, lunch &amp; dinner specials, and nutrition for 2026.
            </p>
          </div>

          {/* Column 2: Main Menus */}
          <div>
            <h4 className="text-white font-bold mb-4 tracking-wide uppercase text-sm">Menu Sections</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/menu" className="hover:text-white transition-colors">Red Lobster Menu Prices</Link></li>
              <li><Link href="/specials" className="hover:text-white transition-colors">Daily Deals &amp; Specials</Link></li>
              <li><Link href="/lunch-menu" className="hover:text-white transition-colors">Red Lobster Lunch Menu</Link></li>
              <li><Link href="/dinner-menu" className="hover:text-white transition-colors">Red Lobster Dinner Menu</Link></li>
              <li><Link href="/kids-menu" className="hover:text-white transition-colors">Red Lobster Kids Menu</Link></li>
              <li><Link href="/nutrition-calories" className="hover:text-white transition-colors">Nutrition &amp; Calories Guide</Link></li>
            </ul>
          </div>

          {/* Column 3: Savings & Guides */}
          <div>
            <h4 className="text-white font-bold mb-4 tracking-wide uppercase text-sm">Savings &amp; Deals</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/happy-hour" className="hover:text-white transition-colors">Happy Hour Specials</Link></li>
              <li><Link href="/coupons" className="hover:text-white transition-colors">Coupons &amp; Promo Codes</Link></li>
              <li><Link href="/nutrition-allergen-guide" className="hover:text-white transition-colors">Allergen Information</Link></li>
              <li><Link href="/locations" className="hover:text-white transition-colors">Find Locations</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Seafood Dining Blog</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors">FAQ &amp; Price Guide</Link></li>
            </ul>
          </div>

          {/* Column 4: Legal & About */}
          <div>
            <h4 className="text-white font-bold mb-4 tracking-wide uppercase text-sm">About &amp; Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-conditions" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full border-t border-gray-800"></div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 pb-4 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs leading-relaxed text-gray-500 max-w-3xl">
            <strong>Disclaimer:</strong> redlobstermenu.site is an independent informational consumer guide. It is not affiliated with, sponsored by, or endorsed by Red Lobster Hospitality LLC or RL Investor Holdings LLC. All trademarks, service marks, logos, and product names are the property of their respective owners. All prices and calorie counts are estimated for 2026.
          </p>
          <p className="text-xs text-gray-500 whitespace-nowrap">
            &copy; 2026 Red Lobster Menu Guide.
          </p>
        </div>
      </div>
    </footer>
  );
}
