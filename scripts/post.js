const btnBack = document.getElementById("btn-back");
btnBack.addEventListener("click", () => {
  history.back();
});

// LIKE/DISLIKE:
let likes = 2;
let dislikes = 0;
const noLikes = document.getElementById("no-likes");
const noDislikes = document.getElementById("no-dislikes");
const btnLike = document.querySelector("#btn-like");
const btnDislike = document.querySelector("#btn-dislike");

btnLike.addEventListener("click", () => {
  if (btnDislike.classList.contains("btn-black")) {
    btnDislike.classList.remove("btn-black");
  }

  btnLike.classList.remove("btn-black");
  btnLike.classList.toggle("btn-secondary");

  if (btnLike.classList.contains("btn-secondary")) {
    likes++;
  } else {
    likes--;
  }

  if (noLikes) {
    noLikes.innerText = `${likes} Likes`;
  }
});

btnDislike.addEventListener("click", () => {
  if (btnLike.classList.contains("btn-black")) {
    btnLike.classList.remove("btn-black");
  }

  btnDislike.classList.remove("btn-black");
  btnDislike.classList.toggle("btn-secondary");

  if (btnDislike.classList.contains("btn-secondary")) {
    dislikes++;
  } else {
    dislikes--;
  }

  if (noDislikes) {
    noDislikes.innerText = `${dislikes} Dislikes`;
  }
});
