import { CiDesktopMouse2 } from "react-icons/ci";
import line from "../assets/Line.svg";
function MouseLogo() {
  return (
    <div className="md:w-4/5 w-full h-16 flex justify-around items-center gap-2 text-white/30">
      <span className="md:text-sm text-xs">Scroll Down</span>
      <span className="w-1/4">
        <img src={line} alt="" className="" />
      </span>
      <span className="text-2xl text-white/100 font-bold">
        <CiDesktopMouse2 className="text-2xl text-white animate-float drop-shadow-[0_0_8px_white]" />
      </span>
      <span className="w-1/4">
        <img src={line} alt="" className="" />
      </span>
      <span className="md:text-sm text-xs">To See Project</span>
    </div>
  );
}
export default MouseLogo;
