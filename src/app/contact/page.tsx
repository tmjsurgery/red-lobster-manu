import SectionHeader from "@/components/ui/SectionHeader";
import Link from "next/link";
import HeroSection from "@/components/ui/HeroSection";
import MenuInterlink from "@/components/layout/MenuInterlink";

export const metadata = {
  title: "Contact Red Lobster Menu Guide | Get in Touch",
  description:
    "Contact the Red Lobster Menu Guide team with questions, price updates, or feedback. We respond within 24-48 hours.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Red Lobster Menu Guide | Get in Touch",
    description: "Have a question, feedback, or want to report an issue on RedLobsterMenu.site? Contact our team of seafood enthusiasts.",
    url: "https://redlobstermenu.site/contact",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Red Lobster Menu Guide",
    description: "Get in touch with RedLobsterMenu.site team.",
  }
};

const faqs = [
  {
    q: "Are you affiliated with Red Lobster?",
    a: "No. We are a 100% independent fan site and consumer resource. We have no commercial affiliation with Red Lobster Hospitality LLC or its parent companies.",
  },
  {
    q: "Can you help me with my Red Lobster restaurant order or reservation?",
    a: "Unfortunately, no. For live orders, table reservations, or customer support issues, please contact Red Lobster directly at redlobster.com or call your local restaurant.",
  },
  {
    q: "How do I report incorrect or outdated menu information?",
    a: "Simply use the form on this page and detail the item, price, or location discrepancy. Our menu research team reviews and verifies all reports regularly.",
  },
  {
    q: "Can I submit a guest post or collaborate with your team?",
    a: "Yes! We welcome contributions from food writers, culinary researchers, and seafood enthusiasts. Send us a message via the form with your proposal.",
  },
];

export default function ContactPage() {
  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      <HeroSection 
        title="Contact Our Menu Research Team" 
        subtitle="Have a question, noticed a local price variation, or want to share feedback? We respond promptly."
        ctaText="View Menu Prices"
        ctaLink="/menu"
        backgroundImage="/hero-section.webp"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Competitor Style Research Meta Bar */}
        <div className="research-meta-bar mb-8">
          <span className="font-bold text-gray-900">Red Lobster Editorial &amp; Support Team</span>
          <span>•</span>
          <span>Verified Response Time: Under 48 Hours</span>
          <span>•</span>
          <span>Independent Consumer Guide</span>
        </div>

        {/* Competitor Callout Box */}
        <div className="callout-box mb-10">
          <div className="flex items-start gap-3">
            <span className="text-2xl mt-0.5">💬</span>
            <div>
              <h3 className="font-bold text-gray-900 text-base mb-1">
                Help Us Keep Red Lobster Prices 100% Accurate
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Prices and menu items vary across the United States. If your local Red Lobster has updated prices or special offers not listed on our site, please send us a note with your city or state and we will update our database promptly.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-[#EAD9D9]">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
              <span className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-lg text-[#B33A3A] font-bold">
                ✉️
              </span>
              <div>
                <h2 className="text-xl font-black text-gray-900">Send Us a Message</h2>
                <p className="text-xs text-gray-500">We typically reply within 24–48 business hours.</p>
              </div>
            </div>

            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                  Your Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="e.g. Sarah Jenkins"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:border-[#B33A3A] focus:outline-none focus:ring-1 focus:ring-[#B33A3A] text-gray-900 bg-white placeholder-gray-400 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="sarah@example.com"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:border-[#B33A3A] focus:outline-none focus:ring-1 focus:ring-[#B33A3A] text-gray-900 bg-white placeholder-gray-400 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                  Subject / Category
                </label>
                <select
                  id="subject"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:border-[#B33A3A] focus:outline-none focus:ring-1 focus:ring-[#B33A3A] text-gray-900 bg-white transition-colors"
                >
                  <option>Menu Item or Price Discrepancy</option>
                  <option>Deal / Coupon Report</option>
                  <option>Nutritional / Allergen Feedback</option>
                  <option>Content Partnership or Collaboration</option>
                  <option>General Inquiries &amp; Suggestions</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Please specify menu items, prices, or your questions in detail..."
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:border-[#B33A3A] focus:outline-none focus:ring-1 focus:ring-[#B33A3A] text-gray-900 bg-white placeholder-gray-400 transition-colors"
                />
              </div>

              <button
                type="button"
                className="w-full bg-[#B33A3A] hover:bg-[#992F2F] text-white font-bold py-3.5 px-6 rounded-xl transition-all shadow-md hover:shadow-red-900/30 flex items-center justify-center gap-2 cursor-pointer text-sm"
              >
                <span>Send Message</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          </div>

          {/* Info Panel & Quick Links (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm border border-[#EAD9D9]">
              <h2 className="text-lg font-bold text-gray-900 mb-5 pb-3 border-b border-gray-100 flex items-center gap-2">
                <span>📍</span> Contact Information
              </h2>
              <ul className="space-y-4 text-sm text-gray-600">
                <li className="flex gap-3.5 items-start">
                  <span className="w-8 h-8 rounded-full bg-red-50 flex-shrink-0 flex items-center justify-center text-[#B33A3A] font-bold text-sm">
                    ✉️
                  </span>
                  <div>
                    <p className="font-bold text-gray-900">Direct Email</p>
                    <p className="text-gray-600 text-xs mt-0.5">hello@redlobstermenu.site</p>
                  </div>
                </li>
                <li className="flex gap-3.5 items-start">
                  <span className="w-8 h-8 rounded-full bg-red-50 flex-shrink-0 flex items-center justify-center text-[#B33A3A] font-bold text-sm">
                    ⏱️
                  </span>
                  <div>
                    <p className="font-bold text-gray-900">Average Response Time</p>
                    <p className="text-gray-600 text-xs mt-0.5">Within 24–48 business hours</p>
                  </div>
                </li>
                <li className="flex gap-3.5 items-start">
                  <span className="w-8 h-8 rounded-full bg-amber-50 flex-shrink-0 flex items-center justify-center text-amber-700 font-bold text-sm">
                    ⚠️
                  </span>
                  <div>
                    <p className="font-bold text-gray-900">Official Restaurant Inquiries</p>
                    <p className="text-gray-600 text-xs mt-0.5 leading-relaxed">
                      For official Red Lobster online orders, table bookings, or corporate feedback, please visit{" "}
                      <a href="https://www.redlobster.com" target="_blank" rel="noopener noreferrer" className="underline text-[#B33A3A] font-medium">
                        redlobster.com
                      </a>.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#B33A3A] to-[#8C2A2A] rounded-2xl p-6 sm:p-7 text-white shadow-md">
              <h3 className="font-black text-lg mb-2 flex items-center gap-2">
                <span>🦞</span> Quick Menu Lookups
              </h3>
              <p className="text-red-100 text-xs mb-4 leading-relaxed">
                Most diner queries can be answered instantly by exploring our updated 2026 pricing and menu sections:
              </p>
              <ul className="space-y-2 text-xs font-semibold">
                <li>
                  <Link href="/dinner-menu" className="flex items-center justify-between p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                    <span>→ Dinner Menu &amp; Feasts</span>
                    <span className="text-red-200">View &rarr;</span>
                  </Link>
                </li>
                <li>
                  <Link href="/lunch-menu" className="flex items-center justify-between p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                    <span>→ $10 Lunch Specials</span>
                    <span className="text-red-200">View &rarr;</span>
                  </Link>
                </li>
                <li>
                  <Link href="/coupons" className="flex items-center justify-between p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                    <span>→ Coupons &amp; Promo Codes</span>
                    <span className="text-red-200">View &rarr;</span>
                  </Link>
                </li>
                <li>
                  <Link href="/nutrition-allergen-guide" className="flex items-center justify-between p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                    <span>→ Nutrition &amp; Allergen Guide</span>
                    <span className="text-red-200">View &rarr;</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-14">
          <div className="text-center mb-8">
            <span className="section-pill-banner">CONTACT FAQS</span>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mt-4 tracking-tight">
              Frequently Asked Questions Before Reaching Out
            </h2>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-[#EAD9D9] divide-y divide-gray-100">
            {faqs.map((item) => (
              <div key={item.q} className="py-5 first:pt-0 last:pb-0">
                <h3 className="font-bold text-gray-900 text-base mb-2 flex items-center gap-2">
                  <span className="text-[#B33A3A] font-black">Q:</span>
                  <span>{item.q}</span>
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed pl-6">{item.a}</p>
              </div>
            ))}
          </div>
        </div>

        <MenuInterlink currentPage="/contact" />
      </div>
    </div>
  );
}
