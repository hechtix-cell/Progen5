"use client";

export default function SkeletonLoader() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--bg-primary)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "24px",
        padding: "0 24px",
      }}
    >
      <div className="skeleton" style={{ width: 180, height: 32, borderRadius: 999 }} />

      <div className="skeleton" style={{ width: "60%", height: 72 }} />
      <div className="skeleton" style={{ width: "45%", height: 72 }} />

      <div className="skeleton" style={{ width: "40%", height: 24 }} />

      <div style={{ display: "flex", gap: 16 }}>
        <div className="skeleton" style={{ width: 160, height: 50, borderRadius: 8 }} />
        <div className="skeleton" style={{ width: 140, height: 50, borderRadius: 8 }} />
      </div>

      <div style={{ display: "flex", gap: 40, marginTop: 16 }}>
        <div className="skeleton" style={{ width: 100, height: 60 }} />
        <div className="skeleton" style={{ width: 100, height: 60 }} />
        <div className="skeleton" style={{ width: 100, height: 60 }} />
      </div>
    </div>
  );
}

