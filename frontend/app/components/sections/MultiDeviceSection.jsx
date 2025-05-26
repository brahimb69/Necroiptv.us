"use client";

import Link from "next/link";
import { useState } from "react";
import { FaCheck, FaCrown, FaDesktop } from "react-icons/fa";

const multiDevicePlans = {
  2: [
    {
      duration: "1MONTH",
      price: "19.99",
      popular: false,
      saveText: "",
      paymentLink: "https://2c1.growth4ch.shop/",
    },
    {
      duration: "3MONTH",
      price: "46.99",
      popular: false,
      saveText: "Save 21%",
      paymentLink: "https://2c3.growth4ch.shop/",
    },
    {
      duration: "6MONTH",
      price: "71.99",
      popular: true,
      saveText: "Save 39%",
      paymentLink: "https://2c6.growth4ch.shop/",
    },
    {
      duration: "12MONTH",
      price: "89.99",
      popular: false,
      saveText: "Save 62%",
      paymentLink: "https://2c12.growth4ch.shop/",
    },
  ],
  3: [
    {
      duration: "1MONTH",
      price: "25.99",
      popular: false,
      saveText: "",
      paymentLink: "https://3c1.growth4ch.shop/",
    },
    {
      duration: "3MONTH",
      price: "70.99",
      popular: false,
      saveText: "Save 21%",
      paymentLink: "https://3c3.growth4ch.shop/",
    },
    {
      duration: "6MONTH",
      price: "107.99",
      popular: true,
      saveText: "Save 39%",
      paymentLink: "https://3c6.growth4ch.shop/",
    },
    {
      duration: "12MONTH",
      price: "134.99",
      popular: false,
      saveText: "Save 62%",
      paymentLink: "https://3c12.growth4ch.shop/",
    },
  ],
  4: [
    {
      duration: "1MONTH",
      price: "32.99",
      popular: false,
      saveText: "",
      paymentLink: "https://4c1.growth4ch.shop/",
    },
    {
      duration: "3MONTH",
      price: "89.99",
      popular: false,
      saveText: "Save 21%",
      paymentLink: "https://4c3.growth4ch.shop/",
    },
    {
      duration: "6MONTH",
      price: "139.99",
      popular: true,
      saveText: "Save 39%",
      paymentLink: "https://4c6.growth4ch.shop/",
    },
    {
      duration: "12MONTH",
      price: "179.99",
      popular: false,
      saveText: "Save 62%",
      paymentLink: "https://4c12.growth4ch.shop/",
    },
  ],
  5: [
    {
      duration: "1MONTH",
      price: "39.99",
      popular: false,
      saveText: "",
      paymentLink: "https://5c1.growth4ch.shop/",
    },
    {
      duration: "3MONTH",
      price: "109.99",
      popular: false,
      saveText: "Save 21%",
      paymentLink: "https://5c3.growth4ch.shop/",
    },
    {
      duration: "6MONTH",
      price: "169.99",
      popular: true,
      saveText: "Save 39%",
      paymentLink: "https://5c6.growth4ch.shop/",
    },
    {
      duration: "12MONTH",
      price: "219.99",
      popular: false,
      saveText: "Save 62%",
      paymentLink: "https://5c12.growth4ch.shop/",
    },
  ],
};

const features = [
  "25,000+ Live TV Channels",
  "HD & 4K Streaming Quality",
  "Regular Content Updates",
  "24/7 Necro IPTV Support",
  "Compatible with All Devices",
  "Adult Content Included",
];

const MultiDeviceSection = () => {
  const [activeDeviceCount, setActiveDeviceCount] = useState(2);

  const getDeviceIcons = (count) => {
    const icons = [];
    for (let i = 0; i < count; i++) {
      icons.push(
        <FaDesktop 
          key={i} 
          className={`w-5 h-5 ${i === 0 ? 'text-white' : 'text-white/70'}`} 
        />
      );
    }
    return icons;
  };

  return (
    <section className="relative py-16 overflow-hidden bg-background dark:bg-background-dark">
      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block p-2 rounded-lg bg-primary/10 dark:bg-primary/20 mb-4">
            <span className="text-primary dark:text-white text-sm font-medium px-4 py-2">
              Multi-Device Plans
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground dark:text-foreground-dark mb-4">
            Multiple Device Access
          </h2>
          <p className="text-muted-foreground dark:text-foreground-dark/70 max-w-2xl mx-auto">
            Watch your favorite content on multiple devices simultaneously with our multi-device
            subscription plans.
          </p>
        </div>

        {/* Device Count Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveDeviceCount(2)}
            className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all ${
              activeDeviceCount === 2
                ? "bg-primary text-white"
                : "bg-background-hover/50 dark:bg-secondary/50 text-foreground dark:text-foreground-dark hover:bg-muted dark:hover:bg-secondary"
            }`}
          >
            <div className="flex items-center gap-1">
              {getDeviceIcons(2)}
            </div>
            <span>2 Devices</span>
          </button>
          <button
            onClick={() => setActiveDeviceCount(3)}
            className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all ${
              activeDeviceCount === 3
                ? "bg-primary text-white"
                : "bg-background-hover/50 dark:bg-secondary/50 text-foreground dark:text-foreground-dark hover:bg-muted dark:hover:bg-secondary"
            }`}
          >
            <div className="flex items-center gap-1">
              {getDeviceIcons(3)}
            </div>
            <span>3 Devices</span>
          </button>
          <button
            onClick={() => setActiveDeviceCount(4)}
            className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all ${
              activeDeviceCount === 4
                ? "bg-primary text-white"
                : "bg-background-hover/50 dark:bg-secondary/50 text-foreground dark:text-foreground-dark hover:bg-muted dark:hover:bg-secondary"
            }`}
          >
            <div className="flex items-center gap-1">
              {getDeviceIcons(4)}
            </div>
            <span>4 Devices</span>
          </button>
          <button
            onClick={() => setActiveDeviceCount(5)}
            className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all ${
              activeDeviceCount === 5
                ? "bg-primary text-white"
                : "bg-background-hover/50 dark:bg-secondary/50 text-foreground dark:text-foreground-dark hover:bg-muted dark:hover:bg-secondary"
            }`}
          >
            <div className="flex items-center gap-1">
              {getDeviceIcons(5)}
            </div>
            <span>5 Devices</span>
          </button>
        </div>

        {/* Pricing Cards - Show all cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {multiDevicePlans[activeDeviceCount].map((plan) => (
            <div
              key={plan.duration}
              className={`relative rounded-xl overflow-hidden bg-background/50 dark:bg-background-dark/50 border border-border/50 dark:border-border-dark/50 ${
                plan.popular ? "ring-2 ring-primary" : ""
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-primary text-white text-center py-1 px-4 text-sm font-medium flex items-center justify-center gap-2">
                  <FaCrown className="w-3 h-3" />
                  <span>Most Popular</span>
                </div>
              )}

              {/* Save Badge */}
              {plan.saveText && (
                <div className="absolute right-2 top-2 bg-primary text-white text-xs px-2 py-1 rounded-lg">
                  {plan.saveText}
                </div>
              )}

              {/* Plan Header */}
              <div className="p-6 text-center border-b border-border/50 dark:border-border-dark/50">
                <h3 className="text-xl font-bold text-foreground dark:text-foreground-dark mb-2">
                  {plan.duration.replace("MONTH", "MONTH")} Access
                </h3>
                <div className="flex items-baseline justify-center">
                  <span className="text-2xl font-bold text-primary dark:text-primary-hover">$</span>
                  <span className="text-5xl font-bold text-foreground dark:text-foreground-dark mx-1">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground dark:text-foreground-dark/70 text-sm">
                    /plan
                  </span>
                </div>
              </div>

              {/* Features List */}
              <div className="p-6">
                <ul className="space-y-4 mb-6">
                  {features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center text-sm text-muted-foreground dark:text-foreground-dark/70"
                    >
                      <FaCheck className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link href={plan.paymentLink}>
                  <button className="w-full py-3 px-6 rounded-lg bg-primary hover:bg-primary-hover dark:bg-primary-hover dark:hover:bg-primary text-white font-semibold transition-all duration-300">
                    BUY NOW
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MultiDeviceSection;
