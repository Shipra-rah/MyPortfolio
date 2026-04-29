function SkillCard({ name, icon }) {
  return (
    <div
      className="group min-h-40 w-36 flex flex-col justify-center items-center gap-2 
    text-white rounded-lg shadow-xl font-serif "
    >
      <div className="text-xl mb-2 group-hover:scale-150 transition duration-1">
        {icon}
      </div>
      <div className="text-lg font-semibold">{name}</div>
    </div>
  );
}

export default SkillCard;
