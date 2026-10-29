<template>
  <footer class="bg-slate-900 dark:bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-800 transition-colors duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pb-12 border-b border-slate-800">
        <!-- Col 1: Brand & Bio with JK Logo -->
        <div class="space-y-4">
          <div class="flex items-center gap-2.5">
            <div class="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#00c885] to-teal-400 flex items-center justify-center text-white shadow-md shadow-emerald-500/20 font-black text-lg tracking-tight font-heading">
              JK
            </div>
            <span class="text-xl font-bold text-white font-heading">
              JK • {{ businessData.name }}
            </span>
          </div>
          <p class="text-xs text-slate-400 leading-relaxed">
            Full Stack Developer specializing in the MERN stack (MongoDB, Express.js, React.js, Node.js). Crafting responsive, scalable, and high-performance web applications.
          </p>
          <div class="flex items-center gap-3 pt-2">
            <a
              v-if="businessData.linkedin"
              :href="businessData.linkedin"
              target="_blank"
              rel="noopener noreferrer"
              class="w-9 h-9 rounded-xl bg-[#0077b5] text-white hover:bg-[#006097] flex items-center justify-center transition-colors shadow-sm"
              title="LinkedIn Profile"
            >
              <BrandIcons name="linkedin" customClass="w-4 h-4" />
            </a>
            <a
              v-if="businessData.github"
              :href="businessData.github"
              target="_blank"
              rel="noopener noreferrer"
              class="w-9 h-9 rounded-xl bg-slate-800 hover:bg-slate-700 hover:text-white flex items-center justify-center text-slate-300 transition-colors"
              title="GitHub Profile"
            >
              <BrandIcons name="github" customClass="w-4 h-4" />
            </a>
          </div>
        </div>

        <!-- Col 2: Education & Certification (From Resume) -->
        <div>
          <h4 class="text-sm font-bold text-white uppercase tracking-wider mb-4 font-heading flex items-center gap-1.5">
            <GraduationCap class="w-4 h-4 text-emerald-400" />
            <span>Education & Certs</span>
          </h4>
          <ul class="space-y-2.5 text-xs">
            <li class="text-slate-400">
              <strong class="text-slate-200 block">BSc. CSIT (In Progress)</strong>
              <span class="text-[11px] text-slate-500">Gyandev Technical Academy, RJU</span>
            </li>
            <li class="text-slate-400">
              <strong class="text-slate-200 block">ISC (+2 Science) • GPA: 3.10</strong>
              <span class="text-[11px] text-slate-500">Lali Guraas Sec. Boarding School</span>
            </li>
            <li class="text-slate-400">
              <strong class="text-slate-200 block">SEE • GPA: 3.20</strong>
              <span class="text-[11px] text-slate-500">S.L.P.S. Ma. Vi., Pathargada</span>
            </li>
            <li class="pt-1 text-slate-400">
              <strong class="text-emerald-400 block flex items-center gap-1">
                <Award class="w-3.5 h-3.5" />
                <span>MERN Certified</span>
              </strong>
              <span class="text-[11px] text-slate-500">Code IT Institute</span>
            </li>
          </ul>
        </div>

        <!-- Col 3: Navigation -->
        <div>
          <h4 class="text-sm font-bold text-white uppercase tracking-wider mb-4 font-heading">
            Page Navigation
          </h4>
          <ul class="space-y-2 text-xs">
            <li><router-link to="/" class="text-slate-400 hover:text-emerald-400 transition-colors">Home (Overview & Education)</router-link></li>
            <li><router-link to="/about" class="text-slate-400 hover:text-emerald-400 transition-colors">About Me & Bio</router-link></li>
            <li><router-link to="/projects" class="text-slate-400 hover:text-emerald-400 transition-colors">Projects & Portfolio</router-link></li>
            <li><router-link to="/skills" class="text-slate-400 hover:text-emerald-400 transition-colors">Skills & Technical Matrix</router-link></li>
            <li><router-link to="/contact" class="text-slate-400 hover:text-emerald-400 transition-colors">Contact & Location</router-link></li>
          </ul>
        </div>

      </div>

      <!-- Bottom -->
      <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <div>
          © {{ new Date().getFullYear() }} {{ businessData.name }} (JK Dev). All rights reserved.
        </div>
        <div class="flex items-center gap-4">
          <span class="text-emerald-400 font-medium">Vue 3 Edition</span>
          <span>•</span>
          <button @click="scrollToTop" class="hover:text-slate-300 flex items-center gap-1 transition-colors cursor-pointer">
            <span>Back to Top</span>
            <ArrowUp class="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ArrowUp, GraduationCap, Award } from 'lucide-vue-next';
import BrandIcons from './BrandIcons.vue';
import { businessData } from '../data/businessData';

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>
