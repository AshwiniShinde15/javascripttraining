//1. Create 3 employee objects with these properties:
//    - employeeId
//    - department
//    - role
//2. Store all 3 employees in an array called `employees`

let employee1 = {
  employeeId: "EMP-101",
  department: "Sales",
  role: "Manager",
};

let employee2 = {
  employeeId: "EMP-102",
  department: "Sales",
  role: "Associate",
};
let employee3 = {
  employeeId: "EMP-103",
  department: "Support",
  role: "Manager",
};

let employees = [employee1, employee2, employee3];

console.log("    Employee Directory   ");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━");

for (let i = 0; i < employees.length; i++) {
  console.log("Employee ID:" + employees[i].employeeId);
  console.log("Department :" + employees[i].department);
  console.log("Role :" + employees[i].role);
  console.log("");
}

console.log("Summary:");
console.log("Total employees:", employees.length);

let managerCount = 0;
let associateCount = 0;

for (let i = 0; i < employees.length; i++) {
  if (employees[i].role === "Manager") managerCount++;

  if (employees[i].role === "Associate") associateCount++;
}
console.log("Associate:", associateCount);
console.log("Manager:", managerCount);
