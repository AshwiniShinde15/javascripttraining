function createLoanApplication(applicantName, amount = 5000, termMonths = 12) {
  return {
    applicantName: applicantName,
    amount: amount,
    termMonths: termMonths,
  };
}

console.log(createLoanApplication("Ashwini"));
console.log(createLoanApplication("Ashwini", 10000));
console.log(createLoanApplication("Ashwini", 50000, 25));
console.log(createLoanApplication("Ashwini", 9000, 90));
console.log(createLoanApplication("Edge Case", "")); // empty string Java cosidered emprty string as provided value
console.log(createLoanApplication("Edge Case", undefined)); // explicit undefined// Jave script considered undefined as not provided value so default value will be used
