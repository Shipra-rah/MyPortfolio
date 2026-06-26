import { CiDesktopMouse2 } from "react-icons/ci";
import line from "../assets/Line.svg";
function MouseLogo() {
  return (
    <div className="w-full max-w-md mx-auto h-16 flex justify-center items-center gap-4 text-white/30">
      <span className="md:text-sm text-xs flex-shrink-0">Scroll Down</span>
      <span className="flex-1 max-w-[80px]">
        <img src={line} alt="" className="w-full" />
      </span>
      <span className="text-2xl text-white font-bold flex-shrink-0">
        <CiDesktopMouse2 className="text-2xl text-white animate-float drop-shadow-[0_0_8px_white]" />
      </span>
      <span className="flex-1 max-w-[80px]">
        <img src={line} alt="" className="w-full" />
      </span>
      <span className="md:text-sm text-xs flex-shrink-0">To See Projects</span>
    </div>
  );
}
export default MouseLogo;
