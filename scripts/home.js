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
