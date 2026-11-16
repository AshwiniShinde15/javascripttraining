let employeeRecord = {
  employeeId: "EMP-101",
  department: "Sales",
  tempNote: "temporary",
  debugInfo: "some debug data",
};

console.log("    Archive Employee Record    ");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
console.log("Before cleanup:", employeeRecord);

// Deleting the 'tempNote' property
delete employeeRecord.tempNote;
console.log("After deleting 'tempNote':", employeeRecord);

// Deleting the 'debugInfo' property
delete employeeRecord.debugInfo;
console.log("\nAfter deleting 'debugInfo':", employeeRecord);

// printing object after cleanup
console.log("Final employee record after cleanup:", employeeRecord);

//Does 'tempNote' exist? false
console.log("\nDoes 'tempNote' exist?" + " " + ("tempNote" in employeeRecord));
//Does 'employeeId' exist? true
console.log(
  "Does 'employeeId' exist?" + " " + ("employeeId" in employeeRecord),
);
