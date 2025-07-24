const userInput = document.getElementById("unit");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const outputText = document.getElementById("outputText");

const convertBtn = document
  .getElementById("convertBtn")
  .addEventListener("click", () => {
    let unit = Number(userInput.value);
    if (toFahrenheit.checked) {
      unit = unit * 1.8 + 32;
      outputText.textContent = `${unit.toFixed(1)}°F`;
    } else if (toCelsius.checked) {
      unit = unit - 32 * 0.5556;
      outputText.textContent = `${unit.toFixed(1)}°C`;
    } else {
      window.alert(`Please select a unit to convert into.`);
    }
  });
