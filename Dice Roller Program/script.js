const rollBtn = document.getElementById("Btn").addEventListener("click", () => {
  const values = [];
  const diceImgs = [];
  const diceNum = document.getElementById("diceNum");
  const diceImg = document.getElementById("diceImg");
  const userInput = document.getElementById("myInput").value;
  if (userInput > 10 || userInput == NaN || userInput < 1) {
    diceNum.textContent = `Please select a number between 0 to 10`;
  } else {
    for (let i = 0; i < userInput; i++) {
      const value = Math.floor(Math.random() * 6) + 1;
      values.push(value);
      diceImgs.push(
        `<img src="Dice_images/${value}.png" width="150" alt=" Dice ${value}">`
      );
    }
    diceNum.textContent = `Dice: ${values.join(", ")}`;
    diceImg.innerHTML = diceImgs.join(" ");
  }
});
