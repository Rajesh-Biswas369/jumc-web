"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

interface ComingSoonProps {
  pageName: string;
}

export default function ComingSoon({ pageName }: ComingSoonProps) {
  return (
    <section className="relative w-full min-h-[80vh] flex flex-col items-center justify-center px-6 z-20 pt-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-10 md:p-16 max-w-2xl w-full text-center shadow-2xl flex flex-col items-center"
      >
        <span className="tracking-[0.3em] uppercase text-sm text-[#FAF9F6]/70 mb-4 font-semibold">
          {pageName}
        </span>
        
        <h1 className="text-5xl md:text-7xl font-serif italic font-bold text-[#E60026] drop-shadow-lg mb-2">
          Coming Soon
        </h1>
        
        <p className="mt-6 text-lg md:text-xl text-[#FAF9F6]/90 font-light max-w-md mx-auto">
          We are tuning our instruments. Stay tuned.
        </p>
        
        <Link href="/">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-10 flex items-center gap-3 bg-white text-[#1A1A1A] px-8 py-3.5 rounded-full font-bold uppercase text-sm tracking-wider hover:bg-white/90 transition-colors shadow-lg"
          >
            <ArrowLeft size={16} />
            Return to Home
          </motion.button>
        </Link>
      </motion.div>
    </section>
  );
}
