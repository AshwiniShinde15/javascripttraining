let claimDecisions = [];
claimDecisions.push("APPROVED");
console.log("Claim 1 processed:", claimDecisions[claimDecisions.length - 1]);

claimDecisions.push("APPROVED");
console.log("Claim 2 processed:", claimDecisions[claimDecisions.length - 1]);

claimDecisions.push("REJECTED");
console.log("Claim 3 processed:", claimDecisions[claimDecisions.length - 1]);

claimDecisions.push("APPROVED");
console.log("Claim 4 processed:", claimDecisions[claimDecisions.length - 1]);

claimDecisions.push("PENDING_DOCS");
console.log("Claim 5 processed:", claimDecisions[claimDecisions.length - 1]);

console.log("\nProcessing Summary:");

//The complete decisions array
console.log("All claim decisions:", claimDecisions);

//total claim proceed
console.log("Total claims processed:", +claimDecisions.length);

if (claimDecisions.indexOf("REJECTED")) {
  console.log("Contains rejections: Yes " + claimDecisions.indexOf("REJECTED"));
}
