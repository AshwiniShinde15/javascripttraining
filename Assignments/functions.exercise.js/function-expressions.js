console.log(isWithinLimit(5000)); // Output is true as function can be called before it is defined

//function declaration
function isWithinLimit(amount) {
  return amount < 10000;
}

//function expression
const isPositiveAmount = function (amount) {
  return amount > 0;
};
console.log(isPositiveAmount(5000)); // Output is true as function can be called after it is defined
console.log(isPositiveAmount(-200)); // Output is true as function can be called after it is defined
console.log(isWithinLimit(25000)); // Output is true as function can be called after it is defined
