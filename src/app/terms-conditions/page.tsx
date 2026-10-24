import SectionHeader from "@/components/ui/SectionHeader";
import HeroSection from "@/components/ui/HeroSection";

export const metadata = {
  title: "Terms & Conditions | Red Lobster Menu Guide",
  description: "Terms and conditions for using the independent Red Lobster Menu Guide website.",
  alternates: {
    canonical: "/terms-conditions",
  },
  openGraph: {
    title: "Terms & Conditions | Red Lobster Guide",
    description: "Terms and conditions for using the Red Lobster Guide website.",
    url: "https://redlobstermenu.site/terms-conditions",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms & Conditions | Red Lobster Guide",
    description: "Terms and conditions for using the Red Lobster Guide website.",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function TermsConditionsPage() {
  return (
    <div>
      <HeroSection 
        title="Terms & Conditions" 
        subtitle="Rules and regulations for using the Red Lobster Guide website."
        backgroundImage="/hero-section.webp"
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 prose max-w-none text-gray-700">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. 
          If you do not agree to abide by the above, please do not use this service.
        </p>

        <h2>2. Use of Content</h2>
        <p>
          All content provided on this site is for informational purposes only. We make no representations as to the accuracy or completeness of any information on this site or found by following any link on this site.
        </p>

        <h2>3. Intellectual Property</h2>
        <p>
          This is an independent site. "Red Lobster" and its associated logos and menu items are trademarks of RL Investor Holdings LLC. 
          We claim no ownership over these trademarks. The content we have created (such as original articles and blog posts) is our property.
        </p>

        <h2>4. Limitation of Liability</h2>
        <p>
          We will not be liable for any errors or omissions in this information nor for the availability of this information. 
          We will not be liable for any losses, injuries, or damages from the display or use of this information.
        </p>
      </div>
      </div>
    </div>
  );
}
