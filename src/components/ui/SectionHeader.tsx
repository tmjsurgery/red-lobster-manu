interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  pillText?: string;
  className?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  pillText,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`flex flex-col items-center text-center my-10 ${className}`}>
      {pillText && (
        <span className="category-pill text-xs md:text-sm uppercase tracking-wider mb-3">
          {pillText}
        </span>
      )}
      <h2 className="section-pill-banner max-w-3xl w-full mx-auto">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base mt-1 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
