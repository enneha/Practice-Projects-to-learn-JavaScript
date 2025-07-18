const gradeLabel = document.getElementById("gradeLabel");
const myScore = document.getElementById("myScore");
const convertBtn = document.getElementById("convertBtn");
let grade;
convertBtn.addEventListener("click", () => {
  let score = myScore.value;
  switch (true) {
    case score >= 90:
      grade = "A";
      break;
    case score >= 80:
      grade = "B";
      break;
    case score >= 70:
      grade = "C";
      break;
    case score >= 60:
      grade = "D";
      break;
    case score >= 0:
      grade = "F";
      break;
    default:
      grade = "null";
      break;
  }
  gradeLabel.textContent = `Your grade is ${grade}`;
});
