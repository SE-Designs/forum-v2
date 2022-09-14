// CHANGE THEME
const themeToggle = document.querySelectorAll("#theme-toggle");
const themeCheck = document.querySelectorAll("#theme-check");

themesP1 = [
  "var(--black)",
  "var(--primary)",
  "var(--secondary)",
  "#ae2fc5",
  "#e58816",
  "#b7ebeb",
];

themesP2 = [
  "var(--semi-black)",
  "var(--primary-shadow)",
  "var(--secondary-shadow)",
  "#7a1c8b",
  "#a26417",
  "#89b7b7",
];

// CHANGE NAV & SIDE
const navLogo = document.querySelector(".nav-logo-container");

themeToggle.forEach((el, i) => {
  el.addEventListener("click", () => {
    themeCheck.forEach((els) => {
      els.innerHTML = ``;
    });
    navLogo.style.backgroundColor = themesP1[i];
    header.style.backgroundColor = themesP1[i];
    sidebar.style.backgroundColor = themesP2[i];
    themeCheck[i].innerHTML = `<i class="ri-check-line"></i>`;
  });
});

// DELETE ACCOUNT
