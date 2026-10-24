import type { MenuItem } from "@/lib/data";

interface PriceTableProps {
  items: MenuItem[];
  title?: string;
  subtitle?: string;
}

export default function PriceTable({ items, title, subtitle }: PriceTableProps) {
  return (
    <div className="w-full my-8">
      {title && (
        <div className="mb-4 text-center md:text-left">
          <h3 className="text-xl md:text-2xl font-black text-gray-900">{title}</h3>
          {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
        </div>
      )}

      <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm bg-white">
        <table className="w-full text-left text-sm border-collapse min-w-[640px]">
          <thead>
            <tr className="bg-[#7c1d27] text-white">
              <th scope="col" className="py-3.5 px-4 font-bold text-sm tracking-wide">
                Menu Item
              </th>
              <th scope="col" className="py-3.5 px-4 font-bold text-sm tracking-wide text-center">
                2026 Price
              </th>
              <th scope="col" className="py-3.5 px-4 font-bold text-sm tracking-wide text-center">
                Calories
              </th>
              <th scope="col" className="py-3.5 px-4 font-bold text-sm tracking-wide">
                Description &amp; Details
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {items.map((item, index) => {
              const displayPrice = item.price || item.estimatedPrice;
              return (
                <tr
                  key={item.id || index}
                  className={index % 2 === 0 ? "bg-white hover:bg-red-50/40 transition-colors" : "bg-gray-50/70 hover:bg-red-50/40 transition-colors"}
                >
                  <td className="py-3.5 px-4 font-bold text-gray-900">
                    <div className="flex flex-col">
                      <span className="text-base text-gray-900 leading-snug">{item.name}</span>
                      <span className="text-[11px] font-semibold text-[#7c1d27] uppercase tracking-wider mt-0.5">
                        {item.categorySlug.replace(/-/g, " ")}
                      </span>
                    </div>
                  </td>
                  <td className="py-3.5 px-4 text-center font-black text-[#7c1d27] text-base whitespace-nowrap">
                    {displayPrice}
                  </td>
                  <td className="py-3.5 px-4 text-center whitespace-nowrap">
                    <span className="inline-flex items-center gap-1 bg-amber-50 text-amber-800 text-xs font-semibold px-2.5 py-1 rounded-full border border-amber-200">
                      🔥 {item.calories}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-gray-600 text-xs md:text-sm leading-relaxed max-w-md">
                    {item.description}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p className="text-[11px] text-gray-400 mt-2 text-right">
        * Estimated 2026 prices for Red Lobster menu items. May vary by location.
      </p>
    </div>
  );
}
