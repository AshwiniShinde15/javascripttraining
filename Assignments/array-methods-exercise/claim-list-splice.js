let claimList = ["Auto", "Home", "Health", "Travel", "Life"];

//Print original array
console.log("Original claim list: ", claimList);

//removed element and store in variable

let removedElement = claimList.splice(2, 1);
console.log("\nStep 1 - Remove 1 element at index 2:");
console.log("Removed:", removedElement);
console.log("Array now:", claimList);

//Insert element at index 1

console.log(
  "\nStep 2 - Insert 'Marine' and 'Pet' at index 1 (nothing removed):",
);
claimList.splice(1, 0, "Pet");
claimList.splice(1, 0, "Marine");

console.log("Array now:", claimList);

//Replace index 0 with Motorcycle
console.log("\nStep 3 - Replace element at index 0 with 'Motorcycle':");
claimList.splice(0, 1, "Motorcycle");
console.log("Array now:", claimList);
