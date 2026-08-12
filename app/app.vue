<template>
  <div class="relative min-h-screen text-ink font-sans antialiased bg-paper overflow-x-hidden flex flex-col transition-colors duration-300">
    <!-- N1 Nav: Wordmark + links + button -->
    <header class="w-full z-50 bg-paper border-b border-paper-2 animate-fade-in">
      <div class="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between relative">
        <NuxtLink to="/" class="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <img src="/images/Logo.png" alt="Wahyu Nugraha Logo" class="h-8 w-auto" />
        </NuxtLink>
        
        <nav class="hidden md:flex items-center gap-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <NuxtLink to="#projects" class="text-sm font-medium text-ink hover:text-accent-cyan transition-colors">{{ lang.navProjects }}</NuxtLink>
          <NuxtLink to="#about" class="text-sm font-medium text-ink hover:text-accent-cyan transition-colors">{{ lang.navAbout }}</NuxtLink>
          <NuxtLink to="#certifications" class="text-sm font-medium text-ink hover:text-accent-cyan transition-colors">{{ lang.navCertifications }}</NuxtLink>
        </nav>
        
        <div class="flex items-center gap-4">
          <!-- Theme Toggle -->
          <button @click="toggleTheme" class="relative p-2 text-ink hover:text-accent-cyan transition-colors flex items-center justify-center w-9 h-9" title="Toggle Dark Mode">
            <Transition name="theme-fade">
              <svg v-if="isDark" class="w-5 h-5 absolute" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              <svg v-else class="w-5 h-5 absolute" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
            </Transition>
          </button>
          
          <!-- Locale Toggle -->
          <button @click="toggleLocale" class="text-sm font-bold text-ink hover:text-accent-cyan transition-colors px-2 py-1 uppercase border border-paper-2 rounded-md bg-paper-2">
            {{ locale }}
          </button>

          <a href="mailto:wahuyunih297@gmail.com" class="btn btn-primary text-sm px-5 py-2.5">
            {{ lang.hireMe }}
          </a>
        </div>
      </div>
    </header>

    <main class="flex-grow">
      <NuxtPage />
    </main>

    <!-- Ft8 Footer: Marquee Scroll -->
    <footer class="border-t border-paper-2 bg-paper-2 overflow-hidden py-6 mt-24">
      <div class="flex w-max whitespace-nowrap animate-marquee items-center text-sm font-display font-semibold tracking-wide text-ink-2">
        <div v-for="i in 4" :key="i" class="flex items-center justify-around shrink-0">
          <span class="mx-4">{{ lang.availableForWork }}</span>
          <span class="mx-4 text-accent-cyan">•</span>
          <span class="mx-4">{{ lang.basedInJakarta }}</span>
          <span class="mx-4 text-accent-pear">•</span>
          <span class="mx-4">{{ lang.fullStackDeveloper }}</span>
          <span class="mx-4 text-accent-coral">•</span>
          <span class="mx-4">{{ lang.robloxGameDev }}</span>
          <span class="mx-4 text-accent-cyan">•</span>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import '~/assets/css/main.css'
import { computed } from 'vue'

const { isDark, toggleTheme } = useTheme()
const { locale, toggleLocale } = useLocale()

const lang = computed(() => t[locale.value])
</script>

<style scoped>
</style>
