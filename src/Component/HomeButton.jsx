function HomeButton(probs) {
  return (
    <a href={probs.id} className="flex justify-center items-center cursor-pointer h-14 w-48 bg-black/20 text-white rounded-lg shadow-xl border-2 border-white/15">
      {probs.name}
    </a>
  );
}
export default HomeButton;
