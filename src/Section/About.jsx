import Typing from "../Component/Typing";
import ProfilePhoto from "../Component/ProfilePhoto";
function About() {
  return (
    <div className="flex justify-center items-center gap-8 md:gap-16 min-h-screen w-full px-6 md:px-20 py-20">
      {/* Left Part */}
      <div className="w-full md:w-7/12 lg:w-6/12 text-white flex flex-col justify-center gap-6">
        <div className="space-y-2">
          <div className="text-sm md:text-base text-gray-400 tracking-widest font-light uppercase">WELCOME</div>
          <div className="text-2xl md:text-3xl lg:text-4xl text-gray-300 font-light">I'am</div>
          <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">Shipra</div>
          <div className="text-xl md:text-2xl lg:text-3xl text-blue-400 font-medium">
            <Typing />
          </div>
        </div>
        <div className="w-full md:w-10/12">
          <p className="text-base md:text-lg text-gray-300 leading-relaxed font-light">
            I'm a skilled Java and Full Stack Developer with expertise in Web &
            Backend Development and databases like MongoDB. Passionate about the
            IT sector, I aim to build scalable, real-world solutions. When not
            coding, I explore new technologies and refine my skills — because
            for me, coding is not just a career, it's a passion.
          </p>
        </div>
      </div>

      {/* Right Part */}
      <div className="hidden md:flex w-4/12 lg:w-3/12 justify-center items-center">
        <ProfilePhoto />
      </div>
    </div>
  );
}
export default About;
