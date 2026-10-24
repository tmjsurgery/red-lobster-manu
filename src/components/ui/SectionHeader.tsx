interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="flex flex-col items-center text-center my-12">
      <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">{title}</h2>
      <div className="w-24 h-1 bg-[#7c1d27] rounded-full mb-6"></div>
      {subtitle && <p className="text-gray-500 max-w-2xl mx-auto text-lg">{subtitle}</p>}
    </div>
  );
}
