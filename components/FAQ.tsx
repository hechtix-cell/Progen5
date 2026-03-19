"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

const FAQS: readonly FAQItem[] = [
  {
    question: "How long does it take to build an MVP?",
    answer:
      "Most MVPs are delivered in 2–4 weeks depending on complexity. Landing pages take 3–5 days. We'll give you a clear timeline after our discovery call.",
  },
  {
    question: "Do I need any technical knowledge?",
    answer:
      "Not at all. We work with non-technical founders every day. Just bring your idea — we handle everything from design and development to deployment.",
  },
  {
    question: "What's included in the free consultation?",
    answer:
      "We'll discuss your idea, understand your goals, suggest the right package, and give you a rough roadmap — all for free, no strings attached.",
  },
  {
    question: "Can I upgrade my package later?",
    answer:
      "Yes! Many founders start with the Starter or Design package and upgrade as their startup grows. We make it seamless to scale up.",
  },
  {
    question: "Who owns the code and designs?",
    answer:
      "You do. 100%. Once the project is delivered and payment is complete, all code, designs and assets belong to you.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "We offer revisions to make sure you're happy. We don't offer refunds once work has started, but we guarantee satisfaction through our revision policy.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "We use modern tech — Next.js, React, Tailwind CSS for frontend. Node.js or Firebase for backend. Figma for design. We choose the best stack for your needs.",
  },
  {
    question: "Can you work with my existing designs?",
    answer:
      "Absolutely. If you have Figma files, wireframes or even rough sketches, we can work from those and build your product.",
  },
  {
    question: "How do I get started?",
    answer:
      "Just book a free consultation using the form on this page or click 'Book a Free Call' in the navbar. We'll get back to you within 24 hours.",
  },
  {
    question: "Do you build mobile apps?",
    answer:
      "Currently we focus on web apps and PWAs that work great on mobile. Native iOS/Android apps are on our roadmap for the near future.",
  },
  {
    question: "What if I just have a rough idea?",
    answer:
      "Perfect — that's exactly where we shine. We help validate your idea, define the MVP scope, and build only what's needed to launch and learn.",
  },
  {
    question: "How do payments work?",
    answer:
      "We take 50% upfront and 50% on delivery. We accept bank transfers and UPI. All pricing is transparent — no hidden fees ever.",
  },
] as const;

const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08 },
  }),
} as const;

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const openWhatsApp = () => {
    const number = "919611702503";
    window.open(`https://wa.me/${number}`, "_blank");
  };

  return (
    <section
      id="faq"
      className="w-full bg-[var(--bg-secondary)] px-6 py-20 md:px-[80px] md:py-[120px]"
    >
      <motion.header
        className="mx-auto flex max-w-[800px] flex-col items-center text-center"
        variants={headerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="font-ui text-[12px] tracking-[3px] text-blue">FAQ</div>
        <h2 className="mt-3 font-heading text-[34px] font-extrabold text-[var(--text-primary)] md:text-[48px]">
          Got Questions?
        </h2>
        <p className="mt-3 font-body text-[17px] text-[var(--text-secondary)]">
          Everything you need to know before getting started.
        </p>
      </motion.header>

      <div className="mx-auto mt-[60px] flex max-w-[800px] flex-col gap-4">
        {FAQS.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <motion.div
              key={faq.question}
              custom={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className={[
                "card-surface overflow-hidden rounded-card transition-all duration-200",
                isOpen
                  ? "border-[rgba(0,123,252,0.4)] shadow-[0_0_20px_rgba(0,123,252,0.05)]"
                  : "",
              ].join(" ")}
            >
              <button
                type="button"
                onClick={() => toggle(index)}
                className="flex w-full items-center justify-between px-7 py-6 text-left"
              >
                <span className="font-heading text-[17px] font-bold text-[var(--text-primary)] transition-colors duration-200 hover:text-blue">
                  {faq.question}
                </span>
                <ChevronDown
                  className={[
                    "h-5 w-5 text-[var(--text-secondary)] transition-transform duration-300 ease-out",
                    isOpen ? "rotate-180" : "",
                  ].join(" ")}
                />
              </button>

              <AnimatePresence initial={false}>
                {isOpen ? (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-7 pb-6 font-body text-[15px] leading-[1.8] text-[var(--text-secondary)]">
                      {faq.answer}
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      <div className="mx-auto mt-[60px] max-w-[600px] rounded-[16px] border border-[rgba(0,123,252,0.3)] bg-[#0d1929] p-8 text-center md:p-12">
        <div className="font-heading text-[28px] font-bold text-[var(--text-primary)]">
          Still have questions?
        </div>
        <p className="mt-3 font-body text-[16px] text-[var(--text-secondary)]">
          We&apos;re happy to answer anything. Just reach out directly.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-btn bg-blue px-8 py-[14px] font-ui text-[15px] text-white transition duration-200 hover:opacity-85"
          >
            Book a Free Call
          </a>
          <button
            type="button"
            onClick={openWhatsApp}
            className="inline-flex items-center justify-center rounded-btn border border-[#25D366] bg-transparent px-8 py-[14px] font-ui text-[15px] text-[#25D366] transition duration-200 hover:bg-[#25D366] hover:text-white"
          >
            Chat on WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}

