const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const repeatPasswordInput = document.getElementById("repeat-password");

const horizontalRule = document.querySelectorAll(".horizontal-rule");

usernameInput.addEventListener("change", (e) => {
  console.log(e.currentTarget.value);
});

passwordInput.addEventListener("change", (e) => {
  console.log(e.currentTarget.value);
});

repeatPasswordInput.addEventListener("change", (e) => {
  console.log(e.currentTarget.value);
});
