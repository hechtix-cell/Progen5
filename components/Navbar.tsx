"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import clsx from "clsx";
import { useTheme } from "next-themes";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50",
        "h-[70px] border-b border-[var(--border)]",
        "transition-colors duration-200",
        isScrolled ? "bg-[var(--bg-secondary)] backdrop-blur-md" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-full w-full items-center justify-between px-6 md:px-[80px]">
        {/* LEFT */}
        <a href="#hero" className="flex items-center">
          <div style={{ display: "flex", alignItems: "center", padding: "0px" }}>
            <Image
              src="/images/logo.svg?v=3"
              alt="Progen5"
              width={140}
              height={55}
              unoptimized
              priority
              style={{ width: "auto", height: "55px" }}
            />
          </div>
        </a>

        {/* CENTER */}
        <nav className="hidden md:flex items-center gap-10 font-ui text-[15px] text-[var(--text-secondary)]">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors duration-200 hover:text-[var(--text-primary)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {mounted && (
          <button
            type="button"
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            style={{
              width: "38px",
              height: "38px",
              borderRadius: "8px",
              background: "var(--bg-secondary, #232227)",
              border: "1px solid rgba(165,165,165,0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all 200ms",
            }}
          >
            {theme === "dark" ? (
              <Sun size={16} color="#A5A5A5" />
            ) : (
              <Moon size={16} color="#555555" />
            )}
          </button>
        )}

        {/* RIGHT */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className={clsx(
              "hidden md:inline-flex",
              "rounded-btn bg-blue px-5 py-[10px]",
              "font-ui text-[14px] font-medium text-white",
              "transition-opacity duration-200 hover:opacity-85",
            )}
          >
            Book a Free Call
          </a>

          <button
            type="button"
            className="inline-flex items-center justify-center text-[var(--text-primary)] md:hidden"
            aria-label="Open menu"
            onClick={() => setIsOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.aside
            className="fixed inset-0 z-50 bg-[var(--bg-primary)]"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="relative h-full w-full">
              <button
                type="button"
                className="absolute right-6 top-6 inline-flex items-center justify-center text-[var(--text-primary)]"
                aria-label="Close menu"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-6 w-6" />
              </button>

              <nav className="flex h-full flex-col items-center justify-center gap-8 font-ui text-[15px] text-[var(--text-secondary)]">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="transition-colors duration-200 hover:text-[var(--text-primary)]"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}

                <a
                  href="#contact"
                  className={clsx(
                    "mt-6 inline-flex",
                    "rounded-btn bg-blue px-5 py-[10px]",
                    "font-ui text-[14px] font-medium text-white",
                    "transition-opacity duration-200 hover:opacity-85",
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  Book a Free Call
                </a>
              </nav>
            </div>
          </motion.aside>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

