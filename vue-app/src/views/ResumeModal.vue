<template>
  <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
    <div class="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[92vh] flex flex-col">
      <!-- Top Bar -->
      <div class="bg-slate-900 text-white p-4 sm:px-6 flex items-center justify-between">
        <div class="flex items-center gap-2">
          <Award class="w-5 h-5 text-emerald-400" />
          <span class="font-bold text-sm tracking-wide">Jatin Yadav — Full Stack Developer Resume</span>
        </div>
        <div class="flex items-center gap-2">
          <button
            @click="handlePrint"
            class="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-white flex items-center gap-1.5 transition-colors cursor-pointer"
            title="Print Resume"
          >
            <Printer class="w-3.5 h-3.5" />
            <span class="hidden sm:inline">Print / Save PDF</span>
          </button>
          <button
            @click="$emit('close')"
            class="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-300 hover:text-white cursor-pointer"
          >
            <X class="w-4 h-4" />
          </button>
        </div>
      </div>

      <!-- Resume Content -->
      <div class="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-800 text-left">
        <!-- Header with Photo -->
        <div class="border-b border-slate-200 pb-5">
          <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div class="flex items-center gap-4">
              <div class="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-emerald-500 shadow-md shrink-0">
                <img
                  :src="businessData.avatarUrl"
                  :alt="businessData.name"
                  class="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <h1 class="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
                  {{ businessData.name }}
                </h1>
                <p class="text-emerald-600 font-semibold text-base mt-0.5">
                  {{ businessData.title }}
                </p>
              </div>
            </div>

            <div class="text-xs text-slate-600 space-y-1 sm:text-right">
              <div class="flex items-center sm:justify-end gap-1.5">
                <MapPin class="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>{{ businessData.location }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Summary -->
        <div>
          <h2 class="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-2">
            Professional Summary
          </h2>
          <p class="text-xs sm:text-sm text-slate-600 leading-relaxed bg-slate-50 p-3.5 rounded-xl border border-slate-100">
            {{ businessData.summary }}
          </p>
        </div>

        <!-- Technical Skills -->
        <div>
          <h2 class="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-2 flex items-center gap-1.5">
            <Code2 class="w-4 h-4" /> Technical Skills
          </h2>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
            <div class="p-3 bg-slate-50 rounded-xl border border-slate-100">
              <span class="font-semibold text-slate-900 block mb-1">Languages & Frontend</span>
              <span class="text-slate-600">HTML5, CSS3, JavaScript (ES6+), React.js, Vue.js, Tailwind CSS</span>
            </div>
            <div class="p-3 bg-slate-50 rounded-xl border border-slate-100">
              <span class="font-semibold text-slate-900 block mb-1">Backend & Database</span>
              <span class="text-slate-600">Node.js, Express.js, MongoDB, RESTful APIs, JWT</span>
            </div>
            <div class="p-3 bg-slate-50 rounded-xl border border-slate-100">
              <span class="font-semibold text-slate-900 block mb-1">Tools & Platforms</span>
              <span class="text-slate-600">Git, GitHub, Microsoft Excel, VS Code, Postman</span>
            </div>
          </div>
        </div>

        <!-- Key Projects -->
        <div>
          <h2 class="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-2 flex items-center gap-1.5">
            Key Projects
          </h2>
          <div class="space-y-3">
            <div v-for="prj in businessData.projects" :key="prj.id" class="p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs">
              <div class="flex justify-between items-center">
                <span class="font-bold text-slate-900 text-sm">{{ prj.title }}</span>
                <span class="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                  {{ prj.tech.slice(0, 3).join(' • ') }}
                </span>
              </div>
              <p class="text-slate-600 mt-1">{{ prj.description }}</p>
            </div>
          </div>
        </div>

        <!-- Education & Certification -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <h2 class="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-2 flex items-center gap-1.5">
              <GraduationCap class="w-4 h-4" /> Education
            </h2>
            <div class="space-y-2 text-xs">
              <div v-for="(edu, idx) in businessData.education" :key="idx" class="p-2.5 bg-slate-50 rounded-xl border border-slate-100">
                <div class="font-semibold text-slate-900">{{ edu.degree }}</div>
                <div class="text-slate-500 text-[11px]">{{ edu.institution }}</div>
                <div v-if="edu.score" class="text-emerald-700 font-medium text-[11px]">{{ edu.score }}</div>
              </div>
            </div>
          </div>
          <div>
            <h2 class="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-2 flex items-center gap-1.5">
              <Award class="w-4 h-4" /> Certification & Languages
            </h2>
            <div class="p-3 bg-emerald-50/60 rounded-xl border border-emerald-200 text-xs mb-3">
              <div class="font-bold text-emerald-950">{{ businessData.certification.title }}</div>
              <div class="text-emerald-700 text-[11px] font-semibold">{{ businessData.certification.issuer }}</div>
              <p class="text-slate-600 text-[11px] mt-1">{{ businessData.certification.description }}</p>
            </div>
            <div class="p-2.5 bg-slate-50 rounded-xl border border-slate-100 text-xs">
              <span class="font-semibold text-slate-900 block mb-1">Languages:</span>
              <span class="text-slate-600">English, Nepali, Hindi</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { X, Printer, Award, GraduationCap, Code2, Phone, Mail, MapPin } from 'lucide-vue-next';
import { businessData } from '../data/businessData';

defineProps({
  isOpen: Boolean
});

defineEmits(['close']);

const handlePrint = () => {
  window.print();
};
</script>
