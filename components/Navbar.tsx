"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

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

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50",
        "h-[70px] border-b border-[rgba(165,165,165,0.15)]",
        "transition-colors duration-200",
        isScrolled ? "bg-[rgba(0,0,0,0.90)] backdrop-blur-md" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-full w-full items-center justify-between px-6 md:px-[80px]">
        {/* LEFT */}
        <a href="#hero" className="flex items-center">
          <div style={{ display: "flex", alignItems: "center", padding: "0px" }}>
            <img
              src="/images/logo.svg"
              alt="Progen5"
              style={{
                height: "140px",
                width: "auto",
                mixBlendMode: "screen",
                filter: "brightness(1)",
              }}
            />
          </div>
        </a>

        {/* CENTER */}
        <nav className="hidden md:flex items-center gap-10 font-ui text-[15px] text-light-gray">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors duration-200 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

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
            className="inline-flex items-center justify-center text-white md:hidden"
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
            className="fixed inset-0 z-50 bg-black"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="relative h-full w-full">
              <button
                type="button"
                className="absolute right-6 top-6 inline-flex items-center justify-center text-white"
                aria-label="Close menu"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-6 w-6" />
              </button>

              <nav className="flex h-full flex-col items-center justify-center gap-8 font-ui text-[15px] text-light-gray">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="transition-colors duration-200 hover:text-white"
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

