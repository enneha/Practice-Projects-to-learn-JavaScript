const favoriteIcon = document.querySelectorAll(".favorite-icon");

for (icon of favoriteIcon) {
  icon.addEventListener("click", toggleIcon);
}

function toggleIcon() {
  if (this.classList.contains("filled")) {
    this.classList.remove("filled");
    this.innerHTML = "&#9825;";
  } else {
    this.innerHTML = "&#10084;";
    this.classList.add("filled");
  }
}
