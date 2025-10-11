"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { assets } from "@/assets/assets";

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: "Habit Tracker",
      description: "Habit Tracker is a full-stack web application designed to help users build and maintain positive habits",
      image: assets.Habit_Traker,  
      technologies: ["React", "FireBase"],
      liveUrl: "https://habit-traker-ankit-kumar.netlify.app/",
      githubUrl: "https://github.com/Ankitk0101/habit-tracking",
      featured: false,
      category: "FrontEnd"
    },
    {
      id: 2,
      title: "Destination-Recommendation-Platform",
      description: "TravelPath is a modern, full-stack web application that helps travelers discover and plan optimal routes between destinations with multiple transport options, pricing, and station details across Europe and India.",
      image: assets.Path,
      technologies: ["React.js", "Node.js", "Express.js", "MongoDb"],
      liveUrl: "https://destination-recommendation-platform-3.onrender.com/",
      githubUrl: "https://github.com/Ankitk0101/Destination-Recommendation-Platform",
      featured: false,
      category: "Full Stack"
    },
    {
      id: 3,
      title: "Smart Home",
      description: "Smart Home full-stack smart home system Interactive React interface connected to Firebase for real-time smart device control and status monitoring",
      image: assets.Room,
      technologies: ["React", "FireBase"],
      liveUrl: "https://smart-home-ankit-kumar.netlify.app/",
      githubUrl: "https://github.com/Ankitk0101/Smart-Home-Devices-Controller",
      featured: false,
      category: "Frontend"
    },
  ];

  return (
    <section id="projects" className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            My <span className="text-blue-600">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projectsData.map((project, index) => (
            <ProjectCard 
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Project Card Component
const ProjectCard = ({ project, index }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        delay: index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    hover: {
      y: -15,
      scale: 1.02,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    hover: {
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const badgeVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.5,
        ease: "backOut"
      }
    }
  };

  const techVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        delay: (index * 0.15) + (i * 0.1),
        ease: "backOut"
      }
    }),
    hover: {
      scale: 1.1,
      y: -2,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      y: -2,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.95
    }
  };

  const iconVariants = {
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileHover="hover"
      className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 cursor-pointer flex flex-col h-full"
    >
      {/* Project Image */}
      <div className="relative overflow-hidden h-48 flex-shrink-0">
        {project.image ? (
          <motion.div
            variants={imageVariants}
            className="w-full h-full relative"
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
            {/* Light overlay that darkens on hover */}
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/60 transition-all duration-300" />
          </motion.div>
        ) : (
          <motion.div
            variants={imageVariants}
            className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center"
          >
            <div className="text-4xl text-gray-400">
              {project.category === "Full Stack" && "🛒"}
              {project.category === "Web App" && "📱"}
              {project.category === "Frontend" && "💻"}
              {project.category === "Mobile" && "📲"}
              {project.category === "AI/ML" && "🤖"}
            </div>
          </motion.div>
        )}
        
        {/* Featured Badge */}
        {project.featured && (
          <motion.div
            variants={badgeVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg z-10"
          >
            ⭐ Featured
          </motion.div>
        )}

        {/* Category Badge */}
        <motion.div
          variants={badgeVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm z-10"
        >
          {project.category}
        </motion.div>

        {/* Overlay with Icons - FIXED: Only shows on hover */}
        <motion.div
          variants={overlayVariants}
          initial="hidden"
          whileHover="hover"
          className="absolute inset-0 bg-black/60 flex items-center justify-center gap-4 z-20 opacity-0"
        >
          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              variants={iconVariants}
              whileHover="hover"
              className="bg-white text-gray-900 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <ExternalLink className="w-5 h-5" />
            </motion.a>
          )}
          {project.githubUrl && (
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              variants={iconVariants}
              whileHover="hover"
              className="bg-white text-gray-900 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Github className="w-5 h-5" />
            </motion.a>
          )}
        </motion.div>
      </div>

      {/* Project Content - FIXED: Uses flex-col and flex-grow to push buttons to bottom */}
      <div className="p-6 flex flex-col flex-grow">
        <motion.h3 
          className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
        >
          {project.title}
        </motion.h3>
        
        <motion.p 
          className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
        >
          {project.description}
        </motion.p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, techIndex) => (
            <motion.span
              key={tech}
              custom={techIndex}
              variants={techVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover="hover"
              className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium hover:bg-gray-200 transition-colors duration-300 cursor-default"
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {/* Action Buttons - FIXED: Always at bottom */}
        <div className="flex gap-3 mt-auto">
          {project.liveUrl ? (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center py-3 px-4 rounded-lg font-semibold text-sm hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </motion.a>
          ) : (
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              disabled
              className="flex-1 bg-gray-400 text-white text-center py-3 px-4 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 cursor-not-allowed"
            >
              <ExternalLink className="w-4 h-4" />
              Coming Soon
            </motion.button>
          )}
          
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="flex-1 bg-gray-800 text-white text-center py-3 px-4 rounded-lg font-semibold text-sm hover:bg-gray-900 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            <Github className="w-4 h-4" />
            Code
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;