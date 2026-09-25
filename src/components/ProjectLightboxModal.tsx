import React from 'react';
import { X, Send, Tag, Calendar, User, ExternalLink } from 'lucide-react';
import { Project } from '../types/portfolio';

interface ProjectLightboxModalProps {
  project: Project | null;
  onClose: () => void;
  onInquire: (projectName: string) => void;
}

export const ProjectLightboxModal: React.FC<ProjectLightboxModalProps> = ({
  project,
  onClose,
  onInquire,
}) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-[#FAF8F5] rounded-3xl shadow-2xl border border-[#D4A359]/30 overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top close bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#13221B] text-white border-b border-[#D4A359]/30">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#D4A359]">
              {project.category}
            </span>
            <span className="text-gray-400">•</span>
            <span className="text-xs text-gray-300">{project.year || '2024'}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 max-h-[80vh] overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            {/* Image View */}
            <div className="md:col-span-7 rounded-2xl overflow-hidden bg-black/5 border border-gray-200 shadow-xs">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-auto max-h-[480px] object-contain mx-auto"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Project Details */}
            <div className="md:col-span-5 space-y-4">
              <div>
                <h3 className="font-serif-display text-2xl font-bold text-[#1B2A22] leading-tight">
                  {project.title}
                </h3>
                {project.client && (
                  <p className="text-xs text-[#D4A359] font-medium mt-1">
                    Client: {project.client}
                  </p>
                )}
              </div>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-light">
                {project.description ||
                  'Custom tailored visual concept and professional creative assets designed with precision and brand focus.'}
              </p>

              {/* Tags */}
              {project.tags && project.tags.length > 0 && (
                <div className="pt-2">
                  <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider block mb-2">
                    Design Disciplines
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-medium bg-[#EFECE6] text-[#1B2A22] px-2.5 py-1 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Button */}
              <div className="pt-4 border-t border-gray-200">
                <button
                  onClick={() => onInquire(project.title)}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-[#13221B] hover:bg-[#1C3228] text-white rounded-full text-xs font-semibold tracking-wider transition-colors shadow-sm cursor-pointer"
                >
                  <span>REQUEST SIMILAR DESIGN</span>
                  <Send className="w-3.5 h-3.5 text-[#D4A359]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
