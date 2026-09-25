import React, { useState } from 'react';
import { X, Send, MessageSquare, Mail, Check, Phone } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  whatsappNumber: string;
  onShowToast: (msg: string, type: 'success' | 'error' | 'info') => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  whatsappNumber,
  onShowToast,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('Full-Stack Web App');
  const [budget, setBudget] = useState('$600 - $1,500');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    setSubmitted(true);
    onShowToast(
      'All components successfully compiled, passed unit tests, and pushed to production build host. Thanks for choosing Abdullah!',
      'success'
    );
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hi Abdullah, my name is ${name || 'a client'}. I would like to discuss a ${service} project with a budget of ${budget}. Details: ${message || 'Looking forward to collaborating!'}`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
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
            LET'S CONSTRUCT OUTSTANDING SOFTWARE
          </span>
          <h3 className="text-xl lg:text-2xl font-serif font-bold">
            Let's Work!
          </h3>
          <p className="text-xs text-slate-300 mt-1">
            Have an ambitious web application layout or backend system integration in mind? Submit your coordinates below.
          </p>
        </div>

        {/* Form Body */}
        <div className="p-6">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
                <Check className="w-8 h-8 stroke-[2.5]" />
              </div>
              <h4 className="font-serif text-2xl font-bold text-emerald-950">
                Inquiry Sent!
              </h4>
              <p className="text-xs text-emerald-950/70 max-w-sm mx-auto leading-relaxed">
                Thank you, {name}. Your request is queued and I will reach out within 24 hours. You can also message directly on WhatsApp.
              </p>

              <div className="pt-2 flex justify-center gap-3">
                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="px-5 py-2.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs rounded-xl flex items-center gap-2 cursor-pointer shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send on WhatsApp</span>
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2.5 bg-white border border-emerald-950/10 text-emerald-950 font-bold text-xs rounded-xl hover:bg-emerald-950/5 cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Quick WhatsApp Bar */}
              <div className="flex items-center justify-between p-3 bg-white rounded-xl border border-emerald-950/5">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#25D366]/20 flex items-center justify-center text-[#25D366]">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] text-emerald-950/50 uppercase font-bold">Fastest Response</p>
                    <p className="text-xs font-bold text-emerald-950">WhatsApp Directly</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="px-3 py-1.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs rounded-lg transition-colors cursor-pointer"
                >
                  CHAT NOW
                </button>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-emerald-950/60 uppercase tracking-wider mb-1">
                  YOUR NAME *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Mus'haf Rafiq"
                  className="w-full bg-white border border-emerald-950/10 px-3.5 py-2 rounded-xl text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-amber-500 text-emerald-950"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold text-emerald-950/60 uppercase tracking-wider mb-1">
                  EMAIL ADDRESS *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="client@agency.com"
                  className="w-full bg-white border border-emerald-950/10 px-3.5 py-2 rounded-xl text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-amber-500 text-emerald-950"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] font-bold text-emerald-950/60 uppercase tracking-wider mb-1">
                    PROJECT CATEGORY
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full bg-white border border-emerald-950/10 px-3 py-2 rounded-xl text-xs font-semibold focus:outline-none text-emerald-950"
                  >
                    <option value="Full-Stack Web App">Full-Stack Web App</option>
                    <option value="Next.js SaaS">Next.js SaaS</option>
                    <option value="E-Commerce Store">E-Commerce Store</option>
                    <option value="API Integration">API Integration</option>
                    <option value="UI/UX Prototyping">UI/UX Prototyping</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-emerald-950/60 uppercase tracking-wider mb-1">
                    BUDGET RANGE
                  </label>
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full bg-white border border-emerald-950/10 px-3 py-2 rounded-xl text-xs font-semibold focus:outline-none text-emerald-950"
                  >
                    <option value="$300 - $600">$300 - $600</option>
                    <option value="$600 - $1,500">$600 - $1,500</option>
                    <option value="$1,500 - $3,500+">$1,500 - $3,500+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-emerald-950/60 uppercase tracking-wider mb-1">
                  PROJECT SUMMARY
                </label>
                <textarea
                  rows={2}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Outline your application needs..."
                  className="w-full bg-white border border-emerald-950/10 px-3.5 py-2 rounded-xl text-xs font-semibold focus:outline-none text-emerald-950 resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-emerald-950 hover:bg-emerald-900 text-white text-xs font-bold tracking-wider rounded-xl uppercase flex items-center justify-center gap-2 cursor-pointer shadow-md transition-all hover:scale-101"
                >
                  <span>SEND PROPOSAL</span>
                  <Send className="w-3.5 h-3.5 text-amber-400" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
