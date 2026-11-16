function generateAccountId(firstName, lastName) {
  return firstName.slice(0, 2) + lastName.slice(0, 2);
}

function generateEmail(firstName, lastName) {
  return (
    firstName.toLowerCase() + "." + lastName.toLowerCase() + "@example.com"
  );
}

function generateTempPin(seed) {
  return seed.toString().slice(-4);
}

console.log("Account ID: " + generateAccountId("John", "Doe")); // "JoDo"
console.log("Email: " + generateEmail("John", "Doe")); // "john.doe@example.com"
console.log("Temporary PIN: " + generateTempPin(42)); // "42"
