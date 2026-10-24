import SectionHeader from "@/components/ui/SectionHeader";
import HeroSection from "@/components/ui/HeroSection";

export const metadata = {
  title: "Disclaimer | Red Lobster Menu Guide",
  description: "Important legal disclaimer regarding the independent Red Lobster Menu Guide.",
  alternates: {
    canonical: "/disclaimer",
  },
  openGraph: {
    title: "Disclaimer | Red Lobster Guide",
    description: "Important legal disclaimer regarding this site.",
    url: "https://redlobstermenu.site/disclaimer",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Disclaimer | Red Lobster Guide",
    description: "Important legal disclaimer regarding this site.",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function DisclaimerPage() {
  return (
    <div>
      <HeroSection 
        title="Legal Disclaimer" 
        subtitle="Important information regarding the independent nature of this website."
        backgroundImage="/hero-section.webp"
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 prose max-w-none text-gray-700">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Independent Fan Site</h2>
        <p className="mb-4">
          <strong>Red Lobster Guide</strong> is an independent information website. 
          We are <strong>not affiliated with, endorsed by, sponsored by, or connected in any way</strong> to Red Lobster or RL Investor Holdings LLC.
        </p>
        
        <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Trademarks</h2>
        <p className="mb-4">
          "Red Lobster" and the Red Lobster logo are registered trademarks of RL Investor Holdings LLC. 
          Any use of these trademarks on this website is for informational and identification purposes only under the fair use doctrine.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Pricing and Menu Accuracy</h2>
        <p className="mb-4">
          All prices, calorie counts, and menu items listed on this website are <strong>estimates and approximations</strong> gathered from public sources and fan contributions. 
          Prices vary significantly by geographic location, date, and current promotions. 
          We do not guarantee the accuracy of any prices or nutritional information on this site. 
          For exact pricing, dietary information, and current availability, you must visit the official <a href="https://www.redlobster.com" target="_blank" rel="noopener noreferrer" className="text-brand-red underline">Red Lobster website</a> or contact your local restaurant directly.
        </p>
      </div>
      </div>
    </div>
  );
}
