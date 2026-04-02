"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Calculator } from "lucide-react";

const features = [
  {
    id: "design",
    label: "UI/UX Design (Figma)",
    price: 8000,
    description: "Full wireframes + high-fi UI",
  },
  {
    id: "landing",
    label: "Landing Page",
    price: 9999,
    description: "High-converting landing page",
  },
  {
    id: "mvp",
    label: "MVP Development",
    price: 20000,
    description: "Functional web application",
  },
  {
    id: "branding",
    label: "Branding & Identity",
    price: 8000,
    description: "Logo, colors, typography",
  },
  {
    id: "backend",
    label: "Backend & Database",
    price: 12000,
    description: "API, auth, database setup",
  },
  {
    id: "chatbot",
    label: "AI Chatbot",
    price: 7000,
    description: "Custom trained chatbot",
  },
  {
    id: "seo",
    label: "SEO Setup",
    price: 5000,
    description: "Meta tags, sitemap, analytics",
  },
  {
    id: "pitch",
    label: "Pitch Deck",
    price: 8000,
    description: "Investor-ready presentation",
  },
] as const;

type FeatureId = (typeof features)[number]["id"];

export default function PricingCalculator() {
  const [selected, setSelected] = useState<FeatureId[]>([]);

  const toggle = (id: FeatureId) => {
    setSelected((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]));
  };

  const total = useMemo(() => {
    return features
      .filter((f) => selected.includes(f.id))
      .reduce((sum, f) => sum + f.price, 0);
  }, [selected]);

  const discount = total > 30000 ? 0.15 : total > 20000 ? 0.1 : total > 10000 ? 0.05 : 0;
  const discountAmount = Math.floor(total * discount);
  const finalTotal = total - discountAmount;

  return (
    <section
      className="pricing-calculator-section"
      style={{
        background: "#0a0a0a",
        padding: "100px 80px",
        position: "relative",
      }}
    >
      <style>{`
        @media (max-width: 768px) {
          .pricing-calculator-section {
            padding: 80px 24px !important;
          }
        }
      `}</style>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            textAlign: "center",
            marginBottom: "48px",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(0,123,252,0.1)",
              border: "1px solid rgba(0,123,252,0.3)",
              borderRadius: "999px",
              padding: "6px 16px",
              marginBottom: "16px",
            }}
          >
            <Calculator size={14} color="#007BFC" />
            <span
              style={{
                color: "#007BFC",
                fontSize: "13px",
                fontFamily: "General Sans",
              }}
            >
              PRICING CALCULATOR
            </span>
          </div>

          <h2
            style={{
              fontFamily: "Satoshi, sans-serif",
              fontSize: "42px",
              fontWeight: 800,
              background: "linear-gradient(135deg, #FFFFFF 0%, #007BFC 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              marginBottom: "12px",
            }}
          >
            Build Your Custom Package
          </h2>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "17px",
              color: "#A5A5A5",
            }}
          >
            Select what you need and get an instant price estimate!
          </p>
        </motion.div>

        {/* Features grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "12px",
            marginBottom: "32px",
          }}
        >
          {features.map((feature, idx) => {
            const isSelected = selected.includes(feature.id);
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                onClick={() => toggle(feature.id)}
                style={{
                  background: isSelected ? "rgba(0,123,252,0.1)" : "rgba(255,255,255,0.02)",
                  border: isSelected ? "1px solid rgba(0,123,252,0.5)" : "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "12px",
                  padding: "20px",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  transition: "all 200ms ease",
                  backdropFilter: "blur(10px)",
                  minWidth: 0,
                  overflow: "hidden",
                }}
                role="button"
                tabIndex={0}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  {/* Checkbox */}
                  <div
                    style={{
                      width: "20px",
                      height: "20px",
                      borderRadius: "6px",
                      border: isSelected
                        ? "2px solid #007BFC"
                        : "2px solid rgba(165,165,165,0.3)",
                      background: isSelected ? "#007BFC" : "transparent",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      transition: "all 200ms",
                    }}
                  >
                    {isSelected ? <span style={{ color: "white", fontSize: "12px" }}>✓</span> : null}
                  </div>

                  <div>
                    <div
                      style={{
                        fontFamily: "Satoshi, sans-serif",
                        fontSize: "15px",
                        fontWeight: 600,
                        color: "#FFFFFF",
                      }}
                    >
                      {feature.label}
                    </div>
                    <div
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "12px",
                        color: "#A5A5A5",
                        marginTop: "2px",
                      }}
                    >
                      {feature.description}
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    fontFamily: "Exo 2, sans-serif",
                    fontSize: "14px",
                    fontWeight: 700,
                    color: isSelected ? "#007BFC" : "#A5A5A5",
                    flexShrink: 0,
                    marginLeft: "8px",
                    whiteSpace: "nowrap",
                  }}
                >
                  ₹{feature.price.toLocaleString()}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Total card */}
        <motion.div
          animate={{ scale: selected.length > 0 ? 1 : 0.98 }}
          style={{
            background: selected.length > 0 ? "rgba(0,123,252,0.08)" : "rgba(255,255,255,0.02)",
            border: selected.length > 0 ? "1px solid rgba(0,123,252,0.3)" : "1px solid rgba(255,255,255,0.06)",
            borderRadius: "16px",
            padding: "28px 32px",
            backdropFilter: "blur(20px)",
          }}
        >
          {selected.length === 0 ? (
            <p
              style={{
                textAlign: "center",
                color: "#A5A5A5",
                fontFamily: "Inter, sans-serif",
                fontSize: "15px",
              }}
            >
              👆 Select features above to see your custom price
            </p>
          ) : (
            <div>
              {/* Selected items */}
              <div style={{ marginBottom: "20px" }}>
                {features
                  .filter((f) => selected.includes(f.id))
                  .map((f) => (
                    <div
                      key={f.id}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "8px",
                      }}
                    >
                      <span
                        style={{
                          color: "#A5A5A5",
                          fontFamily: "Inter",
                          fontSize: "14px",
                        }}
                      >
                        ✓ {f.label}
                      </span>
                      <span
                        style={{
                          color: "#FFFFFF",
                          fontFamily: "Exo 2",
                          fontSize: "14px",
                          fontWeight: 600,
                        }}
                      >
                        ₹{f.price.toLocaleString()}
                      </span>
                    </div>
                  ))}
              </div>

              {/* Divider */}
              <div
                style={{
                  height: "1px",
                  background: "rgba(165,165,165,0.1)",
                  marginBottom: "16px",
                }}
              />

              {/* Subtotal */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "8px",
                }}
              >
                <span
                  style={{
                    color: "#A5A5A5",
                    fontFamily: "Inter",
                    fontSize: "14px",
                  }}
                >
                  Subtotal
                </span>
                <span
                  style={{
                    color: "#FFFFFF",
                    fontFamily: "Exo 2",
                    fontSize: "14px",
                  }}
                >
                  ₹{total.toLocaleString()}
                </span>
              </div>

              {/* Discount */}
              {discount > 0 && (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "8px",
                  }}
                >
                  <span
                    style={{
                      color: "#00C853",
                      fontFamily: "Inter",
                      fontSize: "14px",
                    }}
                  >
                    Bundle Discount ({discount * 100}% off)
                  </span>
                  <span
                    style={{
                      color: "#00C853",
                      fontFamily: "Exo 2",
                      fontSize: "14px",
                      fontWeight: 600,
                    }}
                  >
                    -₹{discountAmount.toLocaleString()}
                  </span>
                </div>
              )}

              {/* Total */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "12px",
                  paddingTop: "12px",
                  borderTop: "1px solid rgba(165,165,165,0.1)",
                }}
              >
                <span
                  style={{
                    fontFamily: "Satoshi, sans-serif",
                    fontSize: "20px",
                    fontWeight: 800,
                    color: "#FFFFFF",
                  }}
                >
                  Total Estimate
                </span>
                <span
                  style={{
                    fontFamily: "Exo 2, sans-serif",
                    fontSize: "32px",
                    fontWeight: 800,
                    background: "linear-gradient(135deg, #007BFC, #00C2FF)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  ₹{finalTotal.toLocaleString()}
                </span>
              </div>

              {/* CTA */}
              <a
                href="/#contact"
                style={{
                  display: "block",
                  textAlign: "center",
                  background: "#007BFC",
                  color: "#FFFFFF",
                  padding: "14px",
                  borderRadius: "8px",
                  fontFamily: "General Sans",
                  fontSize: "15px",
                  fontWeight: 600,
                  textDecoration: "none",
                  marginTop: "20px",
                  transition: "opacity 200ms",
                }}
              >
                Get Started with This Package →
              </a>

              <p
                style={{
                  textAlign: "center",
                  color: "#A5A5A5",
                  fontSize: "12px",
                  fontFamily: "Inter",
                  marginTop: "10px",
                }}
              >
                Final price may vary. Book a free call to confirm.
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

