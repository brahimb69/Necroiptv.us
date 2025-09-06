"use client";
import Facilities from "./components/sections/Facilities";
import Features from "./components/sections/Features";
import Hero from "./components/sections/Hero";
import HowItWorks from "./components/sections/HowItWorks";
import MultiDeviceSection from "./components/sections/MultiDeviceSection";

import FAQ from "./components/sections/FAQ";
import CustomerReviews from "./components/sections/CustomerReviews";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaCheck, FaCrown, FaInfinity, FaStar } from "react-icons/fa";
import MultiDevicePricing from "../app/multi-device/page";
import Testimonials from "./components/sections/Testimonials";

const lifetimeFeatures = [
  "One-Time Payment",
  "Regular Updates",
  "Extensive Channels",
  "Multi-Device Support",
  "Premium Quality",
  "24/7 Customer Support",
];

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <MultiDevicePricing />
      {/* Lifetime Plan Special Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mt-20 relative max-w-5xl mx-auto px-4"
      >
        {/* Special Badge */}
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-blue-500 text-white px-6 py-2 rounded-full flex items-center gap-2 whitespace-nowrap shadow-lg z-20">
          <FaInfinity className="w-4 h-4" />
          <span className="text-sm font-semibold">BEST VALUE</span>
        </div>

        <div className="relative mx-auto border-2 border-primary/30 dark:border-primary-hover/30 rounded-3xl p-4 shadow-lg">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-blue-500/5 rounded-3xl" />

          <div className="relative rounded-3xl bg-background/50 dark:bg-gray-800/50 backdrop-blur-sm border border-primary/20 dark:border-primary-hover/20 p-8 md:p-12 overflow-hidden group hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              {/* Left Side - Title and Description */}
              <div className="text-center lg:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground dark:text-white mb-4 flex items-center gap-3 justify-center lg:justify-start">
                  Lifetime Access
                  <span className="inline-flex items-center justify-center bg-primary/10 dark:bg-primary-hover/10 text-primary dark:text-primary-hover p-1.5 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <FaStar className="w-5 h-5" />
                  </span>
                </h3>
                <p className="text-muted-foreground dark:text-gray-400 max-w-xl">
                  Get amazing experience with our premium lifetime
                  subscription. One-time payment for endless entertainment.
                </p>
              </div>

              {/* Right Side - Price and CTA */}
              <div className="text-center lg:text-right">
                <div className="flex items-baseline justify-center lg:justify-end gap-2 mb-4">
                  <span className="text-3xl font-bold text-primary dark:text-primary-hover">
                    $
                  </span>
                  <span className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500 dark:from-primary-hover dark:to-blue-400">
                    289
                  </span>
                  <span className="text-xl text-muted-foreground dark:text-gray-400">
                    .00
                  </span>
                </div>
                <Link href="http://t.growth4ch.shop/">
                  <button className="inline-flex items-center gap-2 py-4 px-8 rounded-xl bg-gradient-to-r from-primary to-blue-500 hover:from-primary hover:to-primary dark:from-primary-hover dark:to-blue-400 dark:hover:from-primary dark:hover:to-primary text-white font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg group">
                    GET LIFETIME ACCESS
                    <FaCrown className="w-4 h-4 transform group-hover:rotate-12 transition-transform duration-300" />
                  </button>
                </Link>
              </div>
            </div>

            {/* Features Grid */}
            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {lifetimeFeatures.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 text-foreground dark:text-white group/item"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-primary/10 to-blue-500/10 dark:from-primary-hover/10 dark:to-blue-400/10 flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                    <FaCheck className="w-3 h-3 text-primary dark:text-primary-hover" />
                  </div>
                  <span className="text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-r from-primary/5 to-blue-500/5 dark:from-primary-hover/5 dark:to-blue-400/5 rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2 group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-r from-blue-500/5 to-primary/5 dark:from-blue-400/5 dark:to-primary-hover/5 rounded-full blur-3xl -z-10 transform -translate-x-1/2 translate-y-1/2 group-hover:scale-110 transition-transform duration-500" />
          </div>
        </div>
      </motion.div>
      <Facilities />
      <div className="relative bg-background dark:bg-[#0B1120] overflow-hidden">
        {/* Simplified Blur Effect Background */}
        <div className="absolute inset-0 z-0">
          {/* Main background glow */}
          <div className="absolute left-0 right-0 top-0 -translate-y-1/2 h-[500px] w-full bg-gradient-to-br from-primary/30 to-blue-600/30 dark:from-primary/20 dark:to-blue-600/20 blur-[100px] opacity-70" />

          {/* Bottom glow */}
          <div className="absolute left-0 right-0 bottom-0 translate-y-1/2 h-[500px] w-full bg-gradient-to-tr from-indigo-500/30 to-purple-600/30 dark:from-indigo-500/20 dark:to-purple-600/20 blur-[100px] opacity-70" />

          {/* Subtle overlay for better text contrast */}
          <div className="absolute inset-0 bg-background/40 dark:bg-background-dark/40" />
        </div>

        <div className="relative z-10">
          <Testimonials />
          <FAQ />
          <CustomerReviews />
          <HowItWorks />
        </div>
      </div>
    </>
  );
}
