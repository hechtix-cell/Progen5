"use client";

import About from "@/components/About";
import CookieBanner from "@/components/CookieBanner";
import Contact from "@/components/Contact";
import CountdownBanner from "@/components/CountdownBanner";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import Services from "@/components/Services";
import SkeletonLoader from "@/components/SkeletonLoader";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import PricingCalculator from "@/components/PricingCalculator";
import WhatsAppButton from "@/components/WhatsAppButton";
import TrustBadges from "@/components/TrustBadges";
import FreeAuditPopup from "@/components/FreeAuditPopup";
import ComparisonTable from "@/components/ComparisonTable";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const [showIntro, setShowIntro] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const visited = sessionStorage.getItem("visited");
    if (!visited) {
      setShowIntro(true);
      sessionStorage.setItem("visited", "true");
      setTimeout(() => {
        setShowIntro(false);
      }, 1500);
    }
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 1200);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {showIntro ? (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black"
          >
            <div className="font-heading text-[42px] font-extrabold text-white">
              Progen<span className="text-blue">5</span>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="skeleton"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <SkeletonLoader />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <main>
              <CountdownBanner />
              <Navbar />
              <Hero />
              <TrustBadges />
              <Services />
              <About />
              <Stats />
              <Testimonials />
              <Pricing />
              <PricingCalculator />
              <ComparisonTable />
              <FAQ />
              <Contact />
              <Footer />
              <WhatsAppButton />
              <FreeAuditPopup />
              <CookieBanner />
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

