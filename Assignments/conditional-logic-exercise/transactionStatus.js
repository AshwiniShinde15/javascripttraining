let transactionStatus = "APPROVED";

if (transactionStatus === "APPROVED") {
  console.log("Transaction Status:", transactionStatus);
  console.log("Transaction approved");
} else if (transactionStatus === "PENDING") {
  console.log("Transaction pending");
} else if (transactionStatus === "DECLINED") {
  console.log("Transaction declined");
} else {
  console.log("Unknown transaction status");
}
