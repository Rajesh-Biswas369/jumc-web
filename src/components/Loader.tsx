"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/40 backdrop-blur-xl">
      <div className="bg-white/5 border border-white/10 p-10 md:p-16 rounded-3xl shadow-2xl flex flex-col items-center">
        {/* Waveform / Beep Animation */}
        <div className="flex gap-2 items-center h-16 mb-8">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ height: ["16px", "64px", "16px"] }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: i * 0.15,
                ease: "easeInOut"
              }}
              className="w-2 md:w-3 bg-[#E60026] rounded-full"
            />
          ))}
        </div>
        
        {/* Loading Text with Blinking Dots */}
        <div className="text-white text-lg md:text-2xl font-medium tracking-[0.2em] flex items-end">
          LOADING
          <div className="flex ml-1">
            {[...Array(3)].map((_, i) => (
              <motion.span
                key={i}
                animate={{ opacity: [0.2, 1, 0.2] }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeInOut"
                }}
                className="text-[#E60026] text-3xl md:text-4xl leading-[0.5] ml-1"
              >
                .
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
