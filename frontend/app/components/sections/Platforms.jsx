"use client";

import logo1 from "@/public/images/logos/logo-1.svg";
import logo10 from "@/public/images/logos/logo-10.svg";
import logo2 from "@/public/images/logos/logo-2.svg";
import logo3 from "@/public/images/logos/logo-3.svg";
import logo4 from "@/public/images/logos/logo-4.svg";
import logo5 from "@/public/images/logos/logo-5.svg";
import logo6 from "@/public/images/logos/logo-6.svg";
import logo7 from "@/public/images/logos/logo-7.svg";
import logo8 from "@/public/images/logos/logo-8.svg";
import logo9 from "@/public/images/logos/logo-9.svg";
import { motion } from "framer-motion";
import Image from "next/image";

const logos = [
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
  logo9,
  logo10,
];

const Platforms = () => {
  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos];

  const LogoCard = ({ logo, alt }) => (
    <div className="relative w-28 h-16 md:w-40 md:h-20 flex-shrink-0 group">
      {/* Card Background with multiple layers for better visibility */}
      <div className="absolute inset-0 rounded-lg md:rounded-xl overflow-hidden">
        {/* Base layer with gradient - Visible on all devices */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100/10 to-gray-900/10 dark:from-gray-800/50 dark:to-black/50" />
        {/* Blur layer - Only on desktop */}
        <div className="absolute inset-0 backdrop-blur-[2px] hidden md:block" />
        {/* Border - Lighter on mobile */}
        <div className="absolute inset-0 rounded-lg md:rounded-xl border border-white/5 md:border-white/10 dark:border-white/5" />
        {/* Hover effects - Only on desktop */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/5 dark:bg-white/5 hidden md:block" />
      </div>

      {/* Logo Image */}
      <div className="relative h-full w-full p-2 md:p-4 transition-transform duration-300 md:group-hover:scale-110">
        <Image
          src={logo}
          alt={alt}
          fill
          className="object-contain transition-all duration-300 md:group-hover:brightness-110 filter contrast-125 brightness-90 dark:brightness-100"
          sizes="(max-width: 768px) 112px, 160px"
          loading="eager"
        />
      </div>
    </div>
  );

  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-background/50 dark:bg-black/50 backdrop-blur-sm border-t border-border/5 dark:border-white/5">
      {/* Background Pattern - Hidden on mobile */}
      <div className="absolute inset-0 z-0 hidden md:block">
        <div
          className="absolute inset-0 opacity-75 dark:opacity-100 mix-blend-soft-light dark:mix-blend-soft-light"
          style={{
            backgroundImage: "url('/images/pattern.svg')",
            backgroundSize: "40px 40px",
            backgroundRepeat: "repeat",
            backgroundPosition: "center center",
          }}
        ></div>
      </div>

      {/* Animated Background Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-blue-500/5 animate-gradient-x" />
      </div>

      {/* Content Container */}
      <div className="container relative z-10 mx-auto px-4 mb-12 md:mb-16">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <div className="p-1 rounded-lg bg-primary/10 dark:bg-gradient-to-r dark:from-primary/20 dark:to-blue-500/20 mb-4">
              <span className="text-primary dark:text-white text-sm font-medium px-4 py-2">
                Necro IPTV Content Library
              </span>
            </div>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-2xl md:text-4xl font-bold text-foreground dark:text-white mb-4"
          >
            Access 25,000+ Premium Channels with Necro IPTV
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-sm md:text-base text-muted-foreground dark:text-gray-400 max-w-2xl mx-auto"
          >
            Necro IPTV gives you access to premium content from leading entertainment networks, 
            sports channels, news outlets, and international programming in HD & 4K quality
          </motion.p>
        </div>
      </div>

      {/* Multi-row Infinite Scroll Container - Full Width */}
      <div className="relative w-full">
        {/* Gradient Overlays - Adjusted for mobile */}
        <div className="absolute left-0 top-0 bottom-0 w-[100px] md:w-[250px] bg-gradient-to-r from-background/80 via-background/50 to-transparent z-10 dark:from-black/80 dark:via-black/50" />
        <div className="absolute right-0 top-0 bottom-0 w-[100px] md:w-[250px] bg-gradient-to-l from-background/80 via-background/50 to-transparent z-10 dark:from-black/80 dark:via-black/50" />

        {/* Single Row - Moving Left */}
        <div className="overflow-hidden w-full py-4 md:py-8">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex gap-6 md:gap-12 whitespace-nowrap px-4 md:px-6"
          >
            {duplicatedLogos.map((logo, index) => (
              <LogoCard key={index} logo={logo} alt={`Necro IPTV Platform ${index + 1}`} />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Additional Info */}
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 md:mt-16 text-center"
        >
          <p className="text-xs md:text-sm text-muted-foreground dark:text-gray-400">
            *Necro IPTV's available channels and platforms may vary by region and
            subscription plan. Our content library is regularly updated with new channels and VOD content.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Platforms;
