import { useEffect, useState } from "react";

function EducationCard({ course, collage, duration, status, description }) {
  const [state, setState] = useState("");

  useEffect(() => {
    setState(status ? "Completed" : "Ongoing");
  }, [status]);

  return (
    <div className="w-full flex gap-4">

      {/* Accent Line */}
      <div className="w-[2px] bg-emerald-400/70 rounded-full"></div>

      {/* Card */}
      <div className=" flex-1 border border-white/10 rounded-md px-5 py-4 bg-[#0b0b0b] hover:bg-[#101010] transition">

        {/* Top */}
        <div className="flex justify-between items-start">

          <div>
            <h3 className="text-base md:text-lg font-medium text-white">
              {course}
            </h3>
            <p className="text-xs text-white/40 mt-1">
              {collage}
            </p>
          </div>

          <div className="text-right text-xs text-white/30">
            <p>{duration}</p>
            <p
              className={`mt-1 ${
                state === "Completed"
                  ? "text-emerald-400"
                  : "text-yellow-400"
              }`}
            >
              {state}
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] bg-white/5 my-3"></div>

        {/* Description */}
        <p className="text-xs md:text-sm text-white/40 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

export default EducationCard;