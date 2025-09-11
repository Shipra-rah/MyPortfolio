import SkillCard from "../Component/SkillCard";
import { FaHtml5, FaCss3, FaReact, FaJava, FaPython, FaNodeJs, FaGitAlt, FaDocker, FaDatabase, FaAws } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiSpringboot, SiMongodb, SiTailwindcss, SiTypescript, SiPostgresql, SiExpress } from "react-icons/si";

function Skill() {
  const skills = [
  { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-500" },
  { name: "CSS3", icon: <FaCss3 />, color: "text-blue-500" },
  { name: "JavaScript", icon: <IoLogoJavascript />, color: "text-yellow-400" },
  { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-400" },
  { name: "React JS", icon: <FaReact />, color: "text-cyan-400" },
  { name: "Node JS", icon: <FaNodeJs />, color: "text-green-600" },
  { name: "Java", icon: <FaJava />, color: "text-red-500" },
  { name: "Spring Boot", icon: <SiSpringboot />, color: "text-green-500" },
  { name: "Python", icon: <FaPython />, color: "text-green-400" },
  { name: "Express JS", icon: <SiExpress />, color: "text-gray-300" },
  { name: "MongoDB", icon: <SiMongodb />, color: "text-green-700" },
  { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-blue-700" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-sky-400" },
  { name: "Git", icon: <FaGitAlt />, color: "text-orange-600" },
  { name: "Docker", icon: <FaDocker />, color: "text-blue-500" },
  { name: "AWS", icon: <FaAws />, color: "text-yellow-500" },
  { name: "SQL", icon: <FaDatabase />, color: "text-purple-500" },
  ];
  return (
    <div className="min-h-screen px-6 md:px-20 py-16 md:py-20 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">Skills and Tools</h1>
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Technologies I work with to bring ideas to life
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
          {skills.map((Items, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-black/20 backdrop-blur-sm rounded-xl hover:bg-black/40 transition-all duration-300 hover:scale-105 hover:shadow-lg border border-white/10"
            >
              <div className={`text-4xl md:text-5xl mb-3 ${Items.color} transition-transform duration-300 hover:scale-110`}>
                {Items.icon}
              </div>
              <span className="text-sm md:text-base font-medium text-center">{Items.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skill;
