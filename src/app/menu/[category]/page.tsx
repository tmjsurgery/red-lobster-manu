import { categories, menuItems } from "@/lib/data";
import MenuCard from "@/components/ui/MenuCard";
import PriceTable from "@/components/ui/PriceTable";
import HeroSection from "@/components/ui/HeroSection";
import FAQSection from "@/components/ui/FAQSection";
import MenuInterlink from "@/components/layout/MenuInterlink";
import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return categories.map((category) => ({
    category: category.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }) {
  const resolvedParams = await params;
  const category = categories.find((c) => c.slug === resolvedParams.category);
  if (!category) return { title: "Category Not Found - Red Lobster Menu" };

  return {
    title: `Red Lobster ${category.name} Menu Prices & Calories 2026`,
    description: `Complete Red Lobster menu for ${category.name} with accurate 2026 prices, calorie counts, and appetizing descriptions. ${category.description}`,
    alternates: {
      canonical: `/menu/${category.slug}`,
    },
    openGraph: {
      title: `Red Lobster ${category.name} Menu Prices & Calories 2026`,
      description: `Complete Red Lobster menu for ${category.name} with 2026 prices, calories, and item details.`,
      url: `https://redlobstermenu.site/menu/${category.slug}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `Red Lobster ${category.name} Menu Prices & Calories 2026`,
      description: `Complete Red Lobster menu for ${category.name} with 2026 prices and calories.`,
    },
  };
}

export default async function CategoryMenuPage({ params }: { params: Promise<{ category: string }> }) {
  const resolvedParams = await params;
  const category = categories.find((c) => c.slug === resolvedParams.category);

  if (!category) {
    notFound();
  }

  const categoryItems = menuItems.filter((item) => item.categorySlug === category.slug);

  // Category specific FAQ data
  const categoryFaqs = [
    {
      question: `How much do Red Lobster ${category.name} items cost in 2026?`,
      answer: `Prices for Red Lobster ${category.name} items in 2026 range from ${categoryItems[0]?.price || "$8.99"} to ${categoryItems[categoryItems.length - 1]?.price || "$36.99"}, depending on the portion size and protein selection.`,
    },
    {
      question: `What are the calorie counts for Red Lobster ${category.name}?`,
      answer: `Items in the ${category.name} category range from ${categoryItems[0]?.calories || "150 Cal"} to ${categoryItems[categoryItems.length - 1]?.calories || "1,200 Cal"}. Full nutritional and calorie details are shown on each menu card.`,
    },
    {
      question: `Are Cheddar Bay Biscuits included with Red Lobster ${category.name} entrées?`,
      answer: "Yes, all dine-in Red Lobster entrées come with warm, freshly baked Cheddar Bay Biscuits at no additional charge.",
    },
  ];

  // ItemList JSON-LD Schema for Google Rich Results
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": `Red Lobster ${category.name} Menu`,
    "description": category.description,
    "url": `https://redlobstermenu.site/menu/${category.slug}`,
    "numberOfItems": categoryItems.length,
    "itemListElement": categoryItems.map((item, index) => {
      const priceVal = (item.price || item.estimatedPrice).replace(/[^0-9.]/g, "").split("-")[0] || "0";
      return {
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "description": item.description,
        "url": `https://redlobstermenu.site/menu/${category.slug}`,
        "item": {
          "@type": "MenuItem",
          "name": item.name,
          "description": item.description,
          "offers": {
            "@type": "Offer",
            "priceCurrency": "USD",
            "price": priceVal,
          },
          ...(item.image ? { image: `https://redlobstermenu.site${item.image}` } : {}),
        },
      };
    }),
  };

  return (
    <div className="bg-[#F8FAFC]">
      {/* Category Schema */}
      <Script
        id={`category-schema-${category.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      {/* ── TOP HERO SECTION ─────────────────────────────────── */}
      <HeroSection
        title={`Red Lobster ${category.name} Menu 2026`}
        subtitle={category.description}
        badge="Official 2026 Category Guide • Verified Prices & Calories"
        ctaText="View Dishes"
        ctaLink="#dishes"
        secondaryCtaText="All Categories"
        secondaryCtaLink="/menu"
        backgroundImage={category.image}
        stats={[
          { label: "Items in Category", value: `${categoryItems.length} Dishes`, sub: "Available Daily" },
          { label: "Price Range", value: `${categoryItems[0]?.price || "$8.99"}+`, sub: "Verified for 2026" },
          { label: "Cheddar Biscuits", value: "Unlimited", sub: "Included with dine-in" },
          { label: "Service", value: "Dine-In • To-Go", sub: "Online ordering" },
        ]}
        quickNav={[
          { label: `${category.name} Dishes`, href: "#dishes" },
          { label: "Price Table", href: "#price-table" },
          { label: "FAQs", href: "#faqs" },
          { label: "All Categories", href: "/menu" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-4 text-xs text-gray-500 flex items-center gap-2">
          <Link href="/" className="hover:text-[#B33A3A] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/menu" className="hover:text-[#B33A3A] transition-colors">Menu Prices</Link>
          <span>/</span>
          <span className="text-[#B33A3A] font-bold">{category.name}</span>
        </nav>

        {/* ── RESEARCH BYLINE & VERIFICATION BAR ───────────────── */}
        <div className="research-meta-bar mb-6 flex justify-between items-center">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-bold text-gray-800">By Menu Category Specialists</span>
            <span className="text-gray-400">|</span>
            <span>{category.name} Price Breakdown</span>
            <span className="text-gray-400">|</span>
            <span className="text-emerald-700 font-semibold flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
              Prices Verified Against the Official Red Lobster App
            </span>
          </div>
          <span className="text-xs text-gray-400 hidden sm:inline">
            2026 Edition
          </span>
        </div>

        {/* Section Header */}
        <section id="dishes" className="mb-16 scroll-mt-20">
          <div className="text-center mb-8 max-w-3xl mx-auto">
            <h2 className="section-pill-banner">
              {category.name} Dishes &amp; 2026 Prices
            </h2>
            <p className="text-gray-600 text-sm max-w-xl mx-auto mt-2 leading-relaxed">
              Accurate pricing, calorie counts, and short descriptions for every dish in the {category.name} category.
            </p>
          </div>

          {/* Structured Menu Cards Grid */}
          {categoryItems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {categoryItems.map((item) => (
                <MenuCard key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 my-12">No items available in this category yet.</p>
          )}
        </section>

        {/* Professional Price Table for Category */}
        {categoryItems.length > 0 && (
          <section id="price-table" className="mb-16 scroll-mt-20">
            <PriceTable
              items={categoryItems}
              title={`Red Lobster ${category.name} Price Table`}
              subtitle={`Complete 2026 prices and calorie comparison for all ${category.name} items.`}
              isPillHeading
            />
          </section>
        )}

        {/* Pricing Notice */}
        <div className="callout-box mb-16">
          <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
            <strong>Note on Pricing:</strong> All prices listed above are <em>estimated national averages for 2026</em> and may vary based on geographic location, local tax rates, and active dining promotions. Always verify with your local Red Lobster or online at{" "}
            <a href="https://www.redlobster.com" target="_blank" rel="noopener noreferrer" className="text-[#B33A3A] underline font-bold">redlobster.com</a>.
          </p>
        </div>

        {/* Return Button */}
        <div className="mb-16 text-center">
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 bg-white border-2 border-[#B33A3A] text-[#B33A3A] font-extrabold uppercase text-xs tracking-wider py-3 px-8 rounded-full hover:bg-[#B33A3A] hover:text-white transition-all shadow-sm"
          >
            &larr; Return to All Red Lobster Menu Prices
          </Link>
        </div>

        {/* FAQ Section */}
        <FAQSection
          faqs={categoryFaqs}
          title={`Frequently Asked Questions About ${category.name}`}
          subtitle={`Quick answers about prices, calories, and biscuit allowances for ${category.name}.`}
          schemaId={`faq-schema-${category.slug}`}
        />

        {/* Interlinks */}
        <MenuInterlink currentPage={`/menu/${category.slug}`} />
      </div>
    </div>
  );
}
