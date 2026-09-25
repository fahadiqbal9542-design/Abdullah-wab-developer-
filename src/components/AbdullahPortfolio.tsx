import React, { useState } from 'react';
import {
  Plus,
  Globe,
  ExternalLink,
  Eye,
  Edit2,
  Trash2,
  ArrowRight,
  Link as LinkIcon,
  Check,
  X,
  Clipboard,
} from 'lucide-react';
import { DeveloperProject, ProjectCategory } from '../types/abdullah';
import { ScrollableProjectImage } from './ScrollableProjectImage';
import { InteractiveTiltCard } from './InteractiveTiltCard';

interface AbdullahPortfolioProps {
  projects: DeveloperProject[];
  onOpenProject: (project: DeveloperProject) => void;
  onOpenAddProject: () => void;
  onEditProject: (project: DeveloperProject) => void;
  onDeleteProject: (id: string) => void;
  onResetProjects: () => void;
  onUpdateProjectUrl?: (projectId: string, newUrl: string) => void;
  onPreviewWebsite?: (url: string, title: string) => void;
}

export const AbdullahPortfolio: React.FC<AbdullahPortfolioProps> = ({
  projects,
  onOpenProject,
  onOpenAddProject,
  onEditProject,
  onDeleteProject,
  onResetProjects,
  onUpdateProjectUrl,
  onPreviewWebsite,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const [quickLinkProject, setQuickLinkProject] = useState<DeveloperProject | null>(null);
  const [quickUrlInput, setQuickUrlInput] = useState('');

  const categories: ProjectCategory[] = [
    'All',
    'Frontend',
    'Full-Stack',
    'E-Commerce',
    'UI/UX',
    'APIs',
  ];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter((p) => p.category.toLowerCase() === selectedCategory.toLowerCase());

  const handleOpenQuickLink = (e: React.MouseEvent, project: DeveloperProject) => {
    e.stopPropagation();
    setQuickLinkProject(project);
    setQuickUrlInput(project.websiteUrl || '');
  };

  const handleSaveQuickLink = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickLinkProject) return;

    let clean = quickUrlInput.trim();
    if (clean && !clean.startsWith('http://') && !clean.startsWith('https://')) {
      clean = 'https://' + clean;
    }

    if (onUpdateProjectUrl) {
      onUpdateProjectUrl(quickLinkProject.id, clean);
    } else {
      quickLinkProject.websiteUrl = clean;
    }
    setQuickLinkProject(null);
  };

  const handlePasteClipboard = async () => {
    try {
      const text = await navigator.clipboard.readText();
      if (text) {
        setQuickUrlInput(text);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section id="portfolio" className="bg-[#ECEAE1] py-16 px-6 border-b border-emerald-950/10">
      <div className="max-w-6xl mx-auto text-left">
        {/* Section Header & Actions */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <span className="text-amber-600 text-xs font-bold tracking-[0.2em] uppercase block">
              LIVE WEB APPLICATIONS
            </span>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-emerald-950 tracking-tight mt-1">
              Portfolio Showcase
            </h2>
            <p className="text-xs text-emerald-950/70 mt-1">
              Har project par apna live website link ya GitHub link paste kar sakte hain!
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* Filter Tabs */}
            <div className="flex gap-1 bg-white p-1 rounded-xl border border-emerald-950/5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 text-[11px] font-bold tracking-wider rounded-lg transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-emerald-950 text-white shadow-sm'
                      : 'text-emerald-950/60 hover:text-emerald-950'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Add Website & Image Button */}
            <button
              onClick={onOpenAddProject}
              className="bg-amber-500 hover:bg-amber-600 text-emerald-950 font-bold text-[11px] tracking-wider px-4 py-2.5 rounded-xl uppercase flex items-center gap-1.5 cursor-pointer shadow-md transition-all scale-102 hover:scale-105"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Website & Image</span>
            </button>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <InteractiveTiltCard
              key={project.id}
              maxTilt={5}
              spotlightColor="rgba(245, 158, 11, 0.12)"
              className="h-full rounded-2xl"
            >
              <div
                className="group relative bg-white rounded-2xl overflow-hidden border border-emerald-950/10 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between h-full"
              >
                {/* Scrolling Mockup Window Image on Hover */}
                <div className="relative">
                  <ScrollableProjectImage
                    project={project}
                    onOpenProject={onOpenProject}
                    onPreviewWebsite={onPreviewWebsite}
                    onOpenQuickLink={handleOpenQuickLink}
                  />

                  {/* Edit & Delete Action Buttons (Top Right) */}
                  <div className="absolute top-2 right-2 z-30 flex items-center gap-1.5 opacity-90 sm:opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onEditProject(project);
                      }}
                      className="bg-slate-900/90 hover:bg-amber-500 hover:text-emerald-950 text-white w-7 h-7 rounded-lg flex items-center justify-center transition-all cursor-pointer shadow-md border border-white/10 hover:scale-105"
                      title="Change Image or Full Project Details"
                    >
                      <Edit2 className="w-3 h-3" />
                    </button>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onDeleteProject(project.id);
                      }}
                      className="bg-red-600/90 hover:bg-red-600 text-white w-7 h-7 rounded-lg flex items-center justify-center transition-all cursor-pointer shadow-md hover:scale-105"
                      title="Delete Project Item"
                    >
                      <Trash2 className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                {/* Card Bottom Meta */}
                <div
                  onClick={() => onOpenProject(project)}
                  className="p-4 flex items-center justify-between bg-white border-t border-emerald-950/5 cursor-pointer hover:bg-slate-50/80 transition-colors"
                >
                  <div className="min-w-0 pr-2">
                    <h4 className="text-xs font-bold text-emerald-950 truncate group-hover:text-amber-600 transition-colors">
                      {project.title}
                    </h4>
                    <div className="flex items-center gap-2 text-[10px] text-emerald-950/50 mt-1 font-semibold">
                      <span className="bg-emerald-950/5 px-2 py-0.5 rounded text-emerald-950/80">{project.category}</span>
                      <span>•</span>
                      <span>{project.year}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 shrink-0" onClick={(e) => e.stopPropagation()}>
                    {project.websiteUrl ? (
                      <div className="flex items-center gap-1">
                        <a
                          href={project.websiteUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-[10px] font-bold text-amber-600 hover:text-amber-700 flex items-center gap-1 bg-amber-500/10 px-2 py-1 rounded-lg transition-colors cursor-pointer"
                          title="Open Live Website in New Tab"
                        >
                          <Globe className="w-3 h-3" />
                          <span>Link</span>
                          <ExternalLink className="w-2.5 h-2.5" />
                        </a>
                        <button
                          type="button"
                          onClick={(e) => handleOpenQuickLink(e, project)}
                          className="p-1 text-emerald-950/50 hover:text-emerald-950 transition-colors cursor-pointer"
                          title="Change Link"
                        >
                          <Edit2 className="w-3 h-3" />
                        </button>
                      </div>
                    ) : (
                      <button
                        type="button"
                        onClick={(e) => handleOpenQuickLink(e, project)}
                        className="text-[10px] font-bold text-emerald-950 bg-[#ECEAE1] hover:bg-amber-500 px-2 py-1 rounded-lg transition-colors flex items-center gap-1 cursor-pointer"
                      >
                        <Plus className="w-3 h-3" />
                        <span>Paste Link</span>
                      </button>
                    )}
                    <ArrowRight className="w-4 h-4 text-amber-500 shrink-0 transform group-hover:translate-x-1 transition-transform ml-1" />
                  </div>
                </div>
              </div>
            </InteractiveTiltCard>
          ))}
        </div>

        {/* Footer Note & Reset Action */}
        <div className="mt-8 flex flex-col items-center gap-2 text-center">
          <p className="text-xs text-emerald-950/60 italic leading-relaxed">
            * <strong>Tip:</strong> Kisi bhi project ke <strong>"Link"</strong> button par apna link lagane ke liye <strong>Pencil icon</strong> ya <strong>"Paste Link"</strong> par click karein!
          </p>
          <button
            onClick={onResetProjects}
            className="text-[10px] tracking-widest uppercase font-bold text-emerald-950/45 hover:text-emerald-950 transition-colors cursor-pointer"
          >
            Reset Portfolio Grid to Default Demos
          </button>
        </div>
      </div>

      {/* QUICK PASTE LINK POPUP MODAL */}
      {quickLinkProject && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-fadeIn text-left"
          onClick={() => setQuickLinkProject(null)}
        >
          <div
            className="relative bg-white text-emerald-950 rounded-3xl max-w-md w-full overflow-hidden shadow-2xl border border-emerald-950/10 p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-emerald-950/10">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-600 flex items-center justify-center">
                  <Globe className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-base text-emerald-950">
                    Paste Website Link
                  </h3>
                  <p className="text-[10px] text-emerald-950/60 truncate max-w-[220px]">
                    Project: {quickLinkProject.title}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setQuickLinkProject(null)}
                className="p-1 rounded-full text-emerald-950/50 hover:text-emerald-950 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleSaveQuickLink} className="space-y-4">
              <div>
                <label className="block text-[11px] font-bold text-emerald-950 mb-1">
                  Kahan ka link paste karna hai?
                </label>
                <p className="text-[11px] text-emerald-950/70 mb-2 leading-relaxed">
                  Yahan aap apne <strong>live project ka URL</strong> (jaise Vercel link, GitHub repository, Netlify link, ya client ki live website) paste kar sakte hain.
                </p>

                <div className="relative">
                  <input
                    type="text"
                    required
                    autoFocus
                    placeholder="https://my-cool-project.vercel.app"
                    value={quickUrlInput}
                    onChange={(e) => setQuickUrlInput(e.target.value)}
                    className="w-full bg-[#F4F4F0] border border-emerald-950/15 px-3.5 py-2.5 pr-20 rounded-xl text-xs font-mono text-emerald-950 focus:outline-none focus:ring-1 focus:ring-amber-500"
                  />
                  <button
                    type="button"
                    onClick={handlePasteClipboard}
                    className="absolute right-2 top-1/2 -translate-y-1/2 px-2.5 py-1 bg-white hover:bg-emerald-950/5 text-emerald-950 text-[10px] font-bold rounded-lg border border-emerald-950/10 flex items-center gap-1 transition-colors cursor-pointer"
                    title="Paste from clipboard"
                  >
                    <Clipboard className="w-3 h-3 text-amber-600" />
                    <span>Paste</span>
                  </button>
                </div>

                {quickUrlInput.trim() && (
                  <div className="pt-2 flex items-center justify-between text-[11px]">
                    <span className="text-emerald-950/60">Pehle link check karein:</span>
                    <a
                      href={quickUrlInput.trim().startsWith('http') ? quickUrlInput.trim() : `https://${quickUrlInput.trim()}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-amber-600 hover:text-amber-700 font-bold flex items-center gap-1 bg-amber-500/10 px-2 py-0.5 rounded-md"
                    >
                      <Globe className="w-3 h-3" />
                      <span>Test Website Link</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                )}
              </div>

              <div className="bg-amber-500/10 p-3 rounded-xl border border-amber-500/20 text-[11px] text-amber-900 leading-normal">
                💡 <strong>Kamyabi:</strong> Jab koi is card par <strong>"Live Site"</strong> ya <strong>"Link"</strong> dabayega, to yeh link seedha new tab mein khul jayega!
              </div>

              <div className="flex gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setQuickLinkProject(null)}
                  className="flex-1 py-2.5 bg-gray-100 hover:bg-gray-200 text-emerald-950 text-xs font-bold rounded-xl transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 bg-emerald-950 hover:bg-emerald-900 text-white text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-md"
                >
                  <Check className="w-3.5 h-3.5 text-amber-400" />
                  <span>Save Link</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
