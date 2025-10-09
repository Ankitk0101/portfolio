"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (!isMenuOpen) { // Only update scroll states if menu is closed
        setIsScrolled(window.scrollY > 50);
        setShowScrollTop(window.scrollY > 500);
        
        const sections = ['home', 'about', 'skills', 'projects', 'contact'];
        const current = sections.find(section => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= 100 && rect.bottom >= 100;
          }
          return false;
        });
        if (current) setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMenuOpen]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleResumeDownload = () => {
    // Create a link element
    const link = document.createElement('a');
    link.href = 'resume/Ankit_Kumar_Resume_.pdf';
    link.download = 'Ankit_Kumar_Resume.pdf';
    
    // Trigger download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Also open in new tab
    window.open('resume/Ankit_Kumar_Resume_.pdf', '_blank');
  };

  const navItems = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Contact Me", href: "#contact", id: "contact" },
  ];

  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  const mobileMenuVariants = {
    closed: {
      x: "100%",
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    },
    open: {
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const mobileItemVariants = {
    closed: { opacity: 0, x: 50 },
    open: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1 + 0.2,
        duration: 0.4,
        ease: "easeOut"
      }
    })
  };

  const scrollTopVariants = {
    hidden: {
      opacity: 0,
      scale: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.1,
      y: -5,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.9
    }
  };

  return (
    <>
      {/* Background - No animation */}
      <div className="fixed top-0 right-0 w-11/12 -z-10">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>

      {/* Main Navbar - No animation, no border */}
      <nav
        className={`w-full fixed flex px-5 lg:px-8 xl:px-[8%] justify-between items-center z-50 mt-4 transition-all duration-300 ${
          isScrolled 
            ? "py-3 backdrop-blur-md shadow-lg rounded-full mx-4 mt-2 bg-white/90" 
            : "py-4"
        }`}
      >
        {/* Logo */}
        <a 
          href="#home"
          className="flex items-center cursor-pointer"
        >
          <Image
            src={assets.logo}
            width={60}
            height={60}
            className="w-12 h-12 lg:w-15 lg:h-15 rounded-full cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-300"
            alt="logo"
          />
        </a>

        {/* Desktop Navigation - No border */}
        <ul 
          className="hidden md:flex items-center gap-2 lg:gap-3 rounded-full px-8 py-3 backdrop-blur-sm shadow-lg bg-white/80"
        >
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className={`relative px-4 py-2 rounded-full font-medium transition-all duration-300 cursor-pointer ${
                  activeSection === item.id
                    ? "text-blue-600 bg-blue-50 font-semibold"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {item.name}
                {activeSection === item.id && (
                  <div
                    className="absolute inset-0 rounded-full -z-10 bg-blue-100"
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Side Actions */}
        <div className="flex items-center gap-4">
          {/* Resume Button */}
          <button
            onClick={handleResumeDownload}
            className="flex items-center gap-2 px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-green-600 to-blue-600 text-white hover:scale-105 cursor-pointer"
          >
            <Image
              src={assets.download_icon}
              alt="download icon"
              width={16}
              height={16}
              className="w-4 h-4 cursor-pointer"
            />
            <span className="font-semibold text-sm cursor-pointer">Resume</span>
          </button>

          {/* Get In Touch Button */}
          <a
            href="mailto:your.email@example.com"
            className="flex items-center gap-2 px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:scale-105 cursor-pointer"
          >
            <Image
              src={assets.mail_icon}
              alt="mail icon"
              width={16}
              height={16}
              className="w-4 h-4 cursor-pointer"
            />
            <span className="font-semibold text-sm hidden sm:inline cursor-pointer">Get in Touch</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={openMenu}
            className="block md:hidden ml-2 p-2 rounded-full transition-colors duration-200 hover:bg-gray-100 cursor-pointer"
          >
            <Image 
              src={assets.menu_black} 
              alt="Menu" 
              width={24} 
              height={24} 
              className="w-6 cursor-pointer" 
            />
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Backdrop with enhanced blur and solid background */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeMenu}
                className="fixed inset-0 bg-black/60 backdrop-blur-md z-40 md:hidden cursor-pointer"
              />
              
              {/* Mobile Menu Panel with solid background */}
              <motion.div
                variants={mobileMenuVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="fixed top-0 right-0 bottom-0 w-80 shadow-2xl z-50 md:hidden bg-white/98 backdrop-blur-lg border-l border-white/30"
              >
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200/40 bg-white/95">
                  <div className="flex items-center gap-3">
                    <Image
                      src={assets.logo}
                      width={40}
                      height={40}
                      className="w-10 h-10 rounded-full cursor-pointer"
                      alt="logo"
                    />
                    <span className="font-bold text-gray-800 cursor-pointer">
                      Portfolio
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <button
                      onClick={closeMenu}
                      className="p-2 rounded-full transition-colors duration-200 hover:bg-gray-100 cursor-pointer"
                    >
                      <Image
                        src={assets.close_black}
                        alt="Close"
                        width={20}
                        height={20}
                        className="w-5 cursor-pointer"
                      />
                    </button>
                  </div>
                </div>

                {/* Menu Items */}
                <nav className="p-6 bg-white/95">
                  <ul className="space-y-3">
                    {navItems.map((item, index) => (
                      <motion.li
                        key={item.name}
                        custom={index}
                        variants={mobileItemVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                      >
                        <a
                          href={item.href}
                          onClick={closeMenu}
                          className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-300 cursor-pointer ${
                            activeSection === item.id
                              ? "bg-blue-600 text-white shadow-lg"
                              : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                          }`}
                        >
                          <div className={`w-2 h-2 rounded-full cursor-pointer ${
                            activeSection === item.id 
                              ? "bg-white" 
                              : "bg-blue-600"
                          }`} />
                          {item.name}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </nav>

                {/* Mobile Buttons */}
                <div className="absolute bottom-8 left-6 right-6 space-y-3 bg-white/95 p-4 rounded-xl">
                  {/* Resume Button in Mobile Menu */}
                  <button
                    onClick={() => {
                      handleResumeDownload();
                      closeMenu();
                    }}
                    className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-3 rounded-xl font-semibold text-center shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 cursor-pointer"
                  >
                    <Image
                      src={assets.download_icon}
                      alt="download icon"
                      width={16}
                      height={16}
                      className="w-4 h-4 cursor-pointer"
                    />
                    <span className="cursor-pointer">Download Resume</span>
                  </button>

                  {/* Mobile Contact Button */}
                  <a
                    href="mailto:your.email@example.com"
                    onClick={closeMenu}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold text-center shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 cursor-pointer"
                  >
                    <Image
                      src={assets.mail_icon}
                      alt="mail icon"
                      width={16}
                      height={16}
                      className="w-4 h-4 cursor-pointer"
                    />
                    <span className="cursor-pointer">Get In Touch</span>
                  </a>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>

      {/* Scroll to Top Button - Hidden when menu is open */}
      <AnimatePresence>
        {showScrollTop && !isMenuOpen && (
          <motion.button
            variants={scrollTopVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            whileHover="hover"
            whileTap="tap"
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-40 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center group cursor-pointer"
          >
            <motion.div
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="flex flex-col items-center"
            >
              <Image
                src={assets.right_arrow_white}
                alt="scroll to top"
                width={20}
                height={20}
                className="w-5 h-5 transform -rotate-90 group-hover:scale-110 transition-transform duration-200 cursor-pointer"
              />
            </motion.div>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;