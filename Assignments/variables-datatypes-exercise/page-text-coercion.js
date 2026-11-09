//1. Start with these values:
let consultationFeeText = "500";
let labFeeText = "250";
let discount = 50;

//2. Write your prediction as a comment, then print `consultationFeeText + labFeeText`.
console.log("--- Adding two page values ---");
console.log(
  "consultationFeeText + labFeeText →",
  `${consultationFeeText + labFeeText}`,
);
console.log("Type of consultationFeeText :", typeof consultationFeeText);
//Here consultationFeeText + labFeeText is type of string as its declared in "500"

//3.Fix it with `Number()` so the total is `750`, and print it.
//Suppose i remove "" and declred then it will add two number
consultationFeeText = 500;
labFeeText = 250;
let total = consultationFeeText + labFeeText;
console.log("Fixed total → ", `${total}`);

//4. Write predictions, then print `consultationFeeText + discount` and `consultationFeeText - discount`.

let consultationFeeText1 = "500";
let discount1 = "50";

console.log("\n");
console.log("--- Mixing a string and a number ---");
console.log(
  "consultationFeeText + discount → ",
  `${consultationFeeText1 + discount1}`,
);

console.log(
  "consultationFeeText - discount → ",
  `${consultationFeeText - discount}`,
);

//5. Given `let displayedTotal = "750";` and `let expectedTotal = 750;`,
// print the result of `==`, `===`, and `Number(displayedTotal) === expectedTotal`.
// Write a comment saying which one a test should use.
let displayedTotal = "750";
let expectedTotal = 750;

console.log(
  "displayedTotal =expectedTotal →",
  (displayedTotal = expectedTotal),
);

console.log("");
console.log(" --- Comparing page text to a number --- ");
console.log(
  "displayedTotal == expectedTotal →",
  displayedTotal == expectedTotal,
);

console.log(
  "displayedTotal === expectedTotal →",
  displayedTotal === expectedTotal,
);

console.log(
  "Number(displayedTotal) === expectedTotal →",
  Number(displayedTotal) === expectedTotal,
);

//6. Given `let waitTimeText = "about 20 mins";`, convert it with `Number()`,
// print the result, and use `Number.isNaN()` in an `if` to print `"Wait time is not a valid number"`.
let waitTimeText = "about 20 mins";

console.log("");
console.log("--- Text that isn't a number ---");
console.log("Number(waitTimeText) → ", Number(waitTimeText));

let waitTime = Number(waitTimeText);
if (Number.isNaN(waitTime)) {
  console.log("Wait time is not a valid number");
}

//7. Store `0.1 + 0.2` in a variable called `copay`. Print it, print whether it `=== 0.3`,
// and print whether `copay.toFixed(2) === "0.30"`.
let copay = `${0.1 + 0.2}`;

console.log("");
console.log("--- Decimals ---");
console.log("0.1 + 0.2 →", copay);
console.log("copay === 0.3 →", copay === 0.3); //copay === 0.3 returns false because the two numbers are not exactly equal.

let fixedTo = copay.fixed(2);
console.log("copay.toFixed(2) === →", fixedTo === "0.30"); ///Ask this to ketan
