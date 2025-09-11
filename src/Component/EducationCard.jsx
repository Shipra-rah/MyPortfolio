import React, { useState, useEffect } from "react";
import { IoSchoolOutline } from "react-icons/io5";
function EducationCard(probs) {
  const [pass, setPass] = useState();

  const Complete = () => {
    const status = probs.pass === true ? "Completed" : "Pending";
    setPass(status);
  };

  useEffect(() => {
   return Complete();
  }, [probs.pass]);


  return (
     <div className="w-11/12 md:w-8/12 bg-transparent text-white border border-gray-700 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 my-10">
      {/* Header section */}
      <div className="flex justify-between items-start p-5 gap-6">
        {/* Icon */}
        <div className="text-5xl text-blue-400">
          <IoSchoolOutline />
        </div>

        {/* Info */}
        <div className="flex-1 flex flex-col gap-2">
          <h1 className="text-xl md:text-2xl font-semibold text-white">{probs.course}</h1>
          <p className="uppercase text-gray-300 tracking-wide text-sm md:text-base">
            {probs.collage}
          </p>
          <p className={`text-sm ${pass === "Completed" ? "text-green-400" : "text-yellow-400"}`}>
            {pass}
          </p>
        </div>

        {/* Duration Badge */}
        <div>
          <span className="text-white text-xs md:text-sm px-3 py-1 font-medium shadow border border-gray-700 rounded-2xl">
            {probs.duration}
          </span>
        </div>
      </div>

      {/* Optional Description */}
      {probs.description && (
        <div className="px-5 pb-4 text-sm text-gray-400">
          {probs.description}
        </div>
      )}
    </div>
  
  );
}
export default EducationCard;
