document.addEventListener('DOMContentLoaded', e => {
  clickHamburguer()
})

window.addEventListener('resize', e => {
  changeClasesResize(e)
})

function changeClasesResize(event) {
  if (event.currentTarget.innerWidth < 992) {
    document.getElementById('menuID').classList.add('menu')
  } else {
    if (event.currentTarget.innerWidth >= 992) {
      closeMenu(document.getElementById('hamburger'))
      document.getElementById('menuID').classList.remove('menu', 'menu--active')
    }
  }
}

function clickHamburguer() {
  const $hamburger = document.getElementById('hamburger'),
    $menu = document.getElementById('menuID')
  $hamburger.addEventListener('click', e => {
    if ($hamburger.dataset.on === 'false') {
      openMenu($hamburger)
      toggleMenu($menu)
    } else {
      closeMenu($hamburger)
      toggleMenu($menu)
    }
  })
}

function openMenu($hamburger) {
  $hamburger.setAttribute('data-on', 'true')
  $hamburger.setAttribute('src', './images/icon-close.svg')
}

function closeMenu($hamburger) {
  $hamburger.setAttribute('data-on', 'false')
  $hamburger.setAttribute('src', './images/icon-hamburger.svg')
}

function toggleMenu($menu) {
  $menu.classList.toggle('menu--active')
}
