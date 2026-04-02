"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle, Zap, X } from "lucide-react";

export default function FreeAuditPopup() {
  const [show, setShow] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");

  useEffect(() => {
    // Check if already shown this session
    const shown = sessionStorage.getItem("audit-popup-shown");
    if (shown) return;

    // Show after 30 seconds
    const timer = setTimeout(() => {
      setShow(true);
      sessionStorage.setItem("audit-popup-shown", "true");
    }, 30000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => setShow(false);

  const handleSubmit = () => {
    if (!email) return;
    setSubmitted(true);
    setTimeout(() => setShow(false), 3000);
  };

  return (
    <AnimatePresence>
      {show && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.7)",
              zIndex: 9998,
              backdropFilter: "blur(4px)",
            }}
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 25,
            }}
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              background: "#0a0a0a",
              border: "1px solid rgba(0,123,252,0.3)",
              borderRadius: "20px",
              padding: "40px",
              maxWidth: "480px",
              width: "90%",
              zIndex: 9999,
              boxShadow: "0 0 60px rgba(0,123,252,0.15)",
            }}
          >
            {/* Close button */}
            <button
              onClick={handleClose}
              style={{
                position: "absolute",
                top: "16px",
                right: "16px",
                background: "rgba(255,255,255,0.1)",
                border: "none",
                borderRadius: "50%",
                width: "32px",
                height: "32px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#FFFFFF",
              }}
              type="button"
            >
              <X size={16} />
            </button>

            {!submitted ? (
              <>
                {/* Badge */}
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    background: "rgba(0,123,252,0.1)",
                    border: "1px solid rgba(0,123,252,0.3)",
                    borderRadius: "999px",
                    padding: "4px 12px",
                    marginBottom: "16px",
                  }}
                >
                  <Zap size={12} color="#007BFC" />
                  <span
                    style={{
                      color: "#007BFC",
                      fontSize: "12px",
                      fontFamily: "General Sans",
                    }}
                  >
                    FREE OFFER — Limited Time
                  </span>
                </div>

                {/* Headline */}
                <h2
                  style={{
                    fontFamily: "Satoshi, sans-serif",
                    fontSize: "28px",
                    fontWeight: 800,
                    color: "#FFFFFF",
                    marginBottom: "8px",
                    lineHeight: 1.2,
                  }}
                >
                  Get a FREE Website Audit 🎯
                </h2>

                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "15px",
                    color: "#A5A5A5",
                    lineHeight: 1.7,
                    marginBottom: "20px",
                  }}
                >
                  We&apos;ll analyze your website and tell you exactly what&apos;s stopping
                  you from getting more clients — completely free!
                </p>

                {/* What you get */}
                <div
                  style={{
                    background: "#232227",
                    borderRadius: "12px",
                    padding: "16px",
                    marginBottom: "20px",
                  }}
                >
                  {[
                    "Design & UX analysis",
                    "Speed & performance check",
                    "Conversion rate tips",
                    "Competitor comparison",
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        marginBottom: idx < 3 ? "10px" : 0,
                      }}
                    >
                      <CheckCircle size={14} color="#007BFC" />
                      <span
                        style={{
                          fontFamily: "Inter",
                          fontSize: "13px",
                          color: "#FFFFFF",
                        }}
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Form */}
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    width: "100%",
                    background: "#232227",
                    border: "1px solid rgba(165,165,165,0.2)",
                    borderRadius: "8px",
                    padding: "12px 16px",
                    color: "#FFFFFF",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "14px",
                    marginBottom: "10px",
                    outline: "none",
                    boxSizing: "border-box",
                  }}
                />
                <input
                  type="url"
                  placeholder="Your website URL (optional)"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  style={{
                    width: "100%",
                    background: "#232227",
                    border: "1px solid rgba(165,165,165,0.2)",
                    borderRadius: "8px",
                    padding: "12px 16px",
                    color: "#FFFFFF",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "14px",
                    marginBottom: "16px",
                    outline: "none",
                    boxSizing: "border-box",
                  }}
                />

                <button
                  onClick={handleSubmit}
                  style={{
                    width: "100%",
                    background: "#007BFC",
                    color: "#FFFFFF",
                    border: "none",
                    borderRadius: "8px",
                    padding: "14px",
                    fontFamily: "General Sans",
                    fontSize: "15px",
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "opacity 200ms",
                  }}
                  type="button"
                >
                  Get My Free Audit 🚀
                </button>

                <p
                  style={{
                    textAlign: "center",
                    color: "#A5A5A5",
                    fontSize: "12px",
                    fontFamily: "Inter",
                    marginTop: "12px",
                  }}
                >
                  No spam. We&apos;ll email you within 24 hours with your audit report.
                </p>
              </>
            ) : (
              /* Success state */
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "48px", marginBottom: "16px" }}>🎉</div>
                <h3
                  style={{
                    fontFamily: "Satoshi, sans-serif",
                    fontSize: "24px",
                    fontWeight: 800,
                    color: "#FFFFFF",
                    marginBottom: "8px",
                  }}
                >
                  You&apos;re on the list!
                </h3>
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "15px",
                    color: "#A5A5A5",
                  }}
                >
                  We&apos;ll send your free website audit to {email} within 24 hours!
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

