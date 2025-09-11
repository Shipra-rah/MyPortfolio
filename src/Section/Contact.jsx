import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

function Contact() {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current.children,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );
    }
  }, []);

  return (
    <div
      ref={sectionRef}
      className="flex justify-center items-center min-h-screen w-full px-6 md:px-20 py-16 md:py-20 bg-black"
    >
      <div className="w-full max-w-6xl text-white">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Let’s <span className="text-blue-400">Connect</span>
          </h1>
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Whether you have an opportunity, a project idea, or just want to say hello —
            I’d love to hear from you.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
          {/* Contact Info */}
          <div className="flex flex-col justify-center gap-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                Let’s Talk
              </h2>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                I’m open to exciting opportunities and collaborations. Feel free
                to drop me a message and let’s create something amazing together.
              </p>
            </div>

            {/* Info */}
            <div className="flex flex-col gap-6">
              <div>
                <h3 className="text-lg md:text-xl font-semibold">Email</h3>
                <p className="text-gray-400">shiprarah@gmail.com</p>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold">Location</h3>
                <p className="text-gray-400">Noida, UP, India</p>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold">Status</h3>
                <p className="text-gray-400">Available for Hire</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 mt-4">
              <a
                href="mailto:shiprarah@gmail.com"
                className="text-gray-400 hover:text-white text-2xl transition"
              >
                <FaEnvelope />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 text-2xl transition"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-200 text-2xl transition"
              >
                <FaGithub />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-lg p-6 md:p-8 rounded-2xl border border-white/20 shadow-xl">
            <form className="flex flex-col gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition text-white placeholder-gray-400"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition text-white placeholder-gray-400"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  rows="5"
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition text-white placeholder-gray-400 resize-none"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
