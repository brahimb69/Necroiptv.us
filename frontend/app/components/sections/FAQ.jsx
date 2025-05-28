"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const FAQ = () => {
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const faqs = [
    {
      question: "What is Necro IPTV and how does it work?",
      answer: "Necro IPTV is a premium IPTV (Internet Protocol Television) service that delivers 25,000+ live TV channels and 60,000+ movies & series directly to your devices via internet connection. Our service works on Firestick, Android, iOS, Smart TVs, and other compatible devices, providing HD & 4K streaming quality with minimal buffering."
    },
    {
      question: "What devices are compatible with Necro IPTV?",
      answer: "Necro IPTV works on a wide range of devices including Amazon Firestick/Fire TV, Android smartphones and tablets, iOS devices (iPhone/iPad), Smart TVs (Samsung, LG, Sony), MAG boxes, Windows PC, Mac, Linux, and Android TV boxes. We provide easy setup guides for all supported devices."
    },
    {
      question: "How many channels does Necro IPTV offer?",
      answer: "Necro IPTV provides access to over 25,000 live TV channels from around the world, including sports, news, entertainment, movies, documentaries, kids content, and international programming. We also offer 60,000+ on-demand movies and TV series in HD & 4K quality."
    },
    {
      question: "What are Necro IPTV's subscription pricing options?",
      answer: "Necro IPTV offers flexible pricing starting at $10.99/month for single device access. We have 1-month, 3-month, 6-month, and 12-month plans, plus multi-device options for families. We also offer a lifetime access plan for $289. All plans include full access to our 25,000+ channels and VOD library."
    },
    {
      question: "Is Necro IPTV legal and safe to use?",
      answer: "Necro IPTV operates as a legitimate IPTV service provider. We recommend users comply with their local laws and regulations regarding IPTV services. Our service uses secure streaming technology and we provide 24/7 customer support for any questions or concerns."
    },
    {
      question: "Do subscriptions auto-renew with Necro IPTV?",
      answer: "No, Necro IPTV subscriptions do not auto-renew. You have full control over your subscription and must manually renew when your plan expires. This gives you complete flexibility and transparency with no surprise charges."
    },
    {
      question: "What is the streaming quality on Necro IPTV?",
      answer: "Necro IPTV delivers premium streaming quality with HD and 4K resolution options. Our enterprise-grade servers ensure buffer-free streaming with minimal lag. The actual quality depends on your internet connection speed and device capabilities."
    },
    {
      question: "Does Necro IPTV offer customer support?",
      answer: "Yes, Necro IPTV provides 24/7 customer support through email (admin@necroiptv.us), and phone (+1 873-300-0545). Our dedicated support team assists with setup, technical issues, billing questions, and general inquiries."
    },
    {
      question: "Can I use Necro IPTV on multiple devices simultaneously?",
      answer: "Yes, Necro IPTV offers multi-device plans that allow streaming on 1-5 devices simultaneously. Single device plans start at $10.99/month, while multi-device plans are available at competitive rates perfect for families and households with multiple viewers."
    },
    {
      question: "How do I set up Necro IPTV on my device?",
      answer: "Setting up Necro IPTV is simple. After purchasing a subscription, you'll receive login credentials and setup instructions for your specific device. We provide step-by-step guides for Firestick, Android, iOS, Smart TVs, and other devices. Our support team is available 24/7 to assist with setup."
    }
  ];

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <section className="py-24 bg-background dark:bg-gradient-to-b dark:from-gray-900 dark:to-black">
      <div className="container">
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
                Frequently Asked Questions
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
            Necro IPTV FAQ - Everything You Need to Know
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-muted-foreground dark:text-gray-400 max-w-2xl mx-auto"
          >
            Get answers to common questions about Necro IPTV's premium IPTV service, pricing, device compatibility, and technical support.
          </motion.p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="mb-6"
            >
              <div className="rounded-2xl bg-background/50 dark:bg-gray-800/50 backdrop-blur-sm border border-border dark:border-gray-800/50 overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-background-hover/50 dark:hover:bg-gray-800/70 transition-colors duration-300"
                >
                  <h3 className="text-lg font-semibold text-foreground dark:text-white pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {expandedFAQ === index ? (
                      <FiChevronUp className="w-5 h-5 text-primary dark:text-primary-hover" />
                    ) : (
                      <FiChevronDown className="w-5 h-5 text-primary dark:text-primary-hover" />
                    )}
                  </div>
                </button>
                
                {expandedFAQ === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-border dark:border-gray-800/50"
                  >
                    <div className="p-6 pt-4">
                      <p className="text-muted-foreground dark:text-gray-400 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="rounded-2xl bg-primary/5 dark:bg-primary/10 border border-primary/20 dark:border-primary/30 p-8">
            <h3 className="text-xl font-bold text-foreground dark:text-white mb-4">
              Still have questions about Necro IPTV?
            </h3>
            <p className="text-muted-foreground dark:text-gray-400 mb-6">
              Our 24/7 customer support team is ready to help with any questions about our premium IPTV service.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-primary hover:bg-primary-hover dark:bg-primary-hover dark:hover:bg-primary text-white font-semibold transition-all duration-300 hover:shadow-lg"
            >
              Contact Necro IPTV Support
            </a>
          </div>
        </motion.div>
      </div>

      {/* Structured Data for FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />
    </section>
  );
};

export default FAQ;
