"use client";

import { motion } from "framer-motion";
import type React from "react";
import {
  BarChart2,
  Code2,
  Globe,
  Layers,
  Palette,
  Rocket,
} from "lucide-react";

type Service = {
  title: string;
  description: string;
  features: readonly [string, string, string];
  Icon: React.ComponentType<{ className?: string }>;
};

const SERVICES: readonly Service[] = [
  {
    title: "Product Design",
    Icon: Layers,
    description: "Pixel-perfect UI/UX design that users love and investors notice.",
    features: [
      "Wireframes & user flows",
      "High-fidelity Figma UI",
      "App & web interface design",
    ],
  },
  {
    title: "MVP Development",
    Icon: Code2,
    description: "We build your product fast — functional, clean, and ready to launch.",
    features: ["Web app development", "Basic backend setup", "Deployment included"],
  },
  {
    title: "Landing Pages",
    Icon: Globe,
    description:
      "High-converting pages that turn visitors into leads and customers.",
    features: [
      "Conversion-focused design",
      "Lead capture setup",
      "Mobile responsive",
    ],
  },
  {
    title: "Branding",
    Icon: Palette,
    description:
      "A brand identity that makes your startup look credible from day one.",
    features: ["Logo design", "Color palette & typography", "Brand identity system"],
  },
  {
    title: "Pitch Decks",
    Icon: BarChart2,
    description: "Investor-ready decks that tell your story and close the room.",
    features: ["10–12 slide structure", "Clear storytelling", "Clean, premium design"],
  },
  {
    title: "Startup Execution A–Z",
    Icon: Rocket,
    description: "From idea to launch — we handle every step of building your startup.",
    features: ["Idea validation & planning", "Design + development", "Launch setup & support"],
  },
] as const;

const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
} as const;

const gridVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
} as const;

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
} as const;

export default function Services() {
  const baseGlassStyle: React.CSSProperties = {
    background: "rgba(255,255,255,0.03)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "16px",
    boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
  };

  const hoverGlassStyle: React.CSSProperties = {
    background: "rgba(0,123,252,0.05)",
    border: "1px solid rgba(0,123,252,0.3)",
    boxShadow: "0 8px 32px rgba(0,123,252,0.1)",
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    card.style.transform =
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.background = hoverGlassStyle.background as string;
    card.style.border = hoverGlassStyle.border as string;
    card.style.boxShadow = hoverGlassStyle.boxShadow as string;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)";
    card.style.transition = "transform 500ms ease";
    card.style.background = baseGlassStyle.background as string;
    card.style.border = baseGlassStyle.border as string;
    card.style.boxShadow = baseGlassStyle.boxShadow as string;
  };

  return (
    <section
      id="services"
      className="w-full bg-[var(--bg-secondary)] px-6 py-20 md:px-[80px] md:py-[120px]"
    >
      <motion.header
        className="mx-auto flex max-w-[800px] flex-col items-center text-center"
        variants={headerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="mb-3 font-ui text-[12px] tracking-[3px] text-blue">
          WHAT WE BUILD
        </div>
        <h2
          className="font-heading text-[36px] font-extrabold md:text-[48px]"
          style={{
            background:
              "linear-gradient(135deg, #FFFFFF 0%, #A5A5A5 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Services We Offer
        </h2>
        <p className="mt-3 font-body text-[17px] text-[var(--text-secondary)]">
          Everything your startup needs — under one roof.
        </p>
      </motion.header>

      <motion.div
        className="mx-auto mt-14 grid max-w-[1100px] grid-cols-1 gap-6 md:grid-cols-3"
        variants={gridVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {SERVICES.map((service) => (
          <motion.div
            key={service.title}
            variants={cardVariants}
            className="group rounded-card p-8"
            style={{
              ...baseGlassStyle,
              transition: "transform 100ms ease",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-[10px] bg-[rgba(0,123,252,0.1)] p-[10px] transition-transform duration-300 ease-out group-hover:rotate-3 group-hover:scale-110">
              <service.Icon className="h-[22px] w-[22px] text-blue" />
            </div>

            <div className="mt-4 font-heading text-[20px] font-bold text-[var(--text-primary)]">
              {service.title}
            </div>

            <p className="mt-2 font-body text-[14px] leading-[1.6] text-[var(--text-secondary)]">
              {service.description}
            </p>

            <ul className="mt-4 space-y-2">
              {service.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 font-body text-[13px] text-[var(--text-secondary)]"
                >
                  <span className="mt-[7px] h-2 w-2 rounded-full bg-blue" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-14 flex flex-col items-center justify-center gap-4 text-center md:mt-[56px]">
        <div className="font-body text-[16px] text-[var(--text-secondary)]">
          Not sure where to start?
        </div>
        <a
          href="#contact"
          className="inline-flex items-center justify-center rounded-btn border border-blue bg-transparent px-7 py-3 font-ui text-[15px] text-blue transition-colors duration-200 hover:bg-blue hover:text-white"
        >
          Book a Free Consultation
        </a>
      </div>
    </section>
  );
}

