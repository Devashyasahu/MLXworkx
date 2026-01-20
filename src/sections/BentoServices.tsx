"use client";
import React, { useRef } from 'react';
import { motion } from "framer-motion";

const capabilities = [
  { 
    id: "01", 
    title: "Requirement Intake", 
    desc: "Digital CAD analysis of tolerance and constraints by our specialized team.", 
    video: "/images/video1.mp4", 
    thumb: "/images/drill.jpg" 
  },
  { 
    id: "02", 
    title: "Engineering Review", 
    desc: "Intelligent matching with top-tier facilities in our global supply chain.", 
    video: "/images/video2.mp4", 
    thumb: "/images/robot.jpg" 
  },
  { 
    id: "03", 
    title: "Network Routing", 
    desc: "Intelligent production with top-tier facilities in our global supply chain.", 
    video: "/images/video 3.mp4", 
    thumb: "/images/sparks.jpg" 
  },
  { 
    id: "04", 
    title: "Quality Logistics", 
    desc: "Real-time production tracking with automated quality certification.", 
    video: "/images/video4.mp4", 
    thumb: "/images/robot.jpg" 
  }
];

// Helper Component for the Video Card
const VideoCard = ({ item }: { item: any }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovering, setIsHovering] = React.useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Video play failed, that's ok - image will show
      });
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-full max-h-[500px] rounded-[40px] overflow-hidden border-8 border-white shadow-2xl bg-slate-200 group cursor-pointer"
    >
      {/* Fallback Image */}
      <img 
        src={item.thumb}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Video (if available) */}
      <video
        ref={videoRef}
        src={item.video}
        poster={item.thumb}
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-0 group-hover:opacity-100"
      />

      {/* Play Button Indicator */}
      <motion.div
        initial={{ scale: 1, opacity: 0.7 }}
        animate={isHovering ? { scale: 1.1, opacity: 1 } : { scale: 1, opacity: 0.7 }}
        className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-all duration-300"
      >
        <motion.div
          animate={isHovering ? { scale: 1.2 } : { scale: 1 }}
          className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center shadow-xl"
        >
          <svg className="w-10 h-10 text-cyan-600 ml-1" fill="currentColor" viewBox="0 0 20 20">
            <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
          </svg>
        </motion.div>
      </motion.div>

      {/* Module Badge */}
      <div className="absolute top-6 left-6 bg-slate-950 text-white px-5 py-2 rounded-full font-black text-xs tracking-tighter">
        MOD {item.id}
      </div>
    </div>
  );
};

export default function BentoServices() {
  return (
    <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 scroll-smooth">
      {/* SECTION HEADING */}
      <div className="h-screen w-full flex items-center justify-center px-6 md:px-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-cyan-400 font-mono text-xs tracking-[0.4em] uppercase font-bold mb-6 block"
          >
            ✦ Core Capabilities
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-[0.9] mb-6"
          >
            Managed<br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">Supply Chain</span><br />
            Solutions
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-slate-300 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto"
          >
            End-to-end manufacturing management from design to delivery
          </motion.p>
        </motion.div>
      </div>

      {/* CAPABILITY SECTIONS */}
      {capabilities.map((item, idx) => {
        const isEven = idx % 2 === 0;
        return (
          <div 
            key={idx} 
            className="h-screen w-full flex items-center justify-center snap-start px-6 md:px-20"
          >
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center bg-gradient-to-br from-slate-800 to-slate-900 rounded-[48px] overflow-hidden border border-cyan-500/20 shadow-2xl shadow-cyan-500/10 max-w-7xl w-full h-[90vh]`}
            >
              {/* VIDEO SIDE (Alternates per section) */}
              <div className="w-full lg:w-1/2 h-full p-8 lg:p-14 flex items-center justify-center">
                <VideoCard item={item} />
              </div>

              {/* TEXT SIDE */}
              <div className="w-full lg:w-1/2 p-10 lg:p-20 text-left flex flex-col justify-center bg-gradient-to-br from-slate-800/50 to-slate-900/50">
                <motion.span 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-cyan-400 font-mono text-xs tracking-[0.4em] uppercase font-bold mb-6 flex items-center gap-2"
                >
                  <span className="text-cyan-500">✦</span> Managed Capabilities
                </motion.span>
                
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-4xl lg:text-7xl font-black uppercase tracking-tight leading-[1.1] mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent"
                >
                  {item.title}
                </motion.h3>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-slate-300 text-lg lg:text-xl font-medium leading-relaxed max-w-md mt-4 mb-2"
                >
                  {item.desc}
                </motion.p>
                
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-12 flex items-center gap-4"
                >
                  <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-transparent rounded-full" />
                  <span className="text-cyan-400 font-black uppercase text-xs tracking-[0.3em]">✓ Verified Node</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        );
      })}
    </section>
  );
}