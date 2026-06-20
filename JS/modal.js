
function openProfile(id) {

  const member = teamData[id]
  if (!member) return

  // Fill in all modal fields with this member's data
  document.getElementById("modalName").textContent     = member.name
  document.getElementById("modalRole").textContent     = member.role
  document.getElementById("modalExp").textContent      = member.experience
  document.getElementById("modalLocation").textContent = member.location
  document.getElementById("modalEmail").textContent    = member.email
  document.getElementById("modalBio").textContent      = member.bio

  // Set avatar initials + colour class
  document.getElementById("modalAvatar").textContent = member.initials
  document.getElementById("modalAvatar").className   = "avatar modal-avatar " + member.avatarColor

  // Build skill tags
  document.getElementById("modalSkills").innerHTML =
    member.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join("")

  // Set social links
  document.getElementById("modalGithub").href   = "https://github.com/" + member.github
  document.getElementById("modalLinkedin").href = "https://linkedin.com/in/" + member.linkedin

  // Show the modal
  document.getElementById("profileModal").classList.add("show")
}


function setupModalEvents() {

  const closeModal   = document.getElementById("closeModal")
  const profileModal = document.getElementById("profileModal")

  // × button closes modal
  closeModal.onclick = function() {
    profileModal.classList.remove("show")
  }

  // clicking the dark overlay (outside the box) also closes it
  profileModal.onclick = function(e) {
    if (e.target.id === "profileModal") {
      profileModal.classList.remove("show")
    }
  }
}