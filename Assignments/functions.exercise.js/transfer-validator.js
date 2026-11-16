function validateTransferNested(fromAccount, toAccount, amount) {
  if (fromAccount == "") {
    console.log("From account required");
  }
  if (toAccount == "") {
    console.log("To account required");
  }
  if (amount > 0) {
    console.log("Amount must be positive");
  }
}

console.log(
  "validateTransferNested " + validateTransferNested("", "ACC-2002", 500),
); // From account required
console.log(
  "validateTransferNested " + validateTransferNested("ACC-1001", "", 500),
); // To account required
console.log(" " + validateTransferNested("ACC-1001", "ACC-2002", -500)); // Amount must be positive

//
function validateTransferEarly(fromAccount, toAccount, amount) {
  if (fromAccount == "") {
    //console.log("From account required");
    return "From account required";
  }
  if (toAccount == "") {
    // console.log("To account required");
    return "To account required";
  }

  if (amount <= 0) {
    //console.log("Amount must be positive");
    return "Amount must be positive";
  }
  return true;
}

console.log(
  '\nvalidateTransferEarly("","ACC-2002",500) → ' +
    validateTransferEarly("", "ACC-2002", 500),
); // From account required
console.log(
  'validateTransferEarly("ACC-1001", "", 500) → ' +
    validateTransferEarly("ACC-1001", "", 500),
); // To account required
console.log(
  'validateTransferEarly("ACC-1001", "ACC-2002", -500) → ' +
    validateTransferEarly("ACC-1001", "ACC-2002", -500),
); // Amount must be positive
