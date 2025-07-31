export const metadata = {
  title: "Necro IPTV Channel List | Free Trial Access to 25,000+ Channels",
  description: "Get free trial access to Necro IPTV's complete channel list with 25,000+ live TV channels. Order your trial now and explore premium entertainment, sports, news, and international content.",
  keywords: "Necro IPTV free trial, IPTV channel list, live TV channels trial, free IPTV trial, sports channels, news channels, movie channels, international IPTV trial",
  alternates: {
    canonical: "https://necroiptv.us/channel-list",
  },
  openGraph: {
    title: "Necro IPTV Channel List | Free Trial Access to 25,000+ Channels",
    description: "Start your free trial and get instant access to our complete channel list with 25,000+ premium TV channels from around the world.",
    url: "https://necroiptv.us/channel-list",
    siteName: "Necro IPTV",
    images: [
      {
        url: "/images/necro-iptv-channels.jpg",
        width: 1200,
        height: 630,
        alt: "Necro IPTV Channel List - 25,000+ Channels",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Necro IPTV Free Trial | Access 25,000+ Channels",
    description: "Order your free trial now and explore our complete channel list with premium entertainment from around the world.",
    images: ["/images/necro-iptv-channels-twitter.jpg"],
    creator: "@NecroIPTV",
  },
};

export default function ChannelListLayout({ children }) {
  return children;
}
