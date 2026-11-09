//Exercise 6: Template Literals

//1. Create `firstName` and `lastName` variables and combine them into `fullName` using a template literal.

let firstName = "Aisha";
let lastName = "Khan";

console.log("Full Name:", firstName + " " + lastName);

//2. Build an `email` from the name using `.toLowerCase()` inside a template literal: `` `${firstName.toLowerCase()}.${lastName.toLowerCase()}@example.com` ``

let firstName1 = "Aisha";
let lastName1 = "Khan";

let email = `${firstName1.toLowerCase()}.${lastName1.toLowerCase()}@example.com`;

console.log("Email:", email);

//3. Create a multi-line template literal that prints a visit confirmation,
// including the patient's name, email, and appointment type.

let patientName = "Aisha Khan";
let emailId = "Aisha.Khan@example.com";
let appointmentType = "General Checkup";

console.log("=====================================================");
console.log("                VISIT CONFIRMATION                   ");
console.log("=====================================================");

console.log(
  "Paitent Name:",
  `${patientName}`,
  "\nEmail:",
  `${emailId}`,
  "\nAppoinment Type:",
  `${appointmentType}`,
);

console.log("=====================================================");

//4. Given a consultation fee of `500` and a lab fee of `250`,
// print the total using a calculation **inside** `${ }`.
let consultationFee = 500;
let labFee = 250;

console.log("\nTotal fee:", `${consultationFee + labFee}`);

//5. Build three pieces of test data from these values, and print them:
//    ```javascript
//    const baseUrl = "https://portal.sunrisehealth.example.com";
//    const patientId = "P-1001";
//    const visitDate = "2026-08-06";
//    ```
//    - The appointments page URL: `<baseUrl>/patients/<patientId>/appointments`
//    - A selector for the patient's row: `[data-patient-id="<patientId>"]`
//    - The message the page should show: `Appointment booked for <fullName> on <visitDate>`

const baseUrl = "https://portal.sunrisehealth.example.com";
const patientId = "P-1001";
const visitDate = "2026-08-06";

const fullName = "Aisha Khan";

console.log("\n       TEST DATA              ");
console.log("===============================");
let appointmentUrl = `${baseUrl}/patients/${patientId}/appointments.`;
console.log("URL:", appointmentUrl);

let dataPatientId = `[data-patient-id= "${patientId}"]`;

console.log("Selector:", dataPatientId);

let expectedMessage = `Appointment booked for ${fullName} on ${visitDate}>`;
console.log("Expected message:", expectedMessage);
