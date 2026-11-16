let satisfactionScores = [85, 92, 78, 95, 88, 73, 90, 87];

let totalOfAllScores = 0;
for (let i = 0; i < satisfactionScores.length; i++) {
  totalOfAllScores += satisfactionScores[i];
}

console.log("    Patient Satisfaction Analysis    ");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
console.log("\nCalculating statistics...");
console.log("\nScores:" + satisfactionScores);
console.log("Total of all scores: " + totalOfAllScores);

let averageScore = totalOfAllScores / satisfactionScores.length;
console.log("Average " + averageScore);

let highestScore = satisfactionScores[0];
for (let i = 1; i < satisfactionScores.length; i++) {
  if (satisfactionScores[i] > highestScore) {
    highest = satisfactionScores[i];
  }
}
console.log("Highest " + highestScore);

let lowestScore = satisfactionScores[0];
for (let i = 1; i < satisfactionScores.length; i++) {
  if (satisfactionScores[i] < lowestScore) {
    lowestScore = satisfactionScores[i];
  }
}
console.log("Lowest " + lowestScore);
