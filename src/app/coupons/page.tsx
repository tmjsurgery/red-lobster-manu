"use client";

import Script from "next/script";
import Link from "next/link";
import { useState } from "react";
import HeroSection from "@/components/ui/HeroSection";
import MenuInterlink from "@/components/layout/MenuInterlink";

// ── Promo Codes ─────────────────────────────────────────────────────────────
const promoCoupons = [
  {
    title: "Limited Offer: 20% Off Orders $40+ at RedLobster.com",
    badge: "Promo Code",
    badgeColor: "bg-red-50 text-[#B33A3A] border border-red-200",
    code: "RR3K3ZVA",
    used: "187 times",
    success: "50%",
    highlight: true,
    desc: "Use this code at checkout on redlobster.com for 20% off orders of $40 or more. Limited time.",
  },
  {
    title: "Today Only: 25% Off Some Goods",
    badge: "Promo Code",
    badgeColor: "bg-red-50 text-[#B33A3A] border border-red-200",
    code: "ORDERING",
    used: "19 times",
    success: "100%",
    highlight: true,
    desc: "Flash deal — 25% off select menu items. Apply at checkout online.",
  },
  {
    title: "Promotion: 5% Savings Using Their Promo Code",
    badge: "Promo Code",
    badgeColor: "bg-amber-50 text-amber-800 border border-amber-200",
    code: "LOBSTER64",
    used: "9 times",
    success: "100%",
    highlight: false,
    desc: "Apply this promo code at online checkout for 5% off your order.",
  },
  {
    title: "Promotion: $5 Off With Minimum Investment",
    badge: "Promo Code",
    badgeColor: "bg-purple-50 text-purple-700 border border-purple-200",
    code: "LOBSTER98",
    used: "3 times",
    success: "100%",
    highlight: false,
    desc: "Get $5 off your order when you meet the minimum spend at redlobster.com.",
  },
  {
    title: "Special Deal: 5% Off",
    badge: "Promo Code",
    badgeColor: "bg-amber-50 text-amber-800 border border-amber-200",
    code: "AUTUMN",
    used: "3 times",
    success: "100%",
    highlight: false,
    desc: "Another verified 5% off promo code valid at redlobster.com.",
  },
  {
    title: "Promotion: 10% Off Orders $40+ With Coupon Code",
    badge: "Promo Code",
    badgeColor: "bg-amber-50 text-amber-800 border border-amber-200",
    code: "CRABFEST3",
    used: "17 times",
    success: "100%",
    highlight: false,
    desc: "Apply promo code at checkout for 10% savings on orders of $40 or more.",
  },
  {
    title: "Special Deal: 10% Off Dine-In With $40 Min Spend",
    badge: "Promo Code",
    badgeColor: "bg-blue-50 text-blue-700 border border-blue-200",
    code: "24E010",
    used: "12 times",
    success: "100%",
    highlight: false,
    desc: "10% off your dine-in bill when you spend $40 or more. Show this code to your server.",
  },
];

// ── Free Deals & Rewards ──────────────────────────────────────────────────────
const freeDeals = [
  {
    title: "Download Mobile App — Get Exclusive Offers",
    badge: "App Deal",
    badgeColor: "bg-emerald-50 text-emerald-700 border border-emerald-200",
    used: "1,893 times",
    success: "100%",
    highlight: true,
    desc: "Download the My Red Lobster app to unlock exclusive app-only deals, coupons, and order tracking.",
  },
  {
    title: "20% Off Your First Order (New Members)",
    badge: "New Member",
    badgeColor: "bg-emerald-50 text-emerald-700 border border-emerald-200",
    used: "800+ times",
    success: "100%",
    highlight: true,
    desc: "New Rewards members receive 20% off their next qualifying order of $30 or more.",
  },
  {
    title: "Get 75 Bonus Points When You Join Red Lobster Rewards",
    badge: "Rewards",
    badgeColor: "bg-blue-50 text-blue-700 border border-blue-200",
    used: "92 times",
    success: "100%",
    highlight: true,
    desc: "New members receive 75 bonus points just for signing up — worth a free side dish or starter.",
  },
  {
    title: "Earn 1 Point for Every $1 Spent on Meals",
    badge: "Rewards",
    badgeColor: "bg-blue-50 text-blue-700 border border-blue-200",
    used: "203 times",
    success: "100%",
    highlight: false,
    desc: "Join My Red Lobster Rewards and earn 1 point for every dollar spent. Redeem points for free food.",
  },
  {
    title: "Sign Up for Email Offers",
    badge: "Free Deal",
    badgeColor: "bg-emerald-50 text-emerald-700 border border-emerald-200",
    used: "339 times",
    success: "100%",
    highlight: false,
    desc: "Subscribe to the Red Lobster email list to receive exclusive digital coupons and seasonal promotions.",
  },
  {
    title: "Free Dessert or Appetizer on Your Birthday",
    badge: "Rewards",
    badgeColor: "bg-pink-50 text-pink-700 border border-pink-200",
    used: "500+ times",
    success: "100%",
    highlight: false,
    desc: "Register your birthday in the Rewards app 10 days before your birthday month to receive a free dessert or appetizer.",
  },
  {
    title: "12 Free Cheddar Bay Biscuits To Go",
    badge: "App Deal",
    badgeColor: "bg-amber-50 text-amber-800 border border-amber-200",
    used: "400+ times",
    success: "100%",
    highlight: false,
    desc: "Download the app and place a To Go order of $15+ to receive 12 free warm Cheddar Bay Biscuits.",
  },
];

// ── Weekday Daily Deals ───────────────────────────────────────────────────────
const weeklyDeals = [
  { day: "Monday", deal: "Endless Shrimp", price: "$24.99", desc: "Unlimited Garlic Scampi, Walt's Favorite Shrimp, Coconut Shrimp & more + 1 side." },
  { day: "Tuesday", deal: "Linguini Alfredo", price: "$14.99", desc: "Shrimp or chicken in creamy garlic Alfredo sauce over linguini + one side." },
  { day: "Wednesday", deal: "Steak & Lobster", price: "$24.99", desc: "Maine lobster tail + 7 oz. sirloin steak + choice of side. Best mid-week splurge." },
  { day: "Thursday", deal: "Lobster & Shrimp Scampi", price: "$19.99", desc: "Maine lobster tail + Garlic Shrimp Scampi + 1 side. Great value combo." },
  { day: "Friday", deal: "Fish & Chips", price: "$15.99", desc: "Beer-battered wild-caught cod + Chesapeake fries + coleslaw + hush puppies." },
];

// ── Savings Summary ───────────────────────────────────────────────────────────
const savingStrategies = [
  { strategy: "Promo Code: 20% Off $40+", saving: "Code: RR3K3ZVA" },
  { strategy: "Promo Code: 25% Off (Today)", saving: "Code: ORDERING" },
  { strategy: "Promo Code: 10% Off $40+", saving: "Code: CRABFEST3" },
  { strategy: "Promo Code: 10% Dine-In $40+", saving: "Code: 24E010" },
  { strategy: "Join Rewards (New Member)", saving: "20% off next order $30+" },
  { strategy: "75 Bonus Points on Sign-Up", saving: "Free side or starter" },
  { strategy: "App Download Deal", saving: "12 Free Cheddar Bay Biscuits" },
  { strategy: "Earn & Redeem Points", saving: "Free items per 125 pts" },
  { strategy: "Birthday Month Reward", saving: "Free dessert or appetizer" },
  { strategy: "Friday Fish & Chips Deal", saving: "$15.99 — sides included" },
  { strategy: "Happy Hour (M–F 3–6 PM)", saving: "$5 drinks + $2 off apps" },
  { strategy: "Buy Gift Card Packs", saving: "$50 card for $40 = 20% off" },
];

export default function CouponsPage() {
  const [copied, setCopied] = useState<string | null>(null);

  function copyCode(code: string) {
    navigator.clipboard.writeText(code);
    setCopied(code);
    setTimeout(() => setCopied(null), 2500);
  }

  return (
    <div className="bg-[#F8FAFC]">
      <Script 
        id="coupons-jsonld" 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Red Lobster Coupons & Promo Codes 2026",
          "description": "Verified Red Lobster coupons and promo codes for 2026.",
          "offers": promoCoupons.map(c => ({
            "@type": "Offer",
            "name": c.title,
            "description": c.desc,
            "priceCurrency": "USD",
            "price": "0",
            "eligibleRegion": {
              "@type": "Country",
              "name": "US"
            }
          }))
        })}} 
      />

      {/* ── TOP HERO SECTION ─────────────────────────────────── */}
      <HeroSection 
        title="Red Lobster Coupons & Promo Codes 2026" 
        subtitle="All verified Red Lobster discount codes, app rewards, birthday coupons, and weekday savings hacks in one convenient place."
        badge="Verified 2026 Coupons • 18 Active Deals"
        ctaText="View Promo Codes"
        ctaLink="#promo-codes"
        secondaryCtaText="Rewards Program"
        secondaryCtaLink="#rewards-program"
        backgroundImage="/hero-section.webp"
        stats={[
          { label: "Active Deals", value: "18 Deals", sub: "Codes & Rewards" },
          { label: "Max Discount", value: "Up to 25%", sub: "Online & app" },
          { label: "Free Biscuits", value: "12 Free", sub: "App order perk" },
          { label: "Birthday Perk", value: "Free Dessert", sub: "Rewards members" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-4 text-xs text-gray-500 flex items-center gap-2">
          <Link href="/" className="hover:text-[#B33A3A] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#B33A3A] font-bold">Red Lobster Coupons &amp; Promo Codes 2026</span>
        </nav>

        {/* ── RESEARCH BYLINE & VERIFICATION BAR ───────────────── */}
        <div className="research-meta-bar mb-6 flex justify-between items-center">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-bold text-gray-800">By Coupon &amp; Deals Team</span>
            <span className="text-gray-400">|</span>
            <span>Monthly Code Audit 2026</span>
            <span className="text-gray-400">|</span>
            <span className="text-emerald-700 font-semibold flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
              Verified Against the Official Red Lobster App
            </span>
          </div>
          <span className="text-xs text-gray-400 hidden sm:inline">
            Updated Regularly
          </span>
        </div>

        {/* ── HOW TO USE NOTICE ─────────────────────────────────── */}
        <div className="callout-box mb-12">
          <h2 className="font-extrabold text-gray-900 text-base mb-1">How to Use These Coupon Codes</h2>
          <p className="text-gray-700 text-sm leading-relaxed">
            Click <strong>Copy Code</strong>, open{" "}
            <a href="https://www.redlobster.com" target="_blank" rel="noopener noreferrer" className="underline font-bold text-[#B33A3A]">redlobster.com</a>,
            add your favorite seafood items to your cart, and paste the code at checkout. For dine-in coupons, present the code on your mobile phone to your server before requesting the check.
          </p>
        </div>

        {/* ── REAL PROMO CODES ──────────────────────────────────── */}
        <section id="promo-codes" className="mb-16 scroll-mt-20">
          <div className="text-center mb-8 max-w-3xl mx-auto">
            <h2 className="section-pill-banner">
              Promo Codes &amp; Discount Coupons
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Verified coupon codes — click Copy Code and paste at checkout on redlobster.com.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {promoCoupons.map((coupon, idx) => (
              <div
                key={idx}
                className="lobster-card bg-white rounded-2xl border border-[#EAD9D9] shadow-sm p-5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-3">
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${coupon.badgeColor}`}>
                      {coupon.badge}
                    </span>
                    {coupon.highlight && (
                      <span className="text-xs bg-[#B33A3A] text-white px-2.5 py-1 rounded-full font-bold shadow-sm">
                        Hot Deal
                      </span>
                    )}
                  </div>
                  <h3 className="font-extrabold text-gray-900 text-base mb-2 leading-snug">{coupon.title}</h3>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-4">{coupon.desc}</p>
                </div>

                <div>
                  <div className="bg-[#FFFBFB] border-2 border-dashed border-[#F0D5D5] rounded-xl px-4 py-3 mb-3 flex items-center justify-between gap-3">
                    <div>
                      <p className="text-[10px] text-gray-400 uppercase font-black tracking-wider mb-0.5">Coupon Code</p>
                      <p className="text-2xl font-black text-[#B33A3A] tracking-widest">{coupon.code}</p>
                    </div>
                    <button
                      onClick={() => copyCode(coupon.code)}
                      className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition-all flex-shrink-0 cursor-pointer ${
                        copied === coupon.code
                          ? "bg-emerald-600 text-white scale-95 shadow-sm"
                          : "bg-[#B33A3A] hover:bg-[#992F2F] text-white shadow-sm"
                      }`}
                    >
                      {copied === coupon.code ? "Copied!" : "Copy Code"}
                    </button>
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>Used: <strong className="text-gray-600">{coupon.used}</strong></span>
                    <span>Success Rate: <strong className="text-emerald-700 font-bold">{coupon.success}</strong></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── FREE DEALS & REWARDS ──────────────────────────────── */}
        <section className="mb-16">
          <div className="text-center mb-8 max-w-3xl mx-auto">
            <h2 className="section-pill-banner">
              Free Deals &amp; Rewards Offers
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              No promo code needed — verified 100% success rate offers from My Red Lobster Rewards and official app promotions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {freeDeals.map((deal, idx) => (
              <div
                key={idx}
                className="lobster-card bg-white rounded-2xl border border-[#EAD9D9] shadow-sm p-5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${deal.badgeColor}`}>
                      {deal.badge}
                    </span>
                    <span className="text-xs text-emerald-700 font-extrabold bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/80">
                      No Code Needed
                    </span>
                  </div>
                  <h3 className="font-extrabold text-gray-900 text-base mb-2 leading-snug">{deal.title}</h3>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-4">{deal.desc}</p>
                </div>
                <div>
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100 text-xs text-gray-400 mb-3">
                    <span>Used: <strong className="text-gray-600">{deal.used}</strong></span>
                    <span>Success: <strong className="text-emerald-700 font-bold">{deal.success}</strong></span>
                  </div>
                  <a
                    href="https://www.redlobster.com/rewards"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center bg-[#B33A3A] hover:bg-[#992F2F] text-white font-extrabold py-2.5 px-4 rounded-full text-xs uppercase tracking-wider transition-colors shadow-sm"
                  >
                    Get This Deal &rarr;
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── ALL WAYS TO SAVE SUMMARY ──────────────────────────── */}
        <section className="mb-16">
          <div className="text-center mb-8 max-w-3xl mx-auto">
            <h2 className="section-pill-banner text-lg sm:text-2xl">
              All Ways to Save at Red Lobster — Quick Reference
            </h2>
          </div>
          <div className="competitor-table-container overflow-x-auto">
            <table className="w-full text-sm text-left border-collapse min-w-[500px]">
              <thead>
                <tr>
                  <th className="py-3.5 px-4 font-black">Strategy / Offer</th>
                  <th className="py-3.5 px-4 font-black">Savings / Coupon Code</th>
                </tr>
              </thead>
              <tbody>
                {savingStrategies.map((s, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white hover:bg-[#FFF8F8] transition-colors" : "bg-[#FAFCFF] hover:bg-[#FFF8F8] transition-colors"}>
                    <td className="py-3.5 px-4 font-extrabold text-gray-900">{s.strategy}</td>
                    <td className="py-3.5 px-4 text-[#B33A3A] font-black">{s.saving}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── REWARDS PROGRAM CTA ───────────────────────────────── */}
        <section id="rewards-program" className="bg-gradient-to-br from-[#FFF5F5] to-white border border-[#EAD9D9] rounded-3xl p-6 sm:p-10 mb-12 text-center shadow-sm scroll-mt-20">
          <h2 className="text-2xl sm:text-3xl font-black text-[#B33A3A] mb-2 tracking-tight">My Red Lobster Rewards℠</h2>
          <p className="text-gray-600 mb-6 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            The single most reliable way to save at Red Lobster — completely free to join via website or mobile app.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 text-left max-w-2xl mx-auto">
            {[
              { label: "On Sign-Up", value: "75 Bonus Points" },
              { label: "Every $1 Spent", value: "1 Point Earned" },
              { label: "Per 125 Points", value: "Free Menu Item" },
            ].map((item) => (
              <div key={item.label} className="bg-white rounded-2xl border border-[#F0D5D5] p-4 text-center shadow-xs">
                <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">{item.label}</p>
                <p className="text-xl font-black text-[#B33A3A] mt-0.5">{item.value}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="https://www.redlobster.com/rewards"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#B33A3A] hover:bg-[#992F2F] text-white font-extrabold text-xs uppercase tracking-wider py-3 px-8 rounded-full transition-colors shadow-md"
            >
              Join Free Online &rarr;
            </a>
            <a
              href="https://www.redlobster.com/rewards"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-[#B33A3A] text-[#B33A3A] font-extrabold text-xs uppercase tracking-wider py-3 px-8 rounded-full hover:bg-[#B33A3A] hover:text-white transition-colors"
            >
              Download App
            </a>
          </div>
        </section>

        {/* ── DISCLAIMER & LINKS ───────────────────────────────── */}
        <div className="callout-box mb-8 text-xs text-gray-500">
          <strong>Disclaimer:</strong> Promo codes and discount offers are subject to expiration and local participating restaurant policies. redlobstermenu.site is an independent guide not affiliated with Red Lobster Hospitality LLC. Always confirm promo codes directly on{" "}
          <a href="https://www.redlobster.com" target="_blank" rel="noopener noreferrer" className="text-[#B33A3A] underline font-bold">redlobster.com</a>.
        </div>

        <MenuInterlink currentPage="/coupons" />
      </div>
    </div>
  );
}
