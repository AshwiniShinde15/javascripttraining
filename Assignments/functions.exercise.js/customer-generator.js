function generateCustomer(firstName, lastName) {
  return {
    name: firstName + " " + lastName,
    accountId: generateAccountId(firstName, lastName),
    email: generateEmail(firstName, lastName),
    balance: 0,
    isActive: true,
  };
}

function generateAccountId(firstName, lastName) {
  return firstName.slice(0, 5) + lastName.slice(0, 5);
}

function generateEmail(firstName, lastName) {
  return (
    firstName.toLowerCase() + "." + lastName.toLowerCase() + "@example.com"
  );
}

console.log("Customer 1:", generateCustomer("John", "Doe"));
console.log("Customer 2:", generateCustomer("Jane", "Smith"));
