let premiumAmounts = [850, 1200, 640, 990, 1450, 720, 1100];
let totalAmount = premiumAmounts.length;

console.log("Premium Amounts Analysis");

console.log("Amounts:", premiumAmounts);
console.log("Total amounts:", totalAmount);

console.log("First amount:", premiumAmounts[0]);
console.log("Last amount:", premiumAmounts[totalAmount - 1]);

//Checking for specific amounts...
console.log("Checking for specific amounts...");
for (let i = 0; i < totalAmount; i++) {
  if (premiumAmounts[i] == 990) {
    console.log(
      "Amount 990 found: Yes",
      premiumAmounts[i] + " (at index " + premiumAmounts.indexOf(990, i) + ")",
    );
  }
}
