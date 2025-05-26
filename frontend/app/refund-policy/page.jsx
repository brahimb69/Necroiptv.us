"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FiAlertCircle,
  FiCheckCircle,
  FiClock,
  FiHelpCircle,
} from "react-icons/fi";

export const metadata = {
  title: "Necro IPTV Refund Policy | Fair & Transparent Refund Guidelines",
  description: "Read Necro IPTV's comprehensive refund policy. We offer fair refunds within 24 hours of purchase for our premium IPTV service. Learn about eligibility, processing times, and how to request refunds.",
  keywords: "Necro IPTV refund policy, IPTV refund, NecroIPTV money back guarantee, IPTV service refund, subscription refund policy, premium IPTV refund",
  alternates: {
    canonical: "https://necroiptv.us/refund-policy",
  },
  openGraph: {
    title: "Necro IPTV Refund Policy | Fair & Transparent Guidelines",
    description: "Learn about Necro IPTV's fair and transparent refund policy for our premium IPTV service.",
    url: "https://necroiptv.us/refund-policy",
    siteName: "Necro IPTV",
    images: [
      {
        url: "/images/necro-iptv-refund-policy.jpg",
        width: 1200,
        height: 630,
        alt: "Necro IPTV Refund Policy",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Necro IPTV Refund Policy",
    description: "Fair and transparent refund guidelines for Necro IPTV premium service.",
    images: ["/images/necro-iptv-refund-twitter.jpg"],
    creator: "@NecroIPTV",
  },
};

const policies = [
  {
    icon: FiClock,
    title: "Necro IPTV Refund Timeframe",
    content:
      "Refund requests for Necro IPTV subscriptions must be submitted within 24 hours of purchase. This allows sufficient time to evaluate our premium IPTV service quality while ensuring system integrity.",
  },
  {
    icon: FiCheckCircle,
    title: "Eligible Necro IPTV Plans",
    content:
      "All Necro IPTV subscription plans (including multi-device options) are eligible for refunds within the specified timeframe, provided the service has not been extensively used (less than 2 hours of viewing our 25,000+ channels).",
  },
  {
    icon: FiAlertCircle,
    title: "Non-Refundable Cases",
    content:
      "Necro IPTV refunds will not be processed if: the service has been used extensively, account credentials have been shared with others, or the subscription has been active for more than 24 hours.",
  },
  {
    icon: FiHelpCircle,
    title: "How to Request a Refund",
    content:
      "To request a Necro IPTV refund, contact our 24/7 support team through the contact form or email at admin@necroiptv.us with your order details and reason for the refund request.",
  },
];

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-background dark:bg-background-dark">
      {/* Header Section */}
      <div className="relative bg-gradient-to-b from-muted to-background dark:from-secondary dark:to-background-dark border-b border-border/50 dark:border-border-dark/50 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-slate-100/50 dark:bg-grid-slate-700/25 bg-[size:20px_20px] opacity-20" />

        <div className="relative container py-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-foreground dark:text-foreground-dark mb-4"
          >
            Necro IPTV Refund Policy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground dark:text-foreground-dark/70 max-w-2xl"
          >
            Necro IPTV's refund policy is designed to be fair and transparent. We stand behind 
            our premium IPTV service with 25,000+ channels and want to ensure your complete 
            satisfaction. Please read through the following guidelines to understand our refund process.
          </motion.p>
        </div>
      </div>

      <div className="container py-12">
        {/* Policy Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {policies.map((policy, index) => (
            <motion.div
              key={policy.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-background/50 dark:bg-gray-800/50 rounded-2xl p-8 border border-border/50 dark:border-border-dark/50 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 dark:bg-primary-hover/10">
                  <policy.icon className="w-6 h-6 text-primary dark:text-primary-hover" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground dark:text-foreground-dark mb-2">
                    {policy.title}
                  </h3>
                  <p className="text-muted-foreground dark:text-foreground-dark/70">
                    {policy.content}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-background/50 dark:bg-gray-800/50 rounded-2xl p-8 border border-border/50 dark:border-border-dark/50"
        >
          <h2 className="text-2xl font-bold text-foreground dark:text-foreground-dark mb-6">
            Additional Necro IPTV Refund Information
          </h2>
          <div className="prose dark:prose-invert max-w-none">
            <p>
              At Necro IPTV, we strive to provide the best possible IPTV service with 25,000+ channels 
              and 60,000+ VOD content in HD/4K quality. However, we understand that sometimes our service 
              may not meet your expectations. Our refund policy is designed to provide a fair resolution 
              while maintaining the integrity of our premium IPTV service.
            </p>

            <h3>Necro IPTV Refund Processing Time</h3>
            <p>
              Necro IPTV refund requests are typically processed within 3-5 business days.
              Once approved, the refund will be issued to the original payment
              method used for the purchase of your Necro IPTV subscription.
            </p>

            <h3>Payment Methods</h3>
            <p>
              Refunds will be processed to the original payment method used for
              the purchase. Processing times may vary depending on your payment
              provider:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Credit/Debit Cards: 5-10 business days</li>
              <li>PayPal: 3-5 business days</li>
              <li>Cryptocurrency: 1-3 business days</li>
            </ul>

            <h3>Necro IPTV Support</h3>
            <p>
              If you have any questions about Necro IPTV's refund policy or need to
              request a refund for your premium IPTV subscription, please don't hesitate to{" "}
              <Link
                href="/contact"
                className="text-primary dark:text-primary-hover hover:underline"
              >
                contact our 24/7 support team
              </Link>
              . Our dedicated Necro IPTV customer service representatives are here to help!
            </p>
          </div>
        </motion.div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-sm text-muted-foreground dark:text-foreground-dark/70 text-center"
        >
          <p>
            This Necro IPTV refund policy was last updated on February 8, 2024. We reserve
            the right to modify these terms at any time.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default RefundPolicy;
