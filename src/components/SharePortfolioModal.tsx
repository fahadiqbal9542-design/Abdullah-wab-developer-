import React, { useState } from 'react';
import { X, Copy, Check, Share2, ExternalLink, Globe, Smartphone, CheckCircle } from 'lucide-react';
import { ProfileData } from '../types/portfolio';

interface SharePortfolioModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: ProfileData;
}

export const SharePortfolioModal: React.FC<SharePortfolioModalProps> = ({
  isOpen,
  onClose,
  profile,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  // Use window.location.href or the shared app URL
  const shareUrl = typeof window !== 'undefined'
    ? (window.location.origin.includes('localhost')
        ? 'https://ais-pre-elmvdhbwrk76es6lui22et-1037274453331.asia-southeast1.run.app'
        : window.location.href)
    : 'https://ais-pre-elmvdhbwrk76es6lui22et-1037274453331.asia-southeast1.run.app';

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(
      `Check out ${profile.name}'s Graphic Design Portfolio: ${shareUrl}`
    );
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-[#FAF8F5] rounded-3xl shadow-2xl border border-[#D4A359]/30 overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#13221B] px-6 py-4 text-white flex items-center justify-between border-b border-[#D4A359]/30">
          <div className="flex items-center gap-2">
            <Globe className="w-5 h-5 text-[#D4A359]" />
            <h3 className="font-serif-display text-lg font-bold text-white">
              Free Online Hosting & Live Share Link
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5">
          {/* Host status indicator */}
          <div className="flex items-center gap-3 p-3 bg-emerald-50 rounded-2xl border border-emerald-200">
            <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
            <div className="text-xs text-emerald-900">
              <span className="font-bold">Aapka portfolio bilkul live aur free hosted hai!</span>
              <p className="text-[11px] text-emerald-700 mt-0.5">
                Google Cloud Run par 24/7 online chal raha hai. Aap bina kisi monthly charges ke ise clients ke sath share kar sakte hain.
              </p>
            </div>
          </div>

          {/* Link box */}
          <div>
            <label className="block text-xs font-semibold text-[#1B2A22] mb-1.5">
              Live Portfolio Share Link:
            </label>
            <div className="flex items-center gap-2 bg-white p-2 pl-3 rounded-xl border border-gray-300">
              <input
                type="text"
                readOnly
                value={shareUrl}
                className="w-full text-xs text-gray-700 bg-transparent focus:outline-none select-all font-mono"
              />
              <button
                onClick={handleCopyLink}
                className="inline-flex items-center gap-1 px-4 py-2 bg-[#13221B] hover:bg-[#1C3228] text-white rounded-lg text-xs font-semibold shrink-0 transition-colors cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-green-400" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Mobile QR Code Scanner Preview */}
          <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-gray-200">
            {/* SVG QR Code Illustration */}
            <div className="w-20 h-20 bg-gray-900 p-2 rounded-xl flex items-center justify-center shrink-0">
              <svg viewBox="0 0 100 100" className="w-full h-full fill-white">
                {/* Visual QR Pattern representation */}
                <rect x="5" y="5" width="30" height="30" fill="white" />
                <rect x="10" y="10" width="20" height="20" fill="#13221B" />
                <rect x="15" y="15" width="10" height="10" fill="white" />

                <rect x="65" y="5" width="30" height="30" fill="white" />
                <rect x="70" y="10" width="20" height="20" fill="#13221B" />
                <rect x="75" y="15" width="10" height="10" fill="white" />

                <rect x="5" y="65" width="30" height="30" fill="white" />
                <rect x="10" y="70" width="20" height="20" fill="#13221B" />
                <rect x="15" y="75" width="10" height="10" fill="white" />

                <rect x="45" y="10" width="10" height="15" fill="white" />
                <rect x="40" y="35" width="20" height="10" fill="white" />
                <rect x="65" y="45" width="15" height="15" fill="white" />
                <rect x="45" y="65" width="20" height="10" fill="white" />
                <rect x="75" y="70" width="15" height="15" fill="white" />
              </svg>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#1B2A22]">
                <Smartphone className="w-4 h-4 text-[#D4A359]" />
                <span>Mobile Scan Ready</span>
              </div>
              <p className="text-[11px] text-gray-500 leading-normal">
                Clients apne smartphone camera se scan kar ke direct portfolio open kar sakte hain. Responsive aur super-fast load hota hai.
              </p>
            </div>
          </div>

          {/* Quick Share Buttons */}
          <div className="pt-2 flex items-center gap-3">
            <button
              onClick={handleShareWhatsApp}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 bg-[#25D366] hover:bg-[#1EBE5D] text-white rounded-full text-xs font-semibold transition-colors cursor-pointer"
            >
              <Share2 className="w-4 h-4" />
              <span>Share on WhatsApp</span>
            </button>

            <button
              onClick={handleCopyLink}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 bg-[#EFECE6] hover:bg-[#E5DFD5] text-[#1B2A22] rounded-full text-xs font-semibold transition-colors cursor-pointer border border-[#1B2A22]/10"
            >
              <Copy className="w-4 h-4 text-[#D4A359]" />
              <span>Copy Direct Link</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
