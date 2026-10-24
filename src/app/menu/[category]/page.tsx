import { categories, menuItems } from "@/lib/data";
import MenuCard from "@/components/ui/MenuCard";
import PriceTable from "@/components/ui/PriceTable";
import FAQSchema from "@/components/seo/FAQSchema";
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

  // Category specific FAQ schema
  const categoryFaqs = [
    {
      question: `How much do Red Lobster ${category.name} items cost in 2026?`,
      answer: `Prices for Red Lobster ${category.name} items in 2026 range from ${categoryItems[0]?.price || "$8.99"} to ${categoryItems[categoryItems.length - 1]?.price || "$36.99"}, depending on the specific portion and preparation.`,
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
    <div>
      {/* Category Schema */}
      <Script
        id={`category-schema-${category.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      {/* Category FAQ Schema */}
      <FAQSchema id={`faq-schema-${category.slug}`} faqs={categoryFaqs} />

      {/* Hero Banner (Single H1) */}
      <div
        className="relative w-full h-72 md:h-80 bg-gray-900 flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${category.image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50" />
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <span className="inline-block bg-[#7c1d27] text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            2026 Menu Guide
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-white mb-3 drop-shadow-md">
            Red Lobster {category.name} Menu
          </h1>
          <p className="text-gray-200 text-sm md:text-base max-w-2xl mx-auto drop-shadow leading-relaxed">
            {category.description}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-8 text-xs text-gray-500 flex items-center gap-2">
          <Link href="/" className="hover:text-[#7c1d27]">Home</Link>
          <span>/</span>
          <Link href="/menu" className="hover:text-[#7c1d27]">Red Lobster Menu</Link>
          <span>/</span>
          <span className="text-gray-900 font-semibold">{category.name}</span>
        </nav>

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-gray-200 mb-8 gap-3">
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900">
              {category.name} Dishes &amp; 2026 Prices
            </h2>
            <p className="text-xs md:text-sm text-gray-500 mt-1">
              Accurate pricing, calorie counts, and short descriptions for every dish.
            </p>
          </div>
          <span className="bg-[#7c1d27] text-white text-xs font-bold px-3 py-1.5 rounded-full w-fit">
            {categoryItems.length} Menu Items
          </span>
        </div>

        {/* Structured Menu Cards Grid */}
        {categoryItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-14">
            {categoryItems.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 my-12">No items available in this category yet.</p>
        )}

        {/* Professional Price Table for Category */}
        {categoryItems.length > 0 && (
          <section className="my-12">
            <PriceTable
              items={categoryItems}
              title={`Red Lobster ${category.name} Price Table`}
              subtitle={`Complete 2026 prices and calorie comparison for ${category.name}.`}
            />
          </section>
        )}

        {/* Pricing Notice */}
        <div className="mt-12 bg-gray-50 p-6 rounded-2xl border border-gray-200">
          <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
            <strong>Note on Pricing:</strong> All prices listed above are <em>estimated averages for 2026</em> and may vary based on geographic location, local tax rates, and active dining promotions. Always verify with your local Red Lobster or online at{" "}
            <a href="https://www.redlobster.com" target="_blank" rel="noopener noreferrer" className="text-[#7c1d27] underline font-medium">redlobster.com</a>.
          </p>
        </div>

        {/* Back Link & Interlinks */}
        <div className="mt-8 text-center">
          <Link
            href="/menu"
            className="inline-block border-2 border-[#7c1d27] text-[#7c1d27] font-bold py-3 px-8 rounded-full hover:bg-[#7c1d27] hover:text-white transition-colors text-sm"
          >
            &larr; Return to All Red Lobster Menu Prices
          </Link>
        </div>

        <MenuInterlink currentPage={`/menu/${category.slug}`} />
      </div>
    </div>
  );
}
