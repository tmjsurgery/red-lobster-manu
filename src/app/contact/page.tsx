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
    a: "No. We are a 100% independent fan site. We have no affiliation with Red Lobster Hospitality LLC or its parent companies.",
  },
  {
    q: "Can you help me with my Red Lobster order or reservation?",
    a: "Unfortunately, no. For order issues, reservations, or customer service, please contact Red Lobster directly at redlobster.com or call your local restaurant.",
  },
  {
    q: "How do I report incorrect menu information?",
    a: "Simply use the form on this page and describe the issue. We review all reports and update our content regularly.",
  },
  {
    q: "Can I submit a guest blog post or content partnership?",
    a: "Yes! We welcome contributions from food writers and seafood enthusiasts. Reach out via the contact form with your idea.",
  },
];

export default function ContactPage() {
  return (
    <div>
      <HeroSection 
        title="Contact Us" 
        subtitle="Have a question, found incorrect information, or want to collaborate? We'd love to hear from you."
        ctaText=""
        ctaLink=""
        backgroundImage="/hero-section.webp"
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Intro */}
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10 text-lg">
        Have a question, found incorrect information, or want to collaborate? We&apos;d love to hear from you. Fill out the form below and our team will get back to you within <strong>24–48 hours</strong>.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Contact Form */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
          <form className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="e.g. John Smith"
                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 shadow-sm focus:border-[#7c1d27] focus:outline-none focus:ring-1 focus:ring-[#7c1d27] text-gray-800"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="you@example.com"
                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 shadow-sm focus:border-[#7c1d27] focus:outline-none focus:ring-1 focus:ring-[#7c1d27] text-gray-800"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-1">
                Subject
              </label>
              <select
                id="subject"
                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 shadow-sm focus:border-[#7c1d27] focus:outline-none focus:ring-1 focus:ring-[#7c1d27] text-gray-800"
              >
                <option>Menu Information Correction</option>
                <option>Coupon / Deal Issue</option>
                <option>Content Partnership</option>
                <option>General Feedback</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Describe your question or feedback in detail..."
                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 shadow-sm focus:border-[#7c1d27] focus:outline-none focus:ring-1 focus:ring-[#7c1d27] text-gray-800"
              />
            </div>
            <button
              type="button"
              className="w-full bg-[#7c1d27] text-white font-bold py-3 px-4 rounded-lg hover:bg-[#5a131b] transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Info Panel */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Quick Info</h2>
            <ul className="space-y-4 text-sm text-gray-600">
              <li className="flex gap-3 items-start">
                <span className="text-[#7c1d27] font-bold text-lg mt-0.5">✉</span>
                <div>
                  <p className="font-semibold text-gray-800">Email</p>
                  <p>hello@redlobstermenu.site</p>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-[#7c1d27] font-bold text-lg mt-0.5">⏱</span>
                <div>
                  <p className="font-semibold text-gray-800">Response Time</p>
                  <p>Typically within 24–48 hours on business days</p>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-[#7c1d27] font-bold text-lg mt-0.5">⚠</span>
                <div>
                  <p className="font-semibold text-gray-800">Please Note</p>
                  <p>We cannot assist with official Red Lobster orders, reservations, or rewards points. Please contact <a href="https://www.redlobster.com" target="_blank" rel="noopener noreferrer" className="underline text-[#7c1d27]">redlobster.com</a> for those.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-[#7c1d27] rounded-2xl p-6 text-white">
            <h3 className="font-bold text-lg mb-3">Looking for menu info?</h3>
            <p className="text-red-200 text-sm mb-4">
              Chances are the answer is already on our site! Check out our most popular pages below:
            </p>
            <ul className="space-y-2 text-sm">
              <li><Link href="/menu" className="text-white hover:underline">→ Full Menu &amp; Prices</Link></li>
              <li><Link href="/coupons" className="text-white hover:underline">→ Coupons &amp; Promo Codes</Link></li>
              <li><Link href="/happy-hour" className="text-white hover:underline">→ Happy Hour Guide</Link></li>
              <li><Link href="/nutrition-allergen-guide" className="text-white hover:underline">→ Allergen Guide</Link></li>
              <li><Link href="/faq" className="text-white hover:underline">→ FAQs</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* FAQ section */}
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Frequently Asked Before Contacting Us</h2>
        <div className="space-y-5">
          {faqs.map((item) => (
            <div key={item.q} className="border-b border-gray-100 pb-5 last:border-0 last:pb-0">
              <h3 className="font-semibold text-gray-900 mb-2">{item.q}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </div>

      <MenuInterlink currentPage="/contact" />
      </div>
    </div>
  );
}
