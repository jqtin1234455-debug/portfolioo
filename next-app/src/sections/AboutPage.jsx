"use client";

import React from 'react';
import { 
  GraduationCap, Award, Download, MapPin, UserCheck
} from 'lucide-react';
import { LinkedinIcon } from '../components/BrandIcons';
import { businessData } from '../data/businessData';
import { usePortfolioActions } from '../components/AppFrame';

export default function AboutPage() {
  const { onOpenResume } = usePortfolioActions();
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16 text-left">
      {/* Page Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold border border-emerald-300">
          <span>About Jatin Yadav</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 font-heading">
          Full Stack Developer (MERN Stack)
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          Based in <strong className="text-slate-800">{businessData.location}</strong>. Combining strong analytical problem-solving with hands-on MERN stack architecture and modern frontend engineering.
        </p>
      </div>

      {/* Grid: Bio card + Quick Info */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Summary with Photo */}
        <div className="lg:col-span-8 bg-white rounded-3xl p-8 sm:p-10 shadow-lg border border-slate-100 space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-3xl overflow-hidden shadow-lg border-2 border-emerald-300 shrink-0">
              <img
                src={businessData.avatarUrl}
                alt={businessData.name}
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="space-y-1">
              <h2 className="text-2xl font-bold text-slate-900 font-heading">
                {businessData.name}
              </h2>
              <p className="text-sm font-semibold text-emerald-600">
                {businessData.title}
              </p>
              <p className="text-xs text-slate-500">
                {businessData.location}
              </p>
            </div>
          </div>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {businessData.summary}
          </p>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            I specialize in translating technical specifications into high-performance web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js). With a keen focus on modular components, responsive Tailwind CSS layouts, and secure RESTful APIs, I build software that scales cleanly and loads fast across any device.
          </p>

          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-4">
            <button
              onClick={onOpenResume}
              className="px-6 py-3 rounded-full bg-[#00c885] hover:bg-[#00b074] text-white font-semibold text-sm shadow-md transition-all flex items-center gap-2 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download & Print Resume</span>
            </button>
            {businessData.linkedin && (
              <a
                href={businessData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full border border-slate-300 dark:border-slate-700 hover:border-blue-500 text-slate-700 dark:text-slate-200 hover:text-[#0077b5] dark:hover:text-blue-400 font-semibold text-sm transition-all flex items-center gap-2 bg-slate-50 dark:bg-slate-800"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>Connect on LinkedIn</span>
              </a>
            )}
          </div>
        </div>

        {/* Right: Quick facts card */}
        <div className="lg:col-span-4 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-slate-900 dark:to-emerald-950/40 rounded-3xl p-6 sm:p-8 border border-emerald-200/80 dark:border-slate-800 space-y-4 transition-colors">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white font-heading">
            Profile Snapshot
          </h3>
          <div className="space-y-3 text-xs text-slate-700 dark:text-slate-300">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-slate-900 dark:text-slate-100">Location:</strong>
                <span>{businessData.location}</span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-emerald-200">
            <span className="text-[11px] font-bold text-emerald-900 uppercase tracking-wider block mb-2">
              Spoken Languages
            </span>
            <div className="space-y-1.5 text-xs">
              {businessData.languages.map((l, i) => (
                <div key={i} className="flex justify-between items-center text-slate-700">
                  <span className="font-semibold">{l.name}</span>
                  <span className="text-slate-500 text-[11px]">{l.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Education & Certification Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Education */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-slate-100 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-indigo-100 text-indigo-800 flex items-center justify-center">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 font-heading">Education History</h3>
              <p className="text-xs text-slate-500">Academic qualifications & coursework</p>
            </div>
          </div>

          <div className="space-y-4">
            {businessData.education.map((edu, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                <div className="flex justify-between items-start">
                  <span className="font-bold text-sm text-slate-900">{edu.degree}</span>
                  <span className="text-[11px] font-semibold text-slate-500">{edu.period}</span>
                </div>
                <div className="text-xs font-medium text-emerald-700">{edu.institution}</div>
                {edu.score && (
                  <div className="text-xs font-bold text-indigo-700 pt-0.5">
                    Academic Result: {edu.score}
                  </div>
                )}
                <p className="text-xs text-slate-500 pt-1 leading-relaxed">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certification & Soft Skills */}
        <div className="space-y-6">
          {/* Certification Card */}
          <div className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-emerald-200 uppercase font-bold tracking-wider">
                  Professional Certification
                </span>
                <h3 className="text-xl font-bold font-heading">{businessData.certification.title}</h3>
              </div>
            </div>
            <div className="text-xs font-bold text-emerald-100">
              Issued by: {businessData.certification.issuer}
            </div>
            <p className="text-xs text-emerald-50 leading-relaxed">
              {businessData.certification.description}
            </p>
          </div>

          {/* Soft Skills Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-slate-100 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
                <UserCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 font-heading">Soft Skills</h3>
                <p className="text-xs text-slate-500">Core personal & workplace competencies</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              {businessData.softSkills.map((sk, idx) => (
                <div key={idx} className="p-3 bg-slate-50 rounded-xl text-xs font-semibold text-slate-800 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#00c885]" />
                  <span>{sk}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
