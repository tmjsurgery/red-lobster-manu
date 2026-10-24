import SectionHeader from "@/components/ui/SectionHeader";
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
    "name": "Red Lobster Locations Guide",
    "description": "Find Red Lobster locations near you.",
    "url": "https://redlobstermenu.site/locations"
  };

  return (
    <div>
      <Script id="locations-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <HeroSection 
        title="Find a Location" 
        subtitle="Find Red Lobster locations near you and check if they offer dine-in, curbside pickup, or delivery."
        ctaText="Find Near Me"
        ctaLink="https://www.redlobster.com/locations"
        backgroundImage="/hero-section.webp"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
      <div className="text-center max-w-3xl mx-auto mb-10">
        <p className="text-lg text-gray-700">
          Ready for some seafood? Find the closest restaurant to you. 
          Note: This search connects to the official Red Lobster directory for the most accurate and up-to-date information.
        </p>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 max-w-2xl mx-auto mb-12 text-center">
        <h3 className="text-xl font-bold mb-4">Search by City or Zip Code</h3>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <input 
            type="text" 
            placeholder="Enter City, State, or Zip"
            className="w-full sm:w-2/3 px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent"
          />
          <a 
            href="https://www.redlobster.com/locations" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-1/3 bg-brand-red text-white font-bold py-3 px-6 rounded-full hover:bg-brand-red-dark transition-colors inline-block"
          >
            Search Official
          </a>
        </div>
      </div>

      <div className="w-full h-96 bg-gray-200 rounded-2xl overflow-hidden shadow-sm border border-gray-100 mb-12">
        {/* Placeholder for Google Map Embed */}
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d13264906.91456578!2d-106.1837096645511!3d37.94056285558197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sred%20lobster!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={false} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Map of locations placeholder"
        ></iframe>
      </div>

      <MenuInterlink currentPage="/locations" />
      </div>
    </div>
  );
}
