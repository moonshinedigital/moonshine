const themeStore = {
  init() {
    // Set the initial dark mode state
    this.isDark = (() => {
      // Check if localStorage is available and contains a theme preference
      if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
        // If there's a theme in localStorage, use that
        // Return true if the stored theme is 'dark', false otherwise
        return localStorage.getItem('theme') === 'dark'
      }
      // If no localStorage theme, check the user's system preference
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // If the system prefers dark mode, return true
        return true
      }
      // Default to light mode if no preference is found
      return false
    })()
  },

  // Property to track the current theme state
  // This will be set to true for dark mode, false for light mode
  isDark: false,

  // Method to toggle between light and dark themes
  toggle() {
    // Flip the isDark boolean
    this.isDark = !this.isDark
    // Save the new theme preference to localStorage
    // This ensures the preference persists across page reloads
    localStorage.setItem('theme', this.isDark ? 'dark' : 'light')
  },
}

export default themeStore
