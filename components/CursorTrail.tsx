"use client";
import { useEffect, useRef, useState } from "react";

interface TrailDot {
  id: number;
  x: number;
  y: number;
  opacity: number;
  size: number;
}

export default function CursorTrail() {
  const [trail, setTrail] = useState<TrailDot[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(0);
  const lastPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (window.innerWidth < 768) return;

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      const dx = x - lastPos.current.x;
      const dy = y - lastPos.current.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 8) return;
      lastPos.current = { x, y };

      setIsVisible(true);
      counterRef.current += 1;
      const id = counterRef.current;

      setTrail((prev) => [
        ...prev.slice(-20),
        {
          id,
          x,
          y,
          opacity: 1,
          size: Math.random() * 4 + 3,
        },
      ]);

      setTimeout(() => {
        setTrail((prev) =>
          prev.map((dot) =>
            dot.id === id ? { ...dot, opacity: 0 } : dot
          )
        );
      }, 100);

      setTimeout(() => {
        setTrail((prev) => prev.filter((dot) => dot.id !== id));
      }, 600);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 99999,
      }}
    >
      {trail.map((dot, idx) => {
        const progress = idx / trail.length || 1;
        const colors = ["#007BFC", "#00C2FF", "#6400FF", "#00FF64"];
        const color = colors[idx % colors.length];

        return (
          <div
            key={dot.id}
            style={{
              position: "fixed",
              left: dot.x,
              top: dot.y,
              width: `${dot.size * progress + 2}px`,
              height: `${dot.size * progress + 2}px`,
              borderRadius: "50%",
              background: color,
              opacity: dot.opacity * progress,
              transform: "translate(-50%, -50%)",
              transition: "opacity 0.5s ease",
              boxShadow: `0 0 ${dot.size * 2}px ${color}`,
              pointerEvents: "none",
            }}
          />
        );
      })}
    </div>
  );
}
