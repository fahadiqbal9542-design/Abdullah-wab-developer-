import React from 'react';
import { X, Globe, ExternalLink, MessageSquare, CheckCircle2 } from 'lucide-react';
import { DeveloperProject } from '../../types/abdullah';

interface ProjectDetailModalProps {
  project: DeveloperProject | null;
  onClose: () => void;
  whatsappNumber: string;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  whatsappNumber,
}) => {
  if (!project) return null;

  const handleRequestSimilar = () => {
    const text = encodeURIComponent(
      `Hi Abdullah, I reviewed your project "${project.title}" (${project.category}) on your portfolio and I would love to build a similar application for my business.`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 bg-black/85 backdrop-blur-xs animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative bg-white text-emerald-950 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-white/10 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-[#ECEAE1] text-emerald-950 hover:bg-emerald-950 hover:text-white transition-colors flex items-center justify-center cursor-pointer shadow-xs"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12">
          {/* Left Column: Image & Live Link */}
          <div className="md:col-span-7 bg-[#ECEAE1] relative overflow-hidden flex flex-col items-center justify-center p-6 md:p-8 border-b md:border-b-0 md:border-r border-emerald-950/5 min-h-[300px]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto max-h-[420px] object-cover rounded-xl shadow-md"
              referrerPolicy="no-referrer"
            />

            {project.websiteUrl && (
              <div className="w-full pt-4">
                <a
                  href={project.websiteUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 bg-emerald-950 hover:bg-emerald-900 text-white font-bold text-xs tracking-wider rounded-xl flex items-center justify-center gap-2 transition-all shadow-md"
                >
                  <Globe className="w-4 h-4 text-amber-400" />
                  <span>VISIT LIVE WEBSITE DEPLOYMENT</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            )}
          </div>

          {/* Right Column: Specifications & Deliverables */}
          <div className="md:col-span-5 p-6 md:p-8 space-y-5">
            <div>
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-amber-600 mb-1">
                <span>{project.category}</span>
                <span>•</span>
                <span>{project.year}</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-emerald-950 leading-tight">
                {project.title}
              </h3>
              <p className="text-xs font-semibold text-emerald-950/60 mt-1">
                Client: {project.client}
              </p>
            </div>

            <p className="text-xs sm:text-[13px] text-emerald-950/80 leading-relaxed font-normal">
              {project.description}
            </p>

            {/* Deliverables */}
            {project.deliverables && project.deliverables.length > 0 && (
              <div className="space-y-2 pt-2 border-t border-emerald-950/5">
                <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-950/60 block">
                  Core Architecture Deliverables
                </span>
                <div className="space-y-1.5">
                  {project.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-emerald-950/85">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Request Similar App Action */}
            <div className="pt-4 border-t border-emerald-950/5">
              <button
                type="button"
                onClick={handleRequestSimilar}
                className="w-full py-3 bg-amber-500 hover:bg-amber-600 text-emerald-950 font-bold text-xs tracking-wider rounded-xl uppercase flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-sm"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>REQUEST SIMILAR APPLICATION</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
