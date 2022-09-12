const sortingBy = document.getElementById("sortingBy");
const sortContainer = document.getElementById("sort-container");
sortContainer.style.display = "none";
sortingBy.addEventListener("click", () => {
  if (sortContainer.style.display == "none") {
    sortContainer.style.display = "block";
  } else {
    sortContainer.style.display = "none";
  }
});

// LIKE/DISLIKE:
const btnLike = document.querySelectorAll("#btn-like");
const btnDislike = document.querySelectorAll("#btn-dislike");

btnLike.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    if (btnDislike[i].classList.contains("btn-black")) {
      btnDislike[i].classList.remove("btn-black");
    }
    btn.classList.toggle("btn-black");
  });
});

btnDislike.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    if (btnLike[i].classList.contains("btn-black")) {
      btnLike[i].classList.remove("btn-black");
    }
    btn.classList.toggle("btn-black");
  });
});
