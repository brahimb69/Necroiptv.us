"use client";

import { motion } from "framer-motion";
import {
    FiFacebook,
  FiInstagram,
  FiMail,
  FiMapPin,
  FiMessageCircle,
  FiMessageSquare,
  FiPhone,
  FiSend,
  FiTwitter,
  FiUser,
} from "react-icons/fi";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-background dark:bg-background-dark">
      {/* Header Section */}
      <div className="relative bg-gradient-to-b from-muted to-background dark:from-secondary dark:to-background-dark border-b border-border/50 dark:border-border-dark/50 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-slate-100/50 dark:bg-grid-slate-700/25 bg-[size:20px_20px] opacity-20" />

        <div className="relative container py-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-foreground dark:text-foreground-dark mb-4"
          >
            Contact Necro IPTV
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground dark:text-foreground-dark/70 max-w-2xl"
          >
            Have questions about Necro IPTV's 25,000+ channels or need technical assistance? 
            Our dedicated support team is available 24/7 to help with any inquiries about our 
            premium IPTV service. Reach out through any of the channels below.
          </motion.p>
        </div>
      </div>

      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-background/50 dark:bg-gray-800/50 rounded-2xl p-8 border border-border/50 dark:border-border-dark/50">
              <h2 className="text-2xl font-bold text-foreground dark:text-foreground-dark mb-6">
                Get in Touch with Necro IPTV
              </h2>
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 dark:bg-primary-hover/10">
                    <FiMail className="w-6 h-6 text-primary dark:text-primary-hover" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground dark:text-foreground-dark mb-1">
                      Email
                    </h3>
                    <a href="mailto:admin@necroiptv.us" className="text-muted-foreground dark:text-foreground-dark/70">
                      admin@necroiptv.us
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 dark:bg-primary-hover/10">
                    <FiPhone className="w-6 h-6 text-primary dark:text-primary-hover" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground dark:text-foreground-dark mb-1">
                      Phone
                    </h3>
                    <a href="https://wa.link/kkdei9" className="text-muted-foreground dark:text-foreground-dark/70">
                      ‪+1 (873) 300‑0545‬
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 dark:bg-primary-hover/10">
                    <FiMapPin className="w-6 h-6 text-primary dark:text-primary-hover" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground dark:text-foreground-dark mb-1">
                      Hours
                    </h3>
                    <p className="text-muted-foreground dark:text-foreground-dark/70">
                      24/7 Necro IPTV Support Available
                    </p>
                  </div>
                </div>
              </div>
            </div>
           
            {/* Social Media Support */}
            <div className="bg-background/50 dark:bg-gray-800/50 rounded-2xl p-8 border border-border/50 dark:border-border-dark/50 mt-6">
              <h2 className="text-2xl font-bold text-foreground dark:text-foreground-dark mb-6">
                Connect With Necro IPTV
              </h2>
              <div className="space-y-4">
                <p className="text-muted-foreground dark:text-foreground-dark/70">
                  Follow Necro IPTV on social media for quick responses and latest updates:
                </p>
                <div className="flex gap-4">
                  <a href="#" className="text-primary dark:text-primary-hover hover:opacity-80">
                    <FiTwitter className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-primary dark:text-primary-hover hover:opacity-80">
                    <FiFacebook className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-primary dark:text-primary-hover hover:opacity-80">
                    <FiInstagram className="w-6 h-6" />
                  </a>
                </div>
                <p className="text-sm text-muted-foreground dark:text-foreground-dark/70 mt-4">
                  Our social media team is available Mon-Fri, 9AM-6PM EST
                </p>
              </div>
            </div>

            {/* Live Chat Support */}
            <div className="bg-background/50 dark:bg-gray-800/50 rounded-2xl p-8 border border-border/50 dark:border-border-dark/50 mt-6">
              <h2 className="text-2xl font-bold text-foreground dark:text-foreground-dark mb-6">
                Necro IPTV Live Chat Support
              </h2>
              <div className="space-y-4">
                <p className="text-muted-foreground dark:text-foreground-dark/70">
                  Need immediate assistance with your Necro IPTV service? Our live chat support is available 24/7. 
                  Click the chat icon in the bottom right corner to start a conversation with our support team.
                </p>
                <div className="flex items-center gap-2 text-primary dark:text-primary-hover">
                  <FiMessageCircle className="w-5 h-5" />
                  <span className="text-sm font-medium">Average response time: 2 minutes</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="bg-background/50 dark:bg-gray-800/50 rounded-2xl p-8 border border-border/50 dark:border-border-dark/50">
              <h2 className="text-2xl font-bold text-foreground dark:text-foreground-dark mb-6">
                Send Necro IPTV a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-foreground dark:text-foreground-dark mb-2">
                    Your Name
                  </label>
                  <div className="relative">
                    <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground dark:text-foreground-dark/50" />
                    <input
                      type="text"
                      required
                      className="w-full pl-12 pr-4 py-3 rounded-xl bg-muted/50 dark:bg-secondary/50 border border-border/50 dark:border-border-dark/50 text-foreground dark:text-foreground-dark placeholder:text-muted-foreground/50 dark:placeholder:text-foreground-dark/30 focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-foreground dark:text-foreground-dark mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground dark:text-foreground-dark/50" />
                    <input
                      type="email"
                      required
                      className="w-full pl-12 pr-4 py-3 rounded-xl bg-muted/50 dark:bg-secondary/50 border border-border/50 dark:border-border-dark/50 text-foreground dark:text-foreground-dark placeholder:text-muted-foreground/50 dark:placeholder:text-foreground-dark/30 focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-medium text-foreground dark:text-foreground-dark mb-2">
                    Subject
                  </label>
                  <div className="relative">
                    <FiMessageSquare className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground dark:text-foreground-dark/50" />
                    <input
                      type="text"
                      required
                      className="w-full pl-12 pr-4 py-3 rounded-xl bg-muted/50 dark:bg-secondary/50 border border-border/50 dark:border-border-dark/50 text-foreground dark:text-foreground-dark placeholder:text-muted-foreground/50 dark:placeholder:text-foreground-dark/30 focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Necro IPTV Support Request"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-foreground dark:text-foreground-dark mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-muted/50 dark:bg-secondary/50 border border-border/50 dark:border-border-dark/50 text-foreground dark:text-foreground-dark placeholder:text-muted-foreground/50 dark:placeholder:text-foreground-dark/30 focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Your message about Necro IPTV here..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-primary hover:bg-primary-hover dark:bg-primary-hover dark:hover:bg-primary text-white font-semibold transition-all duration-300 hover:shadow-lg"
                >
                  <FiSend className="w-4 h-4" />
                  Send Message to Necro IPTV
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
