<template>
  <div class="min-h-screen flex flex-col bg-slate-50 dark:bg-[#090d16] text-slate-800 dark:text-slate-100 font-sans selection:bg-[#00c885] selection:text-white transition-colors duration-300">
    <!-- Navigation -->
    <Navbar
      :darkMode="darkMode"
      @toggle-theme="toggleTheme"
      @open-resume="isResumeOpen = true"
    />

    <!-- Main Routed Content -->
    <main class="flex-grow">
      <router-view
        @open-resume="isResumeOpen = true"
      />
    </main>

    <!-- Footer -->
    <Footer />

    <!-- Resume Modal -->
    <ResumeModal
      :isOpen="isResumeOpen"
      @close="isResumeOpen = false"
    />
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import ResumeModal from './views/ResumeModal.vue';

const isResumeOpen = ref(false);

const getInitialTheme = () => {
  if (typeof window === 'undefined') return false;
  const saved = localStorage.getItem('theme');
  if (saved) return saved === 'dark';
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
};

const darkMode = ref(getInitialTheme());

const toggleTheme = () => {
  darkMode.value = !darkMode.value;
};

watch(darkMode, (isDark) => {
  if (typeof document === 'undefined') return;
  if (isDark) {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
}, { immediate: true });
</script>
