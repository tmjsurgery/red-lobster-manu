import type { MenuItem } from "@/lib/data";

export interface PriceTableItem {
  id?: string;
  name: string;
  price?: string;
  estimatedPrice?: string;
  calories?: string;
  description?: string;
  categorySlug?: string;
  bestFor?: string;
  serves?: string;
  perPerson?: string;
}

interface PriceTableProps {
  items: (MenuItem | PriceTableItem)[];
  title?: string;
  subtitle?: string;
  isPillHeading?: boolean;
}

export default function PriceTable({
  items,
  title,
  subtitle,
  isPillHeading = false,
}: PriceTableProps) {
  return (
    <div className="w-full my-8">
      {title && (
        <div className="mb-4 text-center">
          {isPillHeading ? (
            <h3 className="section-pill-banner text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto mb-2">
              {title}
            </h3>
          ) : (
            <h3 className="text-xl md:text-2xl font-black text-gray-900 tracking-tight">
              {title}
            </h3>
          )}
          {subtitle && (
            <p className="text-sm text-gray-600 mt-1 leading-relaxed max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      )}

      <div className="competitor-table-container overflow-x-auto">
        <table className="w-full text-left text-sm border-collapse min-w-[640px]">
          <thead>
            <tr>
              <th scope="col" className="py-3.5 px-4 font-extrabold text-sm tracking-wide">
                Menu Item
              </th>
              <th scope="col" className="py-3.5 px-4 font-extrabold text-sm tracking-wide text-center whitespace-nowrap">
                2026 Price
              </th>
              <th scope="col" className="py-3.5 px-4 font-extrabold text-sm tracking-wide text-center whitespace-nowrap">
                Calories
              </th>
              <th scope="col" className="py-3.5 px-4 font-extrabold text-sm tracking-wide">
                Details &amp; Serving Style
              </th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => {
              const displayPrice = item.price || item.estimatedPrice || "Market Price";
              return (
                <tr
                  key={item.id || item.name || index}
                  className={
                    index % 2 === 0
                      ? "bg-white hover:bg-[#FFF8F8] transition-colors"
                      : "bg-[#FAFCFF] hover:bg-[#FFF8F8] transition-colors"
                  }
                >
                  <td className="py-3.5 px-4 font-bold text-gray-900">
                    <div className="flex flex-col">
                      <span className="text-[15px] font-extrabold text-gray-900 leading-snug">
                        {item.name}
                      </span>
                      {item.categorySlug && (
                        <span className="text-[10px] font-bold text-[#B33A3A] uppercase tracking-wider mt-0.5">
                          {item.categorySlug.replace(/-/g, " ")}
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="py-3.5 px-4 text-center font-black text-[#B33A3A] text-base whitespace-nowrap">
                    {displayPrice}
                  </td>
                  <td className="py-3.5 px-4 text-center whitespace-nowrap">
                    {item.calories ? (
                      <span className="inline-flex items-center gap-1 bg-amber-50 text-amber-900 text-xs font-bold px-2.5 py-1 rounded-full border border-amber-200/80">
                        🔥 {item.calories}
                      </span>
                    ) : (
                      <span className="text-gray-400 text-xs font-medium">Varies</span>
                    )}
                  </td>
                  <td className="py-3.5 px-4 text-gray-600 text-xs sm:text-sm leading-relaxed max-w-md">
                    {item.description || ("bestFor" in item ? (item as PriceTableItem).bestFor : undefined) || "Includes warm Cheddar Bay Biscuits and choice of two sides."}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p className="text-[11px] text-gray-400 mt-1 text-right italic">
        * Verified 2026 Red Lobster menu prices and nutritional estimates. Actual prices may vary slightly by market.
      </p>
    </div>
  );
}
