import Image from "next/image";
import type { MenuItem } from "@/lib/data";

export interface CardMenuItem {
  id?: string;
  name: string;
  categorySlug?: string;
  price?: string;
  estimatedPrice?: string;
  calories?: string;
  description?: string;
  image: string;
}

interface MenuCardProps {
  item: MenuItem | CardMenuItem;
  servingNote?: string;
}

export default function MenuCard({ item, servingNote }: MenuCardProps) {
  const displayPrice = item.price || item.estimatedPrice || "Market Price";

  return (
    <article
      className="lobster-card bg-white rounded-2xl overflow-hidden border border-[#EAD9D9] flex flex-col group h-full shadow-sm"
      itemScope
      itemType="https://schema.org/MenuItem"
    >
      {/* Food Image Container - Landscape Ratio */}
      <div className="relative aspect-[16/10] w-full bg-gray-100 overflow-hidden">
        <Image
          src={item.image}
          alt={`${item.name} - Red Lobster Menu Prices 2026`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-60" />

        {/* Calories Badge */}
        {item.calories && (
          <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-extrabold text-gray-800 shadow-sm flex items-center gap-1 border border-gray-100">
            <span className="text-orange-500 text-sm">🔥</span>
            <span>{item.calories}</span>
          </div>
        )}

        {/* 2026 Price Pill in Image */}
        <div className="absolute top-3 right-3 bg-[#B33A3A] text-white text-xs font-black px-3.5 py-1 rounded-full shadow-md">
          {displayPrice}
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 flex flex-col flex-grow text-left">
        {/* Title and Category */}
        <div className="mb-2">
          <h3
            className="text-lg font-black text-gray-900 group-hover:text-[#B33A3A] transition-colors leading-snug"
            itemProp="name"
          >
            {item.name}
          </h3>
          {item.categorySlug && (
            <span className="text-[10px] font-bold text-[#B33A3A] uppercase tracking-wider block mt-1">
              {item.categorySlug.replace(/-/g, " ")}
            </span>
          )}
        </div>

        {/* Short SEO Description */}
        <p
          className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow line-clamp-3"
          itemProp="description"
        >
          {item.description}
        </p>

        {/* Price & Perks Footer */}
        <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
          <span className="font-black text-lg text-[#B33A3A]" itemProp="offers" itemScope itemType="https://schema.org/Offer">
            <meta itemProp="priceCurrency" content="USD" />
            <meta itemProp="price" content={displayPrice.replace(/[^0-9.]/g, "").split("-")[0] || "0"} />
            {displayPrice}
          </span>
          <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/60">
            <svg className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span>{servingNote || "Biscuits Included"}</span>
          </span>
        </div>
      </div>
    </article>
  );
}
