function getAverage(testScores) {
  let sum = 0;
  for (let i = 0; i < testScores.length; i++) {
    sum += testScores[i];
  }
  return sum / testScores.length;
}
function getGrade(studentScore) {
  if (studentScore == 100) {
    return "A+";
  } else if (studentScore >= 90 && studentScore <= 99) {
    return "A";
  } else if (studentScore >= 80 && studentScore <= 89) {
    return "B";
  } else if (studentScore >= 70 && studentScore <= 79) {
    return "C";
  } else if (studentScore >= 60 && studentScore <= 69) {
    return "D";
  } else {
    return "F";
  }
}

function hasPassingGrade(score) {
  let grade = getGrade(score);
  if (grade == "F") {
    return false;
  } else {
    return true;
  }
}

function studentMsg(classAvgArr, studentScore) {
  let classAverage = getAverage(classAvgArr);
  let grade = getGrade(studentScore);
  let passingStatus = hasPassingGrade(studentScore);
  if (!passingStatus) {
    return `Class average: ${classAverage}. Your grade: ${grade}. You failed the course.`;
  } else {
    return `Class average: ${classAverage}. Your grade: ${grade}. You passed the course.`;
  }
}

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
