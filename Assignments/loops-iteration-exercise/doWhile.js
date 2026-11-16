function bookAppointment() {
  return Math.random() > 0.7;
}

let appointmentType = "MRI Scan";
let attempts = 0;
let maxAttempts = 5;
let bookingConfirmed = false;

console.log("Appointment Booking Retry");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━");

console.log(`Booking: ${appointmentType}`);
console.log(`Max attempts: ${maxAttempts}`);

do {
  attempts++;
  console.log("\nAttempt " + attempts + "...");
  bookingConfirmed = bookAppointment();
  if (bookingConfirmed) {
    console.log("Booking CONFIRMED!");
  } else {
    console.log("Booking FAILED");
    console.log("Retrying...");
  }
} while (!bookingConfirmed && attempts < maxAttempts);
