import Typing from "../Component/Typing";
import ProfilePhoto from "../Component/ProfilePhoto";
function About() {
  return (
    <div className="flex justify-center items-center gap-8 md:gap-16 min-h-screen w-full px-6 md:px-20 py-20">
      {/* Left Part */}
      <div className="w-full md:w-7/12 lg:w-6/12 text-white flex flex-col justify-center gap-6">
        <div className="space-y-2">
          <div className="text-sm md:text-base text-gray-400 tracking-widest font-light uppercase">
            WELCOME
          </div>
          <div className="text-2xl md:text-3xl lg:text-4xl text-gray-300 font-light">
            I'am
          </div>
          <div className="text-3xl md:text-4xl lg:text-6xl font-bold text-white">
            Shivanshu
          </div>
          <div className="text-xl md:text-2xl lg:text-3xl text-blue-400 font-medium">
            <Typing />
          </div>
        </div>
        <div className="w-full md:w-11/12">
          <p className="text-base md:text-sm text-gray-300 leading-relaxed font-light">
            I'm a passionate Full Stack Java Developer with hands-on experience
            in building responsive web applications and robust backend systems.
            Skilled in React.js, Core Java, REST APIs, and MySQL, I focus on
            creating scalable, real-world solutions. Driven by curiosity for the
            IT sector, I continuously explore new technologies and improve my
            craft — because for me, coding is not just a career, it's a passion.
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
