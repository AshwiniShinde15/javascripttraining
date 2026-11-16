let appointmentTypes = [
  "Checkup",
  "Dental",
  "Eye Exam",
  "Vaccination",
  "Blood Test",
  "Follow-up",
];
let appointmentOutcomes = [
  "COMPLETED",
  "CANCELLED",
  "COMPLETED",
  "CANCELLED",
  "COMPLETED",
  "CANCELLED",
];

console.log("   Daily Appointment Report");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");

for (let i = 0; i < appointmentTypes.length; i++) {
  console.log(
    i + 1 + ". " + appointmentTypes[i] + " - " + appointmentOutcomes[i],
  );
}

console.log("\nCancelled Appointments (need rebooking):");
for (let i = 0; i < appointmentTypes.length; i++) {
  if (appointmentOutcomes[i] === "CANCELLED") {
    console.log(" - " + appointmentTypes[i]);
  }
}
