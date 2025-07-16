const vinlandSaga = document.getElementById("VS");
const mobPsycho100 = document.getElementById("MP100");
const takopi = document.getElementById("TOS");
const reZero = document.getElementById("RZ");
const submitButton = document.getElementById("submitBtn");
const displayText = document.getElementById("displayText");

submitButton.addEventListener("click", () => {
  if (vinlandSaga.checked) {
    displayText.textContent = "You have watched Vinland Saga.";
  } else if (mobPsycho100.checked) {
    displayText.textContent = "You have watched Mob Psycho 100.";
  } else if (takopi.checked) {
    displayText.textContent = "You have watched Takopi's Original sin!.";
  } else if (reZero.checked) {
    displayText.textContent = "You have watched Re:zero.";
  } else {
    displayText.textContent = "You haven't watched shit";
  }
});
