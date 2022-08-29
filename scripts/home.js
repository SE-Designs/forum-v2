const sidebar = document.getElementById("sidebar");
// const navbar = document.getElementById("navbar");
const header = document.getElementById("header");
const toggleSide = document.getElementById("toggleside");

// const navLogo = document.getElementById("nav-logo");
const visible = document.querySelector(".visible");
const sidebarListTitles = document.querySelectorAll(".sidebar-item-title");

toggleSide.addEventListener("click", () => {
  sidebar.classList.toggle("active");
  header.classList.toggle("sided");

  if (sidebar.classList.contains("active")) {
    toggleSide.innerHTML = `<i class="ri-menu-2-line"></i>`;
    setTimeout(() => {
      visible.style.opacity = 1;
      visible.innerText = "kumi";
    }, 300);
    sidebarListTitles.forEach((el) => {
      el.style.display = "inline";
      setTimeout(() => {
        el.style.opacity = 1;
      }, 400);
    });
  } else {
    toggleSide.innerHTML = `<i class="ri-menu-3-line"></i>`;
    visible.style.opacity = 0;
    visible.innerText = "";
    sidebarListTitles.forEach((el) => {
      el.style.opacity = 0;
      el.style.display = "none";
      // setTimeout(() => {}, 200);
    });
  }
});

// DARK MODE
const toggleMode = document.querySelector("#toggle-icon");
const lightMode = `<i class="ri-moon-line"></i>`;
const darkMode = `<i class="ri-sun-line"></i>`;
toggleMode.innerHTML = lightMode;

function switchTheme() {
  if (toggleMode.classList.contains("dark")) {
    toggleMode.innerHTML = "";
    toggleMode.innerHTML = lightMode;
    toggleMode.classList.remove("dark");
    toggleMode.classList.add("light");
    document.documentElement.setAttribute("data-theme", "light");
  } else {
    toggleMode.innerHTML = "";
    toggleMode.innerHTML = darkMode;
    toggleMode.classList.add("dark");
    toggleMode.classList.remove("light");
    document.documentElement.setAttribute("data-theme", "dark");
  }
}

toggleMode.addEventListener("click", switchTheme);
