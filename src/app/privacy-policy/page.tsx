import SectionHeader from "@/components/ui/SectionHeader";
import HeroSection from "@/components/ui/HeroSection";

export const metadata = {
  title: "Privacy Policy | Red Lobster Menu Guide",
  description: "Privacy Policy for the independent Red Lobster Menu Guide website.",
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | Red Lobster Guide",
    description: "Privacy Policy for the Red Lobster Guide website.",
    url: "https://redlobstermenu.site/privacy-policy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Red Lobster Guide",
    description: "Privacy Policy for the Red Lobster Guide website.",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div>
      <HeroSection 
        title="Privacy Policy" 
        subtitle="How we collect, use, and protect your data."
        backgroundImage="/hero-section.webp"
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 prose max-w-none text-gray-700">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        
        <h2>Introduction</h2>
        <p>
          Welcome to Red Lobster Guide. We respect your privacy and are committed to protecting your personal data. 
          This privacy policy will inform you as to how we look after your personal data when you visit our website.
        </p>

        <h2>Information We Collect</h2>
        <p>
          When you visit the site, we may automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device.
        </p>
        
        <h2>Google AdSense and Advertising</h2>
        <p>
          We use Google AdSense to display ads on this site. Google, as a third-party vendor, uses cookies to serve ads based on your prior visits to this website or other websites. Google's use of advertising cookies enables it and its partners to serve ads to you based on your visit to this site and/or other sites on the Internet.
        </p>
        <p>
          You may opt out of personalized advertising by visiting <a href="https://myadcenter.google.com/" target="_blank" rel="noopener noreferrer">Google Ads Settings</a>.
        </p>

        <h2>Cookies</h2>
        <p>
          We use cookies to enhance your experience, analyze site usage, and assist in our marketing efforts. You can choose to disable cookies through your individual browser options.
        </p>
      </div>
      </div>
    </div>
  );
}
