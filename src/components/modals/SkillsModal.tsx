import React, { useState } from 'react';
import { X, Code, Plus, Trash2, MessageSquare, Check, Sparkles } from 'lucide-react';
import { SKILLS_DATA } from '../../data/abdullahData';

interface SkillsModalProps {
  isOpen: boolean;
  onClose: () => void;
  additionalSkills: string[];
  onAddSkill: (skill: string) => void;
  onRemoveSkill: (skill: string) => void;
  whatsappNumber: string;
}

export const SkillsModal: React.FC<SkillsModalProps> = ({
  isOpen,
  onClose,
  additionalSkills,
  onAddSkill,
  onRemoveSkill,
  whatsappNumber,
}) => {
  const [newSkillText, setNewSkillText] = useState('');

  if (!isOpen) return null;

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (newSkillText.trim()) {
      onAddSkill(newSkillText.trim());
      setNewSkillText('');
    }
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
            <Code className="w-4 h-4 text-amber-400" />
            <span>PROFESSIONAL SKILLS PORTFOLIO</span>
          </div>
          <h3 className="text-xl lg:text-2xl font-serif font-bold">
            Abdullah's Technical Stack
          </h3>
          <p className="text-xs text-slate-300 mt-1">
            Detailed breakdown of production languages, toolsets, and architecture frameworks.
          </p>
        </div>

        {/* Content Body */}
        <div className="p-6 max-h-[70vh] overflow-y-auto space-y-6">
          {/* Core Frameworks Cards */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-emerald-950 uppercase tracking-wider">
              Primary Technologies
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {Object.entries(SKILLS_DATA).map(([tech, data]) => (
                <div
                  key={tech}
                  className="p-3.5 bg-[#F4F4F0] rounded-2xl border border-emerald-950/5 space-y-1.5"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-xs text-emerald-950">{tech}</span>
                    <span className="text-[10px] font-extrabold text-amber-700 bg-amber-500/15 px-2 py-0.5 rounded-full">
                      {data.rating}
                    </span>
                  </div>
                  <p className="text-[11px] text-emerald-950/70 leading-tight">
                    {data.full} • <span className="font-semibold text-emerald-950">{data.projects}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Skills Tags with Add/Remove */}
          <div className="pt-2 border-t border-emerald-950/5 space-y-3">
            <div className="flex justify-between items-center">
              <h4 className="text-xs font-bold text-emerald-950 uppercase tracking-wider">
                Specialized Competencies
              </h4>
              <span className="text-[10px] text-emerald-950/50 font-semibold">
                Click ✕ to remove
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {additionalSkills.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#ECEAE1] text-emerald-950 rounded-xl text-xs font-semibold group"
                >
                  <span>{skill}</span>
                  <button
                    onClick={() => onRemoveSkill(skill)}
                    className="text-emerald-950/40 hover:text-red-600 transition-colors cursor-pointer"
                    title={`Remove ${skill}`}
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>

            {/* Add Custom Skill Form */}
            <form onSubmit={handleAdd} className="flex gap-2 pt-2">
              <input
                type="text"
                placeholder="Add custom skill (e.g. GraphQL, Docker, Redis)..."
                value={newSkillText}
                onChange={(e) => setNewSkillText(e.target.value)}
                className="flex-1 bg-[#ECEAE1] border border-emerald-950/10 px-3.5 py-2 rounded-xl text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-amber-500 text-emerald-950"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-emerald-950 hover:bg-emerald-900 text-white text-xs font-bold rounded-xl flex items-center gap-1 transition-colors cursor-pointer shrink-0"
              >
                <Plus className="w-3.5 h-3.5 text-amber-400" />
                <span>Add Skill</span>
              </button>
            </form>
          </div>

          {/* Hire CTA */}
          <div className="p-4 bg-emerald-950 text-white rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <p className="text-xs font-bold text-white">Hire Abdullah for your next project!</p>
              <p className="text-[10px] text-slate-300">Send WhatsApp text with your project draft details.</p>
            </div>
            <a
              href={`https://wa.me/${whatsappNumber}?text=Hi%20Abdullah,%20I%20reviewed%20your%20skills%20on%20your%20skills%20page%20and%20would%20love%20to%20discuss%20a%20project!`}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-emerald-950 font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 transition-colors shrink-0"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Message Abdullah</span>
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#F4F4F0] border-t border-emerald-950/5 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-white border border-emerald-950/15 text-emerald-950 text-xs font-bold rounded-xl uppercase hover:bg-emerald-950/5 transition-colors cursor-pointer"
          >
            CLOSE VIEW
          </button>
        </div>
      </div>
    </div>
  );
};
