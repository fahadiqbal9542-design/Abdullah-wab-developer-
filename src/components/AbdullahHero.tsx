import React, { useState, useRef } from 'react';
import {
  Sparkles,
  ArrowUpRight,
  Calculator,
  Upload,
  Globe,
  CheckCircle2,
  Github,
  Code2,
  Play,
  Zap,
  RotateCcw,
  Flame,
} from 'lucide-react';

interface AbdullahHeroProps {
  heroImage: string;
  onHeroImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSetSchoolDeveloperImg?: () => void;
  onExploreApps: () => void;
  onOpenEstimator: () => void;
  onOpenWebsite?: () => void;
}

export const AbdullahHero: React.FC<AbdullahHeroProps> = ({
  heroImage,
  onHeroImageUpload,
  onSetSchoolDeveloperImg,
  onExploreApps,
  onOpenEstimator,
  onOpenWebsite,
}) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHoveringImg, setIsHoveringImg] = useState(false);

  // Name Running & Step-by-Step Color Animation States
  const [isNameHovered, setIsNameHovered] = useState(false);
  const [hoveredCharIndex, setHoveredCharIndex] = useState<number | null>(null);
  const [isNameRunning, setIsNameRunning] = useState(false);
  const [runKey, setRunKey] = useState(0);
  const runTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Letter spectrum for step-by-step color wave
  const nameLetters = [
    { char: 'A', color: '#f59e0b', shadow: 'rgba(245,158,11,0.6)', delay: 0 },
    { char: 'b', color: '#f97316', shadow: 'rgba(249,115,22,0.6)', delay: 65 },
    { char: 'd', color: '#10b981', shadow: 'rgba(16,185,129,0.6)', delay: 130 },
    { char: 'u', color: '#0d9488', shadow: 'rgba(13,148,136,0.6)', delay: 195 },
    { char: 'l', color: '#06b6d4', shadow: 'rgba(6,182,212,0.6)', delay: 260 },
    { char: 'l', color: '#3b82f6', shadow: 'rgba(59,130,246,0.6)', delay: 325 },
    { char: 'a', color: '#8b5cf6', shadow: 'rgba(139,92,246,0.6)', delay: 390 },
    { char: 'h', color: '#ec4899', shadow: 'rgba(236,72,153,0.6)', delay: 455 },
  ];

  const subtitleWords = [
    { text: 'FULL-STACK', delay: 0, color: '#f59e0b' },
    { text: 'WEB', delay: 80, color: '#f97316' },
    { text: 'DEVELOPER', delay: 160, color: '#10b981' },
    { text: '&', delay: 240, color: '#06b6d4' },
    { text: 'SOLUTIONS', delay: 320, color: '#3b82f6' },
    { text: 'ARCHITECT', delay: 400, color: '#8b5cf6' },
  ];

  const handleTriggerRun = () => {
    if (runTimeoutRef.current) clearTimeout(runTimeoutRef.current);
    setIsNameRunning(true);
    setRunKey((prev) => prev + 1);

    runTimeoutRef.current = setTimeout(() => {
      setIsNameRunning(false);
    }, 2800);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: Math.round(x * 16), y: Math.round(-y * 16) });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHoveringImg(false);
  };
  return (
    <section className="py-12 lg:py-20 px-6 relative overflow-hidden bg-[#F4F4F0]">
      {/* Background Decorative Circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-emerald-950/5 pointer-events-none -z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[950px] h-[950px] rounded-full border border-emerald-950/[0.03] pointer-events-none -z-0" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Column: Heading & CTAs */}
        <div className="lg:col-span-7 space-y-6 text-left">
          {/* Kicker */}
          <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-[0.25em] uppercase text-emerald-950/70">
            <span>HELLO, I'M</span>
            <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-500 animate-pulse" />
          </div>

          {/* Massive Name with Step-by-Step Color Wave & > Run Button */}
          <div
            className="space-y-2 relative"
            onMouseEnter={() => setIsNameHovered(true)}
            onMouseLeave={() => {
              setIsNameHovered(false);
              setHoveredCharIndex(null);
            }}
          >
            {/* Header row with Name and > Run Action Icon */}
            <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
              <h1
                key={runKey}
                onClick={handleTriggerRun}
                className={`font-serif text-6xl sm:text-7xl lg:text-8xl font-black leading-none tracking-tight select-none cursor-pointer flex items-center will-change-transform ${
                  isNameRunning ? 'animate-[runnerTrack_2.8s_cubic-bezier(0.25,1,0.5,1)]' : ''
                }`}
                title="Click > icon or click Name to Run!"
              >
                {nameLetters.map((item, idx) => {
                  const isCharHovered = hoveredCharIndex === idx;
                  const activeColor = (isNameHovered || isNameRunning) ? item.color : '#022c22';
                  const activeShadow = (isNameHovered || isNameRunning)
                    ? `0 0 20px ${item.shadow}`
                    : 'none';

                  return (
                    <span
                      key={idx}
                      onMouseEnter={() => setHoveredCharIndex(idx)}
                      style={{
                        color: activeColor,
                        textShadow: activeShadow,
                        transition: 'color 0.4s ease, transform 0.25s ease, text-shadow 0.4s ease',
                        transitionDelay: isNameHovered ? `${item.delay}ms` : `${(nameLetters.length - 1 - idx) * 35}ms`,
                        display: 'inline-block',
                      }}
                      className={`transform will-change-transform ${
                        isCharHovered ? '-translate-y-2.5 scale-110' : ''
                      } ${isNameRunning ? 'animate-[letterSprint_0.7s_ease-in-out_infinite]' : ''}`}
                    >
                      {item.char}
                    </span>
                  );
                })}
              </h1>

              {/* The Interactive > Run Icon Button */}
              <button
                type="button"
                onClick={handleTriggerRun}
                className={`group/run relative inline-flex items-center justify-center gap-1.5 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-2xl font-black cursor-pointer transition-all duration-300 shadow-md ${
                  isNameRunning
                    ? 'bg-amber-500 text-emerald-950 scale-105 ring-4 ring-amber-400/60 shadow-amber-500/30'
                    : 'bg-emerald-950 hover:bg-amber-500 text-white hover:text-emerald-950 hover:scale-110 hover:shadow-xl hover:ring-2 hover:ring-amber-400/40'
                }`}
                title="Click > to Run Name Animation!"
              >
                {/* The > Icon */}
                <span className="font-mono text-xl sm:text-2xl font-black leading-none transform group-hover/run:translate-x-0.5 transition-transform">
                  &gt;
                </span>
                <span className="text-[10px] sm:text-xs tracking-wider uppercase font-extrabold">
                  {isNameRunning ? 'RUNNING!' : 'RUN'}
                </span>
                {isNameRunning ? (
                  <Zap className="w-3.5 h-3.5 text-emerald-950 animate-bounce" />
                ) : (
                  <Play className="w-3 h-3 fill-current opacity-80" />
                )}

                {/* Subtle Pulse Halo */}
                {!isNameRunning && (
                  <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-400 rounded-full animate-ping pointer-events-none" />
                )}
              </button>
            </div>

            {/* Live Runner Track & Status Feedback when Running */}
            {isNameRunning && (
              <div className="flex items-center gap-2 p-1.5 px-3 bg-emerald-950 text-white rounded-xl text-[10px] font-mono shadow-inner border border-amber-500/30 max-w-md animate-fadeIn">
                <span className="text-amber-400 animate-pulse font-bold">⚡ RUN MODE:</span>
                <div className="flex-1 h-1.5 bg-emerald-900 rounded-full overflow-hidden relative">
                  <div className="h-full bg-linear-to-r from-amber-400 via-emerald-400 to-amber-500 animate-speedLine rounded-full" />
                </div>
                <span className="text-amber-300 font-bold shrink-0">🏃 SPRINTING...</span>
              </div>
            )}

            {/* Subtitle with Step-by-Step Color Wave */}
            <div className="flex flex-wrap items-center -mt-1 gap-x-2 gap-y-1">
              {subtitleWords.map((word, wIdx) => {
                const wordColor = isNameHovered ? word.color : '#022c22';
                return (
                  <span
                    key={wIdx}
                    style={{
                      color: wordColor,
                      transition: 'color 0.4s ease, transform 0.25s ease',
                      transitionDelay: isNameHovered ? `${word.delay}ms` : '0ms',
                    }}
                    className="text-xs sm:text-sm lg:text-base font-bold uppercase tracking-[0.25em] inline-block hover:scale-105"
                  >
                    {word.text}
                  </span>
                );
              })}
            </div>
          </div>

          {/* Dark Pill Badge & Live Website Pill */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-block bg-emerald-950 text-white text-[10px] lg:text-[11px] font-bold tracking-widest px-4 py-2 rounded-full uppercase shadow-xs">
              CRAFTING HIGH-PERFORMANCE DIGITAL EXPERIENCES
            </span>
            {onOpenWebsite && (
              <button
                onClick={onOpenWebsite}
                className="bg-amber-500 hover:bg-amber-600 text-emerald-950 text-[10px] lg:text-[11px] font-bold tracking-wider px-3.5 py-1.5 rounded-full uppercase flex items-center gap-1.5 transition-all shadow-xs cursor-pointer"
              >
                <Globe className="w-3 h-3" />
                <span>Live Website</span>
              </button>
            )}
          </div>

          {/* Description */}
          <p className="text-xs lg:text-sm text-emerald-950/75 max-w-lg leading-relaxed font-normal">
            I build scalable web applications, fast APIs, dynamic dashboards, and high-converting storefronts that help modern businesses thrive. Focused on clean architecture, high uptime, and delightful interfaces.
          </p>

          {/* CTA Buttons */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              onClick={onExploreApps}
              className="bg-emerald-950 hover:bg-emerald-900 text-white font-bold text-xs tracking-wider px-6 py-3.5 rounded-full flex items-center gap-2 cursor-pointer shadow-md transition-all scale-102 hover:scale-105"
            >
              <span>EXPLORE MY APPS</span>
              <ArrowUpRight className="w-4 h-4 text-amber-400" />
            </button>

            <button
              onClick={onOpenEstimator}
              className="bg-[#ECEAE1] hover:bg-[#E3DFD5] text-emerald-950 font-bold text-xs tracking-wider px-5 py-3.5 rounded-full border border-emerald-950/10 flex items-center gap-2 cursor-pointer transition-all hover:border-amber-500"
            >
              <Calculator className="w-4 h-4 text-amber-600" />
              <span>COST ESTIMATOR</span>
            </button>

            {onOpenWebsite && (
              <button
                onClick={onOpenWebsite}
                className="bg-white hover:bg-amber-50 text-emerald-950 font-bold text-xs tracking-wider px-5 py-3.5 rounded-full border border-emerald-950/15 flex items-center gap-2 cursor-pointer transition-all hover:border-amber-500 shadow-2xs"
              >
                <Globe className="w-4 h-4 text-amber-600" />
                <span>SHARE WEBSITE</span>
              </button>
            )}
          </div>
        </div>

        {/* Right Column: Arched Developer Frame with Code Terminal Overlay */}
        <div className="lg:col-span-5 flex justify-center relative">
          {/* Subtle Outer Ring with glowing effect on hover */}
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 lg:w-96 h-80 lg:h-96 rounded-full border transition-all duration-500 -z-0 ${
            isHoveringImg ? 'border-amber-400/60 scale-105 shadow-[0_0_40px_rgba(245,158,11,0.2)]' : 'border-amber-500/20'
          }`} />

          <div
            className="relative z-10 w-72 lg:w-80 cursor-pointer transition-transform duration-200 ease-out"
            style={{
              transform: `perspective(1000px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
            }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHoveringImg(true)}
            onMouseLeave={handleMouseLeave}
          >
            {/* Top Star Accent */}
            <div className={`absolute -top-6 left-1/2 -translate-x-1/2 text-amber-500 transition-transform duration-300 ${
              isHoveringImg ? 'scale-125 text-amber-400 rotate-12' : ''
            }`}>
              <Sparkles className="w-6 h-6 fill-amber-500" />
            </div>

            {/* Arched Frame */}
            <div className={`w-full h-[380px] lg:h-[420px] rounded-t-full border-[10px] overflow-hidden shadow-2xl relative bg-emerald-950 group transition-all duration-300 ${
              isHoveringImg ? 'border-amber-400/80 shadow-[0_20px_50px_rgba(19,42,19,0.35)]' : 'border-[#ECEAE1]'
            }`}>
              <img
                src={heroImage}
                alt="Abdullah - Premium Web Developer"
                className="w-full h-full object-cover object-center scale-102 group-hover:scale-108 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />

              {/* Dynamic mouse light glare reflection */}
              <div
                className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  transform: `translateX(${tilt.x * 2}px) translateY(${tilt.y * 2}px)`,
                }}
              />

              {/* Upload Image & School Dev Img overlay */}
              <div className="absolute top-4 right-4 z-20 flex flex-col gap-1.5 opacity-90 sm:opacity-0 group-hover:opacity-100 transition-opacity">
                <input
                  type="file"
                  accept="image/*"
                  onChange={onHeroImageUpload}
                  className="hidden"
                  id="hero-img-uploader"
                />
                <label
                  htmlFor="hero-img-uploader"
                  className="bg-amber-500 hover:bg-amber-600 text-emerald-950 font-bold text-[10px] tracking-wider px-3 py-2 rounded-xl uppercase cursor-pointer flex items-center gap-1 shadow-lg transition-all border border-emerald-950/10"
                  title="Upload Custom Profile Photo"
                >
                  <Upload className="w-3 h-3" />
                  <span>Upload Img</span>
                </label>

                {onSetSchoolDeveloperImg && (
                  <button
                    type="button"
                    onClick={onSetSchoolDeveloperImg}
                    className="bg-emerald-950/90 hover:bg-emerald-900 text-amber-400 font-bold text-[9px] tracking-wider px-2.5 py-1.5 rounded-xl uppercase cursor-pointer flex items-center gap-1 shadow-lg border border-white/10"
                    title="Set School Web Developer Image"
                  >
                    <span>School Dev Img</span>
                  </button>
                )}
              </div>

              {/* Dark Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-950/25 to-transparent pointer-events-none" />

              {/* Interactive Status Indicator on Image */}
              <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 bg-emerald-950/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[10px] font-mono text-emerald-300 font-bold">
                  {isHoveringImg ? 'INTERACTIVE' : 'READY TO CODE'}
                </span>
              </div>

              {/* Code Terminal Snippet Overlay */}
              <div className="absolute bottom-6 left-6 right-6 text-white text-left font-mono">
                <p className="text-xs text-amber-400 flex items-center gap-1">
                  <Code2 className="w-3 h-3 text-amber-400" />
                  <span>const developer = &#123;</span>
                </p>
                <p className="text-xs text-slate-300 ml-4">
                  name: <span className="text-amber-300 font-semibold">'Abdullah'</span>,
                </p>
                <p className="text-xs text-slate-300 ml-4">
                  role: <span className="text-emerald-300">'Full-Stack Engineer'</span>,
                </p>
                <p className="text-xs text-slate-300 ml-4">
                  status: <span className="text-emerald-400">'Available 🟢'</span>
                </p>
                <p className="text-xs text-amber-400">
                  &#125;;
                </p>
              </div>
            </div>

            {/* Floating Credentials Badge (Bottom-Right) */}
            <div className="absolute -bottom-4 -right-4 bg-white border border-emerald-950/5 text-emerald-950 px-4 py-3 rounded-2xl shadow-xl max-w-[180px] text-left">
              <p className="text-[10px] font-bold text-amber-600 uppercase tracking-widest border-b border-emerald-950/5 pb-1.5 mb-1.5">
                DEV CREDENTIALS:
              </p>
              <div className="space-y-1.5">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[10px] font-semibold flex items-center gap-1.5 hover:text-amber-600 transition-colors"
                >
                  <Github className="w-3.5 h-3.5 text-emerald-950 shrink-0" />
                  <span>GitHub Profile</span>
                </a>
                <p className="text-[10px] font-semibold flex items-center gap-1.5 text-emerald-950">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <span>Full-Stack Verified</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
