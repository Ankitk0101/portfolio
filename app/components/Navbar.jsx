"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { useRouter } from "next/navigation";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const router = useRouter();

  // 🔹 Handle scroll detection and active section
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Update active section based on scroll position
      const sections = ["home", "about", "skills", "projects", "contact"];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔹 Smooth scroll to sections
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
      setIsMenuOpen(false);
    }
  };

  // 🔹 Open email client with your email address
  const handleEmailRedirect = () => {
    window.location.href = "mailto:ankit933480@gmail.com";
    setIsMenuOpen(false);
  };

  // 🔹 Resume - Open in new tab for viewing and download
  const handleResumeOpen = () => {
    window.open('/resume/Ankit_Kumar_Resume_.pdf', '_blank', 'noopener,noreferrer');
    const link = document.createElement("a");
    link.href = "/resume/Ankit_Kumar_Resume_.pdf";
    link.download = "Ankit_Kumar_Resume_.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[9999] transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-[0_4px_20px_rgba(255,255,255,0.4)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 sm:px-10 py-3 sm:py-4">
        {/* Logo */}
        <motion.div
          className="flex items-center gap-2 cursor-pointer select-none"
          whileHover={{ scale: 1.05 }}
          onClick={() => scrollToSection("home")}
        >
          <Image
            src={assets.logo}
            alt="Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="text-xl font-semibold text-gray-800">
            Ankit<span className="text-blue-500">.</span>
          </span>
        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 font-medium text-gray-700 drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">
          {["home", "about", "skills", "projects", "contact"].map((section) => (
            <li
              key={section}
              onClick={() => scrollToSection(section)}
              className={`cursor-pointer transition-all duration-300 relative ${
                activeSection === section
                  ? "text-blue-600 font-semibold"
                  : "text-gray-600 hover:text-blue-500"
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
              {/* Active indicator underline */}
              {activeSection === section && (
                <motion.div
                  className="absolute bottom-[-8px] left-0 w-full h-0.5 bg-blue-500 rounded-full"
                  layoutId="activeSection"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </li>
          ))}
        </ul>

        {/* Right Buttons */}
        <div className="hidden md:flex items-center gap-3">
          {/* Resume button with download icon */}
          <motion.button
            onClick={handleResumeOpen}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-500 text-white px-5 py-2 rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-all hover:bg-blue-600 flex items-center gap-2 group cursor-pointer"
          >
            <svg 
              className="w-4 h-4 group-hover:scale-110 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
              />
            </svg>
            Resume
          </motion.button>
          
          {/* Get in Touch button - opens email client */}
          <motion.button
            onClick={handleEmailRedirect}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-5 py-2 rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-all cursor-pointer hover:from-indigo-600 hover:to-purple-600 flex items-center gap-2 group"
          >
            <svg 
              className="w-4 h-4 group-hover:scale-110 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
              />
            </svg>
            Get in Touch
          </motion.button>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex flex-col gap-[5px] justify-center items-center"
        >
          <span
            className={`h-[2px] w-6 bg-gray-800 rounded transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-[6px]" : ""
            }`}
          ></span>
          <span
            className={`h-[2px] w-6 bg-gray-800 rounded transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`h-[2px] w-6 bg-gray-800 rounded transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-[6px]" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute top-[100%] left-0 w-full bg-white/95 shadow-[0_4px_20px_rgba(255,255,255,0.4)] backdrop-blur-md rounded-b-2xl z-[9998]"
          >
            <ul className="flex flex-col items-center py-4 gap-3 text-gray-700 font-medium">
              {["home", "about", "skills", "projects", "contact"].map(
                (section) => (
                  <li
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`cursor-pointer w-full text-center py-3 transition-all duration-300 ${
                      activeSection === section
                        ? "text-blue-600 font-semibold bg-blue-50 mx-4 rounded-lg"
                        : "text-gray-600 hover:text-blue-500 hover:bg-gray-50 mx-4 rounded-lg"
                    }`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </li>
                )
              )}
              <div className="flex flex-col w-full items-center gap-3 pt-2 px-4">
                {/* Mobile Resume button with icon */}
                <motion.button
                  onClick={handleResumeOpen}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-500 text-white px-5 py-3 rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-all hover:bg-blue-600 flex items-center gap-2 w-full justify-center cursor-pointer"
                >
                  <svg 
                    className="w-4 h-4" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                    />
                  </svg>
                   Resume
                </motion.button>
                
                {/* Mobile Get in Touch button - opens email client */}
                <motion.button
                  onClick={handleEmailRedirect}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-5 py-3 rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-all cursor-pointer hover:from-indigo-600 hover:to-purple-600 w-full flex items-center gap-2 justify-center"
                >
                  <svg 
                    className="w-4 h-4" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                    />
                  </svg>
                  Get in Touch
                </motion.button>
              </div>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;