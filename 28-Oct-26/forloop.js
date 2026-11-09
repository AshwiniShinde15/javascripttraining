let empIds = [342, 42, 523, 53, 56, 2523];

console.log("using for loop:");
for (let i = 0; i < empIds.length; i++) {
  console.log(empIds[i]);
}
console.log("using for of loop:");
for (let empid of empIds) {
  if (empid === 42) {
    continue;
  }
  console.log(empid);
}
