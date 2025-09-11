import React, { useState, useEffect, useRef } from "react";
import NavbarMenu from "./NavbarMenu";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import gsap from "gsap";

const MenuItem = [
  { name: "Home", path: "#home" },
  { name: "About", path: "#about" },
  { name: "Projects", path: "#project" },
  { name: "Contact", path: "#contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navbarRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const lastScrollY = useRef(0);

  // Initial animation on page load
  useEffect(() => {
    gsap.from(navbarRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  // Hide navbar on scroll down, show on scroll up & background change
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 50) setScrolled(true);
      else setScrolled(false);

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        // scroll down -> hide
        gsap.to(navbarRef.current, { y: -80, opacity: 0, duration: 0.3, ease: "power2.out" });
      } else {
        // scroll up -> show
        gsap.to(navbarRef.current, { y: 0, opacity: 1, duration: 0.1, ease: "power2.out" });
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) window.addEventListener("mousedown", handleClickOutside);
    return () => window.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <nav
      ref={navbarRef}
      className={`fixed top-0 w-full z-50 backdrop-blur-md shadow-md transition-all duration-300 ${
        scrolled ? "bg-black/90 shadow-lg" : "bg-black/60 shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center h-16 px-4 md:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="./src/assets/Shipralogo.svg"
            alt="Logo"
            className="h-12 md:h-16 hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-gray-400 text-base">
          {MenuItem.map((item, index) => (
            <a key={index} href={item.path} className="relative group">
              <NavbarMenu name={item.name} />
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
            </a>
          ))}
          <a
            href="./src/assets/Resume.pdf"
            className="bg-white text-black px-3 py-1 rounded-md hover:bg-gray-200 transition"
          >
            Resume
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-400 hover:text-white text-2xl focus:outline-none"
          >
            {menuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className={`md:hidden fixed inset-x-0 top-16 bg-black/90 backdrop-blur-md flex flex-col items-center gap-6 py-6 text-gray-300 transform transition-transform duration-500 ${
          menuOpen ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0 pointer-events-none"
        }`}
      >
        {MenuItem.map((item, index) => (
          <a
            key={index}
            href={item.path}
            className="hover:text-white text-lg transition"
            onClick={() => setMenuOpen(false)}
          >
            <NavbarMenu name={item.name} />
          </a>
        ))}
        <a
          href="./src/assets/Resume.pdf"
          className="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200 transition"
        >
          Resume
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
