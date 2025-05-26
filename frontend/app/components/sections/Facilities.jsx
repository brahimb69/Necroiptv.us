"use client";

import { motion } from "framer-motion";
import { FaFilm, FaTv } from "react-icons/fa";

const Facilities = () => {
  const stats = [
    {
      icon: <FaFilm className="w-8 h-8" />,
      label: "MOVIES & SERIES",
      value: "67,000+",
      description: "On-demand content",
    },
    {
      icon: <FaTv className="w-8 h-8" />,
      label: "LIVE CHANNELS",
      value: "25,000+",
      description: "Premium channels",
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-background dark:bg-gradient-to-b dark:from-gray-900 dark:to-black">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 hidden md:block">
        <div
          className="absolute inset-0 opacity-75 dark:opacity-100 mix-blend-soft-light dark:mix-blend-soft-light"
          style={{
            backgroundImage: "url('/images/pattern.svg')",
            backgroundSize: "40px 40px",
            backgroundRepeat: "repeat",
            backgroundPosition: "center center",
          }}
        />
      </div>

      {/* Animated Background Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-blue-500/5 animate-gradient-x" />
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <div className="p-1 rounded-lg bg-primary/10 dark:bg-gradient-to-r dark:from-primary/20 dark:to-blue-500/20 mb-4">
              <span className="text-primary dark:text-white text-sm font-medium px-4 py-2">
                Facilities
              </span>
            </div>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold text-foreground dark:text-white mb-4"
          >
            Upgrade your viewing experience
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-muted-foreground dark:text-gray-400 max-w-2xl mx-auto"
          >
            Elevate your viewing experience with NecroIPTV and enjoy access to
            more than 25,000 channels and over 67,000 movies and TV shows.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + index * 0.2 }}
              className="group relative p-8 rounded-2xl bg-background/50 dark:bg-gray-800/50 backdrop-blur-sm hover:bg-background-hover/50 dark:hover:bg-gray-800/70 border border-border dark:border-gray-800/50 transition-all duration-300 hover:shadow-xl"
            >
              {/* Icon */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-xl bg-gradient-to-r from-primary to-blue-500 dark:from-primary-hover dark:to-blue-400 flex items-center justify-center text-white transform group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>

              {/* Content */}
              <div className="text-center mt-6">
                <h3 className="text-sm font-medium text-muted-foreground dark:text-gray-400 mb-2">
                  {stat.label}
                </h3>
                <p className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500 dark:from-primary-hover dark:to-blue-400 mb-2">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground dark:text-gray-400">
                  {stat.description}
                </p>
              </div>

              {/* Decorative Background */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/5 to-blue-500/5 dark:from-primary-hover/5 dark:to-blue-400/5 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
