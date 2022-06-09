//tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
//scrollspy
const scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#nvr1_id'
  })