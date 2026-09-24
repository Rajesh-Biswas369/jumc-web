"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Countdown from './Countdown';

const VintageMic = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M30,35 C30,20 40,10 50,10 C60,10 70,20 70,35 L70,55 C70,70 60,80 50,80 C40,80 30,70 30,55 Z" />
    <path d="M35,25 L65,25 M32,35 L68,35 M32,45 L68,45 M35,55 L65,55 M38,65 L62,65" strokeWidth="1" />
    <path d="M20,45 C20,65 35,85 50,85 C65,85 80,65 80,45" />
    <line x1="50" y1="85" x2="50" y2="95" />
    <line x1="30" y1="95" x2="70" y2="95" strokeWidth="2" />
    <circle cx="50" cy="50" r="4" fill="currentColor" fillOpacity="0.2" />
  </svg>
);

const AcousticGuitar = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 200" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M50,150 C20,150 10,120 30,90 C40,75 35,60 45,50 C55,40 55,40 55,50 C65,60 60,75 70,90 C90,120 80,150 50,150 Z" />
    <circle cx="50" cy="105" r="14" />
    <rect x="46" y="10" width="8" height="80" />
    <rect x="42" y="5" width="16" height="15" rx="2" />
    <line x1="48" y1="25" x2="48" y2="115" strokeWidth="0.5" />
    <line x1="50" y1="25" x2="50" y2="115" strokeWidth="0.5" />
    <line x1="52" y1="25" x2="52" y2="115" strokeWidth="0.5" />
    <path d="M35,135 L65,135 M38,140 L62,140" />
  </svg>
);

const FloralVine = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M20,180 C50,150 20,100 80,80 C120,65 140,90 180,20" />
    <path d="M50,150 C40,140 30,145 35,160 C40,150 50,150 50,150 Z" fill="currentColor" fillOpacity="0.1"/>
    <path d="M80,80 C70,60 60,70 65,90 C70,80 80,80 80,80 Z" fill="currentColor" fillOpacity="0.1"/>
    <path d="M120,65 C110,45 100,55 105,75 C110,65 120,65 120,65 Z" fill="currentColor" fillOpacity="0.1"/>
    <path d="M140,90 C160,100 150,110 135,100 C145,100 140,90 140,90 Z" fill="currentColor" fillOpacity="0.1"/>
    <path d="M50,110 C80,130 90,160 120,140 C140,125 150,140 170,120" />
    <path d="M80,130 C70,120 60,125 65,140 C70,130 80,130 80,130 Z" fill="currentColor" fillOpacity="0.1"/>
    <path d="M140,125 C130,115 120,120 125,135 C130,125 140,125 140,125 Z" fill="currentColor" fillOpacity="0.1"/>
  </svg>
);

const MusicalStaff = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 300 100" fill="none" stroke="currentColor" strokeWidth="1">
    <path d="M10,20 C100,10 200,30 290,20" />
    <path d="M10,35 C100,25 200,45 290,35" />
    <path d="M10,50 C100,40 200,60 290,50" />
    <path d="M10,65 C100,55 200,75 290,65" />
    <path d="M10,80 C100,70 200,90 290,80" />
    
    <path d="M40,75 C30,75 25,65 35,55 C45,45 40,30 30,30 C20,30 15,40 25,50 C35,60 50,55 50,45 C50,30 40,20 35,10" strokeWidth="1.5" />
    
    <ellipse cx="100" cy="58" rx="6" ry="4" transform="rotate(-15 100 58)" fill="currentColor" fillOpacity="0.6"/>
    <line x1="105" y1="58" x2="105" y2="25" strokeWidth="1.5" />
    
    <ellipse cx="160" cy="43" rx="6" ry="4" transform="rotate(-15 160 43)" fill="currentColor" fillOpacity="0.6"/>
    <line x1="165" y1="43" x2="165" y2="10" strokeWidth="1.5" />
    <path d="M165,10 C175,10 180,20 180,30" strokeWidth="1.5" />
    
    <ellipse cx="220" cy="72" rx="6" ry="4" transform="rotate(-15 220 72)" fill="currentColor" fillOpacity="0.6"/>
    <line x1="225" y1="72" x2="225" y2="39" strokeWidth="1.5" />
    <ellipse cx="250" cy="57" rx="6" ry="4" transform="rotate(-15 250 57)" fill="currentColor" fillOpacity="0.6"/>
    <line x1="255" y1="57" x2="255" y2="24" strokeWidth="1.5" />
    <path d="M225,39 L255,24 L255,30 L225,45 Z" fill="currentColor" fillOpacity="0.6" stroke="none" />
  </svg>
);

const AnimatedElement = ({ children, delay, className, opacityRange }: { children: React.ReactNode, delay: number, className: string, opacityRange: number[] }) => (
  <motion.div
    className={`absolute pointer-events-none ${className}`}
    initial={{ y: 0, rotate: 0, opacity: opacityRange[0] }}
    animate={{ 
      y: [0, -15, 0], 
      rotate: [-3, 3, -3], 
      opacity: opacityRange
    }}
    transition={{ 
      duration: 12 + delay, 
      repeat: Infinity, 
      ease: "easeInOut" 
    }}
  >
    {children}
  </motion.div>
);

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-acoustic-bg flex flex-col items-center justify-center overflow-hidden pt-20">
      {/* Background Watermark Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <AnimatedElement delay={0} className="-left-32 top-10 w-[600px] text-charcoal" opacityRange={[0.03, 0.08, 0.03]}>
          <MusicalStaff />
        </AnimatedElement>
        
        <AnimatedElement delay={2} className="-right-10 top-20 w-[250px] text-charcoal rotate-12" opacityRange={[0.04, 0.1, 0.04]}>
          <AcousticGuitar />
        </AnimatedElement>

        <AnimatedElement delay={1} className="-left-10 -bottom-20 w-[350px] text-crimson" opacityRange={[0.02, 0.08, 0.02]}>
          <FloralVine />
        </AnimatedElement>

        <AnimatedElement delay={3} className="-right-20 -top-20 w-[350px] text-crimson scale-x-[-1]" opacityRange={[0.02, 0.08, 0.02]}>
          <FloralVine />
        </AnimatedElement>

        <AnimatedElement delay={4} className="right-20 bottom-10 w-[180px] text-charcoal" opacityRange={[0.04, 0.12, 0.04]}>
          <VintageMic />
        </AnimatedElement>

        <div className="absolute inset-0 bg-gradient-to-t from-acoustic-bg via-transparent to-acoustic-bg" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-black text-charcoal tracking-tighter mb-6">
            JADAVPUR UNIVERSITY
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-crimson to-red-600 mt-2">
              MUSIC CLUB
            </span>
          </h1>
        </motion.div>

        <motion.p 
          className="text-charcoal-muted text-lg md:text-xl max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Where acoustic elegance meets pure sound. Join the premier musical collective for creators, performers, and enthusiasts.
        </motion.p>

        <Countdown />

        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button className="w-full sm:w-auto px-8 py-4 bg-crimson text-white rounded-full font-bold uppercase tracking-widest hover:bg-red-700 transition-colors shadow-[0_0_15px_rgba(230,0,38,0.4)] hover:shadow-[0_0_25px_rgba(230,0,38,0.6)]">
            Explore Music
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-charcoal text-charcoal rounded-full font-bold uppercase tracking-widest hover:bg-charcoal/5 transition-colors">
            Join the Club
          </button>
        </motion.div>
      </div>
    </section>
  );
}
