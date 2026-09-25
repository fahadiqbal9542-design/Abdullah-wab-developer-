import React, { useState } from 'react';
import {
  Lightbulb,
  Monitor,
  Clock,
  Award,
  Smile,
  Send,
  Eye,
  Plus,
} from 'lucide-react';
import { Project, ProjectCategory } from '../types/portfolio';

interface BottomShowcaseProps {
  projects: Project[];
  onOpenProject: (project: Project) => void;
  onOpenContact: () => void;
  onOpenAddProject: () => void;
}

export const BottomShowcaseSection: React.FC<BottomShowcaseProps> = ({
  projects,
  onOpenProject,
  onOpenContact,
  onOpenAddProject,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');

  const categories: ProjectCategory[] = [
    'All',
    'Logos',
    'Branding',
    'Social Media',
    'Posters',
    'Resumes',
    'Presentations',
  ];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  const getWhyChooseIcon = (title: string) => {
    switch (title) {
      case 'Creative Ideas':
        return <Lightbulb className="w-5 h-5 text-[#D4A359]" />;
      case 'Modern Design':
        return <Monitor className="w-5 h-5 text-[#D4A359]" />;
      case 'Fast Delivery':
        return <Clock className="w-5 h-5 text-[#D4A359]" />;
      case 'High Quality':
        return <Award className="w-5 h-5 text-[#D4A359]" />;
      case 'Client Satisfaction':
        return <Smile className="w-5 h-5 text-[#D4A359]" />;
      default:
        return <Award className="w-5 h-5 text-[#D4A359]" />;
    }
  };

  return (
    <section id="portfolio" className="py-16 bg-[#F3EFEA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Section 1: WHY CHOOSE ME? (lg:col-span-3) */}
          <div className="lg:col-span-3 bg-white/70 backdrop-blur-xs rounded-2xl p-6 sm:p-7 border border-[#E5DFD5] shadow-sm flex flex-col justify-between text-left">
            <div>
              <h3 className="text-sm sm:text-base font-bold tracking-[0.16em] text-[#1B2A22] uppercase mb-6 pb-2 border-b border-[#1B2A22]/10">
                WHY CHOOSE ME?
              </h3>

              {/* 5 circular badges in column/grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-4">
                {[
                  { title: 'Creative Ideas' },
                  { title: 'Modern Design' },
                  { title: 'Fast Delivery' },
                  { title: 'High Quality' },
                  { title: 'Client Satisfaction' },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center text-center p-2 rounded-xl hover:bg-[#EFECE6] transition-colors"
                  >
                    <div className="w-11 h-11 rounded-full bg-[#13221B] border border-[#D4A359]/40 flex items-center justify-center mb-2 shadow-xs group-hover:scale-105 transition-transform">
                      {getWhyChooseIcon(item.title)}
                    </div>
                    <span className="text-[11px] font-semibold text-[#1B2A22] leading-tight">
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#1B2A22]/10 text-center">
              <span className="text-[11px] text-[#1B2A22]/70 font-medium">
                100% Guaranteed Dedication
              </span>
            </div>
          </div>

          {/* Section 2: MY WORK (lg:col-span-6) */}
          <div className="lg:col-span-6 bg-white/70 backdrop-blur-xs rounded-2xl p-6 sm:p-7 border border-[#E5DFD5] shadow-sm flex flex-col justify-between text-left">
            <div>
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#1B2A22]/10">
                <h3 className="text-sm sm:text-base font-bold tracking-[0.16em] text-[#1B2A22] uppercase">
                  MY WORK
                </h3>
                <button
                  onClick={onOpenAddProject}
                  className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#13221B] hover:text-[#D4A359] px-2.5 py-1 bg-[#EFECE6] rounded-md transition-colors cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Project</span>
                </button>
              </div>

              {/* 4 Project Thumbnails matching image.png */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
                {filteredProjects.slice(0, 4).map((project) => (
                  <div
                    key={project.id}
                    onClick={() => onOpenProject(project)}
                    className="group relative rounded-xl overflow-hidden bg-black/5 aspect-3/4 border border-[#E5DFD5] cursor-pointer shadow-xs hover:shadow-md transition-all transform hover:-translate-y-1"
                  >
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-[#13221B]/70 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-2 text-center">
                      <Eye className="w-5 h-5 text-[#D4A359] mb-1" />
                      <span className="text-[10px] font-semibold text-white line-clamp-2">
                        {project.title}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Category tags row matching template */}
              <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 text-[11px] text-[#1B2A22]/80 font-medium">
                {categories.map((cat, i) => (
                  <React.Fragment key={cat}>
                    <button
                      onClick={() => setSelectedCategory(cat)}
                      className={`hover:text-[#13221B] transition-colors cursor-pointer px-1 py-0.5 rounded ${
                        selectedCategory === cat
                          ? 'text-[#13221B] font-bold underline decoration-[#D4A359] decoration-2'
                          : 'text-[#1B2A22]/70'
                      }`}
                    >
                      {cat}
                    </button>
                    {i < categories.length - 1 && (
                      <span className="text-[#D4A359] select-none">•</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-[#1B2A22]/10 text-center">
              <span className="text-[11px] text-[#1B2A22]/70">
                Click any design to view full high-resolution details
              </span>
            </div>
          </div>

          {/* Section 3: LET'S WORK TOGETHER! (lg:col-span-3) */}
          <div className="lg:col-span-3 bg-[#EAE4DC] rounded-2xl p-6 sm:p-7 border border-[#E5DFD5] shadow-sm flex flex-col justify-between text-left relative overflow-hidden">
            {/* Botanical Branch Shadow on bottom corner */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 opacity-25 pointer-events-none select-none">
              <svg viewBox="0 0 100 100" fill="currentColor" className="text-[#13221B]">
                <path d="M10 90 Q 50 40 90 10" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M25 75 C 40 60 70 70 60 85 Z" />
                <path d="M45 55 C 60 40 90 50 80 65 Z" />
                <path d="M65 35 C 75 20 95 30 85 45 Z" />
              </svg>
            </div>

            <div className="relative z-10">
              <h3 className="text-sm sm:text-base font-bold tracking-[0.16em] text-[#1B2A22] uppercase mb-4 pb-2 border-b border-[#1B2A22]/10">
                LET'S WORK TOGETHER!
              </h3>

              <p className="text-xs sm:text-[13px] text-[#1B2A22]/80 leading-relaxed font-normal mb-8">
                Have a project in mind? Let's create something amazing together.
              </p>
            </div>

            <div className="relative z-10">
              <button
                onClick={onOpenContact}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#13221B] hover:bg-[#1C3228] text-white rounded-full text-xs font-semibold tracking-wider transition-all transform hover:scale-[1.02] shadow-sm cursor-pointer"
              >
                <span>LET'S TALK</span>
                <Send className="w-3.5 h-3.5 text-[#D4A359] transform -rotate-12" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
