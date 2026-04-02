"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const features = [
  {
    feature: "Timeline",
    us: "2–6 Weeks",
    others: "3–6 Months",
    highlight: true,
  },
  {
    feature: "Starting Price",
    us: "₹9,999",
    others: "₹50,000+",
    highlight: true,
  },
  {
    feature: "Free Prototype",
    us: true,
    others: false,
    highlight: true,
  },
  {
    feature: "Dedicated Team",
    us: true,
    others: false,
    highlight: false,
  },
  {
    feature: "Design Included",
    us: true,
    others: false,
    highlight: false,
  },
  {
    feature: "Branding Included",
    us: true,
    others: false,
    highlight: false,
  },
  {
    feature: "Deployment Included",
    us: true,
    others: false,
    highlight: false,
  },
  {
    feature: "Post-Launch Support",
    us: true,
    others: false,
    highlight: false,
  },
  {
    feature: "AI Chatbot Option",
    us: true,
    others: false,
    highlight: false,
  },
  {
    feature: "Free Revisions",
    us: true,
    others: false,
    highlight: false,
  },
  {
    feature: "Non-Tech Friendly",
    us: true,
    others: false,
    highlight: true,
  },
  {
    feature: "Single Point of Contact",
    us: true,
    others: false,
    highlight: false,
  },
] as const;

export default function ComparisonTable() {
  return (
    <section
      style={{
        background: "#000000",
        padding: "100px 80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "30%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(circle, rgba(0,123,252,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "900px",
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
            marginBottom: "56px",
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
            WHY CHOOSE US
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
              marginBottom: "12px",
            }}
          >
            Progen5 vs Other Agencies
          </h2>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "17px",
              color: "#A5A5A5",
            }}
          >
            See why founders choose us over traditional agencies
          </p>
        </motion.div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            borderRadius: "20px",
            overflow: "hidden",
            border: "1px solid rgba(165,165,165,0.1)",
          }}
        >
          {/* Table header */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              background: "#232227",
              padding: "0",
            }}
          >
            <div
              style={{
                padding: "20px 24px",
                fontFamily: "General Sans, sans-serif",
                fontSize: "13px",
                letterSpacing: "2px",
                color: "#A5A5A5",
              }}
            >
              FEATURE
            </div>
            <div
              style={{
                padding: "20px 24px",
                textAlign: "center",
                background: "rgba(0,123,252,0.1)",
                borderLeft: "1px solid rgba(0,123,252,0.2)",
                borderRight: "1px solid rgba(0,123,252,0.2)",
              }}
            >
              <div
                style={{
                  fontFamily: "Satoshi, sans-serif",
                  fontSize: "16px",
                  fontWeight: 800,
                  background: "linear-gradient(135deg, #007BFC, #00C2FF)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Progen5 ⭐
              </div>
              <div
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "12px",
                  color: "#007BFC",
                  marginTop: "2px",
                }}
              >
                Your best choice
              </div>
            </div>
            <div style={{ padding: "20px 24px", textAlign: "center" }}>
              <div
                style={{
                  fontFamily: "Satoshi, sans-serif",
                  fontSize: "16px",
                  fontWeight: 700,
                  color: "#A5A5A5",
                }}
              >
                Other Agencies
              </div>
              <div
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "12px",
                  color: "#666",
                  marginTop: "2px",
                }}
              >
                Traditional approach
              </div>
            </div>
          </div>

          {/* Table rows */}
          {features.map((row, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                background: row.highlight
                  ? "rgba(0,123,252,0.03)"
                  : idx % 2 === 0
                    ? "#0a0a0a"
                    : "#000000",
                borderTop: "1px solid rgba(165,165,165,0.06)",
              }}
            >
              <div
                style={{
                  padding: "16px 24px",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "14px",
                  color: row.highlight ? "#FFFFFF" : "#A5A5A5",
                  fontWeight: row.highlight ? 600 : 400,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {row.feature}
              </div>

              <div
                style={{
                  padding: "16px 24px",
                  textAlign: "center",
                  background: "rgba(0,123,252,0.05)",
                  borderLeft: "1px solid rgba(0,123,252,0.1)",
                  borderRight: "1px solid rgba(0,123,252,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {typeof row.us === "boolean" ? (
                  row.us ? (
                    <div
                      style={{
                        width: "28px",
                        height: "28px",
                        borderRadius: "50%",
                        background: "rgba(0,200,83,0.15)",
                        border: "1px solid rgba(0,200,83,0.3)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Check size={14} color="#00C853" />
                    </div>
                  ) : (
                    <div
                      style={{
                        width: "28px",
                        height: "28px",
                        borderRadius: "50%",
                        background: "rgba(255,59,48,0.1)",
                        border: "1px solid rgba(255,59,48,0.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <X size={14} color="#FF3B30" />
                    </div>
                  )
                ) : (
                  <span
                    style={{
                      fontFamily: "Exo 2, sans-serif",
                      fontSize: "15px",
                      fontWeight: 700,
                      color: "#007BFC",
                    }}
                  >
                    {row.us}
                  </span>
                )}
              </div>

              <div
                style={{
                  padding: "16px 24px",
                  textAlign: "center",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {typeof row.others === "boolean" ? (
                  row.others ? (
                    <div
                      style={{
                        width: "28px",
                        height: "28px",
                        borderRadius: "50%",
                        background: "rgba(0,200,83,0.15)",
                        border: "1px solid rgba(0,200,83,0.3)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Check size={14} color="#00C853" />
                    </div>
                  ) : (
                    <div
                      style={{
                        width: "28px",
                        height: "28px",
                        borderRadius: "50%",
                        background: "rgba(255,59,48,0.1)",
                        border: "1px solid rgba(255,59,48,0.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <X size={14} color="#FF3B30" />
                    </div>
                  )
                ) : (
                  <span
                    style={{
                      fontFamily: "Exo 2, sans-serif",
                      fontSize: "15px",
                      fontWeight: 700,
                      color: "#A5A5A5",
                    }}
                  >
                    {row.others}
                  </span>
                )}
              </div>
            </motion.div>
          ))}

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              background: "#232227",
              borderTop: "1px solid rgba(165,165,165,0.1)",
            }}
          >
            <div style={{ padding: "20px 24px" }} />
            <div
              style={{
                padding: "20px 24px",
                textAlign: "center",
                background: "rgba(0,123,252,0.1)",
                borderLeft: "1px solid rgba(0,123,252,0.2)",
                borderRight: "1px solid rgba(0,123,252,0.2)",
              }}
            >
              <a
                href="#contact"
                style={{
                  display: "inline-block",
                  background: "#007BFC",
                  color: "#FFFFFF",
                  padding: "10px 24px",
                  borderRadius: "8px",
                  fontFamily: "General Sans",
                  fontSize: "14px",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                Choose Progen5 →
              </a>
            </div>
            <div style={{ padding: "20px 24px" }} />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{
            textAlign: "center",
            color: "#A5A5A5",
            fontFamily: "Inter, sans-serif",
            fontSize: "14px",
            marginTop: "24px",
          }}
        >
          * Based on market research and client feedback. Results may vary.
        </motion.p>
      </div>
    </section>
  );
}

