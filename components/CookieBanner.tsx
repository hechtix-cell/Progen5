"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const t = window.setTimeout(() => setShow(true), 2000);
      return () => window.clearTimeout(t);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setShow(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 25 }}
          className="fixed bottom-6 left-1/2 z-[1000] w-[90%] max-w-[600px] -translate-x-1/2 rounded-[16px] border border-[rgba(0,123,252,0.3)] bg-[var(--card-bg)] px-7 py-5 shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
        >
          <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
            <div className="flex items-start gap-3">
              <div className="text-[24px] leading-none">🍪</div>
              <div className="font-body text-[14px] leading-[1.6] text-[var(--text-secondary)]">
                We use cookies to improve your experience and analyze site
                traffic.{" "}
                <a
                  href="/privacy-policy"
                  className="text-blue transition-opacity duration-200 hover:opacity-85"
                >
                  Privacy Policy
                </a>
              </div>
            </div>

            <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
              <button
                type="button"
                onClick={handleDecline}
                className="rounded-[8px] border border-[var(--border)] bg-transparent px-5 py-2 font-ui text-[14px] text-[var(--text-secondary)] transition duration-200 hover:border-[var(--accent)]"
              >
                Decline
              </button>
              <button
                type="button"
                onClick={handleAccept}
                className="rounded-[8px] bg-blue px-5 py-2 font-ui text-[14px] text-white transition-opacity duration-200 hover:opacity-85"
              >
                Accept All
              </button>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

