"use client";

import { motion } from "framer-motion";
import { FaCreditCard, FaDownload, FaPlay } from "react-icons/fa";

const steps = [
  {
    icon: <FaCreditCard className="w-6 h-6" />,
    title: "Choose Your Necro IPTV Plan",
    description: "Select from our flexible monthly, yearly, or lifetime Necro IPTV subscription plans to fit your needs and budget.",
    badge: "Get Started",
  },
  {
    icon: <FaDownload className="w-6 h-6" />,
    title: "Set Up Necro IPTV on Your Device",
    description: "Download and install the recommended app for your device (Firestick, Android, iOS, Smart TV) and enter your Necro IPTV credentials.",
    badge: "Set-up Guide",
  },
  {
    icon: <FaPlay className="w-6 h-6" />,
    title: "Enjoy Premium Streaming",
    description: "Access 25,000+ live channels and 60,000+ on-demand movies & series in HD/4K quality with Necro IPTV's buffer-free streaming.",
    badge: "Watch Now",
  },
];

const HowItWorks = () => {
  return (
    <section className="relative py-24 overflow-hidden">
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
                How Necro IPTV Works
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
            Get Started with Necro IPTV in Minutes
          </motion.h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 * index }}
              className="group relative"
            >
              {/* Step Card */}
              <div className="relative p-8 rounded-2xl bg-white/5 dark:bg-gray-800/5 backdrop-blur-sm hover:bg-white/10 dark:hover:bg-gray-800/10 border border-white/10 dark:border-gray-800/10 transition-all duration-300 shadow-[0_0_10px_rgba(0,0,0,0.1)] dark:shadow-[0_0_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_25px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_0_30px_rgba(0,0,0,0.5)] text-center">
                {/* Icon */}
                <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-primary to-blue-500 dark:from-primary-hover dark:to-blue-400 flex items-center justify-center text-white mx-auto mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-[0_8px_20px_rgba(99,102,241,0.3)] dark:shadow-[0_8px_20px_rgba(99,102,241,0.2)]">
                  {step.icon}
                </div>

                {/* Badge */}
                <div className="inline-block px-4 py-1 rounded-full bg-primary/10 dark:bg-primary-hover/10 text-primary dark:text-primary-hover text-sm font-medium mb-4 shadow-[0_2px_8px_rgba(99,102,241,0.15)] dark:shadow-[0_2px_8px_rgba(99,102,241,0.1)]">
                  {step.badge}
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground dark:text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-muted-foreground dark:text-gray-400">
                  {step.description}
                </p>

                {/* Step Number */}
                <div className="absolute -right-2 -top-2 w-8 h-8 rounded-full bg-primary/10 dark:bg-primary-hover/10 flex items-center justify-center shadow-[0_4px_12px_rgba(99,102,241,0.2)] dark:shadow-[0_4px_12px_rgba(99,102,241,0.15)]">
                  <span className="text-primary dark:text-primary-hover font-semibold">
                    {index + 1}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
