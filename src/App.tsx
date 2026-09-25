/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { AbdullahNavbar } from './components/AbdullahNavbar';
import { AbdullahHero } from './components/AbdullahHero';
import { AbdullahAbout } from './components/AbdullahAbout';
import { AbdullahServices } from './components/AbdullahServices';
import { AbdullahPortfolio } from './components/AbdullahPortfolio';
import { AbdullahEstimator } from './components/AbdullahEstimator';
import { AbdullahContact } from './components/AbdullahContact';
import { AbdullahFooter } from './components/AbdullahFooter';

// Modals
import { ProjectDetailModal } from './components/modals/ProjectDetailModal';
import { AddEditProjectModal } from './components/modals/AddEditProjectModal';
import { SkillsModal } from './components/modals/SkillsModal';
import { CvModal } from './components/modals/CvModal';
import { ContactModal } from './components/modals/ContactModal';
import { WebsiteModal } from './components/modals/WebsiteModal';

// Data & Types
import {
  DEFAULT_PROJECTS,
  DEFAULT_HERO_IMAGE,
  DEFAULT_ADDITIONAL_SKILLS,
  DEFAULT_PROPOSALS,
  schoolWebDeveloperImg,
} from './data/abdullahData';
import { DeveloperProject, ClientProposal, ToastMessage } from './types/abdullah';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export default function App() {
  // State: Hero Image
  const [heroImage, setHeroImage] = useState<string>(() => {
    try {
      const saved = localStorage.getItem('abdullah_hero_img');
      if (saved) return saved;
    } catch (e) {
      console.error(e);
    }
    return DEFAULT_HERO_IMAGE;
  });

  // State: Portfolio Projects
  const [projects, setProjects] = useState<DeveloperProject[]>(() => {
    try {
      const saved = localStorage.getItem('abdullah_portfolio_items');
      if (saved) {
        const parsed = JSON.parse(saved);
        // Ensure image links are retained and update proj-1 to School Web Developer
        return parsed.map((item: DeveloperProject, idx: number) => {
          if (item.id === 'proj-1' && (item.title === 'Nova SaaS Analytics Dashboard' || item.image.includes('1551288049'))) {
            return DEFAULT_PROJECTS[0];
          }
          if (!item.websiteUrl && DEFAULT_PROJECTS[idx]) {
            return {
              ...item,
              websiteUrl: DEFAULT_PROJECTS[idx].websiteUrl,
              image: DEFAULT_PROJECTS[idx].image,
            };
          }
          return item;
        });
      }
    } catch (e) {
      console.error(e);
    }
    return DEFAULT_PROJECTS;
  });

  // State: Proposals Tracker
  const [proposals, setProposals] = useState<ClientProposal[]>(() => {
    try {
      const saved = localStorage.getItem('abdullah_proposals');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return DEFAULT_PROPOSALS;
  });

  // State: Additional Skills
  const [additionalSkills, setAdditionalSkills] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('abdullah_skills');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return DEFAULT_ADDITIONAL_SKILLS;
  });

  // State: WhatsApp Number
  const [whatsappNumber, setWhatsappNumber] = useState<string>(() => {
    try {
      const saved = localStorage.getItem('abdullah_whatsapp');
      if (saved) return saved;
    } catch (e) {
      console.error(e);
    }
    return '923000000000';
  });

  // Modals state
  const [detailProject, setDetailProject] = useState<DeveloperProject | null>(null);
  const [isAddEditOpen, setIsAddEditOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<DeveloperProject | null>(null);
  const [isSkillsOpen, setIsSkillsOpen] = useState(false);
  const [isCvOpen, setIsCvOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isWebsiteOpen, setIsWebsiteOpen] = useState(false);
  const [websitePreviewUrl, setWebsitePreviewUrl] = useState<string | undefined>(undefined);
  const [websitePreviewTitle, setWebsitePreviewTitle] = useState<string | undefined>(undefined);

  const handleOpenWebsite = (url?: string, title?: string) => {
    setWebsitePreviewUrl(url);
    setWebsitePreviewTitle(title);
    setIsWebsiteOpen(true);
  };

  const handleSetSchoolDeveloperImg = () => {
    setHeroImage(schoolWebDeveloperImg);
    try {
      localStorage.setItem('abdullah_hero_img', schoolWebDeveloperImg);
    } catch (err) {
      console.error(err);
    }
    showToast('School Web Developer image set as Hero profile photo!', 'success');
  };

  // Toasts
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const showToast = (text: string, type: 'success' | 'error' | 'info' = 'info') => {
    const id = `toast-${Date.now()}-${Math.random()}`;
    setToasts((prev) => [...prev, { id, text, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Sync state to LocalStorage
  useEffect(() => {
    try {
      localStorage.setItem('abdullah_portfolio_items', JSON.stringify(projects));
    } catch (e) {
      console.error(e);
    }
  }, [projects]);

  useEffect(() => {
    try {
      localStorage.setItem('abdullah_proposals', JSON.stringify(proposals));
    } catch (e) {
      console.error(e);
    }
  }, [proposals]);

  useEffect(() => {
    try {
      localStorage.setItem('abdullah_skills', JSON.stringify(additionalSkills));
    } catch (e) {
      console.error(e);
    }
  }, [additionalSkills]);

  useEffect(() => {
    try {
      localStorage.setItem('abdullah_whatsapp', whatsappNumber);
    } catch (e) {
      console.error(e);
    }
  }, [whatsappNumber]);

  // Handlers
  const handleHeroImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          setHeroImage(reader.result);
          try {
            localStorage.setItem('abdullah_hero_img', reader.result);
          } catch (err) {
            console.error(err);
          }
          showToast('Homepage profile picture updated successfully!', 'success');
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveProject = (project: DeveloperProject) => {
    setProjects((prev) => {
      const exists = prev.some((p) => p.id === project.id);
      if (exists) {
        return prev.map((p) => (p.id === project.id ? project : p));
      }
      return [project, ...prev];
    });
  };

  const handleUpdateProjectUrl = (projectId: string, newUrl: string) => {
    setProjects((prev) =>
      prev.map((p) => (p.id === projectId ? { ...p, websiteUrl: newUrl } : p))
    );
    showToast('Project website URL updated and saved!', 'success');
  };

  const handleDeleteProject = (id: string) => {
    if (window.confirm('Delete this project item permanently from your portfolio?')) {
      setProjects((prev) => prev.filter((p) => p.id !== id));
      showToast('Project permanently removed from local cache.', 'info');
    }
  };

  const handleResetProjects = () => {
    if (window.confirm('Reset portfolio grid to default demo projects?')) {
      setProjects(DEFAULT_PROJECTS);
      try {
        localStorage.setItem('abdullah_portfolio_items', JSON.stringify(DEFAULT_PROJECTS));
      } catch (e) {
        console.error(e);
      }
      showToast('Portfolio reset to premium developer layouts!', 'success');
    }
  };

  const handleAddSkill = (skill: string) => {
    if (additionalSkills.includes(skill)) {
      showToast('This skill is already in your list!', 'info');
      return;
    }
    setAdditionalSkills((prev) => [...prev, skill]);
    showToast(`Added skill: ${skill}`, 'success');
  };

  const handleRemoveSkill = (skill: string) => {
    setAdditionalSkills((prev) => prev.filter((s) => s !== skill));
    showToast(`Removed skill: ${skill}`, 'info');
  };

  const handleAddProposal = (proposal: ClientProposal) => {
    setProposals((prev) => [proposal, ...prev]);
  };

  return (
    <div className="min-h-screen bg-[#F4F4F0] text-[#132A13] font-sans antialiased overflow-x-hidden selection:bg-amber-400 selection:text-emerald-950 flex flex-col">
      {/* 1. Header / Navbar */}
      <AbdullahNavbar
        onOpenSkills={() => setIsSkillsOpen(true)}
        onOpenCv={() => setIsCvOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
        onOpenWebsite={() => handleOpenWebsite()}
        whatsappNumber={whatsappNumber}
      />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <AbdullahHero
          heroImage={heroImage}
          onHeroImageUpload={handleHeroImageUpload}
          onSetSchoolDeveloperImg={handleSetSchoolDeveloperImg}
          onExploreApps={() => {
            const el = document.getElementById('portfolio');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
          onOpenEstimator={() => {
            const el = document.getElementById('estimator');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
          onOpenWebsite={() => handleOpenWebsite()}
        />

        {/* 3. About Section */}
        <AbdullahAbout
          whatsappNumber={whatsappNumber}
          onUpdateWhatsapp={setWhatsappNumber}
          onShowToast={showToast}
        />

        {/* 4. Services & Tech Section */}
        <AbdullahServices whatsappNumber={whatsappNumber} />

        {/* 5. Portfolio Section */}
        <AbdullahPortfolio
          projects={projects}
          onOpenProject={(p) => setDetailProject(p)}
          onOpenAddProject={() => {
            setEditingProject(null);
            setIsAddEditOpen(true);
          }}
          onEditProject={(p) => {
            setEditingProject(p);
            setIsAddEditOpen(true);
          }}
          onDeleteProject={handleDeleteProject}
          onResetProjects={handleResetProjects}
          onUpdateProjectUrl={handleUpdateProjectUrl}
          onPreviewWebsite={(url, title) => handleOpenWebsite(url, title)}
        />

        {/* 6. Dynamic Estimator & Proposals Tracker */}
        <AbdullahEstimator
          whatsappNumber={whatsappNumber}
          proposals={proposals}
          onAddProposal={handleAddProposal}
          onShowToast={showToast}
        />

        {/* 7. Contact & Welcome Kit */}
        <AbdullahContact
          whatsappNumber={whatsappNumber}
          onShowToast={showToast}
        />
      </main>

      {/* 8. Footer */}
      <AbdullahFooter
        onOpenCv={() => setIsCvOpen(true)}
        onOpenSkills={() => setIsSkillsOpen(true)}
        onOpenWebsite={() => handleOpenWebsite()}
      />

      {/* Modals */}
      <WebsiteModal
        isOpen={isWebsiteOpen}
        onClose={() => {
          setIsWebsiteOpen(false);
          setWebsitePreviewUrl(undefined);
          setWebsitePreviewTitle(undefined);
        }}
        onShowToast={showToast}
        whatsappNumber={whatsappNumber}
        previewUrl={websitePreviewUrl}
        previewTitle={websitePreviewTitle}
      />
      <ProjectDetailModal
        project={detailProject}
        onClose={() => setDetailProject(null)}
        whatsappNumber={whatsappNumber}
      />

      <AddEditProjectModal
        isOpen={isAddEditOpen}
        onClose={() => {
          setIsAddEditOpen(false);
          setEditingProject(null);
        }}
        editingProject={editingProject}
        onSaveProject={handleSaveProject}
        onShowToast={showToast}
      />

      <SkillsModal
        isOpen={isSkillsOpen}
        onClose={() => setIsSkillsOpen(false)}
        additionalSkills={additionalSkills}
        onAddSkill={handleAddSkill}
        onRemoveSkill={handleRemoveSkill}
        whatsappNumber={whatsappNumber}
      />

      <CvModal
        isOpen={isCvOpen}
        onClose={() => setIsCvOpen(false)}
        onShowToast={showToast}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        whatsappNumber={whatsappNumber}
        onShowToast={showToast}
      />

      {/* Toast Notification Stack */}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2 max-w-sm pointer-events-none">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`pointer-events-auto flex items-start gap-3 p-3.5 rounded-2xl shadow-xl border text-xs font-semibold animate-fadeIn ${
              toast.type === 'success'
                ? 'bg-emerald-950 text-white border-amber-500/30'
                : toast.type === 'error'
                ? 'bg-red-950 text-white border-red-500/30'
                : 'bg-white text-emerald-950 border-emerald-950/10'
            }`}
          >
            {toast.type === 'success' ? (
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            ) : toast.type === 'error' ? (
              <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
            ) : (
              <Info className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
            )}
            <p className="flex-1 leading-relaxed">{toast.text}</p>
            <button
              onClick={() => removeToast(toast.id)}
              className="text-white/60 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
