//1. Create an object called `leaveRequest` with these properties:
let leaveRequest = {
  id: "LR-001",
  type: "Sick Leave",
  status: "PENDING",
  days: 2,
};

//2. Print each property using dot notation
console.log("  Leave Request Details  ");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━");
console.log(
  leaveRequest.id,
  leaveRequest.type,
  leaveRequest.status,
  leaveRequest.days,
);

//3. Add a new property `approver` with value "Priya Sharma"
leaveRequest.approver = "Priya Sharma";
console.log("Adding Approver:", leaveRequest);

//Modify the `status` to "APPROVED"
leaveRequest.status = "APPROVED";
console.log("Changing Status:", leaveRequest);

//5. Print the complete object
console.log("Printing complete Object", leaveRequest);
