// Snippet A
let branchCode = "MUM-01";
if (true) {
  let branchCode = "PUN-02";
  console.log("Inside:", branchCode);
}
console.log("Outside:", branchCode);

//Answer : Inside : PUN-02   (Bec let scope is block scope)
//         Outside: MUM-01

// Snippet B
function showServiceFee() {
  console.log("Fee before:", serviceFee);
  var serviceFee = 250;
  console.log("Fee after:", serviceFee);
}
showServiceFee();

//Answer : serviceFee is not defined /undefined (Bec we are printing values serviceFee which is not declred first)

// Snippet C
function checkLimitWithVar() {
  if (true) {
    var dailyLimit = 50000;
  }
  console.log("Limit with var:", dailyLimit);
}
checkLimitWithVar();

//Answer : Limit with var : 50000 (bec var scope is function scope)

// Snippet D
function checkLimitWithLet() {
  if (true) {
    let dailyLimit = 50000;
  }
  console.log("Limit with let:", dailyLimit);
}
checkLimitWithLet();

//Answer : dailyLimit define as let data type and let scope is block scope  means if block scope here so it thro error under
//underfine varibale dailyLimit
