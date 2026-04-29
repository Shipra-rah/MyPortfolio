import Navbar from "./Component/Navbar";
import Home from "./Section/Home";
import About from "./Section/About";
import Skill from "./Section/Skill";
import Project from "./Section/Project";
import Education from "./Section/Education";
import Contact from "./Section/Contact";
import Footer from "./Section/Footer";


function App() {
  return (
    <div>    
      <Navbar />
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skill">
        <Skill />
      </section>
      <section id="project">
        <Project />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}

export default App;
