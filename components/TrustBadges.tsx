"use client";

import type { ElementType } from "react";

import { motion } from "framer-motion";
import { Clock, HeartHandshake, RefreshCw, Shield, Star, Zap } from "lucide-react";

const badges: Array<{
  icon: ElementType;
  title: string;
  subtitle: string;
  color: string;
}> = [
  {
    icon: Shield,
    title: "100% Secure",
    subtitle: "Your data is safe",
    color: "#00C853",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    subtitle: "2-6 weeks max",
    color: "#007BFC",
  },
  {
    icon: Star,
    title: "5 Star Quality",
    subtitle: "Premium output",
    color: "#FFB800",
  },
  {
    icon: RefreshCw,
    title: "Free Revisions",
    subtitle: "Until you're happy",
    color: "#007BFC",
  },
  {
    icon: Clock,
    title: "24hr Support",
    subtitle: "Always available",
    color: "#00C853",
  },
  {
    icon: HeartHandshake,
    title: "Satisfaction First",
    subtitle: "Client comes first",
    color: "#FF6B6B",
  },
];

export default function TrustBadges() {
  return (
    <section
      style={{
        background: "#0a0a0a",
        padding: "60px 80px",
        borderTop: "1px solid rgba(165,165,165,0.08)",
        borderBottom: "1px solid rgba(165,165,165,0.08)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {/* Header */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "40px",
          }}
        >
          <p
            style={{
              fontFamily: "General Sans, sans-serif",
              fontSize: "13px",
              color: "#A5A5A5",
              letterSpacing: "3px",
            }}
          >
            WHY FOUNDERS TRUST US
          </p>
        </div>

        {/* Badges grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
            gap: "16px",
          }}
        >
          {badges.map((badge, idx) => {
            const Icon = badge.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                style={{
                  background: "rgba(255,255,255,0.03)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "16px",
                  padding: "20px 16px",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "10px",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "10px",
                    background: `${badge.color}15`,
                    border: `1px solid ${badge.color}30`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon size={20} color={badge.color} />
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "Satoshi, sans-serif",
                      fontSize: "14px",
                      fontWeight: 700,
                      color: "#FFFFFF",
                      marginBottom: "2px",
                    }}
                  >
                    {badge.title}
                  </div>
                  <div
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "12px",
                      color: "#A5A5A5",
                    }}
                  >
                    {badge.subtitle}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}

