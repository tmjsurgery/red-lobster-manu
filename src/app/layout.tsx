import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Poppins } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#7c1d27",
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
  title: "Red Lobster Menu & Prices Guide 2026 | Daily Deals & Coupons",
  description: "The ultimate guide for Red Lobster menu, estimated prices, daily deals, happy hour specials, and the latest news for 2026.",
  openGraph: {
    title: "Red Lobster Menu & Prices Guide 2026",
    description: "The ultimate guide for Red Lobster menu, estimated prices, and daily deals.",
    url: "https://redlobstermenu.site",
    siteName: "The Red Lobster Menu Guide",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Red Lobster Menu & Prices Guide 2026",
    description: "Guide for Red Lobster menu, estimated prices, and daily deals.",
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
      <body
        className={`${poppins.variable} font-sans antialiased flex flex-col min-h-screen`}
      >
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
