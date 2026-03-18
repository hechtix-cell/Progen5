"use client";

import { motion } from "framer-motion";
import { Clock, Mail, MessageCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useMemo, useState } from "react";

type PackageOption =
  | ""
  | "Starter — ₹5K–₹10K"
  | "Design Package — ₹15K–₹25K"
  | "MVP Build — ₹25K–₹35K"
  | "MVP + Design — ₹35K–₹45K"
  | "Ultra Premium — ₹45K–₹50K"
  | "Not sure yet";

const initialState = {
  name: "",
  email: "",
  idea: "",
  package: "" as PackageOption,
  message: "",
};

const leftVariants = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
} as const;

const rightVariants = {
  hidden: { opacity: 0, x: 30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
} as const;

export default function Contact() {
  const [formData, setFormData] = useState(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const fieldClasses = useMemo(
    () =>
      [
        "w-full",
        "rounded-btn",
        "border border-[rgba(165,165,165,0.15)]",
        "bg-[rgba(255,255,255,0.04)]",
        "px-4 py-[14px]",
        "font-body text-[15px] text-white",
        "placeholder:text-light-gray/60",
        "transition duration-200",
        "focus:border-blue focus:shadow-[0_0_0_3px_rgba(0,123,252,0.1)] focus:outline-none",
      ].join(" "),
    [],
  );

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.idea) {
      setError("Please fill in name, email and startup idea.");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      await emailjs.send(
        "service_s8lf9dl",
        "template_axbudfs",
        {
          from_name: formData.name,
          from_email: formData.email,
          startup_idea: formData.idea,
          package_interest: formData.package,
          message: formData.message,
          to_email: "hechtix@gmail.com",
        },
        "JA00utn3-ygwujAVr",
      );
      setIsSubmitted(true);
    } catch {
      setError(
        "Something went wrong. Please try again or email us directly at hechtix@gmail.com",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="w-full bg-[#0a0a0a] px-6 py-20 md:px-[80px] md:py-[120px]"
    >
      <div className="mx-auto grid w-full max-w-[1100px] grid-cols-1 gap-12 md:grid-cols-2 md:gap-[60px]">
        {/* LEFT */}
        <motion.div
          variants={leftVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col"
        >
          <div className="font-ui text-[12px] tracking-[3px] text-blue">
            GET IN TOUCH
          </div>

          <h2 className="mt-3 font-heading text-[32px] font-extrabold text-white md:text-[44px]">
            Let&apos;s Build Your Startup
          </h2>

          <p className="mt-4 font-body text-[16px] leading-[1.8] text-light-gray">
            Book a free consultation and get a free prototype. No commitment
            required.
          </p>

          <div className="mt-5 flex flex-col gap-3">
            <div className="flex items-center gap-3 font-body text-[15px] text-light-gray">
              <Mail className="h-[18px] w-[18px] text-blue" />
              <span>hechtix@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 font-body text-[15px] text-light-gray">
              <MessageCircle className="h-[18px] w-[18px] text-blue" />
              <span>Free consultation call included</span>
            </div>
            <div className="flex items-center gap-3 font-body text-[15px] text-light-gray">
              <Clock className="h-[18px] w-[18px] text-blue" />
              <span>Response within 24 hours</span>
            </div>
          </div>

          <div className="mt-8 rounded-card border border-[rgba(165,165,165,0.1)] bg-dark-gray p-6">
            <div className="font-heading text-[15px] font-bold text-white">
              What happens after you submit?
            </div>
            <div className="mt-4 flex flex-col gap-[10px] font-body text-[14px] text-light-gray">
              <div>📞 We call you within 24 hours</div>
              <div>🎯 We understand your idea</div>
              <div>🚀 We send a free proposal</div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          variants={rightVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="rounded-[16px] border border-[rgba(165,165,165,0.1)] bg-dark-gray p-6 md:p-10"
        >
          <div className="flex flex-col gap-4">
            {/* Row 1 */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input
                value={formData.name}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    name: e.target.value,
                  })
                }
                placeholder="Your name"
                className={fieldClasses}
              />
              <input
                value={formData.email}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    email: e.target.value,
                  })
                }
                placeholder="your@email.com"
                type="email"
                className={fieldClasses}
              />
            </div>

            {/* Row 2 */}
            <input
              value={formData.idea}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  idea: e.target.value,
                })
              }
              placeholder="What's your startup idea?"
              className={fieldClasses}
            />

            {/* Row 3 */}
            <select
              value={formData.package}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  package: e.target.value as PackageOption,
                })
              }
              className={fieldClasses}
            >
              <option value="" className="bg-black text-white">
                Select a package...
              </option>
              <option value="Starter — ₹5K–₹10K" className="bg-black text-white">
                Starter — ₹5K–₹10K
              </option>
              <option
                value="Design Package — ₹15K–₹25K"
                className="bg-black text-white"
              >
                Design Package — ₹15K–₹25K
              </option>
              <option value="MVP Build — ₹25K–₹35K" className="bg-black text-white">
                MVP Build — ₹25K–₹35K
              </option>
              <option
                value="MVP + Design — ₹35K–₹45K"
                className="bg-black text-white"
              >
                MVP + Design — ₹35K–₹45K
              </option>
              <option
                value="Ultra Premium — ₹45K–₹50K"
                className="bg-black text-white"
              >
                Ultra Premium — ₹45K–₹50K
              </option>
              <option value="Not sure yet" className="bg-black text-white">
                Not sure yet
              </option>
            </select>

            {/* Row 4 */}
            <textarea
              value={formData.message}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  message: e.target.value,
                })
              }
              placeholder="Tell us more about your project, timeline, or any questions..."
              className={fieldClasses}
              style={{ height: "120px", resize: "vertical" }}
            />

            {/* Submit */}
            <div className="mt-2">
              {isSubmitted ? (
                <div className="text-center font-body text-[15px] text-light-gray">
                  ✅ Submitted! We&apos;ll reach out within 24 hours.
                </div>
              ) : (
                <>
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className={[
                      "inline-flex w-full items-center justify-center rounded-btn bg-blue px-4 py-4",
                      "font-ui text-[15px] font-medium text-white transition duration-200",
                      "hover:scale-[1.01] hover:opacity-85",
                      isSubmitting ? "opacity-70" : "",
                    ].join(" ")}
                  >
                    {isSubmitting ? "Sending..." : "Book Free Consultation 🚀"}
                  </button>

                  {error ? (
                    <p
                      style={{
                        color: "#ff4444",
                        fontSize: "14px",
                        marginTop: "8px",
                        textAlign: "center",
                      }}
                    >
                      {error}
                    </p>
                  ) : null}
                </>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/*
  EMAILJS SETUP (one-time):
  1. Go to https://www.emailjs.com and sign up free
  2. Add a new Email Service → connect Gmail (hechtix@gmail.com)
  3. Create an Email Template with these variables:
     {{from_name}}, {{from_email}},
     {{startup_idea}}, {{package_interest}},
     {{message}}
  4. Go to Account → API Keys → copy Public Key
  5. Replace in this file:
     YOUR_SERVICE_ID → your service ID
     YOUR_TEMPLATE_ID → your template ID
     YOUR_PUBLIC_KEY → your public key
*/

