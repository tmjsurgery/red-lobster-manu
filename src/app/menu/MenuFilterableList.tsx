"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { menuItems, categories } from "@/lib/data";
import MenuCard from "@/components/ui/MenuCard";

export default function MenuFilterableList() {
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get("q") || "");

  useEffect(() => {
    if (searchParams.has("q")) {
      setSearchTerm(searchParams.get("q") || "");
    }
  }, [searchParams]);

  const filteredItems = menuItems.filter((item) => {
    return (
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div>
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-12 max-w-2xl mx-auto">
        <div className="relative">
          <input
            type="text"
            placeholder="Search all menu items..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7c1d27] focus:border-transparent transition-shadow text-gray-800"
          />
          <svg className="w-6 h-6 text-gray-400 absolute left-4 top-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      {filteredItems.length === 0 ? (
        <div className="text-center py-20">
          <h3 className="text-xl font-bold text-gray-700 mb-2">No items found</h3>
          <p className="text-gray-500">Try adjusting your search.</p>
        </div>
      ) : (
        <div className="space-y-16">
          {categories.map((category) => {
            const categoryItems = filteredItems.filter(
              (item) => item.categorySlug === category.slug
            );

            if (categoryItems.length === 0) return null;

            return (
              <div key={category.id}>
                {/* Category Header */}
                <div className="mb-8 border-b-2 border-[#7c1d27] pb-4">
                  <h2 className="text-3xl md:text-4xl font-black text-[#7c1d27]">
                    {category.name}
                  </h2>
                </div>
                
                {/* Menu Items Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
