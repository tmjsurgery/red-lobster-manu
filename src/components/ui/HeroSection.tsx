import Link from "next/link";

interface QuickStat {
  label: string;
  value: string;
  sub?: string;
}

interface QuickNav {
  label: string;
  href: string;
}

interface HeroSectionProps {
  title: string;
  subtitle: string;
  badge?: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  backgroundImage?: string;
  stats?: QuickStat[];
  quickNav?: QuickNav[];
}

export default function HeroSection({
  title,
  subtitle,
  badge = "Verified for 2026 • Full Menu & Prices",
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  stats,
  quickNav,
}: HeroSectionProps) {
  return (
    <section className="w-full bg-gradient-to-b from-white to-[#F8FAFC] border-b border-[#EAD9D9] py-8 sm:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Eyebrow Badge */}
          {badge && (
            <div className="inline-flex items-center gap-2 bg-red-50 text-[#B33A3A] border border-red-200 text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-4 shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#B33A3A]"></span>
              </span>
              <span>{badge}</span>
            </div>
          )}

          {/* Competitor Signature Red Pill Page Heading */}
          <h1 className="section-pill-banner text-xl sm:text-2xl md:text-3xl font-extrabold shadow-sm mx-auto">
            {title}
          </h1>

          {/* Editorial Subtitle */}
          <p className="text-sm sm:text-base md:text-lg text-gray-600 font-normal leading-relaxed mb-6 max-w-3xl mx-auto mt-3">
            {subtitle}
          </p>

          {/* CTA Buttons */}
          {(ctaText || secondaryCtaText) && (
            <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
              {ctaText && ctaLink && (
                <Link
                  href={ctaLink}
                  className="inline-flex items-center justify-center gap-2 bg-[#B33A3A] hover:bg-[#992F2F] text-white font-bold text-xs sm:text-sm py-2.5 px-6 rounded-full transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>{ctaText}</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              )}

              {secondaryCtaText && secondaryCtaLink && (
                <Link
                  href={secondaryCtaLink}
                  className="inline-flex items-center justify-center bg-white hover:bg-gray-50 text-gray-800 font-bold text-xs sm:text-sm py-2.5 px-6 rounded-full border border-[#EAD9D9] transition-all duration-200 shadow-xs hover:border-[#B33A3A] hover:text-[#B33A3A]"
                >
                  {secondaryCtaText}
                </Link>
              )}
            </div>
          )}

          {/* Quick Navigation Jump Bar */}
          {quickNav && quickNav.length > 0 && (
            <div className="pt-4 border-t border-gray-200/70 mt-5">
              <div className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-2.5">
                Jump to Section:
              </div>
              <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2">
                {quickNav.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="bg-white hover:bg-[#B33A3A] text-gray-700 hover:text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-[#EAD9D9] hover:border-[#B33A3A] transition-all shadow-2xs"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Highlight Stats Row */}
          {stats && stats.length > 0 && (
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-white border border-[#EAD9D9] rounded-xl p-3 text-center shadow-2xs hover:border-[#B33A3A] transition-colors"
                >
                  <div className="text-[11px] text-gray-500 font-bold uppercase tracking-wider">{s.label}</div>
                  <div className="text-lg sm:text-xl font-black text-[#B33A3A] mt-0.5">{s.value}</div>
                  {s.sub && <div className="text-[11px] text-gray-500 font-medium mt-0.5">{s.sub}</div>}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
