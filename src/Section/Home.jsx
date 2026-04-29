import Typing from "../Component/Typing";
import ProfilePhoto from "../Component/ProfilePhoto";
import HomeButton from "../Component/HomeButton";
import MouseLogo from "../Component/MouseLogo";

function Home() {
  const homeBtn = [
    { name: "Get in Touch", id: "#contact"}, 
    { name: "See Project", id: "#project"}
  ];
  return (
    <div className="w-full flex justify-center items-center flex-col gap-8 min-h-screen px-6 md:px-20 py-20">
      {/* Profile */}
      <div className="w-40 md:w-48 flex justify-center items-center flex-col gap-4 pt-16 md:pt-24">
        <ProfilePhoto />
        <div className="text-center text-gray-400 tracking-widest text-sm md:text-base font-light">
          SHIVANSHU
        </div>
      </div>

      {/* Profile Content */}
      <div className="flex justify-center items-center gap-6 flex-col w-full max-w-full">
        <div className="text-2xl md:text-4xl lg:text-6xl flex justify-center items-center text-white tracking-wide uppercase font-bold">
          <Typing />
        </div>
        <div className="flex justify-center items-center w-full max-w-2xl px-4">
          <p className="text-base md:text-sm text-gray-300 text-center leading-relaxed font-light">
            Java Developer skilled in Spring Boot, REST APIs, problem-solving,
            backend systems, clean code, performance optimization, and
            continuous learning.
          </p>
        </div>
        <div className="flex justify-center items-center gap-6 md:gap-9 flex-wrap">
          {homeBtn.map((homeBtn, index) => (
            <HomeButton key={index} name={homeBtn.name} id={homeBtn.id} />
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="flex justify-center items-center mt-12">
        <MouseLogo />
      </div>
    </div>
  );
}
export default Home;
