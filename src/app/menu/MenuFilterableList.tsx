"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { menuItems, categories } from "@/lib/data";
import MenuCard from "@/components/ui/MenuCard";

export default function MenuFilterableList() {
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get("q") || "");
  const [activeCategory, setActiveCategory] = useState<string>("all");

  useEffect(() => {
    if (searchParams.has("q")) {
      setSearchTerm(searchParams.get("q") || "");
    }
  }, [searchParams]);

  const filteredItems = menuItems.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      activeCategory === "all" || item.categorySlug === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      {/* Search Input Bar */}
      <div className="bg-white p-4 sm:p-5 rounded-3xl shadow-sm border border-gray-200/90 mb-8 max-w-2xl mx-auto">
        <div className="relative">
          <input
            type="text"
            placeholder="Search all 80+ dishes, seafood, or sides..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B33A3A] focus:border-transparent transition-all text-gray-800 text-sm bg-gray-50 focus:bg-white"
          />
          <svg className="w-5 h-5 text-gray-400 absolute left-4 top-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="absolute right-4 top-3 text-xs text-gray-400 hover:text-gray-600 bg-gray-200 hover:bg-gray-300 rounded-full w-5 h-5 flex items-center justify-center font-bold"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Category Pills Filter Bar */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        <button
          onClick={() => setActiveCategory("all")}
          className={`text-xs font-bold px-4 py-2 rounded-full transition-all cursor-pointer ${
            activeCategory === "all"
              ? "bg-[#B33A3A] text-white shadow-md"
              : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
          }`}
        >
          All Items ({menuItems.length})
        </button>
        {categories.slice(0, 10).map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.slug)}
            className={`text-xs font-bold px-3.5 py-2 rounded-full transition-all cursor-pointer ${
              activeCategory === cat.slug
                ? "bg-[#B33A3A] text-white shadow-md"
                : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Filtered Results */}
      {filteredItems.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-3xl border border-gray-200 p-8 max-w-lg mx-auto">
          <span className="text-4xl mb-3 block">🔍</span>
          <h3 className="text-xl font-bold text-gray-800 mb-2">No menu items found</h3>
          <p className="text-gray-500 text-sm mb-4">We couldn&apos;t find anything matching &quot;{searchTerm}&quot;.</p>
          <button
            onClick={() => {
              setSearchTerm("");
              setActiveCategory("all");
            }}
            className="bg-[#B33A3A] text-white text-xs font-bold px-5 py-2.5 rounded-full hover:bg-[#992F2F] transition-colors"
          >
            Reset All Filters
          </button>
        </div>
      ) : (
        <div className="space-y-16">
          {categories.map((category) => {
            const categoryItems = filteredItems.filter(
              (item) => item.categorySlug === category.slug
            );

            if (categoryItems.length === 0) return null;

            return (
              <div key={category.id} id={category.slug} className="scroll-mt-24">
                {/* Category Header with Red Pill Bar */}
                <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-gray-200">
                  <div className="flex items-center gap-3">
                    <span className="category-pill text-xs md:text-sm uppercase tracking-wider">
                      {category.name}
                    </span>
                    <span className="text-xs text-gray-400 font-semibold">
                      ({categoryItems.length} items)
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 max-w-md hidden sm:block">
                    {category.description}
                  </p>
                </div>

                {/* Menu Items Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoryItems.map((item) => (
                    <MenuCard key={item.id} item={item} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
