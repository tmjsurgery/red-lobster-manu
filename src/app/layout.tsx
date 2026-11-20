import type { Metadata, Viewport } from "next";
import Script from "next/script";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#B33A3A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://redlobstermenu.site"),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  title: {
    default: "Red Lobster Menu - Official Fresh Seafood",
    template: "%s | Red Lobster Menu - Official Fresh Seafood",
  },
  description:
    "Explore the complete Red Lobster menu with official fresh seafood prices for 2026. Discover lobster feasts, shrimp specials, $10 lunch deals, and calorie guides.",
  keywords: [
    "Red Lobster menu",
    "official fresh seafood",
    "Red Lobster menu prices",
    "Red Lobster seafood feasts",
    "Red Lobster lunch specials",
    "Red Lobster dinner prices",
    "Red Lobster calories",
    "Red Lobster daily deals 2026",
  ],
  openGraph: {
    title: "Red Lobster Menu - Official Fresh Seafood",
    description:
      "Explore the complete Red Lobster menu with official fresh seafood prices for 2026. Discover lobster feasts, shrimp specials, $10 lunch deals, and calorie guides.",
    url: "https://redlobstermenu.site",
    siteName: "Red Lobster Menu - Official Fresh Seafood",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Red Lobster Menu - Official Fresh Seafood",
    description:
      "Explore the complete Red Lobster menu with official fresh seafood prices for 2026. Discover lobster feasts, shrimp specials, $10 lunch deals, and calorie guides.",
  },
  icons: {
    icon: [
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

const globalJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://redlobstermenu.site/#website",
      "url": "https://redlobstermenu.site/",
      "name": "The Red Lobster Menu Guide",
      "description": "Guide to Red Lobster menu and prices.",
      "publisher": {
        "@id": "https://redlobstermenu.site/#organization"
      }
    },
    {
      "@type": "Organization",
      "@id": "https://redlobstermenu.site/#organization",
      "name": "The Red Lobster Menu Guide",
      "url": "https://redlobstermenu.site/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://redlobstermenu.site/favicon-96x96.png"
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <meta name="monetag" content="9ca4f650383be3ae463c0a9521bf8a53" />
        <script src="https://quge5.com/88/tag.min.js" data-zone="274992" async data-cfasync="false"></script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(globalJsonLd) }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ZDR92N0N4G"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-ZDR92N0N4G');
          `}
        </Script>
      </head>
      <body className="font-sans antialiased flex flex-col min-h-screen bg-[#F8FAFC] text-gray-800">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
