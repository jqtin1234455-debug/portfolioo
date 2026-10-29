import React, { useState } from 'react';
import { X, Calculator, Check, ArrowRight, MessageSquare, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function EstimateCalculatorModal({ isOpen, onClose }) {
  const [projectType, setProjectType] = useState('mern');
  const [pages, setPages] = useState(5);
  const [features, setFeatures] = useState(['auth', 'responsive', 'seo']);
  const [timelineSpeed, setTimelineSpeed] = useState('standard');

  if (!isOpen) return null;

  const baseRates = {
    landing: { name: 'Landing Page / Portfolio', base: 12000, days: 5 },
    mern: { name: 'MERN Full Stack Web App', base: 28000, days: 14 },
    frontend: { name: 'Custom React / Vue Frontend', base: 18000, days: 8 },
    backend: { name: 'Node.js & MongoDB API', base: 20000, days: 10 },
    training: { name: 'IT Mentorship / Training', base: 15000, days: 7 }
  };

  const featureOptions = [
    { id: 'auth', label: 'User Authentication (JWT / Sessions)', cost: 4000, days: 2 },
    { id: 'admin', label: 'Admin Dashboard & Analytics', cost: 6000, days: 3 },
    { id: 'payment', label: 'Payment Integration / WhatsApp Order', cost: 5000, days: 2 },
    { id: 'responsive', label: '100% Mobile & Tablet Optimization', cost: 3000, days: 1 },
    { id: 'seo', label: 'SEO, Speed Audit & Fast CDN', cost: 3500, days: 1 },
    { id: 'database', label: 'Custom MongoDB Schema Architecture', cost: 4500, days: 2 }
  ];

  const toggleFeature = (id) => {
    if (features.includes(id)) {
      setFeatures(features.filter(f => f !== id));
    } else {
      setFeatures([...features, id]);
    }
  };

  const currentBase = baseRates[projectType] || baseRates.mern;
  const pageCost = (pages - 1) * 1200;
  const featuresCost = features.reduce((sum, fid) => {
    const f = featureOptions.find(item => item.id === fid);
    return sum + (f ? f.cost : 0);
  }, 0);

  const speedMultiplier = timelineSpeed === 'rush' ? 1.25 : 1;
  const totalNPR = Math.round((currentBase.base + pageCost + featuresCost) * speedMultiplier);
  const totalUSD = Math.round(totalNPR / 135);

  const totalDays = Math.max(3, Math.round(
    (currentBase.days + Math.round(pages * 0.5) + features.length) * (timelineSpeed === 'rush' ? 0.7 : 1)
  ));

  const handleSendWhatsApp = () => {
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.6 }
    });

    const selectedFeatureNames = features
      .map(fid => featureOptions.find(f => f.id === fid)?.label)
      .filter(Boolean)
      .join(', ');

    const message = `Hello! I used the Interactive Website Cost Estimator:%0A%0A` +
      `*Project Type:* ${currentBase.name}%0A` +
      `*Estimated Pages/Screens:* ${pages}%0A` +
      `*Selected Features:* ${selectedFeatureNames || 'Standard'}%0A` +
      `*Delivery Preference:* ${timelineSpeed === 'rush' ? 'Express Rush' : 'Standard Delivery'}%0A` +
      `*Estimated Budget:* NPR ${totalNPR.toLocaleString()} (~$${totalUSD} USD)%0A` +
      `*Estimated Timeline:* ~${totalDays} days%0A%0A` +
      `I'd like to discuss this project and begin the next steps.`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/?text=${encodedMessage}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 p-6 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center">
              <Calculator className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold font-heading">Interactive Project Cost Estimator</h3>
              <p className="text-xs text-emerald-100">Transparent pricing & instant timeline for your business</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Project Type */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
              1. Select Project Type
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {Object.entries(baseRates).map(([key, val]) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setProjectType(key)}
                  className={`text-left p-3 rounded-xl border text-sm transition-all ${
                    projectType === key
                      ? 'border-emerald-500 bg-emerald-50 text-emerald-950 ring-2 ring-emerald-500/20 font-medium'
                      : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-slate-50/50'
                  }`}
                >
                  <div className="font-semibold">{val.name}</div>
                  <div className="text-xs text-slate-500 mt-0.5">Base from NPR {val.base.toLocaleString()}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Number of Pages */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                2. Scope / Number of Pages ({pages} {pages === 1 ? 'Page' : 'Pages'})
              </label>
              <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
                {pages <= 3 ? 'Compact' : pages <= 7 ? 'Standard Business' : 'Extensive System'}
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="15"
              value={pages}
              onChange={(e) => setPages(Number(e.target.value))}
              className="w-full accent-emerald-500 cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-slate-400 mt-1">
              <span>1 Page (Single Page App)</span>
              <span>5 Pages (Standard)</span>
              <span>15+ Pages (Complex Portal)</span>
            </div>
          </div>

          {/* Features Selection */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
              3. Desired Features & Enhancements
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {featureOptions.map((feat) => {
                const isSelected = features.includes(feat.id);
                return (
                  <button
                    key={feat.id}
                    type="button"
                    onClick={() => toggleFeature(feat.id)}
                    className={`flex items-center gap-2.5 p-2.5 rounded-xl border text-xs text-left transition-all ${
                      isSelected
                        ? 'border-emerald-500 bg-emerald-50/80 text-emerald-900 font-medium'
                        : 'border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    <div className={`w-4 h-4 rounded flex items-center justify-center shrink-0 ${
                      isSelected ? 'bg-emerald-500 text-white' : 'border border-slate-300'
                    }`}>
                      {isSelected && <Check className="w-3 h-3" />}
                    </div>
                    <span>{feat.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Timeline Speed */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
              4. Delivery Timeline
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setTimelineSpeed('standard')}
                className={`p-3 rounded-xl border text-center text-xs transition-all ${
                  timelineSpeed === 'standard'
                    ? 'border-emerald-500 bg-emerald-50 text-emerald-900 font-semibold'
                    : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                Standard (~{totalDays} Days)
              </button>
              <button
                type="button"
                onClick={() => setTimelineSpeed('rush')}
                className={`p-3 rounded-xl border text-center text-xs transition-all ${
                  timelineSpeed === 'rush'
                    ? 'border-emerald-500 bg-emerald-50 text-emerald-900 font-semibold'
                    : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                ⚡ Priority Rush (~{Math.max(2, Math.round(totalDays * 0.7))} Days)
              </button>
            </div>
          </div>

          {/* Result Box */}
          <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-50 via-teal-50 to-slate-50 border border-emerald-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-xs text-emerald-800 font-medium flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                Estimated Investment:
              </div>
              <div className="text-2xl font-black text-emerald-900 font-heading">
                NPR {totalNPR.toLocaleString()}
                <span className="text-sm font-normal text-slate-600 ml-2">
                  (~${totalUSD} USD)
                </span>
              </div>
              <div className="text-xs text-slate-500 mt-0.5">
                Expected turnaround: ~{totalDays} business days
              </div>
            </div>

            <button
              onClick={handleSendWhatsApp}
              className="w-full sm:w-auto px-5 py-3 rounded-full bg-[#00c885] hover:bg-[#00b074] text-white font-semibold text-sm shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2 transition-all transform active:scale-95"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>Lock Quote on WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
