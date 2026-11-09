const clinicName = "Sunrise Health Clinic";
const ApiURL = "https://api.sunrisehealth.example.com";
let environmentName = "Staging";
let currentNurseOnDuty = "Amara Okafor";
let date = "2026-08-06";
let remindersEnabled = "true";

console.log("========================================");
console.log("       CLINIC SYSTEM CONFIGURATION      ");
console.log("========================================");
if (remindersEnabled) {
  console.log("Clinic Name:", clinicName);
  console.log("API URL:", ApiURL);
  console.log("Environment:", environmentName);
  console.log("Nurse on Duty:", currentNurseOnDuty);
  console.log("Date:", date);
  console.log("Reminders Enabled:", remindersEnabled);
}
console.log("=====================================");
console.log("Shift change. Nurse on Duty: Daniel Reyes");
