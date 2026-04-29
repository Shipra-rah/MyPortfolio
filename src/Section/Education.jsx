import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import EducationCard from "../Component/EducationCard";

gsap.registerPlugin(ScrollTrigger);

function Education() {
  const details = [
    {
      course: "Diploma in Computer Science & Engineering",
      collage: "CSJM Government Polytechnic, Ambedkar Nagar",
      duration: "Aug 2022 – 2025",
      status: true,
      description:
        "Focused on software engineering fundamentals, backend systems, and modern development practices.",
    },
    {
      course: "High School — Computer Science Stream",
      collage: "JBIC Ramnagar, Ambedkar Nagar",
      duration: "Aug 2019 – 2021",
      status: true,
      description:
        "Built strong fundamentals in programming, mathematics, and computer science concepts.",
    },
  ];

  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: i * 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 92%",
          },
        }
      );
    });
  }, []);

  return (
    <section className="bg-black text-white  py-20">

      {/* Header */}
      <div className="max-w-4xl mx-auto mb-14">
        <h2 className="text-3xl md:text-4xl font-semibold">
          Education <span className="text-emerald-400">.</span>
        </h2>
        <p className="text-white/30 mt-2 text-sm">
          Academic background
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-4xl mx-auto flex flex-col gap-5">
        {details.map((item, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
          >
            <EducationCard {...item} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;