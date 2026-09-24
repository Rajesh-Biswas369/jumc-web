"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Countdown = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    setIsMounted(true);
    const targetDate = new Date('2026-12-31T00:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!isMounted) {
    return <div className="h-[120px] my-8" />;
  }

  const timeBlocks = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Mins', value: timeLeft.minutes },
    { label: 'Secs', value: timeLeft.seconds }
  ];

  return (
    <div className="flex flex-wrap justify-center gap-3 md:gap-6 my-8">
      {timeBlocks.map((block, idx) => (
        <motion.div 
          key={block.label}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1 }}
          className="flex flex-col items-center justify-center bg-white/40 backdrop-blur-md border border-charcoal/10 rounded-xl p-3 md:p-5 min-w-[70px] md:min-w-[90px] shadow-sm"
        >
          <span className="text-2xl md:text-4xl font-black text-charcoal tabular-nums">
            {block.value.toString().padStart(2, '0')}
          </span>
          <span className="text-xs md:text-sm font-bold uppercase tracking-wider text-crimson mt-1">
            {block.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
};

export default Countdown;
