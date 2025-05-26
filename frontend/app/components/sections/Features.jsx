"use client";

import { motion } from "framer-motion";
import {
  FaDatabase,
  FaDollarSign,
  FaMobileAlt,
  FaStream,
} from "react-icons/fa";

const Features = () => {
  const features = [
    {
      icon: <FaDatabase className="w-6 h-6" />,
      title: "Massive Content Library - 25,000+ Channels",
      description:
        "Necro IPTV provides the industry's largest content selection with 25,000+ live TV channels and 60,000+ premium movies and TV shows on demand, covering every genre, language, and category for global entertainment.",
    },
    {
      icon: <FaMobileAlt className="w-6 h-6" />,
      title: "Universal Device Compatibility",
      description:
        "Stream Necro IPTV seamlessly across all your devices including Amazon Firestick, Android phones/tablets, iOS devices, Smart TVs (Samsung, LG, Sony), MAG boxes, and more with easy setup and intuitive apps.",
    },
    {
      icon: <FaStream className="w-6 h-6" />,
      title: "Premium HD & 4K Streaming Quality",
      description:
        "Experience cinema-quality viewing with Necro IPTV's premium HD and 4K content delivery, powered by enterprise-grade servers ensuring buffer-free streaming and crystal-clear picture quality worldwide.",
    },
    {
      icon: <FaDollarSign className="w-6 h-6" />,
      title: "Affordable Premium IPTV Plans",
      description:
        "Get premium Necro IPTV entertainment starting at just $10.99/month with flexible subscription options, lifetime access plans, and family-friendly multi-device packages. No hidden fees, no auto-renewal hassles.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <section className="relative py-24 overflow-hidden bg-background dark:bg-gradient-to-b dark:from-gray-900 dark:to-black">
      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row items-start gap-16">
          {/* Left Side - Title and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-5/12 lg:sticky lg:top-24"
          >
            <div className="p-1 inline-block rounded-lg bg-primary/10 dark:bg-gradient-to-r dark:from-primary/20 dark:to-blue-500/20 mb-6">
              <span className="text-primary dark:text-white text-sm font-medium px-4 py-2">
                Why Choose Necro IPTV
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground dark:text-white">
              Why Choose{" "}
              <span className="text-primary dark:text-primary-hover font-normal">
                Necro IPTV Premium Service
              </span>
            </h2>
            <p className="text-muted-foreground dark:text-gray-400 text-lg mb-8">
              Necro IPTV is the world's leading premium IPTV service provider, offering an unmatched entertainment experience with 25,000+ live TV channels and a massive VOD library featuring over 60,000 movies and series. Enjoy crystal-clear HD & 4K streaming quality with minimal buffering, comprehensive multi-device compatibility (Firestick, Android, iOS, Smart TVs, MAG devices), and round-the-clock customer support. Transform your viewing experience with Necro IPTV's reliable, affordable, and feature-rich premium service today!
            </p>
            <div className="p-6 rounded-2xl bg-background/50 dark:bg-gray-800/50 backdrop-blur-sm hover:bg-background-hover/50 dark:hover:bg-gray-800/70 border border-border dark:border-gray-800/50 transition-all duration-300">
              <p className="text-foreground dark:text-white font-medium">
                Experience unmatched entertainment with Necro IPTV's premium service at competitive
                prices. Subscribe today and transform your viewing experience!
              </p>
            </div>
          </motion.div>

          {/* Right Side - Features List */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:w-7/12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group p-6 rounded-2xl bg-background/50 dark:bg-gray-800/50 backdrop-blur-sm hover:bg-background-hover/50 dark:hover:bg-gray-800/70 border border-border dark:border-gray-800/50 transition-all duration-300"
                  style={{
                    boxShadow: "0 0 20px rgba(0,0,0,0.1)",
                  }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary dark:text-primary-hover group-hover:scale-110 transition-transform duration-300 mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground dark:text-white group-hover:text-primary dark:group-hover:text-primary-hover transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground dark:text-gray-400 group-hover:text-foreground dark:group-hover:text-gray-300 transition-colors duration-300">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;
