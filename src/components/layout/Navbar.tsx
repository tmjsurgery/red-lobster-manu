"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { categories } from "@/lib/data";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/menu?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
      setIsMobileMenuOpen(false);
      setIsSearchOpen(false);
    }
  };

  return (
    <header className="w-full bg-[#B33A3A] sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Logo (Left) */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2.5 group">
              <span className="text-3xl sm:text-4xl group-hover:scale-110 transition-transform inline-block">
                🦞
              </span>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-black text-white tracking-tight leading-none group-hover:text-red-100 transition-colors">
                  RED LOBSTER
                </span>
                <span className="text-[10px] sm:text-[11px] font-bold text-red-100 uppercase tracking-widest mt-1">
                  Menu &amp; Prices 2026
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1 lg:space-x-3">
            {/* Menu Dropdown */}
            <div className="relative group">
              <button
                type="button"
                className="text-white hover:text-red-100 font-bold text-sm uppercase tracking-wide px-3 py-2 rounded-lg hover:bg-black/10 transition-all flex items-center gap-1 cursor-pointer"
              >
                <span>Red Lobster Menu</span>
                <svg className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div className="absolute left-0 top-full w-[640px] bg-white text-gray-800 rounded-2xl shadow-2xl border border-gray-200 p-6 hidden group-hover:block z-50 transition-all mt-1">
                <div className="text-xs font-black uppercase tracking-wider text-[#B33A3A] mb-3 pb-2 border-b border-gray-100">
                  Browse All 16 Menu Categories
                </div>
                <div className="grid grid-cols-3 gap-y-2.5 gap-x-3 text-xs">
                  {categories.map((cat) => (
                    <Link
                      key={cat.id}
                      href={`/menu/${cat.slug}`}
                      className="text-gray-700 hover:text-[#B33A3A] font-semibold py-1.5 px-2 rounded-lg hover:bg-red-50/70 transition-colors truncate"
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
                <div className="mt-4 pt-3 border-t border-gray-100 flex justify-between items-center text-xs">
                  <Link href="/happy-hour" className="text-gray-600 hover:text-[#B33A3A] font-medium">
                    🍸 Happy Hour Deals
                  </Link>
                  <Link href="/coupons" className="text-gray-600 hover:text-[#B33A3A] font-medium">
                    🎟️ Working Coupons
                  </Link>
                  <Link href="/menu" className="text-[#B33A3A] font-bold hover:underline">
                    View Complete Menu &rarr;
                  </Link>
                </div>
              </div>
            </div>

            <NavLink href="/dinner-menu" text="Dinner Menu" />
            <NavLink href="/lunch-menu" text="Lunch Menu" />
            <NavLink href="/specials" text="Daily Deals" />
            <NavLink href="/appetizers" text="Appetizers" />
            <NavLink href="/kids-menu" text="Kids Menu" />
            <NavLink href="/nutrition-calories" text="Nutrition" />
            <NavLink href="/coupons" text="Coupons" />
          </nav>

          {/* Search & Actions (Right) */}
          <div className="flex items-center gap-3">
            {/* Search Input for Desktop */}
            <form onSubmit={handleSearch} className="hidden md:flex relative items-center">
              <input
                type="text"
                placeholder="Search menu, calories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-48 lg:w-56 pl-9 pr-3 py-1.5 text-xs rounded-full bg-white/20 hover:bg-white/25 focus:bg-white text-white focus:text-gray-900 placeholder-red-100 focus:placeholder-gray-400 border border-white/25 focus:border-white focus:outline-none transition-all shadow-inner"
              />
              <svg
                className="w-4 h-4 text-white/80 absolute left-3 pointer-events-none"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </form>

            {/* Mobile Search Toggle */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="md:hidden p-2 text-white hover:bg-black/10 rounded-lg transition-colors"
              aria-label="Toggle search"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden p-2 text-white hover:bg-black/10 rounded-lg transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search Drawer (when search toggle clicked) */}
        {isSearchOpen && (
          <div className="md:hidden py-3 border-t border-white/20">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search dishes, prices, calories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
                className="w-full pl-10 pr-4 py-2 text-sm rounded-full bg-white text-gray-900 placeholder-gray-500 focus:outline-none"
              />
              <svg
                className="w-5 h-5 text-gray-500 absolute left-3.5 top-2.5 pointer-events-none"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </form>
          </div>
        )}
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="xl:hidden bg-[#992F2F] text-white border-t border-red-800 shadow-2xl max-h-[80vh] overflow-y-auto px-5 py-4 space-y-1">
          <MobileNavLink href="/" text="Home" onClick={() => setIsMobileMenuOpen(false)} />
          <MobileNavLink href="/dinner-menu" text="Dinner Menu (Feasts & Steaks)" onClick={() => setIsMobileMenuOpen(false)} />
          <MobileNavLink href="/lunch-menu" text="Lunch Menu ($10 Specials)" onClick={() => setIsMobileMenuOpen(false)} />
          <MobileNavLink href="/specials" text="Daily Deals & Specials" onClick={() => setIsMobileMenuOpen(false)} />
          <MobileNavLink href="/appetizers" text="Appetizers & Starters" onClick={() => setIsMobileMenuOpen(false)} />
          <MobileNavLink href="/menu" text="Complete Menu & Prices" onClick={() => setIsMobileMenuOpen(false)} />
          <MobileNavLink href="/kids-menu" text="Kids Menu" onClick={() => setIsMobileMenuOpen(false)} />
          <MobileNavLink href="/nutrition-calories" text="Nutrition & Calories" onClick={() => setIsMobileMenuOpen(false)} />
          <MobileNavLink href="/happy-hour" text="Happy Hour Deals" onClick={() => setIsMobileMenuOpen(false)} />
          <MobileNavLink href="/coupons" text="Coupons & Promo Codes" onClick={() => setIsMobileMenuOpen(false)} />
          <MobileNavLink href="/faq" text="Frequently Asked Questions" onClick={() => setIsMobileMenuOpen(false)} />
          <MobileNavLink href="/about" text="About Us" onClick={() => setIsMobileMenuOpen(false)} />
          <MobileNavLink href="/contact" text="Contact" onClick={() => setIsMobileMenuOpen(false)} />
        </div>
      )}
    </header>
  );
}

function NavLink({ href, text }: { href: string; text: string }) {
  return (
    <Link
      href={href}
      className="text-white hover:text-red-100 font-bold text-sm uppercase tracking-wide px-3 py-2 rounded-lg hover:bg-black/10 transition-all whitespace-nowrap"
    >
      {text}
    </Link>
  );
}

function MobileNavLink({ href, text, onClick }: { href: string; text: string; onClick: () => void }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block text-white hover:text-red-100 font-semibold text-sm py-2.5 border-b border-red-700/50"
    >
      {text}
    </Link>
  );
}
