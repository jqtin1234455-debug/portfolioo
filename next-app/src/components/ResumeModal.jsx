"use client";

import React from 'react';
import { X, Printer, Award, GraduationCap, Code2, MapPin } from 'lucide-react';
import { businessData } from '../data/businessData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[92vh] flex flex-col">
        {/* Header bar */}
        <div className="bg-slate-900 text-white p-4 sm:px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-emerald-400" />
            <span className="font-bold text-sm tracking-wide">Jatin Yadav — Full Stack Developer Resume</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-white flex items-center gap-1.5 transition-colors"
              title="Print Resume"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-300 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable Resume Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-800 print:p-0 text-left">
          {/* Header with Photo */}
          <div className="border-b border-slate-200 pb-5">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-emerald-500 shadow-md shrink-0">
                  <img
                    src={businessData.avatarUrl}
                    alt={businessData.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
                    {businessData.name}
                  </h1>
                  <p className="text-emerald-600 font-semibold text-base mt-0.5">
                    {businessData.title}
                  </p>
                </div>
              </div>

              <div className="text-xs text-slate-600 space-y-1 sm:text-right">
                <div className="flex items-center sm:justify-end gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>{businessData.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Summary */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-2 flex items-center gap-1.5">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed bg-slate-50 p-3.5 rounded-xl border border-slate-100">
              {businessData.summary}
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-2 flex items-center gap-1.5">
              <Code2 className="w-4 h-4" /> Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className="font-semibold text-slate-900 block mb-1">Languages & Frontend</span>
                <span className="text-slate-600">HTML5, CSS3, JavaScript (ES6+), React.js, Tailwind CSS</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className="font-semibold text-slate-900 block mb-1">Backend & Database</span>
                <span className="text-slate-600">Node.js, Express.js, MongoDB, RESTful APIs, JWT</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className="font-semibold text-slate-900 block mb-1">Tools & Platforms</span>
                <span className="text-slate-600">Git, GitHub, Microsoft Excel, VS Code, Postman</span>
              </div>
            </div>
          </div>

          {/* Key Projects */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-2 flex items-center gap-1.5">
              Key Projects
            </h2>
            <div className="space-y-3">
              {businessData.projects.map((prj) => (
                <div key={prj.id} className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-slate-900 text-sm">{prj.title}</span>
                    <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                      {prj.tech.slice(0, 3).join(' • ')}
                    </span>
                  </div>
                  <p className="text-slate-600 mt-1">{prj.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certification */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-2 flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4" /> Education
              </h2>
              <div className="space-y-2 text-xs">
                {businessData.education.map((edu, idx) => (
                  <div key={idx} className="p-2.5 bg-slate-50 rounded-xl border border-slate-100">
                    <div className="font-semibold text-slate-900">{edu.degree}</div>
                    <div className="text-slate-500 text-[11px]">{edu.institution}</div>
                    {edu.score && <div className="text-emerald-700 font-medium text-[11px]">{edu.score}</div>}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-2 flex items-center gap-1.5">
                <Award className="w-4 h-4" /> Certification & Languages
              </h2>
              <div className="p-3 bg-emerald-50/60 rounded-xl border border-emerald-200 text-xs mb-3">
                <div className="font-bold text-emerald-950">{businessData.certification.title}</div>
                <div className="text-emerald-700 text-[11px] font-semibold">{businessData.certification.issuer}</div>
                <p className="text-slate-600 text-[11px] mt-1">{businessData.certification.description}</p>
              </div>
              <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100 text-xs">
                <span className="font-semibold text-slate-900 block mb-1">Languages:</span>
                <span className="text-slate-600">English, Nepali, Hindi</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
