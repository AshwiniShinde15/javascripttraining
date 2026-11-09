//1. Create two variables:
//    - `status` with value `"COMPLETED"`
//    - `complications` with value `0`

let status = "COMPLETED";
let complications = 0;

console.log("Status:", status);
console.log("Complications:", complications);

//2. Write an if-else statement that:
//    - Checks if (status is "COMPLETED" OR "RESCHEDULED") AND complications equals 0
//    - If yes, print: `"Appointment closed out cleanly"`
//    - If no, print: `"Appointment needs follow-up"`

if (
  (status === "COMPLETED" || status == "RESCHEDULED") &&
  complications === 0
) {
  console.log("Appointment closed out cleanly");
} else {
  console.log("Appointment needs follow-up");
}
