//1. Given `let complaintReason = "";`,
// write an if-else that prints `"Complaint on file"` or `"No complaint"` based on truthiness.

let complaintReason = "";

if (complaintReason) {
  console.log("1.Complaint on file");
} else {
  console.log("1.No complaint");
}

//2. Given `let appointmentType;` (undefined), use `||` to default it to
//  `"General Consultation"` and print the result.

let appointmentType;

appointmentType = appointmentType || "General Consultation";
console.log("2.Appointment Type:", appointmentType);

//3. Given `let symptoms = [];` (an empty array), write the **wrong** check (`if (symptoms)`) and show it incorrectly reports "has symptoms."
// Then write the **correct** check using `.length > 0`.

let symptoms = [];
let temp = symptoms.length;
//Wrong check
if (symptoms) {
  console.log("3.Wrong check : Has symptoms!");
}

//correct check
if (temp > 0) {
  console.log("3.Correct check : Has symptoms");
} else {
  console.log("3.Correct check: No symptoms");
}

//4. Given `let complications = 0;`, write the **wrong** check (`if (complications)`) and show it incorrectly reports "no complications" even when the count is a real, valid zero.
//  Then write the **correct** check using `> 0`.

let complications = 0;
//wrong check
if (complications) {
  console.log("4. wrong check : complications found");
} else {
  console.log("4. wrong check : No complications found");
}

//correct check
if (complications > 0) {
  console.log("4: Correct Check : complications");
} else {
  console.log("4: Correct Check : No complications");
}

//5. Given `let followUpDays = 0;` (0 means "follow up the same day"), default it to `7` using `||` and then using `??`.
// Print both and explain the difference in a comment.
let followUpDays = 0;
let followUpDaysResult1 = followUpDays || 7;

console.log("5.Using || :", followUpDaysResult1);

let followUpDaysResult2 = followUpDays ?? 7;
console.log("5.Using ?? :", followUpDaysResult2);
