import Link from "next/link";
import Image from "next/image";
import type { Category } from "@/lib/data";

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <div className="lobster-card bg-white rounded-2xl overflow-hidden border border-[#EAD9D9] flex flex-col group h-full shadow-sm">
      {/* 1. Category Image */}
      <div className="relative aspect-[16/10] w-full bg-gray-100 overflow-hidden">
        <Image
          src={category.image}
          alt={`Red Lobster ${category.name} Menu Prices 2026`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          loading="lazy"
        />
      </div>

      {/* 2. Category Card Content */}
      <div className="p-4 sm:p-5 flex flex-col flex-grow text-center items-center justify-between">
        {/* Competitor Red Pill Category Title */}
        <div className="w-full mb-3">
          <Link
            href={`/menu/${category.slug}`}
            className="block w-full bg-[#B33A3A] hover:bg-[#992F2F] text-white font-bold text-xs sm:text-sm uppercase tracking-wide py-2 px-3 rounded-full shadow-xs transition-colors truncate"
          >
            {category.name}
          </Link>
        </div>

        {/* Short Description */}
        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4 flex-grow line-clamp-3">
          {category.description}
        </p>

        {/* View Prices Button */}
        <Link 
          href={`/menu/${category.slug}`}
          className="bg-gray-50 hover:bg-[#B33A3A] text-gray-800 hover:text-white font-bold text-xs uppercase tracking-wider py-2.5 px-4 rounded-full border border-[#EAD9D9] hover:border-[#B33A3A] transition-all duration-200 inline-block w-full shadow-2xs"
        >
          View 2026 Prices &rarr;
        </Link>
      </div>
    </div>
  );
}
