import React from "react";
import Pricing from "../components/sections/Pricing";

export const metadata = {
  title: "Necro IPTV Pricing | Affordable Premium IPTV Plans from $10.99",
  description: "Explore Necro IPTV pricing plans. Get premium IPTV access with 25k+ channels & 60k+ VOD from $10.99/month. Choose the best affordable subscription for you.",
  keywords: "Necro IPTV pricing, IPTV subscription, IPTV plans, affordable IPTV, premium IPTV service, NecroIPTV cost, monthly IPTV, yearly IPTV, cheap IPTV",
  alternates: {
    canonical: "https://necroiptv.us/pricing", // Assuming .us domain
  },
  openGraph: {
    title: "Necro IPTV Pricing | Affordable Premium Plans",
    description: "Get premium IPTV access with 25k+ channels & 60k+ VOD from $10.99/month.",
    url: "https://necroiptv.us/pricing", // Assuming .us domain
    siteName: "Necro IPTV",
    images: [
      {
        url: "/images/preview-hero.jpg", // Use a relevant image
        width: 1200,
        height: 630,
        alt: "Necro IPTV Pricing Plans",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Necro IPTV Pricing | Affordable Premium Plans",
    description: "Get premium IPTV access with 25k+ channels & 60k+ VOD from $10.99/month.",
    images: ["/images/preview-hero.jpg"], // Use a relevant image
    creator: "@NecroIPTV", // Assuming twitter handle
  },
};

function PricingPage() {
  return <Pricing />;
}

export default PricingPage;
