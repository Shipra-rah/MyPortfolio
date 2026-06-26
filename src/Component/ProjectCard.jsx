import { useRef, useState } from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";

/**
 * ProjectCard
 * Props: image, title, description, skill[], gitlink, livelink, category
 * Optional: index (0-based), total (total project count) → shows "01 / 04" counter
 */
export default function ProjectCard({
  image,
  title,
  description,
  skill = [],
  gitlink,
  livelink,
  category,
  index,
  total,
}) {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const filename = title
    ? title.toLowerCase().replace(/\s+/g, "-") + ".jsx"
    : "project.jsx";

  const counter =
    typeof index === "number" && typeof total === "number"
      ? `${String(index + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`
      : null;

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="
        relative w-full bg-white/[0.02] backdrop-blur-xl rounded-2xl overflow-hidden
        border border-white/10 shadow-[0_16px_48px_rgba(0,0,0,0.4)]
        transition-all duration-300 hover:border-white/15
      "
    >
      {/* ── Interactive Spotlight (Pink & White Smoke Glow) ───────────────── */}
      {isHovered && (
        <div
          className="pointer-events-none absolute -inset-px rounded-2xl transition duration-300 z-0"
          style={{
            background: `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, rgba(244, 63, 94, 0.15), rgba(255, 255, 255, 0.05) 50%, transparent 100%)`,
          }}
        />
      )}

      {/* ── Mac window bar ─────────────────────────────────────────────── */}
      <div className="relative z-10 flex items-center gap-3 px-4 py-3 bg-white/[0.03] border-b border-white/[0.06] backdrop-blur-md">
        {/* Traffic lights */}
        <div className="flex gap-[6px]">
          <span className="w-[11px] h-[11px] rounded-full bg-[#ff5f57]" />
          <span className="w-[11px] h-[11px] rounded-full bg-[#febc2e]" />
          <span className="w-[11px] h-[11px] rounded-full bg-[#28c840]" />
        </div>

        {/* Filename — centered */}
        <span className="flex-1 text-center text-[11px] font-mono text-white/20 tracking-wide select-none">
          {filename}
        </span>

        {/* Card counter */}
        {counter && (
          <span className="text-[11px] font-mono text-white/20 select-none">
            {counter}
          </span>
        )}
      </div>

      {/* ── Card body ──────────────────────────────────────────────────── */}
      <div className="relative z-10 flex flex-col md:flex-row">

        {/* ── Image panel ──────────────────────────────────────────────── */}
        <div className="relative md:w-72 xl:w-80 flex-shrink-0 overflow-hidden bg-black/40">
          {image ? (
            <img
              src={image}
              alt={title}
              className="w-full h-52 md:h-full object-cover"
            />
          ) : (
            /* Fallback placeholder */
            <div className="w-full h-52 md:h-full flex items-center justify-center">
              <span className="text-white/10 text-4xl font-bold tracking-widest select-none">
                {title?.[0] ?? "P"}
              </span>
            </div>
          )}

          {/* Gradient: fades right edge into card background on desktop */}
          <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-transparent via-transparent to-black/60 pointer-events-none" />
          {/* Gradient: fades bottom edge on mobile */}
          <div className="absolute inset-0 md:hidden bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

          {/* Category badge */}
          {category && (
            <span
              className="
                absolute top-3 left-3
                text-[10px] font-medium font-mono tracking-wider
                text-white/50 bg-black/60 backdrop-blur-sm
                px-2.5 py-1 rounded-md border border-white/10
                select-none
              "
            >
              {category}
            </span>
          )}
        </div>

        {/* ── Info panel ───────────────────────────────────────────────── */}
        <div className="flex flex-col justify-between gap-5 p-6 md:p-7 flex-1 min-w-0">

          {/* Title + description */}
          <div className="space-y-3">
            <h2 className="text-2xl md:text-[28px] font-bold text-white tracking-tight leading-tight">
              {title}
            </h2>
            <p className="text-[13px] text-white/40 leading-relaxed">
              {description}
            </p>
          </div>

          {/* Skill tags */}
          {skill.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {skill.map((s, i) => (
                <span
                  key={i}
                  className="
                    text-[10px] font-mono text-white/45
                    bg-white/[0.04] border border-white/[0.09]
                    px-3 py-1 rounded-full tracking-wide
                  "
                >
                  {s}
                </span>
              ))}
            </div>
          )}

          {/* Action buttons */}
          <div className="flex items-center gap-3 flex-wrap">
            {gitlink && (
              <a
                href={gitlink}
                target="_blank"
                rel="noreferrer"
                className="
                  inline-flex items-center gap-2 px-4 py-2
                  text-[13px] text-white/55 font-medium
                  bg-white/[0.05] border border-white/[0.09] rounded-lg
                  hover:bg-white/10 hover:text-white hover:border-white/20
                  transition-all duration-200
                "
              >
                <FiGithub size={13} />
                GitHub
              </a>
            )}
            {livelink && (
              <a
                href={livelink}
                target="_blank"
                rel="noreferrer"
                className="
                  inline-flex items-center gap-2 px-4 py-2
                  text-[13px] font-semibold text-black
                  bg-white rounded-lg
                  hover:bg-white/90 transition-all duration-200
                "
              >
                <FiExternalLink size={13} />
                Live Demo
              </a>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}