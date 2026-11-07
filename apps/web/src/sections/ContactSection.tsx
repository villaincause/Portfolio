import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Mail, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

const GithubIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path
      fillRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      clipRule="evenodd"
    />
  </svg>
);

const LinkedinIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [responseMsg, setResponseMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setResponseMsg('');

    const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'Portfolio Contact Submission',
          message: formData.message,
          from_name: 'Portfolio Contact Form',
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus('success');
        setResponseMsg('Thank you! Your message has been sent successfully to my inbox.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
        setResponseMsg(data.message || 'Failed to send message. Please try again.');
      }
    } catch {
      setStatus('error');
      setResponseMsg('Network error. Please try again later.');
    }
  };

  return (
    <section id="contact" className="py-16 lg:py-24 px-6 lg:px-12 max-w-7xl mx-auto border-t border-neutral-900">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Column: Contact Header & Socials */}
        <div className="lg:col-span-5 space-y-6">
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-white leading-tight">
            LET'S CONNECT
          </h2>

          <div className="space-y-2 text-neutral-400 text-sm sm:text-base">
            <p>
              Say hello at{' '}
              <a
                href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                className="text-white hover:text-[#C6F432] underline underline-offset-4 font-medium transition-colors"
              >
                {PORTFOLIO_DATA.personal.email}
              </a>
            </p>
            <p>
              For more info, here's my{' '}
              <a
                href={PORTFOLIO_DATA.personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#C6F432] underline underline-offset-4 font-medium transition-colors"
              >
                resume
              </a>
              .
            </p>
          </div>

          {/* Social Links Row */}
          <div className="flex items-center gap-4 pt-4">
            <a
              href={PORTFOLIO_DATA.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-[#141414] border border-neutral-800 flex items-center justify-center text-white hover:text-[#C6F432] hover:border-[#C6F432] transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>

            <a
              href={PORTFOLIO_DATA.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-[#141414] border border-neutral-800 flex items-center justify-center text-white hover:text-[#C6F432] hover:border-[#C6F432] transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-5 h-5" />
            </a>

            <a
              href={`mailto:${PORTFOLIO_DATA.personal.email}`}
              className="w-11 h-11 rounded-full bg-[#141414] border border-neutral-800 flex items-center justify-center text-white hover:text-[#C6F432] hover:border-[#C6F432] transition-colors"
              aria-label="Send Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="lg:col-span-7">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div className="space-y-2">
              <label htmlFor="name" className="block text-xs font-heading font-semibold uppercase tracking-wider text-neutral-400">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-[#141414] border border-neutral-800 rounded-xl px-4 py-3.5 text-white placeholder-neutral-600 focus:outline-none focus:border-[#C6F432] transition-colors text-sm"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-xs font-heading font-semibold uppercase tracking-wider text-neutral-400">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-[#141414] border border-neutral-800 rounded-xl px-4 py-3.5 text-white placeholder-neutral-600 focus:outline-none focus:border-[#C6F432] transition-colors text-sm"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="block text-xs font-heading font-semibold uppercase tracking-wider text-neutral-400">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                placeholder="Project Inquiry / Job Opportunity"
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-[#141414] border border-neutral-800 rounded-xl px-4 py-3.5 text-white placeholder-neutral-600 focus:outline-none focus:border-[#C6F432] transition-colors text-sm"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="block text-xs font-heading font-semibold uppercase tracking-wider text-neutral-400">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Write your message here..."
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-[#141414] border border-neutral-800 rounded-xl px-4 py-3.5 text-white placeholder-neutral-600 focus:outline-none focus:border-[#C6F432] transition-colors text-sm resize-none"
              />
            </div>

            {status === 'success' && (
              <div className="flex items-center gap-2 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm">
                <CheckCircle2 size={18} />
                <span>{responseMsg}</span>
              </div>
            )}

            {status === 'error' && (
              <div className="flex items-center gap-2 p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-sm">
                <AlertCircle size={18} />
                <span>{responseMsg}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="inline-flex items-center justify-center gap-3 bg-[#C6F432] text-black font-heading font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-full hover:bg-[#d4f53c] transition-all transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              {status === 'submitting' ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>SENDING...</span>
                </>
              ) : (
                <span>SUBMIT</span>
              )}
            </button>

          </form>
        </div>

      </div>
    </section>
  );
};