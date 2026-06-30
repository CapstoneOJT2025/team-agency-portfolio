
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