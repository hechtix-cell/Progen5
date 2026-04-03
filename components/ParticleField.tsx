`use client`
import { useEffect, useState, useCallback } from "react";
import Particles from "@tsparticles/react";
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Container, Engine } from "tsparticles-engine";

export default function ParticleField() {
  const [init, setInit] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const particlesLoaded = useCallback(async (container?: Container) => {
    console.log("Particles loaded", container);
  }, []);

  if (!init || isMobile) return null;

  return (
    <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={{
        background: {
          color: { value: "transparent" },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "grab",
              parallax: {
                enable: true,
                force: 60,
                smooth: 10,
              },
            },
            resize: { enable: true },
          },
          modes: {
            push: { quantity: 4 },
            grab: {
              distance: 200,
              links: {
                opacity: 0.5,
                color: "#007BFC",
              },
            },
            repulse: {
              distance: 150,
              duration: 0.4,
            },
            bubble: {
              distance: 200,
              size: 6,
              duration: 2,
              opacity: 0.8,
            },
          },
        },
        particles: {
          color: {
            value: ["#007BFC", "#6400FF", "#00C2FF"],
          },
          links: {
            color: "#007BFC",
            distance: 150,
            enable: true,
            opacity: 0.12,
            width: 1,
            triangles: {
              enable: false,
            },
          },
          move: {
            direction: "none",
            enable: true,
            outModes: { default: "bounce" },
            random: true,
            speed: 0.6,
            straight: false,
            attract: {
              enable: true,
              rotateX: 600,
              rotateY: 1200,
            },
          },
          number: {
            density: {
              enable: true,
              area: 900,
            },
            value: 80,
          },
          opacity: {
            value: { min: 0.1, max: 0.4 },
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0.1,
            },
          },
          shape: { type: "circle" },
          size: {
            value: { min: 1, max: 3 },
            animation: {
              enable: true,
              speed: 2,
              minimumValue: 0.5,
            },
          },
        },
        detectRetina: true,
      }}
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        width: "100%",
        height: "100%",
      }}
    />
  );
}
