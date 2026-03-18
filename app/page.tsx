"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import WhatsAppButton from "@/components/WhatsAppButton";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const [showIntro, setShowIntro] = useState(false);

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

      <main>
        <Navbar />
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <Pricing />
        <Contact />
        <Footer />
        <WhatsAppButton />
      </main>
    </>
  );
}

