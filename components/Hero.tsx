"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

const BADGE_TEXT = "Startup Execution Agency";

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const [showCursor, setShowCursor] = useState(false);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index += 1;
      setTypedText(BADGE_TEXT.slice(0, index));
      if (index === BADGE_TEXT.length) {
        clearInterval(interval);
        setShowCursor(true);
      }
    }, 80);

    const cursorTimeout = setTimeout(() => {
      setShowCursor(false);
    }, BADGE_TEXT.length * 80 + 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(cursorTimeout);
    };
  }, []);

  const fadeUp = (delay: number) =>
    ({
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.6, ease: "easeOut", delay },
    }) as const;

  const scrollToServices = () => {
    const el = document.querySelector("#services");
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full bg-[var(--bg-primary)]"
      style={{
        backgroundImage:
          "radial-gradient(circle, rgba(0,123,252,0.15) 1px, transparent 1px)",
        backgroundSize: "30px 30px",
      }}
    >
      <style>
        {`
          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
        `}
      </style>

      {/* Soft blue radial glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(0,123,252,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative flex min-h-screen w-full items-center justify-center px-6">
        <div className="flex w-full max-w-[800px] flex-col items-center gap-6 text-center">
          {/* Badge */}
          <motion.div
            {...fadeUp(0)}
            className="inline-flex rounded-full border border-[rgba(0,123,252,0.3)] bg-[rgba(0,123,252,0.1)] px-4 py-[6px] font-ui text-[13px] text-blue"
          >
            🚀 {typedText || BADGE_TEXT}
            {showCursor ? (
              <span
                style={{
                  marginLeft: "2px",
                  animation: "blink 1s infinite",
                }}
              >
                |
              </span>
            ) : null}
          </motion.div>

          {/* Headline */}
          <motion.h1
            {...fadeUp(0.1)}
            className="font-heading text-[42px] font-extrabold leading-[1.1] text-[var(--text-primary)] md:text-[72px]"
          >
            Turn your <span className="text-blue">Vision</span> into Reality
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            {...fadeUp(0.2)}
            className="mx-auto max-w-[560px] font-body text-[16px] leading-[1.7] text-[var(--text-secondary)] md:text-[18px]"
          >
            We handle design, development, branding and launch — so you can focus
            on your idea.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            {...fadeUp(0.3)}
            className="flex w-full flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center rounded-btn bg-blue px-8 py-[14px] font-ui text-[15px] font-medium text-white transition duration-200 hover:scale-[1.02] hover:opacity-85 sm:w-auto"
            >
              Start Building →
            </a>
            <a
              href="#"
              className="inline-flex w-full items-center justify-center rounded-btn border border-[var(--border)] bg-transparent px-8 py-[14px] font-ui text-[15px] text-[var(--text-primary)] transition duration-200 hover:border-[var(--accent)] sm:w-auto"
            >
              See Our Work
            </a>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            {...fadeUp(0.4)}
            className="mt-6 w-full rounded-card border border-[var(--border)] bg-[var(--bg-secondary)] px-6 py-5 backdrop-blur-sm"
          >
            {/* Mobile: 3-column grid (no dividers) */}
            <div className="grid grid-cols-3 gap-4 md:hidden">
              <div className="flex flex-col items-center">
                <div className="font-accent text-[28px] font-bold text-[var(--text-primary)]">
                  10+
                </div>
                <div className="font-body text-[13px] text-[var(--text-secondary)]">
                  Projects Launched
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="font-accent text-[28px] font-bold text-[var(--text-primary)]">
                  2–4 Weeks
                </div>
                <div className="font-body text-[13px] text-[var(--text-secondary)]">
                  MVP Delivery
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="font-accent text-[28px] font-bold text-[var(--text-primary)]">
                  5 Packages
                </div>
                <div className="font-body text-[13px] text-[var(--text-secondary)]">
                  To Fit Your Budget
                </div>
              </div>
            </div>

            {/* Desktop: row with dividers */}
            <div className="hidden items-center justify-center md:flex">
              <div className="flex flex-col items-center px-6">
                <div className="font-accent text-[28px] font-bold text-[var(--text-primary)]">
                  10+
                </div>
                <div className="font-body text-[13px] text-[var(--text-secondary)]">
                  Projects Launched
                </div>
              </div>

              <div className="h-10 w-px bg-[var(--border)]" />

              <div className="flex flex-col items-center px-6">
                <div className="font-accent text-[28px] font-bold text-[var(--text-primary)]">
                  2–4 Weeks
                </div>
                <div className="font-body text-[13px] text-[var(--text-secondary)]">
                  MVP Delivery
                </div>
              </div>

              <div className="h-10 w-px bg-[var(--border)]" />

              <div className="flex flex-col items-center px-6">
                <div className="font-accent text-[28px] font-bold text-[var(--text-primary)]">
                  5 Packages
                </div>
                <div className="font-body text-[13px] text-[var(--text-secondary)]">
                  To Fit Your Budget
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        type="button"
        aria-label="Scroll to services"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[var(--text-secondary)]"
        onClick={scrollToServices}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <ChevronDown className="h-6 w-6" />
      </motion.button>
    </section>
  );
}

