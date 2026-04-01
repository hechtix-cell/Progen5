"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import type React from "react";
import { useMemo, useState } from "react";

type ProjectCategory = "Website" | "MVP" | "Landing Page" | "Branding";

type Project = {
  id: number;
  name: string;
  description: string;
  industry: string;
  category: ProjectCategory;
  images: string[];
  tech: string[];
  link: string;
  featured: boolean;
};

const projects: Project[] = [
  {
    id: 1,
    name: "Progen5 Website",
    description:
      "Our own agency website built with Next.js, featuring dark theme, animations and AI chatbot.",
    industry: "Agency",
    category: "Website",
    images: [
      "/images/work/progen5-1.png",
      "/images/work/progen5-2.png",
      "/images/work/progen5-3.png",
    ],
    tech: ["Next.js", "Tailwind", "n8n"],
    link: "https://progen5.vercel.app",
    featured: true,
  },
  {
    id: 2,
    name: "LettrBlack Website",
    description:
      "High-converting landing page for an early-stage startup with lead capture and animations.",
    industry: "Basic Website",
    category: "Landing Page",
    images: ["/images/work/lettrblack-1.png", "/images/work/lettrblack-2.png", "/images/work/lettrblack-3.png"],
    tech: ["Next.js", "Framer Motion"],
    link: "#",
    featured: false,
  },
  {
    id: 3,
    name: "E-Commerce MVP",
    description:
      "Full MVP for an e-commerce startup with product listings and payment integration.",
    industry: "E-Commerce",
    category: "MVP",
    images: [
      "/images/work/project3-1.png",
      "/images/work/project3-2.png",
      "/images/work/project3-3.png",
    ],
    tech: ["React", "Node.js", "MongoDB"],
    link: "#",
    featured: false,
  },
  {
    id: 4,
    name: "SaaS Dashboard",
    description:
      "Clean and modern SaaS dashboard with analytics, user management and billing features.",
    industry: "SaaS",
    category: "MVP",
    images: ["/images/work/project4-1.png", "/images/work/project4-2.png"],
    tech: ["Next.js", "Firebase"],
    link: "#",
    featured: false,
  },
  {
    id: 5,
    name: "Brand Identity",
    description:
      "Complete brand identity for a fintech startup including logo, colors and typography.",
    industry: "Fintech",
    category: "Branding",
    images: ["/images/work/project5-1.png", "/images/work/project5-2.png"],
    tech: ["Figma", "Illustrator"],
    link: "#",
    featured: false,
  },
  {
    id: 6,
    name: "EdTech Platform",
    description:
      "Online learning platform MVP with course management, video hosting and student portal.",
    industry: "EdTech",
    category: "MVP",
    images: [
      "/images/work/project6-1.png",
      "/images/work/project6-2.png",
      "/images/work/project6-3.png",
    ],
    tech: ["React", "Firebase", "Stripe"],
    link: "#",
    featured: false,
  },
];

const FILTERS = ["All", "Website", "MVP", "Landing Page", "Branding"] as const;
type FilterKey = (typeof FILTERS)[number];

const placeholderGradientByCategory: Record<ProjectCategory, string> = {
  Website: "linear-gradient(135deg, #007BFC, #0055b3)",
  MVP: "linear-gradient(135deg, #6400FF, #007BFC)",
  "Landing Page": "linear-gradient(135deg, #00C2FF, #007BFC)",
  Branding: "linear-gradient(135deg, #FF6B6B, #FF8E53)",
};

const getGradient = (category: ProjectCategory) => placeholderGradientByCategory[category];

function initialsFromName(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase())
    .join("");
}

export default function Work() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("All");
  const [currentImage, setCurrentImage] = useState<{ [key: number]: number }>({});

  const getImageIndex = (projectId: number) => currentImage[projectId] || 0;

  const nextImage = (e: React.MouseEvent, projectId: number, totalImages: number) => {
    e.stopPropagation();
    setCurrentImage((prev) => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) + 1) % totalImages,
    }));
  };

  const prevImage = (e: React.MouseEvent, projectId: number, totalImages: number) => {
    e.stopPropagation();
    setCurrentImage((prev) => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) - 1 + totalImages) % totalImages,
    }));
  };

  const featuredProject = projects.find((project) => project.featured) ?? projects[0];

  const filteredProjects = useMemo(() => {
    const nonFeaturedProjects = projects.filter((project) => !project.featured);
    if (activeFilter === "All") return nonFeaturedProjects;
    return nonFeaturedProjects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <main className="bg-black pt-[70px]">
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="px-6 pb-[60px] pt-[120px] text-center md:px-[80px]"
      >
        <div className="mx-auto max-w-[1200px]">
          <p
            className="font-ui text-[12px] tracking-[3px]"
            style={{ color: "#007BFC", fontFamily: "General Sans, sans-serif" }}
          >
            OUR WORK
          </p>
          <h1
            className="mt-3 text-[36px] font-extrabold leading-[1.15] text-white md:text-[56px]"
            style={{ fontFamily: "Satoshi, sans-serif" }}
          >
            Products We&apos;ve Built
          </h1>
          <p
            className="mx-auto mt-4 max-w-[680px] text-[18px] leading-[1.7]"
            style={{ color: "#A5A5A5", fontFamily: "Inter, sans-serif" }}
          >
            Real websites and MVPs built for founders and startups worldwide.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              { value: "10+", label: "Projects Completed" },
              { value: "7+", label: "Industries Served" },
              { value: "100%", label: "Client Satisfaction" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-1">
                <span
                  className="text-[36px] font-extrabold text-white"
                  style={{ fontFamily: "Exo 2, sans-serif" }}
                >
                  {stat.value}
                </span>
                <span
                  className="text-[14px]"
                  style={{ color: "#A5A5A5", fontFamily: "Inter, sans-serif" }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="px-6 md:px-[80px]"
      >
        <div className="mx-auto flex max-w-[1200px] flex-wrap justify-center gap-3">
          {FILTERS.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className="rounded-full px-5 py-2 text-[14px] transition-all duration-200"
                style={{
                  fontFamily: "General Sans, sans-serif",
                  background: isActive ? "#007BFC" : "transparent",
                  color: isActive ? "#FFFFFF" : "#A5A5A5",
                  border: isActive
                    ? "1px solid transparent"
                    : "1px solid rgba(165,165,165,0.2)",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) e.currentTarget.style.borderColor = "#007BFC";
                }}
                onMouseLeave={(e) => {
                  if (!isActive) e.currentTarget.style.borderColor = "rgba(165,165,165,0.2)";
                }}
              >
                {filter}
              </button>
            );
          })}
        </div>
      </motion.section>

      <section className="px-6 pb-[40px] pt-[40px] md:px-[80px] md:pt-[60px]">
        <div className="mx-auto max-w-[1200px]">
          {(activeFilter === "All" || activeFilter === featuredProject.category) && (
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-7 overflow-hidden rounded-2xl border md:h-[400px]"
              style={{
                background: "#232227",
                borderColor: "rgba(0,123,252,0.2)",
              }}
            >
              <div className="flex h-full flex-col md:flex-row">
                <div className="flex w-full flex-col justify-center p-8 md:w-[40%] md:p-10">
                  <span
                    className="mb-4 inline-flex w-fit rounded-full border px-3 py-1 text-[12px]"
                    style={{
                      background: "rgba(0,123,252,0.1)",
                      color: "#007BFC",
                      borderColor: "rgba(0,123,252,0.3)",
                      fontFamily: "General Sans, sans-serif",
                    }}
                  >
                    Featured Project ⭐
                  </span>
                  <p
                    className="mb-2 text-[12px] tracking-[1px]"
                    style={{ color: "#007BFC", fontFamily: "General Sans, sans-serif" }}
                  >
                    {featuredProject.industry.toUpperCase()}
                  </p>
                  <h2
                    className="mb-3 text-[32px] font-extrabold text-white"
                    style={{ fontFamily: "Satoshi, sans-serif" }}
                  >
                    {featuredProject.name}
                  </h2>
                  <p
                    className="mb-5 text-[15px] leading-[1.7]"
                    style={{ color: "#A5A5A5", fontFamily: "Inter, sans-serif" }}
                  >
                    {featuredProject.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {featuredProject.tech.map((stack) => (
                      <span
                        key={stack}
                        className="rounded-full border px-3 py-1 text-[11px]"
                        style={{
                          background: "rgba(0,123,252,0.1)",
                          borderColor: "rgba(0,123,252,0.2)",
                          color: "#007BFC",
                        }}
                      >
                        {stack}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href={featuredProject.link}
                  target={featuredProject.link.startsWith("http") ? "_blank" : undefined}
                  rel={
                    featuredProject.link.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group relative block h-[260px] w-full md:h-full md:w-[60%]"
                >
                  <div
                    className="flex h-full w-full items-center justify-center transition-transform duration-300 group-hover:scale-[1.05]"
                    style={{
                      background: placeholderGradientByCategory[featuredProject.category],
                    }}
                  >
                    <span
                      className="text-[68px] font-extrabold text-white/95"
                      style={{ fontFamily: "Satoshi, sans-serif" }}
                    >
                      {initialsFromName(featuredProject.name)}
                    </span>
                  </div>
                </a>
              </div>
            </motion.article>
          )}

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            className="grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3"
          >
            {filteredProjects.map((project) => (
              <motion.a
                key={project.id}
                href={project.link}
                target={project.link.startsWith("http") ? "_blank" : undefined}
                rel={project.link.startsWith("http") ? "noopener noreferrer" : undefined}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0 },
                }}
                className="group overflow-hidden rounded-2xl border"
                style={{
                  background: "#232227",
                  borderColor: "rgba(165,165,165,0.1)",
                  cursor: "pointer",
                  transition: "all 300ms ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.borderColor = "rgba(0,123,252,0.4)";
                  e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0px)";
                  e.currentTarget.style.borderColor = "rgba(165,165,165,0.1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  style={{
                    position: "relative",
                    height: "220px",
                    overflow: "hidden",
                    borderRadius: "16px 16px 0 0",
                  }}
                >
                  {/* Current Image or Placeholder */}
                  {project.images[getImageIndex(project.id)] ? (
                    <img
                      src={project.images[getImageIndex(project.id)]}
                      alt={project.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 300ms ease",
                      }}
                    />
                  ) : (
                    // Gradient placeholder
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        background: getGradient(project.category),
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "48px",
                          fontWeight: 800,
                          color: "rgba(255,255,255,0.8)",
                          fontFamily: "Satoshi, sans-serif",
                        }}
                      >
                        {project.name
                          .split(" ")
                          .map((w: string) => w[0])
                          .join("")
                          .slice(0, 2)}
                      </span>
                    </div>
                  )}

                  {/* Navigation arrows - only show if more than 1 image */}
                  {project.images.length > 1 && (
                    <>
                      {/* Left arrow */}
                      <button
                        onClick={(e) => prevImage(e, project.id, project.images.length)}
                        style={{
                          position: "absolute",
                          left: "8px",
                          top: "50%",
                          transform: "translateY(-50%)",
                          background: "rgba(0,0,0,0.6)",
                          border: "none",
                          borderRadius: "50%",
                          width: "32px",
                          height: "32px",
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#FFFFFF",
                          fontSize: "16px",
                          zIndex: 2,
                          backdropFilter: "blur(4px)",
                        }}
                      >
                        ‹
                      </button>

                      {/* Right arrow */}
                      <button
                        onClick={(e) => nextImage(e, project.id, project.images.length)}
                        style={{
                          position: "absolute",
                          right: "8px",
                          top: "50%",
                          transform: "translateY(-50%)",
                          background: "rgba(0,0,0,0.6)",
                          border: "none",
                          borderRadius: "50%",
                          width: "32px",
                          height: "32px",
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#FFFFFF",
                          fontSize: "16px",
                          zIndex: 2,
                          backdropFilter: "blur(4px)",
                        }}
                      >
                        ›
                      </button>

                      {/* Dot indicators */}
                      <div
                        style={{
                          position: "absolute",
                          bottom: "8px",
                          left: "50%",
                          transform: "translateX(-50%)",
                          display: "flex",
                          gap: "6px",
                          zIndex: 2,
                        }}
                      >
                        {project.images.map((_: string, idx: number) => (
                          <div
                            key={idx}
                            style={{
                              width: idx === getImageIndex(project.id) ? "20px" : "6px",
                              height: "6px",
                              borderRadius: "999px",
                              background:
                                idx === getImageIndex(project.id)
                                  ? "#007BFC"
                                  : "rgba(255,255,255,0.5)",
                              transition: "all 300ms ease",
                            }}
                          />
                        ))}
                      </div>
                    </>
                  )}

                  {/* Category badge */}
                  <div
                    style={{
                      position: "absolute",
                      top: "12px",
                      left: "12px",
                      background: "rgba(0,0,0,0.7)",
                      backdropFilter: "blur(8px)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "#FFFFFF",
                      fontSize: "11px",
                      padding: "4px 12px",
                      borderRadius: "999px",
                      fontFamily: "General Sans, sans-serif",
                      zIndex: 2,
                    }}
                  >
                    {project.category}
                  </div>

                  {/* Image counter */}
                  {project.images.length > 1 && (
                    <div
                      style={{
                        position: "absolute",
                        top: "12px",
                        right: "12px",
                        background: "rgba(0,0,0,0.7)",
                        backdropFilter: "blur(8px)",
                        color: "#FFFFFF",
                        fontSize: "11px",
                        padding: "4px 10px",
                        borderRadius: "999px",
                        fontFamily: "General Sans, sans-serif",
                        zIndex: 2,
                      }}
                    >
                      {getImageIndex(project.id) + 1}/{project.images.length}
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <p
                    className="mb-2 text-[12px] tracking-[1px]"
                    style={{ color: "#007BFC", fontFamily: "General Sans, sans-serif" }}
                  >
                    {project.industry.toUpperCase()}
                  </p>
                  <h3
                    className="mb-2 text-[20px] font-bold text-white"
                    style={{ fontFamily: "Satoshi, sans-serif" }}
                  >
                    {project.name}
                  </h3>
                  <p
                    className="mb-4 line-clamp-2 text-[14px] leading-[1.6]"
                    style={{ color: "#A5A5A5", fontFamily: "Inter, sans-serif" }}
                  >
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, 3).map((stack) => (
                        <span
                          key={stack}
                          className="rounded-full border px-[10px] py-[3px] text-[11px]"
                          style={{
                            background: "rgba(0,123,252,0.1)",
                            borderColor: "rgba(0,123,252,0.2)",
                            color: "#007BFC",
                          }}
                        >
                          {stack}
                        </span>
                      ))}
                    </div>
                    <ExternalLink
                      size={16}
                      color="#A5A5A5"
                      className="transition-colors duration-200 group-hover:text-[#007BFC]"
                    />
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="px-6 pb-[80px] pt-[30px] text-center md:px-[80px]">
        <div className="mx-auto max-w-[760px]">
          <h2
            className="text-[30px] font-extrabold text-white md:text-[36px]"
            style={{ fontFamily: "Satoshi, sans-serif" }}
          >
            Want to See More?
          </h2>
          <p
            className="mx-auto mt-3 max-w-[620px] text-[16px] leading-[1.7]"
            style={{ color: "#A5A5A5", fontFamily: "Inter, sans-serif" }}
          >
            Every project is unique. Book a free call and we&apos;ll show you work
            similar to your idea.
          </p>
          <a
            href="/#contact"
            className="mt-7 inline-flex rounded-[8px] px-8 py-[14px] text-white transition-opacity duration-200 hover:opacity-85"
            style={{
              background: "#007BFC",
              fontFamily: "General Sans, sans-serif",
            }}
          >
            Book a Free Call →
          </a>
        </div>
      </section>
    </main>
  );
}
