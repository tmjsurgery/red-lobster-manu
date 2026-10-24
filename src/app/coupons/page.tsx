"use client";

import Script from "next/script";
import Link from "next/link";
import { useState } from "react";
import HeroSection from "@/components/ui/HeroSection";
import MenuInterlink from "@/components/layout/MenuInterlink";

// ── Promo Codes (with real codes from GoodSearch July 2026) ──────────────────
const promoCoupons = [
  {
    title: "Limited Offer: 20% Off Orders $40+ at RedLobster.com",
    badge: "Promo Code",
    badgeColor: "bg-red-100 text-red-700",
    code: "RR3K3ZVA",
    used: "187 times",
    success: "50%",
    highlight: true,
    desc: "Use this code at checkout on redlobster.com for 20% off orders of $40 or more. Limited time.",
  },
  {
    title: "Today Only: 25% Off Some Goods",
    badge: "Promo Code",
    badgeColor: "bg-red-100 text-red-700",
    code: "ORDERING",
    used: "19 times",
    success: "100%",
    highlight: true,
    desc: "Flash deal — 25% off select menu items. Apply at checkout online.",
  },
  {
    title: "Promotion: 5% Savings Using Their Promo Code",
    badge: "Promo Code",
    badgeColor: "bg-orange-100 text-orange-700",
    code: "LOBSTER64",
    used: "9 times",
    success: "100%",
    highlight: false,
    desc: "Apply this promo code at online checkout for 5% off your order.",
  },
  {
    title: "Promotion: $5 Off With Minimum Investment",
    badge: "Promo Code",
    badgeColor: "bg-purple-100 text-purple-700",
    code: "LOBSTER98",
    used: "3 times",
    success: "100%",
    highlight: false,
    desc: "Get $5 off your order when you meet the minimum spend at redlobster.com.",
  },
  {
    title: "Special Deal: 5% Off",
    badge: "Promo Code",
    badgeColor: "bg-orange-100 text-orange-700",
    code: "AUTUMN",
    used: "3 times",
    success: "100%",
    highlight: false,
    desc: "Another verified 5% off promo code valid at redlobster.com.",
  },
  {
    title: "Promotion: 10% Off Orders $40+ With Coupon Code",
    badge: "Promo Code",
    badgeColor: "bg-orange-100 text-orange-700",
    code: "CRABFEST3",
    used: "17 times",
    success: "100%",
    highlight: false,
    desc: "Apply promo code at checkout for 10% savings on orders of $40 or more.",
  },
  {
    title: "Special Deal: 10% Off Dine-In With $40 Min Spend",
    badge: "Promo Code",
    badgeColor: "bg-blue-100 text-blue-700",
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
    badgeColor: "bg-green-100 text-green-700",
    used: "1,893 times",
    success: "100%",
    highlight: true,
    desc: "Download the My Red Lobster app to unlock exclusive app-only deals, coupons, and order tracking.",
  },
  {
    title: "20% Off Your First Order (New Members)",
    badge: "New Member",
    badgeColor: "bg-emerald-100 text-emerald-700",
    used: "800+ times",
    success: "100%",
    highlight: true,
    desc: "New Rewards members receive 20% off their next qualifying order of $30 or more.",
  },
  {
    title: "Get 75 Bonus Points When You Join Red Lobster Rewards",
    badge: "Rewards",
    badgeColor: "bg-blue-100 text-blue-700",
    used: "92 times",
    success: "100%",
    highlight: true,
    desc: "New members receive 75 bonus points just for signing up — worth a free side dish or starter.",
  },
  {
    title: "Earn 1 Point for Every $1 Spent on Meals",
    badge: "Rewards",
    badgeColor: "bg-blue-100 text-blue-700",
    used: "203 times",
    success: "100%",
    highlight: false,
    desc: "Join My Red Lobster Rewards and earn 1 point for every dollar spent. Redeem points for free food.",
  },
  {
    title: "Sign Up for Email Offers",
    badge: "Free Deal",
    badgeColor: "bg-green-100 text-green-700",
    used: "339 times",
    success: "100%",
    highlight: false,
    desc: "Subscribe to the Red Lobster email list to receive exclusive digital coupons and seasonal promotions.",
  },
  {
    title: "Free Dessert or Appetizer on Your Birthday",
    badge: "Rewards",
    badgeColor: "bg-pink-100 text-pink-700",
    used: "500+ times",
    success: "100%",
    highlight: false,
    desc: "Register your birthday in the Rewards app 10 days before your birthday month to receive a free dessert or appetizer.",
  },
  {
    title: "12 Free Cheddar Bay Biscuits To Go",
    badge: "App Deal",
    badgeColor: "bg-yellow-100 text-yellow-700",
    used: "400+ times",
    success: "100%",
    highlight: false,
    desc: "Download the app and place a To Go order of $15+ to receive 12 free warm Cheddar Bay Biscuits.",
  },
];

// ── Weekday Daily Deals ───────────────────────────────────────────────────────
const weeklyDeals = [
  { day: "Monday", deal: "Endless Shrimp", price: "~$20.99", desc: "Unlimited Garlic Scampi, Walt's Favorite Shrimp, Coconut Shrimp & more + 1 side." },
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
  { strategy: "Friday Fish & Chips Deal", saving: "$15.99 — 3 sides included" },
  { strategy: "Happy Hour (M–F 3–6 PM)", saving: "$5 drinks + $2 off apps" },
  { strategy: "Buy Costco Gift Cards", saving: "$50 card for $40 = 20% off" },
];

// ── Page ──────────────────────────────────────────────────────────────────────
export default function CouponsPage() {
  const [copied, setCopied] = useState<string | null>(null);

  function copyCode(code: string) {
    navigator.clipboard.writeText(code);
    setCopied(code);
    setTimeout(() => setCopied(null), 2500);
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <Script 
        id="coupons-jsonld" 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Red Lobster Coupons & Promo Codes",
          "description": "Verified Red Lobster coupons and promo codes.",
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

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <div className="bg-[#7c1d27] py-16 px-4 text-center text-white">
        <p className="text-xs uppercase tracking-widest mb-2 text-red-300 font-semibold">
          Updated July 2026 · 18 Active Deals
        </p>
        <h1 className="text-4xl md:text-5xl font-black mb-4">
          Red Lobster Menu Coupons &amp; Promo Codes 2026
        </h1>
        <p className="text-lg text-red-100 max-w-2xl mx-auto mb-6">
          All verified Red Lobster deals for July 2026 — 7 real promo codes, free Rewards offers, and weekday daily specials in one place.
        </p>
        <div className="flex flex-wrap justify-center gap-3 text-sm font-semibold">
          <span className="bg-white/20 px-4 py-2 rounded-full">18 Total Deals</span>
          <span className="bg-white/20 px-4 py-2 rounded-full">Up to 25% Off</span>
          <span className="bg-white/20 px-4 py-2 rounded-full">7 Real Promo Codes</span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 pb-16">

        {/* ── How to Use Notice ─────────────────────────────────── */}
        <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-5 my-8">
          <h2 className="font-black text-amber-800 text-base mb-1">How to Use These Coupon Codes</h2>
          <p className="text-amber-700 text-sm leading-relaxed">
            These promo codes are sourced from <strong>GoodSearch.com</strong> and verified for July 2026.
            Click <strong>Copy Code</strong>, go to{" "}
            <a href="https://www.redlobster.com" target="_blank" rel="noopener noreferrer" className="underline font-semibold">redlobster.com</a>,
            add items to your cart, and paste the code at checkout. Dine-in codes should be shown to your server.
          </p>
        </div>

        {/* ── Real Promo Codes ──────────────────────────────────── */}
        <section className="mb-14">
          <h2 className="text-2xl font-black text-gray-900 mb-1">Promo Codes & Discount Coupons</h2>
          <p className="text-gray-500 text-sm mb-6">7 verified coupon codes — click Copy Code and paste at checkout on redlobster.com.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {promoCoupons.map((coupon, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-2xl border shadow-sm p-5 flex flex-col hover:shadow-md transition-all ${
                  coupon.highlight ? "border-[#7c1d27]" : "border-gray-200"
                }`}
              >
                {/* Top badges */}
                <div className="flex justify-between items-start mb-3">
                  <span className={`text-xs font-bold px-2 py-1 rounded-full ${coupon.badgeColor}`}>
                    {coupon.badge}
                  </span>
                  {coupon.highlight && (
                    <span className="text-xs bg-[#7c1d27] text-white px-2 py-1 rounded-full font-bold">
                      Hot Deal
                    </span>
                  )}
                </div>

                {/* Title & Description */}
                <h3 className="font-black text-gray-900 text-base mb-2 leading-snug">{coupon.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-grow mb-4">{coupon.desc}</p>

                {/* Code Box */}
                <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl px-4 py-3 mb-3 flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs text-gray-400 uppercase font-bold tracking-wider mb-0.5">Coupon Code</p>
                    <p className="text-2xl font-black text-[#7c1d27] tracking-widest">{coupon.code}</p>
                  </div>
                  <button
                    onClick={() => copyCode(coupon.code)}
                    className={`px-4 py-2 rounded-xl text-sm font-bold transition-all flex-shrink-0 ${
                      copied === coupon.code
                        ? "bg-green-500 text-white scale-95"
                        : "bg-[#7c1d27] text-white hover:bg-[#5a131b]"
                    }`}
                  >
                    {copied === coupon.code ? "Copied!" : "Copy Code"}
                  </button>
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>Used: <strong className="text-gray-600">{coupon.used}</strong></span>
                  <span>Success Rate: <strong className="text-green-600">{coupon.success}</strong></span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Free Deals & Rewards ──────────────────────────────── */}
        <section className="mb-14">
          <h2 className="text-2xl font-black text-gray-900 mb-1">Free Deals & Rewards Offers</h2>
          <p className="text-gray-500 text-sm mb-6">No code needed — all verified 100% success rate offers from My Red Lobster Rewards and the app.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {freeDeals.map((deal, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-2xl border shadow-sm p-5 flex flex-col hover:shadow-md transition-all ${
                  deal.highlight ? "border-green-400" : "border-gray-200"
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <span className={`text-xs font-bold px-2 py-1 rounded-full ${deal.badgeColor}`}>
                    {deal.badge}
                  </span>
                  <span className="text-xs text-green-600 font-bold bg-green-50 px-2 py-1 rounded-full">No Code Needed</span>
                </div>
                <h3 className="font-black text-gray-900 text-base mb-2 leading-snug">{deal.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-grow mb-4">{deal.desc}</p>
                <div className="flex items-center justify-between pt-3 border-t border-gray-100 text-xs text-gray-400 mb-3">
                  <span>Used: <strong className="text-gray-600">{deal.used}</strong></span>
                  <span>Success: <strong className="text-green-600">{deal.success}</strong></span>
                </div>
                <a
                  href="https://www.redlobster.com/rewards"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center bg-emerald-600 text-white font-bold py-2 px-4 rounded-full text-sm hover:bg-emerald-700 transition-colors"
                >
                  Get This Deal
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* ── Weekday Daily Deals ───────────────────────────────── */}
        <section className="mb-14">
          <h2 className="text-2xl font-black text-gray-900 mb-1">Weekday Daily Deals</h2>
          <p className="text-gray-500 text-sm mb-6">No coupon needed — automatic savings every weekday at participating U.S. locations.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {weeklyDeals.map((d) => (
              <div
                key={d.day}
                className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 flex flex-col text-center hover:border-[#7c1d27] hover:shadow-md transition-all"
              >
                <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">{d.day}</span>
                <h4 className="font-bold text-gray-900 text-sm mb-2 leading-tight">{d.deal}</h4>
                <p className="text-gray-400 text-xs mb-3 flex-grow leading-relaxed">{d.desc}</p>
                <span className="text-[#7c1d27] font-black text-xl">{d.price}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── All Ways to Save Summary ──────────────────────────── */}
        <section className="mb-14">
          <h2 className="text-2xl font-black text-gray-900 mb-6">All Ways to Save — Quick Reference</h2>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-[#7c1d27] text-white">
                <tr>
                  <th className="text-left py-3 px-5">Strategy / Offer</th>
                  <th className="text-left py-3 px-5">Savings / Code</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {savingStrategies.map((s, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="py-3 px-5 font-medium text-gray-800">{s.strategy}</td>
                    <td className="py-3 px-5 text-[#7c1d27] font-bold">{s.saving}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── Rewards Program CTA ───────────────────────────────── */}
        <section className="bg-[#fdf2f3] border border-[#e8b4b8] rounded-2xl p-8 mb-8 text-center">
          <h2 className="text-2xl font-black text-[#7c1d27] mb-2">My Red Lobster Rewards</h2>
          <p className="text-gray-600 mb-5 text-sm">The single best way to save at Red Lobster — completely free to join.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 text-left">
            {[
              { label: "On Sign-Up", value: "75 Bonus Points" },
              { label: "Every $1 Spent", value: "1 Point Earned" },
              { label: "Per 125 Points", value: "Free Menu Item" },
            ].map((item) => (
              <div key={item.label} className="bg-white rounded-xl border border-[#e8b4b8] p-4">
                <p className="text-xs text-gray-400 uppercase font-bold">{item.label}</p>
                <p className="text-lg font-black text-[#7c1d27]">{item.value}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="https://www.redlobster.com/rewards"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#7c1d27] text-white font-bold py-3 px-8 rounded-full hover:bg-[#5a131b] transition-colors"
            >
              Join Free Online
            </a>
            <a
              href="https://www.redlobster.com/rewards"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-[#7c1d27] text-[#7c1d27] font-bold py-3 px-8 rounded-full hover:bg-[#7c1d27] hover:text-white transition-colors"
            >
              Download the App
            </a>
          </div>
        </section>

        {/* ── Disclaimer & Nav Links ────────────────────────────── */}
        <div className="bg-gray-100 border border-gray-200 rounded-xl p-4 text-xs text-gray-500 mb-8">
          <strong>Disclaimer:</strong> Coupon codes sourced from GoodSearch.com (July 2026). redlobstermenu.site is an independent guide not affiliated with Red Lobster. Codes and deals may expire or vary by location. Always verify at{" "}
          <a href="https://www.redlobster.com" target="_blank" rel="noopener noreferrer" className="text-[#7c1d27] underline">redlobster.com</a>.
        </div>

        <div className="flex flex-wrap gap-3 justify-center">
          <Link href="/menu" className="inline-block bg-[#7c1d27] text-white font-bold py-3 px-8 rounded-full hover:bg-[#5a131b] transition-colors">
            View Full Menu
          </Link>
          <Link href="/lunch-menu" className="inline-block bg-white border-2 border-[#7c1d27] text-[#7c1d27] font-bold py-3 px-8 rounded-full hover:bg-[#fdf2f3] transition-colors">
            Lunch Specials
          </Link>
          <Link href="/happy-hour" className="inline-block bg-white border-2 border-gray-300 text-gray-700 font-bold py-3 px-8 rounded-full hover:bg-gray-50 transition-colors">
            Happy Hour Guide
          </Link>
        </div>

        <MenuInterlink currentPage="/coupons" />
      </div>
    </div>
  );
}
