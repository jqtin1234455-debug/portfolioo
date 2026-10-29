<template>
  <div class="space-y-20 lg:space-y-28 overflow-hidden pb-16">
    <!-- HERO SECTION -->
    <section class="relative pt-8 sm:pt-14 pb-12 overflow-hidden bg-gradient-to-b from-emerald-50/60 via-slate-50 to-white dark:from-emerald-950/20 dark:via-[#090d16] dark:to-[#090d16] transition-colors duration-300">
      <div class="absolute top-10 right-10 w-96 h-96 bg-emerald-200/30 dark:bg-emerald-600/10 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div class="absolute top-40 left-10 w-80 h-80 bg-purple-200/20 dark:bg-purple-900/10 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <!-- Left Column: Hero Content -->
          <div class="lg:col-span-7 space-y-6 text-left">
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-xs font-bold border border-emerald-300 dark:border-emerald-800">
              <span>Hello, I am a</span>
              <span class="text-base">🚀</span>
              <span class="font-semibold text-emerald-900 dark:text-emerald-200">Full Stack MERN Developer</span>
            </div>

            <div class="space-y-2">
              <h1 class="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 dark:text-white font-heading leading-tight">
                <span class="block text-[#00c885]">Full Stack</span>
                <span class="block text-slate-900 dark:text-white">Web Developer</span>
              </h1>
              <p class="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed pt-2">
                Hi, I'm <strong class="text-slate-900 dark:text-white font-semibold">{{ businessData.name }}</strong>, a passionate Full Stack Developer & MERN Specialist based in <span class="text-emerald-700 dark:text-emerald-400 font-medium">{{ businessData.location }}</span>. I engineer fast, responsive web applications and scalable RESTful APIs.
              </p>
            </div>

            <!-- Action Buttons -->
            <div class="flex flex-wrap items-center gap-3 pt-2">
              <router-link
                to="/about"
                class="px-7 py-3 rounded-full bg-[#00c885] hover:bg-[#00b074] text-white font-bold text-sm shadow-lg shadow-emerald-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                View Profile
              </router-link>

              <router-link
                to="/contact"
                class="px-6 py-3 rounded-full border-2 border-slate-300 dark:border-slate-700 hover:border-emerald-500 dark:hover:border-emerald-500 text-slate-700 dark:text-slate-200 hover:text-emerald-700 dark:hover:text-emerald-400 font-semibold text-sm transition-all bg-white dark:bg-slate-900"
              >
                Contact me
              </router-link>

              <button
                @click="$emit('open-resume')"
                class="px-5 py-3 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-sm transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <Download class="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Download CV</span>
              </button>

              <a
                :href="businessData.linkedin"
                target="_blank"
                rel="noopener noreferrer"
                class="px-5 py-3 rounded-full bg-blue-50 dark:bg-blue-950/40 hover:bg-blue-100 text-[#0077b5] dark:text-blue-400 border border-blue-200 dark:border-blue-800 font-semibold text-sm transition-all flex items-center gap-1.5"
               >
                <BrandIcons name="linkedin" customClass="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </div>

            <!-- Trust Badges -->
            <div class="pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center gap-6 text-xs text-slate-600 dark:text-slate-400 font-medium">
              <div class="flex items-center gap-1.5">
                <CheckCircle class="w-4 h-4 text-emerald-500" />
                <span>MERN Stack Certified (Code IT)</span>
              </div>
              <div class="flex items-center gap-1.5">
                <CheckCircle class="w-4 h-4 text-emerald-500" />
                <span>15+ Web Applications</span>
              </div>
              <div class="flex items-center gap-1.5">
                <CheckCircle class="w-4 h-4 text-emerald-500" />
                <span>100% Cross-Device Responsive</span>
              </div>
            </div>
          </div>

          <!-- Right Column: Hero Visual Card with Actual Photo (Rating Badge Removed) -->
          <div class="lg:col-span-5 relative flex justify-center">
            <div class="relative w-full max-w-md">
              <div class="absolute inset-0 bg-gradient-to-tr from-[#00c885]/20 via-teal-300/30 to-emerald-100 dark:from-emerald-600/10 dark:via-teal-600/10 dark:to-emerald-900/10 rounded-3xl transform rotate-2 scale-102 filter blur-xs" />

              <div class="relative bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-xl border border-emerald-100/80 dark:border-slate-800 overflow-hidden text-center transition-colors">
                <div class="absolute top-4 right-4 bg-emerald-600 text-white text-[11px] font-semibold px-3 py-1.5 rounded-full shadow-md animate-pulse flex items-center gap-1">
                  <span>Hi, I am Jatin!</span>
                  <span>👋</span>
                </div>

                <div class="relative mx-auto w-48 h-48 sm:w-56 sm:h-56 mt-4 mb-6">
                  <div class="absolute inset-0 rounded-full bg-gradient-to-br from-[#00c885] to-teal-600 p-1.5 shadow-xl">
                    <div class="w-full h-full rounded-full bg-white dark:bg-slate-900 overflow-hidden border-4 border-white dark:border-slate-800">
                      <img
                        :src="businessData.avatarUrl"
                        :alt="businessData.name"
                        class="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>

                <h3 class="text-xl font-bold text-slate-900 dark:text-white font-heading">
                  Full Stack MERN Developer
                </h3>
                <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Rajbiraj, Saptari — Nepal
                </p>

                <div class="mt-5 grid grid-cols-2 gap-2 text-left">
                  <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700">
                    <div class="text-[10px] text-slate-500 dark:text-slate-400 font-medium">Core Stack</div>
                    <div class="text-xs font-bold text-slate-900 dark:text-white">React • Node • Mongo</div>
                  </div>
                  <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700">
                    <div class="text-[10px] text-slate-500 dark:text-slate-400 font-medium">Performance</div>
                    <div class="text-xs font-bold text-emerald-600 dark:text-emerald-400">100% Responsive</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- STATS COUNTER BAR -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-100 dark:border-slate-800 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center divide-y lg:divide-y-0 lg:divide-x divide-slate-100 dark:divide-slate-800 transition-colors">
        <div v-for="(st, i) in businessData.stats" :key="i" class="pt-4 lg:pt-0 first:pt-0">
          <div class="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-heading">
            <span class="text-[#00c885]">{{ st.value }}</span>
          </div>
          <div class="text-sm font-bold text-slate-800 dark:text-slate-200 mt-1">{{ st.label }}</div>
          <div class="text-xs text-slate-500 dark:text-slate-400">{{ st.sub }}</div>
        </div>
      </div>
    </section>

    <!-- ABOUT ME HIGHLIGHT SECTION -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="bg-gradient-to-br from-emerald-50/50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-900 dark:to-emerald-950/20 rounded-3xl p-8 sm:p-12 border border-emerald-100 dark:border-slate-800 shadow-md transition-colors">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div class="lg:col-span-5 flex justify-center">
            <div class="relative w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center">
              <div class="absolute inset-0 rounded-full border-4 border-dashed border-[#00c885]/40 animate-spin" style="animation-duration: 30s;" />
              
              <div class="w-44 h-44 sm:w-48 sm:h-48 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-600 p-1.5 shadow-2xl">
                <div class="w-full h-full rounded-full bg-white dark:bg-slate-800 overflow-hidden border-4 border-white dark:border-slate-800">
                  <img
                    :src="businessData.avatarUrl"
                    :alt="businessData.name"
                    class="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              <div class="absolute -top-2 left-2 bg-white dark:bg-slate-800 px-3.5 py-1.5 rounded-full shadow-lg border border-emerald-200 dark:border-emerald-800 text-xs font-bold text-slate-800 dark:text-white badge-float">
                <span class="text-emerald-600 dark:text-emerald-400">15+</span> Projects
              </div>
              <div class="absolute bottom-2 -right-2 bg-white dark:bg-slate-800 px-3.5 py-1.5 rounded-full shadow-lg border border-emerald-200 dark:border-emerald-800 text-xs font-bold text-slate-800 dark:text-white badge-float-delayed">
                <span class="text-emerald-600 dark:text-emerald-400">100%</span> Responsive
              </div>
            </div>
          </div>

          <div class="lg:col-span-7 space-y-5 text-left">
            <div class="text-xs font-bold uppercase tracking-wider text-[#00c885]">
              Who I Am
            </div>
            <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-heading">
              About Me
            </h2>
            <p class="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {{ businessData.summary }}
            </p>
            
            <div class="flex flex-wrap items-center gap-3 pt-3">
              <router-link
                to="/contact"
                class="px-6 py-2.5 rounded-full bg-[#00c885] hover:bg-[#00b074] text-white font-semibold text-sm shadow-md transition-all"
              >
                Contact me
              </router-link>
              <button
                @click="$emit('open-resume')"
                class="px-6 py-2.5 rounded-full border border-slate-300 dark:border-slate-700 hover:border-emerald-500 dark:hover:border-emerald-500 text-slate-700 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 font-semibold text-sm transition-all bg-white dark:bg-slate-800 cursor-pointer"
              >
                Download CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SKILLED SECTION WITH PERCENTAGES -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-100 dark:border-slate-800 transition-colors">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div class="lg:col-span-5 space-y-4 text-left">
            <span class="text-xs font-bold uppercase tracking-wider text-[#00c885]">
              Skilled & Capable
            </span>
            <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-heading">
              Creative Engineering Skills <br />
              <span class="text-slate-500 dark:text-slate-400 font-medium text-2xl sm:text-3xl">Experience on Key Tech</span>
            </h2>
            <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              I specialize in both client-side modern reactive interfaces and reliable server-side microservices. Every application is built with clean standards, cross-device responsiveness, and high speed.
            </p>
            <div class="pt-2">
              <router-link
                to="/projects"
                class="px-6 py-3 rounded-full bg-[#00c885] hover:bg-[#00b074] text-white font-semibold text-sm shadow-md shadow-emerald-500/20 transition-all inline-flex items-center gap-2"
              >
                <span>Explore Featured Projects</span>
                <ArrowRight class="w-4 h-4" />
              </router-link>
            </div>
          </div>

          <div class="lg:col-span-7 space-y-4">
            <div v-for="(skill, idx) in businessData.skills.slice(0, 5)" :key="idx" class="space-y-1.5">
              <div class="flex justify-between items-center text-xs font-bold text-slate-800 dark:text-slate-200">
                <span class="flex items-center gap-2">
                  <span class="w-2 h-2 rounded-full" :style="{ backgroundColor: skill.color }" />
                  {{ skill.name }}
                </span>
                <span class="text-[#00c885] font-extrabold">{{ skill.percentage }}%</span>
              </div>
              <div class="w-full h-2.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <div
                  class="h-full rounded-full transition-all duration-1000 ease-out"
                  :style="{ width: `${skill.percentage}%`, backgroundColor: '#00c885' }"
                />
              </div>
            </div>
            
            <div class="pt-2 text-right">
              <router-link
                to="/skills"
                class="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700"
              >
                <span>View all technical competencies & tools</span>
                <ChevronRight class="w-4 h-4" />
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- EDUCATION & CERTIFICATION SECTION (FROM RESUME - REPLACING SERVICES) -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      <div class="max-w-2xl mx-auto text-center space-y-3">
        <span class="text-xs font-bold uppercase tracking-wider text-[#00c885]">
          Academic & Professional Credentials
        </span>
        <h2 class="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white font-heading">
          Education & Certification
        </h2>
        <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
          Strong academic foundations in computer science and specialized professional MERN stack certification.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
        <!-- Degree 1: BSc. CSIT -->
        <div class="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-md border border-slate-100 dark:border-slate-800 hover:border-emerald-300 dark:hover:border-emerald-700 transition-all flex flex-col justify-between">
          <div class="space-y-3">
            <div class="w-10 h-10 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold">
              <GraduationCap class="w-5 h-5" />
            </div>
            <span class="text-[10px] font-bold uppercase tracking-wider text-indigo-800 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/50 px-2.5 py-0.5 rounded-full border border-indigo-200 dark:border-indigo-800">
              In Progress
            </span>
            <h3 class="text-lg font-bold text-slate-900 dark:text-white font-heading">
              BSc. CSIT
            </h3>
            <p class="text-xs font-semibold text-emerald-700 dark:text-emerald-400">
              Gyandev Technical Academy (RJU)
            </p>
            <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Core coursework in algorithms, computer science, database management systems, and software engineering.
            </p>
          </div>
          <div class="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 text-[11px] font-medium text-slate-500 dark:text-slate-400">
            Bachelor of Science in CS & IT
          </div>
        </div>

        <!-- Degree 2: +2 Science -->
        <div class="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-md border border-slate-100 dark:border-slate-800 hover:border-emerald-300 dark:hover:border-emerald-700 transition-all flex flex-col justify-between">
          <div class="space-y-3">
            <div class="w-10 h-10 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
              <BookOpen class="w-5 h-5" />
            </div>
            <span class="text-[10px] font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/50 px-2.5 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800">
              GPA: 3.10
            </span>
            <h3 class="text-lg font-bold text-slate-900 dark:text-white font-heading">
              ISC (+2 Science)
            </h3>
            <p class="text-xs font-semibold text-emerald-700 dark:text-emerald-400">
              Lali Guraas Sec. Boarding School
            </p>
            <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Strong analytical foundation in physics, advanced mathematics, and computational logic.
            </p>
          </div>
          <div class="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 text-[11px] font-medium text-slate-500 dark:text-slate-400">
            Higher Secondary Education
          </div>
        </div>

        <!-- Degree 3: SEE -->
        <div class="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-md border border-slate-100 dark:border-slate-800 hover:border-emerald-300 dark:hover:border-emerald-700 transition-all flex flex-col justify-between">
          <div class="space-y-3">
            <div class="w-10 h-10 rounded-2xl bg-teal-50 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400 flex items-center justify-center font-bold">
              <BookOpen class="w-5 h-5" />
            </div>
            <span class="text-[10px] font-bold uppercase tracking-wider text-teal-800 dark:text-teal-300 bg-teal-50 dark:bg-teal-950/50 px-2.5 py-0.5 rounded-full border border-teal-200 dark:border-teal-800">
              GPA: 3.20
            </span>
            <h3 class="text-lg font-bold text-slate-900 dark:text-white font-heading">
              SEE Examination
            </h3>
            <p class="text-xs font-semibold text-emerald-700 dark:text-emerald-400">
              S.L.P.S. Ma. Vi., Pathargada
            </p>
            <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Secondary level education with high distinction in science and mathematics.
            </p>
          </div>
          <div class="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 text-[11px] font-medium text-slate-500 dark:text-slate-400">
            Secondary Education Board
          </div>
        </div>

        <!-- Certification Card: Code IT -->
        <div class="bg-gradient-to-br from-emerald-600 to-teal-700 text-white rounded-3xl p-6 shadow-xl border border-emerald-400 flex flex-col justify-between relative overflow-hidden">
          <div class="space-y-3 relative z-10">
            <div class="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
              <Award class="w-5 h-5" />
            </div>
            <span class="text-[10px] font-bold uppercase tracking-wider text-emerald-200 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/20">
              Certified
            </span>
            <h3 class="text-lg font-bold font-heading">
              MERN Full Stack Developer
            </h3>
            <p class="text-xs font-semibold text-emerald-200">
              Issued by Code IT
            </p>
            <p class="text-xs text-emerald-50 leading-relaxed">
              MongoDB, Express.js, React.js, Node.js, RESTful API architecture, JWT authentication, and full-stack cloud deployment.
            </p>
          </div>
          <div class="pt-4 mt-4 border-t border-emerald-500/50 text-[11px] font-medium text-emerald-100 relative z-10">
            Professional Certification
          </div>
        </div>
      </div>
    </section>

    <!-- CTA BANNER (COST CALCULATOR REMOVED) -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="bg-gradient-to-r from-emerald-600 via-teal-700 to-slate-900 text-white rounded-3xl p-8 sm:p-14 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-8 text-center sm:text-left">
        <div class="space-y-3 max-w-xl">
          <span class="text-xs font-bold uppercase tracking-wider text-emerald-300">
            Let's Build Something Exceptional
          </span>
          <h2 class="text-3xl sm:text-4xl font-extrabold font-heading">
            Ready to Build Your Modern Web Project?
          </h2>
          <p class="text-xs sm:text-sm text-emerald-100 leading-relaxed">
            Based in {{ businessData.location }}. Available for full stack freelance development and software consulting.
          </p>
        </div>

        <div class="flex flex-col sm:flex-row items-center gap-3 shrink-0">
          <router-link
            to="/contact"
            class="w-full sm:w-auto px-6 py-3 rounded-full bg-white text-emerald-900 hover:bg-slate-100 font-bold text-sm shadow-lg transition-all text-center"
          >
            Get In Touch
          </router-link>
          <a
            :href="businessData.linkedin"
            target="_blank"
            rel="noopener noreferrer"
            class="w-full sm:w-auto px-6 py-3 rounded-full bg-[#0077b5] hover:bg-[#006097] text-white font-bold text-sm shadow-lg transition-all flex items-center justify-center gap-2"
          >
            <BrandIcons name="linkedin" customClass="w-4 h-4" />
            <span>Connect on LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { 
  ArrowRight, Download, CheckCircle, 
  ChevronRight, GraduationCap, BookOpen, Award 
} from 'lucide-vue-next';
import BrandIcons from '../components/BrandIcons.vue';
import { businessData } from '../data/businessData';

defineEmits(['open-resume']);
</script>
