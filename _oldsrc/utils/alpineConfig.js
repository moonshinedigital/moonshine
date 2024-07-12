import collapse from '@alpinejs/collapse'
import Alpine from 'alpinejs'
import themeStore from './themeStore.js'

// Register stores
Alpine.store('theme', themeStore)

// Register plugins
Alpine.plugin(collapse)

// Initialize Alpine.js
document.addEventListener('alpine:init', () => {
  // Any additional Alpine.js initialization can go here
})

export default Alpine
