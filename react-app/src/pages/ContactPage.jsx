import React, { useState } from 'react';
import { Send } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'MERN Full Stack Development',
    message: ''
  });
  const [submitMessage, setSubmitMessage] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    const message = [
      'Hello! I would like to discuss a project.',
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone || 'Not provided'}`,
      `Service: ${formData.service}`,
      `Message: ${formData.message}`,
    ].join('\n');

    const whatsappWindow = window.open(
      `https://wa.me/?text=${encodeURIComponent(message)}`,
      '_blank',
    );

    if (!whatsappWindow) {
      setSubmitMessage('Your browser blocked the WhatsApp tab. Allow pop-ups and try again.');
      return;
    }

    whatsappWindow.opener = null;
    setSubmitMessage('WhatsApp opened with your draft. Select a recipient and send it to deliver your message.');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16 text-left">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-xs font-bold border border-emerald-300 dark:border-emerald-800">
          <span>Get In Touch</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white font-heading">
          Let&apos;s Discuss Your Project or Training
        </h1>
        <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
          Reach out for software consulting, MERN development, responsive UI engineering, or academic and corporate IT training.
        </p>
      </div>

      <div className="grid grid-cols-1">
        {/* Interactive Contact Form */}
        <div className="lg:col-span-7 bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-10 shadow-lg border border-slate-100 dark:border-slate-800">
          <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-1">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white font-heading">
                  Send a Direct Message
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Fill in your details to prepare a WhatsApp draft. Choose a recipient and send it there.
                </p>
              </div>

              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="contact-name" className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    required
                    placeholder="e.g. Ramesh Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-email" className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    required
                    placeholder="e.g. name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500"
                  />
                </div>
              </div>

              {/* Phone & Service */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="contact-phone" className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="contact-phone"
                    placeholder="e.g. +977 98xxxxxxxx"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-service" className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Service Required
                  </label>
                  <select
                    id="contact-service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500"
                  >
                    <option value="MERN Full Stack Development">MERN Full Stack Development</option>
                    <option value="Custom Frontend (React / Vue.js)">Custom Frontend (React / Vue.js)</option>
                    <option value="Backend APIs & Database Architecture">Backend APIs & Database Architecture</option>
                    <option value="UI/UX & Mobile Responsive Redesign">UI/UX & Mobile Responsive Redesign</option>
                    <option value="Speed Optimization & Bug Fixing">Speed Optimization & Bug Fixing</option>
                    <option value="Technical Training & Mentorship">Technical Training & Mentorship</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="contact-message" className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Project Details / Message *
                </label>
                <textarea
                  rows="4"
                  id="contact-message"
                  required
                  placeholder="Describe your requirements, timeline, or project goals..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500"
                />
              </div>

              {/* Actions */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-7 py-3 rounded-full bg-[#00c885] hover:bg-[#00b074] text-white font-bold text-xs shadow-md shadow-emerald-500/25 flex items-center justify-center gap-2 transition-all transform active:scale-95"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Continue in WhatsApp</span>
                </button>
                <p className="text-xs text-slate-500 dark:text-slate-400" role="status" aria-live="polite">
                  {submitMessage || 'Your message opens as a draft; it is only delivered after you send it in WhatsApp.'}
                </p>
              </div>
          </form>
        </div>
      </div>
    </div>
  );
}
