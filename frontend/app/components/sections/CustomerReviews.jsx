"use client";

import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import { FiUser, FiClock } from "react-icons/fi";

const CustomerReviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Marcus Thompson",
      rating: 5,
      timeAgo: "2 weeks ago",
      review: "So I was like... does this really work or is it another \"IPTV\" that promises the moon then gives you lag and pixel soup? But hey, turns out Necro IPTV actually runs smooth, especially the sports. Watched 3 matches in a row, not a single freeze. Bit shocked tbh.",
      verified: true,
    },
    {
      id: 2,
      name: "Jessica Rivera",
      rating: 5,
      timeAgo: "1 month ago",
      review: "Is it cheap? Yes. Is it stable? Yep. Can I use it on Firestick and my phone without getting kicked out? Also yes. Honestly I've tried like 5 others in 3 months and kept yelling at my screen. Now I just eat chips and chill. Finally.",
      verified: true,
    },
    {
      id: 3,
      name: "Alex Chen",
      rating: 5,
      timeAgo: "3 weeks ago",
      review: "Ok so... do u ever get that thing where u install something and it works right away and u're just waiting for it to break? I kept waiting. It didn't. 2 weeks in, I even showed it to my uncle (he's like 70 and hates tech) and he's using it too now 😭",
      verified: true,
    },
    {
      id: 4,
      name: "David Miller",
      rating: 5,
      timeAgo: "1 week ago",
      review: "Channels? Lot of 'em. VOD? Way too much lol. Adult stuff? 👀 yeah it's there. But most important—nothing feels spammy or broken. Even the EPG loads like it's supposed to. Dunno why more people don't talk about this one.",
      verified: true,
    },
    {
      id: 5,
      name: "Sarah Johnson",
      rating: 5,
      timeAgo: "4 days ago",
      review: "I'm not gonna lie, I bought it expecting regret. Like full refund mode. But yo, the streams are crisp and the support person actually replied to my DM in 5 minutes?? Who even does that anymore. Necro IPTV—lowkey a hidden gem.",
      verified: true,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const generateInitials = (name) => {
    return name.split(' ').map(word => word[0]).join('').toUpperCase();
  };

  const generateAvatarColor = (name) => {
    const colors = [
      'bg-gradient-to-br from-blue-500 to-blue-600',
      'bg-gradient-to-br from-purple-500 to-purple-600',
      'bg-gradient-to-br from-green-500 to-green-600',
      'bg-gradient-to-br from-orange-500 to-orange-600',
      'bg-gradient-to-br from-pink-500 to-pink-600',
      'bg-gradient-to-br from-indigo-500 to-indigo-600',
    ];
    const hash = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return colors[hash % colors.length];
  };

  return (
    <section className="relative py-24 overflow-hidden bg-background dark:bg-background-dark">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute left-1/4 top-1/4 w-96 h-96 bg-primary/5 dark:bg-primary-hover/5 rounded-full blur-3xl" />
        <div className="absolute right-1/4 bottom-1/4 w-96 h-96 bg-blue-500/5 dark:bg-blue-400/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <div className="p-1 inline-block rounded-lg bg-primary/10 dark:bg-gradient-to-r dark:from-primary/20 dark:to-blue-500/20 mb-6">
            <span className="text-primary dark:text-white text-sm font-medium px-4 py-2 flex items-center gap-2">
              <FaStar className="w-4 h-4" />
              Customer Reviews
            </span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground dark:text-white">
            What Our Customers Say About{" "}
            <span className="text-primary dark:text-primary-hover">
              Necro IPTV
            </span>
          </h2>
          
          <p className="text-muted-foreground dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Real feedback from real customers who've experienced the quality and reliability of our premium IPTV service.
          </p>
        </motion.div>

        {/* Reviews Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
        >
          {reviews.map((review) => (
            <motion.div
              key={review.id}
              variants={itemVariants}
              className="group relative"
            >
              <div className="h-full p-6 rounded-2xl bg-background/60 dark:bg-gray-800/60 backdrop-blur-sm border border-border/50 dark:border-border-dark/50 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 hover:border-primary/30 dark:hover:border-primary-hover/30">
                {/* Quote Icon */}
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary/10 dark:bg-primary-hover/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <FaQuoteLeft className="w-3 h-3 text-primary dark:text-primary-hover" />
                </div>

                {/* Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <FaStar
                      key={i}
                      className="w-4 h-4 text-yellow-400 group-hover:scale-110 transition-transform duration-300"
                      style={{ transitionDelay: `${i * 50}ms` }}
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-foreground dark:text-gray-300 leading-relaxed mb-6 text-sm lg:text-base">
                  "{review.review}"
                </p>

                {/* Customer Info */}
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-semibold ${generateAvatarColor(review.name)}`}>
                    {generateInitials(review.name)}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold text-foreground dark:text-white text-sm">
                        {review.name}
                      </h4>
                      {review.verified && (
                        <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                          <span className="font-medium">Verified</span>
                        </div>
                      )}
                    </div>
                    <div className="flex items-center gap-1 mt-1">
                      <FiClock className="w-3 h-3 text-muted-foreground dark:text-gray-500" />
                      <span className="text-xs text-muted-foreground dark:text-gray-500">
                        {review.timeAgo}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Hover Effect Gradient */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12">
            <div className="flex items-center gap-3">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-foreground dark:text-white">4.9/5</div>
                <div className="text-sm text-muted-foreground dark:text-gray-400">Average Rating</div>
              </div>
            </div>
            
            <div className="w-px h-12 bg-border dark:bg-border-dark hidden sm:block" />
            
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground dark:text-white">15,000+</div>
              <div className="text-sm text-muted-foreground dark:text-gray-400">Happy Customers</div>
            </div>
            
            <div className="w-px h-12 bg-border dark:bg-border-dark hidden sm:block" />
            
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground dark:text-white">24/7</div>
              <div className="text-sm text-muted-foreground dark:text-gray-400">Customer Support</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CustomerReviews;
