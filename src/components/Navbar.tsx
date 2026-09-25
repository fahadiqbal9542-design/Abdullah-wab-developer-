import React, { useState } from 'react';
import { Send, Menu, X, PlusCircle, Share2, Sparkles } from 'lucide-react';
import { ProfileData } from '../types/portfolio';

interface NavbarProps {
  profile: ProfileData;
  onOpenContact: () => void;
  onOpenManage: () => void;
  onOpenShare: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  profile,
  onOpenContact,
  onOpenManage,
  onOpenShare,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#F3EFEA]/90 backdrop-blur-md border-b border-[#1B2A22]/10 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo matching template */}
          <a href="#" className="flex items-center gap-2 group text-left">
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-script text-3xl sm:text-4xl text-[#1B2A22] leading-none tracking-wide group-hover:text-[#D4A359] transition-colors">
                  {profile.name}
                </span>
                {/* Botanical sprig motif */}
                <svg
                  className="w-5 h-5 text-[#D4A359] -mt-2 transform rotate-12 transition-transform group-hover:rotate-45"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2a9 9 0 0 0-9 9c0 4.97 4.03 9 9 9 4.97 0 9-4.03 9-9" />
                  <path d="M12 2c0 5 4 9 9 9" />
                  <path d="M12 12c-3-2-6-1-7 2" />
                  <path d="M14 8c2-2 5-1 6 1" />
                </svg>
              </div>
              <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.25em] text-[#1B2A22]/80 uppercase -mt-1">
                GRAPHICS DESIGNER
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-[13px] font-semibold tracking-wider text-[#1B2A22]/80">
            <a href="#about" className="hover:text-[#D4A359] transition-colors">
              ABOUT ME
            </a>
            <a href="#services" className="hover:text-[#D4A359] transition-colors">
              SERVICES
            </a>
            <a href="#portfolio" className="hover:text-[#D4A359] transition-colors">
              PORTFOLIO
            </a>
            <a href="#contact" className="hover:text-[#D4A359] transition-colors">
              CONTACT
            </a>
          </nav>

          {/* Action Buttons Zone */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Quick Share / Hosting Info */}
            <button
              onClick={onOpenShare}
              title="Share portfolio & get QR code"
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-[#1B2A22] bg-[#E5DFD5] hover:bg-[#D9D1C5] rounded-full transition-colors border border-[#1B2A22]/10 shadow-xs"
            >
              <Share2 className="w-3.5 h-3.5 text-[#D4A359]" />
              <span>Share Link</span>
            </button>

            {/* Manage / Add Projects button */}
            <button
              onClick={onOpenManage}
              title="Add or edit your own projects & profile"
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-[#1B2A22] bg-[#E5DFD5] hover:bg-[#D9D1C5] rounded-full transition-colors border border-[#1B2A22]/10 shadow-xs"
            >
              <PlusCircle className="w-3.5 h-3.5 text-[#1B2A22]" />
              <span className="hidden lg:inline">Add / Edit Projects</span>
              <span className="lg:hidden">Edit</span>
            </button>

            {/* Let's Talk CTA matching template */}
            <button
              onClick={onOpenContact}
              className="flex items-center gap-2 px-5 py-2.5 bg-[#13221B] hover:bg-[#1C3228] text-white rounded-full text-xs font-semibold tracking-wider transition-all transform hover:scale-[1.02] shadow-sm cursor-pointer"
            >
              <span>LET'S TALK</span>
              <Send className="w-3.5 h-3.5 text-[#D4A359] transform -rotate-12" />
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex items-center gap-2 sm:hidden">
            <button
              onClick={onOpenManage}
              className="p-2 text-[#1B2A22] bg-[#E5DFD5] rounded-full"
              title="Add Projects"
            >
              <PlusCircle className="w-4 h-4" />
            </button>
            <button
              onClick={onOpenShare}
              className="p-2 text-[#1B2A22] bg-[#E5DFD5] rounded-full"
              title="Share"
            >
              <Share2 className="w-4 h-4 text-[#D4A359]" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#1B2A22] hover:text-[#D4A359] rounded-lg transition-colors"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 px-2 border-t border-[#1B2A22]/10 bg-[#F3EFEA] space-y-3">
            <div className="flex flex-col space-y-2 text-sm font-semibold tracking-wider text-[#1B2A22]">
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-[#E5DFD5] transition-colors"
              >
                ABOUT ME
              </a>
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-[#E5DFD5] transition-colors"
              >
                SERVICES
              </a>
              <a
                href="#portfolio"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-[#E5DFD5] transition-colors"
              >
                PORTFOLIO
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-[#E5DFD5] transition-colors"
              >
                CONTACT
              </a>
            </div>

            <div className="pt-2 border-t border-[#1B2A22]/10 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 bg-[#13221B] text-white rounded-full text-xs font-semibold tracking-wider"
              >
                <span>LET'S TALK</span>
                <Send className="w-3.5 h-3.5 text-[#D4A359]" />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
