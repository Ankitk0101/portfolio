"use client";
import React from "react";
import { assets } from "../../assets/assets";
import Image from "next/image";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section id="about" className="w-full mt-2 py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Heading Section - Above everything */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Content Section - Photo and Text Side by Side */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-48 h-48 md:w-64 md:h-64 rounded-3xl overflow-hidden shadow-2xl flex-shrink-0 border-4 border-white"
          >
            <Image
              src={assets.profile_img}
              alt="Profile"
              width={256}
              height={256}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex-1 text-center md:text-left"
          >
            <motion.h3
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-gray-800 mb-4"
            >
              Full-Stack Web Developer
            </motion.h3>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-gray-700 leading-relaxed mb-4 text-lg"
            >
              I am a <span className="font-semibold text-blue-600">Full-Stack Web Developer </span> 
              with experience in building responsive and dynamic applications using 
              modern technologies like React.js, Node.js, Express, and MongoDB.
            </motion.p>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-gray-700 leading-relaxed mb-4"
            >
              I hold a <span className="font-semibold text-blue-600">Bachelor's degree in Computer Applications (BCA)</span>.  
              Over time, I have worked on several projects that helped me improve my problem-solving 
              skills and deepen my understanding of full-stack development.  
            </motion.p>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-700 leading-relaxed"
            >
              What excites me most about development is the ability to transform ideas into 
              real-world applications that impact people's lives. I enjoy learning new technologies, 
              writing clean code, and collaborating with teams to create meaningful digital experiences.  
            </motion.p>
          </motion.div>
        </div>

         
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
        >
          {[
            {
              title: "Experience",
              description: "6+ months training in Masai School",
              icon: "💼"
            },
            {
              title: "Education", 
              description: "BCA Graduate",
              icon: "🎓"
            },
            {
              title: "Focus",
              description: "MERN Full-Stack & Modern Tech",
              icon: "🚀"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl shadow-lg border border-gray-100 text-center"
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <h4 className="font-bold text-gray-800 text-lg mb-2">{item.title}</h4>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;