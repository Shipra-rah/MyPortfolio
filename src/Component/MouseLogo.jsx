import { CiDesktopMouse2 } from "react-icons/ci";
function MouseLogo() {
  return (
    <div className="w-4/5 h-16 flex justify-around items-center gap-2 text-white/30">
      <span>Scroll Down</span>
      <span className="w-1/4">
        <img src="./src/assets/Line.svg" alt="" className="" />
      </span>
      <span className="text-2xl text-white/100 font-bold">
        <CiDesktopMouse2 className="text-2xl text-white animate-float drop-shadow-[0_0_8px_white]" />
      </span>
      <span className="w-1/4">
        <img src="./src/assets/Line.svg" alt="" className="" />
      </span>
      <span>To See Project</span>
    </div>
  );
}
export default MouseLogo;
