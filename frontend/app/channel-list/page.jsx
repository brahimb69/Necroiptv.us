"use client";

import { FiTv, FiPlayCircle, FiStar, FiUsers, FiMonitor, FiWifi } from "react-icons/fi";
import { motion } from "framer-motion";

export default function ChannelList() {
  const handleOrderTrial = () => {
    window.open('https://ramaca.shop/step/demo/', '_blank', 'noopener,noreferrer');
  };

  const features = [
    {
      icon: FiTv,
      title: "25,000+ Live Channels",
      description: "Access to premium channels from around the world"
    },
    {
      icon: FiPlayCircle,
      title: "HD & 4K Quality",
      description: "Crystal clear streaming in high definition"
    },
    {
      icon: FiStar,
      title: "Premium Content",
      description: "Movies, sports, news, and entertainment"
    },
    {
      icon: FiUsers,
      title: "Multiple Devices",
      description: "Watch on TV, phone, tablet, or computer"
    },
    {
      icon: FiMonitor,
      title: "Easy Setup",
      description: "Quick installation and user-friendly interface"
    },
    {
      icon: FiWifi,
      title: "Stable Streaming",
      description: "Reliable connection with minimal buffering"
    }
  ];

  return (
    <div className="min-h-screen bg-background dark:bg-background-dark">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary/10 via-blue-500/10 to-purple-500/10 dark:from-primary/20 dark:via-blue-500/20 dark:to-purple-500/20 border-b border-border/50 dark:border-border-dark/50 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-slate-100/50 dark:bg-grid-slate-700/25 bg-[size:20px_20px] opacity-20" />
        
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-blue-500/5 animate-gradient-x" />
        </div>

        <div className="relative container py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
              <FiTv className="w-4 h-4" />
              25,000+ Premium Channels Available
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-foreground dark:text-foreground-dark mb-6">
              Complete Channel List
              <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent block">
                Available with Free Trial
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground dark:text-foreground-dark/70 mb-8 leading-relaxed">
              Experience our full channel lineup with a free trial. Get instant access to premium entertainment, 
              sports, news, and international content from around the world.
            </p>

            <motion.button
              onClick={handleOrderTrial}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-500/90 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <FiPlayCircle className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
              Order Your Free Trial Now
              <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground dark:text-foreground-dark mb-4">
            What You'll Get with Your Free Trial
          </h2>
          <p className="text-lg text-muted-foreground dark:text-foreground-dark/70 max-w-2xl mx-auto">
            Try our premium IPTV service risk-free and discover why thousands of customers choose Necro IPTV
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative p-6 rounded-xl bg-background/50 dark:bg-background-dark/50 border border-border/50 dark:border-border-dark/50 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-primary/10 dark:bg-primary/20 group-hover:bg-primary/20 dark:group-hover:bg-primary/30 transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground dark:text-foreground-dark">
                  {feature.title}
                </h3>
              </div>
              <p className="text-muted-foreground dark:text-foreground-dark/70">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Channel Categories Section */}
      <div className="bg-muted/30 dark:bg-secondary/30 py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground dark:text-foreground-dark mb-4">
              Channel Categories Available
            </h2>
            <p className="text-lg text-muted-foreground dark:text-foreground-dark/70">
              Explore our diverse content library across all genres
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: "Entertainment", icon: "🎬", count: "5,000+" },
              { name: "Sports", icon: "⚽", count: "1,500+" },
              { name: "News", icon: "📺", count: "800+" },
              { name: "Movies", icon: "🍿", count: "3,000+" },
              { name: "Kids & Family", icon: "👨‍👩‍👧‍👦", count: "1,200+" },
              { name: "Documentaries", icon: "🌍", count: "900+" },
              { name: "Music", icon: "🎵", count: "600+" },
              { name: "International", icon: "🌎", count: "12,000+" }
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 rounded-xl bg-background/80 dark:bg-background-dark/80 border border-border/50 dark:border-border-dark/50 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="font-semibold text-foreground dark:text-foreground-dark mb-2">
                  {category.name}
                </h3>
                <p className="text-sm text-primary font-medium">{category.count} channels</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center bg-gradient-to-r from-primary/10 to-blue-500/10 dark:from-primary/20 dark:to-blue-500/20 rounded-2xl p-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground dark:text-foreground-dark mb-4">
            Ready to Explore Our Full Channel List?
          </h2>
          <p className="text-lg text-muted-foreground dark:text-foreground-dark/70 mb-8 max-w-2xl mx-auto">
            Start your free trial today and get instant access to our complete channel lineup. 
            No commitments, no hidden fees - just premium entertainment at your fingertips.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              onClick={handleOrderTrial}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-500/90 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <FiPlayCircle className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
              Get Free Trial Access
              <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
            
            <div className="text-sm text-muted-foreground dark:text-foreground-dark/70">
              🔒 Secure checkout • ⚡ Instant activation • 🌟 24/7 support
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
