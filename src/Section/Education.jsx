import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaGraduationCap, FaSchool } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

function Education() {
  const details = [
    {
      icon: <FaGraduationCap className="text-4xl text-blue-400" />,
      course: "Diploma in Computer Science & Engineering",
      collage: "CSJM Government Polytechnic, Ambedkar Nagar",
      duration: "Aug 2022 – 2025",
      status: false,
      description:
        "Building strong foundations in software engineering, backend systems, and modern web technologies through hands-on projects and real-world problem-solving.",
    },
    {
      icon: <FaSchool className="text-4xl text-green-400" />,
      course: "High School — Computer Science Stream",
      collage: "JBIC Ramnagar, Ambedkar Nagar",
      duration: "Aug 2019 – 2021",
      status: true,
      description:
        "Explored programming fundamentals, mathematics, and computer science basics that sparked my passion for coding and technology.",
    },
  ];

  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 60, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          delay: i * 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        }
      );
    });
  }, []);

  return (
    <section className="flex flex-col justify-center items-center min-h-screen w-full px-6 md:px-16 lg:px-20 py-20 bg-black">
      {/* Section Title */}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-12 tracking-tight text-center">
        My <span className="text-blue-400">Education</span>
      </h2>

      {/* Education Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl">
        {details.map((detail, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-lg hover:shadow-2xl 
            hover:scale-105 transition-all duration-300 group"
          >
            {/* Icon */}
            <div className="absolute -top-6 left-6 bg-black/80 p-3 rounded-xl border border-white/20 shadow-md">
              {detail.icon}
            </div>

            {/* Course */}
            <h3 className="text-xl md:text-2xl font-semibold text-white mt-6 mb-2 leading-snug">
              {detail.course}
            </h3>

            {/* College + Duration */}
            <p className="text-gray-300 font-medium text-sm md:text-base">
              {detail.collage}
            </p>
            <p className="text-gray-400 text-xs md:text-sm mb-4">
              {detail.duration}
            </p>

            {/* Description */}
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              {detail.description}
            </p>

            {/* Status */}
            {detail.status ? (
              <span className="inline-block mt-6 px-3 py-1 text-xs md:text-sm bg-green-500/20 border border-green-500 text-green-400 rounded-full">
                ✔ Completed
              </span>
            ) : (
              <span className="inline-block mt-6 px-3 py-1 text-xs md:text-sm bg-yellow-500/20 border border-yellow-500 text-yellow-400 rounded-full">
                ⏳ Ongoing
              </span>
            )}

            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
