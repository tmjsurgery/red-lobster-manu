import Link from "next/link";
import Image from "next/image";
import type { Category } from "@/lib/data";

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all overflow-hidden border border-gray-100 flex flex-col group">
      <div className="relative h-56 w-full bg-gray-200 overflow-hidden">
        <Image
          src={category.image}
          alt={category.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow text-center items-center">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{category.name}</h3>
        <p className="text-gray-600 text-sm mb-6 flex-grow">{category.description}</p>
        <Link 
          href={`/menu/${category.slug}`}
          className="bg-brand-red text-white font-medium py-2 px-6 rounded-full hover:bg-brand-red-dark transition-colors inline-block w-full"
        >
          View Menu
        </Link>
      </div>
    </div>
  );
}
