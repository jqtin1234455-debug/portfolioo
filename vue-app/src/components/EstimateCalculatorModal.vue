<template>
  <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
    <div class="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden max-h-[92vh] flex flex-col">
      <!-- Header -->
      <div class="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 p-6 text-white flex items-center justify-between">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center">
            <Calculator class="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 class="text-xl font-bold font-heading">Interactive Project Cost Estimator</h3>
            <p class="text-xs text-emerald-100">Vue 3 Reactive pricing & instant timeline for your business</p>
          </div>
        </div>
        <button 
          @click="$emit('close')"
          class="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
        >
          <X class="w-5 h-5" />
        </button>
      </div>

      <!-- Content -->
      <div class="p-6 overflow-y-auto space-y-6 text-left">
        <!-- 1. Project Type -->
        <div>
          <label class="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
            1. Select Project Type
          </label>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <button
              v-for="(val, key) in baseRates"
              :key="key"
              type="button"
              @click="projectType = key"
              class="text-left p-3 rounded-xl border text-sm transition-all cursor-pointer"
              :class="projectType === key ? 'border-emerald-500 bg-emerald-50 text-emerald-950 ring-2 ring-emerald-500/20 font-medium' : 'border-slate-200 text-slate-700 bg-slate-50/50 hover:border-slate-300'"
            >
              <div class="font-semibold">{{ val.name }}</div>
              <div class="text-xs text-slate-500 mt-0.5">Base from NPR {{ val.base.toLocaleString() }}</div>
            </button>
          </div>
        </div>

        <!-- 2. Pages -->
        <div>
          <div class="flex justify-between items-center mb-2">
            <label class="text-xs font-semibold uppercase tracking-wider text-slate-500">
              2. Scope / Number of Pages ({{ pages }} {{ pages === 1 ? 'Page' : 'Pages' }})
            </label>
            <span class="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
              {{ pages <= 3 ? 'Compact' : pages <= 7 ? 'Standard Business' : 'Extensive System' }}
            </span>
          </div>
          <input
            type="range"
            min="1"
            max="15"
            v-model.number="pages"
            class="w-full accent-emerald-500 cursor-pointer"
          />
          <div class="flex justify-between text-[11px] text-slate-400 mt-1">
            <span>1 Page (Single Page App)</span>
            <span>5 Pages (Standard)</span>
            <span>15+ Pages (Complex Portal)</span>
          </div>
        </div>

        <!-- 3. Features -->
        <div>
          <label class="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
            3. Desired Features & Enhancements
          </label>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <button
              v-for="feat in featureOptions"
              :key="feat.id"
              type="button"
              @click="toggleFeature(feat.id)"
              class="flex items-center gap-2.5 p-2.5 rounded-xl border text-xs text-left transition-all cursor-pointer"
              :class="features.includes(feat.id) ? 'border-emerald-500 bg-emerald-50/80 text-emerald-900 font-medium' : 'border-slate-200 text-slate-600 hover:border-slate-300'"
            >
              <div
                class="w-4 h-4 rounded flex items-center justify-center shrink-0"
                :class="features.includes(feat.id) ? 'bg-emerald-500 text-white' : 'border border-slate-300'"
              >
                <Check v-if="features.includes(feat.id)" class="w-3 h-3" />
              </div>
              <span>{{ feat.label }}</span>
            </button>
          </div>
        </div>

        <!-- 4. Delivery Speed -->
        <div>
          <label class="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
            4. Delivery Timeline
          </label>
          <div class="grid grid-cols-2 gap-3">
            <button
              type="button"
              @click="timelineSpeed = 'standard'"
              class="p-3 rounded-xl border text-center text-xs transition-all cursor-pointer"
              :class="timelineSpeed === 'standard' ? 'border-emerald-500 bg-emerald-50 text-emerald-900 font-semibold' : 'border-slate-200 text-slate-600 hover:bg-slate-50'"
            >
              Standard (~{{ totalDays }} Days)
            </button>
            <button
              type="button"
              @click="timelineSpeed = 'rush'"
              class="p-3 rounded-xl border text-center text-xs transition-all cursor-pointer"
              :class="timelineSpeed === 'rush' ? 'border-emerald-500 bg-emerald-50 text-emerald-900 font-semibold' : 'border-slate-200 text-slate-600 hover:bg-slate-50'"
            >
              ⚡ Priority Rush (~{{ Math.max(2, Math.round(totalDays * 0.7)) }} Days)
            </button>
          </div>
        </div>

        <!-- Output Box -->
        <div class="p-4 rounded-2xl bg-gradient-to-br from-emerald-50 via-teal-50 to-slate-50 border border-emerald-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div class="text-xs text-emerald-800 font-medium flex items-center gap-1.5">
              <Sparkles class="w-3.5 h-3.5 text-emerald-600" />
              Estimated Investment:
            </div>
            <div class="text-2xl font-black text-emerald-900 font-heading">
              NPR {{ totalNPR.toLocaleString() }}
              <span class="text-sm font-normal text-slate-600 ml-2">
                (~${{ totalUSD }} USD)
              </span>
            </div>
            <div class="text-xs text-slate-500 mt-0.5">
              Expected turnaround: ~{{ totalDays }} business days
            </div>
          </div>

          <button
            @click="handleSendWhatsApp"
            class="w-full sm:w-auto px-5 py-3 rounded-full bg-[#00c885] hover:bg-[#00b074] text-white font-semibold text-sm shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2 transition-all transform active:scale-95 cursor-pointer"
          >
            <MessageSquare class="w-4 h-4 fill-white" />
            <span>Lock Quote on WhatsApp</span>
            <ArrowRight class="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { X, Calculator, Check, ArrowRight, MessageSquare, Sparkles } from 'lucide-vue-next';
import confetti from 'canvas-confetti';

defineProps({
  isOpen: Boolean
});

defineEmits(['close']);

const projectType = ref('mern');
const pages = ref(5);
const features = ref(['auth', 'responsive', 'seo']);
const timelineSpeed = ref('standard');

const baseRates = {
  landing: { name: 'Landing Page / Portfolio', base: 12000, days: 5 },
  mern: { name: 'MERN Full Stack Web App', base: 28000, days: 14 },
  frontend: { name: 'Custom React / Vue Frontend', base: 18000, days: 8 },
  backend: { name: 'Node.js & MongoDB API', base: 20000, days: 10 },
  training: { name: 'IT Mentorship / Training', base: 15000, days: 7 }
};

const featureOptions = [
  { id: 'auth', label: 'User Authentication (JWT / Sessions)', cost: 4000, days: 2 },
  { id: 'admin', label: 'Admin Dashboard & Analytics', cost: 6000, days: 3 },
  { id: 'payment', label: 'Payment Integration / WhatsApp Order', cost: 5000, days: 2 },
  { id: 'responsive', label: '100% Mobile & Tablet Optimization', cost: 3000, days: 1 },
  { id: 'seo', label: 'SEO, Speed Audit & Fast CDN', cost: 3500, days: 1 },
  { id: 'database', label: 'Custom MongoDB Schema Architecture', cost: 4500, days: 2 }
];

const toggleFeature = (id) => {
  if (features.value.includes(id)) {
    features.value = features.value.filter(f => f !== id);
  } else {
    features.value.push(id);
  }
};

const currentBase = computed(() => baseRates[projectType.value] || baseRates.mern);
const pageCost = computed(() => (pages.value - 1) * 1200);
const featuresCost = computed(() => {
  return features.value.reduce((sum, fid) => {
    const f = featureOptions.find(item => item.id === fid);
    return sum + (f ? f.cost : 0);
  }, 0);
});

const speedMultiplier = computed(() => timelineSpeed.value === 'rush' ? 1.25 : 1);

const totalNPR = computed(() => {
  return Math.round((currentBase.value.base + pageCost.value + featuresCost.value) * speedMultiplier.value);
});

const totalUSD = computed(() => Math.round(totalNPR.value / 135));

const totalDays = computed(() => {
  const raw = currentBase.value.days + Math.round(pages.value * 0.5) + features.value.length;
  return Math.max(3, Math.round(raw * (timelineSpeed.value === 'rush' ? 0.7 : 1)));
});

const handleSendWhatsApp = () => {
  confetti({
    particleCount: 80,
    spread: 60,
    origin: { y: 0.6 }
  });

  const selectedFeatureNames = features.value
    .map(fid => featureOptions.find(f => f.id === fid)?.label)
    .filter(Boolean)
    .join(', ');

  const message = `Hello Jatin! I used your Interactive Website Cost Estimator (Vue Edition):%0A%0A` +
    `*Project Type:* ${currentBase.value.name}%0A` +
    `*Estimated Pages/Screens:* ${pages.value}%0A` +
    `*Selected Features:* ${selectedFeatureNames || 'Standard'}%0A` +
    `*Delivery Preference:* ${timelineSpeed.value === 'rush' ? 'Express Rush' : 'Standard Delivery'}%0A` +
    `*Estimated Budget:* NPR ${totalNPR.value.toLocaleString()} (~$${totalUSD.value} USD)%0A` +
    `*Estimated Timeline:* ~${totalDays.value} days%0A%0A` +
    `I'd like to discuss and kick off this project with you!`;

  window.open(`https://wa.me/9779826775787?text=${message}`, '_blank');
};
</script>
