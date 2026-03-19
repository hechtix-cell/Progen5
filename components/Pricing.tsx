"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Info } from "lucide-react";

type Plan = {
  name: string;
  price: string;
  subtext: string;
  features: readonly string[];
  recommended?: boolean;
};

const PLANS: readonly Plan[] = [
  {
    name: "BASIC WEBSITE",
    price: "₹8K",
    subtext: "Perfect to get started",
    features: [
      "Professional website design",
      "Mobile responsive",
      "Up to 5 pages",
      "Contact form included",
      "Basic SEO setup",
      "24/7 support included",
      "Delivered in 3-5 days",
    ],
  },
  {
    name: "Starter",
    price: "₹5K – ₹10K",
    subtext: "Best for early ideas",
    features: [
      "Landing page OR basic UI",
      "Idea discussion session",
      "Basic design included",
      "3–5 day delivery",
    ],
  },
  {
    name: "Design Package",
    price: "₹15K – ₹25K",
    subtext: "For design-first founders",
    features: [
      "Full Figma UI/UX design",
      "Wireframes + user flow",
      "5–10 screens",
      "Revision rounds included",
    ],
  },
  {
    name: "MVP Build",
    price: "₹25K – ₹35K",
    subtext: "Launch your first product",
    features: [
      "MVP development",
      "Basic UI included",
      "Landing page",
      "Deployment & hosting setup",
    ],
  },
  {
    name: "MVP + Design",
    price: "₹35K – ₹45K",
    subtext: "Most chosen by founders",
    features: [
      "Full Figma design",
      "MVP development",
      "Landing page",
      "Branding basics",
      "Deployment included",
    ],
    recommended: true,
  },
  {
    name: "Ultra Premium",
    price: "₹45K – ₹50K",
    subtext: "Full startup execution",
    features: [
      "Idea validation",
      "Full design + development",
      "Branding & identity",
      "Investor pitch deck",
      "Launch support",
    ],
  },
  {
    name: "AI CHATBOT",
    price: "₹6K – ₹8K",
    subtext: "+ ₹1,500/month maintenance",
    features: [
      "Custom trained on your business",
      "Answers FAQs 24/7 automatically",
      "Website chat widget",
      "Powered by Google Gemini AI",
      "Lead capture built in",
      "Google Sheets integration",
      "Monthly performance report",
      "Ready in 3-5 days",
    ],
  },
] as const;

const headerVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
} as const;

const listVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
} as const;

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
} as const;

function Price({ value }: { value: string }) {
  return (
    <div className="mt-2 flex w-full items-baseline whitespace-nowrap">
      <span
        style={{
          fontFamily: "Exo 2",
          fontWeight: "800",
          fontSize: "22px",
          color: "var(--text-primary)",
          overflow: "visible",
          whiteSpace: "nowrap",
          display: "block",
          width: "100%",
        }}
      >
        {value}
      </span>
    </div>
  );
}

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="w-full overflow-visible bg-[var(--bg-primary)] px-6 py-20 pt-[30px] md:px-[80px] md:py-[120px]"
    >
      <motion.header
        className="mx-auto flex max-w-[800px] flex-col items-center text-center"
        variants={headerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="font-ui text-[12px] tracking-[3px] text-blue">
          PRICING
        </div>
        <h2 className="mt-3 font-heading text-[34px] font-extrabold text-[var(--text-primary)] md:text-[48px]">
          Simple, Transparent Pricing
        </h2>
        <p className="mt-3 font-body text-[17px] text-[var(--text-secondary)]">
          No hidden fees. Pick the plan that fits your startup stage.
        </p>
      </motion.header>

      <style>
        {`
          @keyframes borderGlow {
            0%, 100% {
              box-shadow: 0 0 20px rgba(0,123,252,0.2);
            }
            50% {
              box-shadow: 0 0 50px rgba(0,123,252,0.6);
            }
          }
          .pricing-glow {
            animation: borderGlow 3s ease infinite;
          }
        `}
      </style>

      <motion.div
        className="mx-auto mt-[60px] max-w-[1200px] overflow-visible pt-[20px]"
        variants={listVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 gap-3 overflow-visible md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
          {PLANS.map((plan) => {
            const isRecommended = Boolean(plan.recommended);
            return (
              <motion.div
                key={plan.name}
                variants={cardVariants}
                className={[
                  "relative flex h-full min-w-[200px] flex-col break-words rounded-card p-8 transition-transform duration-200 ease-out hover:-translate-y-2",
                  "pricing-card card-surface",
                  "w-full md:max-w-[220px]",
                  isRecommended ? "overflow-visible mt-[20px] pt-[20px]" : "overflow-hidden",
                  isRecommended
                    ? "border-2 border-blue bg-[#0d1929] shadow-[0_0_32px_rgba(0,123,252,0.15)] md:scale-[1.03] pricing-glow"
                    : "",
                ].join(" ")}
              >
                {isRecommended ? (
                  <div className="absolute top-[-16px] left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-full bg-blue px-4 py-1 font-ui text-[12px] font-bold text-white">
                    Most Popular
                  </div>
                ) : null}

                <div className="truncate font-ui text-[11px] uppercase tracking-[1.5px] text-[var(--text-secondary)]">
                  {plan.name}
                </div>

                {plan.name === "AI CHATBOT" ? (
                  <div className="mt-2 inline-flex rounded-full border border-[rgba(0,123,252,0.3)] bg-[rgba(0,123,252,0.1)] px-[10px] py-[3px] font-ui text-[11px] text-blue">
                    🤖 AI Powered
                  </div>
                ) : null}

                <Price value={plan.price} />

                <div className="mt-1 font-body text-[13px] text-[var(--text-secondary)]">
                  {plan.subtext}
                </div>

                <div className="my-5 h-px w-full bg-[var(--border)]" />

                <ul className="mb-6 space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-[10px] font-body text-[14px] text-[var(--text-secondary)]"
                    >
                      <CheckCircle2 className="mt-[3px] h-[15px] w-[15px] flex-none text-blue" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={[
                    "mt-auto inline-flex w-full items-center justify-center rounded-btn px-3 py-3",
                    "font-ui text-[14px] transition duration-200",
                    isRecommended
                      ? "bg-blue text-white hover:opacity-85"
                      : "border border-[rgba(0,123,252,0.5)] bg-transparent text-blue hover:bg-blue hover:text-white",
                  ].join(" ")}
                >
                  Get Started
                </a>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      <div className="mx-auto mt-10 flex max-w-[800px] items-start justify-center gap-3 text-center font-body text-[14px] text-[var(--text-secondary)]">
        <Info className="mt-[2px] h-4 w-4 flex-none text-blue" />
        <p>
          All packages include a free consultation call before we start.
        </p>
      </div>
    </section>
  );
}

