import HeroSection from "@/components/ui/HeroSection";
import MenuInterlink from "@/components/layout/MenuInterlink";
import Link from "next/link";

export const metadata = {
  title: "Legal Disclaimer | Red Lobster Menu Guide 2026",
  description: "Important legal disclaimer regarding the independent consumer guide RedLobsterMenu.site.",
  alternates: {
    canonical: "/disclaimer",
  },
  openGraph: {
    title: "Disclaimer | Red Lobster Guide",
    description: "Important legal disclaimer regarding this independent consumer resource.",
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
    <div className="bg-[#F8FAFC] min-h-screen">
      <HeroSection 
        title="Legal Disclaimer & Disclosure" 
        subtitle="Important consumer disclosure regarding the independent editorial nature of this website."
        ctaText="Explore Menu Prices"
        ctaLink="/menu"
        backgroundImage="/hero-section.webp"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Research Meta Bar */}
        <div className="research-meta-bar mb-8">
          <span className="font-bold text-gray-900">Legal &amp; Consumer Compliance</span>
          <span>•</span>
          <span>Last Updated: 2026</span>
          <span>•</span>
          <span>100% Independent Fan Site</span>
        </div>

        {/* Competitor Style Callout Box */}
        <div className="callout-box mb-10">
          <div className="flex items-start gap-3">
            <span className="text-2xl mt-0.5">⚖️</span>
            <div>
              <h3 className="font-bold text-gray-900 text-base mb-1">
                Notice: Independent Consumer Publication
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                <strong>RedLobsterMenu.site</strong> is an independently operated consumer portal and seafood guide. We are not owned by, managed by, or affiliated with Red Lobster Hospitality LLC or RL Investor Holdings LLC.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6 mb-12">
          {/* Section 1 */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-[#EAD9D9]">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-full bg-red-50 text-[#B33A3A] font-black flex items-center justify-center text-sm">
                1
              </span>
              <h2 className="text-xl font-bold text-gray-900">Independent Fan &amp; Consumer Site</h2>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed mb-3">
              This website is created solely for educational, research, and consumer informational purposes. 
              We are <strong>not affiliated with, endorsed by, sponsored by, or connected in any legal capacity</strong> to Red Lobster, RL Investor Holdings LLC, or any of their franchisees or subsidiaries.
            </p>
            <p className="text-gray-700 text-sm leading-relaxed">
              Any opinions, price comparisons, healthy-eating recommendations, and tips published on this site reflect the independent research and analysis of our editorial contributors.
            </p>
          </div>

          {/* Section 2 */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-[#EAD9D9]">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-full bg-red-50 text-[#B33A3A] font-black flex items-center justify-center text-sm">
                2
              </span>
              <h2 className="text-xl font-bold text-gray-900">Trademarks &amp; Fair Use</h2>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed mb-3">
              "Red Lobster", Cheddar Bay Biscuits®, Ultimate Feast®, and any related trademarks, service marks, menu dish names, and corporate logos are the sole property of RL Investor Holdings LLC and their respective owners.
            </p>
            <p className="text-gray-700 text-sm leading-relaxed">
              The use of these proprietary names and marks on this website is strictly for informational identification, news reporting, and comparative consumer commentary under the Nominative Fair Use doctrine of United States trademark law.
            </p>
          </div>

          {/* Section 3 */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-[#EAD9D9]">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-full bg-red-50 text-[#B33A3A] font-black flex items-center justify-center text-sm">
                3
              </span>
              <h2 className="text-xl font-bold text-gray-900">Pricing &amp; Menu Information Accuracy</h2>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed mb-3">
              All menu item prices, calorie counts, allergen notices, and promotional availability listed on this site represent <strong>estimates and localized averages</strong> collected from physical menus, verified diner receipts, app listings, and public restaurant disclosures in 2026.
            </p>
            <p className="text-gray-700 text-sm leading-relaxed mb-3">
              Because restaurant operating costs, seafood market supplies, and regional pricing tiers vary widely across states and franchise locations, prices at your nearest Red Lobster may differ from the estimates shown on this site.
            </p>
            <p className="text-gray-700 text-sm leading-relaxed">
              For confirmed real-time pricing, online ordering, table reservations, and up-to-the-minute dietary data, please visit the official{" "}
              <a href="https://www.redlobster.com" target="_blank" rel="noopener noreferrer" className="text-[#B33A3A] font-bold underline">
                Red Lobster Official Website
              </a>{" "}
              or contact your local restaurant directly.
            </p>
          </div>
        </div>

        <MenuInterlink currentPage="/disclaimer" />
      </div>
    </div>
  );
}
