<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12 text-left">
    <!-- Page Header -->
    <div class="max-w-3xl space-y-4">
      <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-xs font-bold border border-emerald-300 dark:border-emerald-800">
        <span>Portfolio & Showcase</span>
      </div>
      <h1 class="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white font-heading">
        Featured Engineering Projects
      </h1>
      <p class="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
        Explore complete full stack MERN architectures, responsive UI websites, and robust REST APIs created by Jatin Yadav.
      </p>
    </div>

    <!-- Filter Tabs -->
    <div class="flex flex-wrap items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-4">
      <button
        v-for="tab in filterTabs"
        :key="tab.id"
        @click="activeFilter = tab.id"
        class="px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer"
        :class="activeFilter === tab.id ? 'bg-[#00c885] text-white shadow-md shadow-emerald-500/25' : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700'"
      >
        {{ tab.label }}
      </button>
    </div>

    <div v-if="filteredProjects.length === 0" class="rounded-3xl border border-dashed border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/60 p-8 text-center text-sm text-slate-600 dark:text-slate-300">
      No projects available in this category yet.
    </div>

    <!-- Projects Grid -->
    <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div
        v-for="prj in filteredProjects"
        :key="prj.id"
        class="bg-white dark:bg-slate-900 rounded-3xl p-7 shadow-lg border border-slate-100 dark:border-slate-800 hover:border-emerald-300 dark:hover:border-emerald-700 transition-all flex flex-col justify-between space-y-6"
      >
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <span class="text-[10px] font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 px-3 py-1 rounded-full">
              {{ prj.category === 'fullstack' ? 'MERN Stack' : prj.category.toUpperCase() }}
            </span>
            <a
              :href="prj.github"
              target="_blank"
              rel="noopener noreferrer"
              class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-900 dark:hover:bg-slate-700 hover:text-white text-slate-600 dark:text-slate-300 flex items-center justify-center transition-colors"
              title="View GitHub Repository"
            >
              <BrandIcons name="github" customClass="w-4 h-4" />
            </a>
          </div>

          <div>
            <h3 class="text-xl font-bold text-slate-900 dark:text-white font-heading">
              {{ prj.title }}
            </h3>
            <p class="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
              {{ prj.description }}
            </p>
          </div>

          <!-- Highlights -->
          <div class="space-y-1.5 pt-2 border-t border-slate-100 dark:border-slate-800">
            <span class="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
              Key Technical Features:
            </span>
            <ul class="space-y-1.5">
              <li v-for="(h, i) in prj.highlights" :key="i" class="text-xs text-slate-700 dark:text-slate-300 flex items-start gap-2">
                <CheckCircle2 class="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <span>{{ h }}</span>
              </li>
            </ul>
          </div>

          <!-- Tech Stack -->
          <div class="flex flex-wrap gap-1.5 pt-3">
            <span
              v-for="(t, idx) in prj.tech"
              :key="idx"
              class="text-[11px] font-medium text-emerald-900 dark:text-emerald-300 bg-emerald-50/80 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-800/60 px-2.5 py-1 rounded-lg"
            >
              {{ t }}
            </span>
          </div>
        </div>

        <div class="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <span class="text-xs font-semibold text-emerald-700 dark:text-emerald-400">
            {{ prj.metrics }}
          </span>
          <button
            @click="selectedProject = prj"
            class="px-4 py-2 rounded-full bg-slate-900 dark:bg-slate-800 hover:bg-[#00c885] dark:hover:bg-[#00c885] text-white text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <span>View Details</span>
            <ArrowRight class="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>

    <!-- Project Detail Modal -->
    <div
      v-if="selectedProject"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
    >
      <div class="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-800 overflow-hidden max-h-[90vh] flex flex-col text-left">
        <div class="bg-gradient-to-r from-slate-900 to-emerald-950 p-6 text-white flex items-center justify-between">
          <div>
            <span class="text-xs text-emerald-400 font-bold uppercase tracking-wider">
              Project Deep Dive
            </span>
            <h3 class="text-xl font-bold font-heading">{{ selectedProject.title }}</h3>
          </div>
          <button
            @click="selectedProject = null"
            class="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white cursor-pointer"
          >
            <X class="w-4 h-4" />
          </button>
        </div>

        <div class="p-6 overflow-y-auto space-y-5 text-slate-800 dark:text-slate-200">
          <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {{ selectedProject.description }}
          </p>

          <div>
            <h4 class="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
              System Architecture & Stack:
            </h4>
            <div class="flex flex-wrap gap-2">
              <span v-for="(t, i) in selectedProject.tech" :key="i" class="text-xs font-bold text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700">
                {{ t }}
              </span>
            </div>
          </div>

          <div>
            <h4 class="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
              Key Accomplishments:
            </h4>
            <ul class="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              <li v-for="(h, i) in selectedProject.highlights" :key="i" class="flex items-start gap-2">
                <CheckCircle2 class="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <span>{{ h }}</span>
              </li>
            </ul>
          </div>

          <div class="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 text-xs text-emerald-950 dark:text-emerald-200 flex items-center justify-between">
            <div>
              <span class="font-bold block">Verified Performance:</span>
              <span>{{ selectedProject.metrics }}</span>
            </div>
            <a
              :href="selectedProject.github"
              target="_blank"
              rel="noopener noreferrer"
              class="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold transition-colors flex items-center gap-1.5"
            >
              <BrandIcons name="github" customClass="w-3.5 h-3.5" />
              <span>GitHub Code</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { ArrowRight, CheckCircle2, X } from 'lucide-vue-next';
import BrandIcons from '../components/BrandIcons.vue';
import { businessData } from '../data/businessData';

const activeFilter = ref('all');
const selectedProject = ref(null);

const categoryLabels = {
  all: 'All Projects',
  fullstack: 'MERN Full Stack',
  frontend: 'Frontend & UI/UX',
  backend: 'Backend APIs'
};

const filterTabs = computed(() => {
  const availableCategories = new Set(businessData.projects.map(project => project.category));
  const tabs = [{ id: 'all', label: categoryLabels.all }];

  ['fullstack', 'frontend', 'backend'].forEach(category => {
    if (availableCategories.has(category)) {
      tabs.push({ id: category, label: categoryLabels[category] });
    }
  });

  return tabs;
});

const filteredProjects = computed(() => {
  if (activeFilter.value === 'all') return businessData.projects;
  return businessData.projects.filter(project => project.category === activeFilter.value);
});
</script>
