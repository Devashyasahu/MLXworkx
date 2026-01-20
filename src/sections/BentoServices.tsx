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
    video: "/images/video3.mp4", 
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
    <section className="bg-white scroll-smooth">
      {capabilities.map((item, idx) => {
        const isEven = idx % 2 === 0;
        return (
          <div 
            key={idx} 
            className="h-screen w-full flex items-center justify-center snap-start px-6 md:px-20 border-b border-slate-100"
          >
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center bg-slate-50 rounded-[48px] overflow-hidden border border-slate-200 shadow-sm max-w-7xl w-full h-[85vh]`}
            >
              {/* VIDEO SIDE (Alternates per section) */}
              <div className="w-full lg:w-1/2 p-8 lg:p-14 h-1/2 lg:h-full flex items-center justify-center">
                <VideoCard item={item} />
              </div>

              {/* TEXT SIDE */}
              <div className="w-full lg:w-1/2 p-10 lg:p-20 text-left flex flex-col justify-center">
                <span className="text-cyan-600 font-mono text-xs tracking-[0.4em] uppercase font-bold mb-4">
                  // Managed Capabilities
                </span>
                
                <h3 className="text-slate-900 text-4xl lg:text-6xl font-black uppercase tracking-tighter leading-none mb-6">
                  {item.title}
                </h3>
                
                <p className="text-slate-600 text-lg lg:text-xl font-medium leading-relaxed max-w-md mt-4">
                  {item.desc}
                </p>
                
                <div className="mt-12 flex items-center gap-4">
                  <div className="h-2 w-20 bg-cyan-600 rounded-full" />
                  <span className="text-cyan-600 font-black uppercase text-xs tracking-[0.3em]">Verified Node</span>
                </div>
              </div>
            </motion.div>
          </div>
        );
      })}
    </section>
  );
}