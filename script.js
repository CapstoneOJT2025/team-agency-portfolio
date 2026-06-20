
// Project data
const projectsData = [
  {
    number: "01",
    name: "Team Agency Portfolio",
    topic: "DOM & Layout",
    desc: "Data-driven landing page with dark/light theme toggle, team profiles and project showcase.",
    link: "https://capstoneojt2025.github.io/team-agency-portfolio/",
    developer: "Vivek Ingle"
  },
  {
    number: "02",
    name: "Interactive Quiz App",
    topic: "State & Logic",
    desc: "Multiple-choice quiz with score tracking, question state management and instant feedback.",
    link: "https://shraddhalimbekar07-wq.github.io/interactive-quiz-app/",
    developer: "Shraddha Limbekar" 
  },
  {
    number: "03",
    name: "Expense Tracker",
    topic: "CRUD & localStorage",
    desc: "Log income & expenses with full CRUD, computed totals using reduce/filter, data persists.",
    link: "https://rugvedkadam7.github.io/expense-tracker/",
    developer: "Rugved Kadam" 
  },
  {
    number: "04",
    name: "Live News Feed",
    topic: "Async API Integration",
    desc: "News aggregator with async/await, loading states, error handling and category filters.",
    link: "https://capstoneojt2025.github.io/live-news-feed/",
    developer: "Akshata Biradar" 
  },
  {
    number: "05",
    name: "GitHub Explorer",
    topic: "Multi-Endpoint APIs",
    desc: "Search any GitHub username to view profile, repos, stats and language breakdown chart.",
    link: "https://capstoneojt2025.github.io/github-developer-explorer/",
    developer: "Shraddha Limbekar , Vivek Ingle" 
  },
  {
    number: "06",
    name: "Kanban Task Board",
    topic: "Drag & Drop & State",
    desc: "Trello-style board with drag-and-drop, card CRUD, and full localStorage persistence.",
    link: "https://capstoneojt2025.github.io/kanban-task-board/",
    developer: "Rugved Kadam , Akshata Biradar" 
  }
]

// Team data
const teamData = [
  {
    initials: "VI",
    name: "Vivek Ingle",
    role: "Team Lead · Frontend Developer",
    skills: ["JavaScript", "HTML/CSS", "DOM"],
    avatarColor: "avatar-blue",
    github: "vivekingle",
    linkedin: "vivek-ingle-7ab599386",
    bio: "Leads the team and handles full-stack features, from UI to logic. Loves clean code and simple solutions.",
    email: "vivekingle226@gmail.com",
    location: "Pune, India",
    experience: "2nd Semester · CS Student",
  },
  {
    initials: "RK",
    name: "Rugved Kadam",
    role: "Frontend Developer",
    skills: ["JavaScript", "HTML/CSS", "DOM"],
    avatarColor: "avatar-green",
    github: "rugvedkadam7",
    linkedin: "rugved-kadam-817372386",
    bio: "Leads the team and handles full-stack features, from UI to logic. Loves clean code and simple solutions.",
    email: "rugvedkadam7@gmail.com",
    location: "Pune, India",
    experience: "2nd Semester · CS Student",
  },
  {
    initials: "SL",
    name: "Shraddha limbekar",
    role: "Frontend Developer",
    skills: ["JavaScript", "HTML/CSS", "DOM"],
    avatarColor: "avatar-amber",
    github: "shraddhalimbekar07-wq",
    linkedin: "shraddha-limbekar-91667b385",
    bio: "Leads the team and handles full-stack features, from UI to logic. Loves clean code and simple solutions.",
    email: "shraddhalimbekar07@gmail.com",
    location: "Pune, India",
    experience: "2nd Semester · CS Student",
  },
  {
    initials: "AB",
    name: "Akshata Biradar",
    role: "Frontend Developer",
    skills: ["JavaScript", "HTML/CSS", "DOM"],
    avatarColor: "avatar-purple",
    github: "akshatabirader",
    linkedin: "akshata-biradar-91667b385",
    bio: "Leads the team and handles full-stack features, from UI to logic. Loves clean code and simple solutions.",
    email: "akshatabiradar@gmail.com",
    location: "Pune, India",
    experience: "2nd Semester · CS Student",
  }
]

function renderTeamCards() {
 
  const teamGrid = document.getElementById('teamGrid')
  const cardsHTML = teamData.map(function(member, index) {
 
    const skillsHTML = member.skills.map(function(skill) {
      return `<span class="skill-tag">${skill}</span>`
    }).join('')

    return `
      <div class="team-card" onclick="openProfile(${index})">
 
        <div class="avatar ${member.avatarColor}">
          ${member.initials}
        </div>
 
        <p class="member-name">${member.name}</p>
        <p class="member-role">${member.role}</p>
 
        <div class="skills-row">
          ${skillsHTML}
        </div>

        <a class="profile-btn" type="button">
          View profile →
        </a>

      </div>
    `
  }).join('')  
 
  teamGrid.innerHTML = cardsHTML

}


function openProfile(id){

  const member = teamData[id]
  if (!member) return

  document.getElementById("modalName").textContent = member.name
  document.getElementById("modalRole").textContent = member.role

  document.getElementById("modalExp").textContent = member.experience
  document.getElementById("modalLocation").textContent = member.location
  document.getElementById("modalEmail").textContent = member.email
  document.getElementById("modalBio").textContent = member.bio
  document.getElementById("modalAvatar").textContent = member.initials
  document.getElementById("modalAvatar").className =
    "avatar modal-avatar " + member.avatarColor

  document.getElementById("modalSkills").innerHTML =
    member.skills.map(skill =>`<span class="skill-tag">${skill}</span>`).join("")

  document.getElementById("modalGithub").href = "https://github.com/" + member.github
  document.getElementById("modalLinkedin").href = "https://linkedin.com/in/" + member.linkedin
  document.getElementById("profileModal").classList.add("show")
}

function setupModalEvents() {
  const closeModal = document.getElementById("closeModal")
  const profileModal = document.getElementById("profileModal")

  closeModal.onclick = function() {
    profileModal.classList.remove("show")
  }

  profileModal.onclick = function(e) {
    if (e.target.id === "profileModal") {
      profileModal.classList.remove("show")
    }
  }
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
        <a href="${project.link}" class="project-link" target="_blank">
          View project →
        </a>
           <p class="project-developer">👤 Developer : ${project.developer}</p>
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
 x
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
  document.querySelectorAll('.field-error').forEach(el => el.classList.remove('show'))
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
  setupContactForm()     // Initialize contact form validation
  setupModalEvents()     // Initialize modal open/close behavior
  setupActiveNav()       // Highlight nav link on scroll
})