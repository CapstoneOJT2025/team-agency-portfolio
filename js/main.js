

function setupActiveNav() {

  const sections = document.querySelectorAll('section')
  const navLinks = document.querySelectorAll('.nav-links a')

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {

        // Remove active from all links first
        navLinks.forEach(link => link.classList.remove('active'))

        // Then add active only to the matching link
        const id = entry.target.id
        const activeLink = document.querySelector(`.nav-links a[href="#${id}"]`)
        if (activeLink) activeLink.classList.add('active')
      }
    })
  }, { threshold: 0.4 })

  sections.forEach(section => observer.observe(section))
}


document.addEventListener('DOMContentLoaded', function() {
  renderTeamCards()     // render.js  — Build team cards
  renderProjectCards()  // render.js  — Build project cards
  setupThemeToggle()    // theme.js   — Dark/light toggle
  setupContactForm()    // form.js    — Contact form validation
  setupModalEvents()    // modal.js   — Profile modal open/close
  setupActiveNav()      // main.js    — Highlight nav on scroll
})