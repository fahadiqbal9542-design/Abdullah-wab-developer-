import React, { useState } from 'react';
import {
  Layers,
  Server,
  ShoppingCart,
  Layout,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  MessageSquare,
  Code2,
  Copy,
  Check,
  Zap,
  ShieldCheck,
  TrendingUp,
  Cpu,
} from 'lucide-react';
import { SKILLS_DATA } from '../data/abdullahData';
import { InteractiveTiltCard } from './InteractiveTiltCard';

interface AbdullahServicesProps {
  whatsappNumber: string;
}

export const AbdullahServices: React.FC<AbdullahServicesProps> = ({ whatsappNumber }) => {
  const [selectedTech, setSelectedTech] = useState<string>('React');
  const [activeServiceHover, setActiveServiceHover] = useState<number | null>(null);
  const [copiedCode, setCopiedCode] = useState(false);
  const [hoveredMetric, setHoveredMetric] = useState<string | null>(null);

  const currentSkill = SKILLS_DATA[selectedTech] || SKILLS_DATA.React;

  const handleCopyCode = () => {
    if (currentSkill.codeSnippet) {
      navigator.clipboard.writeText(currentSkill.codeSnippet);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    }
  };

  const servicesList = [
    {
      id: 'fullstack',
      title: 'Full-Stack Web Applications',
      subtitle: 'End-to-End Modern Web Architecture',
      desc: 'Building responsive single-page applications and high-performance SSR architectures powered by React, Next.js, and TypeScript with fluid state flow and zero layout shift.',
      icon: <Layers className="w-6 h-6 text-amber-500" />,
      features: [
        'React 19 & Next.js App Router Architecture',
        'State Management via Context & Lightweight Stores',
        'Sub-second Lighthouse 99+ Core Web Vitals',
        'Full REST & Type-Safe API Client Integrations',
      ],
      tags: ['React', 'Next.js', 'TypeScript', 'Vite', 'App Router'],
      badge: 'Most Popular',
    },
    {
      id: 'backend',
      title: 'Custom SaaS & Cloud Backends',
      subtitle: 'Scalable Microservices & APIs',
      desc: 'Developing scalable microservice endpoints, Express servers, PostgreSQL schemas, and secure token-based user authentication systems capable of handling high concurrent traffic.',
      icon: <Server className="w-6 h-6 text-amber-500" />,
      features: [
        'JWT & OAuth2 Secure Authentication Systems',
        'PostgreSQL Database Indexing & Prisma ORM',
        'Redis Caching & Distributed Rate-Limiting',
        'Structured RESTful & GraphQL Proxy Endpoints',
      ],
      tags: ['Node.js', 'Express', 'PostgreSQL', 'Prisma', 'REST APIs'],
      badge: 'High Reliability',
    },
    {
      id: 'ecommerce',
      title: 'E-Commerce & Payment Gateways',
      subtitle: 'High-Converting Digital Storefronts',
      desc: 'Designing high-converting digital storefronts with dynamic shopping carts, inventory synchronization, and secure Stripe webhook integration with bulletproof checkout flows.',
      icon: <ShoppingCart className="w-6 h-6 text-amber-500" />,
      features: [
        'Stripe Checkout & Webhook Order Fulfillment',
        'Real-time Persistent Shopping Cart Systems',
        'Dynamic Product Catalog & Instant Search',
        'Mobile-Optimized High-Conversion UX Flows',
      ],
      tags: ['Stripe', 'Shopping Carts', 'Webhooks', 'UI/UX', 'Catalog'],
      badge: 'Revenue Focused',
    },
    {
      id: 'uiux',
      title: 'Modern UI/UX & Responsive Systems',
      subtitle: 'Pixel-Perfect Fluid Layouts',
      desc: 'Translating Figma designs into production-ready Tailwind CSS layouts, fluid grids, and accessible components built for all devices with buttery smooth 60fps animations.',
      icon: <Layout className="w-6 h-6 text-amber-500" />,
      features: [
        'Figma to Production Tailwind CSS Translation',
        'Mobile-First Fluid Grid & Adaptive Breakpoints',
        'Smooth 60fps Micro-Interactions & Hover Physics',
        'Strict WCAG Accessibility & Dark Mode Theming',
      ],
      tags: ['Tailwind CSS', 'Mobile First', 'Figma', 'SEO', 'Animations'],
      badge: 'Design First',
    },
  ];

  return (
    <section id="services" className="bg-[#F4F4F0] py-16 px-6 border-b border-emerald-950/10">
      <div className="max-w-6xl mx-auto space-y-14 text-left">
        {/* Section Heading & Quick Metrics */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
              <span className="text-amber-600 text-xs font-bold tracking-[0.2em] uppercase">
                ENGINEERING EXPERTISE
              </span>
            </div>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-emerald-950 tracking-tight mt-1">
              Services & Core Tech Stack
            </h2>
            <p className="text-xs text-emerald-950/70 mt-1 max-w-lg leading-relaxed">
              High-standard engineering practices designed to construct clean web solutions that scale gracefully under real-world load. Hover over any box to inspect capabilities!
            </p>
          </div>

          {/* Quick Metrics Interactive Boxes */}
          <div className="flex items-center gap-3 shrink-0 flex-wrap">
            {/* Box 1: Deliveries */}
            <div
              className="relative group/metric"
              onMouseEnter={() => setHoveredMetric('deliveries')}
              onMouseLeave={() => setHoveredMetric(null)}
            >
              <InteractiveTiltCard
                maxTilt={10}
                spotlightColor="rgba(245, 158, 11, 0.25)"
                className="p-3.5 bg-white rounded-xl border border-emerald-950/10 shadow-xs hover:shadow-lg transition-all text-center min-w-[95px] cursor-pointer hover:border-amber-500/50 group-hover/metric:-translate-y-1"
              >
                <div className="flex items-center justify-center gap-1">
                  <TrendingUp className="w-3.5 h-3.5 text-amber-500" />
                  <p className="text-xl font-extrabold text-emerald-950 tabular-nums">50+</p>
                </div>
                <p className="text-[9px] uppercase tracking-wider text-emerald-950/70 font-bold mt-0.5">
                  Deliveries
                </p>
                <div className="w-4 h-0.5 bg-amber-500 mx-auto mt-1 rounded-full group-hover/metric:w-8 transition-all duration-300" />
              </InteractiveTiltCard>

              {/* Tooltip on Hover */}
              <div
                className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-30 w-44 p-2 bg-emerald-950 text-white text-[10px] rounded-lg shadow-xl border border-amber-500/30 text-center pointer-events-none transition-all duration-200 ${
                  hoveredMetric === 'deliveries' ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                }`}
              >
                <span className="font-bold text-amber-400 block">52+ Client Apps</span>
                Shipped across 12 countries with 100% deployment record.
              </div>
            </div>

            {/* Box 2: Integrity */}
            <div
              className="relative group/metric"
              onMouseEnter={() => setHoveredMetric('integrity')}
              onMouseLeave={() => setHoveredMetric(null)}
            >
              <InteractiveTiltCard
                maxTilt={10}
                spotlightColor="rgba(245, 158, 11, 0.25)"
                className="p-3.5 bg-white rounded-xl border border-emerald-950/10 shadow-xs hover:shadow-lg transition-all text-center min-w-[95px] cursor-pointer hover:border-amber-500/50 group-hover/metric:-translate-y-1"
              >
                <div className="flex items-center justify-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <p className="text-xl font-extrabold text-emerald-950 tabular-nums">100%</p>
                </div>
                <p className="text-[9px] uppercase tracking-wider text-emerald-950/70 font-bold mt-0.5">
                  Integrity
                </p>
                <div className="w-4 h-0.5 bg-emerald-600 mx-auto mt-1 rounded-full group-hover/metric:w-8 transition-all duration-300" />
              </InteractiveTiltCard>

              {/* Tooltip on Hover */}
              <div
                className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-30 w-44 p-2 bg-emerald-950 text-white text-[10px] rounded-lg shadow-xl border border-amber-500/30 text-center pointer-events-none transition-all duration-200 ${
                  hoveredMetric === 'integrity' ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                }`}
              >
                <span className="font-bold text-emerald-400 block">Clean Architecture</span>
                Strict linting, static type safety, and zero critical vulnerabilities.
              </div>
            </div>

            {/* Box 3: Uptime */}
            <div
              className="relative group/metric"
              onMouseEnter={() => setHoveredMetric('uptime')}
              onMouseLeave={() => setHoveredMetric(null)}
            >
              <InteractiveTiltCard
                maxTilt={10}
                spotlightColor="rgba(245, 158, 11, 0.25)"
                className="p-3.5 bg-white rounded-xl border border-emerald-950/10 shadow-xs hover:shadow-lg transition-all text-center min-w-[95px] cursor-pointer hover:border-amber-500/50 group-hover/metric:-translate-y-1"
              >
                <div className="flex items-center justify-center gap-1">
                  <Zap className="w-3.5 h-3.5 text-amber-500" />
                  <p className="text-xl font-extrabold text-emerald-950 tabular-nums">99.8%</p>
                </div>
                <p className="text-[9px] uppercase tracking-wider text-emerald-950/70 font-bold mt-0.5">
                  Uptime
                </p>
                <div className="w-4 h-0.5 bg-amber-500 mx-auto mt-1 rounded-full group-hover/metric:w-8 transition-all duration-300" />
              </InteractiveTiltCard>

              {/* Tooltip on Hover */}
              <div
                className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-30 w-44 p-2 bg-emerald-950 text-white text-[10px] rounded-lg shadow-xl border border-amber-500/30 text-center pointer-events-none transition-all duration-200 ${
                  hoveredMetric === 'uptime' ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                }`}
              >
                <span className="font-bold text-amber-400 block">SLA Reliability</span>
                Production-grade serverless deployments on Vercel, AWS & Cloudflare.
              </div>
            </div>
          </div>
        </div>

        {/* 4 Interactive Service Boxes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {servicesList.map((service, idx) => {
            const isHovered = activeServiceHover === idx;
            return (
              <InteractiveTiltCard
                key={service.id}
                maxTilt={6}
                spotlightColor="rgba(245, 158, 11, 0.16)"
                className="h-full rounded-2xl"
              >
                <div
                  onMouseEnter={() => setActiveServiceHover(idx)}
                  onMouseLeave={() => setActiveServiceHover(null)}
                  className={`h-full bg-white rounded-2xl p-6 sm:p-7 border transition-all duration-300 flex flex-col justify-between group cursor-default text-left relative overflow-hidden ${
                    isHovered
                      ? 'border-amber-500/60 shadow-xl ring-2 ring-amber-500/20 bg-linear-to-b from-white to-[#FBFBF9]'
                      : 'border-emerald-950/10 shadow-xs hover:shadow-md'
                  }`}
                >
                  {/* Subtle Top Accent Ribbon on Hover */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-amber-500 via-emerald-600 to-amber-500 transition-opacity duration-300 ${
                      isHovered ? 'opacity-100' : 'opacity-0'
                    }`}
                  />

                  <div>
                    {/* Header: Icon, Badge, Title */}
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                            isHovered
                              ? 'bg-amber-500/20 text-emerald-950 scale-110 shadow-md ring-2 ring-amber-500/40 rotate-1'
                              : 'bg-emerald-950/5 text-amber-500'
                          }`}
                        >
                          {service.icon}
                        </div>
                        <div>
                          <p className="text-[10px] uppercase font-bold tracking-wider text-amber-600">
                            {service.subtitle}
                          </p>
                          <h3 className="font-serif text-lg sm:text-xl font-bold text-emerald-950 group-hover:text-emerald-900 transition-colors">
                            {service.title}
                          </h3>
                        </div>
                      </div>

                      {/* Live Badge */}
                      <span
                        className={`text-[9px] font-bold px-2 py-0.5 rounded-full border transition-all shrink-0 ${
                          isHovered
                            ? 'bg-amber-500 text-emerald-950 border-amber-400 font-extrabold shadow-xs'
                            : 'bg-emerald-950/5 text-emerald-950/60 border-emerald-950/10'
                        }`}
                      >
                        {service.badge}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-emerald-950/75 leading-relaxed mb-4">
                      {service.desc}
                    </p>

                    {/* Interactive Deliverables Checklist - Always visible, highlights on hover */}
                    <div className="mb-4 pt-3 border-t border-emerald-950/5 space-y-2">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-950/60 flex items-center gap-1.5">
                        <Sparkles className="w-3 h-3 text-amber-500" />
                        <span>Core Deliverables & Features:</span>
                      </p>
                      <div className="grid grid-cols-1 gap-1.5">
                        {service.features.map((feat, fIdx) => (
                          <div
                            key={fIdx}
                            className={`flex items-center gap-2 text-xs transition-colors py-0.5 ${
                              isHovered ? 'text-emerald-950 font-medium' : 'text-emerald-950/70'
                            }`}
                          >
                            <CheckCircle2
                              className={`w-3.5 h-3.5 shrink-0 transition-transform ${
                                isHovered ? 'text-emerald-600 scale-110' : 'text-emerald-950/30'
                              }`}
                            />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom: Tags & Quick Action Button on Hover */}
                  <div className="pt-4 border-t border-emerald-950/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`text-[10px] font-semibold px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                            isHovered
                              ? 'bg-emerald-950 text-white hover:bg-amber-500 hover:text-emerald-950 shadow-xs'
                              : 'bg-[#ECEAE1] text-emerald-950/80 hover:bg-emerald-950/15'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Direct Contact Button */}
                    <a
                      href={`https://wa.me/${whatsappNumber}?text=Hi%20Abdullah,%20I%20am%20interested%20in%20your%20${encodeURIComponent(
                        service.title
                      )}%20service.%20Let's%20discuss%20project%20details!`}
                      target="_blank"
                      rel="noreferrer"
                      className={`inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer shadow-xs ${
                        isHovered
                          ? 'bg-amber-500 hover:bg-amber-600 text-emerald-950 scale-102 ring-2 ring-amber-400/40'
                          : 'bg-emerald-950/5 hover:bg-emerald-950/10 text-emerald-950'
                      }`}
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-amber-700" />
                      <span>Order Service</span>
                      <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                    </a>
                  </div>
                </div>
              </InteractiveTiltCard>
            );
          })}
        </div>

        {/* Interactive Tech Stack Inspector Box */}
        <InteractiveTiltCard
          maxTilt={4}
          spotlightColor="rgba(245, 158, 11, 0.12)"
          className="rounded-3xl"
        >
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-emerald-950/10 shadow-lg relative overflow-hidden">
            {/* Top Bar: Title & Selectable Tech Buttons */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 mb-6 pb-6 border-b border-emerald-950/10">
              <div>
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-amber-500" />
                  <span className="text-amber-600 text-[10px] font-bold tracking-widest uppercase block">
                    INTERACTIVE SKILL & ARCHITECTURE INSPECTOR
                  </span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-emerald-950 mt-1">
                  Explore Technology Proficiencies
                </h3>
                <p className="text-xs text-emerald-950/60 mt-0.5">
                  Hover over or click any technology box below to inspect production architectural patterns.
                </p>
              </div>

              {/* Selectable Tech Tabs with Hover-to-Switch */}
              <div className="flex flex-wrap gap-1.5 bg-[#F4F4F0] p-1.5 rounded-2xl border border-emerald-950/10">
                {Object.keys(SKILLS_DATA).map((tech) => {
                  const isSelected = selectedTech === tech;
                  return (
                    <button
                      key={tech}
                      onClick={() => setSelectedTech(tech)}
                      onMouseEnter={() => setSelectedTech(tech)}
                      className={`px-3 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${
                        isSelected
                          ? 'bg-emerald-950 text-white shadow-md scale-102 ring-2 ring-amber-500/40'
                          : 'text-emerald-950/70 hover:text-emerald-950 hover:bg-white/80'
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          isSelected ? 'bg-amber-400 animate-ping' : 'bg-emerald-950/30'
                        }`}
                      />
                      <span>{tech}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Tech Dynamic Inspection Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Left Column: Tech Details, Meter & Pro Tip */}
              <div className="lg:col-span-7 space-y-4 text-left">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-emerald-950">
                    {currentSkill.full}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-amber-500/20 text-amber-900 border border-amber-500/30 flex items-center gap-1.5">
                    <Zap className="w-3 h-3 text-amber-600" />
                    <span>{currentSkill.rating} Proficiency</span>
                  </span>
                </div>

                {/* Animated Proficiency Bar */}
                <div className="w-full bg-[#ECEAE1] h-2.5 rounded-full overflow-hidden p-0.5 border border-emerald-950/5">
                  <div
                    className="bg-linear-to-r from-amber-500 to-emerald-600 h-full rounded-full transition-all duration-700 shadow-xs"
                    style={{ width: currentSkill.rating }}
                  />
                </div>

                <p className="text-xs sm:text-sm text-emerald-950/80 leading-relaxed font-normal">
                  {currentSkill.note}
                </p>

                {/* Architecture Features Pills */}
                {currentSkill.architectureFeatures && (
                  <div className="space-y-1.5 pt-1">
                    <p className="text-[10px] uppercase font-bold tracking-wider text-emerald-950/50">
                      Standard Implementations:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {currentSkill.architectureFeatures.map((feat, i) => (
                        <span
                          key={i}
                          className="text-[10px] font-semibold bg-[#ECEAE1] text-emerald-950/90 px-2.5 py-1 rounded-md border border-emerald-950/5 flex items-center gap-1 hover:border-amber-500/50 hover:bg-amber-500/10 transition-colors"
                        >
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                          <span>{feat}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Pro Tip Box */}
                <div className="p-3.5 bg-[#F4F4F0] rounded-xl border border-emerald-950/10 text-xs text-emerald-950/90">
                  <span className="font-bold text-amber-700 flex items-center gap-1 mb-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Architecture Best Practice:</span>
                  </span>
                  <p className="leading-relaxed">{currentSkill.tip}</p>
                </div>
              </div>

              {/* Right Column: Code Window Preview & WhatsApp Inquiry */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
                {/* Simulated Code Editor Window */}
                {currentSkill.codeSnippet && (
                  <div className="bg-[#0f172a] rounded-2xl overflow-hidden border border-white/10 shadow-xl text-left font-mono">
                    {/* Code Header Bar */}
                    <div className="bg-[#1e293b] px-3.5 py-2 flex items-center justify-between border-b border-white/5">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                        <span className="text-[10px] text-slate-400 ml-2 font-mono flex items-center gap-1">
                          <Code2 className="w-3 h-3 text-amber-400" />
                          <span>{selectedTech.toLowerCase().replace(/[^a-z]/g, '')}-architecture.ts</span>
                        </span>
                      </div>

                      <button
                        onClick={handleCopyCode}
                        className="text-slate-400 hover:text-white text-[10px] flex items-center gap-1 px-2 py-0.5 rounded bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
                        title="Copy Code Snippet"
                      >
                        {copiedCode ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-400" />
                            <span className="text-emerald-400">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>

                    {/* Code Snippet Body */}
                    <div className="p-3.5 overflow-x-auto max-h-[160px] no-scrollbar text-[11px] leading-relaxed text-slate-300">
                      <pre className="font-mono whitespace-pre">{currentSkill.codeSnippet}</pre>
                    </div>
                  </div>
                )}

                {/* Production Stats & CTA Box */}
                <div className="p-5 bg-emerald-950 text-white rounded-2xl space-y-4 shadow-md">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-[10px] uppercase font-bold tracking-widest text-amber-400">
                        Proven Experience
                      </p>
                      <p className="text-2xl font-serif font-bold text-white mt-0.5">
                        {currentSkill.projects}
                      </p>
                    </div>
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-bold bg-white/10 text-amber-300">
                      Production Ready
                    </span>
                  </div>

                  <p className="text-[11px] text-slate-300 leading-normal">
                    Production applications and cloud microservices built and maintained with high reliability and zero downtime.
                  </p>

                  <a
                    href={`https://wa.me/${whatsappNumber}?text=Hi%20Abdullah,%20I%20am%20interested%20in%20building%20a%20project%20using%20${encodeURIComponent(
                      selectedTech
                    )}.%20Let's%20discuss%20the%20technical%20architecture!`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-2.5 bg-amber-500 hover:bg-amber-600 text-emerald-950 text-xs font-bold rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md hover:scale-102"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-950" />
                    <span>Discuss {selectedTech} Project</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </InteractiveTiltCard>
      </div>
    </section>
  );
};
