"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const FAQ = () => {
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Necro IPTV?",
      answer: "Necro IPTV is a premium IPTV service that provides access to over 25,000 live TV channels and 60,000+ VOD content. Enjoy high-quality streaming on all your devices with Necro IPTV.",
    },
    {
      question: "What devices are compatible with Necro IPTV?",
      answer: "Necro IPTV is compatible with a wide range of devices, including Firestick, Android devices, iOS devices, Smart TVs, and more. You can enjoy Necro IPTV on virtually any device.",
    },
    {
      question: "How much does Necro IPTV cost?",
      answer: "Necro IPTV offers flexible pricing plans to suit your needs. Our plans start at just $10.99 per month. Visit our pricing page for more information.",
    },
    {
      question: "How do I contact Necro IPTV support?",
      answer: "Our 24/7 customer support team is ready to help with any questions about our premium IPTV service. You can contact us through our contact page.",
    },
  ];

  return (
    <section className="py-16 bg-background dark:bg-background-dark">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block p-2 rounded-lg bg-primary/10 dark:bg-primary/20 mb-4">
            <span className="text-primary dark:text-white text-sm font-medium px-4 py-2">
              Frequently Asked Questions
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground dark:text-foreground-dark mb-4">
            Have Questions? We've Got Answers
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground dark:text-gray-400 max-w-2xl mx-auto"
          >
            Find answers to common questions about our premium IPTV service, pricing, device compatibility, and technical support.
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