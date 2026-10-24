import Link from "next/link";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: string;
}

export default function HeroSection({
  title,
  subtitle,
  ctaText = "Browse Full Menu",
  ctaLink = "/menu",
  backgroundImage = "/hero-section.webp"
}: HeroSectionProps) {
  
  return (
    <div className="relative w-full h-[55vh] min-h-[400px] flex flex-col justify-center overflow-hidden">
      {/* Background Image with Blur */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30"></div>
      </div>
      
      {/* Content - Left Aligned */}
      <div className="relative z-10 px-4 md:px-12 lg:px-24 max-w-7xl w-full mx-auto">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 drop-shadow-md leading-tight whitespace-pre-line">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-gray-100 mb-8 font-medium drop-shadow-sm leading-relaxed">
            {subtitle}
          </p>
          
          {ctaText && ctaLink && (
            <Link 
              href={ctaLink}
              className="inline-block bg-[#7c1d27] text-white font-bold py-3.5 px-8 rounded-full hover:bg-[#5a131b] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              {ctaText}
            </Link>
          )}
        </div>
      </div>

      {/* Wave divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
        <svg className="relative block w-full h-[40px] md:h-[60px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.3,192.39,101.41,236.4,89.5,280.96,70.18,321.39,56.44Z" fill="#f9fafb"></path>
        </svg>
      </div>
    </div>
  );
}
