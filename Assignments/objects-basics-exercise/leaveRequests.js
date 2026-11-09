//1. Create an array called `leaveRequests` with 5 request objects
// 2. Each request object should have:
//    - type (leave type)
//    - status ("APPROVED", "REJECTED", or "PENDING")
//    - days (number of days)

let leaveRequests = [
  {
    type: "Sick leave",
    status: "APPROVED",
    days: 2,
  },
  {
    type: "Casual Leave",
    status: "REJECTED",
    days: 1,
  },
  {
    type: " Earned Leave",
    status: "APPROVED",
    days: 5,
  },
  {
    type: " Unpaid Leave",
    status: "PENDING",
    days: 3,
  },
  {
    type: " Sick Leave",
    status: "APPROVED",
    days: 1,
  },
];

console.log("Leave Requests Report");
console.log("━━━━━━━━━━━━━━━━━━━━━━");

for (let i = 0; i < leaveRequests.length; i++) {
  console.log("" + leaveRequests[i].type);
  console.log("Status:" + leaveRequests[i].status);
  console.log("Days:" + leaveRequests[i].days);
}

//4. Calculate and print:
//    - Total requests
//    - Approved count
//    - Rejected count
//    - Pending count
//    - Approval rate (percentage)
//    - Total days requested

let TotalCount = leaveRequests.length;
console.log("");
console.log("           Statistics:            ");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
console.log("Total requests:", TotalCount);

let approveCount = 0;
let rejectCount = 0;
let pendingCount = 0;

for (let i = 0; i < leaveRequests.length; i++) {
  if (leaveRequests[i].status === "APPROVED") approveCount++;
  if (leaveRequests[i].status === "REJECTED") rejectCount++;
  if (leaveRequests[i].status === "PENDING") pendingCount++;
}

let approvePercentage = (approveCount / TotalCount) * 100;
let rejectPercentage = (rejectCount / TotalCount) * 100;
let pendingPercentage = (pendingCount / TotalCount) * 100;

console.log("APPROVED:", approveCount);
console.log("REJECTED:", rejectCount);
console.log("PENDING:", pendingCount);

console.log("");
console.log(`APPROVED: ${approveCount} (${approvePercentage}%)`);
console.log(`REJECTED: ${rejectCount} (${rejectPercentage}%)`);
console.log(`PENDING: ${pendingCount} (${pendingPercentage}%)`);

// let daylength = leaveRequests.days;
// let daysRequestedCount = daylength;
// console.log("lebhgt", daylength);

let totaldays = leaveRequests.reduce(
  (total, request) => total + request.days,
  0,
);

// for (let i = 0; i < leaveRequests.length; i++) {
//   for (let j = 0; j < leaveRequests.length; j++) {
//     daysRequestedCount = leaveRequests[i].days;
//     daysRequestedCount++;
//   }
// }

console.log("Total days requested:", totaldays);
