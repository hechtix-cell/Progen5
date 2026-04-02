"use client";

import type React from "react";
import { motion } from "framer-motion";
import { BadgeCheck, Lightbulb, Users, Zap } from "lucide-react";

type ValueProp = {
  title: string;
  description: string;
  Icon: React.ComponentType<{ className?: string }>;
};

const VALUE_PROPS: readonly ValueProp[] = [
  {
    title: "One Team. Everything Done.",
    Icon: Users,
    description: "Design, dev, branding and launch — one team handles it all.",
  },
  {
    title: "2–4 Week MVP Delivery",
    Icon: Zap,
    description: "We move fast. Most MVPs go from zero to launched in weeks.",
  },
  {
    title: "Built for Non-Tech Founders",
    Icon: Lightbulb,
    description: "No technical knowledge needed. Just bring your idea.",
  },
  {
    title: "Affordable. No Compromise.",
    Icon: BadgeCheck,
    description: "Startup-friendly pricing without sacrificing quality.",
  },
] as const;

const leftVariants = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
} as const;

const gridVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
} as const;

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
} as const;

export default function About() {
  return (
    <section
      id="about"
      className="w-full bg-[var(--bg-primary)] px-6 py-20 md:px-[80px] md:py-[120px]"
    >
      <div className="mx-auto grid w-full max-w-[1100px] grid-cols-1 gap-10 md:grid-cols-2 md:gap-12">
        {/* LEFT */}
        <motion.div
          variants={leftVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col"
        >
          <div className="font-ui text-[12px] tracking-[3px] text-blue">
            WHO WE ARE
          </div>

          <h2
            className="mt-3 font-heading text-[32px] font-extrabold leading-[1.2] md:text-[44px]"
            style={{
              background:
                "linear-gradient(135deg, #FFFFFF 0%, #007BFC 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            We Are Your Execution Partner
          </h2>

          <p className="mt-5 font-body text-[16px] leading-[1.8] text-[var(--text-secondary)]">
            Progen5 is not just a design or development agency. We are a startup
            execution partner that takes your idea and builds it into a real,
            launched product.
          </p>

          <p className="mt-5 font-body text-[16px] leading-[1.8] text-[var(--text-secondary)]">
            Non-technical founders shouldn&apos;t have to juggle multiple vendors. We
            handle everything — design, development, branding, and launch — under
            one roof, at startup-friendly prices.
          </p>

          <div className="mt-7 border-l-[3px] border-blue pl-4 font-heading text-[18px] italic text-[var(--text-primary)]">
            Our mission: Help founders go from idea to launch faster.
          </div>

          <a
            href="#contact"
            className="mt-8 inline-flex w-fit items-center justify-center rounded-btn bg-blue px-7 py-3 font-ui text-[15px] text-white transition-opacity duration-200 hover:opacity-85"
          >
            Start Your Journey →
          </a>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2"
        >
          {VALUE_PROPS.map((card) => (
            <motion.div
              key={card.title}
              variants={cardVariants}
              className="card-surface rounded-card p-7 transition-colors duration-200 hover:border-[rgba(0,123,252,0.4)]"
            >
              <card.Icon className="h-6 w-6 text-blue" />
              <div className="mt-4 font-heading text-[17px] font-bold text-[var(--text-primary)]">
                {card.title}
              </div>
              <p className="mt-2 font-body text-[14px] leading-[1.6] text-[var(--text-secondary)]">
                {card.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

