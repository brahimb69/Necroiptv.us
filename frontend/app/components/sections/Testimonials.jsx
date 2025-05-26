"use client";

import { motion } from "framer-motion";
import { FaCheck, FaShieldAlt, FaTv, FaGlobe, FaHeadset, FaRocket } from "react-icons/fa";

// Motion variants for staggering
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// Benefits data
const benefits = [
  {
    icon: <FaTv className="w-6 h-6" />,
    title: "25,000+ Channels",
    description: "Access to over 25,000 live channels from around the world, including sports, news, entertainment, and more."
  },
  {
    icon: <FaShieldAlt className="w-6 h-6" />,
    title: "99.9% Uptime",
    description: "Enjoy uninterrupted streaming with our reliable service that maintains 99.9% uptime for all channels."
  },
  {
    icon: <FaGlobe className="w-6 h-6" />,
    title: "Global Content",
    description: "Stream content from over 150 countries in multiple languages to satisfy all your viewing preferences."
  },
  {
    icon: <FaHeadset className="w-6 h-6" />,
    title: "24/7 Support",
    description: "Our dedicated support team is available around the clock to assist with any questions or technical issues."
  },
  {
    icon: <FaRocket className="w-6 h-6" />,
    title: "Ultra HD Quality",
    description: "Experience crystal-clear streaming with our HD, Full HD, and 4K Ultra HD quality options on compatible devices."
  },
  {
    icon: <FaCheck className="w-6 h-6" />,
    title: "Multi-Device Support",
    description: "Watch on multiple devices simultaneously with our flexible connection packages for the whole family."
  }
];

const Testimonials = () => {

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-background to-muted/30 dark:from-background-dark dark:to-muted-dark/30">
      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="inline-block mb-4">
            <div className="p-1 rounded-lg bg-primary/10 dark:bg-gradient-to-r dark:from-primary/20 dark:to-primary-hover/20">
              <span className="text-primary dark:text-foreground-dark text-sm font-medium px-4 py-2">
                Premium Service
              </span>
            </div>
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-foreground dark:text-foreground-dark mb-4"
          >
            Why Choose Necro IPTV
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-muted-foreground dark:text-muted-foreground-dark max-w-2xl mx-auto"
          >
            Experience the ultimate streaming solution with our premium features and unmatched reliability.
            Here's why thousands of customers choose our service for their entertainment needs.
          </motion.p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className="relative p-8 rounded-2xl bg-muted/50 dark:bg-muted-dark/50 backdrop-blur-sm hover:bg-muted dark:hover:bg-muted-dark border border-border dark:border-border-dark transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:shadow-[0_0_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_25px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_0_30px_rgba(0,0,0,0.5)] h-full flex flex-col">
                {/* Icon */}
                <div className="absolute -top-6 left-8 w-12 h-12 rounded-xl bg-gradient-to-r from-primary to-blue-500 dark:from-primary-hover dark:to-blue-400 flex items-center justify-center text-white transform group-hover:scale-110 transition-transform duration-300 z-10 shadow-[0_8px_20px_rgba(99,102,241,0.3)] dark:shadow-[0_8px_20px_rgba(99,102,241,0.2)]">
                  {benefit.icon}
                </div>
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-foreground dark:text-foreground-dark mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground dark:text-muted-foreground-dark">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Call to Action */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mt-16 text-center"
        >
          <motion.div variants={itemVariants}>
            <a 
              href="/pricing" 
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-primary hover:bg-primary-hover text-white font-medium transition-all duration-300 transform hover:scale-105 shadow-[0_8px_20px_rgba(99,102,241,0.3)] dark:shadow-[0_8px_20px_rgba(99,102,241,0.2)]"
            >
              View Our Plans
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
