const toggleMode = document.querySelector("#toggle-icon");
const lightMode = `
<i class="ri-moon-line"></i>
<span class="sidebar-item-title">Dark Mode</span>`;
const darkMode = `
<i class="ri-sun-line"></i>
<span class="sidebar-item-title">Light Mode</span>`;
toggleMode.innerHTML = lightMode;

// DARK MODE:
function switchTheme() {
  console.log("ckick");
  if (toggleMode.classList.contains("dark")) {
    toggleMode.classList.remove("dark");
    toggleMode.innerHTML = "";
    toggleMode.innerHTML = lightMode;
    document.documentElement.setAttribute("data-theme", "light");
  } else {
    toggleMode.classList.add("dark");
    toggleMode.innerHTML = "";
    toggleMode.innerHTML = darkMode;
    document.documentElement.setAttribute("data-theme", "dark");
  }
  smoothSidebar();
}

toggleMode.addEventListener("click", switchTheme);

const sidebar = document.getElementById("sidebar");
// const navbar = document.getElementById("navbar");
const header = document.getElementById("header");
const toggleSide = document.getElementById("toggleside");
const mobileSearchContainer = document.getElementById(
  "mobile-search-container"
);

// const navLogo = document.getElementById("nav-logo");
const visible = document.querySelector(".visible");
const mobileSearch = document.getElementById("mobile-search");

const closeSidebar = document.getElementById("close-sidebar");
closeSidebar.addEventListener("click", () => {
  sidebar.classList.toggle("active");
  header.classList.toggle("sided");
  smoothSidebar();
});

toggleSide.addEventListener("click", () => {
  sidebar.classList.toggle("active");
  header.classList.toggle("sided");
  smoothSidebar();
});

mobileSearchContainer.addEventListener("click", () => {
  if (!sidebar.classList.contains("active")) {
    console.log(!sidebar.classList.contains("active"));
    sidebar.classList.toggle("active");
    header.classList.toggle("sided");
    smoothSidebar();
  }
});

function smoothSidebar() {
  const sidebarListTitles = document.querySelectorAll(".sidebar-item-title");
  if (sidebar.classList.contains("active")) {
    toggleSide.innerHTML = `<i class="ri-menu-2-line"></i>`;
    mobileSearch.classList.add("sided");
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
    setTimeout(() => {
      mobileSearch.classList.remove("sided");
    }, 750);
    sidebarListTitles.forEach((el) => {
      el.style.opacity = 0;
      setTimeout(() => {
        el.style.display = "none";
        visible.innerText = "";
      }, 200);
    });
  }
}
