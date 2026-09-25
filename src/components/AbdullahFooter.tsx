import React from 'react';
import { ArrowUp, Sparkles, Heart } from 'lucide-react';

interface AbdullahFooterProps {
  onOpenCv: () => void;
  onOpenSkills: () => void;
  onOpenWebsite?: () => void;
}

export const AbdullahFooter: React.FC<AbdullahFooterProps> = ({
  onOpenCv,
  onOpenSkills,
  onOpenWebsite,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-emerald-950 text-white py-12 px-6 relative overflow-hidden border-t border-amber-500/20">
      <div className="max-w-6xl mx-auto space-y-8 text-center relative z-10">
        {/* Main Ribbon Text */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 flex-wrap">
          <span className="text-amber-400 text-sm sm:text-base select-none">✦</span>
          <p className="font-serif text-xl sm:text-3xl text-white tracking-wide">
            Let's Build{' '}
            <span className="font-script text-3xl sm:text-5xl text-amber-400 px-1 font-normal select-none">
              Your Application
            </span>{' '}
            Together.
          </p>
          <span className="text-amber-400 text-sm sm:text-base select-none">✦</span>
        </div>

        {/* Brand Lockup & Links */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex flex-col sm:flex-row items-center gap-2">
            <span className="font-serif text-base font-bold text-white tracking-wide">Abdullah | Premium Web Developer Portfolio</span>
            <span className="hidden sm:inline text-white/40">•</span>
            <span className="text-[11px]">© {new Date().getFullYear()} All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            {onOpenWebsite && (
              <button
                onClick={onOpenWebsite}
                className="text-amber-400 hover:underline font-semibold transition-colors cursor-pointer flex items-center gap-1"
              >
                <span>Live Website</span>
              </button>
            )}
            <button
              onClick={onOpenSkills}
              className="hover:text-amber-400 transition-colors cursor-pointer"
            >
              Skills Matrix
            </button>
            <button
              onClick={onOpenCv}
              className="hover:text-amber-400 transition-colors cursor-pointer"
            >
              Curriculum Vitae
            </button>
            <a
              href="#about"
              className="hover:text-amber-400 transition-colors"
            >
              About
            </a>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-amber-500 hover:text-emerald-950 flex items-center justify-center transition-colors cursor-pointer"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
