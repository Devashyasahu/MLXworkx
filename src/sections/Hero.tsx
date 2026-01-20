"use client";
import React from 'react';
import { motion } from 'framer-motion';

const panels = [
  { id: 1, img: "/images/drill.jpg", label: "Precision" },
  { id: 2, img: "/images/robot.jpg", label: "Automation" },
  { id: 3, img: "/images/sparks.jpg", label: "Fabrication" },
  { id: 4, img: "/images/robot.jpg", label: "Quality" }
];

export default function Hero() {
  return (
    <section className="relative h-screen w-full bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 overflow-hidden flex flex-col justify-center" aria-label="Hero section">
      
      {/* BRIGHT ANIMATED BACKGROUND ORBS */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <motion.div 
          className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-400 rounded-full mix-blend-screen filter blur-3xl opacity-25"
          animate={{ y: [0, -50, 0], x: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-blue-400 rounded-full mix-blend-screen filter blur-3xl opacity-20"
          animate={{ y: [0, 50, 0], x: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      {/* BRIGHT BACKGROUND PANELS */}
      <div className="absolute inset-0 flex w-full h-full" aria-hidden="true">
        {panels.map((panel, i) => (
          <motion.div 
            key={panel.id} 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            className="relative flex-1 h-full border-r border-cyan-400/20 overflow-hidden group"
          >
            <motion.img 
              src={panel.img}
              alt={panel.label}
              className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-95 transition-opacity duration-500 brightness-110"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/5 to-slate-900/50" />
          </motion.div>
        ))}
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-20 flex-1 flex flex-col justify-center px-6 sm:px-16 md:px-28 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-white font-mono tracking-[0.25em] uppercase text-xs mb-6 block font-semibold"
          >
            MLXWORKX
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tight uppercase mb-6"
          >
            MANUFACTURING.<br />
            <span className="text-cyan-300">WITHOUT SOURCING</span><br />
            <span className="text-cyan-300">CHAOS.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-slate-300 text-lg sm:text-xl max-w-2xl font-medium leading-relaxed mb-12 italic"
          >
            From <span className="text-white font-semibold">Prototype to Production</span>, Managed.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-5"
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white text-slate-900 px-10 py-4 font-black uppercase tracking-widest text-sm rounded-lg transition-all shadow-xl hover:shadow-2xl border-2 border-white"
              aria-label="Launch a new project"
            >
              Launch Project
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-transparent border-2 border-white text-white px-10 py-4 font-black uppercase tracking-widest text-sm rounded-lg transition-all hover:bg-white hover:text-slate-900"
              aria-label="View network of facilities"
            >
              View Network
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* BOTTOM TEXT */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="relative z-10 px-6 sm:px-16 md:px-28 pb-12"
      >
        <p className="text-slate-400 font-mono text-xs uppercase tracking-[0.2em]">
          Est. 2026 // MLXWORKX
        </p>
      </motion.div>
    </section>
  );
}