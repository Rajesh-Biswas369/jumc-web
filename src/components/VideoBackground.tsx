"use client";

import React, { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export default function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    // Play or pause based on current route
    if (videoRef.current) {
      if (isHomePage) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
      }
    }
  }, [isHomePage]);

  return (
    <div className="fixed inset-0 z-[-10] scale-[1.08] origin-center overflow-hidden bg-[#1A1A1A]">
      {/* Base overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />
      
      {/* Glassmorphism overlay for non-home pages */}
      {!isHomePage && (
        <div className="absolute inset-0 bg-black/40 backdrop-blur-lg z-20 transition-all duration-700 ease-in-out" />
      )}
      
      <video
        ref={videoRef}
        src="/videos/bg-loop.mp4"
        muted
        loop
        playsInline
        crossOrigin="anonymous"
        className="absolute inset-0 w-full h-full object-cover block"
      />
    </div>
  );
}
