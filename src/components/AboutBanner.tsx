import React, { useState } from 'react';
import { Calendar, MapPin, Mail, Phone, Copy, Check, MessageSquare } from 'lucide-react';
import { ProfileData } from '../types/portfolio';

interface AboutBannerProps {
  profile: ProfileData;
  onOpenContact: () => void;
}

export const AboutBanner: React.FC<AboutBannerProps> = ({ profile, onOpenContact }) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section id="about" className="bg-[#13221B] text-white py-14 lg:py-18 relative overflow-hidden border-y border-[#D4A359]/20">
      {/* Background Dotted Grid Accent (top right matching image) */}
      <div className="absolute top-6 right-8 sm:right-16 grid grid-cols-4 gap-2 opacity-35 pointer-events-none select-none">
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#D4A359]" />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Bio */}
          <div className="lg:col-span-5 space-y-4 text-left">
            <span className="text-xs font-semibold tracking-[0.25em] text-[#D4A359] uppercase block">
              ABOUT ME
            </span>
            <h2 className="font-serif-display text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
              {profile.aboutTitle}
            </h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-light">
              {profile.aboutBio}
            </p>
          </div>

          {/* Center Column: Meta Details */}
          <div className="lg:col-span-4 space-y-3.5 sm:space-y-4 text-left border-l-0 lg:border-l border-white/10 lg:pl-8">
            {/* Birthday */}
            <div className="flex items-center gap-3 text-sm text-gray-200">
              <div className="w-8 h-8 rounded-full bg-[#1F3327] flex items-center justify-center shrink-0 border border-[#D4A359]/30">
                <Calendar className="w-4 h-4 text-[#D4A359]" />
              </div>
              <span className="font-medium">{profile.birthDate}</span>
            </div>

            {/* Location */}
            <div className="flex items-center gap-3 text-sm text-gray-200">
              <div className="w-8 h-8 rounded-full bg-[#1F3327] flex items-center justify-center shrink-0 border border-[#D4A359]/30">
                <MapPin className="w-4 h-4 text-[#D4A359]" />
              </div>
              <span className="font-medium">{profile.location}</span>
            </div>

            {/* Email with copy button */}
            <div className="flex items-center justify-between gap-2 text-sm text-gray-200 group bg-[#1B2F23]/40 p-1.5 pr-3 rounded-xl border border-white/5">
              <div className="flex items-center gap-3 truncate">
                <div className="w-8 h-8 rounded-full bg-[#1F3327] flex items-center justify-center shrink-0 border border-[#D4A359]/30">
                  <Mail className="w-4 h-4 text-[#D4A359]" />
                </div>
                <a
                  href={`mailto:${profile.email}`}
                  className="font-medium hover:text-[#D4A359] transition-colors truncate"
                  title="Send email"
                >
                  {profile.email}
                </a>
              </div>
              <button
                onClick={() => handleCopy(profile.email, 'email')}
                className="text-gray-400 hover:text-white p-1 rounded transition-colors"
                title="Copy email"
              >
                {copiedField === 'email' ? (
                  <Check className="w-4 h-4 text-green-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Phone & WhatsApp */}
            <div className="flex items-center justify-between gap-2 text-sm text-gray-200 group bg-[#1B2F23]/40 p-1.5 pr-3 rounded-xl border border-white/5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#1F3327] flex items-center justify-center shrink-0 border border-[#D4A359]/30">
                  <Phone className="w-4 h-4 text-[#D4A359]" />
                </div>
                <a
                  href={`tel:${profile.phone}`}
                  className="font-medium hover:text-[#D4A359] transition-colors font-mono tracking-wider"
                >
                  {profile.phone}
                </a>
              </div>
              <div className="flex items-center gap-1">
                <a
                  href={`https://wa.me/${profile.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2 py-1 bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#25D366] text-xs font-semibold rounded-md flex items-center gap-1 transition-colors"
                  title="Chat on WhatsApp"
                >
                  <MessageSquare className="w-3 h-3" />
                  <span>WA</span>
                </a>
                <button
                  onClick={() => handleCopy(profile.phone, 'phone')}
                  className="text-gray-400 hover:text-white p-1 rounded transition-colors"
                  title="Copy phone"
                >
                  {copiedField === 'phone' ? (
                    <Check className="w-4 h-4 text-green-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Circular Gold Brand Seal Emblem */}
          <div className="lg:col-span-3 flex justify-center lg:justify-end">
            <div className="relative group cursor-pointer" onClick={onOpenContact}>
              {/* Gold Ring Seal */}
              <div className="w-44 h-44 sm:w-48 sm:h-48 rounded-full border-2 border-[#D4A359]/80 flex flex-col items-center justify-center p-4 relative shadow-lg bg-[#182C22]/50 backdrop-blur-xs transform transition-transform group-hover:scale-105">
                {/* Botanical branch inside seal */}
                <svg
                  className="absolute right-3 bottom-5 w-14 h-14 text-[#D4A359]/70 transform rotate-12 pointer-events-none"
                  viewBox="0 0 100 100"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M20,90 Q50,50 80,15" strokeLinecap="round" />
                  <path d="M30,70 Q45,60 40,50 Q30,65 30,70 Z" fill="currentColor" />
                  <path d="M45,55 Q60,45 55,35 Q45,50 45,55 Z" fill="currentColor" />
                  <path d="M60,40 Q75,30 70,20 Q60,35 60,40 Z" fill="currentColor" />
                  <path d="M72,25 Q82,18 78,10 Q70,20 72,25 Z" fill="currentColor" />
                </svg>

                {/* Big Serif Initial */}
                <span className="font-serif-display text-5xl sm:text-6xl text-[#D4A359] font-bold leading-none select-none">
                  {profile.name.charAt(0)}
                </span>

                {/* Script Name */}
                <span className="font-script text-2xl sm:text-3xl text-[#D4A359] -mt-1 leading-tight select-none">
                  {profile.name} Graphics
                </span>

                {/* Subtitle */}
                <span className="text-[9px] sm:text-[10px] tracking-[0.25em] text-[#D4A359]/90 uppercase font-semibold mt-1">
                  DESIGNER
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
