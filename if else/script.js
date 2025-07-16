const inputBox = document.getElementById("input");
const submitBtn = document.getElementById("submit");
const displayResult = document.getElementById("displayText");

let age;

submitBtn.addEventListener("click", () => {
  age = inputBox.value;
  if (age >= 18 && age < 100) {
    displayResult.textContent = "wow! You are an adult";
  } else if (age < 18 && age > 10) {
    displayResult.textContent = "eww minor. Go play Roblox!!";
  } else if (age >= 100) {
    displayResult.textContent = "Liar, how are you alive?";
  } else {
    displayResult.textContent = "WTF?";
  }
});
