import Image from "next/image";
import type { MenuItem } from "@/lib/data";

interface MenuCardProps {
  item: MenuItem;
}

export default function MenuCard({ item }: MenuCardProps) {
  const displayPrice = item.price || item.estimatedPrice;

  return (
    <article
      className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 hover:border-[#7c1d27]/30 flex flex-col group h-full"
      itemScope
      itemType="https://schema.org/MenuItem"
    >
      {/* Image Container with Badges */}
      <div className="relative h-52 w-full bg-gray-100 overflow-hidden">
        <Image
          src={item.image}
          alt={`${item.name} - Red Lobster Menu Prices 2026`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
        
        {/* Calories Badge */}
        <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-gray-800 shadow-sm flex items-center gap-1">
          <span className="text-orange-500">🔥</span>
          <span>{item.calories}</span>
        </div>

        {/* 2026 Verified Tag */}
        <div className="absolute top-3 right-3 bg-[#7c1d27] text-white text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
          2026 Menu
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 flex flex-col flex-grow">
        {/* Title and Price */}
        <div className="flex justify-between items-start gap-2 mb-2">
          <h3
            className="text-lg font-bold text-gray-900 group-hover:text-[#7c1d27] transition-colors leading-snug"
            itemProp="name"
          >
            {item.name}
          </h3>
          <div className="text-right flex-shrink-0">
            <span
              className="text-lg md:text-xl font-black text-[#7c1d27]"
              itemProp="offers"
              itemScope
              itemType="https://schema.org/Offer"
            >
              <meta itemProp="priceCurrency" content="USD" />
              <meta
                itemProp="price"
                content={displayPrice.replace(/[^0-9.]/g, "").split("-")[0] || "0"}
              />
              {displayPrice}
            </span>
          </div>
        </div>

        {/* Short SEO Description (20-30 words) */}
        <p
          className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow"
          itemProp="description"
        >
          {item.description}
        </p>

        {/* Card Footer Features */}
        <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
          <span className="flex items-center gap-1 font-medium text-emerald-700">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Includes Biscuits
          </span>
          <span className="text-gray-400">Dine-In • Takeout</span>
        </div>
      </div>
    </article>
  );
}
