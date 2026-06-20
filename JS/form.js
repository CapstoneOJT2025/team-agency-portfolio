// =====================
//  form.js — Contact form validation + success state
// =====================

function setupContactForm() {

  const form = document.getElementById('contactForm')

  form.addEventListener('submit', function(e) {

    e.preventDefault()   // stop page from refreshing

    // Grab values from each field
    const name  = document.getElementById('fname').value.trim()
    const email = document.getElementById('femail').value.trim()
    const msg   = document.getElementById('fmsg').value.trim()

    clearErrors()   // wipe any old red highlights

    let isValid = true

    // Name must not be empty
    if (name === '') {
      showError('fname', 'nameErr')
      isValid = false
    }

    // Email must match standard pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailPattern.test(email)) {
      showError('femail', 'emailErr')
      isValid = false
    }

    // Message must not be empty
    if (msg === '') {
      showError('fmsg', 'msgErr')
      isValid = false
    }

    // All good → hide form, show success message
    if (isValid) {
      form.style.display = 'none'
      document.getElementById('formSuccess').classList.add('show')
    }
  })
}

// Remove all red error highlights
function clearErrors() {
  document.querySelectorAll('.error').forEach(el => el.classList.remove('error'))
  document.querySelectorAll('.field-error').forEach(el => el.classList.remove('show'))
}

// Add red highlight to input + show its error message
function showError(inputId, errorId) {
  document.getElementById(inputId).classList.add('error')
  document.getElementById(errorId).classList.add('show')
}