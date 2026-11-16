let transactionStatus = "DECLINED";

switch (transactionStatus) {
  case "APPROVED":
    console.log("Transaction approved");
    break;
  case "DECLINED":
    console.log("Transaction declined");
    break;
  case "PENDING":
    console.log("Transaction pending");
    break;
  case "ON_HOLD":
    console.log("Transaction on hold - review required");
  case "UNKNOWN":
    console.log("Unknown transaction status");
}
