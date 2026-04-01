"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import type React from "react";
import { useEffect, useState } from "react";

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
  timeToComplete?: string;
  clientReview?: {
    text: string;
    name: string;
    role: string;
  };
  services?: string[];
};

const projects: Project[] = [
  {
    id: 1,
    name: "Progen5 Website",
    description:
      "Progen5 is a startup execution agency that helps founders turn ideas into real, launched products. From design and development to branding and deployment, we handle everything — so you can focus on growth.",
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
    timeToComplete: "7 Days",
    services: [
      "UI/UX Design",
      "Frontend Development",
      "Animations",
      "AI Chatbot Integration",
      "Deployment",
    ],
    clientReview: {
      text: "Progen5 built an amazing website that perfectly represents our brand. The animations and dark theme look absolutely stunning!",
      name: "Vivek Nairy",
      role: "Founder, Progen5",
    },
  },
  {
    id: 2,
    name: "LettrBlack Website",
    description:
      "We transformed a simple idea into a live, high-converting EdTech landing page in just 6 days — focused on clarity, user experience, and lead generation.",
    industry: "Basic Website",
    category: "Landing Page",
    images: ["/images/work/lettrblack-1.png", "/images/work/lettrblack-2.png", "/images/work/lettrblack-3.png"],
    tech: ["Next.js", "Framer Motion"],
    link: "#",
    featured: false,
    timeToComplete: "5 Days",
    services: [
      "Landing Page Design",
      "Frontend Development",
      "Mobile Responsive",
      "Lead Capture Setup",
    ],
    clientReview: {
      text: "The landing page they built for us was exactly what we needed. Clean, fast and converts really well!",
      name: "Vivek Nairy",
      role: "Founder, LettrBlack",
    },
  },
  {
    id: 3,
    name: "CropDoc Application",
    description:
      "An AI-powered agriculture solution that detects crop diseases in real-time through image scanning. Built to help farmers identify issues early, reduce crop loss, and take faster action using smart, data-driven insights.",
    industry: "Agriculture",
    category: "MVP",
    images: [
      "/images/work/cropdoc-1.png",
      "/images/work/cropdoc-2.png",
    ],
    tech: ["React", "Node.js", "MongoDB"],
    link: "#",
    featured: false,
    timeToComplete: "4 Weeks",
    services: [
      "Product Strategy",
      "UI/UX Design",
      "Frontend + Backend Development",
      "AI Integration",
      "QA & Launch",
    ],
    clientReview: {
      text: "They shipped our MVP fast without compromising quality. The team handled everything end-to-end.",
      name: "Sudeep S R",
      role: "Founder, CropDoc",
    },
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
    timeToComplete: "3 Weeks",
    services: [
      "Dashboard Design",
      "Data Visualization",
      "Frontend Development",
      "Auth & Permissions",
    ],
    clientReview: {
      text: "The dashboard looks premium and is super easy for our team to use daily.",
      name: "Riya Mehta",
      role: "Product Lead, TaskPilot",
    },
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
    timeToComplete: "10 Days",
    services: [
      "Brand Discovery",
      "Logo System",
      "Color & Typography",
      "Brand Guidelines",
    ],
    clientReview: {
      text: "Our new brand identity finally feels like us. Clean, modern, and memorable.",
      name: "Karan Batra",
      role: "Founder, Finora",
    },
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
    timeToComplete: "5 Weeks",
    services: [
      "MVP Planning",
      "Learning Experience Design",
      "Course Platform Development",
      "Payments Setup",
      "Deployment",
    ],
    clientReview: {
      text: "They understood the EdTech space well and delivered a stable platform our students love.",
      name: "Sneha Rao",
      role: "Founder, SkillNest",
    },
  },
];

const placeholderGradientByCategory: Record<ProjectCategory, string> = {
  Website: "linear-gradient(135deg, #007BFC, #0055b3)",
  MVP: "linear-gradient(135deg, #6400FF, #007BFC)",
  "Landing Page": "linear-gradient(135deg, #00C2FF, #007BFC)",
  Branding: "linear-gradient(135deg, #FF6B6B, #FF8E53)",
};

const getGradient = (category: ProjectCategory) => placeholderGradientByCategory[category];

export default function Work() {
  const [currentImage, setCurrentImage] = useState<{ [key: number]: number }>({});
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentModalImage, setCurrentModalImage] = useState(0);

  const getImageIndex = (projectId: number) => currentImage[projectId] || 0;

  const nextImage = (e: React.MouseEvent, projectId: number, totalImages: number) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImage((prev) => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) + 1) % totalImages,
    }));
  };

  const prevImage = (e: React.MouseEvent, projectId: number, totalImages: number) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImage((prev) => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) - 1 + totalImages) % totalImages,
    }));
  };

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setCurrentModalImage(0);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentModalImage(0);
    document.body.style.overflow = "auto";
  };

  const handleMixedImageFit = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget;
    const isPortrait = img.naturalHeight > img.naturalWidth;
    if (isPortrait) {
      img.style.objectFit = "contain";
      img.style.objectPosition = "center";
      img.style.background = "#1a1a2e";
      return;
    }
    img.style.objectFit = "cover";
    img.style.objectPosition = "center";
    img.style.background = "transparent";
  };

  useEffect(() => {
    if (!selectedProject) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
        setCurrentModalImage(0);
        document.body.style.overflow = "auto";
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProject]);

  useEffect(
    () => () => {
      document.body.style.overflow = "auto";
    },
    []
  );

  const featuredProject = projects.find((project) => project.featured) ?? projects[0];

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

      <section className="px-6 pb-[40px] pt-[40px] md:px-[80px] md:pt-[60px]">
        <div className="mx-auto max-w-[1200px]">
          {
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-7 overflow-hidden rounded-2xl border md:h-[400px]"
              style={{
                background: "#232227",
                borderColor: "rgba(0,123,252,0.2)",
                cursor: "pointer",
              }}
              onClick={() => openModal(featuredProject)}
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
                  onClick={(e) => e.stopPropagation()}
                >
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "100%",
                      background: "#1a1a2e",
                      overflow: "hidden",
                    }}
                  >
                    {/* Fallback initials */}
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 0,
                      }}
                    >
                      <span
                        style={{
                          fontSize: "72px",
                          fontWeight: 800,
                          color: "rgba(255,255,255,0.3)",
                          fontFamily: "Satoshi, sans-serif",
                        }}
                      >
                        {featuredProject.name
                          .split(" ")
                          .map((w: string) => w[0])
                          .join("")
                          .slice(0, 2)}
                      </span>
                    </div>

                    {/* Actual screenshot on top */}
                    {featuredProject.images && featuredProject.images[0] && (
                      <img
                        src={featuredProject.images[0]}
                        alt={featuredProject.name}
                        style={{
                          position: "absolute",
                          inset: 0,
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          objectPosition: "center",
                          background: "#1a1a2e",
                          zIndex: 1,
                        }}
                        onLoad={handleMixedImageFit}
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                    )}
                  </div>
                </a>
              </div>
            </motion.article>
          }

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
            {projects
              .filter((project) => !project.featured)
              .map((project) => (
              <motion.div
                key={project.id}
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
                onClick={() => openModal(project)}
              >
                <div
                  style={{
                    position: "relative",
                    height: "220px",
                    overflow: "hidden",
                    borderRadius: "16px 16px 0 0",
                    background: "#1a1a2e",
                  }}
                >
                  {/* Fallback initials shown under image */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      zIndex: 0,
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

                  {/* Image on top of fallback */}
                  <img
                    src={project.images[getImageIndex(project.id)]}
                    alt={project.name}
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center",
                      background: "#1a1a2e",
                      transition: "transform 300ms ease",
                      display: "block",
                      zIndex: 1,
                    }}
                    onLoad={handleMixedImageFit}
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />

                  {/* Navigation arrows - only show if more than 1 image */}
                  {project.images.length > 1 && (
                    <>
                      {/* Left arrow */}
                      <button
                        type="button"
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
                        type="button"
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
                    <a
                      href={project.link}
                      target={project.link.startsWith("http") ? "_blank" : undefined}
                      rel={project.link.startsWith("http") ? "noopener noreferrer" : undefined}
                      aria-label={`Open ${project.name}`}
                      className="inline-flex items-center justify-center"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink
                        size={16}
                        color="#A5A5A5"
                        className="transition-colors duration-200 group-hover:text-[#007BFC]"
                      />
                    </a>
                  </div>
                </div>
              </motion.div>
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

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.95)",
              zIndex: 1000,
              overflowY: "auto",
              backdropFilter: "blur(8px)",
            }}
            onClick={closeModal}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative mx-auto max-w-[900px] px-4 pb-[60px] pt-5 md:px-6 md:pb-[80px] md:pt-10"
            >
              <button
                onClick={closeModal}
                style={{
                  position: "fixed",
                  top: "24px",
                  right: "24px",
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  borderRadius: "50%",
                  width: "44px",
                  height: "44px",
                  color: "#FFFFFF",
                  fontSize: "20px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 1001,
                  backdropFilter: "blur(8px)",
                }}
              >
                ✕
              </button>

              <div
                className="relative mb-4 h-[300px] w-full overflow-hidden rounded-2xl md:h-[500px]"
                style={{ background: "#1a1a2e" }}
              >
                {selectedProject.images[currentModalImage] && (
                  <img
                    src={selectedProject.images[currentModalImage]}
                    alt={selectedProject.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center",
                      background: "#1a1a2e",
                    }}
                    onLoad={handleMixedImageFit}
                  />
                )}

                <div
                  style={{
                    position: "absolute",
                    bottom: "16px",
                    right: "16px",
                    background: "rgba(0,0,0,0.7)",
                    color: "#FFFFFF",
                    padding: "4px 12px",
                    borderRadius: "999px",
                    fontSize: "13px",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  {currentModalImage + 1} / {selectedProject.images.length}
                </div>

                {selectedProject.images.length > 1 && (
                  <>
                    <button
                      onClick={() =>
                        setCurrentModalImage(
                          (prev) =>
                            (prev - 1 + selectedProject.images.length) %
                            selectedProject.images.length
                        )
                      }
                      type="button"
                      style={{
                        position: "absolute",
                        left: "16px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        background: "rgba(0,0,0,0.6)",
                        border: "none",
                        borderRadius: "50%",
                        width: "44px",
                        height: "44px",
                        color: "#FFFFFF",
                        fontSize: "22px",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backdropFilter: "blur(4px)",
                      }}
                    >
                      ‹
                    </button>

                    <button
                      onClick={() =>
                        setCurrentModalImage(
                          (prev) => (prev + 1) % selectedProject.images.length
                        )
                      }
                      type="button"
                      style={{
                        position: "absolute",
                        right: "16px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        background: "rgba(0,0,0,0.6)",
                        border: "none",
                        borderRadius: "50%",
                        width: "44px",
                        height: "44px",
                        color: "#FFFFFF",
                        fontSize: "22px",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backdropFilter: "blur(4px)",
                      }}
                    >
                      ›
                    </button>
                  </>
                )}
              </div>

              {selectedProject.images.length > 1 && (
                <div style={{ display: "flex", gap: "8px", marginBottom: "32px", overflowX: "auto" }}>
                  {selectedProject.images.map((img, idx) => (
                    <div
                      key={idx}
                      onClick={() => setCurrentModalImage(idx)}
                      style={{
                        width: "80px",
                        height: "56px",
                        borderRadius: "8px",
                        overflow: "hidden",
                        cursor: "pointer",
                        border: idx === currentModalImage ? "2px solid #007BFC" : "2px solid transparent",
                        flexShrink: 0,
                        background: getGradient(selectedProject.category),
                        transition: "border 200ms",
                      }}
                    >
                      <img
                        src={img}
                        alt=""
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          objectPosition: "center",
                          background: "#1a1a2e",
                        }}
                        onLoad={handleMixedImageFit}
                      />
                    </div>
                  ))}
                </div>
              )}

              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div>
                  <div style={{ display: "flex", gap: "8px", marginBottom: "12px" }}>
                    <span
                      style={{
                        background: "rgba(0,123,252,0.1)",
                        border: "1px solid rgba(0,123,252,0.3)",
                        color: "#007BFC",
                        padding: "4px 12px",
                        borderRadius: "999px",
                        fontSize: "12px",
                        fontFamily: "General Sans, sans-serif",
                      }}
                    >
                      {selectedProject.category}
                    </span>
                    <span
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        color: "#A5A5A5",
                        padding: "4px 12px",
                        borderRadius: "999px",
                        fontSize: "12px",
                        fontFamily: "General Sans, sans-serif",
                      }}
                    >
                      {selectedProject.industry}
                    </span>
                  </div>

                  <h2
                    style={{
                      fontFamily: "Satoshi, sans-serif",
                      fontSize: "32px",
                      fontWeight: 800,
                      color: "#FFFFFF",
                      marginBottom: "12px",
                    }}
                  >
                    {selectedProject.name}
                  </h2>

                  <p
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "15px",
                      color: "#A5A5A5",
                      lineHeight: 1.8,
                      marginBottom: "24px",
                    }}
                  >
                    {selectedProject.description}
                  </p>

                  {selectedProject.timeToComplete && (
                    <div
                      style={{
                        background: "#232227",
                        border: "1px solid rgba(165,165,165,0.1)",
                        borderRadius: "12px",
                        padding: "16px 20px",
                        marginBottom: "16px",
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                      }}
                    >
                      <span style={{ fontSize: "20px" }}>⚡</span>
                      <div>
                        <div
                          style={{
                            color: "#A5A5A5",
                            fontSize: "12px",
                            fontFamily: "General Sans",
                            marginBottom: "2px",
                          }}
                        >
                          TIME TO COMPLETE
                        </div>
                        <div
                          style={{
                            color: "#FFFFFF",
                            fontSize: "18px",
                            fontFamily: "Exo 2, sans-serif",
                            fontWeight: 700,
                          }}
                        >
                          {selectedProject.timeToComplete}
                        </div>
                      </div>
                    </div>
                  )}

                  {selectedProject.services && (
                    <div style={{ marginBottom: "24px" }}>
                      <div
                        style={{
                          color: "#A5A5A5",
                          fontSize: "12px",
                          fontFamily: "General Sans",
                          letterSpacing: "2px",
                          marginBottom: "12px",
                        }}
                      >
                        SERVICES PROVIDED
                      </div>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                        {selectedProject.services.map((service, idx) => (
                          <span
                            key={idx}
                            style={{
                              background: "#232227",
                              border: "1px solid rgba(165,165,165,0.15)",
                              color: "#FFFFFF",
                              padding: "6px 14px",
                              borderRadius: "8px",
                              fontSize: "13px",
                              fontFamily: "Inter, sans-serif",
                            }}
                          >
                            ✓ {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div>
                  <div style={{ marginBottom: "24px" }}>
                    <div
                      style={{
                        color: "#A5A5A5",
                        fontSize: "12px",
                        fontFamily: "General Sans",
                        letterSpacing: "2px",
                        marginBottom: "12px",
                      }}
                    >
                      TECH STACK
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                      {selectedProject.tech.map((t, idx) => (
                        <span
                          key={idx}
                          style={{
                            background: "rgba(0,123,252,0.1)",
                            border: "1px solid rgba(0,123,252,0.2)",
                            color: "#007BFC",
                            padding: "6px 14px",
                            borderRadius: "8px",
                            fontSize: "13px",
                            fontFamily: "General Sans, sans-serif",
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {selectedProject.clientReview && (
                    <div
                      style={{
                        background: "#232227",
                        border: "1px solid rgba(0,123,252,0.2)",
                        borderRadius: "16px",
                        padding: "24px",
                        marginBottom: "24px",
                      }}
                    >
                      <div style={{ color: "#FFB800", fontSize: "16px", marginBottom: "12px" }}>★★★★★</div>
                      <p
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontSize: "15px",
                          color: "#A5A5A5",
                          lineHeight: 1.8,
                          fontStyle: "italic",
                          marginBottom: "16px",
                        }}
                      >
                        &quot;{selectedProject.clientReview.text}&quot;
                      </p>
                      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                        <div
                          style={{
                            width: "40px",
                            height: "40px",
                            borderRadius: "50%",
                            background: "#007BFC",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#FFFFFF",
                            fontWeight: 700,
                            fontSize: "14px",
                          }}
                        >
                          {selectedProject.clientReview.name[0]}
                        </div>
                        <div>
                          <div
                            style={{
                              color: "#FFFFFF",
                              fontSize: "14px",
                              fontWeight: 600,
                              fontFamily: "Satoshi, sans-serif",
                            }}
                          >
                            {selectedProject.clientReview.name}
                          </div>
                          <div
                            style={{
                              color: "#A5A5A5",
                              fontSize: "13px",
                              fontFamily: "Inter, sans-serif",
                            }}
                          >
                            {selectedProject.clientReview.role}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {selectedProject.link !== "#" && (
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        background: "#007BFC",
                        color: "#FFFFFF",
                        padding: "14px 24px",
                        borderRadius: "8px",
                        fontFamily: "General Sans, sans-serif",
                        fontSize: "15px",
                        fontWeight: 500,
                        textDecoration: "none",
                        width: "100%",
                        transition: "opacity 200ms",
                      }}
                    >
                      View Live Website →
                    </a>
                  )}
                </div>
              </div>

              <div
                style={{
                  marginTop: "48px",
                  padding: "32px",
                  background: "#232227",
                  borderRadius: "16px",
                  border: "1px solid rgba(0,123,252,0.2)",
                  textAlign: "center",
                }}
              >
                <h3
                  style={{
                    fontFamily: "Satoshi, sans-serif",
                    fontSize: "24px",
                    fontWeight: 800,
                    color: "#FFFFFF",
                    marginBottom: "8px",
                  }}
                >
                  Want something like this? 🚀
                </h3>
                <p
                  style={{
                    color: "#A5A5A5",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "15px",
                    marginBottom: "20px",
                  }}
                >
                  Book a free consultation and let&apos;s build your project!
                </p>
                <a
                  href="/#contact"
                  onClick={closeModal}
                  style={{
                    background: "#007BFC",
                    color: "#FFFFFF",
                    padding: "12px 32px",
                    borderRadius: "8px",
                    fontFamily: "General Sans, sans-serif",
                    fontSize: "15px",
                    textDecoration: "none",
                    display: "inline-block",
                  }}
                >
                  Book a Free Call →
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
