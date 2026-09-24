"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Headphones, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative bg-black/40 backdrop-blur-md text-[#F7EBD0] border-t border-white/10 overflow-hidden">


      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Column 1: Brand */}
          <div className="flex flex-col space-y-4">
            <Link href="/" className="flex items-center group w-max">
              <img src="/jumc-logo.jpeg" alt="JUMC Logo" className="h-24 w-auto rounded-xl object-contain shadow-lg group-hover:scale-105 transition-transform" />
            </Link>
            <p className="text-lg font-medium text-[#F7EBD0]/80 italic">
              Where acoustic elegance meets pure sound.
            </p>
            <p className="text-sm text-[#F7EBD0]/60 leading-relaxed mt-4">
              Carrying forward the rich cultural legacy of Jadavpur University. A collective for creators, performers, and ardent music enthusiasts.
            </p>
          </div>

          {/* Column 2: Explore */}
          <div className="flex flex-col space-y-6 lg:pl-12">
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-crimson">Explore</h4>
            <nav className="flex flex-col space-y-3">
              {['Home', 'Events', 'Artists', 'About', 'Portal'].map((item) => (
                <Link key={item} href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="group flex items-center w-max">
                  <span className="text-[#F7EBD0]/70 group-hover:text-crimson font-medium tracking-wide transition-colors">
                    {item}
                  </span>
                  <motion.span 
                    className="ml-2 text-crimson opacity-0 group-hover:opacity-100"
                    initial={{ x: -10 }}
                    whileHover={{ x: 0 }}
                  >
                    →
                  </motion.span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3: Contact */}
          <div className="flex flex-col space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-crimson">Contact</h4>
            <div className="flex flex-col space-y-4 text-[#F7EBD0]/70 text-sm">
              <a href="mailto:contact@jumc.in" className="flex items-center gap-3 hover:text-[#F7EBD0] transition-colors group">
                <Mail size={18} className="group-hover:text-crimson transition-colors" />
                <span>contact@jumc.in</span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 flex-shrink-0 text-[#F7EBD0]/50" />
                <span className="leading-relaxed">
                  Jadavpur University Campus,<br />
                  188, Raja S.C. Mallick Rd,<br />
                  Kolkata, West Bengal 700032
                </span>
              </div>
            </div>
          </div>

          {/* Column 4: Connect */}
          <div className="flex flex-col space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-crimson">Connect</h4>
            <div className="flex items-center gap-4">
              <motion.a 
                href="https://www.instagram.com/ju_music_club" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:border-crimson hover:shadow-[0_0_15px_rgba(230,0,38,0.3)] hover:text-crimson transition-all"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.1 }}
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:border-crimson hover:shadow-[0_0_15px_rgba(230,0,38,0.3)] hover:text-crimson transition-all"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.1 }}
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:border-crimson hover:shadow-[0_0_15px_rgba(230,0,38,0.3)] hover:text-crimson transition-all"
              >
                <Headphones size={20} />
              </motion.a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium tracking-wider text-[#F7EBD0]/40 uppercase">
          <p>© 2026 Jadavpur University Music Club</p>
          <p className="flex items-center gap-2">
            Made with love <span className="text-crimson">♥</span> by jumc tech team
          </p>
        </div>
      </div>
    </footer>
  );
}
