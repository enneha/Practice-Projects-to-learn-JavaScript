const increaseNumber = document.getElementById("increase");
const decreaseNumber = document.getElementById("decrease");
const resetNumber = document.getElementById("reset");
const countLabel = document.getElementById("number");

let count = 0;

increaseNumber.addEventListener("click", () => {
  count++;
  countLabel.textContent = count;
});
decreaseNumber.addEventListener("click", () => {
  count--;
  countLabel.textContent = count;
});
resetNumber.addEventListener("click", () => {
  count = 0;
  countLabel.textContent = count;
});
