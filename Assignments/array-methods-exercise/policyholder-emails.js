let policyholderEmails = [
  "alice@example.com",
  "ben@example.com",
  "chloe@example.com",
];

let emailCount = policyholderEmails.length;

console.log("Policyholder Email Management");
console.log("Initial emails:", +policyholderEmails);
console.log("Count:", +emailCount);

//Add "dev@example.com" to the END
let addNewEmailAtEnd = policyholderEmails.push("dev@example.com");
console.log("After adding dev@example.com to end:", +addNewEmailAtEnd);
console.log(policyholderEmails);

//Add "admin@example.com" to the BEGINNING

let addNewEmailAtBegining = policyholderEmails.unshift("admin@example.com");
console.log(
  "After adding admin@example.com to beginning:",
  +addNewEmailAtBegining,
);
console.log(policyholderEmails);

//Remove the last email
console.log("After removing last email:", policyholderEmails.pop());
console.log(policyholderEmails);

//Remove the first email
console.log("After removing last email:", policyholderEmails.shift());
console.log(policyholderEmails);

//final count
console.log("Final count:", emailCount);
