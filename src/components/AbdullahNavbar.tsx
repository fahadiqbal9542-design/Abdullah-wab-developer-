import React, { useState } from 'react';
import { Sparkles, Code, FileText, Send, Menu, X, Globe, Share2 } from 'lucide-react';

interface AbdullahNavbarProps {
  onOpenSkills: () => void;
  onOpenCv: () => void;
  onOpenContact: () => void;
  onOpenWebsite: () => void;
  whatsappNumber: string;
}

export const AbdullahNavbar: React.FC<AbdullahNavbarProps> = ({
  onOpenSkills,
  onOpenCv,
  onOpenContact,
  onOpenWebsite,
  whatsappNumber,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#F4F4F0]/90 backdrop-blur-md border-b border-emerald-950/5">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex flex-col group text-left">
          <div className="flex items-center gap-1.5">
            <span className="font-serif text-2xl font-bold tracking-tight text-emerald-950 leading-none">
              Abdullah
            </span>
            <span className="text-amber-500">
              <Sparkles className="w-5 h-5 fill-amber-500 animate-pulse" />
            </span>
          </div>
          <span className="text-[8px] uppercase tracking-[0.2em] text-amber-600 font-bold mt-0.5">
            Premium Web Developer Portfolio
          </span>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-bold tracking-wider text-emerald-950/70">
          <a href="#about" className="hover:text-amber-600 transition-colors">
            ABOUT ME
          </a>
          <a href="#services" className="hover:text-amber-600 transition-colors">
            SERVICES & TECH
          </a>
          <a href="#portfolio" className="hover:text-amber-600 transition-colors">
            PORTFOLIO
          </a>
          <a href="#estimator" className="hover:text-amber-600 transition-colors">
            ESTIMATOR
          </a>
          <a href="#contact" className="hover:text-amber-600 transition-colors">
            CONTACT
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-2">
          {/* Website Button */}
          <button
            onClick={onOpenWebsite}
            className="text-emerald-950/90 hover:text-amber-700 bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/30 font-bold text-xs tracking-wider px-3.5 py-2 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 shadow-2xs"
            title="View Live Website URL, Share Link & Device Previewer"
          >
            <Globe className="w-3.5 h-3.5 text-amber-600" />
            <span>WEBSITE</span>
          </button>

          <button
            onClick={onOpenSkills}
            className="text-emerald-950/80 hover:text-amber-600 font-bold text-xs tracking-wider px-3 py-2 rounded-xl hover:bg-emerald-950/5 transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <Code className="w-3.5 h-3.5 text-amber-500" />
            <span>MY SKILLS</span>
          </button>

          <button
            onClick={onOpenCv}
            className="text-emerald-950/80 hover:text-amber-600 font-bold text-xs tracking-wider px-3 py-2 rounded-xl hover:bg-emerald-950/5 transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <FileText className="w-3.5 h-3.5 text-amber-500" />
            <span>MY CV</span>
          </button>

          <button
            onClick={onOpenContact}
            className="bg-emerald-950 hover:bg-emerald-900 text-white font-bold text-xs tracking-wider px-5 py-2.5 rounded-full flex items-center gap-2 cursor-pointer shadow-md transition-all scale-102 hover:scale-105"
          >
            <span>LET'S TALK</span>
            <Send className="w-3 h-3 text-amber-400" />
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-1 sm:hidden">
          <button
            onClick={onOpenWebsite}
            className="bg-amber-500/20 text-amber-800 font-bold text-[11px] px-2.5 py-1.5 rounded-lg flex items-center gap-1 cursor-pointer"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>WEBSITE</span>
          </button>

          <button
            onClick={onOpenSkills}
            className="text-emerald-950 hover:text-amber-700 font-bold text-xs tracking-wider px-2 py-1.5 cursor-pointer flex items-center gap-1"
          >
            <Code className="w-3.5 h-3.5 text-amber-500" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-emerald-950 hover:text-amber-600 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden py-4 px-6 border-t border-emerald-950/10 bg-[#F4F4F0] space-y-3 animate-fadeIn text-left">
          <div className="flex flex-col space-y-2 text-xs font-bold tracking-wider text-emerald-950">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-amber-600"
            >
              ABOUT ME
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-amber-600"
            >
              SERVICES & TECH
            </a>
            <a
              href="#portfolio"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-amber-600"
            >
              PORTFOLIO
            </a>
            <a
              href="#estimator"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-amber-600"
            >
              ESTIMATOR
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-amber-600"
            >
              CONTACT
            </a>
          </div>

          <div className="pt-3 border-t border-emerald-950/10 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenWebsite();
              }}
              className="w-full py-2.5 bg-amber-500 hover:bg-amber-600 text-emerald-950 text-xs font-bold rounded-xl flex items-center justify-center gap-2 shadow-xs cursor-pointer"
            >
              <Globe className="w-4 h-4 text-emerald-950" />
              <span>LIVE WEBSITE LINK & SHARE</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCv();
              }}
              className="w-full py-2.5 bg-emerald-950/5 text-emerald-950 text-xs font-bold rounded-xl flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4 text-amber-600" />
              <span>VIEW RESUME / CV</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-2.5 bg-emerald-950 text-white text-xs font-bold rounded-xl flex items-center justify-center gap-2"
            >
              <span>SEND PROJECT INQUIRY</span>
              <Send className="w-3.5 h-3.5 text-amber-400" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
