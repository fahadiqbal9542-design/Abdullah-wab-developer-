import React from 'react';
import { ArrowRight, Sparkles, Instagram } from 'lucide-react';
import { ProfileData } from '../types/portfolio';
import heroPortrait from '../assets/images/hero_portrait_designer_1790333644171.jpg';

interface HeroSectionProps {
  profile: ProfileData;
  onViewWork: () => void;
  onOpenManage: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  profile,
  onViewWork,
  onOpenManage,
}) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:py-20 bg-[#F3EFEA]">
      {/* Decorative Botanical Branch (Left Border SVG) */}
      <div className="absolute -left-12 top-10 w-48 sm:w-64 opacity-60 pointer-events-none select-none">
        <svg
          viewBox="0 0 200 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-[#36493E] transform -rotate-12"
        >
          <path
            d="M20 380 Q 80 200 120 40"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
          {/* Leaves */}
          <path
            d="M30 330 C 50 310 90 320 85 340 C 80 355 50 350 30 330 Z"
            fill="currentColor"
            opacity="0.8"
          />
          <path
            d="M50 280 C 80 250 120 270 110 290 C 95 305 60 300 50 280 Z"
            fill="currentColor"
            opacity="0.75"
          />
          <path
            d="M70 210 C 110 180 150 200 140 225 C 120 240 85 230 70 210 Z"
            fill="currentColor"
            opacity="0.85"
          />
          <path
            d="M90 140 C 130 110 170 130 160 150 C 140 165 105 160 90 140 Z"
            fill="currentColor"
            opacity="0.8"
          />
          <path
            d="M110 70 C 140 40 180 60 170 80 C 150 95 125 90 110 70 Z"
            fill="currentColor"
            opacity="0.75"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-7 text-left pl-0 sm:pl-4">
            {/* Small Greeting Kicker */}
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#1B2A22]/90 uppercase">
              <span>{profile.greeting}</span>
              <Sparkles className="w-3.5 h-3.5 text-[#D4A359] fill-[#D4A359]" />
            </div>

            {/* Headline lockup matching template */}
            <div className="relative">
              <h1 className="font-serif-display text-6xl sm:text-7xl lg:text-[5.5rem] xl:text-[6.2rem] font-bold text-[#182C22] tracking-tight leading-[0.95]">
                {profile.name}
              </h1>

              {/* Interlaced Cursive Script Layer */}
              <div className="font-script text-5xl sm:text-6xl lg:text-7xl xl:text-[5.2rem] text-[#C59B4B] -mt-5 sm:-mt-7 lg:-mt-9 ml-6 sm:ml-12 select-none pointer-events-none drop-shadow-xs">
                Graphics
              </div>

              {/* Sub-label */}
              <div className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-[0.35em] text-[#182C22] uppercase mt-1 sm:mt-2">
                DESIGNER
              </div>
            </div>

            {/* Dark Tag Badge */}
            <div className="pt-2">
              <span className="inline-block bg-[#13221B] text-white text-[11px] sm:text-xs font-semibold tracking-wider px-5 py-2.5 rounded-full shadow-xs">
                {profile.tagline}
              </span>
            </div>

            {/* Bio Paragraph */}
            <p className="text-sm sm:text-base text-[#1B2A22]/80 leading-relaxed max-w-lg font-normal">
              {profile.heroDescription}
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={onViewWork}
                className="group inline-flex items-center gap-3 bg-[#13221B] hover:bg-[#1B3326] text-white text-xs sm:text-sm font-semibold tracking-wider px-6 py-3.5 rounded-full shadow-md transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>VIEW MY WORK</span>
                <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </span>
              </button>

              <button
                onClick={onOpenManage}
                className="inline-flex items-center gap-2 bg-[#E6E0D6] hover:bg-[#D9D1C5] text-[#182C22] text-xs sm:text-sm font-medium px-5 py-3.5 rounded-full border border-[#182C22]/15 transition-colors cursor-pointer"
              >
                <span>Customize Template</span>
              </button>
            </div>
          </div>

          {/* Right Column: Arched Golden Portrait + Floating Social Card */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[460px]">
              {/* Floating 4-point gold sparkle stars */}
              <div className="absolute -top-4 left-6 z-20 text-[#D4A359] animate-pulse">
                ✦
              </div>
              <div className="absolute top-1/4 -left-6 z-20 text-[#D4A359] text-xl">
                ✦
              </div>
              <div className="absolute top-10 right-4 z-20 text-[#D4A359] text-lg">
                ✦
              </div>

              {/* Outer Deep Emerald Arch Backdrop */}
              <div className="absolute inset-0 top-12 left-4 right-0 bottom-0 bg-[#13221B] rounded-t-[180px] sm:rounded-t-[220px] -z-0 transform -rotate-1 translate-y-3 opacity-95"></div>

              {/* Main Golden Arched Frame */}
              <div className="relative z-10 rounded-t-[180px] sm:rounded-t-[220px] border-[5px] sm:border-[6px] border-[#D4A359] shadow-2xl overflow-hidden bg-[#243329]">
                <img
                  src={heroPortrait}
                  alt={`${profile.name} - Graphic Designer`}
                  className="w-full h-[440px] sm:h-[530px] lg:h-[570px] object-cover object-top filter brightness-[1.02] contrast-[1.03]"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle vignette scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none"></div>
              </div>

              {/* Floating Social Glass Card (Exact match to image.png) */}
              <div className="absolute -bottom-6 -right-2 sm:-right-6 z-30 bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 shadow-2xl border border-[#E5DFD5] max-w-[210px] sm:max-w-[240px] text-left transform hover:scale-105 transition-transform duration-200">
                <div className="space-y-3 text-xs sm:text-[13px]">
                  {/* Pinterest */}
                  <a
                    href={`https://pinterest.com/${profile.socials.pinterest}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 group text-[#1B2A22]"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#EFECE6] flex items-center justify-center shrink-0 group-hover:bg-[#13221B] group-hover:text-white transition-colors">
                      <span className="font-serif font-bold text-sm">P</span>
                    </div>
                    <div className="truncate">
                      <p className="font-semibold text-[11px] leading-tight text-[#1B2A22]">Pinterest</p>
                      <p className="text-[10px] text-gray-500 truncate group-hover:text-[#D4A359] transition-colors">
                        {profile.socials.pinterest}
                      </p>
                    </div>
                  </a>

                  {/* TikTok */}
                  <a
                    href={`https://tiktok.com/@${profile.socials.tiktok.replace('@', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 group text-[#1B2A22]"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#EFECE6] flex items-center justify-center shrink-0 group-hover:bg-[#13221B] group-hover:text-white transition-colors">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.47 6.27 6.27 0 0 0 1.87-4.47V8.87a8.28 8.28 0 0 0 4.9 1.57V7a4.84 4.84 0 0 1-1-.31z" />
                      </svg>
                    </div>
                    <div className="truncate">
                      <p className="font-semibold text-[11px] leading-tight text-[#1B2A22]">TikTok</p>
                      <p className="text-[10px] text-gray-500 truncate group-hover:text-[#D4A359] transition-colors">
                        {profile.socials.tiktok}
                      </p>
                    </div>
                  </a>

                  {/* Instagram */}
                  <a
                    href={`https://instagram.com/${profile.socials.instagram.replace('@', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 group text-[#1B2A22]"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#EFECE6] flex items-center justify-center shrink-0 group-hover:bg-[#13221B] group-hover:text-white transition-colors">
                      <Instagram className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <p className="font-semibold text-[11px] leading-tight text-[#1B2A22]">Instagram</p>
                      <p className="text-[10px] text-gray-500 truncate group-hover:text-[#D4A359] transition-colors">
                        {profile.socials.instagram}
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
