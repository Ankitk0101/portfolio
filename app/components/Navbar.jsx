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
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      document.documentElement.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.documentElement.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (!isMenuOpen) {
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
    const link = document.createElement('a');
    link.href = 'resume/Ankit_Kumar_Resume_.pdf';
    link.download = 'Ankit_Kumar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.open('resume/Ankit_Kumar_Resume_.pdf', '_blank');
  };

  const navItems = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Contact", href: "#contact", id: "contact" },
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
      {/* Background */}
      <div className="fixed top-0 right-0 w-11/12 -z-10">
        <Image 
          src={assets.header_bg_color} 
          alt="" 
          className="w-full" 
          sizes="(max-width: 768px) 100vw, 91.666667vw"
          priority
        />
      </div>

      {/* Fixed Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "py-3 backdrop-blur-md shadow-lg bg-white/95" 
            : "py-4 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo - Better positioned */}
            <a 
              href="#home"
              className="flex items-center shrink-0 cursor-pointer"
            >
              <Image
                src={assets.logo}
                width={50}
                height={50}
                className="w-10 h-10 lg:w-12 lg:h-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                alt="logo"
                sizes="50px"
                priority
              />
            </a>

            {/* Desktop Navigation - Better centering */}
            <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2">
              <div className="flex items-center gap-1 rounded-full px-6 py-2 backdrop-blur-sm shadow-lg bg-white/80 border border-white/20">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`px-4 py-2 rounded-full font-medium transition-all duration-300 text-sm cursor-pointer ${
                      activeSection === item.id
                        ? "text-blue-600 bg-blue-50 font-semibold"
                        : "text-gray-700 hover:text-blue-600 hover:bg-gray-100"
                    }`}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Right Side Actions - Better spacing and visibility */}
            <div className="flex items-center gap-3">
              {/* Resume Button - Always visible */}
              <button
                onClick={handleResumeDownload}
                className="flex items-center gap-2 px-4 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-green-600 to-blue-600 text-white hover:scale-105 text-sm font-medium cursor-pointer"
              >
                <Image
                  src={assets.download_icon}
                  alt="download icon"
                  width={16}
                  height={16}
                  className="w-4 h-4 cursor-pointer"
                  sizes="16px"
                />
                <span className="cursor-pointer">Resume</span>
              </button>

              {/* Get In Touch Button - Visible on medium screens and up */}
              <a
                href="mailto:your.email@example.com"
                className="hidden md:flex items-center gap-2 px-4 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:scale-105 text-sm font-medium cursor-pointer"
              >
                <Image
                  src={assets.mail_icon}
                  alt="mail icon"
                  width={16}
                  height={16}
                  className="w-4 h-4 cursor-pointer"
                  sizes="16px"
                />
                <span className="cursor-pointer">Get in Touch</span>
              </a>

              {/* Mobile Menu Button - Show on smaller screens */}
              <button
                onClick={openMenu}
                className="lg:hidden ml-2 p-2 rounded-full transition-colors duration-200 hover:bg-gray-100 cursor-pointer"
              >
                <Image 
                  src={assets.menu_black} 
                  alt="Menu" 
                  width={24} 
                  height={24} 
                  className="w-6 cursor-pointer" 
                  sizes="24px"
                />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence mode="wait">
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-40 lg:hidden cursor-pointer"
            />
            
            {/* Mobile Menu Panel */}
            <motion.div
              key="mobile-menu"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 right-0 bottom-0 w-80 shadow-2xl z-50 lg:hidden bg-white/98 backdrop-blur-lg border-l border-white/30"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200/40 bg-white/95">
                <div className="flex items-center gap-3 cursor-pointer">
                  <Image
                    src={assets.logo}
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full cursor-pointer"
                    alt="logo"
                    sizes="40px"
                  />
                  <span className="font-bold text-gray-800 cursor-pointer">
                    Portfolio
                  </span>
                </div>
                
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
                    sizes="20px"
                  />
                </button>
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
                    sizes="16px"
                  />
                  <span className="cursor-pointer">Download Resume</span>
                </button>

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
                    sizes="16px"
                  />
                  <span className="cursor-pointer">Get In Touch</span>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Scroll to Top Button */}
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
                sizes="20px"
              />
            </motion.div>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;