"use client";

import { motion } from "framer-motion";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  initials: string;
};

const ROW_ONE: readonly Testimonial[] = [
  {
    quote:
      "Progen5 took my idea and turned it into a real product in just 3 weeks. I had zero technical knowledge and they handled everything perfectly.",
    name: "Rahul Sharma",
    role: "Founder, EduTrack",
    initials: "RS",
  },
  {
    quote:
      "The design quality is insane for the price. My investors were impressed with the pitch deck and UI they built.",
    name: "Priya Menon",
    role: "CEO, HealthBridge",
    initials: "PM",
  },
  {
    quote:
      "I was overwhelmed trying to hire designers and developers separately. Progen5 made it so simple — one team, everything done.",
    name: "Arjun Patel",
    role: "Indie Hacker",
    initials: "AP",
  },
  {
    quote:
      "Fastest turnaround I've ever seen. Landing page was live in 4 days and conversions are already coming in.",
    name: "Sneha Reddy",
    role: "Founder, FitMeals",
    initials: "SR",
  },
] as const;

const ROW_TWO: readonly Testimonial[] = [
  {
    quote:
      "They don't just build — they think like co-founders. The strategic input they gave was invaluable.",
    name: "Kiran Nair",
    role: "Startup Founder",
    initials: "KN",
  },
  {
    quote:
      "Best investment I made for my startup. The MVP + Design package gave me everything I needed to start pitching.",
    name: "Amit Joshi",
    role: "Founder, LogiFlow",
    initials: "AJ",
  },
  {
    quote:
      "Professional, fast, and affordable. Progen5 is exactly what non-tech founders like me need.",
    name: "Divya Kumar",
    role: "Creator & Entrepreneur",
    initials: "DK",
  },
  {
    quote:
      "From idea to launch in under a month. I still can't believe how smooth the whole process was.",
    name: "Rohan Verma",
    role: "Co-Founder, PayEase",
    initials: "RV",
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

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="flex w-[320px] shrink-0 flex-col rounded-card border border-[rgba(165,165,165,0.1)] bg-dark-gray p-7">
      <div className="mb-3 text-[14px]" aria-label="5 star rating">
        <span style={{ color: "#FFB800" }}>★★★★★</span>
      </div>
      <p className="mb-5 font-body text-[15px] leading-[1.7] text-light-gray">
        {testimonial.quote}
      </p>
      <div className="mt-auto flex items-center gap-3">
        <div
          className="flex h-10 w-10 items-center justify-center rounded-full"
          style={{
            background:
              "linear-gradient(135deg, #007BFC 0%, #4C8DFF 50%, #00C2FF 100%)",
          }}
        >
          <span className="font-ui text-[14px] font-bold text-white">
            {testimonial.initials}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="font-heading text-[15px] font-bold text-white">
            {testimonial.name}
          </span>
          <span className="font-body text-[13px] text-light-gray">
            {testimonial.role}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="w-full bg-[#0a0a0a] px-6 py-20 md:px-[80px] md:py-[120px]"
    >
      <style>
        {`
          @keyframes scrollLeft {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          @keyframes scrollRight {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }

          .testimonial-row {
            display: flex;
            width: max-content;
          }

          .testimonial-row--left {
            animation: scrollLeft 40s linear infinite;
          }

          .testimonial-row--right {
            animation: scrollRight 40s linear infinite;
          }

          .testimonial-row:hover {
            animation-play-state: paused;
          }
        `}
      </style>

      <motion.header
        className="mx-auto flex max-w-[800px] flex-col items-center text-center"
        variants={headerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="font-ui text-[12px] tracking-[3px] text-blue">
          TESTIMONIALS
        </div>
        <h2 className="mt-3 font-heading text-[34px] font-extrabold text-white md:text-[48px]">
          What Founders Say
        </h2>
        <p className="mt-3 font-body text-[17px] text-light-gray">
          Real feedback from real founders we&apos;ve worked with.
        </p>
      </motion.header>

      <div
        className="relative mt-10 space-y-6 overflow-hidden"
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
          maskImage:
            "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
        }}
      >
        {/* Row 1 */}
        <div className="testimonial-row testimonial-row--left gap-5">
          {[...ROW_ONE, ...ROW_ONE].map((t, index) => (
            <TestimonialCard key={`${t.name}-${index}`} testimonial={t} />
          ))}
        </div>

        {/* Row 2 */}
        <div className="testimonial-row testimonial-row--right gap-5">
          {[...ROW_TWO, ...ROW_TWO].map((t, index) => (
            <TestimonialCard key={`${t.name}-${index}`} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

