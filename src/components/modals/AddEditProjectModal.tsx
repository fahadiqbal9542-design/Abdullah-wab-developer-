import React, { useState, useEffect } from 'react';
import { X, Upload, Camera, Globe, Plus, Check } from 'lucide-react';
import { DeveloperProject } from '../../types/abdullah';

interface AddEditProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  editingProject: DeveloperProject | null;
  onSaveProject: (project: DeveloperProject) => void;
  onShowToast: (msg: string, type: 'success' | 'error' | 'info') => void;
}

export const AddEditProjectModal: React.FC<AddEditProjectModalProps> = ({
  isOpen,
  onClose,
  editingProject,
  onSaveProject,
  onShowToast,
}) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Frontend');
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [client, setClient] = useState('');
  const [year, setYear] = useState('2024');
  const [description, setDescription] = useState('');
  const [deliverablesStr, setDeliverablesStr] = useState('');

  useEffect(() => {
    if (editingProject) {
      setTitle(editingProject.title);
      setCategory(editingProject.category);
      setWebsiteUrl(editingProject.websiteUrl || '');
      setImageUrl(editingProject.image);
      setClient(editingProject.client || '');
      setYear(editingProject.year || '2024');
      setDescription(editingProject.description || '');
      setDeliverablesStr(
        editingProject.deliverables ? editingProject.deliverables.join(', ') : ''
      );
    } else {
      setTitle('');
      setCategory('Frontend');
      setWebsiteUrl('');
      setImageUrl('');
      setClient('');
      setYear(new Date().getFullYear().toString());
      setDescription('');
      setDeliverablesStr('');
    }
  }, [editingProject, isOpen]);

  if (!isOpen) return null;

  // Handle local file upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          setImageUrl(reader.result);
          onShowToast('Image loaded from device successfully!', 'success');
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Automatic screenshot capture from live website URL
  const handleCaptureScreenshot = () => {
    let clean = websiteUrl.trim();
    if (!clean) {
      onShowToast('Please enter a website link first!', 'error');
      return;
    }
    if (!clean.startsWith('http://') && !clean.startsWith('https://')) {
      clean = 'https://' + clean;
    }
    const screenshotUrl = `https://s0.wp.com/mshots/v1/${encodeURIComponent(clean)}?w=1000`;
    setImageUrl(screenshotUrl);
    setWebsiteUrl(clean);
    onShowToast('Website homepage screenshot captured successfully!', 'success');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      onShowToast('Please enter a project title!', 'error');
      return;
    }

    const deliverables = deliverablesStr
      ? deliverablesStr.split(',').map((s) => s.trim()).filter(Boolean)
      : ['Responsive Layout Architecture', 'Full-Stack Integration'];

    const project: DeveloperProject = {
      id: editingProject ? editingProject.id : `proj-${Date.now()}`,
      title: title.trim(),
      category,
      websiteUrl: websiteUrl.trim() || undefined,
      image: imageUrl.trim() || 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80',
      client: client.trim() || 'Self-Initiated Project',
      year: year.trim() || '2024',
      description: description.trim() || 'High-performance application designed with modern architectural patterns.',
      deliverables,
    };

    onSaveProject(project);
    onClose();
    onShowToast(
      editingProject ? 'Project updated successfully!' : 'Project added to portfolio grid!',
      'success'
    );
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 bg-black/85 backdrop-blur-xs animate-fadeIn text-left"
      onClick={onClose}
    >
      <div
        className="relative bg-[#F4F4F0] text-emerald-950 rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-emerald-950/10"
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
          <span className="text-amber-400 text-[10px] font-bold tracking-widest uppercase block mb-1">
            PORTFOLIO MEDIA & LINK MANAGER
          </span>
          <h3 className="text-xl lg:text-2xl font-serif font-bold">
            {editingProject ? 'Update Project & Website' : 'Add Website Project'}
          </h3>
          <p className="text-xs text-slate-300 mt-1">
            Configure live link preview, screenshot, deliverables, and specs.
          </p>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
          {/* Title & Category */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[10px] font-bold text-emerald-950/60 uppercase tracking-wider mb-1">
                PROJECT TITLE *
              </label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. Nova Analytics Platform"
                className="w-full bg-white border border-emerald-950/10 px-3.5 py-2.5 rounded-xl text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-amber-500 text-emerald-950"
              />
            </div>

            <div>
              <label className="block text-[10px] font-bold text-emerald-950/60 uppercase tracking-wider mb-1">
                CATEGORY
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full bg-white border border-emerald-950/10 px-3.5 py-2.5 rounded-xl text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-amber-500 text-emerald-950"
              >
                <option value="Frontend">Frontend</option>
                <option value="Full-Stack">Full-Stack</option>
                <option value="E-Commerce">E-Commerce</option>
                <option value="UI/UX">UI/UX</option>
                <option value="APIs">APIs</option>
              </select>
            </div>
          </div>

          {/* Website URL + Auto Screenshot Capture */}
          <div>
            <label className="block text-[10px] font-bold text-emerald-950/60 uppercase tracking-wider mb-1">
              LIVE WEBSITE URL (AUTOCAPTURE ENABLED)
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={websiteUrl}
                onChange={(e) => setWebsiteUrl(e.target.value)}
                placeholder="https://mycoolsite.com"
                className="flex-1 bg-white border border-emerald-950/10 px-3.5 py-2.5 rounded-xl text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-amber-500 text-emerald-950 font-mono"
              />
              <button
                type="button"
                onClick={handleCaptureScreenshot}
                className="px-3.5 py-2 bg-amber-500 hover:bg-amber-600 text-emerald-950 text-xs font-bold rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
                title="Automatically capture screenshot of this URL"
              >
                <Camera className="w-3.5 h-3.5" />
                <span>Capture</span>
              </button>
            </div>
            <p className="text-[10px] text-emerald-950/50 mt-1">
              Click "Capture" to automatically grab a high-resolution screenshot of the website!
            </p>
          </div>

          {/* Image Upload or URL */}
          <div>
            <label className="block text-[10px] font-bold text-emerald-950/60 uppercase tracking-wider mb-1">
              PREVIEW IMAGE (OR UPLOAD FROM DEVICE)
            </label>
            <div className="flex gap-2 mb-2">
              <label className="flex-1 flex items-center justify-center gap-2 p-2.5 bg-white border border-dashed border-emerald-950/20 rounded-xl text-xs font-semibold text-emerald-950 hover:border-amber-500 cursor-pointer transition-colors">
                <Upload className="w-4 h-4 text-amber-600" />
                <span>Upload Image from Device</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </label>
            </div>

            <input
              type="text"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="Or paste direct image URL (https://...)"
              className="w-full bg-white border border-emerald-950/10 px-3.5 py-2 rounded-xl text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-amber-500 text-emerald-950"
            />

            {/* Thumbnail Preview */}
            {imageUrl && (
              <div className="mt-2 flex items-center gap-3 p-2 bg-[#ECEAE1] rounded-xl">
                <img
                  src={imageUrl}
                  alt="Preview"
                  className="w-14 h-10 object-cover rounded-lg border border-emerald-950/10"
                />
                <span className="text-[11px] text-emerald-950/70 truncate flex-1 font-medium">
                  Screenshot ready
                </span>
              </div>
            )}
          </div>

          {/* Client & Year */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[10px] font-bold text-emerald-950/60 uppercase tracking-wider mb-1">
                CLIENT / ORGANIZATION
              </label>
              <input
                type="text"
                value={client}
                onChange={(e) => setClient(e.target.value)}
                placeholder="e.g. Nova Analytics Inc."
                className="w-full bg-white border border-emerald-950/10 px-3.5 py-2 rounded-xl text-xs font-semibold focus:outline-none text-emerald-950"
              />
            </div>

            <div>
              <label className="block text-[10px] font-bold text-emerald-950/60 uppercase tracking-wider mb-1">
                YEAR
              </label>
              <input
                type="text"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                placeholder="2024"
                className="w-full bg-white border border-emerald-950/10 px-3.5 py-2 rounded-xl text-xs font-semibold focus:outline-none text-emerald-950"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-[10px] font-bold text-emerald-950/60 uppercase tracking-wider mb-1">
              DESCRIPTION
            </label>
            <textarea
              rows={2}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Short description of the technical solution, tech stack, and user outcome..."
              className="w-full bg-white border border-emerald-950/10 px-3.5 py-2 rounded-xl text-xs font-semibold focus:outline-none text-emerald-950 resize-none"
            />
          </div>

          {/* Deliverables */}
          <div>
            <label className="block text-[10px] font-bold text-emerald-950/60 uppercase tracking-wider mb-1">
              DELIVERABLES (COMMA SEPARATED)
            </label>
            <input
              type="text"
              value={deliverablesStr}
              onChange={(e) => setDeliverablesStr(e.target.value)}
              placeholder="Next.js SSR, PostgreSQL Schema, Stripe Webhooks, Tailwind UI"
              className="w-full bg-white border border-emerald-950/10 px-3.5 py-2 rounded-xl text-xs font-semibold focus:outline-none text-emerald-950"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3 bg-emerald-950 hover:bg-emerald-900 text-white text-xs font-bold tracking-wider rounded-xl uppercase flex items-center justify-center gap-2 cursor-pointer shadow-md transition-all"
            >
              <Check className="w-4 h-4 text-amber-400" />
              <span>{editingProject ? 'SAVE CHANGES & UPDATE' : 'ADD PROJECT'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
