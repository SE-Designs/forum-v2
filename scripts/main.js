// LOADER:
const fullLoader = document.getElementById("full-loader");

// window.addEventListener("DOMContentLoaded", () => {
//   fullLoader.style.opacity = "0";
//   setTimeout(() => {
//     fullLoader.style.display = "none";
//   }, 800);
// });

setTimeout(() => {
  fullLoader.style.opacity = "0";
  setTimeout(() => {
    fullLoader.style.display = "none";
  }, 800);
}, 600);

const profileImg = document.getElementById("profile-img");

// profileImg.innerHTML = `<img src="https://source.boringavatars.com/beam/40/${username}?square&colors=7dc81b,8ACD4F,26E4B9,0051ff,47139A">`;
