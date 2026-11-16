let score = "85";

console.log("Loan Score:", score);
if (score >= 90) {
  console.log("Grade: A (Excellent)");
} else if (score > (80 || 89)) {
  console.log("Grade: B (Good)");
} else if (score > (70 || 79)) {
  console.log("Grade: C (Average)");
} else if (score > (60 || 69)) {
  console.log("Grade: D (Pass)");
} else if (score < 60) {
  console.log("Grade: F (Fail)");
}
