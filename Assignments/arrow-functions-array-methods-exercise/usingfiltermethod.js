let allVisits = [
    { visitType: "Annual Physical",  status: "COMPLETED", duration: 30, priority: "high"   },
    { visitType: "Dental Checkup",   status: "CANCELLED", duration: 20, priority: "medium" },
    { visitType: "Eye Exam",         status: "COMPLETED", duration: 25, priority: "high"   },
    { visitType: "Vaccination",      status: "COMPLETED", duration: 15, priority: "low"    },
    { visitType: "Physical Therapy", status: "COMPLETED", duration: 45, priority: "high"   },
    { visitType: "Follow-up Visit",  status: "CANCELLED", duration: 20, priority: "high"   }
];

//1. **4a:** `filter` to get only `"CANCELLED"` visits. Print each `visitType`
let visitCancelled = allVisits.filter(visit => {
return visit.status==="CANCELLED";
});
let array = Array.from(visitCancelled);
console.log(array);
visitCancelled.forEach(visit => {
    
    console.log("cancelled:",visit.visitType);
})
