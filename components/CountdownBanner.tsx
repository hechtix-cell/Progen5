"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Clock, X } from "lucide-react";

export default function CountdownBanner() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
  });
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Check if banner was dismissed
    const dismissed = sessionStorage.getItem("banner-dismissed");
    if (dismissed) {
      setVisible(false);
      return;
    }

    // Get or set expiry time
    const stored = localStorage.getItem("offer-expiry");
    let expiry: number;

    if (stored) {
      expiry = Number.parseInt(stored, 10);
    } else {
      // Set expiry to 24 hours from now
      expiry = Date.now() + 24 * 60 * 60 * 1000;
      localStorage.setItem("offer-expiry", expiry.toString());
    }

    const interval = window.setInterval(() => {
      const now = Date.now();
      const diff = expiry - now;

      if (diff <= 0) {
        // Reset timer when expired
        const newExpiry = Date.now() + 24 * 60 * 60 * 1000;
        localStorage.setItem("offer-expiry", newExpiry.toString());
        expiry = newExpiry;
        return;
      }

      const hours = Math.floor(diff / 3600000);
      const minutes = Math.floor((diff % 3600000) / 60000);
      const seconds = Math.floor((diff % 60000) / 1000);

      setTimeLeft({ hours, minutes, seconds });
    }, 1000);

    return () => window.clearInterval(interval);
  }, []);

  const handleDismiss = () => {
    setVisible(false);
    sessionStorage.setItem("banner-dismissed", "true");
  };

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{
            background: "linear-gradient(135deg, #007BFC 0%, #6400FF 100%)",
            position: "sticky",
            top: 0,
            zIndex: 999,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "16px",
              padding: "10px 48px 10px 16px",
              flexWrap: "wrap",
            }}
          >
            <Clock size={16} color="#FFFFFF" />

            <span
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "14px",
                color: "#FFFFFF",
                fontWeight: 500,
              }}
            >
              🎉 Special Offer: Get <strong>FREE prototype</strong> with any package! Expires in:
            </span>

            <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
              {[
                { value: timeLeft.hours, label: "HRS" },
                { value: timeLeft.minutes, label: "MIN" },
                { value: timeLeft.seconds, label: "SEC" },
              ].map((unit, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  <div
                    style={{
                      background: "rgba(0,0,0,0.3)",
                      borderRadius: "6px",
                      padding: "4px 8px",
                      minWidth: "40px",
                      textAlign: "center",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "Exo 2, sans-serif",
                        fontSize: "18px",
                        fontWeight: 800,
                        color: "#FFFFFF",
                        lineHeight: 1,
                      }}
                    >
                      {pad(unit.value)}
                    </div>
                    <div
                      style={{
                        fontFamily: "General Sans",
                        fontSize: "9px",
                        color: "rgba(255,255,255,0.7)",
                        letterSpacing: "1px",
                      }}
                    >
                      {unit.label}
                    </div>
                  </div>
                  {idx < 2 && (
                    <span style={{ color: "#FFFFFF", fontWeight: 800, fontSize: "16px" }}>
                      :
                    </span>
                  )}
                </div>
              ))}
            </div>

            <a
              href="#contact"
              style={{
                background: "#FFFFFF",
                color: "#007BFC",
                padding: "6px 16px",
                borderRadius: "999px",
                fontFamily: "General Sans",
                fontSize: "13px",
                fontWeight: 700,
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              Claim Now →
            </a>
          </div>

          <button
            onClick={handleDismiss}
            type="button"
            style={{
              position: "absolute",
              right: "12px",
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(255,255,255,0.2)",
              border: "none",
              borderRadius: "50%",
              width: "24px",
              height: "24px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#FFFFFF",
            }}
          >
            <X size={12} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

