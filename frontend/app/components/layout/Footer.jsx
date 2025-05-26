import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import logo from "@/public/images/logo-new.webp";
import Image from "next/image";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/refund-policy", label: "Refund Policy" },
  { href: "/contact", label: "Contact Us" },
  { href: "/blog", label: "Blog" },
];

const socialLinks = [
  {
    name: "Facebook",
    href: "#",
    icon: FaFacebookF,
  },
  {
    name: "Twitter",
    href: "#",
    icon: FaTwitter,
  },
  {
    name: "Instagram",
    href: "#",
    icon: FaInstagram,
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-muted to-background dark:from-secondary dark:to-background-dark border-t border-border/50 dark:border-border-dark/50">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-grid-slate-100/50 dark:bg-grid-slate-700/25 bg-[size:20px_20px] opacity-20" />

      <div className="relative container py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Company Info - Spans 5 columns */}
          <div className="md:col-span-5 space-y-6">
            <Link href="/" className="flex items-center gap-3 group">
              <Image src={logo} alt="Necro IPTV Premium Service" width={100} height={100} />
            </Link>
            <p className="text-sm leading-relaxed text-muted-foreground dark:text-foreground-dark/70">
              Necro IPTV offers 25,000+ live channels and a massive VOD library
              with over 60,000 movies and series in HD & 4K quality. Enjoy fast,
              stable streaming with minimal buffering, multi-device
              compatibility (Firestick, Android, iOS, Smart TVs), and 24/7
              customer support. Upgrade your entertainment with Necro IPTV
              today!
            </p>
          </div>

          {/* Quick Links & Contact - Spans 7 columns */}
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="font-bold text-base text-foreground dark:text-foreground-dark">
                Quick Links
              </h3>
              <ul className="space-y-4">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground dark:text-foreground-dark/70 hover:text-primary dark:hover:text-primary transition-colors inline-flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50 group-hover:bg-primary transition-colors" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <h3 className="font-bold text-base text-foreground dark:text-foreground-dark">
                Contact
              </h3>
              <div className="space-y-4">
                <div className="text-sm text-muted-foreground dark:text-foreground-dark/70 space-y-1">
                  <p className="font-medium text-foreground/80 dark:text-foreground-dark/80">
                    Email:
                  </p>
                  <a href="mailto:admin@necroiptv.us">admin@necroiptv.us</a>
                </div>
                <div className="text-sm text-muted-foreground dark:text-foreground-dark/70 space-y-1">
                  <p className="font-medium text-foreground/80 dark:text-foreground-dark/80">
                    Phone:
                  </p>
                  <a href="https://wa.link/kkdei9">‪+1 (873) 300‑0545‬</a>
                </div>
                <div className="text-sm text-muted-foreground dark:text-foreground-dark/70 space-y-1">
                  <p className="font-medium text-foreground/80 dark:text-foreground-dark/80">
                    Hours:
                  </p>
                  <p>24/7 Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section with enhanced styling */}
        <div className="mt-16 pt-8 border-t border-border/50 dark:border-border-dark/50">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <p className="text-sm text-muted-foreground dark:text-foreground-dark/70">
              © {new Date().getFullYear()} Necro IPTV - Premium IPTV Service. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="p-2 rounded-full bg-muted-foreground/5 hover:bg-primary/10 dark:bg-foreground-dark/10 dark:hover:bg-primary/20 text-muted-foreground hover:text-primary dark:text-foreground-dark/70 dark:hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
