import React, { useState } from 'react';
import {
  X,
  Globe,
  Copy,
  Check,
  ExternalLink,
  Smartphone,
  Monitor,
  Tablet,
  Share2,
  Sparkles,
  RefreshCw,
} from 'lucide-react';

interface WebsiteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShowToast: (msg: string, type: 'success' | 'error' | 'info') => void;
  whatsappNumber: string;
  previewUrl?: string;
  previewTitle?: string;
}

export const WebsiteModal: React.FC<WebsiteModalProps> = ({
  isOpen,
  onClose,
  onShowToast,
  whatsappNumber,
  previewUrl,
  previewTitle,
}) => {
  const [copied, setCopied] = useState(false);
  const [deviceView, setDeviceView] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [customTestUrl, setCustomTestUrl] = useState('');
  const [activeFrameUrl, setActiveFrameUrl] = useState('');

  if (!isOpen) return null;

  // Website live URL
  const currentOrigin =
    typeof window !== 'undefined'
      ? window.location.href
      : 'https://ais-pre-elmvdhbwrk76es6lui22et-1037274453331.asia-southeast1.run.app';

  const displayWebsiteUrl = previewUrl || currentOrigin;
  const targetFrameUrl = activeFrameUrl || previewUrl || currentOrigin;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(displayWebsiteUrl);
    setCopied(true);
    onShowToast('Website link successfully copied to clipboard!', 'success');
    setTimeout(() => setCopied(false), 2500);
  };

  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(
      `Assalam-o-Alaikum! Please check out my live Web Developer Portfolio website:\n${displayWebsiteUrl}`
    );
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  const handleApplyCustomUrl = (e: React.FormEvent) => {
    e.preventDefault();
    let clean = customTestUrl.trim();
    if (!clean) return;
    if (!clean.startsWith('http://') && !clean.startsWith('https://')) {
      clean = 'https://' + clean;
    }
    setActiveFrameUrl(clean);
    onShowToast(`Loading website preview: ${clean}`, 'info');
  };

  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
    displayWebsiteUrl
  )}&bgcolor=FFFFFF&color=132A13`;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-xs animate-fadeIn text-left"
      onClick={onClose}
    >
      <div
        className="relative bg-[#F4F4F0] text-emerald-950 rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-emerald-950/15"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-emerald-950/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-950 text-amber-400 flex items-center justify-center shadow-md">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-serif font-bold text-lg sm:text-xl text-emerald-950">
                  {previewTitle ? previewTitle : 'Live Website & Sharing Center'}
                </h3>
                <span className="bg-amber-500/15 text-amber-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                  Online
                </span>
              </div>
              <p className="text-xs text-emerald-950/60">
                Aapki website live hai — iska link copy karke kisi ko bhi share kar sakte hain!
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-[#ECEAE1] text-emerald-950 hover:bg-emerald-950 hover:text-white transition-colors flex items-center justify-center cursor-pointer shadow-xs"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          {/* Main Website URL Box */}
          <div className="bg-white rounded-2xl p-5 border border-emerald-950/10 shadow-sm space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-600 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Live Website URL (Online Link)</span>
              </span>
              <span className="text-[11px] text-emerald-950/50 font-semibold">
                Free Hosting • 100% Active
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-2">
              <div className="w-full bg-[#F4F4F0] border border-emerald-950/15 px-4 py-2.5 rounded-xl text-xs font-mono text-emerald-950 truncate select-all">
                {displayWebsiteUrl}
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="flex-1 sm:flex-none px-4 py-2.5 bg-emerald-950 hover:bg-emerald-900 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 transition-all shadow-md cursor-pointer whitespace-nowrap"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-amber-400" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-amber-400" />
                      <span>Copy Link</span>
                    </>
                  )}
                </button>

                <a
                  href={displayWebsiteUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 sm:flex-none px-4 py-2.5 bg-amber-500 hover:bg-amber-600 text-emerald-950 font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 transition-all shadow-md cursor-pointer whitespace-nowrap"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Open Website</span>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Actions & QR Code Card */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            {/* Left: Sharing Options */}
            <div className="md:col-span-7 bg-white rounded-2xl p-5 border border-emerald-950/10 shadow-sm space-y-4">
              <h4 className="font-serif font-bold text-base text-emerald-950">
                Website Share & Mobile Access
              </h4>
              <p className="text-xs text-emerald-950/70 leading-relaxed">
                Yeh website mobile phone, tablet, aur computer har jagah fast aur responsive chalti hai. Aap is link ko WhatsApp status, bio, ya clients ko bhej sakte hain.
              </p>

              <div className="space-y-2 pt-1">
                <button
                  type="button"
                  onClick={handleShareWhatsApp}
                  className="w-full py-3 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs tracking-wider rounded-xl flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer"
                >
                  <Share2 className="w-4 h-4" />
                  <span>Share Website on WhatsApp</span>
                </button>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      if (navigator.share) {
                        navigator.share({
                          title: 'Abdullah | Web Developer Portfolio',
                          url: displayWebsiteUrl,
                        });
                      } else {
                        handleCopyLink();
                      }
                    }}
                    className="py-2.5 bg-[#ECEAE1] hover:bg-[#e2dfd5] text-emerald-950 font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Smartphone className="w-3.5 h-3.5 text-amber-600" />
                    <span>Mobile Share</span>
                  </button>

                  <a
                    href={displayWebsiteUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="py-2.5 bg-[#ECEAE1] hover:bg-[#e2dfd5] text-emerald-950 font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Globe className="w-3.5 h-3.5 text-amber-600" />
                    <span>New Tab</span>
                  </a>
                </div>
              </div>

              <div className="bg-amber-500/10 p-3.5 rounded-xl border border-amber-500/20 text-xs text-amber-950 leading-relaxed">
                ✨ <strong>School Web Developer & Portfolio:</strong> Aap apne kisi bhi project ka website link edit karke yahan live test kar sakte hain!
              </div>
            </div>

            {/* Right: Instant QR Code for Phone */}
            <div className="md:col-span-5 bg-white rounded-2xl p-5 border border-emerald-950/10 shadow-sm flex flex-col items-center justify-center text-center">
              <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-950/60 mb-2">
                Mobile Scan QR Code
              </span>
              <div className="w-36 h-36 bg-[#F4F4F0] p-2 rounded-2xl border border-emerald-950/10 shadow-inner flex items-center justify-center">
                <img
                  src={qrCodeUrl}
                  alt="Website QR Code"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              <p className="text-[11px] text-emerald-950/60 mt-2 font-medium">
                Apne mobile camera se scan karein aur website mobile par dekhein.
              </p>
            </div>
          </div>

          {/* Device Previewer (Desktop / Tablet / Mobile) */}
          <div className="bg-white rounded-2xl p-5 border border-emerald-950/10 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h4 className="font-serif font-bold text-base text-emerald-950">
                  Interactive Live Website Viewer
                </h4>
                <p className="text-xs text-emerald-950/60">
                  Preview any website inside desktop, tablet, or mobile frames:
                </p>
              </div>

              {/* Device switcher */}
              <div className="flex items-center gap-1 bg-[#ECEAE1] p-1 rounded-xl">
                <button
                  onClick={() => setDeviceView('desktop')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer ${
                    deviceView === 'desktop'
                      ? 'bg-emerald-950 text-white shadow-xs'
                      : 'text-emerald-950/70 hover:text-emerald-950'
                  }`}
                >
                  <Monitor className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Desktop</span>
                </button>
                <button
                  onClick={() => setDeviceView('tablet')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer ${
                    deviceView === 'tablet'
                      ? 'bg-emerald-950 text-white shadow-xs'
                      : 'text-emerald-950/70 hover:text-emerald-950'
                  }`}
                >
                  <Tablet className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Tablet</span>
                </button>
                <button
                  onClick={() => setDeviceView('mobile')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer ${
                    deviceView === 'mobile'
                      ? 'bg-emerald-950 text-white shadow-xs'
                      : 'text-emerald-950/70 hover:text-emerald-950'
                  }`}
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Mobile</span>
                </button>
              </div>
            </div>

            {/* Custom URL Tester input */}
            <form onSubmit={handleApplyCustomUrl} className="flex gap-2">
              <input
                type="text"
                value={customTestUrl}
                onChange={(e) => setCustomTestUrl(e.target.value)}
                placeholder="Enter any website URL to preview (e.g. https://wikipedia.org or https://vercel.com)"
                className="flex-1 bg-[#F4F4F0] border border-emerald-950/15 px-3.5 py-2 rounded-xl text-xs text-emerald-950 focus:outline-none focus:ring-1 focus:ring-amber-500 font-mono"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-emerald-950 hover:bg-emerald-900 text-white text-xs font-bold rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Load</span>
              </button>
            </form>

            {/* Device Frame */}
            <div className="bg-[#1A2E22] p-4 sm:p-6 rounded-2xl flex justify-center items-center overflow-x-auto min-h-[360px]">
              <div
                className={`bg-white rounded-xl overflow-hidden shadow-2xl transition-all duration-300 border border-white/20 flex flex-col ${
                  deviceView === 'desktop'
                    ? 'w-full h-[450px]'
                    : deviceView === 'tablet'
                    ? 'w-[520px] h-[480px]'
                    : 'w-[320px] h-[480px]'
                }`}
              >
                {/* Browser top chrome */}
                <div className="bg-[#ECEAE1] px-3 py-2 border-b border-emerald-950/10 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 bg-white px-2 py-0.5 rounded text-[10px] text-emerald-950/60 font-mono truncate text-center">
                    {targetFrameUrl}
                  </div>
                  <a
                    href={targetFrameUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-emerald-950/60 hover:text-emerald-950 p-0.5"
                    title="Open full page"
                  >
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                {/* Iframe or fallback preview */}
                <iframe
                  src={targetFrameUrl}
                  title="Website Preview"
                  className="w-full flex-1 border-0 bg-white"
                  sandbox="allow-scripts allow-same-origin allow-forms"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-white px-6 py-4 border-t border-emerald-950/10 flex items-center justify-between">
          <span className="text-xs text-emerald-950/60">
            Powered by Abdullah Web Developer Portfolio
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-emerald-950 hover:bg-emerald-900 text-white font-bold text-xs rounded-xl transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
