"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        background: "#000000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        padding: "0 80px",
      }}
    >
      {/* Dot grid background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle, rgba(0,123,252,0.15) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
          zIndex: 0,
        }}
      />

      {/* Blue glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(0,123,252,0.08) 0%, transparent 70%)",
          zIndex: 0,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "800px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: "24px",
        }}
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(0,123,252,0.1)",
            border: "1px solid rgba(0,123,252,0.3)",
            borderRadius: "999px",
            padding: "6px 16px",
            color: "#007BFC",
            fontSize: "13px",
            fontFamily: "General Sans, sans-serif",
          }}
        >
          🚀 Startup Execution Agency
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontFamily: "Satoshi, sans-serif",
            fontSize: "clamp(42px, 7vw, 72px)",
            fontWeight: 800,
            color: "#FFFFFF",
            lineHeight: 1.1,
            margin: 0,
          }}
        >
          Turn your{" "}
          <span style={{ color: "#007BFC" }}>Vision</span> into Reality
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "18px",
            color: "#A5A5A5",
            lineHeight: 1.7,
            maxWidth: "560px",
            margin: 0,
          }}
        >
          We handle design, development, branding and launch — so you can focus
          on your idea.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            display: "flex",
            gap: "16px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <a
            href="#contact"
            style={{
              background: "#007BFC",
              color: "#FFFFFF",
              padding: "14px 32px",
              borderRadius: "8px",
              fontFamily: "General Sans, sans-serif",
              fontSize: "15px",
              fontWeight: 500,
              textDecoration: "none",
              transition: "opacity 200ms",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Start Building →
          </a>

          <a
            href="#services"
            style={{
              background: "transparent",
              color: "#FFFFFF",
              padding: "14px 32px",
              borderRadius: "8px",
              border: "1px solid rgba(165,165,165,0.4)",
              fontFamily: "General Sans, sans-serif",
              fontSize: "15px",
              textDecoration: "none",
              transition: "border-color 200ms",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#FFFFFF")}
            onMouseLeave={(e) =>
              (e.currentTarget.style.borderColor =
                "rgba(165,165,165,0.4)")
            }
          >
            See Our Work
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "40px",
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(165,165,165,0.1)",
            borderRadius: "12px",
            padding: "20px 40px",
            marginTop: "8px",
          }}
        >
          {[
            { number: "10+", label: "Projects Launched" },
            { number: "2–4 Weeks", label: "MVP Delivery" },
            { number: "7 Packages", label: "To Fit Your Budget" },
          ].map((stat, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "4px",
                borderRight:
                  i < 2 ? "1px solid rgba(165,165,165,0.15)" : "none",
                paddingRight: i < 2 ? "40px" : "0",
              }}
            >
              <span
                style={{
                  fontFamily: "Exo 2, sans-serif",
                  fontSize: "28px",
                  fontWeight: 800,
                  color: "#FFFFFF",
                }}
              >
                {stat.number}
              </span>
              <span
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "13px",
                  color: "#A5A5A5",
                }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
        style={{
          position: "absolute",
          bottom: "32px",
          left: "50%",
          transform: "translateX(-50%)",
          cursor: "pointer",
          zIndex: 1,
        }}
        onClick={() => {
          document.getElementById("services")?.scrollIntoView({
            behavior: "smooth",
          });
        }}
      >
        <ChevronDown size={24} color="#A5A5A5" />
      </motion.div>
    </section>
  );
}

