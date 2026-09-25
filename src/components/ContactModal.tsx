import React, { useState } from 'react';
import { X, Send, MessageSquare, Mail, Phone, Check, Sparkles } from 'lucide-react';
import { ProfileData } from '../types/portfolio';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: ProfileData;
  initialService?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  profile,
  initialService = '',
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState(initialService || 'Logo Design');
  const [budget, setBudget] = useState('Standard');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const generateWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `Hi ${profile.name}! I am interested in ${service || 'Graphic Design services'}. My name is ${name || 'a client'}. Message: ${message || 'I would like to discuss a project with you.'}`
    );
    const cleanNumber = profile.whatsapp.replace(/[^0-9]/g, '');
    return `https://wa.me/${cleanNumber}?text=${text}`;
  };

  const generateMailtoUrl = () => {
    const subject = encodeURIComponent(`Project Inquiry: ${service} - from ${name || 'Client'}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nService: ${service}\nBudget Range: ${budget}\n\nProject Details:\n${message}`
    );
    return `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div
        className="relative w-full max-w-lg bg-[#FAF8F5] rounded-3xl shadow-2xl border border-[#D4A359]/30 overflow-hidden transform transition-all text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#13221B] px-6 py-5 text-white flex items-center justify-between border-b border-[#D4A359]/30">
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-full bg-[#D4A359] text-[#13221B] flex items-center justify-center font-serif font-bold text-sm">
              {profile.name.charAt(0)}
            </span>
            <div>
              <h3 className="font-serif-display text-lg font-bold text-white leading-tight">
                Let's Talk & Collaborate
              </h3>
              <p className="text-[11px] text-[#D4A359]">
                {profile.name} • Graphic Designer
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-gray-400 hover:text-white rounded-full hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
                <Check className="w-8 h-8 stroke-[2.5]" />
              </div>
              <h4 className="font-serif-display text-2xl font-bold text-[#1B2A22]">
                Thank you, {name || 'there'}!
              </h4>
              <p className="text-sm text-gray-600 max-w-sm mx-auto">
                Your message has been prepared. You can send it directly via WhatsApp for instant response or via Email.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
                <a
                  href={generateWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#25D366] text-white rounded-full text-xs font-semibold hover:bg-[#1EBE5D] transition-colors shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send on WhatsApp</span>
                </a>
                <a
                  href={generateMailtoUrl()}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#13221B] text-white rounded-full text-xs font-semibold hover:bg-[#1C3228] transition-colors shadow-sm"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send via Email</span>
                </a>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="text-xs text-gray-500 hover:underline"
                >
                  Back to Portfolio
                </button>
              </div>
            </div>
          ) : (
            <div>
              {/* Quick Contact Chips */}
              <div className="flex items-center gap-2 pb-4 mb-4 border-b border-[#1B2A22]/10 overflow-x-auto">
                <a
                  href={generateWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#1E8E47] rounded-full text-xs font-medium transition-colors shrink-0"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>Direct WhatsApp</span>
                </a>
                <a
                  href={`tel:${profile.phone}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-full text-xs font-medium transition-colors shrink-0"
                >
                  <Phone className="w-3.5 h-3.5 text-[#13221B]" />
                  <span>Call {profile.phone}</span>
                </a>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#1B2A22] mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Ali Khan"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#D4A359] text-xs bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#1B2A22] mb-1">
                      Your Email or Phone
                    </label>
                    <input
                      type="text"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="ali@example.com / 0300..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#D4A359] text-xs bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#1B2A22] mb-1">
                      Service Required
                    </label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#D4A359] text-xs bg-white"
                    >
                      <option value="Logo Design">Logo Design</option>
                      <option value="Brand Identity">Brand Identity</option>
                      <option value="Business Card Design">Business Card Design</option>
                      <option value="Social Media Design">Social Media Design</option>
                      <option value="Poster & Flyer Design">Poster & Flyer Design</option>
                      <option value="CV / Resume Design">CV / Resume Design</option>
                      <option value="Presentation Design">Presentation Design</option>
                      <option value="Other Project">Other Custom Project</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#1B2A22] mb-1">
                      Budget / Timeline
                    </label>
                    <select
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#D4A359] text-xs bg-white"
                    >
                      <option value="Urgent (1-2 Days)">Urgent (1–2 Days)</option>
                      <option value="Standard (3-5 Days)">Standard (3–5 Days)</option>
                      <option value="Flexible Timeline">Flexible Timeline</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1B2A22] mb-1">
                    Project Details & Message
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell me about your business, vision, colors, and any references you like..."
                    className="w-full px-3.5 py-2 rounded-xl border border-gray-300 focus:outline-none focus:border-[#D4A359] text-xs bg-white resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3 bg-[#13221B] hover:bg-[#1C3228] text-white rounded-full text-xs font-semibold tracking-wider transition-colors shadow-sm cursor-pointer"
                  >
                    <span>SEND INQUIRY</span>
                    <Send className="w-3.5 h-3.5 text-[#D4A359]" />
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
