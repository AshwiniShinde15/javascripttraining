//Use `forEach` to print `"Starting: <type>"` for every entry in `appointmentTypes`.

let appointmentTypes = [
  "Annual Physical",
  "Dental Checkup",
  "Eye Exam",
  "Vaccination",
  "Follow-up Visit",
];

appointmentTypes.forEach((appointmentTypes) => {
  console.log("Starting:", appointmentTypes);
});

//Use `forEach` with the index parameter to print a numbered list:
// `"1. Annual Physical"`, `"2. Dental Checkup"`, and so on.
//let index;
appointmentTypes.forEach((appointmentTypes, index) => {
  console.log(`${index + 1}. ${appointmentTypes}`);
});

//Given this array of visit objects, use `forEach` to print a report. Use `✓` for `"COMPLETED"` and `✗`
// for anything else, in the format `<symbol> <patientName> - <appointmentType>: <status> (<duration>m)`.
let todaysAppointments = [
  {
    patientName: "Aisha Khan",
    appointmentType: "Annual Physical",
    status: "COMPLETED",
    duration: 30,
  },
  {
    patientName: "Raj Verma",
    appointmentType: "Dental Checkup",
    status: "CANCELLED",
    duration: 20,
  },
  {
    patientName: "Meera Nair",
    appointmentType: "Eye Exam",
    status: "COMPLETED",
    duration: 25,
  },
  {
    patientName: "Kabir Malhotra",
    appointmentType: "Vaccination",
    status: "COMPLETED",
    duration: 15,
  },
];

todaysAppointments.forEach(appointment => {
    let symbol = appointment.status === "COMPLETED" ? "✓" : "✗";

    console.log(
        `${symbol} ${appointment.patientName} - ${appointment.appointmentType}: ${appointment.status} (${appointment.duration}m)`
    );
});
