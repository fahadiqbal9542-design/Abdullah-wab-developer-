import React, { useState } from 'react';
import { Calendar, MapPin, Mail, MessageSquare, Copy, Check, Edit2 } from 'lucide-react';
import { InteractiveTiltCard } from './InteractiveTiltCard';

interface AbdullahAboutProps {
  whatsappNumber: string;
  onUpdateWhatsapp: (newNumber: string) => void;
  onShowToast: (msg: string, type: 'success' | 'error' | 'info') => void;
}

export const AbdullahAbout: React.FC<AbdullahAboutProps> = ({
  whatsappNumber,
  onUpdateWhatsapp,
  onShowToast,
}) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isEditingPhone, setIsEditingPhone] = useState(false);
  const [phoneInput, setPhoneInput] = useState(whatsappNumber);

  const email = 'abdullah.dev.pro@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    onShowToast('Email copied to clipboard!', 'success');
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSavePhone = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = phoneInput.replace(/[^0-9]/g, '');
    if (clean.length < 8) {
      onShowToast('Please enter a valid phone number with country code (e.g. 923000000000)', 'error');
      return;
    }
    onUpdateWhatsapp(clean);
    setIsEditingPhone(false);
    onShowToast('WhatsApp number updated successfully!', 'success');
  };

  return (
    <section id="about" className="bg-emerald-950 text-white py-16 px-6 relative overflow-hidden">
      {/* Decorative Dotted Matrix (Top Right) */}
      <div className="absolute top-8 right-8 grid grid-cols-4 gap-2 opacity-20 pointer-events-none select-none">
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-amber-400" />
        ))}
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column: Bio */}
        <div className="lg:col-span-6 space-y-4 text-left">
          <div>
            <span className="text-amber-500 text-xs font-bold tracking-[0.25em] uppercase block mb-2">
              ABOUT ME
            </span>
            <div className="inline-block">
              <h2 className="text-4xl lg:text-5xl font-serif font-medium text-white tracking-tight">
                I'm Abdullah.
              </h2>
              <div className="h-0.5 w-full bg-amber-500 mt-2.5 rounded-full" />
            </div>
          </div>

          <p className="text-slate-300 text-sm lg:text-base leading-relaxed font-normal pt-2">
            I am an energetic Web Developer and Full-Stack Architect focused on building scalable cloud-native architectures, beautiful React web apps, SaaS tools, and fast APIs. Committed to writing maintainable, clean code that translates complex business requirements into elegant digital realities.
          </p>

          <p className="text-slate-400 text-xs leading-relaxed">
            With years of hands-on software development experience across modern tech ecosystems, I help startups, founders, and companies turn prototypes into production-ready platforms with reliable performance.
          </p>
        </div>

        {/* Center/Right: Coordinates & Circular Seal */}
        <div className="lg:col-span-6 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Coordinates List */}
          <div className="md:col-span-7 space-y-3 text-left">
            {/* Experience */}
            <InteractiveTiltCard maxTilt={5} spotlightColor="rgba(245, 158, 11, 0.2)">
              <div className="flex items-center gap-3 p-3 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 hover:border-amber-500/40 transition-all shadow-xs hover:shadow-lg">
                <div className="w-9 h-9 rounded-lg bg-amber-500/15 flex items-center justify-center text-amber-400 shrink-0">
                  <Calendar className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Experience</p>
                  <p className="text-xs font-semibold text-white">4+ Years (2022 - Present)</p>
                </div>
              </div>
            </InteractiveTiltCard>

            {/* Location */}
            <InteractiveTiltCard maxTilt={5} spotlightColor="rgba(245, 158, 11, 0.2)">
              <div className="flex items-center gap-3 p-3 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 hover:border-amber-500/40 transition-all shadow-xs hover:shadow-lg">
                <div className="w-9 h-9 rounded-lg bg-amber-500/15 flex items-center justify-center text-amber-400 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Location</p>
                  <p className="text-xs font-semibold text-white">Pakistan (Remote / Worldwide)</p>
                </div>
              </div>
            </InteractiveTiltCard>

            {/* Email with copy */}
            <InteractiveTiltCard maxTilt={5} spotlightColor="rgba(245, 158, 11, 0.2)">
              <div className="flex items-center justify-between p-3 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 hover:border-amber-500/40 transition-all shadow-xs hover:shadow-lg">
                <div className="flex items-center gap-3 truncate mr-2">
                  <div className="w-9 h-9 rounded-lg bg-amber-500/15 flex items-center justify-center text-amber-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Direct Email</p>
                    <a
                      href={`mailto:${email}`}
                      className="text-xs font-semibold text-white hover:text-amber-400 transition-colors truncate block"
                    >
                      {email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors cursor-pointer shrink-0"
                  title="Copy Email"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </InteractiveTiltCard>

            {/* WhatsApp with Direct Link & Edit option */}
            <InteractiveTiltCard maxTilt={5} spotlightColor="rgba(37, 211, 102, 0.2)">
              <div className="p-3 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 hover:border-[#25D366]/40 transition-all shadow-xs hover:shadow-lg">
                {isEditingPhone ? (
                  <form onSubmit={handleSavePhone} className="flex items-center gap-2">
                    <input
                      type="text"
                      value={phoneInput}
                      onChange={(e) => setPhoneInput(e.target.value)}
                      placeholder="923000000000"
                      className="w-full bg-emerald-900/60 border border-amber-500/50 px-2.5 py-1.5 rounded-lg text-xs text-white focus:outline-none font-mono"
                    />
                    <button
                      type="submit"
                      className="px-3 py-1.5 bg-amber-500 hover:bg-amber-600 text-emerald-950 text-xs font-bold rounded-lg cursor-pointer shrink-0"
                    >
                      Save
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsEditingPhone(false)}
                      className="px-2 py-1.5 text-xs text-slate-400 hover:text-white cursor-pointer"
                    >
                      Cancel
                    </button>
                  </form>
                ) : (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[#25D366]/20 flex items-center justify-center text-[#25D366] shrink-0">
                        <MessageSquare className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">WhatsApp Contact</p>
                        <a
                          href={`https://wa.me/${whatsappNumber}?text=Hi%20Abdullah,%20I%20reviewed%20your%20portfolio%20and%20would%20love%20to%20discuss%20a%20project!`}
                          target="_blank"
                          rel="noreferrer"
                          className="text-xs font-semibold text-[#25D366] hover:underline block"
                        >
                          +{whatsappNumber}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => setIsEditingPhone(true)}
                        className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors cursor-pointer"
                        title="Edit WhatsApp number"
                      >
                        <Edit2 className="w-3.5 h-3.5" />
                      </button>
                      <a
                        href={`https://wa.me/${whatsappNumber}?text=Hi%20Abdullah,%20I%20reviewed%20your%20portfolio%20and%20would%20love%20to%20discuss%20a%20project!`}
                        target="_blank"
                        rel="noreferrer"
                        className="px-2.5 py-1 bg-[#25D366] hover:bg-[#1EBE5D] text-emerald-950 font-bold text-[10px] rounded-lg tracking-wider transition-colors"
                      >
                        CHAT
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </InteractiveTiltCard>
          </div>

          {/* Circular Gold Seal / Badge */}
          <div className="md:col-span-5 flex justify-center">
            <div className="relative w-40 h-40 flex items-center justify-center group cursor-default">
              {/* Rotating Circular SVG Text */}
              <svg className="w-full h-full animate-[spin_20s_linear_infinite]" viewBox="0 0 160 160">
                <defs>
                  <path
                    id="circlePath"
                    d="M 80, 80 m -60, 0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
                  />
                </defs>
                <text className="text-[9.5px] uppercase tracking-[0.25em] fill-amber-400 font-bold">
                  <textPath href="#circlePath" startOffset="0%">
                    ABDULLAH PREMIUM PORTFOLIO • ABDULLAH WEB DEVELOPER •
                  </textPath>
                </text>
              </svg>

              {/* Center Initial Stamp */}
              <div className="absolute inset-4 rounded-full border-2 border-amber-500/40 bg-emerald-900/40 flex flex-col items-center justify-center shadow-inner">
                <span className="font-serif text-4xl font-bold text-amber-400 leading-none">
                  A
                </span>
                <span className="font-serif text-[10px] text-white mt-1 leading-none tracking-wide">
                  Abdullah
                </span>
                <span className="text-[7px] uppercase tracking-[0.25em] text-amber-500 mt-1 font-semibold">
                  DEVELOPER
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
