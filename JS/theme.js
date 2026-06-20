
function setupThemeToggle() {

  const toggleBtn = document.getElementById('themeToggle')
  const themeIcon = document.getElementById('themeIcon')
  const themeText = document.getElementById('themeText')

  // Load saved theme from last visit (if any)
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme) {
    applyTheme(savedTheme)
  }

  // When user clicks the button — flip the theme
  toggleBtn.addEventListener('click', function() {
    const currentTheme = document.documentElement.getAttribute('data-theme')
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark'

    applyTheme(newTheme)
    localStorage.setItem('theme', newTheme)   // save choice for next visit
  })

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme)

    if (theme === 'dark') {
      themeIcon.textContent = '☀️'
      themeText.textContent = 'Light Mode'
    } else {
      themeIcon.textContent = '🌙'
      themeText.textContent = 'Dark Mode'
    }
  }
}