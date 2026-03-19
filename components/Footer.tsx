"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUp,
  Clock,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Twitter,
} from "lucide-react";
import { useEffect, useState } from "react";

const SERVICES_LINKS = [
  "Product Design",
  "MVP Development",
  "Landing Pages",
  "Branding",
  "Pitch Decks",
  "Startup Execution",
] as const;

const COMPANY_LINKS = [
  { label: "About Us", href: "#about" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
  { label: "Book a Call", href: "#contact" },
] as const;

const scrollTopVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 },
} as const;

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <footer className="w-full border-t border-[var(--border)] bg-[var(--bg-secondary)] px-6 py-10 pb-8 md:px-[80px] md:py-[60px] md:pb-10">
        <div className="mx-auto w-full max-w-[1100px]">
          {/* TOP ROW */}
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12">
            {/* Column 1 — Brand */}
            <div className="lg:col-span-4">
              <img src="/images/logo.svg" alt="Progen5" className="h-9 w-auto" />

              <div className="mt-3 font-body text-[14px] text-[var(--text-secondary)]">
                Turn your Vision into Reality
              </div>

              <p className="mt-2 max-w-[260px] font-body text-[13px] leading-[1.7] text-[var(--text-secondary)]">
                We are a startup execution agency helping non-technical founders
                go from idea to launch.
              </p>

              <div className="mt-5 flex items-center gap-4">
                <a
                  href="#"
                  className="text-[var(--text-secondary)] transition-colors duration-200 hover:text-[var(--text-primary)]"
                  aria-label="Twitter"
                >
                  <Twitter className="h-[18px] w-[18px]" />
                </a>
                <a
                  href="#"
                  className="text-[var(--text-secondary)] transition-colors duration-200 hover:text-[var(--text-primary)]"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-[18px] w-[18px]" />
                </a>
                <a
                  href="#"
                  className="text-[var(--text-secondary)] transition-colors duration-200 hover:text-[var(--text-primary)]"
                  aria-label="Instagram"
                >
                  <Instagram className="h-[18px] w-[18px]" />
                </a>
              </div>
            </div>

            {/* Column 2 — Services */}
            <div className="lg:col-span-3">
              <div className="mb-4 font-ui text-[13px] font-bold tracking-[1px] text-[var(--text-primary)]">
                Services
              </div>
              <div className="flex flex-col gap-2.5">
                {SERVICES_LINKS.map((label) => (
                  <a
                    key={label}
                    href="#services"
                    className="font-body text-[14px] text-[var(--text-secondary)] transition-colors duration-200 hover:text-[var(--text-primary)]"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>

            {/* Column 3 — Company */}
            <div className="lg:col-span-3">
              <div className="mb-4 font-ui text-[13px] font-bold tracking-[1px] text-[var(--text-primary)]">
                Company
              </div>
              <div className="flex flex-col gap-2.5">
                {COMPANY_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="font-body text-[14px] text-[var(--text-secondary)] transition-colors duration-200 hover:text-[var(--text-primary)]"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Column 4 — Contact */}
            <div className="lg:col-span-2">
              <div className="mb-4 font-ui text-[13px] font-bold tracking-[1px] text-[var(--text-primary)]">
                Contact
              </div>
              <div className="flex flex-col gap-2.5">
                <div className="flex items-center gap-2 font-body text-[14px] text-[var(--text-secondary)]">
                  <Mail className="h-[14px] w-[14px] text-blue" />
                  <span>hechtix@gmail.com</span>
                </div>
                <div className="flex items-center gap-2 font-body text-[14px] text-[var(--text-secondary)]">
                  <Clock className="h-[14px] w-[14px] text-blue" />
                  <span>Reply within 24 hrs</span>
                </div>
                <div className="flex items-center gap-2 font-body text-[14px] text-[var(--text-secondary)]">
                  <MapPin className="h-[14px] w-[14px] text-blue" />
                  <span>India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="my-10 h-px w-full bg-[var(--border)]" />

          {/* Bottom row */}
          <div className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
            <div className="font-body text-[13px] text-[var(--text-secondary)]">
              © 2025 Progen5. All rights reserved.
            </div>
            <div className="font-body text-[13px] italic text-[var(--text-secondary)]">
              Execution over ideas. 🚀
            </div>
            <div className="font-body text-[13px] text-[var(--text-secondary)]">
              Built with ❤️ for founders
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to top */}
      <AnimatePresence>
        {showScrollTop ? (
          <motion.button
            type="button"
            aria-label="Scroll to top"
            className="fixed bottom-8 right-8 z-50 inline-flex h-11 w-11 items-center justify-center rounded-full bg-blue text-white transition duration-200 hover:scale-110 hover:opacity-85"
            variants={scrollTopVariants}
            initial="hidden"
            animate="show"
            exit="hidden"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <ArrowUp className="h-[18px] w-[18px]" />
          </motion.button>
        ) : null}
      </AnimatePresence>
    </>
  );
}

