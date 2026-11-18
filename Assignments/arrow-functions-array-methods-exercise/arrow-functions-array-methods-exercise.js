// Exercise 1a: Convert this function
// function greetPatient(name) {
//   return "Hello, " + name;
// }

//Arrow function
const greetPatient = (name) => {
  return "Hello, " + name;
};

// Exercise 1b: Convert this function
// function isEligibleForVaccine(age) {
//   if (age >= 18) {
//     return true;
//   } else {
//     return false;
//   }
// }

//arrow functaion
const isEligibleForVaccine = (age) => (age >= 18 ? true : false);

// Exercise 1c: Convert this function
// function calculateBill(price, quantity) {
//   let total = price * quantity;
//   let tax = total * 0.1;
//   return total + tax;
// }

//arrow functaion
const calculateBill = (price, quantity) => {
  let total = price * quantity;
  let tax = total * 0.1;
  return total + tax;
};

//Printing result
console.log(greetPatient("Aisha")); // "Hello, Aisha"
console.log(isEligibleForVaccine(25)); // true
console.log(calculateBill(100, 3)); // 330
