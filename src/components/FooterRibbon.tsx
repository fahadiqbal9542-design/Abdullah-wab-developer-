import React from 'react';
import { ArrowUp, Heart, Sparkles } from 'lucide-react';
import { ProfileData } from '../types/portfolio';

interface FooterRibbonProps {
  profile: ProfileData;
  onOpenManage: () => void;
  onOpenShare: () => void;
}

export const FooterRibbon: React.FC<FooterRibbonProps> = ({
  profile,
  onOpenManage,
  onOpenShare,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#13221B] text-white py-8 border-t border-[#D4A359]/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Main Ribbon Text matching template */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 flex-wrap">
          <span className="text-[#D4A359] text-sm sm:text-base select-none">✦</span>
          <p className="font-serif-display text-lg sm:text-2xl text-white tracking-wide">
            Let's Build{' '}
            <span className="font-script text-2xl sm:text-4xl text-[#D4A359] px-1 select-none font-normal">
              Your Brand
            </span>{' '}
            Together.
          </p>
          <span className="text-[#D4A359] text-sm sm:text-base select-none">✦</span>
        </div>

        {/* Quiet Subtext & Interactive Utilities */}
        <div className="mt-6 pt-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} {profile.name} Graphics Designer. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenShare}
              className="hover:text-[#D4A359] transition-colors underline cursor-pointer"
            >
              Share & Free Hosting
            </button>
            <button
              onClick={onOpenManage}
              className="hover:text-[#D4A359] transition-colors underline cursor-pointer"
            >
              Manage Projects
            </button>
            <button
              onClick={scrollToTop}
              className="w-7 h-7 rounded-full bg-white/10 hover:bg-[#D4A359] hover:text-[#13221B] flex items-center justify-center transition-colors cursor-pointer"
              title="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
