"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function LiveVisitorCount() {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Generate random visitor count between 8 and 24
    const initial = Math.floor(Math.random() * (24 - 8 + 1) + 8);
    setCount(initial);
    setVisible(true);

    // Randomly change count every 8-15 seconds
    const interval = setInterval(() => {
      setCount((prev) => {
        const change = Math.random() > 0.5 ? 1 : -1;
        const newCount = prev + change;
        return Math.min(Math.max(newCount, 6), 30);
      });
    }, Math.random() * 7000 + 8000);

    return () => clearInterval(interval);
  }, []);

  if (!visible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2 }}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        background: "rgba(0,0,0,0.6)",
        border: "1px solid rgba(0,255,100,0.3)",
        borderRadius: "999px",
        padding: "6px 14px",
        backdropFilter: "blur(8px)",
      }}
    >
      {/* Pulsing green dot */}
      <div style={{ position: "relative" }}>
        <div
          style={{
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            background: "#00FF64",
          }}
        />
        <motion.div
          animate={{
            scale: [1, 2, 1],
            opacity: [0.7, 0, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            background: "#00FF64",
          }}
        />
      </div>

      <span
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: "13px",
          color: "#FFFFFF",
        }}
      >
        <span
          style={{
            fontFamily: "Exo 2, sans-serif",
            fontWeight: 700,
            color: "#00FF64",
          }}
        >
          {count}
        </span>
        &nbsp;people viewing this page
      </span>
    </motion.div>
  );
}

