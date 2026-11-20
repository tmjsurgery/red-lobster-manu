import Link from "next/link";
import Script from "next/script";
import HeroSection from "@/components/ui/HeroSection";
import MenuInterlink from "@/components/layout/MenuInterlink";

export const metadata = {
  title: "Red Lobster Menu & Restaurant Locations Near You 2026",
  description:
    "Find Red Lobster menu locations near you in 2026. Check local restaurant hours, dine-in availability, takeout pickup, and delivery options.",
  alternates: {
    canonical: "/locations",
  },
  openGraph: {
    title: "Red Lobster Menu & Restaurant Locations Near You 2026",
    description: "Find Red Lobster locations near you and check if they offer dine-in, curbside pickup, or delivery.",
    url: "https://redlobstermenu.site/locations",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Red Lobster Menu & Restaurant Locations Near You 2026",
    description: "Find Red Lobster locations near you.",
  }
};

export default function LocationsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Red Lobster Locations Guide 2026",
    "description": "Find Red Lobster locations near you.",
    "url": "https://redlobstermenu.site/locations"
  };

  return (
    <div className="bg-[#F8FAFC]">
      <Script id="locations-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <HeroSection 
        title="Find a Red Lobster Location Near You" 
        subtitle="Locate your nearest Red Lobster restaurant across the United States. Check daily hours, dine-in seating, curbside pickup, and delivery options."
        badge="U.S. Restaurant Directory • 2026 Guide"
        ctaText="Find Near Me"
        ctaLink="https://www.redlobster.com/locations"
        secondaryCtaText="Dinner Menu"
        secondaryCtaLink="/dinner-menu"
        backgroundImage="/hero-section.webp"
        stats={[
          { label: "Restaurants", value: "540+ Locations", sub: "Across 44 states" },
          { label: "Dine-In Hours", value: "11 AM – Close", sub: "Lunch & Dinner" },
          { label: "Takeout", value: "Curbside Available", sub: "Online ordering" },
          { label: "Cheddar Biscuits", value: "Free To-Go", sub: "Included with order" },
        ]}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-4 text-xs text-gray-500 flex items-center gap-2">
          <Link href="/" className="hover:text-[#B33A3A] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#B33A3A] font-bold">Red Lobster Locations Directory</span>
        </nav>

        {/* ── RESEARCH BYLINE & VERIFICATION BAR ───────────────── */}
        <div className="research-meta-bar mb-6 flex justify-between items-center">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-bold text-gray-800">By Locations &amp; Store Directory Team</span>
            <span className="text-gray-400">|</span>
            <span>2026 Restaurant Network Audit</span>
            <span className="text-gray-400">|</span>
            <span className="text-emerald-700 font-semibold flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
              Verified Store Locator Links
            </span>
          </div>
          <span className="text-xs text-gray-400 hidden sm:inline">
            540+ U.S. Locations
          </span>
        </div>

        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="section-pill-banner">
            Locate Your Nearest Red Lobster Restaurant
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Ready for fresh Maine lobster and unlimited hot Cheddar Bay Biscuits? Connect with your local restaurant for dine-in reservations or takeout orders.
          </p>
        </div>

        <div className="callout-box max-w-2xl mx-auto mb-12 text-center">
          <h3 className="text-lg font-black text-gray-900 mb-3">Search Official Store Directory</h3>
          <p className="text-xs text-gray-500 mb-4">
            Search connects directly to the official Red Lobster database for accurate live hours, table wait times, and online ordering.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <input 
              type="text" 
              placeholder="Enter City, State, or Zip Code..."
              className="w-full sm:w-2/3 px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B33A3A] focus:border-transparent text-sm bg-white"
            />
            <a 
              href="https://www.redlobster.com/locations" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-1/3 bg-[#B33A3A] hover:bg-[#992F2F] text-white font-extrabold text-xs uppercase tracking-wider py-3.5 px-6 rounded-full transition-colors shadow-md inline-flex items-center justify-center"
            >
              Search Official →
            </a>
          </div>
        </div>

        <div className="w-full h-96 bg-gray-200 rounded-3xl overflow-hidden shadow-sm border border-[#EAD9D9] mb-12">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d13264906.91456578!2d-106.1837096645511!3d37.94056285558197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sred%20lobster!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Map of Red Lobster restaurant locations"
          ></iframe>
        </div>

        <MenuInterlink currentPage="/locations" />
      </div>
    </div>
  );
}
