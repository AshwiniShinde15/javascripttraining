let transactionID1 = "TXN - 101";
let amount1 = 5000;
let status1 = "APPROVED";

let transactionID2 = "TXN - 102";
let amount2 = 12000;
let status2 = "DECLINED";

let transactionID3 = "TXN - 103";
let amount3 = 800;
let status3 = "PENDING";

let transactionID4 = "TXN - 104";
let amount4 = 25000;

let transactionID5 = "TXN - 105";
let amount5 = 3000;

console.log("=============================================");

console.log("            Daily Transaction Report         ");
console.log("=============================================");

console.log(
  "Transaction 1:",
  transactionID1,
  "Amount:",
  amount1,
  "Status:",
  status1,
);
console.log(
  "Transaction 2:",
  transactionID2,
  "Amount:",
  amount2,
  "Status:",
  status2,
);
console.log(
  "Transaction 3:",
  transactionID3,
  "Amount:",
  amount3,
  "Status:",
  status3,
);
console.log(
  "Transaction 4:",
  transactionID4,
  "Amount:",
  amount4,
  "Status:",
  status1,
);
console.log(
  "Transaction 5:",
  transactionID5,
  "Amount:",
  amount5,
  "Status:",
  status1,
);

console.log("=============================================");

console.log("                  SUMMARY                    ");
console.log("=============================================");

console.log("Total Transactions: 5");
console.log("Approved: 3");
console.log("Declined: 1");
console.log("Pending: 1");
