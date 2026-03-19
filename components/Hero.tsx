"use client";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen w-full items-center overflow-hidden bg-transparent"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      <div
        className="absolute inset-0"
        style={{ background: "rgba(0,0,0,0.55)", zIndex: 1 }}
      />

      <div className="relative z-[2] mx-auto w-full max-w-[1200px] px-6 text-left md:px-[80px]">
        <div
          className="font-body text-[18px] text-white"
          style={{ opacity: 0.8, marginBottom: "8px" }}
        >
          Welcome to
        </div>

        <h1
          className="font-heading text-[48px] font-extrabold leading-[1.1] text-white md:text-[80px]"
          style={{ fontWeight: 800, textShadow: "0 2px 20px rgba(0,0,0,0.3)" }}
        >
          <span>
            Turn your <span className="text-blue">Vision</span>
          </span>
          <br />
          <span>into Reality</span>
        </h1>

        <p
          className="mt-4 max-w-[500px] font-body text-[18px]"
          style={{ color: "rgba(255,255,255,0.75)" }}
        >
          We handle design, development, branding and launch.
        </p>

        <a
          href="#contact"
          className="mt-8 inline-flex items-center justify-center rounded-full border-2 border-white bg-transparent px-8 py-[14px] font-ui text-[16px] text-white transition duration-200 hover:bg-[rgba(255,255,255,0.15)]"
        >
          Start Building →
        </a>
      </div>
    </section>
  );
}

