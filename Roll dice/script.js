const rollBtn = document.getElementById("roll");
const number1 = document.getElementById("no1");
const number2 = document.getElementById("no2");
const number3 = document.getElementById("no3");

let randomNum1;
let randomNum2;
let randomNum3;

rollBtn.addEventListener("click", () => {
  randomNum1 = Math.floor(Math.random() * 6 + 1);
  randomNum2 = Math.floor(Math.random() * 6 + 1);
  randomNum3 = Math.floor(Math.random() * 6 + 1);

  number1.textContent = randomNum1;
  number2.textContent = randomNum2;
  number3.textContent = randomNum3;
});

/* there should be 3 random numbers generated between 1 to 6.
The 3 numbers should be stored and reflected in the 3 labels.
*/
