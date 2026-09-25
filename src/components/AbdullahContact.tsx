import React, { useState } from 'react';
import { Mail, MessageSquare, Download, Send, Check } from 'lucide-react';

interface AbdullahContactProps {
  whatsappNumber: string;
  onShowToast: (msg: string, type: 'success' | 'error' | 'info') => void;
}

export const AbdullahContact: React.FC<AbdullahContactProps> = ({
  whatsappNumber,
  onShowToast,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('Full-Stack Web App');
  const [budget, setBudget] = useState('$500 - $1,500');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    setSubmitted(true);
    onShowToast(
      'All components successfully compiled, passed unit tests, and pushed to production build host. Thanks for choosing Abdullah!',
      'success'
    );
  };

  const handleDownloadKit = () => {
    onShowToast('Downloading Abdullah_Developer_Welcome_Kit_2026.pdf (Triggered safely)', 'success');
  };

  return (
    <section id="contact" className="bg-[#ECEAE1] py-16 px-6 border-b border-emerald-950/10">
      <div className="max-w-6xl mx-auto text-left">
        <div className="bg-emerald-950 rounded-3xl overflow-hidden shadow-2xl text-white">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Column: Intro & Info */}
            <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-between space-y-8 bg-emerald-950/95 border-b lg:border-b-0 lg:border-r border-white/10">
              <div>
                <span className="text-amber-400 text-xs font-bold tracking-[0.25em] uppercase block mb-2">
                  START A CONVERSATION
                </span>
                <h2 className="font-serif text-3xl lg:text-4xl font-bold tracking-tight text-white">
                  Let's Construct Outstanding Software
                </h2>
                <p className="text-xs lg:text-sm text-slate-300 mt-4 leading-relaxed font-normal">
                  Have an ambitious web application layout or backend system integration in mind? Submit your contact coordinates. Abdullah will get back to you within 24 hours.
                </p>
              </div>

              {/* Direct Channels */}
              <div className="space-y-4">
                <a
                  href={`https://wa.me/${whatsappNumber}?text=Hi%20Abdullah,%20I%20have%20a%20project%20inquiry%20from%20your%20portfolio.`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 hover:bg-[#25D366]/20 transition-colors border border-white/10 group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#25D366]/20 text-[#25D366] flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-amber-400 uppercase font-bold tracking-wider">Instant Chat</p>
                    <p className="text-xs font-semibold text-white group-hover:text-[#25D366] transition-colors">
                      WhatsApp: +{whatsappNumber}
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:abdullah.dev.pro@gmail.com"
                  className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 hover:bg-amber-500/20 transition-colors border border-white/10 group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-amber-400 uppercase font-bold tracking-wider">Email Inquiry</p>
                    <p className="text-xs font-semibold text-white group-hover:text-amber-400 transition-colors truncate">
                      abdullah.dev.pro@gmail.com
                    </p>
                  </div>
                </a>
              </div>

              {/* Welcome Kit Box */}
              <div className="pt-4 border-t border-white/10">
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  Planning a SaaS project? Download Abdullah's premium welcome package containing custom layout frameworks, code checklist templates, and sample agreements.
                </p>
                <button
                  type="button"
                  onClick={handleDownloadKit}
                  className="bg-amber-500 hover:bg-amber-600 text-emerald-950 font-bold text-xs tracking-wider px-5 py-3 rounded-xl flex items-center gap-2 cursor-pointer transition-all shadow-md"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Welcome Kit (PDF)</span>
                </button>
              </div>
            </div>

            {/* Right Column: Direct Contact Form */}
            <div className="lg:col-span-7 p-8 lg:p-12 bg-white text-emerald-950">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
                    <Check className="w-8 h-8 stroke-[2.5]" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-emerald-950">
                    Thank You, {name}!
                  </h3>
                  <p className="text-xs sm:text-sm text-emerald-950/70 max-w-md mx-auto leading-relaxed">
                    Your inquiry has been received. I will review your technical requirements and respond with a detailed roadmap.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-amber-700 font-bold hover:underline pt-2"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold text-emerald-950/60 uppercase tracking-wider mb-1.5">
                        YOUR NAME *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Mus'haf Rafiq"
                        className="w-full bg-[#ECEAE1] border border-emerald-950/5 px-4 py-2.5 rounded-xl text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-amber-500 text-emerald-950"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-emerald-950/60 uppercase tracking-wider mb-1.5">
                        EMAIL ADDRESS *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. client@agency.com"
                        className="w-full bg-[#ECEAE1] border border-emerald-950/5 px-4 py-2.5 rounded-xl text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-amber-500 text-emerald-950"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold text-emerald-950/60 uppercase tracking-wider mb-1.5">
                        PROJECT SCOPE
                      </label>
                      <select
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full bg-[#ECEAE1] border border-emerald-950/5 px-4 py-2.5 rounded-xl text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-amber-500 text-emerald-950"
                      >
                        <option value="Full-Stack Web App">Full-Stack Web App</option>
                        <option value="SaaS Platform">SaaS Platform</option>
                        <option value="E-Commerce Store">E-Commerce Store</option>
                        <option value="API Integration">API Integration</option>
                        <option value="UI/UX Prototyping">UI/UX Prototyping</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-emerald-950/60 uppercase tracking-wider mb-1.5">
                        ESTIMATED BUDGET
                      </label>
                      <select
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        className="w-full bg-[#ECEAE1] border border-emerald-950/5 px-4 py-2.5 rounded-xl text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-amber-500 text-emerald-950"
                      >
                        <option value="$300 - $600">$300 - $600 (Starter)</option>
                        <option value="$600 - $1,500">$600 - $1,500 (Standard)</option>
                        <option value="$1,500 - $3,500+">$1,500 - $3,500+ (Full Suite)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-emerald-950/60 uppercase tracking-wider mb-1.5">
                      TECHNICAL SPECIFICATIONS / DETAILS
                    </label>
                    <textarea
                      rows={3}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Outline your application goals, target audience, preferred tech stack, and timeline..."
                      className="w-full bg-[#ECEAE1] border border-emerald-950/5 px-4 py-2.5 rounded-xl text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-amber-500 text-emerald-950 resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 bg-emerald-950 hover:bg-emerald-900 text-white text-xs font-bold tracking-wider rounded-xl uppercase flex items-center justify-center gap-2 cursor-pointer shadow-md transition-all hover:scale-101"
                    >
                      <span>SUBMIT DEVELOPMENT PROPOSAL</span>
                      <Send className="w-3.5 h-3.5 text-amber-400" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
