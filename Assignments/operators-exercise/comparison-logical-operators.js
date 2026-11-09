//Create a variable `age` with value `25`

let age = 25;

// Write an if-else statement that:
//    - Checks if age is >= 18 AND <= 65
//    - If yes, print: `"Eligible for the screening (18-65)"`
//    - If no, print: `"Outside the screening's eligible age range"`

if (age >= 18 && age <= 65) {
  console.log("Eligible for the screening (18-65)");
} else {
  console.log("Outside the screening's eligible age range");
}

// Try running your code with these values:
// - `18` -> Eligible (boundary)
// - `17` -> Not eligible (too young)
// - `65` -> Eligible (boundary)
// - `66` -> Not eligible (too old)
// - `25` -> Eligible (in range)

age = 18;
if (age >= 18 && age <= 65) {
  console.log("Eligible (boundary)");
} else {
  console.log("Outside the screening's eligible age range");
}

age = 17;
if (age >= 18 && age <= 65) {
  console.log("Not eligible (too young)");
} else {
  console.log("Outside the screening's eligible age range");
}

age = 65;
if (age >= 18 && age <= 65) {
  console.log(" Eligible (boundary)");
} else {
  console.log("Outside the screening's eligible age range");
}

age = 66;
if (age >= 18 && age <= 65) {
  console.log("Not eligible (too old)");
} else {
  console.log("Outside the screening's eligible age range");
}

age = 25;

if (age >= 18 && age <= 65) {
  console.log("Eligible (in range)");
} else {
  console.log("Outside the screening's eligible age range");
}
