import { useState, onMounted, watch } from '#imports'

export const useTheme = () => {
  const isDark = useState('theme', () => false)

  const toggleTheme = () => {
    isDark.value = !isDark.value
  }

  onMounted(() => {
    // Check local storage first
    const savedTheme = localStorage.getItem('theme-preference')
    if (savedTheme) {
      isDark.value = savedTheme === 'dark'
    } else {
      // Fallback to system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      isDark.value = prefersDark
    }

    // Apply class based on initial value
    if (isDark.value) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  })

  // Watch for changes and update DOM/localStorage
  watch(isDark, (newVal) => {
    if (import.meta.client) {
      if (newVal) {
        document.documentElement.classList.add('dark')
        localStorage.setItem('theme-preference', 'dark')
      } else {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('theme-preference', 'light')
      }
    }
  })

  return {
    isDark,
    toggleTheme
  }
}
