function HomeButton({ name, id, isPrimary }) {
  return (
    <a
      href={id}
      className={`
        flex justify-center items-center cursor-pointer h-14 w-48 rounded-lg shadow-lg
        transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 text-sm font-medium
        ${isPrimary 
          ? "bg-white text-black hover:bg-white/90" 
          : "bg-white/[0.03] backdrop-blur-md text-white border border-white/10 hover:bg-white/[0.08] hover:border-white/20"
        }
      `}
    >
      {name}
    </a>
  );
}
export default HomeButton;
