const navBar = document.querySelector("#nav-bar");
const navLinks = document.querySelector("#nav-links");
const menuDark = document.querySelector("#menu-dark");
const menuLight = document.querySelector("#menu-light");
const exitDark = document.querySelector("#X-dark");
const exitLight = document.querySelector("#X-light");

menuDark.addEventListener("click", showMenu);
menuLight.addEventListener("click", showMenu);

exitDark.addEventListener("click", hideMenu);
exitLight.addEventListener("click", hideMenu);
navBar.addEventListener("click", hideMenu);

function showMenu() {
  navBar.classList.remove("sm:hidden");
  navLinks.classList.remove("sm:hidden");
  menuDark.classList.remove("dark:flex");
  menuLight.classList.add("hidden");
  exitDark.classList.add("dark:flex");
  exitLight.classList.remove("hidden");
  exitLight.classList.add("flex");
}

function hideMenu() {
  navBar.classList.add("sm:hidden");
  navLinks.classList.add("sm:hidden");
  menuDark.classList.add("dark:flex");
  menuLight.classList.remove("hidden");
  exitDark.classList.remove("dark:flex");
  exitLight.classList.add("hidden");
  exitLight.classList.remove("flex");
}

// NETLIFY/DOMENE
// README
// CURRENT "PAGE" TRACKER
// PORTFOLIOPAGES DROPDOWN INFO ON HOVER
// MOBILE CAROUSEL/SWIPE PORTFOLIO
// FIX BACK-TO-TOP BUTTON DESIGN TO BE MORE VISIBLE
// FIX SHADOW COLOR ON "DESIGN"
// ACHOR LINKS WORK MORE PROPERLY
// MENU SMOOTH SCROLL BETWEEN ANCHORS
// ANIMATIONS
// SPACING
