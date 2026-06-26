import { TypeAnimation } from "react-type-animation";
function Typing() {
  return (
    <TypeAnimation
      sequence={[
        "Java developer",
        2000,
        "Frontend developer",
        2000,
        "Full stack developer",
        2000,
      ]}
      speed={60}
      repeat={Infinity}
    />
  );
}
export default Typing;
