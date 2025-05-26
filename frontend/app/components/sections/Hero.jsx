"use client";

import heroBgImageBlur from "@/public/images/hero-bg-blur.jpg";
import heroBgImage from "@/public/images/hero-bg-new.jpg";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroBgImage}
          alt="Background"
          fill
          priority
          quality={65}
          placeholder="blur"
          blurDataURL={heroBgImageBlur.src}
          className="object-cover"
          sizes="85vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40 dark:from-background-dark/95 dark:via-background-dark/80 dark:to-background-dark/40" />
      </div>

      <div className="container relative z-10">
        <div className="flex items-center py-16">
          {/* Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            {/* Brand Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 mb-6"
            >
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary dark:text-primary-hover">
                Necro IPTV Premium Service
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 space-y-3"
            >
              <span className="block text-foreground dark:text-foreground-dark">
                Necro IPTV - #1 Premium IPTV with{" "}
                <span className="text-primary dark:text-primary-hover">
                  25,000+ Channels
                </span>
              </span>
              <span className="block text-foreground dark:text-foreground-dark">
                HD & 4K Quality on All Devices
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-muted-foreground dark:text-foreground-dark/70 mb-8"
            >
              Experience the ultimate entertainment with Necro IPTV - the world's leading premium IPTV service. Stream 25,000+ live TV channels and 60,000+ movies & series in crystal-clear HD & 4K quality. Enjoy buffer-free streaming on Firestick, Android, iOS, Smart TVs, and more devices. 24/7 support included.
            </motion.p>

            {/* Price and CTA */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-6"
            >
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-primary hover:bg-primary-hover dark:bg-primary dark:hover:bg-primary-hover transition-all duration-300 rounded-full shadow-lg hover:shadow-xl hover:shadow-primary/20 transform hover:-translate-y-0.5"
              >
                BUY NOW
              </Link>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-primary dark:text-primary-hover">
                  $10.99
                </span>
                <span className="text-sm text-muted-foreground dark:text-foreground-dark/70">
                  /month
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
