"use client";
import { useState } from "react";
import FAQSchema from "@/components/seo/FAQSchema";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQItem[];
  title?: string;
  subtitle?: string;
  schemaId?: string;
}

export default function FAQSection({
  faqs,
  title = "Frequently Asked Questions",
  subtitle = "Quick answers to common questions about Red Lobster menu prices, operating hours, side substitutions, and promotions.",
  schemaId = "faq-schema",
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="my-16 scroll-mt-20">
      <FAQSchema id={schemaId} faqs={faqs} />

      <div className="text-center mb-10 max-w-3xl mx-auto">
        <h2 className="section-pill-banner">
          {title}
        </h2>
        {subtitle && (
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto mt-2 leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="bg-white rounded-2xl border border-[#EAD9D9] shadow-sm overflow-hidden transition-all duration-200"
            >
              <button
                type="button"
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-5 md:p-6 flex justify-between items-center gap-4 hover:bg-red-50/40 transition-colors cursor-pointer"
                aria-expanded={isOpen}
              >
                <div className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#B33A3A] text-white flex items-center justify-center font-black text-xs shadow-sm">
                    Q{index + 1}
                  </span>
                  <h3 className="font-extrabold text-gray-900 text-base md:text-lg leading-snug">
                    {faq.question}
                  </h3>
                </div>
                <span
                  className={`flex-shrink-0 w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center font-black text-sm transition-all duration-200 ${
                    isOpen ? "rotate-180 bg-[#B33A3A] text-white border-[#B33A3A]" : "bg-gray-50 text-gray-500"
                  }`}
                >
                  ▾
                </span>
              </button>

              {isOpen && (
                <div className="px-5 md:px-6 pb-6 pt-2 text-gray-600 text-sm md:text-base leading-relaxed border-t border-[#F0E3E3] bg-[#FFFBFB]/50">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
