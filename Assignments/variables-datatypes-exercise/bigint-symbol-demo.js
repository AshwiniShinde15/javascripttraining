//**Part A - BigInt:**
let Number1 = Number.MAX_SAFE_INTEGER;

console.log("Max :", Number1);
console.log("max + 1: ", Number1 + 1);
console.log("max + 2: ", Number1 + 2);
console.log("max + 3: ", Number1 + 3);

bigMax = 9007199254740991n;
console.log("bigMax + 1n: ", Number1 + 1);
console.log("bigMax + 2n: ", Number1 + 2);
console.log("bigMax + 3n: ", Number1 + 3);

console.log("Type of bigMax:", typeof bigMax);

//**Part B - Symbol:**
symbol1 = "labResultId";
symbol2 = "labResultId";

if (symbol1 === symbol2) {
  console.log("sym1 === sym2: false");
}

console.log("Type of symbol1", typeof symbol1);
console.log("Type of symbol2:", typeof symbol2);

console.log("Description of symbol1:", symbol1);
console.log("Description of symbol2:", symbol2);
