"use client";
import React from "react";
import { motion } from "framer-motion";
import { Heart, Coffee, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-6 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50 border-t border-gray-200/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left Side - Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-gray-600 text-sm"
          >
            <span>© {currentYear} Made with</span>
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                repeatDelay: 5
              }}
              className="flex items-center gap-1 text-red-500"
            >
              <Heart className="w-4 h-4 fill-current" />
            </motion.div>
            <span>by Ankit Kumar</span>
          </motion.div>

          {/* Center - Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex items-center gap-6 text-sm"
          >
            {[
              { name: "Home", href: "#home" },
              { name: "About", href: "#about" },
              { name: "Projects", href: "#projects" },
              { name: "Contact", href: "#contact" }
            ].map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover={{ 
                  scale: 1.05, 
                  y: -2,
                  color: "#6366f1"
                }}
                transition={{ duration: 0.2 }}
                className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium"
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>

          {/* Right Side - Social & Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            {/* Email */}
            <motion.a
              href="mailto:ankit933480@gmail.com"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors duration-300 text-sm"
            >
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">Get in Touch</span>
            </motion.a>


            
          </motion.div>
        </div>

        {/* Bottom Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mt-4"
        />
      </div>
    </footer>
  );
};

export default Footer;