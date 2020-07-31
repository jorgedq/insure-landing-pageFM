document.addEventListener("DOMContentLoaded", () => {
  clickHamburguer();
});

function clickHamburguer() {
  const $hamburger = document.getElementById("hamburger"),
    $menu = document.getElementById("menu");
  $hamburger.addEventListener("click", (e) => {
    if ($hamburger.dataset.on === "false") {
      openMenu($hamburger);
      toggleMenu($menu);
    } else {
      closeMenu($hamburger);
      toggleMenu($menu);
    }
  });
}
// open menu function
function openMenu($hamburger) {
  $hamburger.setAttribute("data-on", "true");
  $hamburger.setAttribute("src", "./images/icon-close.svg");
}
// close menu function
function closeMenu($hamburger) {
  $hamburger.setAttribute("data-on", "false");
  $hamburger.setAttribute("src", "./images/icon-hamburger.svg");
}
// toggle menu function
function toggleMenu($menu) {
  $menu.classList.toggle("d-none");
}
