"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { categories } from "@/lib/data";

const FacebookIcon = () => (
  <svg className="w-5 h-5 text-[#6c1c24] hover:text-[#8b1c24] cursor-pointer" fill="currentColor" viewBox="0 0 24 24" aria-label="Facebook">
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
  </svg>
);

const TwitterIcon = () => (
  <svg className="w-5 h-5 text-[#6c1c24] hover:text-[#8b1c24] cursor-pointer" fill="currentColor" viewBox="0 0 24 24" aria-label="Twitter">
    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-5 h-5 text-[#6c1c24] hover:text-[#8b1c24] cursor-pointer" fill="currentColor" viewBox="0 0 24 24" aria-label="Instagram">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/menu?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className="w-full flex flex-col z-50 bg-white sticky top-0 shadow-md">
      {/* Top Tier: Socials, Logo, Search Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-3 md:py-4 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
        
        {/* Social Icons (Left) */}
        <div className="hidden md:flex gap-4 items-center w-full md:w-1/4 justify-start">
          <FacebookIcon />
          <TwitterIcon />
          <InstagramIcon />
        </div>

        {/* Logo (Center) */}
        <div className="flex-shrink-0 flex items-center justify-center w-full md:w-2/4">
          <Link href="/" className="flex flex-col items-center group">
            <span className="text-2xl md:text-3xl font-black tracking-tight flex items-center gap-2" style={{ color: "#2B161B" }}>
              <span className="text-3xl md:text-4xl group-hover:scale-110 transition-transform">🦞</span> RED LOBSTER
            </span>
            <span className="text-[11px] md:text-xs font-bold tracking-widest text-[#7c1d27] uppercase">
              Menu &amp; Prices 2026
            </span>
          </Link>
        </div>

        {/* Search Bar (Right) */}
        <div className="w-full md:w-1/4 flex justify-center md:justify-end">
          <form onSubmit={handleSearch} className="relative w-full max-w-xs">
            <input
              type="text"
              placeholder="Search Red Lobster Menu..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-1.5 text-xs rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7c1d27] focus:border-transparent transition-all text-gray-800"
            />
            <svg
              className="w-4 h-4 text-gray-400 absolute left-3 top-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </form>
        </div>

      </div>

      {/* Bottom Tier: Navigation Links */}
      <nav className="bg-[#7c1d27] w-full border-t border-b border-[#5a131b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between md:justify-center items-center h-12 md:h-14">
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6 lg:space-x-8 items-center h-full">
              <NavLink href="/" text="Home" />
              <NavLink href="/menu" text="Menu Prices" />
              <NavLink href="/specials" text="Specials" />
              <NavLink href="/lunch-menu" text="Lunch Menu" />
              <NavLink href="/dinner-menu" text="Dinner Menu" />
              <NavLink href="/kids-menu" text="Kids Menu" />
              <NavLink href="/nutrition-calories" text="Nutrition & Calories" />
              
              {/* Mega Menu Dropdown */}
              <div className="relative group h-full flex items-center">
                <button
                  type="button"
                  className="text-white hover:text-gray-200 font-bold text-[14px] lg:text-[15px] transition-colors flex items-center gap-1 h-full cursor-pointer"
                >
                  Categories ▾
                </button>
                
                {/* Dropdown Content */}
                <div className="absolute right-0 top-full w-[620px] bg-white border border-gray-200 shadow-2xl rounded-b-xl hidden group-hover:block z-50 transition-opacity duration-200">
                  <div className="p-6 grid grid-cols-3 gap-y-3 gap-x-4">
                    {categories.map((category) => (
                      <Link 
                        key={category.id} 
                        href={`/menu/${category.slug}`}
                        className="text-gray-800 hover:text-[#7c1d27] text-xs font-semibold block transition-colors p-1 rounded hover:bg-red-50/50"
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                  <div className="bg-gray-50 p-3.5 border-t border-gray-100 flex justify-between items-center rounded-b-xl px-6">
                    <Link href="/happy-hour" className="text-gray-600 font-medium hover:text-[#7c1d27] text-xs">
                      🍸 Happy Hour Guide
                    </Link>
                    <Link href="/coupons" className="text-gray-600 font-medium hover:text-[#7c1d27] text-xs">
                      🎟️ Coupons &amp; Codes
                    </Link>
                    <Link href="/menu" className="text-[#7c1d27] font-bold hover:underline text-xs">
                      Full Menu List &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden flex w-full justify-between items-center text-white py-1">
              <span className="font-bold text-sm tracking-wider">RED LOBSTER MENU</span>
              <button 
                className="p-1.5 focus:outline-none rounded hover:bg-[#5a131b] transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? (
                  <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#7c1d27] border-t border-[#5a131b] shadow-2xl z-50 max-h-[85vh] overflow-y-auto">
          <div className="px-5 pt-3 pb-8 space-y-1 shadow-inner">
            <MobileNavLink href="/" text="Home" onClick={() => setIsMobileMenuOpen(false)} />
            <MobileNavLink href="/menu" text="Red Lobster Menu Prices" onClick={() => setIsMobileMenuOpen(false)} />
            <MobileNavLink href="/specials" text="Red Lobster Specials & Deals" onClick={() => setIsMobileMenuOpen(false)} />
            <MobileNavLink href="/lunch-menu" text="Red Lobster Lunch Menu" onClick={() => setIsMobileMenuOpen(false)} />
            <MobileNavLink href="/dinner-menu" text="Red Lobster Dinner Menu" onClick={() => setIsMobileMenuOpen(false)} />
            <MobileNavLink href="/kids-menu" text="Red Lobster Kids Menu" onClick={() => setIsMobileMenuOpen(false)} />
            <MobileNavLink href="/nutrition-calories" text="Nutrition & Calories" onClick={() => setIsMobileMenuOpen(false)} />
            <MobileNavLink href="/happy-hour" text="Happy Hour Deals" onClick={() => setIsMobileMenuOpen(false)} />
            <MobileNavLink href="/coupons" text="Coupons & Promo Codes" onClick={() => setIsMobileMenuOpen(false)} />
            <MobileNavLink href="/blog" text="Food & Dining Blog" onClick={() => setIsMobileMenuOpen(false)} />
            <MobileNavLink href="/faq" text="Frequently Asked Questions" onClick={() => setIsMobileMenuOpen(false)} />
          </div>
        </div>
      )}
    </header>
  );
}

function NavLink({ href, text }: { href: string; text: string }) {
  return (
    <Link href={href} className="text-white hover:text-gray-200 font-bold text-[14px] lg:text-[15px] transition-colors whitespace-nowrap">
      {text}
    </Link>
  );
}

function MobileNavLink({ href, text, onClick }: { href: string; text: string; onClick: () => void }) {
  return (
    <Link 
      href={href} 
      onClick={onClick}
      className="block text-white hover:text-red-100 font-semibold text-[15px] py-2.5 border-b border-[#5a131b]"
    >
      {text}
    </Link>
  );
}
