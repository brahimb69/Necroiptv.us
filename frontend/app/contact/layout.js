export const metadata = {
  title: "Contact Necro IPTV | 24/7 Customer Support & Technical Assistance",
  description: "Contact Necro IPTV's dedicated 24/7 support team for any questions about our premium IPTV service. Get help with setup, technical issues, or billing. Email: admin@necroiptv.us | Phone: +1 (873) 300-0545",
  keywords: "Contact Necro IPTV, NecroIPTV support, IPTV customer service, technical support, IPTV help, billing support, setup assistance, 24/7 support",
  alternates: {
    canonical: "https://necroiptv.us/contact",
  },
  openGraph: {
    title: "Contact Necro IPTV | 24/7 Customer Support",
    description: "Get in touch with Necro IPTV's dedicated support team for any questions or assistance with our premium IPTV service.",
    url: "https://necroiptv.us/contact",
    siteName: "Necro IPTV",
    images: [
      {
        url: "/images/necro-iptv-contact.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Necro IPTV Support Team",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Necro IPTV Support",
    description: "Get 24/7 support for Necro IPTV premium service. Technical help, billing, and setup assistance available.",
    images: ["/images/necro-iptv-contact-twitter.jpg"],
    creator: "@NecroIPTV",
  },
};

export default function ContactLayout({ children }) {
  return children;
}
