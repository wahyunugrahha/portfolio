import { useState, onMounted, watch } from '#imports'

export const useLocale = () => {
  const locale = useState('locale', () => 'en')

  const toggleLocale = () => {
    locale.value = locale.value === 'en' ? 'id' : 'en'
  }

  onMounted(() => {
    const savedLocale = localStorage.getItem('locale-preference')
    if (savedLocale) {
      locale.value = savedLocale
    }
  })

  watch(locale, (newVal) => {
    if (import.meta.client) {
      localStorage.setItem('locale-preference', newVal)
    }
  })

  return {
    locale,
    toggleLocale
  }
}
