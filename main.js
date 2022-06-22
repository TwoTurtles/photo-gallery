const panels = document.querySelectorAll('.panel')

panels.forEach((panel) => panel.addEventListener('click', openPanel))
panels.forEach((panel) => panel.addEventListener('transitionend', textFlyIn))

function openPanel() {
  this.classList.toggle('panel-open')
}

function textFlyIn(e) {
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('text-fly-in')
  }
}
