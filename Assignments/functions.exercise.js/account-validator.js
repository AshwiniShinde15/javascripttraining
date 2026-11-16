function validateAccountNumber(accountNumber) {
  if (accountNumber.startsWith("ACC-") && accountNumber.length == 7) {
    return "VALID";
  } else {
    return "INVALID";
  }
}
console.log("ACC-101:", validateAccountNumber("ACC-101")); // Output: "VALID"
console.log("ACC-1:", validateAccountNumber("ACC-1")); // Output: "INVALID"
console.log("1001:", validateAccountNumber("1001")); // Output: "INVALID"
