<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16 text-left">
    <!-- Header -->
    <div class="max-w-3xl space-y-4">
      <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-xs font-bold border border-emerald-300 dark:border-emerald-800">
        <span>Get In Touch</span>
      </div>
      <h1 class="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white font-heading">
        Let's Discuss Your Project or Training
      </h1>
      <p class="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
        Reach out for software consulting, MERN development, responsive UI engineering, or academic/corporate IT training in Rajbiraj and beyond.
      </p>
    </div>

    <div class="grid grid-cols-1">
      <!-- Contact Form -->
      <div class="lg:col-span-7 bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-10 shadow-lg border border-slate-100 dark:border-slate-800 transition-colors">
        <div v-if="submitted" class="p-8 text-center space-y-4">
          <div class="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-[#00c885] mx-auto flex items-center justify-center shadow-inner">
            <CheckCircle2 class="w-8 h-8" />
          </div>
          <h3 class="text-2xl font-bold text-slate-900 dark:text-white font-heading">
            Message Received Successfully!
          </h3>
          <p class="text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto">
            Thank you for getting in touch, <strong class="text-slate-900 dark:text-white">{{ formData.name }}</strong>. Your message has been received and will be reviewed soon.
          </p>
          <div class="pt-4 flex justify-center gap-3">
            <button
              @click="submitted = false"
              class="px-6 py-2.5 rounded-full border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-semibold text-xs hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer"
            >
              Send Another Message
            </button>
          </div>
        </div>

        <form v-else @submit.prevent="handleSubmit" class="space-y-5">
          <div class="space-y-1">
            <h2 class="text-2xl font-bold text-slate-900 dark:text-white font-heading">
              Send a Direct Message
            </h2>
            <p class="text-xs text-slate-500 dark:text-slate-400">
              Fill in your details below and we will get back to you.n your details below or connect via LinkedIn.
            </p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="space-y-1.5">
              <label class="text-xs font-semibold text-slate-700 dark:text-slate-300">Your Full Name *</label>
              <input
                type="text"
                required
                placeholder="e.g. Ramesh Sharma"
                v-model="formData.name"
                class="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500"
              />
            </div>
            <div class="space-y-1.5">
              <label class="text-xs font-semibold text-slate-700 dark:text-slate-300">Email Address *</label>
              <input
                type="email"
                required
                placeholder="e.g. name@example.com"
                v-model="formData.email"
                class="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500"
              />
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="space-y-1.5">
              <label class="text-xs font-semibold text-slate-700 dark:text-slate-300">Phone Number</label>
              <input
                type="tel"
                placeholder="e.g. +977 98xxxxxxxx"
                v-model="formData.phone"
                class="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500"
              />
            </div>
            <div class="space-y-1.5">
              <label class="text-xs font-semibold text-slate-700 dark:text-slate-300">Service Required</label>
              <select
                v-model="formData.service"
                class="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500"
              >
                <option value="MERN Full Stack Development">MERN Full Stack Development</option>
                <option value="Custom Frontend (React / Vue.js)">Custom Frontend (React / Vue.js)</option>
                <option value="Backend APIs & Database Architecture">Backend APIs & Database Architecture</option>
                <option value="UI/UX & Mobile Responsive Redesign">UI/UX & Mobile Responsive Redesign</option>
                <option value="Speed Optimization & Bug Fixing">Speed Optimization & Bug Fixing</option>
                <option value="Technical Training & Mentorship">Technical Training & Mentorship</option>
              </select>
            </div>
          </div>

          <div class="space-y-1.5">
            <label class="text-xs font-semibold text-slate-700 dark:text-slate-300">Message *</label>
            <textarea
              rows="4"
              required
              placeholder="Describe your requirements, timeline, or project goals..."
              v-model="formData.message"
              class="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500"
            />
          </div>

          <div class="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <button
              type="submit"
              class="w-full sm:w-auto px-7 py-3 rounded-full bg-[#00c885] hover:bg-[#00b074] text-white font-bold text-xs shadow-md shadow-emerald-500/25 flex items-center justify-center gap-2 transition-all transform active:scale-95 cursor-pointer"
            >
              <Send class="w-3.5 h-3.5" />
              <span>Submit Inquiry</span>
            </button>

          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { MapPin, Phone, Mail, Download, CheckCircle2, Send } from 'lucide-vue-next';
import BrandIcons from '../components/BrandIcons.vue';
import confetti from 'canvas-confetti';
import { businessData } from '../data/businessData';

const formData = ref({
  name: '',
  email: '',
  phone: '',
  service: 'MERN Full Stack Development',
  message: ''
});

const submitted = ref(false);

const handleSubmit = () => {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });
  submitted.value = true;
};

const handleDownloadVCard = () => {
  const vCardData = 
`BEGIN:VCARD
VERSION:3.0
FN:Jatin Yadav
ORG:JK DevStudio
TITLE:Full Stack Developer & IT Instructor
TEL;TYPE=CELL,VOICE:+9779826775787
EMAIL;TYPE=INTERNET:jqtin.1234455@gmail.com
ADR;TYPE=WORK:;;Rajbiraj, Saptari;56400;Nepal
URL:https://www.linkedin.com/in/jatin-yadav-8530a8416/?isSelfProfile=true
NOTE:Full Stack MERN Developer & Frontend Specialist
END:VCARD`;

  const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'Jatin_Yadav_Contact.vcf');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
</script>
