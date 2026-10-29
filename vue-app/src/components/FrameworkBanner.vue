<template>
  <div
    class="bg-gradient-to-r from-slate-900 via-emerald-950 to-slate-900 text-white text-xs py-2 px-4 border-b border-emerald-900/50 sticky top-0 z-40 backdrop-blur-md"
  >
    <div
      class="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2"
    >
      <div class="flex items-center gap-2">
        <span class="flex h-2 w-2 relative">
          <span
            class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"
          ></span>
          <span
            class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"
          ></span>
        </span>
        <span class="text-slate-300">
          Active Framework:
          <strong class="text-emerald-400 font-semibold"
            >Vue.js 3 + Tailwind v4 + Vue Router 4</strong
          >
        </span>
        <span class="hidden md:inline text-slate-500">|</span>
        <span class="hidden md:inline text-slate-400">
          Full Dual Architecture Available (React & Vue.js)
        </span>
      </div>

      <div class="flex items-center gap-2">
        <button
          @click="switchToReact"
          class="group flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 hover:text-blue-200 border border-blue-500/40 transition-all text-[11px] font-medium cursor-pointer"
          title="Switch to React 19 Edition on port 5173"
        >
          <span>⚛️ Switch to React Edition</span>
          <span class="group-hover:translate-x-0.5 transition-transform"
            >↗</span
          >
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const switchToReact = () => {
  const currentHost = window.location.hostname;
  window.location.href = `http://${currentHost}:5173`;
};
</script>
