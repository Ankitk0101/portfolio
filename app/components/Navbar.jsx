"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
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
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
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

  // Animation variants
  const navbarVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    }),
    hover: {
      scale: 1.05,
      color: "#6366f1",
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

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
      {/* Animated Background */}
      <motion.div 
        className="fixed top-0 right-0 w-11/12 -z-10"
        initial={{ translateY: "-80%", opacity: 0 }}
        animate={{ translateY: "-80%", opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </motion.div>

      {/* Main Navbar */}
      <motion.nav
        variants={navbarVariants}
        initial="hidden"
        animate="visible"
        className={`w-full fixed flex px-5 lg:px-8 xl:px-[8%] justify-between items-center z-50 mt-4 transition-all duration-300 ${
          isScrolled 
            ? "py-3 backdrop-blur-md shadow-lg rounded-full mx-4 mt-2 bg-white/90 border border-white/20" 
            : "py-4"
        }`}
      >
        {/* Logo */}
        <motion.a 
          href="#home"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center"
        >
          <Image
            src={assets.logo}
            width={60}
            height={60}
            className="w-12 h-12 lg:w-15 lg:h-15 rounded-full cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-300"
            alt="logo"
          />
        </motion.a>

        {/* Desktop Navigation */}
        <motion.ul 
          className="hidden md:flex items-center gap-2 lg:gap-3 rounded-full px-8 py-3 backdrop-blur-sm shadow-lg border bg-white/80 border-white/20"
          initial="hidden"
          animate="visible"
        >
          {navItems.map((item, index) => (
            <motion.li key={item.name} custom={index} variants={navItemVariants}>
              <a
                href={item.href}
                className={`relative px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? "text-blue-600 bg-blue-50 font-semibold"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {item.name}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute inset-0 rounded-full -z-10 bg-blue-100"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </a>
            </motion.li>
          ))}
        </motion.ul>

        {/* Right Side Actions */}
        <div className="flex items-center gap-4">
          {/* Get In Touch Button */}
          <motion.a
            href="mailto:your.email@example.com"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-blue-600 to-purple-600 text-white"
          >
            <Image
              src={assets.mail_icon}
              alt="mail icon"
              width={16}
              height={16}
              className="w-4 h-4"
            />
            <span className="font-semibold text-sm hidden sm:inline">Get in Touch</span>
          </motion.a>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={openMenu}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="block md:hidden ml-2 p-2 rounded-full transition-colors duration-200 hover:bg-gray-100"
          >
            <Image 
              src={assets.menu_black} 
              alt="Menu" 
              width={24} 
              height={24} 
              className="w-6" 
            />
          </motion.button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeMenu}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
              />
              
              {/* Mobile Menu Panel */}
              <motion.div
                variants={mobileMenuVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="fixed top-0 right-0 bottom-0 w-80 shadow-2xl z-50 md:hidden border-l bg-white border-gray-200"
              >
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <Image
                      src={assets.logo}
                      width={40}
                      height={40}
                      className="w-10 h-10 rounded-full"
                      alt="logo"
                    />
                    <span className="font-bold text-gray-800">
                      Portfolio
                    </span>
                  </motion.div>
                  
                  <div className="flex items-center gap-2">
                    <motion.button
                      onClick={closeMenu}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 rounded-full transition-colors duration-200 hover:bg-gray-100"
                    >
                      <Image
                        src={assets.close_black}
                        alt="Close"
                        width={20}
                        height={20}
                        className="w-5"
                      />
                    </motion.button>
                  </div>
                </div>

                {/* Menu Items */}
                <nav className="p-6">
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
                          className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                            activeSection === item.id
                              ? "bg-blue-600 text-white shadow-lg"
                              : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                          }`}
                        >
                          <div className={`w-2 h-2 rounded-full ${
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

                {/* Mobile Contact Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="absolute bottom-8 left-6 right-6"
                >
                  <motion.a
                    href="mailto:your.email@example.com"
                    onClick={closeMenu}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold text-center shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Image
                      src={assets.mail_icon}
                      alt="mail icon"
                      width={16}
                      height={16}
                      className="w-4 h-4"
                    />
                    Get In Touch
                  </motion.a>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            variants={scrollTopVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            whileHover="hover"
            whileTap="tap"
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-40 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center group"
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
                className="w-5 h-5 transform -rotate-90 group-hover:scale-110 transition-transform duration-200"
              />
            </motion.div>
            
            {/* Pulse effect */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 -z-10"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;