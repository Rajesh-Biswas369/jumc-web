"use client";
import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

export function ColourWipe({ 
  children, 
  color = "bg-[#1A1A1A]" 
}: { 
  children: ReactNode, 
  color?: string 
}) {
  return (
    <div className="relative overflow-hidden w-full">
      {/* Wipe Overlay */}
      <motion.div
        className={`absolute inset-y-0 z-50 ${color}`}
        initial={{ left: 0, right: "100%" }}
        whileInView={{ 
          left: ["0%", "0%", "100%"], 
          right: ["100%", "0%", "0%"] 
        }}
        viewport={{ once: true, margin: "-20%" }}
        transition={{ duration: 1, times: [0, 0.5, 1], ease: "easeInOut" }}
      />
      
      {/* Content */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-20%" }}
        transition={{ delay: 0.5, duration: 0.1 }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export function FlowStack({ children, className = "" }: { children: ReactNode, className?: string }) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-20%" }}
    >
      {React.Children.map(children, (child) => (
        <motion.div variants={item} className="w-full h-full">
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
