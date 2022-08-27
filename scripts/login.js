const labels = document.querySelectorAll(".form-control label");

labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split("")
    .map(
      (letter, idx) =>
        `<span style="transition-delay: ${idx * 25}ms">${letter}</span>`
    )
    .join("");
});

const registerBtn = document.querySelectorAll("#register-btn");
const loginBtn = document.querySelectorAll("#login-btn");

const registerContainer = document.querySelector("#register-container");
const loginContainer = document.querySelector("#login-container");

registerBtn.forEach((item) =>
  item.addEventListener("click", () => {
    loginContainer.classList.add("hidden");
    registerContainer.classList.remove("hidden");

    document.getElementById("l-username").disabled = true;
    document.getElementById("l-password").disabled = true;
    // document.getElementById("login-btn").disabled = true;
    document.getElementById("r-username").disabled = false;
    document.getElementById("r-password").disabled = false;
    document.getElementById("r-repeat-password").disabled = false;
    // document.getElementById("register-btn").disabled = false;
  })
);

loginBtn.forEach((item) =>
  item.addEventListener("click", () => {
    loginContainer.classList.remove("hidden");
    registerContainer.classList.add("hidden");

    document.getElementById("l-username").disabled = false;
    document.getElementById("l-password").disabled = false;
    // document.getElementById("login-btn").disabled = false;
    document.getElementById("r-username").disabled = true;
    document.getElementById("r-password").disabled = true;
    document.getElementById("r-repeat-password").disabled = true;
    // document.getElementById("register-btn").disabled = true;
  })
);
