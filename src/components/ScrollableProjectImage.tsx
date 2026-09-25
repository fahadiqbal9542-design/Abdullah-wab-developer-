import React, { useState, useRef, useEffect } from 'react';
import { ExternalLink, Eye, Globe, ChevronDown, Check, Copy } from 'lucide-react';
import { DeveloperProject } from '../types/abdullah';

interface ScrollableProjectImageProps {
  project: DeveloperProject;
  onOpenProject: (project: DeveloperProject) => void;
  onPreviewWebsite?: (url: string, title: string) => void;
  onOpenQuickLink: (e: React.MouseEvent, project: DeveloperProject) => void;
}

export const ScrollableProjectImage: React.FC<ScrollableProjectImageProps> = ({
  project,
  onOpenProject,
  onPreviewWebsite,
  onOpenQuickLink,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [copied, setCopied] = useState(false);
  const [scrollDistance, setScrollDistance] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  // Measure difference between image natural/rendered height and container height
  const calculateScroll = () => {
    if (containerRef.current && imgRef.current) {
      const containerH = containerRef.current.clientHeight;
      const imgH = imgRef.current.clientHeight;
      if (imgH > containerH) {
        setScrollDistance(imgH - containerH);
      } else {
        // For standard ratio images, provide a subtle pan
        setScrollDistance(Math.round(containerH * 0.25));
      }
    }
  };

  useEffect(() => {
    calculateScroll();
    window.addEventListener('resize', calculateScroll);
    return () => window.removeEventListener('resize', calculateScroll);
  }, [project.image]);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (project.websiteUrl) {
      navigator.clipboard.writeText(project.websiteUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const cleanUrl = project.websiteUrl
    ? project.websiteUrl.replace(/^https?:\/\//, '').replace(/\/$/, '')
    : `abdullah.dev/projects/${project.id}`;

  return (
    <div className="w-full bg-[#1e293b] rounded-t-2xl overflow-hidden shadow-sm flex flex-col group/mockup select-none">
      {/* Browser Mockup Window Bar */}
      <div className="bg-[#0f172a] px-3 py-2 border-b border-white/5 flex items-center justify-between gap-2">
        {/* macOS Traffic Lights */}
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/90 inline-block shadow-xs" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400/90 inline-block shadow-xs" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/90 inline-block shadow-xs" />
        </div>

        {/* Address Bar */}
        <div className="bg-slate-800/80 hover:bg-slate-800 text-slate-300 text-[10px] font-mono px-2.5 py-1 rounded-md flex-1 max-w-[210px] truncate flex items-center justify-center gap-1 border border-white/5 transition-colors">
          <span className="text-emerald-400 text-[9px]">🔒</span>
          <span className="truncate">{cleanUrl}</span>
        </div>

        {/* Live Status indicator */}
        <div className="shrink-0 flex items-center gap-1 text-[9px] font-mono text-emerald-400">
          <span className={`w-1.5 h-1.5 rounded-full ${isHovered ? 'bg-amber-400 animate-ping' : 'bg-emerald-400'}`} />
          <span className="hidden sm:inline text-[9px] text-slate-400">
            {isHovered ? 'SCROLL' : 'LIVE'}
          </span>
        </div>
      </div>

      {/* Image Viewport Container */}
      <div
        ref={containerRef}
        className="relative w-full h-[250px] bg-slate-950 overflow-hidden cursor-pointer"
        onMouseEnter={() => {
          setIsHovered(true);
          calculateScroll();
        }}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => onOpenProject(project)}
      >
        {/* The Scrolling Website Mockup Image */}
        <img
          ref={imgRef}
          src={project.image}
          alt={project.title}
          onLoad={calculateScroll}
          className="w-full h-auto min-h-full object-cover object-top will-change-transform"
          style={{
            transform: isHovered
              ? `translateY(-${scrollDistance}px)`
              : 'translateY(0px)',
            transition: isHovered
              ? `transform ${Math.max(3.5, Math.min(8, (scrollDistance / 100) * 1.2))}s cubic-bezier(0.45, 0, 0.55, 1)`
              : 'transform 1s cubic-bezier(0.25, 1, 0.5, 1)',
          }}
          referrerPolicy="no-referrer"
        />

        {/* Floating Hint: Hover to Scroll */}
        <div
          className={`absolute bottom-3 left-1/2 -translate-x-1/2 z-20 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase transition-all duration-300 flex items-center gap-1.5 backdrop-blur-md pointer-events-none ${
            isHovered
              ? 'bg-amber-500/90 text-emerald-950 shadow-lg translate-y-0 opacity-90'
              : 'bg-emerald-950/75 text-amber-300/90 opacity-80 translate-y-1'
          }`}
        >
          <ChevronDown
            className={`w-3 h-3 transition-transform duration-300 ${
              isHovered ? 'animate-bounce text-emerald-950' : ''
            }`}
          />
          <span>{isHovered ? 'Auto-Scrolling Website' : 'Hover to Scroll'}</span>
        </div>

        {/* Hover Quick Action Buttons Overlay (top corner) */}
        <div
          className={`absolute top-2.5 left-2.5 z-30 flex items-center gap-1.5 transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-85'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {project.websiteUrl ? (
            <>
              <button
                type="button"
                onClick={() => {
                  if (onPreviewWebsite) {
                    onPreviewWebsite(project.websiteUrl!, project.title);
                  } else {
                    window.open(project.websiteUrl, '_blank');
                  }
                }}
                className="bg-emerald-950/90 hover:bg-amber-500 hover:text-emerald-950 text-white text-[10px] font-bold px-2.5 py-1.5 rounded-xl flex items-center gap-1.5 shadow-lg backdrop-blur-sm transition-all border border-white/10 hover:scale-105 cursor-pointer"
                title="Preview Interactive Website"
              >
                <Globe className="w-3.5 h-3.5 text-amber-400" />
                <span>Live Site</span>
                <ExternalLink className="w-2.5 h-2.5 opacity-80" />
              </button>

              <button
                type="button"
                onClick={handleCopy}
                className="bg-emerald-950/90 hover:bg-amber-500 hover:text-emerald-950 text-white text-[10px] font-bold p-1.5 rounded-xl shadow-lg border border-white/10 transition-all cursor-pointer"
                title="Copy Website URL"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </>
          ) : (
            <button
              type="button"
              onClick={(e) => onOpenQuickLink(e, project)}
              className="bg-amber-500 hover:bg-amber-600 text-emerald-950 text-[10px] font-bold px-2.5 py-1.5 rounded-xl flex items-center gap-1.5 shadow-lg transition-all border border-emerald-950/10 hover:scale-105 cursor-pointer"
              title="Paste your website URL"
            >
              <span>+ Paste Link</span>
            </button>
          )}
        </div>

        {/* Hover Center Eye Button */}
        <div
          className={`absolute inset-0 bg-emerald-950/25 pointer-events-none transition-opacity duration-300 flex items-center justify-center ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="bg-white/95 text-emerald-950 px-3 py-1.5 rounded-full text-xs font-bold shadow-xl flex items-center gap-1.5 transform transition-transform duration-300 scale-95 group-hover/mockup:scale-100">
            <Eye className="w-3.5 h-3.5 text-amber-600" />
            <span>Click to View Full Project</span>
          </div>
        </div>
      </div>
    </div>
  );
};
