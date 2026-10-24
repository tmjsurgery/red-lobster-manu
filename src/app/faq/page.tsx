import SectionHeader from "@/components/ui/SectionHeader";
import { faqs } from "@/lib/data";
import HeroSection from "@/components/ui/HeroSection";
import MenuInterlink from "@/components/layout/MenuInterlink";
import Script from "next/script";

export const metadata = {
  title: "Red Lobster Menu FAQs: Prices, Calories & Ordering 2026",
  description:
    "Common questions about the Red Lobster menu answered: 2026 prices, calorie counts, Cheddar Bay Biscuits, lunch specials, and takeout options.",
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: "Red Lobster Menu FAQs: Prices, Calories & Ordering 2026",
    description: "Common questions about the Red Lobster menu answered: 2026 prices and calories.",
    url: "https://redlobstermenu.site/faq",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Red Lobster Menu FAQs: Prices, Calories & Ordering 2026",
    description: "Common questions about the Red Lobster menu answered: 2026 prices and calories.",
  }
};

export default function FAQPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div>
      <Script
        id="faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HeroSection 
        title="Frequently Asked Questions" 
        subtitle="Got a question? We've got answers. Here are some of the most common questions fans ask about eating at Red Lobster."
        ctaText=""
        ctaLink=""
        backgroundImage="/hero-section.webp"
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

      <div className="space-y-6 mb-12">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
              <span className="text-brand-red mr-3">Q.</span>
              {faq.question}
            </h3>
            <div className="text-gray-600 leading-relaxed flex items-start">
              <span className="text-gray-400 font-bold mr-3 mt-1">A.</span>
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
        <MenuInterlink currentPage="/faq" />
      </div>
      </div>
    </div>
  );
}
