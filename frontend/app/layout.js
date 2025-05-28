import { URL } from 'url'; // Import URL
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import { ThemeProvider } from "./context/ThemeContext";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
  variable: "--font-geist-mono",
});

export const metadata = {
  title: {
    default: "Necro IPTV - #1 Premium IPTV Service | 25,000+ Live Channels & 60,000+ VOD",
    template: "%s | Necro IPTV - Premium IPTV Service"
  },
  description:
    "Necro IPTV - The world's leading premium IPTV service with 25,000+ live TV channels and 60,000+ movies & series in HD/4K quality. Enjoy buffer-free streaming on all devices including Firestick, Android, iOS, Smart TVs. 24/7 support, affordable plans starting at $10.99/month. Subscribe to NecroIPTV today!",
  keywords: [
    "Necro IPTV",
    "NecroIPTV",
    "premium IPTV service",
    "best IPTV provider",
    "live TV channels",
    "IPTV subscription",
    "HD 4K streaming",
    "buffer-free IPTV",
    "Firestick IPTV",
    "Android IPTV",
    "iOS IPTV",
    "Smart TV IPTV",
    "sports IPTV",
    "movies on demand",
    "international TV channels",
    "stable IPTV service",
    "affordable IPTV",
    "multi-device IPTV",
    "VOD library",
    "global IPTV provider"
  ].join(", "),
  metadataBase: new URL('https://necroiptv.us'),
  alternates: {
    canonical: 'https://necroiptv.us',
  },
  openGraph: {
    title: "Necro IPTV - #1 Premium IPTV Service | 25,000+ Live Channels & 60,000+ VOD",
    description: "Experience the ultimate entertainment with Necro IPTV. Access 25,000+ live TV channels and 60,000+ movies & series in HD/4K quality. Buffer-free streaming on all devices.",
    type: "website",
    url: "https://necroiptv.us",
    siteName: "Necro IPTV - Premium IPTV Service",
    images: [
      {
        url: "/images/necro-iptv-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Necro IPTV - Premium IPTV Service with 25,000+ Channels",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Necro IPTV - #1 Premium IPTV Service",
    description: "Access 25,000+ live TV channels and 60,000+ movies & series in HD/4K quality with Necro IPTV.",
    images: ["/images/necro-iptv-twitter-card.jpg"],
    creator: "@NecroIPTV",
    site: "@NecroIPTV",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    bing: 'your-bing-verification-code',
  },
  category: 'technology',
  classification: 'IPTV Service Provider',
  icons: {
    icon: '/frontend/public/favicon.ico',
    // icon: [
    //   { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    //   { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    // ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#004275' },
    ],
  },
  manifest: '/site.webmanifest',
  other: {
    'msapplication-TileColor': '#004275',
    'theme-color': '#004275',
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased min-h-screen flex flex-col" suppressHydrationWarning={true}>
        <ThemeProvider>
          <Navbar />
          <main className="flex-1 mt-16">{children}</main>
          <Footer />
        </ThemeProvider>
        
        {/* Structured Data Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Necro IPTV",
              "alternateName": "NecroIPTV",
              "url": "https://necroiptv.us",
              "logo": "https://necroiptv.us/images/logo-new.webp",
              "description": "Necro IPTV - Premium IPTV service provider offering 25,000+ live TV channels and 60,000+ movies & series in HD/4K quality with buffer-free streaming on all devices.",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-873-300-0545",
                "contactType": "customer service",
                "email": "admin@necroiptv.us",
                "availableLanguage": ["English"],
                "areaServed": "Global"
              },
              "sameAs": [
                "https://twitter.com/NecroIPTV",
                "https://facebook.com/NecroIPTV",
                "https://instagram.com/NecroIPTV"
              ],
              "offers": {
                "@type": "Offer",
                "name": "Necro IPTV Premium Service",
                "description": "Premium IPTV subscription with 25,000+ channels",
                "price": "10.99",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock"
              },
              "serviceType": "IPTV Service Provider",
              "areaServed": {
                "@type": "Place",
                "name": "Worldwide"
              }
            })
          }}
        />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Necro IPTV",
              "url": "https://necroiptv.us",
              "description": "Premium IPTV service with 25,000+ live channels and 60,000+ VOD content in HD/4K quality",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://necroiptv.us/channel-list?search={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
        
        {/*Start of Tawk.to Script*/}
        <Script
          id="tawk-to-script"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
                var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='https://embed.tawk.to/683446f31a4542191bbb104d/1is65826e';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);
              })();
            `,
          }}
        />
        {/*End of Tawk.to Script*/}
      </body>
    </html>
  );
}
