<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16 text-left">
    <!-- Page Header -->
    <div class="max-w-3xl space-y-4">
      <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-xs font-bold border border-emerald-300 dark:border-emerald-800">
        <span>About Jatin Yadav</span>
      </div>
      <h1 class="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white font-heading">
        Full Stack Developer (MERN Stack)
      </h1>
      <p class="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
        Based in <strong class="text-slate-800 dark:text-slate-200">{{ businessData.location }}</strong>. Combining strong analytical problem-solving with hands-on MERN stack architecture and modern frontend engineering.
      </p>
    </div>

    <!-- Summary & Contact with Photo -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      <div class="lg:col-span-8 bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-10 shadow-lg border border-slate-100 dark:border-slate-800 space-y-6 transition-colors">
        <div class="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div class="w-28 h-28 sm:w-32 sm:h-32 rounded-3xl overflow-hidden shadow-lg border-2 border-emerald-300 dark:border-emerald-600 shrink-0">
            <img
              :src="businessData.avatarUrl"
              :alt="businessData.name"
              class="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div class="space-y-1">
            <h2 class="text-2xl font-bold text-slate-900 dark:text-white font-heading">
              {{ businessData.name }}
            </h2>
            <p class="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
              {{ businessData.title }}
            </p>
            <p class="text-xs text-slate-500 dark:text-slate-400">
              {{ businessData.location }}
            </p>
          </div>
        </div>

        <p class="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          {{ businessData.summary }}
        </p>
        <p class="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          I specialize in building full-stack applications with MongoDB, Express.js, React.js, and Node.js. My focus is writing clean, scalable code with responsive layouts, bulletproof API endpoints, and delightful user experiences.
        </p>

        <div class="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-4">
          <button
            @click="$emit('open-resume')"
            class="px-6 py-3 rounded-full bg-[#00c885] hover:bg-[#00b074] text-white font-semibold text-sm shadow-md transition-all flex items-center gap-2 cursor-pointer"
          >
            <Download class="w-4 h-4" />
            <span>Download & Print Resume</span>
          </button>
        </div>
      </div>

      <div class="lg:col-span-4 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-slate-900 dark:to-emerald-950/40 rounded-3xl p-6 sm:p-8 border border-emerald-200/80 dark:border-slate-800 space-y-4 transition-colors">
        <h3 class="text-lg font-bold text-slate-900 dark:text-white font-heading">
          Profile Snapshot
        </h3>
        <div class="space-y-3 text-xs text-slate-700 dark:text-slate-300">
          <div class="flex items-start gap-2.5">
            <MapPin class="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <strong class="block text-slate-900 dark:text-slate-100">Location:</strong>
              <span>{{ businessData.location }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Education & Certification Section -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-md border border-slate-100 dark:border-slate-800 space-y-6 transition-colors">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-2xl bg-indigo-100 dark:bg-indigo-950/60 text-indigo-800 dark:text-indigo-400 flex items-center justify-center">
            <GraduationCap class="w-5 h-5" />
          </div>
          <div>
            <h3 class="text-xl font-bold text-slate-900 dark:text-white font-heading">Education History</h3>
            <p class="text-xs text-slate-500 dark:text-slate-400">Academic qualifications & coursework</p>
          </div>
        </div>

        <div class="space-y-4">
          <div v-for="(edu, idx) in businessData.education" :key="idx" class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 space-y-1">
            <div class="flex justify-between items-start">
              <span class="font-bold text-sm text-slate-900 dark:text-white">{{ edu.degree }}</span>
              <span class="text-[11px] font-semibold text-slate-500 dark:text-slate-400">{{ edu.period }}</span>
            </div>
            <div class="text-xs font-medium text-emerald-700 dark:text-emerald-400">{{ edu.institution }}</div>
            <div v-if="edu.score" class="text-xs font-bold text-indigo-700 dark:text-indigo-400 pt-0.5">
              Academic Result: {{ edu.score }}
            </div>
            <p class="text-xs text-slate-500 dark:text-slate-400 pt-1 leading-relaxed">{{ edu.description }}</p>
          </div>
        </div>
      </div>

      <div class="space-y-6">
        <div class="bg-gradient-to-br from-emerald-600 to-teal-700 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-4">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
              <Award class="w-5 h-5" />
            </div>
            <div>
              <span class="text-xs text-emerald-200 uppercase font-bold tracking-wider">
                Professional Certification
              </span>
              <h3 class="text-xl font-bold font-heading">{{ businessData.certification.title }}</h3>
            </div>
          </div>
          <div class="text-xs font-bold text-emerald-100">
            Issued by: {{ businessData.certification.issuer }}
          </div>
          <p class="text-xs text-emerald-50 leading-relaxed">
            {{ businessData.certification.description }}
          </p>
        </div>

        <div class="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-md border border-slate-100 dark:border-slate-800 space-y-4 transition-colors">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-2xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-400 flex items-center justify-center">
              <UserCheck class="w-5 h-5" />
            </div>
            <div>
              <h3 class="text-lg font-bold text-slate-900 dark:text-white font-heading">Soft Skills</h3>
              <p class="text-xs text-slate-500 dark:text-slate-400">Core personal & workplace competencies</p>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-2.5">
            <div v-for="(sk, idx) in businessData.softSkills" :key="idx" class="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl text-xs font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-[#00c885]" />
              <span>{{ sk }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { GraduationCap, Award, Download, MapPin, Phone, Mail, UserCheck } from 'lucide-vue-next';
import BrandIcons from '../components/BrandIcons.vue';
import { businessData } from '../data/businessData';

defineEmits(['open-resume']);
</script>
