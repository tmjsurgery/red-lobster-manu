import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Red Lobster Menu Coupons & Promo Codes 2026 | Verified Deals",
  description: "Get the latest verified Red Lobster menu coupons, promo codes, and daily deals for 2026. Save 20% on online orders or get $5 off seafood favorites.",
  alternates: {
    canonical: "/coupons",
  },
  openGraph: {
    title: "Red Lobster Coupons & Promo Codes 2026 | Verified Deals",
    description: "Get the latest verified Red Lobster coupons, promo codes, and daily deals for 2026. Save 20% on online orders or get $5 off.",
    url: "https://redlobstermenu.site/coupons",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Red Lobster Coupons & Promo Codes 2026",
    description: "Verified Red Lobster coupons and deals for 2026.",
  }
};

export default function CouponsLayout({ children }: { children: React.ReactNode }) {
  return children;
}

