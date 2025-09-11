function HomeButton(probs) {
  return (
    <button className="h-14 w-48 bg-black/20 text-white rounded-lg shadow-xl border-2 border-white/15">
      {probs.name}
    </button>
  );
}
export default HomeButton;
