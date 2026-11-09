//1. Create an array called `appointments` with these values:
//    - "Annual checkup"
//    - "Dental cleaning"
//    - "Eye exam"
//    - "Vaccination"
//    - "Blood test"

//2. Use a for loop to print each appointment with:
//    - Appointment number (starting from 1, not 0!)
//    - Appointment name
// let arrayLenght = appointments.length;

let appointments = [
  "Annual checkup",
  "Dental cleaning",
  "Eye exam",
  "Vaccination",
  "Blood test",
];

console.log("  Today's Clinic Schedule    ");
console.log("--------------------------------");

for (let i = 0; i < appointments.length; i++) {
  console.log(i + 1, appointments[i]);
}
console.log("Total appointments:", appointments.length);

//## Exercise 1.5: Refactor with for...of Loop
let i = 0;
console.log("");
console.log(" Today's Clinic Schedule (for...of version)  ");
console.log("----------------------------------------------");
for (let number of appointments) {
  console.log(i + 1, number);
  i++;
}

console.log("Total appointments:", appointments.length);
