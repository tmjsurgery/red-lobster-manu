import HeroSection from "@/components/ui/HeroSection";
import MenuInterlink from "@/components/layout/MenuInterlink";
import Link from "next/link";

export const metadata = {
  title: "Terms & Conditions | Red Lobster Menu Guide 2026",
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
    <div className="bg-[#F8FAFC] min-h-screen">
      <HeroSection 
        title="Terms &amp; Conditions" 
        subtitle="Terms of use governing your access to the independent RedLobsterMenu.site guide."
        ctaText="View Menu Prices"
        ctaLink="/menu"
        backgroundImage="/hero-section.webp"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Research Meta Bar */}
        <div className="research-meta-bar mb-8">
          <span className="font-bold text-gray-900">User Agreement</span>
          <span>•</span>
          <span>Effective: 2026</span>
          <span>•</span>
          <span>Fair &amp; Transparent Terms</span>
        </div>

        {/* Callout Box */}
        <div className="callout-box mb-10">
          <div className="flex items-start gap-3">
            <span className="text-2xl mt-0.5">📋</span>
            <div>
              <h3 className="font-bold text-gray-900 text-base mb-1">
                Terms of Use Summary
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                By browsing RedLobsterMenu.site, you acknowledge that all pricing, dietary, and promotional figures provided are estimated for informational consumer research. Please confirm with official Red Lobster channels before ordering.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6 mb-12">
          {/* Section 1 */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-[#EAD9D9]">
            <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-red-50 text-[#B33A3A] font-black flex items-center justify-center text-sm">
                1
              </span>
              <span>Acceptance of Agreement</span>
            </h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              By accessing, browsing, or using <strong>RedLobsterMenu.site</strong>, you agree to be bound by these Terms and Conditions and our Privacy Policy. If you disagree with any part of these terms, please discontinue using the website.
            </p>
          </div>

          {/* Section 2 */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-[#EAD9D9]">
            <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-red-50 text-[#B33A3A] font-black flex items-center justify-center text-sm">
                2
              </span>
              <span>Informational Purpose &amp; No Warranty</span>
            </h2>
            <p className="text-gray-700 text-sm leading-relaxed mb-3">
              All menu data, nutritional estimates, price ranges, and savings advice are published strictly for general consumer reference. While we strive to maintain current information, restaurant menus, prices, and recipe formulations frequently change.
            </p>
            <p className="text-gray-700 text-sm leading-relaxed">
              We make no representations, warranties, or guarantees—express or implied—regarding the accuracy, completeness, or timeliness of any content on this website.
            </p>
          </div>

          {/* Section 3 */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-[#EAD9D9]">
            <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-red-50 text-[#B33A3A] font-black flex items-center justify-center text-sm">
                3
              </span>
              <span>Intellectual Property &amp; Trademarks</span>
            </h2>
            <p className="text-gray-700 text-sm leading-relaxed mb-3">
              "Red Lobster", "Cheddar Bay Biscuits", "Ultimate Feast", and all related logos and brand identifiers are registered trademarks of RL Investor Holdings LLC. This website is not endorsed by or affiliated with the trademark owners.
            </p>
            <p className="text-gray-700 text-sm leading-relaxed">
              Original analytical commentary, table layouts, articles, and compilations are protected by copyright law and belong to RedLobsterMenu.site.
            </p>
          </div>

          {/* Section 4 */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-[#EAD9D9]">
            <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-red-50 text-[#B33A3A] font-black flex items-center justify-center text-sm">
                4
              </span>
              <span>Limitation of Liability</span>
            </h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              Under no circumstances shall the creators, authors, or operators of this website be liable for any damages, losses, or expenses arising from the use of or reliance on information presented here, including but not limited to dietary decisions, allergic reactions, or restaurant billing discrepancies.
            </p>
          </div>

          {/* Section 5 */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-[#EAD9D9]">
            <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-red-50 text-[#B33A3A] font-black flex items-center justify-center text-sm">
                5
              </span>
              <span>Governing Law &amp; Inquiries</span>
            </h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              These terms are governed by the laws of the United States. For questions or clarification, please reach out via our{" "}
              <Link href="/contact" className="text-[#B33A3A] font-bold underline">
                Contact Page
              </Link>.
            </p>
          </div>
        </div>

        <MenuInterlink currentPage="/terms-conditions" />
      </div>
    </div>
  );
}
