import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectCard from "../Component/ProjectCard";
import projectsData from "../Component/ProjectData";

gsap.registerPlugin(ScrollTrigger);

function Project() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [showAll, setShowAll] = useState(false);
  const cardsRef = useRef([]);
  const readMoreRef = useRef(null);

  const categories = ["ALL", "College", "Self Build", "AI Based"];

  const filteredProjects =
    selectedCategory === "ALL"
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3);

  const btnStyle =
    "px-5 py-2 bg-white/20 backdrop-blur-md rounded-xl hover:bg-white hover:text-black hover:scale-105 transition-all duration-300";

  // Animate cards on mount/update
  useEffect(() => {
    if (cardsRef.current.length > 0) {
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current[0],
            start: "top 80%",
          },
        }
      );
    }

    if (readMoreRef.current) {
      gsap.fromTo(
        readMoreRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out", delay: 0.5 }
      );
    }
  }, [visibleProjects]);

  return (
    <section className="min-h-screen flex flex-col items-center py-16 md:py-20 px-6 md:px-20 bg-black">
      {/* Title & Counter */}
      <div className="text-white flex flex-col items-center gap-6 text-center w-full max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center w-full gap-4">
          <span className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-wide">
            MY PROJECTS
          </span>
          <span className="text-sm md:text-base text-gray-400 font-medium">
            Showing <span className="text-white font-bold">{visibleProjects.length}</span> of{" "}
            <span className="text-white font-bold">{filteredProjects.length}</span>
          </span>
        </div>


        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mt-4">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`${btnStyle} ${
                selectedCategory === cat ? "bg-white text-black font-bold" : ""
              }`}
              onClick={() => {
                setSelectedCategory(cat);
                setShowAll(false);
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 px-6 py-10 w-full max-w-7xl">
        {visibleProjects.map((project, index) => (
          <div
            key={project.title + index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="w-full transform hover:scale-105 transition-transform duration-300"
          >
            <ProjectCard
              title={project.title}
              image={project.image}
              description={project.description}
              gitlink={project.gitlink}
              livelink={project.livelink}
              skill={project.skillcol}
            />
          </div>
        ))}
      </div>

      {/* Read More Button */}
      {filteredProjects.length > 4 && (
        <button
          ref={readMoreRef}
          className="px-8 py-3 mt-6 bg-white text-black font-bold rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Show Less" : "Read More"}
        </button>
      )}
    </section>
  );
}

export default Project;
