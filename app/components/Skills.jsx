"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import Image from "next/image";

const Skills = () => {
  const skillsData = [
    {
      category: "Frontend",
      skills: [
        { name: "React.js", icon: "/icons/react-svgrepo-com.svg", color: "from-cyan-500 to-blue-500" },
        { name: "Next.js", icon: "/icons/nextjs-svgrepo-com.svg", color: "from-gray-800 to-gray-600" },
        { name: "JavaScript", icon: "/icons/js-svgrepo-com.svg", color: "from-yellow-400 to-yellow-600" },
        { name: "TypeScript", icon: "/icons/typescript-official-svgrepo-com.svg", color: "from-blue-600 to-blue-800" },
        { name: "Redux Toolkit", icon: "/icons/redux-svgrepo-com.svg", color: "from-purple-500 to-purple-700" },
        { name: "HTML5", icon: "/icons/html-5-svgrepo-com.svg", color: "from-orange-500 to-red-500" },
        { name: "CSS3", icon: "/icons/css-3-svgrepo-com (1).svg", color: "from-blue-400 to-blue-600" },
        { name: "Tailwind CSS", icon: "/icons/tailwind-svgrepo-com.svg", color: "from-teal-400 to-cyan-500" },
      ]
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", icon: "/icons/node-js-svgrepo-com.svg", color: "from-green-500 to-green-700" },
        { name: "Express.js", icon: "/icons/express-svgrepo-com.svg", color: "from-gray-600 to-gray-800" },
        { name: "MongoDB", icon: "/icons/mongodb-logo-svgrepo-com.svg", color: "from-green-600 to-green-800" },
        { name: "Python", icon: "/icons/python-svgrepo-com.svg", color: "from-blue-500 to-yellow-500" },
        { name: "Firebase", icon: "/icons/firebase-svgrepo-com.svg", color: "from-yellow-500 to-orange-500" },
        { name: "REST API", icon: "/icons/api-svgrepo-com.svg", color: "from-purple-500 to-pink-500" }
      ]
    },
    {
      category: "Tools & Others",
      skills: [
        { name: "Git", icon: "/icons/git-svgrepo-com.svg", color: "from-orange-500 to-red-600" },
        { name: "GitHub", icon: "/icons/github-142-svgrepo-com.svg", color: "from-gray-700 to-gray-900" },
        { name: "VS Code", icon: "/icons/vs-code-svgrepo-com.svg", color: "from-blue-500 to-blue-700" },
        { name: "Figma", icon: "/icons/figma-svgrepo-com.svg", color: "from-purple-500 to-pink-500" },
        { name: "Postman", icon: "/icons/postman-icon-svgrepo-com.svg", color: "from-orange-500 to-orange-700" },
        { name: "Vercel", icon: "/icons/vercel-icon-svgrepo-com.svg", color: "from-black to-gray-800" }
      ]
    }
  ];

  return (
    <section id="skills" className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
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
            My <span className="text-blue-600">Skills</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Categories */}
        <div className="space-y-12">
          {skillsData.map((category, categoryIndex) => (
            <SkillCategory 
              key={category.category}
              category={category}
              index={categoryIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Skill Category Component
const SkillCategory = ({ category, index }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="bg-transparent rounded-3xl p-4 sm:p-6 lg:p-8"
    >
      <motion.h3 
        className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 sm:mb-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
      >
        {category.category}
      </motion.h3>

      {/* Responsive Grid with smaller gaps */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4">
        {category.skills.map((skill, skillIndex) => (
          <SkillCard 
            key={skill.name}
            skill={skill}
            index={skillIndex}
            categoryIndex={index}
            isInView={isInView}
          />
        ))}
      </div>
    </motion.div>
  );
};

// Skill Card Component
const SkillCard = ({ skill, index, categoryIndex, isInView }) => {
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 20
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: (categoryIndex * 0.1) + (index * 0.1),
        ease: "backOut"
      }
    }
  };

  const hoverVariants = {
    hover: {
      scale: 1.05,
      y: -5,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  const iconVariants = {
    normal: {
      rotate: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    hover: {
      rotate: [0, -5, 5, 0],
      scale: 1.1,
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileHover="hover"
      className="group cursor-pointer flex-shrink-0"
    >
      <motion.div
        variants={hoverVariants}
        className="bg-gradient-to-br from-white/80 to-gray-50/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-2 sm:p-3 shadow-md hover:shadow-lg transition-all duration-300 border border-white/50 group-hover:border-blue-200/50 h-full flex flex-col items-center justify-center text-center min-w-[80px] sm:min-w-[100px]"
      >
        
        {/* Skill Icon with SVG */}
        <motion.div
          variants={iconVariants}
          initial="normal"
          whileHover="hover"
          className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-r ${skill.color} flex items-center justify-center mb-2 sm:mb-3 shadow-md group-hover:shadow-lg transition-all duration-300 p-1 sm:p-2`}
        >
          <div className="w-8 h-8 sm:w-10 sm:h-10 relative">
            <Image
              src={skill.icon}
              alt={skill.name}
              fill
              className="object-contain"
              onError={(e) => {
                // Fallback to text if image fails to load
                e.target.style.display = 'none';
                const fallback = e.target.parentElement.querySelector('.fallback-text');
                if (fallback) fallback.style.display = 'flex';
              }}
            />
            {/* Fallback text - hidden by default */}
            <div className="fallback-text w-full h-full hidden items-center justify-center text-white font-bold text-[10px] sm:text-xs">
              {skill.name.split(' ')[0]}
            </div>
          </div>
        </motion.div>

        {/* Skill Name */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: (categoryIndex * 0.1) + (index * 0.1) + 0.2 }}
          className="text-xs sm:text-sm font-semibold text-gray-700 group-hover:text-gray-900 transition-colors duration-300 line-clamp-2"
        >
          {skill.name}
        </motion.span>
      </motion.div>
    </motion.div>
  );
};

export default Skills;