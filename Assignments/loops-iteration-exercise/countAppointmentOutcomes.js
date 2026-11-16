appointmentStatuses = [
  "COMPLETED",
  "COMPLETED",
  "CANCELLED",
  "COMPLETED",
  "RESCHEDULED",
  "COMPLETED",
  "CANCELLED",
  "COMPLETED",
];

console.log("     Appointment Outcomes    ");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━");

console.log("Counting outcomes...");
console.log("\nStatistics:");

//Use a for loop to count
let Totalappointments = 0;

for (let i = 0; i < appointmentStatuses.length; i++) {
  Totalappointments++;
}
console.log("Total appointments: " + Totalappointments);

let completedCount = 0;
for (let i = 0; i < appointmentStatuses.length; i++) {
  if (appointmentStatuses[i] === "COMPLETED") {
    completedCount++;
  }
}
console.log("Completed:", completedCount);

let cancelledCount = 0;
for (let i = 0; i < appointmentStatuses.length; i++) {
  if (appointmentStatuses[i] === "CANCELLED") {
    cancelledCount++;
  }
}
console.log("Cancelled:", cancelledCount);

let rescheduledCount = 0;
for (let i = 0; i < appointmentStatuses.length; i++) {
  if (appointmentStatuses[i] === "RESCHEDULED") {
    rescheduledCount++;
  }
}
console.log("Rescheduled:", rescheduledCount);
