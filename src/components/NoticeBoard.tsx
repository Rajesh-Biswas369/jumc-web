"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock } from 'lucide-react';

const EventCard = ({ title, date, time, venue, status, type, className }: { title: string, date: string, time: string, venue: string, status: string, type: 'live' | 'upcoming', className?: string }) => {
  return (
    <motion.div 
      className={`relative p-4 md:p-6 rounded-3xl bg-black/30 backdrop-blur-md border border-white/10 overflow-hidden group flex flex-col justify-between ${className}`}
      whileHover={{ y: -5, boxShadow: '0 10px 30px -10px rgba(0,0,0,0.5)' }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="flex justify-between items-start mb-6">
        <div className="flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-semibold text-white shadow-sm border border-white/10">
          {type === 'live' && (
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-crimson opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-crimson"></span>
            </span>
          )}
          {status}
        </div>
        <div className="p-2 bg-white/10 rounded-full text-white">
          <Calendar size={18} />
        </div>
      </div>
      
      <div>
        <h3 className="text-2xl font-bold text-white mb-4 leading-tight group-hover:text-crimson transition-colors">{title}</h3>
        <div className="space-y-2 text-sm text-white/70 font-medium">
          <div className="flex items-center gap-2">
            <Clock size={14} className="text-crimson" />
            <span>{date} • {time}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={14} className="text-crimson" />
            <span>{venue}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function NoticeBoard() {
  return (
    <section id="events" className="w-full max-w-7xl mx-auto px-6 py-24">
      <div className="mb-12">
        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
          Upcoming <span className="text-crimson">Events</span>
        </h2>
        <p className="text-lg text-white/80 max-w-2xl">
          Mark your calendars. From intimate acoustic sessions to grand annual festivals, be part of Jadavpur University's most anticipated musical moments.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px]">
        <EventCard 
          title="Eastern Solo Auditions"
          date="Oct 12, 2026"
          time="10:00 AM"
          venue="OAT, Jadavpur University"
          status="Live Now"
          type="live"
          className="md:col-span-2 lg:col-span-2 md:row-span-1"
        />
        <EventCard 
          title="Band Showcase"
          date="Oct 20, 2026"
          time="5:00 PM"
          venue="Subarna Jayanti Bhavan"
          status="Upcoming"
          type="upcoming"
          className="md:col-span-1 lg:col-span-1 md:row-span-2"
        />
        <EventCard 
          title="Acoustic Evening"
          date="Nov 05, 2026"
          time="4:30 PM"
          venue="Green Zone"
          status="Upcoming"
          type="upcoming"
          className="md:col-span-1 lg:col-span-1 md:row-span-1"
        />
        <EventCard 
          title="SPARKZ Annual Fest"
          date="Dec 15-18, 2026"
          time="All Day"
          venue="Main Grounds"
          status="Announced"
          type="upcoming"
          className="md:col-span-2 lg:col-span-1 md:row-span-1 bg-gradient-to-br from-white/20 to-white/5"
        />
      </div>
    </section>
  );
}
