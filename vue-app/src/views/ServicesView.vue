<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-20 text-left">
    <!-- Header -->
    <div class="max-w-3xl space-y-4">
      <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold border border-emerald-300">
        <span>Our Solutions (Vue Edition)</span>
      </div>
      <h1 class="text-4xl sm:text-5xl font-black text-slate-900 font-heading">
        Services We Offer
      </h1>
      <p class="text-base text-slate-600 leading-relaxed">
        From custom MERN web platforms to responsive UI design and corporate training, explore end-to-end digital engineering.
      </p>
    </div>

    <!-- Services Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
        v-for="srv in businessData.services"
        :key="srv.id"
        class="bg-white rounded-3xl p-7 shadow-lg border border-slate-100 hover:border-emerald-300 transition-all flex flex-col justify-between space-y-6"
      >
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <div class="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-lg">
              <Layers v-if="srv.id === 'mern-stack'" class="w-6 h-6" />
              <Code2 v-else-if="srv.id === 'frontend-react-vue'" class="w-6 h-6" />
              <Server v-else-if="srv.id === 'api-backend'" class="w-6 h-6" />
              <Palette v-else-if="srv.id === 'ui-ux-design'" class="w-6 h-6" />
              <Zap v-else-if="srv.id === 'performance-maintenance'" class="w-6 h-6" />
              <GraduationCap v-else class="w-6 h-6" />
            </div>
            <span class="text-[11px] font-bold px-2.5 py-1 rounded-full border" :class="srv.badgeColor">
              {{ srv.badge }}
            </span>
          </div>

          <div>
            <h3 class="text-xl font-bold text-slate-900 font-heading">
              {{ srv.title }}
            </h3>
            <p class="text-xs font-medium text-emerald-700 mt-1">
              {{ srv.tagline }}
            </p>
            <p class="text-xs text-slate-600 mt-2 leading-relaxed">
              {{ srv.description }}
            </p>
          </div>

          <div class="space-y-2 pt-3 border-t border-slate-100">
            <span class="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
              Included Deliverables:
            </span>
            <ul class="space-y-2">
              <li v-for="(feat, i) in srv.features" :key="i" class="text-xs text-slate-700 flex items-start gap-2">
                <CheckCircle2 class="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>{{ feat }}</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="pt-4 border-t border-slate-100 flex items-center justify-between">
          <div>
            <span class="text-[10px] text-slate-400 uppercase font-semibold block">Pricing & Time</span>
            <span class="text-xs font-bold text-slate-900">{{ srv.priceEstimate }}</span>
            <div class="text-[10px] text-slate-500">Timeline: {{ srv.timeline }}</div>
          </div>

          <button
            @click="$emit('open-estimate')"
            class="px-4 py-2 rounded-full bg-emerald-50 hover:bg-[#00c885] text-emerald-700 hover:text-white text-xs font-semibold transition-all cursor-pointer"
          >
            Estimate
          </button>
        </div>
      </div>
    </div>

    <!-- FAQ Section -->
    <div class="max-w-3xl mx-auto space-y-6">
      <div class="text-center space-y-2">
        <span class="text-xs font-bold uppercase tracking-wider text-[#00c885]">
          Got Questions?
        </span>
        <h2 class="text-3xl font-extrabold text-slate-900 font-heading">
          Frequently Asked Questions
        </h2>
      </div>

      <div class="space-y-3">
        <div
          v-for="(faq, idx) in faqs"
          :key="idx"
          class="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs"
        >
          <button
            @click="openFaq = openFaq === idx ? -1 : idx"
            class="w-full p-4 sm:p-5 text-left flex justify-between items-center gap-4 text-sm font-bold text-slate-900 hover:text-emerald-700 transition-colors cursor-pointer"
          >
            <span>{{ faq.q }}</span>
            <ChevronUp v-if="openFaq === idx" class="w-4 h-4 text-emerald-600 shrink-0" />
            <ChevronDown v-else class="w-4 h-4 text-slate-400 shrink-0" />
          </button>

          <div v-if="openFaq === idx" class="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
            {{ faq.a }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { 
  Layers, Code2, Server, Palette, Zap, GraduationCap, 
  CheckCircle2, ChevronDown, ChevronUp 
} from 'lucide-vue-next';
import { businessData } from '../data/businessData';

defineEmits(['open-estimate']);

const openFaq = ref(0);

const faqs = [
  {
    q: "What makes your MERN Stack development service unique?",
    a: "I handle both the React frontend and the Node/Express/MongoDB backend architecture myself. This ensures zero communication gaps, seamless RESTful API contracts, and consistent database schema design with fast execution."
  },
  {
    q: "Do you design websites that are fully responsive on mobile devices?",
    a: "Yes, 100%! All websites are built mobile-first using Tailwind CSS and modern media queries. Your website will adapt smoothly to smartphones, tablets, laptops, and ultra-wide desktops."
  },
  {
    q: "What is your typical project delivery timeline?",
    a: "Standard landing pages and portfolios take 4-7 days. Full stack MERN applications typically take 1-3 weeks depending on scope, database complexity, and feature set."
  }
];
</script>
