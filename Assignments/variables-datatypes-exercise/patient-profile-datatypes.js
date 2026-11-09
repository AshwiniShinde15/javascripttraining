let firstName = "Aisha";
let lastName = "Khan";
let patientId = 1001;
let age = 34;
let averageWaitTime = 12.5;
let isActive = true;
let hasInsurance = false;
let nextAppointment;
let referralNote = null;

console.log("       Patient Profile      ");
console.log("============================");

console.log(
  "Name:",
  firstName + "\nPatient ID:",
  patientId + "\nAge:",
  age + "\nAverage Wait Time:",
  averageWaitTime + "\nActive:",
  isActive + "\nHas Insurance:",
  hasInsurance + "\nNext Appointment:",
  nextAppointment + "\nReferral Note:",
  referralNote,
);

console.log("");
console.log("Type Check:");
console.log("First Name :", typeof firstName);
console.log("lastName:", typeof lastName);
console.log("PatientId:", typeof patientId);
console.log("age:", typeof age);
console.log("averageWaitTime:", typeof averageWaitTime);
console.log("isActive:", typeof isActive);
console.log("hasInsurance:", typeof hasInsurance);
console.log("nextAppointment:", typeof nextAppointment);
console.log("referralNote:", typeof referralNote);

console.log(" ");
age = "Thirthy four";
console.log("After reassigning age to a string:", typeof age);
