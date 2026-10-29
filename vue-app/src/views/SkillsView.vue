<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16 text-left">
    <!-- Header -->
    <div class="max-w-3xl space-y-4">
      <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-xs font-bold border border-emerald-300 dark:border-emerald-700">
        <span>Technical Proficiency</span>
      </div>
      <h1 class="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white font-heading">
        Skills & Technical Matrix
      </h1>
      <p class="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
        Comprehensive overview of technologies, frameworks, backend architectures, and tooling mastered through academic coursework, certifications, and hands-on projects.
      </p>
    </div>

    <!-- Visual Skill Percentage Cards -->
    <div class="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-10 shadow-lg border border-slate-100 dark:border-slate-800 space-y-8 transition-colors">
      <div class="space-y-1">
        <span class="text-xs font-bold uppercase tracking-wider text-[#00c885]">
          Core Proficiency Levels
        </span>
        <h2 class="text-2xl font-bold text-slate-900 dark:text-white font-heading">
          Key Technology Mastery
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          v-for="(skill, idx) in businessData.skills"
          :key="idx"
          class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60 space-y-2"
        >
          <div class="flex justify-between items-center text-xs font-bold text-slate-800 dark:text-slate-200">
            <span class="flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full" :style="{ backgroundColor: skill.color }" />
              {{ skill.name }}
            </span>
            <span class="text-[#00c885] font-black text-sm">{{ skill.percentage }}%</span>
          </div>
          <div class="w-full h-3 bg-slate-200/80 dark:bg-slate-700 rounded-full overflow-hidden">
            <div
              class="h-full rounded-full transition-all duration-1000"
              :style="{ width: `${skill.percentage}%`, backgroundColor: '#00c885' }"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Detailed Skill Groups -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div
        v-for="(grp, i) in skillGroups"
        :key="i"
        class="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-md border border-slate-100 dark:border-slate-800 space-y-5 transition-colors"
      >
        <div class="flex items-center gap-3">
          <div :class="['w-10 h-10 rounded-2xl flex items-center justify-center', grp.color]">
            <component :is="grp.icon" class="w-5 h-5" />
          </div>
          <div>
            <h3 class="text-lg font-bold text-slate-900 dark:text-white font-heading">{{ grp.title }}</h3>
            <span class="text-[11px] text-slate-500 dark:text-slate-400 font-medium">{{ grp.skills.length }} Core Areas</span>
          </div>
        </div>

        <div class="space-y-3.5 pt-2">
          <div
            v-for="(sk, sIdx) in grp.skills"
            :key="sIdx"
            class="border-b border-slate-100 dark:border-slate-800 pb-3 last:border-0 last:pb-0"
          >
            <div class="flex justify-between items-center">
              <span class="font-bold text-xs text-slate-900 dark:text-slate-100">{{ sk.name }}</span>
              <span class="text-[10px] font-semibold text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-md border border-emerald-200 dark:border-emerald-800">
                {{ sk.level }}
              </span>
            </div>
            <p class="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">{{ sk.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Layout, Server, Terminal } from 'lucide-vue-next';
import { businessData } from '../data/businessData';

const skillGroups = [
  {
    title: "Frontend Engineering",
    icon: Layout,
    color: "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800",
    skills: [
      { name: "React.js (v18 & v19)", level: "Advanced", desc: "Hooks, Context API, SPA architecture, State management" },
      { name: "Next.js", level: "Proficient", desc: "App Router, server-rendered pages, metadata, file-based routing" },
      { name: "Vue.js 3", level: "Proficient", desc: "Composition API, reactive refs, Router, component reuse" },
      { name: "JavaScript (ES6+)", level: "Advanced", desc: "Async/await, closures, promises, DOM manipulation, modular JS" },
      { name: "Tailwind CSS v4 & CSS3", level: "Mastery", desc: "Responsive breakpoints, flexbox/grid, animations, custom themes" }
    ]
  },
  {
    title: "Backend & Database",
    icon: Server,
    color: "bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-800",
    skills: [
      { name: "Node.js & Express.js", level: "Advanced", desc: "RESTful endpoints, middleware, routing, server-side logic" },
      { name: "MongoDB & Mongoose", level: "Advanced", desc: "NoSQL schema modeling, aggregation pipelines, validation" },
      { name: "JWT & Security", level: "Proficient", desc: "Bcrypt encryption, token authentication, protected routes" },
      { name: "RESTful API Design", level: "Advanced", desc: "Standard HTTP methods, error handling pipelines, status codes" }
    ]
  },
  {
    title: "Tools & Dev Environment",
    icon: Terminal,
    color: "bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-400 border border-purple-200 dark:border-purple-800",
    skills: [
      { name: "Git & GitHub", level: "Advanced", desc: "Branching workflows, PRs, version history, open-source repositories" },
      { name: "Vite & Modern Tooling", level: "Advanced", desc: "Fast HMR builds, bundle optimization, environment variables" },
      { name: "VS Code & Postman", level: "Advanced", desc: "Debugging, API stress tests, Extensions ecosystem" },
      { name: "Cloud Deployment", level: "Proficient", desc: "Vercel, Render, MongoDB Atlas configuration" }
    ]
  }
];
</script>
