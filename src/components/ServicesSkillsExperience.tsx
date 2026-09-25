import React from 'react';
import {
  PenTool,
  Layers,
  CreditCard,
  Share2,
  FileText,
  FileCheck,
  Presentation,
  Pin,
  Sparkles,
  Briefcase,
  Check,
} from 'lucide-react';
import { ProfileData, ServiceItem } from '../types/portfolio';

interface ServicesSkillsProps {
  services: ServiceItem[];
  profile: ProfileData;
  onSelectService: (service: string) => void;
}

export const ServicesSkillsExperience: React.FC<ServicesSkillsProps> = ({
  services,
  profile,
  onSelectService,
}) => {
  // Map icons
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Feather':
      case 'PenTool':
        return <PenTool className="w-3.5 h-3.5" />;
      case 'Layers':
        return <Layers className="w-3.5 h-3.5" />;
      case 'CreditCard':
        return <CreditCard className="w-3.5 h-3.5" />;
      case 'Instagram':
      case 'Share2':
        return <Share2 className="w-3.5 h-3.5" />;
      case 'FileText':
        return <FileText className="w-3.5 h-3.5" />;
      case 'FileCheck':
        return <FileCheck className="w-3.5 h-3.5" />;
      case 'Presentation':
        return <Presentation className="w-3.5 h-3.5" />;
      case 'Pin':
        return <Pin className="w-3.5 h-3.5" />;
      case 'Sparkles':
        return <Sparkles className="w-3.5 h-3.5" />;
      default:
        return <PenTool className="w-3.5 h-3.5" />;
    }
  };

  return (
    <section id="services" className="py-16 bg-[#F3EFEA] border-b border-[#1B2A22]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Column 1: MY SERVICES (lg:col-span-4) */}
          <div className="lg:col-span-4 bg-white/70 backdrop-blur-xs rounded-2xl p-6 sm:p-7 border border-[#E5DFD5] shadow-sm flex flex-col justify-between text-left">
            <div>
              <h3 className="text-base sm:text-lg font-bold tracking-[0.18em] text-[#1B2A22] uppercase mb-5 pb-2 border-b border-[#1B2A22]/10">
                MY SERVICES
              </h3>

              <div className="space-y-3">
                {services.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => onSelectService(service.title)}
                    className="w-full flex items-center gap-3.5 group p-1.5 rounded-xl hover:bg-[#EFECE6] transition-all text-left cursor-pointer"
                  >
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#13221B] text-[#D4A359] flex items-center justify-center shrink-0 group-hover:bg-[#D4A359] group-hover:text-[#13221B] transition-colors shadow-xs">
                      {getServiceIcon(service.iconName)}
                    </div>
                    <span className="text-xs sm:text-[13px] font-semibold text-[#1B2A22] group-hover:text-[#13221B] tracking-wide">
                      {service.title}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: MY SKILLS (lg:col-span-4) */}
          <div className="lg:col-span-4 bg-white/70 backdrop-blur-xs rounded-2xl p-6 sm:p-7 border border-[#E5DFD5] shadow-sm flex flex-col justify-between text-left">
            <div>
              <h3 className="text-base sm:text-lg font-bold tracking-[0.18em] text-[#1B2A22] uppercase mb-4 pb-2 border-b border-[#1B2A22]/10">
                MY SKILLS
              </h3>

              {/* Design Software section */}
              <div className="mb-7">
                <h4 className="text-xs sm:text-[13px] font-semibold text-[#1B2A22]/80 mb-3.5">
                  Design Software
                </h4>
                
                {/* Software badges matching image exactly */}
                <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                  {/* Photoshop */}
                  <div
                    title="Adobe Photoshop"
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#001E36] border border-[#31A8FF] flex items-center justify-center text-[#31A8FF] font-bold text-sm sm:text-base shadow-sm hover:scale-110 transition-transform cursor-default"
                  >
                    Ps
                  </div>

                  {/* Illustrator */}
                  <div
                    title="Adobe Illustrator"
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#330000] border border-[#FF9A00] flex items-center justify-center text-[#FF9A00] font-bold text-sm sm:text-base shadow-sm hover:scale-110 transition-transform cursor-default"
                  >
                    Ai
                  </div>

                  {/* Canva */}
                  <div
                    title="Canva"
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-tr from-[#00C4CC] to-[#7D2AE8] flex items-center justify-center text-white font-script text-base sm:text-lg shadow-sm hover:scale-110 transition-transform cursor-default select-none"
                  >
                    Canva
                  </div>

                  {/* Figma */}
                  <div
                    title="Figma"
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#1E1E1E] border border-gray-700 flex items-center justify-center shadow-sm hover:scale-110 transition-transform cursor-default p-2"
                  >
                    <svg viewBox="0 0 38 57" className="w-5 h-5 fill-current">
                      <path fill="#F24E1E" d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z"/>
                      <path fill="#0ACF83" d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z"/>
                      <path fill="#1ABCFE" d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z"/>
                      <path fill="#A259FF" d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z"/>
                      <path fill="#FF7262" d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z"/>
                    </svg>
                  </div>

                  {/* PowerPoint */}
                  <div
                    title="Microsoft PowerPoint"
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#D24726] text-white flex items-center justify-center font-bold text-sm sm:text-base shadow-sm hover:scale-110 transition-transform cursor-default"
                  >
                    P
                  </div>
                </div>
              </div>

              {/* Creative Skills with Gold Checkmarks */}
              <div>
                <h4 className="text-xs sm:text-[13px] font-semibold text-[#1B2A22]/80 mb-3.5">
                  Creative Skills
                </h4>

                <div className="grid grid-cols-2 gap-y-2.5 gap-x-2 text-xs font-medium text-[#1B2A22]">
                  <div className="flex items-center gap-1.5">
                    <span className="w-4 h-4 rounded-full bg-[#D4A359]/20 text-[#D4A359] flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </span>
                    <span>Branding</span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <span className="w-4 h-4 rounded-full bg-[#D4A359]/20 text-[#D4A359] flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </span>
                    <span>Layout Design</span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <span className="w-4 h-4 rounded-full bg-[#D4A359]/20 text-[#D4A359] flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </span>
                    <span>Typography</span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <span className="w-4 h-4 rounded-full bg-[#D4A359]/20 text-[#D4A359] flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </span>
                    <span>Visual Identity</span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <span className="w-4 h-4 rounded-full bg-[#D4A359]/20 text-[#D4A359] flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </span>
                    <span>Color Theory</span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <span className="w-4 h-4 rounded-full bg-[#D4A359]/20 text-[#D4A359] flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </span>
                    <span className="truncate">Social Media Marketing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: EXPERIENCE (lg:col-span-4) */}
          <div className="lg:col-span-4 bg-[#13221B] text-white rounded-2xl p-6 sm:p-7 border border-[#D4A359]/30 shadow-md flex flex-col justify-between text-left">
            <div>
              <h3 className="text-base sm:text-lg font-bold tracking-[0.18em] text-[#D4A359] uppercase mb-6 pb-2 border-b border-white/10">
                EXPERIENCE
              </h3>

              {/* Freelance Badge */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#D4A359] text-[#13221B] flex items-center justify-center shrink-0 shadow-md">
                  <Briefcase className="w-6 h-6 stroke-[2.2]" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-base leading-snug">
                    {profile.experienceRole}
                  </h4>
                  <p className="text-xs font-semibold text-[#D4A359] mt-0.5">
                    {profile.experiencePeriod}
                  </p>
                </div>
              </div>

              {/* Bullet Points with Gold Checks */}
              <div className="space-y-3 pt-2">
                {profile.experienceBulletPoints.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-[13px] text-gray-200">
                    <Check className="w-4 h-4 text-[#D4A359] shrink-0 stroke-[2.5]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 mt-6">
              <span className="text-[11px] text-gray-400 font-light block">
                Available for freelance contracts, full brand revamps & custom design requests worldwide.
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
