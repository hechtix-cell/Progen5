"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export default function MoneyBackBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "12px",
        background: "rgba(0,200,83,0.08)",
        border: "1px solid rgba(0,200,83,0.25)",
        borderRadius: "16px",
        padding: "16px 24px",
        maxWidth: "400px",
        margin: "32px auto 0",
      }}
    >
      <ShieldCheck size={28} color="#00C853" />
      <div>
        <div
          style={{
            fontFamily: "Satoshi, sans-serif",
            fontSize: "15px",
            fontWeight: 700,
            color: "#FFFFFF",
            marginBottom: "2px",
          }}
        >
          Satisfaction Guaranteed
        </div>
        <div
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "13px",
            color: "#A5A5A5",
          }}
        >
          Not happy with the work?{" "}
          We&apos;ll fix it for free. No questions asked.
        </div>
      </div>
    </motion.div>
  );
}

