<template>
  <header class="sticky top-0 z-30 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-100 dark:border-slate-800 shadow-xs transition-colors duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
      <!-- Brand Logo with JK Emblem -->
      <router-link to="/" class="flex items-center gap-2.5 group">
        <div class="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#00c885] to-teal-400 flex items-center justify-center text-white shadow-md shadow-emerald-500/25 group-hover:scale-105 transition-transform font-black text-lg tracking-tight font-heading">
          JK
        </div>
        <div>
          <div class="text-xl font-black tracking-tight text-slate-900 dark:text-white font-heading flex items-center gap-1">
            <span>JK</span>
            <span class="text-[#00c885]"></span>
          </div>
          <div class="text-[10px] uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold -mt-1">
            Full Stack • MERN
          </div>
        </div>
      </router-link>

      <!-- Desktop Nav -->
      <nav class="hidden lg:flex items-center gap-8">
        <router-link
          v-for="link in navLinks"
          :key="link.name"
          :to="link.path"
          class="text-sm font-medium transition-all relative py-1"
          :class="isLinkActive(link.path) ? 'text-[#00c885] font-semibold' : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'"
        >
          {{ link.name }}
          <span
            v-if="isLinkActive(link.path)"
            class="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00c885] rounded-full"
          />
        </router-link>
      </nav>

      <!-- Desktop Actions -->
      <div class="hidden sm:flex items-center gap-3">
        <!-- Theme Toggle Button -->
        <button
          @click="$emit('toggle-theme')"
          class="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-amber-400 hover:border-emerald-500 dark:hover:border-emerald-500 flex items-center justify-center transition-all cursor-pointer"
          :title="darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'"
          aria-label="Toggle Theme"
        >
          <Sun v-if="darkMode" class="w-4 h-4 text-amber-400 animate-spin-slow" />
          <Moon v-else class="w-4 h-4 text-slate-700" />
        </button>

        <!-- Resume Button -->
        <button
          @click="$emit('open-resume')"
          class="hidden xl:flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-slate-200 dark:border-slate-700 hover:border-emerald-500 dark:hover:border-emerald-500 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all bg-slate-50/50 dark:bg-slate-800/50 cursor-pointer"
        >
          <FileText class="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
          <span>Resume</span>
        </button>

        <!-- LinkedIn Account Button -->
        <a
          :href="businessData.linkedin"
          target="_blank"
          rel="noopener noreferrer"
          class="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-950/50 hover:bg-[#0077b5] hover:text-white dark:hover:bg-[#0077b5] border border-blue-200 dark:border-blue-800 text-[#0077b5] dark:text-blue-400 flex items-center justify-center transition-all shadow-xs"
          title="Connect on LinkedIn"
        >
          <BrandIcons name="linkedin" customClass="w-4 h-4" />
        </a>

        <!-- Contact CTA -->
        <router-link
          to="/contact"
          class="px-6 py-2.5 rounded-full bg-[#00c885] hover:bg-[#00b074] text-white font-semibold text-sm shadow-md shadow-emerald-500/25 transition-all transform active:scale-95"
        >
          Contact me
        </router-link>
      </div>

      <!-- Mobile Buttons -->
      <div class="flex sm:hidden items-center gap-2">
        <button
          @click="$emit('toggle-theme')"
          class="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-amber-400 border border-slate-200 dark:border-slate-700"
          aria-label="Toggle Theme"
        >
          <Sun v-if="darkMode" class="w-4 h-4 text-amber-400" />
          <Moon v-else class="w-4 h-4 text-slate-700" />
        </button>

        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors"
          aria-label="Open Navigation Menu"
        >
          <X v-if="mobileMenuOpen" class="w-6 h-6" />
          <Menu v-else class="w-6 h-6" />
        </button>
      </div>
    </div>

    <!-- Mobile Drawer -->
    <div
      v-if="mobileMenuOpen"
      class="lg:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-6 py-5 shadow-xl space-y-4"
    >
      <nav class="flex flex-col space-y-3">
        <router-link
          v-for="link in navLinks"
          :key="link.name"
          :to="link.path"
          @click="mobileMenuOpen = false"
          class="text-base py-2 px-3 rounded-xl transition-all"
          :class="isLinkActive(link.path) ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 font-bold' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'"
        >
          {{ link.name }}
        </router-link>
      </nav>

      <div class="pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2.5">
        <button
          @click="mobileMenuOpen = false; $emit('open-resume')"
          class="w-full py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-semibold text-sm flex items-center justify-center gap-2 cursor-pointer bg-slate-50 dark:bg-slate-800"
        >
          <FileText class="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          <span>View Resume</span>
        </button>
        <a
          :href="businessData.linkedin"
          target="_blank"
          rel="noopener noreferrer"
          class="w-full py-2.5 rounded-xl bg-[#0077b5] hover:bg-[#006097] text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-sm"
        >
          <BrandIcons name="linkedin" customClass="w-4 h-4" />
          <span>Connect on LinkedIn</span>
        </a>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { FileText, Menu, X, Sun, Moon } from 'lucide-vue-next';
import BrandIcons from './BrandIcons.vue';
import { businessData } from '../data/businessData';

defineProps({
  darkMode: {
    type: Boolean,
    default: false
  }
});

defineEmits(['toggle-theme', 'open-resume']);

const route = useRoute();
const mobileMenuOpen = ref(false);

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About me', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Skills', path: '/skills' },
  { name: 'Contact', path: '/contact' }
];

const isLinkActive = (path) => {
  if (path === '/' && route.path !== '/') return false;
  return route.path.startsWith(path);
};
</script>
