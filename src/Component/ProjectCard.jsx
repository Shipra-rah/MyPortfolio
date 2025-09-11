import { FiEdit } from "react-icons/fi";
function ProjectCard(props) {
  return (
    <div className="min-h-96 w-72 p-2 flex flex-col justify-center items-center shadow-[0px_0px_10px_#000000bf] text-white rounded-lg overflow-hidden">
      <img src={props.image} alt="" className="h-48 w-full object-cover filter grayscale hover:grayscale-0 rounded-lg" />
      <div className="px-2  min-h-14 w-full flex justify-between items-center border-b border-gray-500/20">
        <p className="text-xl font-semibold">{props.title}</p>
        <p><FiEdit /></p>
      </div>
      <div className="px-2 min-h-12 w-full flex justify-between items-center">
        <p className="text-sm leading-none text-gray-400">{props.description}</p>
      </div>
      <div className="min-h-12 w-full px-3">
        <span className="text-sm bg-black/15 px-4 py-0.5 text-white/40 rounded-lg">HTML</span>
      </div>
      <div className="min-h-12 w-10/12 border-t-2 border-gray-400/30">
        <button className="px-6 py-2 ">Git Link</button>
        <button className="px-6 py-2 "> Live link</button>
      </div>
    
    </div>
  );
}

export default ProjectCard;
