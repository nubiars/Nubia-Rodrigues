const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

const backToTopButton = document.querySelector('.back-to-top')

function backToTop() {
  if (window.scrollY >= 300) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

const headingHidden = document.querySelector('#heading')

function hiddenHeading() {
  if (window.scrollY >= 200) {
    headingHidden.classList.add('hidden')
  } else {
    headingHidden.classList.remove('hidden')
  }
}

window.addEventListener('scroll', function () {
  backToTop(), hiddenHeading()
})
