import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { FaLink } from "react-icons/fa";
import { IoIosHome } from "react-icons/io";
import { MdOutlineAccountCircle } from "react-icons/md";
import { MdOutlineSchool } from "react-icons/md";
import { GrProjects } from "react-icons/gr";
import { MdOutlineMail } from "react-icons/md";
function Footer() {
  return (
    <footer className="flex justify-center items-center flex-col w-full min-h-96 ">
      {/* Upper box */}
      <div className="w-full min-h-96 p-16 flex justify-center items-center">
        {/* left Side */}
        <div className="w-1/2 flex justify-between items-left flex-col gap-6  ">
          {/* Profile View */}
          <div className="flex justify-start items-center space-x-4">
            <img
              src="./src/assets/ShipraProfile.jpg"
              alt=""
              className="rounded-full  h-14  hover:border-2 hover:border-red-800"
            />
            <span className="text-white uppercase leading-10">
              <p className="text-2xl">Shipra</p>
              <p className="text-xs text-gray-500 font-bold">
                Java full Stack Developer & problem solver
              </p>
            </span>
          </div>
          {/* About Profile */}
          <div>
            <p className="text-gray-400 max-w-md text-sm w-5/6">
              Java Developer skilled in Spring Boot, REST APIs, problem-solving,
              backend systems, clean code, performance optimization, and
              continuous learning.
            </p>
          </div>
          {/* About Skill */}

          <div className="w-full h-32 flex justify-between items-center flex-wrap  ">
            <span className="text-sm text-white bg-black/50 px-5 py-1 rounded-2xl">
              React js
            </span>
            <span className="text-sm text-white bg-black/50 px-5 py-1 rounded-2xl">
              JavaScript
            </span>
            <span className="text-sm text-white bg-black/50 px-5 py-1 rounded-2xl">
              Java
            </span>
            <span className="text-sm text-white bg-black/50 px-5 py-1 rounded-2xl">
              Tailwind CSS
            </span>
            <span className="text-sm text-white bg-black/50 px-5 py-1 rounded-2xl">
              AWS
            </span>
            <span className="text-sm text-white bg-black/50 px-5 py-1 rounded-2xl">
              MY SQL
            </span>
          </div>

          {/* Socail Media Link */}
          <div className="w-1/3 flex justify-around items-center">
            <span className="text-2xl text-gray-400/50 px-4 flex justify-center items-center cursor-pointer">
              <FaXTwitter />
            </span>
            <span className="text-2xl text-gray-400/50 px-4 flex justify-center items-center cursor-pointer">
              <FaLinkedin />
            </span>
            <span className="text-2xl text-gray-400/50 px-4 flex justify-center items-center cursor-pointer">
              <FaGithub />
            </span>
            <span className="text-2xl text-gray-400/50 px-4 flex justify-center items-center cursor-pointer">
              <MdOutlineEmail />
            </span>
          </div>
        </div>
        {/* Right Side */}
        <div className="w-1/2 min-h-96 flex justify-around items-start p-8 text-white">
          {/* Quick Links */}
          <div className="w-1/3 flex flex-col gap-6">
            <div className="text-xl font-semibold flex items-center space-x-2 border-b border-gray-600 pb-2">
              <FaLink />
              <span>Quick Links</span>
            </div>
            <div className="flex flex-col gap-4 text-sm text-gray-300">
              <span className="flex items-center space-x-4 w-full py-1.5 px-4 hover:bg-black/10 cursor-pointer">
                <IoIosHome className="text-xl" />
                <span>Home</span>
              </span>
              <span className="flex items-center space-x-4 w-full py-1.5 px-4py-1.5 px-4 hover:bg-black/10 cursor-pointer">
                <MdOutlineAccountCircle className="text-xl" />
                <span>About</span>
              </span>
              <span className="flex items-center space-x-4 w-full py-1.5 px-4 hover:bg-black/10 cursor-pointer">
                <MdOutlineSchool className="text-xl" />
                <span>Education</span>
              </span>
              <span className="flex items-center space-x-4 w-full py-1.5 px-4 hover:bg-black/10 cursor-pointer">
                <GrProjects className="text-xl" />
                <span>Projects</span>
              </span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="w-1/2 flex flex-col gap-6">
            <div className="text-xl font-semibold flex items-center space-x-2 border-b border-gray-600 pb-2">
              <MdOutlineMail />
              <span>Contact</span>
            </div>
            <div className="flex flex-col gap-4 text-sm text-gray-300">
              <span className="w-full py-1.5 px-4 text-lg flex flex-col space-x-2">
                {" "}
                shiprarah@gmail.com
              </span>
              <span className="w-full py-1.5 px-4 text-lg flex flex-col space-x-2">
                {" "}
                Noida, UP
              </span>
              <span className="w-full py-1.5 px-4 text-lg flex flex-col space-x-2">
                {" "}
                Available for hire
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom box */}
      <div className="min-h-14 w-3/5 border-t-2 border-gray-500/40">
        <p className="  text-sm text-white/50 text-center mt-4">
          © 2025 Shipra • All rights reserved • Crafted with{" "}
          <span className="text-red-500">♥</span> by Shipra
        </p>
      </div>
    </footer>
  );
}
export default Footer;
