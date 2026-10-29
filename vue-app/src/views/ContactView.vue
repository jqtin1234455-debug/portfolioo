<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16 text-left">
    <!-- Header -->
    <div class="max-w-3xl space-y-4">
      <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-xs font-bold border border-emerald-300 dark:border-emerald-800">
        <span>Get In Touch</span>
      </div>
      <h1 class="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white font-heading">
        Let's Discuss our Project
      </h1>
    </div>

    <div class="grid grid-cols-1">
      <!-- Contact Form -->
      <div class="lg:col-span-7 bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-10 shadow-lg border border-slate-100 dark:border-slate-800 transition-colors">
        <form @submit.prevent="handleSubmit" class="space-y-5">
          <div class="space-y-1">
            <h2 class="text-2xl font-bold text-slate-900 dark:text-white font-heading">
              Send a Direct Message
            </h2>
            <p class="text-xs text-slate-500 dark:text-slate-400">
              Fill in your details to prepare a WhatsApp draft. Choose a recipient and send it there.
            </p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="space-y-1.5">
              <label for="contact-name" class="text-xs font-semibold text-slate-700 dark:text-slate-300">Your Full Name *</label>
              <input
                type="text"
                id="contact-name"
                required
                placeholder="e.g. Jatin yadav"
                v-model="formData.name"
                class="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500"
              />
            </div>
            <div class="space-y-1.5">
              <label for="contact-email" class="text-xs font-semibold text-slate-700 dark:text-slate-300">Email Address *</label>
              <input
                type="email"
                id="contact-email"
                required
                placeholder="e.g. name@example.com"
                v-model="formData.email"
                class="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500"
              />
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="space-y-1.5">
              <label for="contact-phone" class="text-xs font-semibold text-slate-700 dark:text-slate-300">Phone Number</label>
              <input
                type="tel"
                id="contact-phone"
                placeholder="e.g. +977 98xxxxxxxx"
                v-model="formData.phone"
                class="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500"
              />
            </div>
            
          </div>

          <div class="space-y-1.5">
            <label for="contact-message" class="text-xs font-semibold text-slate-700 dark:text-slate-300">Message *</label>
            <textarea
              rows="4"
              id="contact-message"
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
              <span>Continue in WhatsApp</span>
            </button>
            <p class="text-xs text-slate-500 dark:text-slate-400" role="status" aria-live="polite">
              {{ submitMessage || 'Your message opens as a draft; it is only delivered after you send it in WhatsApp.' }}
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Send } from 'lucide-vue-next';

const WHATSAPP_NUMBER = '9826775787';

const formData = ref({
  name: '',
  email: '',
  phone: '',
  service: 'MERN Full Stack Development',
  message: ''
});
const submitMessage = ref('');

const handleSubmit = () => {
  const message = [
    'Hello! I would like to discuss a project.',
    `Name: ${formData.value.name}`,
    `Email: ${formData.value.email}`,
    `Phone: ${formData.value.phone || 'Not provided'}`,
    `Service: ${formData.value.service}`,
    `Message: ${formData.value.message}`,
  ].join('\n');

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  const whatsappWindow = window.open(whatsappUrl, '_blank');

  if (!whatsappWindow) {
    submitMessage.value = 'Your browser blocked the WhatsApp tab. Allow pop-ups and try again.';
    return;
  }

  whatsappWindow.opener = null;
  submitMessage.value = 'WhatsApp opened with your draft and the recipient set to 9826775787.';
};
</script>
