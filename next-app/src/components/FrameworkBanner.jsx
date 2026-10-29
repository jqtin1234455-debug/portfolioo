"use client";

import React from 'react';
import { Layers, ArrowRight, ExternalLink } from 'lucide-react';

export default function FrameworkBanner() {
  const handleSwitchToVue = () => {
    // If running in development with both ports, redirect to port 5174 (Vue app)
    const currentHost = window.location.hostname;
    const vueUrl = `http://${currentHost}:5174`;
    window.location.href = vueUrl;
  };

  return (
    <div className="bg-gradient-to-r from-slate-900 via-emerald-950 to-slate-900 text-white text-xs py-2 px-4 border-b border-emerald-900/50 sticky top-0 z-40 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-slate-300">
            Active Framework: <strong className="text-emerald-400 font-semibold">React 19 + Tailwind v4 + React Router</strong>
          </span>
          <span className="hidden md:inline text-slate-500">|</span>
          <span className="hidden md:inline text-slate-400">
            Full Dual Architecture Available (React & Vue.js)
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleSwitchToVue}
            className="group flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 hover:text-emerald-200 border border-emerald-500/40 transition-all text-[11px] font-medium"
            title="Switch to Vue.js 3 Edition on port 5174"
          >
            <span>💚 Switch to Vue.js Edition</span>
            <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}
