import React from 'react';
import { X, FileText, Download, Mail, MapPin, Check } from 'lucide-react';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShowToast: (msg: string, type: 'success' | 'error' | 'info') => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose, onShowToast }) => {
  if (!isOpen) return null;

  const handleDownloadCv = () => {
    onShowToast('CV Download Triggered successfully! Abdullah_Resume_FullStack.pdf is ready.', 'success');
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 bg-black/85 backdrop-blur-xs animate-fadeIn text-left"
      onClick={onClose}
    >
      <div
        className="relative bg-white text-emerald-950 rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-emerald-950/10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-emerald-950 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/60 hover:text-white w-8 h-8 rounded-full bg-white/10 flex items-center justify-center cursor-pointer transition-colors"
          >
            <X className="w-4.5 h-4.5" />
          </button>
          <div className="flex items-center gap-1.5 text-amber-400 text-[10px] font-bold tracking-widest uppercase mb-1">
            <FileText className="w-4 h-4 text-amber-400" />
            <span>PROFESSIONAL CURRICULUM VITAE</span>
          </div>
          <h3 className="text-2xl font-serif font-bold">Abdullah</h3>
          <p className="text-xs text-slate-300 mt-1 uppercase tracking-wider font-semibold">
            Lead Full-Stack Web Developer & Solutions Architect
          </p>
        </div>

        {/* Modal Scroll Content */}
        <div className="max-h-[60vh] overflow-y-auto p-6 space-y-6 text-left">
          {/* Summary */}
          <div>
            <h4 className="text-xs font-bold text-amber-600 tracking-wider uppercase border-b border-emerald-950/10 pb-1.5 mb-2.5">
              Professional Summary
            </h4>
            <p className="text-xs text-emerald-950/80 leading-relaxed font-normal">
              Highly efficient and results-driven Full-Stack Web Developer with a strong track record of designing, building, and launching high-performance SaaS engines, dynamic custom marketplaces, and secure rate-limited API systems. Expert in React.js, Next.js, and TypeScript, with extensive knowledge of clean layout styling utilizing Tailwind CSS and scalable backend schemas. Committed to producing pristine, production-grade applications that guarantee high uptime and conversion success.
            </p>
          </div>

          {/* Technical Core Skills */}
          <div>
            <h4 className="text-xs font-bold text-amber-600 tracking-wider uppercase border-b border-emerald-950/10 pb-1.5 mb-2.5">
              Technical Core Skills
            </h4>
            <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-emerald-950/90">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                <span>React & Next.js (SSR / SPA)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                <span>TypeScript Typed Architecture</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                <span>Tailwind CSS Bespoke Layouts</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                <span>Node.js, Express & REST APIs</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                <span>PostgreSQL & Relational DBs</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                <span>Stripe Webhook Commerce</span>
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <h4 className="text-xs font-bold text-amber-600 tracking-wider uppercase border-b border-emerald-950/10 pb-1.5 mb-3.5">
              Work Experience
            </h4>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-start">
                  <h5 className="text-xs font-extrabold text-emerald-950">
                    Lead Full-Stack Web Architect
                  </h5>
                  <span className="text-[10px] font-bold text-emerald-950/50">
                    2024 - PRESENT
                  </span>
                </div>
                <p className="text-[10px] text-amber-600 font-bold uppercase mt-0.5">
                  Freelance & Remote Solutions
                </p>
                <ul className="list-disc pl-4 mt-1.5 text-[11px] text-emerald-950/75 space-y-1">
                  <li>Designed and successfully launched 5+ premium multi-tier enterprise SaaS dashboards.</li>
                  <li>Implemented JWT authorization controllers and optimized database pre-fetch functions for zero loading lags.</li>
                  <li>Engineered client e-commerce platforms handling Stripe payments securely with 100% data integrity.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-start">
                  <h5 className="text-xs font-extrabold text-emerald-950">
                    Frontend Developer & Designer
                  </h5>
                  <span className="text-[10px] font-bold text-emerald-950/50">
                    2022 - 2024
                  </span>
                </div>
                <p className="text-[10px] text-amber-600 font-bold uppercase mt-0.5">
                  Vivid Softworks, Agency
                </p>
                <ul className="list-disc pl-4 mt-1.5 text-[11px] text-emerald-950/75 space-y-1">
                  <li>Created modular design systems on top of Tailwind CSS for fast visual deployments.</li>
                  <li>Wrote standard unit test configurations and resolved cross-browser layout discrepancies.</li>
                  <li>Cooperated in Figma UI/UX translation phases to boost user experience and visual alignment.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* System Highlights */}
          <div>
            <h4 className="text-xs font-bold text-amber-600 tracking-wider uppercase border-b border-emerald-950/10 pb-1.5 mb-2.5">
              Major System Highlights
            </h4>
            <div className="space-y-2 text-xs">
              <p className="text-[11px] text-emerald-950/85">
                <strong className="text-emerald-950 font-bold">Nova SaaS:</strong> Compiled responsive layout graphics and secured microservice proxy endpoints with 99.8% client uptime.
              </p>
              <p className="text-[11px] text-emerald-950/85">
                <strong className="text-emerald-950 font-bold">Zenith Clothing:</strong> Multi-cart state management engine featuring real-time local cache syncing and smooth animation triggers.
              </p>
            </div>
          </div>

          {/* Contact Coordinates */}
          <div>
            <h4 className="text-xs font-bold text-amber-600 tracking-wider uppercase border-b border-emerald-950/10 pb-1.5 mb-2.5">
              Contact Coordinates
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-emerald-950/80">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-500" />
                <span>abdullah.dev.pro@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-500" />
                <span>Pakistan (Remote / Worldwide)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="bg-[#F4F4F0] p-6 border-t border-emerald-950/10 flex gap-3">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 bg-white border border-emerald-950/15 text-emerald-950 text-xs font-bold py-3 rounded-xl uppercase hover:bg-emerald-950/5 cursor-pointer text-center transition-colors"
          >
            CLOSE CV
          </button>
          <button
            type="button"
            onClick={handleDownloadCv}
            className="flex-1 bg-emerald-950 hover:bg-emerald-900 text-white text-xs font-bold py-3 rounded-xl uppercase flex items-center justify-center gap-2 cursor-pointer shadow-md transition-all hover:scale-102"
          >
            <Download className="w-4 h-4 text-amber-400" />
            <span>DOWNLOAD CV (PDF)</span>
          </button>
        </div>
      </div>
    </div>
  );
};
