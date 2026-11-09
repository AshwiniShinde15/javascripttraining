let patientsWaiting = 4;
let currentToken = 12;

const maxPatientsPerDay = 40;
const clinicPhone = "022-4000-1234";
const clinicCode = 0;

console.log(
  "Clinic phone:",
  clinicPhone + "\nMax patients per day:",
  maxPatientsPerDay + "\nPatients waiting:",
  patientsWaiting + "\nCurrent token:",
  currentToken,
);
console.log(" ");
patientsWaiting++;
currentToken++;
console.log(
  "After update:",
  "\nPatients waiting:",
  patientsWaiting + "\nCurrent token:",
  currentToken,
);
