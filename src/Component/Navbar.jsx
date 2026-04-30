import React, { useState, useEffect, useRef } from "react";
import NavbarMenu from "./NavbarMenu";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import gsap from "gsap";
import Shipralogo from "../assets/Shipralogo.svg";
import Resume from "../assets/Resume.pdf";

const MenuItem = [
  { name: "Home", path: "#home" },
  { name: "About", path: "#about" },
  { name: "Projects", path: "#project" },
  { name: "Education", path: "#education" },
  { name: "Contact", path: "#contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navbarRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const lastScrollY = useRef(0);

  /* 🔹 Navbar Entry Animation */
  useEffect(() => {
    gsap.from(navbarRef.current, {
      y: -80,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    });
  }, []);

  /* 🔹 Scroll Behavior */
  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      setScrolled(current > 40);

      if (current > lastScrollY.current && current > 100) {
        gsap.to(navbarRef.current, { y: -80, opacity: 0, duration: 0.3 });
      } else {
        gsap.to(navbarRef.current, { y: 0, opacity: 1, duration: 0.3 });
      }

      lastScrollY.current = current;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* 🔹 Close menu outside */
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
      className={`fixed top-0 w-full z-50 transition-all duration-300
      backdrop-blur-xl border-b border-white/10
      ${scrolled ? "bg-black/70" : "bg-black/40"}`}
    >
      {/* Container */}
      <div className="max-w-7xl mx-auto flex justify-between items-center h-16 px-4 md:px-10">
        {/* Logo */}
        <img
          src={Shipralogo}
          alt="Logo"
          className="h-10 md:h-12 cursor-pointer hover:scale-105 transition"
        />

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm text-white/60">
          {MenuItem.map((item, i) => (
            <a key={i} href={item.path} className="group relative">
              <span className="hover:text-white transition">
                <NavbarMenu name={item.name} />
              </span>

              <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-white transition-all group-hover:w-full"></span>
            </a>
          ))}

          {/* Resume Button */}
          <a
            href={Resume}
            target="_blank"
            className="ml-4 px-4 py-1.5 rounded-md border border-white/20 text-white/80 hover:text-black hover:bg-white transition"
          >
            Resume
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-xl text-white/70 hover:text-white transition"
        >
          {menuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
        </button>
      </div>

      {/* 🔥 Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* 🔥 Sidebar Menu */}
      <div
        ref={mobileMenuRef}
        className={`fixed top-0 left-0 h-full w-64 bg-[#0d0d0d]
        border-r border-white/10 z-50
        flex flex-col justify-between
        transform transition-transform duration-500 ease-in-out
        ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Top */}
        <div className="p-6 flex flex-col gap-8">
          <div className="text-lg font-semibold text-white">Shipra</div>

          <div className="flex flex-col gap-5">
            {MenuItem.map((item, i) => (
              <a
                key={i}
                href={item.path}
                onClick={() => setMenuOpen(false)}
                className="text-white/50 hover:text-white transition hover:translate-x-1"
              >
                <NavbarMenu name={item.name} />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="p-6 border-t border-white/10">
          <a
            href={Resume}
            target="_blank"
            className="block text-center py-2 rounded-md bg-white text-black hover:bg-gray-200 transition"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
