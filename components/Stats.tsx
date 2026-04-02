"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  {
    number: 15,
    suffix: "+",
    label: "Projects Delivered",
    description: "Websites, MVPs and apps",
    color: "#007BFC",
    icon: "🚀",
  },
  {
    number: 100,
    suffix: "%",
    label: "Client Satisfaction",
    description: "Happy clients always",
    color: "#00C853",
    icon: "⭐",
  },
  {
    number: 4,
    suffix: " Weeks",
    label: "Average Delivery",
    description: "From idea to launch",
    color: "#FFB800",
    icon: "⚡",
  },
  {
    number: 50,
    suffix: "K+",
    label: "Lines of Code",
    description: "Written for clients",
    color: "#6400FF",
    icon: "💻",
  },
  {
    number: 7,
    suffix: "+",
    label: "Industries Served",
    description: "Across multiple domains",
    color: "#FF6B6B",
    icon: "🌍",
  },
  {
    number: 3,
    suffix: " Countries",
    label: "Global Reach",
    description: "India, UAE, USA & more",
    color: "#00C2FF",
    icon: "🌐",
  },
];

function AnimatedNumber({
  target,
  suffix,
  color,
  inView,
}: {
  target: number;
  suffix: string;
  color: string;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = window.setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        window.clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => window.clearInterval(timer);
  }, [inView, target]);

  return (
    <span
      style={{
        fontFamily: "Exo 2, sans-serif",
        fontSize: "48px",
        fontWeight: 800,
        background: `linear-gradient(135deg, ${color}, #FFFFFF)`,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
    >
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className="stats-section"
      style={{
        background: "#000000",
        padding: "100px 80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{`
        @media (max-width: 768px) {
          .stats-section {
            padding: 80px 24px !important;
          }
        }
      `}</style>

      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "800px",
          height: "400px",
          background:
            "radial-gradient(ellipse, rgba(0,123,252,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            textAlign: "center",
            marginBottom: "60px",
          }}
        >
          <div
            style={{
              fontFamily: "General Sans, sans-serif",
              fontSize: "12px",
              letterSpacing: "3px",
              color: "#007BFC",
              marginBottom: "12px",
            }}
          >
            BY THE NUMBERS
          </div>
          <h2
            style={{
              fontFamily: "Satoshi, sans-serif",
              fontSize: "42px",
              fontWeight: 800,
              background:
                "linear-gradient(135deg, #FFFFFF 0%, #A5A5A5 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Our Impact in Numbers
          </h2>
        </motion.div>

        {/* Stats grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
          }}
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              style={{
                background: "rgba(255,255,255,0.02)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "20px",
                padding: "32px",
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Background accent */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "2px",
                  background: `linear-gradient(90deg, transparent, ${stat.color}, transparent)`,
                }}
              />

              {/* Icon */}
              <div
                style={{
                  fontSize: "32px",
                  marginBottom: "12px",
                }}
              >
                {stat.icon}
              </div>

              {/* Number */}
              <AnimatedNumber
                target={stat.number}
                suffix={stat.suffix}
                color={stat.color}
                inView={inView}
              />

              {/* Label */}
              <div
                style={{
                  fontFamily: "Satoshi, sans-serif",
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "#FFFFFF",
                  marginTop: "8px",
                  marginBottom: "4px",
                }}
              >
                {stat.label}
              </div>

              {/* Description */}
              <div
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "13px",
                  color: "#A5A5A5",
                }}
              >
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

