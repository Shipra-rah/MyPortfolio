import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ProjectCard from "../Component/ProjectCard";
import projectsData from "../Component/ProjectData";

/* Stack Card */
function StackCard({ project, index, total, scrollYProgress }) {
  const n = total;

  // Vertical slide
  const inputRange =
    index === 0 ? [0, 1 / n] : [index / n, (index + 1) / n];

  const outputY =
    index === 0 ? ["0vh", "0vh"] : ["110vh", "0vh"];

  const y = useTransform(scrollYProgress, inputRange, outputY);

  // Scale depth effect
  const scaleInput =
    index < n - 1
      ? [(index + 1) / n, Math.min(1, (index + 2) / n)]
      : [0, 1];

  const scaleOutput = index < n - 1 ? [1, 0.95] : [1, 1];
  const scale = useTransform(scrollYProgress, scaleInput, scaleOutput);

  return (
    <motion.div
      style={{
        y,
        scale,
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        zIndex: index,
        transformOrigin: "top center",
      }}
    >
      <ProjectCard {...project} />
    </motion.div>
  );
}

/* Page */
export default function Project() {
  const containerRef = useRef(null);
  const projects = projectsData;
  const n = projects.length;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section className="bg-black text-white">

      {/* Header */}
      <div className=" flex justify-around items-center">
         <div className="w-full flex justify-around items-center">
          <h1 className="text-4xl md:text-5xl font-semibold">Projects  </h1>
          <p className="text-white/40 text-sm">{n} Projects  </p>
         </div>
      </div>

      {/* Scroll Stack */}
      <div
        ref={containerRef}
        style={{ height: `${n * 100}vh` }}
        className="relative"
      >
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">

          <div className="relative w-full max-w-4xl px-6 md:px-0">

            {/* Ghost Card (for layout height) */}
            <div className="invisible pointer-events-none">
              <ProjectCard {...projects[0]} />
            </div>

            {/* Stack Cards */}
            {projects.map((project, index) => (
              <StackCard
                key={index}
                project={project}
                index={index}
                total={n}
                scrollYProgress={scrollYProgress}
              />
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}