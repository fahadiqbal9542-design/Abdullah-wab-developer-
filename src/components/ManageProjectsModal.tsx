import React, { useState } from 'react';
import {
  X,
  Plus,
  Trash2,
  Upload,
  Image as ImageIcon,
  Check,
  RotateCcw,
  Sparkles,
  User,
  FolderKanban,
} from 'lucide-react';
import { ProfileData, Project, ProjectCategory } from '../types/portfolio';
import { DEFAULT_PROJECTS, DEFAULT_PROFILE } from '../data/defaultPortfolio';

interface ManageProjectsModalProps {
  isOpen: boolean;
  onClose: () => void;
  projects: Project[];
  setProjects: React.Dispatch<React.SetStateAction<Project[]>>;
  profile: ProfileData;
  setProfile: React.Dispatch<React.SetStateAction<ProfileData>>;
}

export const ManageProjectsModal: React.FC<ManageProjectsModalProps> = ({
  isOpen,
  onClose,
  projects,
  setProjects,
  profile,
  setProfile,
}) => {
  const [activeTab, setActiveTab] = useState<'add' | 'list' | 'profile'>('add');

  // New Project Form State
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<ProjectCategory>('Logos');
  const [imageUrl, setImageUrl] = useState('');
  const [client, setClient] = useState('');
  const [year, setYear] = useState('2024');
  const [description, setDescription] = useState('');
  const [tagInput, setTagInput] = useState('');
  const [addedSuccess, setAddedSuccess] = useState(false);

  // Profile Form State
  const [profileForm, setProfileForm] = useState<ProfileData>(profile);
  const [profileSaved, setProfileSaved] = useState(false);

  if (!isOpen) return null;

  // Handle local image file upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          setImageUrl(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !imageUrl.trim()) return;

    const tags = tagInput
      ? tagInput.split(',').map((t) => t.trim()).filter(Boolean)
      : [category, 'Design'];

    const newProject: Project = {
      id: `proj-${Date.now()}`,
      title: title.trim(),
      category,
      imageUrl,
      client: client.trim() || undefined,
      year: year.trim() || '2024',
      description: description.trim() || undefined,
      tags,
    };

    setProjects((prev) => [newProject, ...prev]);
    setAddedSuccess(true);
    setTitle('');
    setImageUrl('');
    setClient('');
    setDescription('');
    setTagInput('');

    setTimeout(() => {
      setAddedSuccess(false);
      setActiveTab('list');
    }, 1200);
  };

  const handleDeleteProject = (id: string) => {
    if (confirm('Are you sure you want to delete this project?')) {
      setProjects((prev) => prev.filter((p) => p.id !== id));
    }
  };

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    setProfile(profileForm);
    setProfileSaved(true);
    setTimeout(() => setProfileSaved(false), 2000);
  };

  const handleResetToDefault = () => {
    if (confirm('Reset everything to Sania\'s original template data?')) {
      setProjects(DEFAULT_PROJECTS);
      setProfile(DEFAULT_PROFILE);
      setProfileForm(DEFAULT_PROFILE);
      localStorage.removeItem('sania_portfolio_projects');
      localStorage.removeItem('sania_portfolio_profile');
      onClose();
    }
  };

  // Quick Preset Sample Images
  const samplePresets = [
    {
      title: 'Minimalist Monogram',
      category: 'Logos' as ProjectCategory,
      url: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Coffee Packaging Mockup',
      category: 'Branding' as ProjectCategory,
      url: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Modern Typography Poster',
      category: 'Posters' as ProjectCategory,
      url: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=600&q=80',
    },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#FAF8F5] rounded-3xl shadow-2xl border border-[#D4A359]/30 overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#13221B] px-6 py-4 text-white flex items-center justify-between border-b border-[#D4A359]/30">
          <div className="flex items-center gap-2">
            <FolderKanban className="w-5 h-5 text-[#D4A359]" />
            <h3 className="font-serif-display text-lg font-bold text-white">
              Portfolio Customizer & Project Manager
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Buttons */}
        <div className="flex border-b border-gray-200 bg-[#EFECE6] px-6">
          <button
            onClick={() => setActiveTab('add')}
            className={`py-3 px-4 text-xs font-semibold tracking-wider flex items-center gap-2 border-b-2 transition-colors cursor-pointer ${
              activeTab === 'add'
                ? 'border-[#13221B] text-[#13221B] bg-[#FAF8F5]'
                : 'border-transparent text-gray-600 hover:text-[#13221B]'
            }`}
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add New Project</span>
          </button>

          <button
            onClick={() => setActiveTab('list')}
            className={`py-3 px-4 text-xs font-semibold tracking-wider flex items-center gap-2 border-b-2 transition-colors cursor-pointer ${
              activeTab === 'list'
                ? 'border-[#13221B] text-[#13221B] bg-[#FAF8F5]'
                : 'border-transparent text-gray-600 hover:text-[#13221B]'
            }`}
          >
            <FolderKanban className="w-3.5 h-3.5" />
            <span>All Projects ({projects.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('profile')}
            className={`py-3 px-4 text-xs font-semibold tracking-wider flex items-center gap-2 border-b-2 transition-colors cursor-pointer ${
              activeTab === 'profile'
                ? 'border-[#13221B] text-[#13221B] bg-[#FAF8F5]'
                : 'border-transparent text-gray-600 hover:text-[#13221B]'
            }`}
          >
            <User className="w-3.5 h-3.5" />
            <span>Edit Profile Info</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 max-h-[75vh] overflow-y-auto">
          {/* TAB 1: ADD PROJECT */}
          {activeTab === 'add' && (
            <form onSubmit={handleAddProject} className="space-y-4">
              {addedSuccess && (
                <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-xs flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Project added successfully to your portfolio!</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#1B2A22] mb-1">
                    Project Title *
                  </label>
                  <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="e.g. Minimalist Coffee Branding"
                    className="w-full px-3 py-2 rounded-xl border border-gray-300 text-xs bg-white focus:outline-none focus:border-[#D4A359]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1B2A22] mb-1">
                    Category *
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value as ProjectCategory)}
                    className="w-full px-3 py-2 rounded-xl border border-gray-300 text-xs bg-white focus:outline-none focus:border-[#D4A359]"
                  >
                    <option value="Logos">Logos</option>
                    <option value="Branding">Branding</option>
                    <option value="Social Media">Social Media</option>
                    <option value="Posters">Posters</option>
                    <option value="Resumes">Resumes</option>
                    <option value="Presentations">Presentations</option>
                    <option value="Packaging">Packaging</option>
                  </select>
                </div>
              </div>

              {/* Image Input Options */}
              <div>
                <label className="block text-xs font-semibold text-[#1B2A22] mb-1">
                  Project Image * (Upload File or Enter URL)
                </label>
                <div className="flex gap-2 mb-2">
                  <label className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 bg-white border border-dashed border-gray-300 rounded-xl text-xs text-gray-700 hover:border-[#D4A359] cursor-pointer transition-colors">
                    <Upload className="w-4 h-4 text-[#D4A359]" />
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
                  placeholder="Or paste an image web URL..."
                  className="w-full px-3 py-2 rounded-xl border border-gray-300 text-xs bg-white focus:outline-none focus:border-[#D4A359]"
                />

                {/* Preview Thumbnail */}
                {imageUrl && (
                  <div className="mt-2 flex items-center gap-3 p-2 bg-gray-50 rounded-xl border border-gray-200">
                    <img
                      src={imageUrl}
                      alt="Preview"
                      className="w-12 h-12 object-cover rounded-lg border border-gray-300"
                    />
                    <span className="text-[11px] text-gray-600 truncate flex-1">
                      Image ready to display
                    </span>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#1B2A22] mb-1">
                    Client Name (Optional)
                  </label>
                  <input
                    type="text"
                    value={client}
                    onChange={(e) => setClient(e.target.value)}
                    placeholder="e.g. Bloom Skincare Studio"
                    className="w-full px-3 py-2 rounded-xl border border-gray-300 text-xs bg-white focus:outline-none focus:border-[#D4A359]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1B2A22] mb-1">
                    Year / Completion
                  </label>
                  <input
                    type="text"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    placeholder="2024"
                    className="w-full px-3 py-2 rounded-xl border border-gray-300 text-xs bg-white focus:outline-none focus:border-[#D4A359]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1B2A22] mb-1">
                  Description
                </label>
                <textarea
                  rows={2}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Brief description of the design, style, colors, and client goals..."
                  className="w-full px-3 py-2 rounded-xl border border-gray-300 text-xs bg-white focus:outline-none focus:border-[#D4A359] resize-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1B2A22] mb-1">
                  Tags (Comma separated)
                </label>
                <input
                  type="text"
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  placeholder="Logo, Minimal, Luxury, Vector"
                  className="w-full px-3 py-2 rounded-xl border border-gray-300 text-xs bg-white focus:outline-none focus:border-[#D4A359]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 bg-[#13221B] hover:bg-[#1C3228] text-white rounded-full text-xs font-semibold tracking-wider transition-colors shadow-sm cursor-pointer"
                >
                  <Plus className="w-4 h-4 text-[#D4A359]" />
                  <span>PUBLISH PROJECT TO PORTFOLIO</span>
                </button>
              </div>
            </form>
          )}

          {/* TAB 2: ALL PROJECTS LIST */}
          {activeTab === 'list' && (
            <div className="space-y-3">
              <p className="text-xs text-gray-500 mb-3">
                All currently active projects in your portfolio:
              </p>

              {projects.length === 0 ? (
                <div className="text-center py-8 text-gray-400 text-xs">
                  No projects added yet. Click "Add New Project" to add your first work!
                </div>
              ) : (
                projects.map((proj) => (
                  <div
                    key={proj.id}
                    className="flex items-center justify-between gap-3 p-3 bg-white rounded-2xl border border-gray-200 shadow-xs hover:border-[#D4A359] transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={proj.imageUrl}
                        alt={proj.title}
                        className="w-12 h-12 rounded-xl object-cover border border-gray-200 shrink-0"
                      />
                      <div>
                        <h4 className="text-xs font-bold text-[#1B2A22] leading-tight">
                          {proj.title}
                        </h4>
                        <div className="flex items-center gap-2 text-[10px] text-gray-500 mt-0.5">
                          <span className="font-semibold text-[#D4A359]">
                            {proj.category}
                          </span>
                          <span>•</span>
                          <span>{proj.client || 'Personal Project'}</span>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => handleDeleteProject(proj.id)}
                      className="p-2 text-gray-400 hover:text-red-600 rounded-lg hover:bg-red-50 transition-colors"
                      title="Delete project"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))
              )}
            </div>
          )}

          {/* TAB 3: EDIT PROFILE INFO */}
          {activeTab === 'profile' && (
            <form onSubmit={handleSaveProfile} className="space-y-4">
              {profileSaved && (
                <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-xs flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Profile updated successfully!</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#1B2A22] mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={profileForm.name}
                    onChange={(e) =>
                      setProfileForm({ ...profileForm, name: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-xl border border-gray-300 text-xs bg-white focus:outline-none focus:border-[#D4A359]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1B2A22] mb-1">
                    Role / Subtitle
                  </label>
                  <input
                    type="text"
                    value={profileForm.titleRole}
                    onChange={(e) =>
                      setProfileForm({ ...profileForm, titleRole: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-xl border border-gray-300 text-xs bg-white focus:outline-none focus:border-[#D4A359]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1B2A22] mb-1">
                  Tagline (Dark Pill Banner)
                </label>
                <input
                  type="text"
                  value={profileForm.tagline}
                  onChange={(e) =>
                    setProfileForm({ ...profileForm, tagline: e.target.value })
                  }
                  className="w-full px-3 py-2 rounded-xl border border-gray-300 text-xs bg-white focus:outline-none focus:border-[#D4A359]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#1B2A22] mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={profileForm.email}
                    onChange={(e) =>
                      setProfileForm({ ...profileForm, email: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-xl border border-gray-300 text-xs bg-white focus:outline-none focus:border-[#D4A359]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1B2A22] mb-1">
                    Phone / WhatsApp Number
                  </label>
                  <input
                    type="text"
                    value={profileForm.phone}
                    onChange={(e) =>
                      setProfileForm({
                        ...profileForm,
                        phone: e.target.value,
                        whatsapp: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2 rounded-xl border border-gray-300 text-xs bg-white focus:outline-none focus:border-[#D4A359]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#1B2A22] mb-1">
                    Location / Country
                  </label>
                  <input
                    type="text"
                    value={profileForm.location}
                    onChange={(e) =>
                      setProfileForm({ ...profileForm, location: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-xl border border-gray-300 text-xs bg-white focus:outline-none focus:border-[#D4A359]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1B2A22] mb-1">
                    Birth Date / Experience Start
                  </label>
                  <input
                    type="text"
                    value={profileForm.birthDate}
                    onChange={(e) =>
                      setProfileForm({ ...profileForm, birthDate: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-xl border border-gray-300 text-xs bg-white focus:outline-none focus:border-[#D4A359]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1B2A22] mb-1">
                  About Me Description
                </label>
                <textarea
                  rows={3}
                  value={profileForm.aboutBio}
                  onChange={(e) =>
                    setProfileForm({ ...profileForm, aboutBio: e.target.value })
                  }
                  className="w-full px-3 py-2 rounded-xl border border-gray-300 text-xs bg-white focus:outline-none focus:border-[#D4A359] resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <button
                  type="button"
                  onClick={handleResetToDefault}
                  className="inline-flex items-center gap-1.5 text-xs text-red-600 hover:underline"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset to Original Template</span>
                </button>

                <button
                  type="submit"
                  className="px-6 py-2.5 bg-[#13221B] hover:bg-[#1C3228] text-white rounded-full text-xs font-semibold tracking-wider transition-colors shadow-sm cursor-pointer"
                >
                  SAVE PROFILE CHANGES
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
