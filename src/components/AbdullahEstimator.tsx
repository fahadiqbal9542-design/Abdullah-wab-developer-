import React, { useState, useEffect } from 'react';
import {
  Calculator,
  Clock,
  DollarSign,
  MessageSquare,
  CheckCircle,
  FileText,
  Send,
  Zap,
} from 'lucide-react';
import { ClientProposal } from '../types/abdullah';

interface AbdullahEstimatorProps {
  whatsappNumber: string;
  proposals: ClientProposal[];
  onAddProposal: (proposal: ClientProposal) => void;
  onShowToast: (msg: string, type: 'success' | 'error' | 'info') => void;
}

export const AbdullahEstimator: React.FC<AbdullahEstimatorProps> = ({
  whatsappNumber,
  proposals,
  onAddProposal,
  onShowToast,
}) => {
  const [category, setCategory] = useState<string>('Full-Stack SaaS');
  const [pages, setPages] = useState<number>(3);
  const [speed, setSpeed] = useState<'Standard' | 'Express'>('Standard');
  const [estimatedCost, setEstimatedCost] = useState<number>(800);

  // Proposal modal form state
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [projectMessage, setProjectMessage] = useState('');

  // Calculate pricing dynamically
  useEffect(() => {
    let base = 400;
    if (category === 'Frontend Page') base = 300;
    if (category === 'Full-Stack SaaS') base = 800;
    if (category === 'E-Commerce Store') base = 600;
    if (category === 'API Setup') base = 400;
    if (category === 'UI/UX Prototyping') base = 250;

    let total = base * (1 + (pages - 1) * 0.35);
    if (speed === 'Express') total = total * 1.35;

    setEstimatedCost(Math.round(total));
  }, [category, pages, speed]);

  const getEstimatedTimeline = () => {
    if (speed === 'Express') {
      return pages > 5 ? '4 - 6 Business Days' : '2 - 4 Business Days';
    }
    return pages > 5 ? '7 - 12 Business Days' : '4 - 7 Business Days';
  };

  const handleLockInWhatsApp = () => {
    const text = encodeURIComponent(
      `Hi Abdullah, I generated a quote on your Web Architecture Planner:\n\nCategory: ${category}\nPages/Scale: ${pages} views\nDelivery: ${speed}\nEstimated Budget: $${estimatedCost}\nTimeline: ${getEstimatedTimeline()}\n\nLet's discuss how we can get started!`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
  };

  const handleSubmitProposal = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName.trim() || !clientEmail.trim()) {
      onShowToast('Please fill in your name and email!', 'error');
      return;
    }

    const newProposal: ClientProposal = {
      id: `ABD-${Math.floor(1000 + Math.random() * 9000)}`,
      clientName: clientName.trim(),
      clientEmail: clientEmail.trim(),
      serviceType: category,
      budget: estimatedCost,
      complexity: `${pages} Page Modules (${speed})`,
      message: projectMessage.trim() || 'Custom requirements submitted via Web Planner.',
      status: 'In Progress',
      date: new Date().toISOString().split('T')[0],
    };

    onAddProposal(newProposal);
    setClientName('');
    setClientEmail('');
    setProjectMessage('');
    onShowToast(`Proposal registered! Project ID: ${newProposal.id}`, 'success');
  };

  return (
    <section id="estimator" className="bg-[#F4F4F0] py-16 px-6 border-b border-emerald-950/10">
      <div className="max-w-6xl mx-auto text-left">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-amber-600 text-xs font-bold tracking-[0.25em] uppercase block">
            DYNAMIC ESTIMATOR & QUEUE CONSOLE
          </span>
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-emerald-950 mt-2 tracking-tight">
            Web Architecture Planner
          </h2>
          <p className="text-xs lg:text-sm text-emerald-950/70 mt-3 max-w-lg mx-auto leading-relaxed">
            Plan your development milestones, estimate standard package budgets, and submit requests to trace your project progress in real-time.
          </p>
        </div>

        {/* 2-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Interactive Estimator Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-7 shadow-lg border border-emerald-950/5 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center gap-2 pb-4 border-b border-emerald-950/5">
                <Calculator className="w-5 h-5 text-amber-500" />
                <h3 className="text-xs font-bold text-emerald-950 tracking-wider uppercase">
                  1. Plan Layout Requirements & Estimator
                </h3>
              </div>

              {/* Category Selection */}
              <div>
                <label className="block text-[10px] font-bold text-emerald-950/50 uppercase tracking-wider mb-2">
                  SELECT WORK CATEGORY
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    'Frontend Page',
                    'Full-Stack SaaS',
                    'E-Commerce Store',
                    'API Setup',
                    'UI/UX Prototyping',
                  ].map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setCategory(cat)}
                      className={`px-3 py-2.5 rounded-xl border text-[11px] font-bold tracking-wider text-center transition-all cursor-pointer ${
                        category === cat
                          ? 'bg-emerald-950 text-white border-emerald-950 shadow-sm'
                          : 'bg-[#F4F4F0] border-emerald-950/5 text-emerald-950/70 hover:border-amber-500'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Scale / Page count slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-[10px] font-bold text-emerald-950/50 uppercase tracking-wider">
                    MODULES / PAGE VIEWS
                  </label>
                  <span className="text-xs font-extrabold text-emerald-950 px-2 py-0.5 bg-[#ECEAE1] rounded-md">
                    {pages} {pages === 1 ? 'Page' : 'Pages / Views'}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={pages}
                  onChange={(e) => setPages(parseInt(e.target.value))}
                  className="w-full h-2 bg-[#ECEAE1] rounded-lg appearance-none cursor-pointer accent-emerald-950"
                />
                <div className="flex justify-between text-[10px] text-emerald-950/40 mt-1">
                  <span>1 Single Page</span>
                  <span>5 Multi-view App</span>
                  <span>10+ Full Platform</span>
                </div>
              </div>

              {/* Delivery Speed Selector */}
              <div>
                <label className="block text-[10px] font-bold text-emerald-950/50 uppercase tracking-wider mb-2">
                  DELIVERY SPEED PREFERENCE
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setSpeed('Standard')}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      speed === 'Standard'
                        ? 'border-emerald-950 bg-emerald-950/5'
                        : 'border-emerald-950/10 bg-white hover:border-emerald-950/20'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 font-bold text-xs text-emerald-950">
                      <Clock className="w-3.5 h-3.5 text-amber-600" />
                      <span>Standard Delivery</span>
                    </div>
                    <p className="text-[10px] text-emerald-950/60 mt-1">
                      Regular high-fidelity timeline
                    </p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSpeed('Express')}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      speed === 'Express'
                        ? 'border-amber-500 bg-amber-500/10'
                        : 'border-emerald-950/10 bg-white hover:border-emerald-950/20'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 font-bold text-xs text-emerald-950">
                      <Zap className="w-3.5 h-3.5 text-amber-500" />
                      <span>Express Priority</span>
                    </div>
                    <p className="text-[10px] text-emerald-950/60 mt-1">
                      Accelerated sprint + priority commits
                    </p>
                  </button>
                </div>
              </div>
            </div>

            {/* Price Output Box */}
            <div className="mt-8 pt-6 border-t border-emerald-950/5 bg-[#ECEAE1] p-5 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-950/50">
                  ESTIMATED INVESTMENT:
                </p>
                <div className="flex items-baseline gap-2 mt-0.5">
                  <span className="font-serif text-3xl font-extrabold text-emerald-950">
                    ${estimatedCost}
                  </span>
                  <span className="text-[11px] font-semibold text-emerald-950/60">
                    • ~{getEstimatedTimeline()}
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleLockInWhatsApp}
                className="bg-emerald-950 hover:bg-emerald-900 text-white font-bold text-xs tracking-wider px-5 py-3 rounded-xl flex items-center justify-center gap-2 cursor-pointer shadow-md transition-all shrink-0 hover:scale-102"
              >
                <MessageSquare className="w-4 h-4 text-amber-400" />
                <span>Lock In via WhatsApp</span>
              </button>
            </div>
          </div>

          {/* Right Column: Live Client Queue / Proposals Tracker */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-7 shadow-lg border border-emerald-950/5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-emerald-950/5">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-amber-500" />
                  <h3 className="text-xs font-bold text-emerald-950 tracking-wider uppercase">
                    2. Live Client Proposals & Tracker
                  </h3>
                </div>
                <span className="text-[10px] font-bold text-emerald-950/40">
                  {proposals.length} In Queue
                </span>
              </div>

              {/* Proposal Cards */}
              <div className="space-y-3 mb-6 max-h-[280px] overflow-y-auto pr-1">
                {proposals.map((item) => (
                  <div
                    key={item.id}
                    className="p-3.5 bg-[#F4F4F0] rounded-2xl border border-emerald-950/5 space-y-1.5"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] font-mono font-bold text-amber-700 bg-amber-500/10 px-1.5 py-0.5 rounded">
                        {item.id}
                      </span>
                      <span
                        className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${
                          item.status === 'Completed'
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-amber-100 text-amber-800'
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>

                    <div className="flex justify-between items-baseline">
                      <p className="text-xs font-bold text-emerald-950">{item.clientName}</p>
                      <p className="text-[11px] font-extrabold text-emerald-950">${item.budget}</p>
                    </div>

                    <p className="text-[10px] text-emerald-950/65 line-clamp-1">
                      {item.serviceType} • {item.complexity}
                    </p>
                  </div>
                ))}
              </div>

              {/* Quick Submit Form to Register in Queue */}
              <form onSubmit={handleSubmitProposal} className="space-y-3 pt-3 border-t border-emerald-950/5">
                <p className="text-[10px] font-bold text-emerald-950/70 uppercase tracking-wider">
                  Direct Queue Registration:
                </p>

                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full bg-[#ECEAE1] px-3 py-2 rounded-xl text-xs text-emerald-950 border border-emerald-950/5 focus:outline-none"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Email"
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    className="w-full bg-[#ECEAE1] px-3 py-2 rounded-xl text-xs text-emerald-950 border border-emerald-950/5 focus:outline-none"
                  />
                </div>

                <input
                  type="text"
                  placeholder="Short note or scope summary..."
                  value={projectMessage}
                  onChange={(e) => setProjectMessage(e.target.value)}
                  className="w-full bg-[#ECEAE1] px-3 py-2 rounded-xl text-xs text-emerald-950 border border-emerald-950/5 focus:outline-none"
                />

                <button
                  type="submit"
                  className="w-full py-2.5 bg-amber-500 hover:bg-amber-600 text-emerald-950 text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-xs"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>REGISTER ESTIMATE IN CLIENT QUEUE</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
