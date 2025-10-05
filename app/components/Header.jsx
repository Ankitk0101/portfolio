"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

function Header() {
  // Enhanced animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const profileVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "backOut",
      },
    },
  };

  const handWaveVariants = {
    wave: {
      rotate: [0, -15, 10, -15, 0],
      transition: {
        duration: 1.2,
        repeat: Infinity,
        repeatDelay: 3,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      y: -2,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  const floatingVariants = {
    float: {
      y: [0, -8, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  // Titles to cycle through
  const titles = [
    "Full Stack Developer",
    "MERN Stack Specialist",
    "Frontend Developer",
    "Problem Solver",
    "Backend Developer"
  ];

  // Resume download handler
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

  return (
    <section
      id="home"
      className="min-h-screen w-full flex items-center justify-center px-4 sm:px-6 lg:px-8 
             bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden pt-32"
    >
      {/* Background Animated Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-20 left-10 w-16 h-16 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full opacity-20 blur-xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-20 right-10 w-12 h-12 bg-gradient-to-r from-pink-200 to-orange-200 rounded-full opacity-20 blur-xl"
        />
      </div>

      <div className="max-w-4xl mx-auto w-full text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-10"
        >
          {/* Profile Image - Increased size */}
          <motion.div
            className="flex justify-center"
            variants={profileVariants}
          >
            <motion.div
              className="relative"
              animate="float"
              variants={floatingVariants}
            >
              <Image
                src={assets.profile_img}
                alt="Profile"
                width={180}
                height={180}
                className="rounded-full w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 border-4 border-white shadow-2xl"
              />
              {/* Animated Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 rounded-full border-2 border-transparent border-t-blue-500 border-r-purple-500 -z-10"
              />
            </motion.div>
          </motion.div>

          {/* Content - Increased spacing */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <motion.h3 className="flex items-center justify-center gap-3 text-lg sm:text-xl md:text-2xl text-gray-700 font-medium">
              <span>Hello, I'm</span>
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Ankit Kumar
              </span>
              <motion.div variants={handWaveVariants} animate="wave">
                <Image
                  src={assets.hand_icon}
                  alt="Waving hand"
                  width={32}
                  height={32}
                  className="w-6 h-6 sm:w-7 sm:h-7"
                />
              </motion.div>
            </motion.h3>

            {/* Typing Animation - Increased height */}
            <div className="min-h-[70px] sm:min-h-[80px] flex items-center justify-center">
              <TypingAnimation titles={titles} />
            </div>

            {/* Description - Increased text size */}
            <motion.p
              className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed px-4"
              variants={itemVariants}
            >
              A passionate{" "}
              <span className="font-semibold text-blue-600">Web Developer</span>
              dedicated to building modern, scalable applications. I enjoy
              transforming real-world problems into{" "}
              <span className="font-semibold text-purple-600">
                innovative digital products
              </span>
              , with a focus on clean code, great user experience, and
              performance.
            </motion.p>
          </motion.div>

          {/* CTA Buttons - Increased spacing and size */}
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4 pt-4"
            variants={itemVariants}
          >
            <motion.a
              href="#contact"
              className="group relative px-8 sm:px-10 py-3 sm:py-3.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex items-center justify-center gap-3"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              {/* Button Shine Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.8 }}
              />
              <span>Let's Connect</span>
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Image
                  src={assets.right_arrow_white}
                  alt="Arrow"
                  width={18}
                  height={18}
                  className="w-4 h-4"
                />
              </motion.div>
            </motion.a>

            {/* Updated Resume Button */}
            <motion.button
              onClick={handleResumeDownload}
              className="group px-8 sm:px-10 py-3 sm:py-3.5 rounded-full bg-white text-gray-800 font-semibold text-lg border-2 border-gray-200 hover:border-blue-300 shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-3 hover:bg-gray-50 cursor-pointer"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <span>Resume</span>
              <motion.div
                animate={{ y: [0, -2, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Image
                  src={assets.download_icon}
                  alt="Download"
                  width={18}
                  height={18}
                  className="w-4 h-4"
                />
              </motion.div>
            </motion.button>
          </motion.div>

          {/* Scroll Indicator - Increased spacing */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="pt-12"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
              onClick={() =>
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <span className="text-sm mb-2">Scroll to explore</span>
              <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-1 h-3 bg-gray-400 rounded-full mt-2"
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Typing Animation Component
const TypingAnimation = ({ titles }) => {
  const [currentTitleIndex, setCurrentTitleIndex] = React.useState(0);
  const [currentText, setCurrentText] = React.useState("");
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [typingSpeed, setTypingSpeed] = React.useState(100);

  React.useEffect(() => {
    const currentTitle = titles[currentTitleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing mode
        if (currentText.length < currentTitle.length) {
          setCurrentText(currentTitle.slice(0, currentText.length + 1));
          setTypingSpeed(100 + Math.random() * 50);
        } else {
          setTimeout(() => setIsDeleting(true), 1500);
          setTypingSpeed(80);
        }
      } else {
        // Deleting mode
        if (currentText.length > 0) {
          setCurrentText(currentTitle.slice(0, currentText.length - 1));
          setTypingSpeed(60);
        } else {
          setIsDeleting(false);
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
          setTypingSpeed(400);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentTitleIndex, titles, typingSpeed]);

  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
        <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
          {currentText}
        </span>
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="ml-1 inline-block w-1 h-8 sm:h-10 md:h-12 bg-gradient-to-b from-blue-500 to-purple-500 rounded-sm"
        />
      </h2>
    </motion.div>
  );
};

export default Header;