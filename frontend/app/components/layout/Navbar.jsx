"use client";

import { useTheme } from "@/app/context/ThemeContext";
import logo from "@/public/images/logo-new.webp";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsMoonStars, BsSun } from "react-icons/bs";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/pricing", label: "Pricing" },
  { href: "/channel-list", label: "Channel List" },
  { href: "/multi-device", label: "Multi Device" },
];

const navVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2 },
  },
};

const linkVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.2,
    },
  }),
};

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className="fixed top-0 w-full bg-background/95 dark:bg-background-dark/95 border-border dark:border-border-dark backdrop-blur-md z-50 border-b"
    >
      <div className="container">
        <div className="flex items-center justify-between h-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="flex items-center"
        >
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={logo}
              alt="Necro IPTV Service"
              priority
              className="object-contain h-auto w-[100px]"
            />
          </Link>
        </motion.div>
          {/* Desktop Navigation */}
          <div className="hidden sm:flex items-center gap-8">
            {navigationLinks.map((link, i) => (
              <motion.div
                key={link.href}
                custom={i}
                variants={linkVariants}
                initial="hidden"
                animate="visible"
              >
                <Link
                  href={link.href}
                  className="font-medium text-foreground dark:text-foreground-dark hover:text-primary dark:hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}

            {/* Theme Toggle Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="p-2 rounded-full bg-muted dark:bg-muted-dark hover:bg-muted/80 dark:hover:bg-muted-dark/80 text-foreground dark:text-foreground-dark transition-colors"
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={theme}
                  initial={{ opacity: 0, rotate: -180 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 180 }}
                  transition={{ duration: 0.2 }}
                >
                  {theme === "light" ? (
                    <BsMoonStars className="w-5 h-5" />
                  ) : (
                    <BsSun className="w-5 h-5" />
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>

          {/* Mobile Menu */}
          <div className="sm:hidden flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="p-2 rounded-full bg-muted dark:bg-muted-dark hover:bg-muted/80 dark:hover:bg-muted-dark/80 text-foreground dark:text-foreground-dark transition-colors"
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={theme}
                  initial={{ opacity: 0, rotate: -180 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 180 }}
                  transition={{ duration: 0.2 }}
                >
                  {theme === "light" ? (
                    <BsMoonStars className="w-5 h-5" />
                  ) : (
                    <BsSun className="w-5 h-5" />
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-muted dark:bg-muted-dark hover:bg-muted/80 dark:hover:bg-muted-dark/80 text-foreground dark:text-foreground-dark transition-colors"
              aria-label="Toggle mobile menu"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isMobileMenuOpen ? "close" : "open"}
                  initial={{ opacity: 0, rotate: -180 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 180 }}
                  transition={{ duration: 0.2 }}
                >
                  {isMobileMenuOpen ? (
                    <HiOutlineX className="w-6 h-6" />
                  ) : (
                    <HiOutlineMenu className="w-6 h-6" />
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="sm:hidden border-t border-border dark:border-border-dark"
            >
              <div className="container py-4">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: 0.1,
                      },
                    },
                  }}
                  className="flex flex-col gap-4"
                >
                  {navigationLinks.map((link, i) => (
                    <motion.div
                      key={link.href}
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: { opacity: 1, x: 0 },
                      }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block px-4 py-2 rounded-lg font-medium text-foreground dark:text-foreground-dark hover:bg-muted dark:hover:bg-muted-dark hover:text-primary dark:hover:text-primary transition-colors"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
