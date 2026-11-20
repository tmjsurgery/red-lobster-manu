import HeroSection from "@/components/ui/HeroSection";
import MenuInterlink from "@/components/layout/MenuInterlink";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Red Lobster Menu Guide 2026",
  description: "Privacy Policy and data practices for the independent Red Lobster Menu Guide website.",
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | Red Lobster Guide",
    description: "Privacy Policy and consumer disclosures for the Red Lobster Guide website.",
    url: "https://redlobstermenu.site/privacy-policy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Red Lobster Guide",
    description: "Privacy Policy and data practices.",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      <HeroSection 
        title="Privacy Policy" 
        subtitle="How we collect, manage, and safeguard your data when using RedLobsterMenu.site."
        ctaText="Explore Menu"
        ctaLink="/menu"
        backgroundImage="/hero-section.webp"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Research Meta Bar */}
        <div className="research-meta-bar mb-8">
          <span className="font-bold text-gray-900">Privacy &amp; Data Security</span>
          <span>•</span>
          <span>Effective: 2026</span>
          <span>•</span>
          <span>Commitment to Transparency</span>
        </div>

        {/* Callout Box */}
        <div className="callout-box mb-10">
          <div className="flex items-start gap-3">
            <span className="text-2xl mt-0.5">🔒</span>
            <div>
              <h3 className="font-bold text-gray-900 text-base mb-1">
                Your Privacy Matters
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                We believe in straightforward data transparency. We do not sell your personal contact information to third parties, and we only collect technical data necessary to deliver fast, secure menu browsing.
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
              <span>Overview &amp; Scope</span>
            </h2>
            <p className="text-gray-700 text-sm leading-relaxed mb-3">
              Welcome to <strong>RedLobsterMenu.site</strong> ("we", "our", or "us"). This policy explains our practices regarding the collection, usage, and safeguarding of information when you access our independent menu portal.
            </p>
            <p className="text-gray-700 text-sm leading-relaxed">
              By visiting or using our services, you consent to the data practices described in this document.
            </p>
          </div>

          {/* Section 2 */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-[#EAD9D9]">
            <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-red-50 text-[#B33A3A] font-black flex items-center justify-center text-sm">
                2
              </span>
              <span>Information We Automatically Collect</span>
            </h2>
            <p className="text-gray-700 text-sm leading-relaxed mb-3">
              When you browse our guides, our web servers automatically log certain non-personally identifiable technical information. This includes:
            </p>
            <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1.5">
              <li>Browser type, device model, operating system, and screen resolution.</li>
              <li>Anonymized IP addresses and broad geographic location (country/city level).</li>
              <li>Pages visited, time spent per page, and referral URLs.</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-[#EAD9D9]">
            <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-red-50 text-[#B33A3A] font-black flex items-center justify-center text-sm">
                3
              </span>
              <span>Google AdSense &amp; Advertising Partners</span>
            </h2>
            <p className="text-gray-700 text-sm leading-relaxed mb-3">
              We may partner with advertising networks such as Google AdSense to serve relevant ads. Google uses cookies (including the DoubleClick cookie) to serve advertisements based on past visits to this website or other sites across the web.
            </p>
            <p className="text-gray-700 text-sm leading-relaxed">
              You can easily manage or opt out of personalized interest-based advertising by visiting Google's official{" "}
              <a href="https://myadcenter.google.com/" target="_blank" rel="noopener noreferrer" className="text-[#B33A3A] underline font-semibold">
                Google Ads Settings
              </a>{" "}
              or the Network Advertising Initiative opt-out page.
            </p>
          </div>

          {/* Section 4 */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-[#EAD9D9]">
            <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-red-50 text-[#B33A3A] font-black flex items-center justify-center text-sm">
                4
              </span>
              <span>Cookies &amp; Local Storage</span>
            </h2>
            <p className="text-gray-700 text-sm leading-relaxed mb-3">
              We use standard HTTP cookies to remember site preferences (such as search filters and UI views) and analyze site traffic patterns to improve site speed and usability.
            </p>
            <p className="text-gray-700 text-sm leading-relaxed">
              You can configure your web browser to reject cookies or notify you whenever a cookie is set. Disabling cookies will not hinder your ability to browse our menu pricing tables.
            </p>
          </div>

          {/* Section 5 */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-[#EAD9D9]">
            <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-red-50 text-[#B33A3A] font-black flex items-center justify-center text-sm">
                5
              </span>
              <span>Contact Us Regarding Your Data</span>
            </h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              If you have any questions or data requests regarding this Privacy Policy, please reach out via our{" "}
              <Link href="/contact" className="text-[#B33A3A] font-bold underline">
                Contact Page
              </Link>{" "}
              or email us at <strong>hello@redlobstermenu.site</strong>.
            </p>
          </div>
        </div>

        <MenuInterlink currentPage="/privacy-policy" />
      </div>
    </div>
  );
}
