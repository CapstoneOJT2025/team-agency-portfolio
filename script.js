
// Project data
const projectsData = [
  {
    number: "01",
    name: "Team Agency Portfolio",
    topic: "DOM & Layout",
    desc: "Data-driven landing page with dark/light theme toggle, team profiles and project showcase.",
    link: "https://capstoneojt2025.github.io/team-agency-portfolio/"
  },
  {
    number: "02",
    name: "Interactive Quiz App",
    topic: "State & Logic",
    desc: "Multiple-choice quiz with score tracking, question state management and instant feedback.",
    link: "#"
  },
  {
    number: "03",
    name: "Expense Tracker",
    topic: "CRUD & localStorage",
    desc: "Log income & expenses with full CRUD, computed totals using reduce/filter, data persists.",
    link: "#"
  },
  {
    number: "04",
    name: "Live News Feed",
    topic: "Async API Integration",
    desc: "News aggregator with async/await, loading states, error handling and category filters.",
    link: "#"
  },
  {
    number: "05",
    name: "GitHub Explorer",
    topic: "Multi-Endpoint APIs",
    desc: "Search any GitHub username to view profile, repos, stats and language breakdown chart.",
    link: "#"
  },
  {
    number: "06",
    name: "Kanban Task Board",
    topic: "Drag & Drop & State",
    desc: "Trello-style board with drag-and-drop, card CRUD, and full localStorage persistence.",
    link: "#"
  }
]

// Team data
const teamData = [
  {
    initials: "VI",
    name: "Vivek Ingle",
    role: "Team Lead · Full Stack",
    skills: ["JavaScript", "HTML/CSS", "DOM"],
    avatarColor: "avatar-blue",
    github: "vivekingle",
    linkedin: "vivek-ingle-7ab599386",
    bio: "Leads the team and handles full-stack features, from UI to logic."
  },
  {
    initials: "RK",
    name: "Rugved Kadam",
    role: "Frontend Developer",
    skills: ["JavaScript", "HTML/CSS", "DOM"],
    avatarColor: "avatar-green",
    github: "rugvedkadam7",
    linkedin: "rugved-kadam-817372386",
    bio: "Builds and styles the UI components across the project."
  },
  {
    initials: "SL",
    name: "Shraddha limbekar",
    role: "JS Logic Developer",
    skills: ["JavaScript", "HTML/CSS", "DOM"],
    avatarColor: "avatar-amber",
    github: "shraddhalimbekar07-wq",
    linkedin: "shraddha-limbekar-91667b385",
    bio: "Handles the core JavaScript logic and DOM interactions."
  },
  {
    initials: "AB",
    name: "Akshata Biradar",
    role: "API & Async Specialist",
    skills: ["JavaScript", "HTML/CSS", "DOM"],
    avatarColor: "avatar-purple",
    github: "akshatabirader",
    linkedin: "akshata-biradar-91667b385",
    bio: "Works on API calls and async data flow for the apps."
  }
]



function renderTeamCards() {
 
  const teamGrid = document.getElementById('teamGrid')
  const cardsHTML = teamData.map(function(member) {
 
    const skillsHTML = member.skills.map(function(skill) {
      return `<span class="skill-tag">${skill}</span>`
    }).join('')

    return `
      <div class="team-card">
 
        <div class="avatar ${member.avatarColor}">
          ${member.initials}
        </div>
 
        <p class="member-name">${member.name}</p>
        <p class="member-role">${member.role}</p>
 
        <div class="skills-row">
          ${skillsHTML}
        </div>

        <a class="github-btn" onclick="window.open('https://github.com/${member.github}', '_blank')">
          ⬡ github
        </a>
        <a class="linkedin-btn" onclick="window.open('https://www.linkedin.com/in/${member.linkedin}', '_blank')">
          ⬡ linkedin
        </a>

      </div>
    `
  }).join('')  
 
  teamGrid.innerHTML = cardsHTML

}
 
 
/*  PROJECT CARDS */
 
function renderProjectCards() {
 
  const projectsGrid = document.getElementById('projectsGrid')
 
  const cardsHTML = projectsData.map(function(project) {
    return `
      <div class="project-card">
        <p class="project-number">${project.number}</p>
        <div class="project-bar"></div>
        <p class="project-name">${project.name}</p>
        <p class="project-topic">${project.topic}</p>
        <p class="project-desc">${project.desc}</p>
        <a href="${project.link}" class="project-link">
          View project →
        </a>
      </div>
    `
  }).join('')
 
  projectsGrid.innerHTML = cardsHTML
}



function setupThemeToggle() {
 
  // Find the button in HTML
  const toggleBtn = document.getElementById('themeToggle')
  const themeIcon = document.getElementById('themeIcon')
  const themeText = document.getElementById('themeText')
 

  const savedTheme = localStorage.getItem('theme')
 
  if (savedTheme) {
    applyTheme(savedTheme)
  }
 
  toggleBtn.addEventListener('click', function() {
 
    const currentTheme = document.documentElement.getAttribute('data-theme')
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark'
 
    applyTheme(newTheme)
    localStorage.setItem('theme', newTheme)
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


function setupContactForm() {
 
  const form = document.getElementById('contactForm')

  form.addEventListener('submit', function(e) {
 
    e.preventDefault()
 
    const name  = document.getElementById('fname').value.trim()
    const email = document.getElementById('femail').value.trim()
    const msg   = document.getElementById('fmsg').value.trim()

    clearErrors()
 
    let isValid = true  
    if (name === '') {
      showError('fname', 'nameErr')
      isValid = false
    }
 
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailPattern.test(email)) {
      showError('femail', 'emailErr')
      isValid = false
    }
 
    if (msg === '') {
      showError('fmsg', 'msgErr')
      isValid = false
    }

    if (isValid) {
      form.style.display = 'none'
      document.getElementById('formSuccess').classList.add('show')
    }
  })
}
 
function clearErrors() {
  document.querySelectorAll('.error').forEach(el => el.classList.remove('error'))
  document.querySelectorAll('.error-msg').forEach(el => el.classList.remove('show'))
}
function showError(inputId, errorId) {
  document.getElementById(inputId).classList.add('error')
  document.getElementById(errorId).classList.add('show')
}


function setupActiveNav() {
 
  const sections = document.querySelectorAll('section')
  const navLinks = document.querySelectorAll('.nav-links a')
 
  const observer = new IntersectionObserver(function(entries) {
 
    entries.forEach(function(entry) {
 
      if (entry.isIntersecting) {

        navLinks.forEach(link => link.classList.remove('active'))
 
        const id = entry.target.id  // e.g. "team"
        const activeLink = document.querySelector(`.nav-links a[href="#${id}"]`)
        if (activeLink) activeLink.classList.add('active')
      }
 
    })
 
  }, { threshold: 0.4 })

  sections.forEach(section => observer.observe(section))
}

document.addEventListener('DOMContentLoaded', function() {
 
  renderTeamCards()      // Build team section from data
  renderProjectCards()   // Build projects section from data
  setupThemeToggle()     // Wire up dark/light toggle
  setupActiveNav()       // Highlight nav link on scroll
})