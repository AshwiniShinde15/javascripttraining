//1. Create an object called `payrollRun` with:
//    - name: "March Payroll"
//    - totalEmployees: 5
//    - processedEmployees: 0

//2. Add these methods to the object:
//    - `start()` - prints "Running payroll: [name]"
//    - `process()` - increments processedEmployees and prints the count
//    - `getReport()` - prints a summary with completion rate

// 3. Call the methods to:
//    - Start the run
//    - Process 3 employees
//    - Generate the report

let payrollRun = {
  name: "March Payroll",
  totalEmployees: 5,
  processedEmployees: 0,

  start() {
    console.log("Running payroll:" + this.name);
  },

  process() {
    if (this.processedEmployees < this.totalEmployees) {
      this.processedEmployees++;
      console.log("✓ Processed Employees!: " + this.processedEmployees);
    } else {
      console.log("All employees are already processed!");
    }
  },
  getReport() {
    let completionRate = (this.processedEmployees / this.totalEmployees) * 100;
    //console.log("\nPayroll Report");
    console.log("\nPayroll Report:");
    console.log("Name:" + this.name);
    console.log("Total employees:", this.totalEmployees);
    console.log(
      "Processed:",
      this.processedEmployees + " " + (completionRate + "%"),
    );
    let remainingemp = this.totalEmployees - this.processedEmployees;
    console.log("Remaining:", remainingemp);
  },
};

console.log("Payroll Run with Methods  ");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━");

payrollRun.start();
payrollRun.process();
payrollRun.process();
payrollRun.process();
payrollRun.getReport();

// 4. Create a second object `leaveRequest` with methods:
//    - `submit()` - sets status to "SUBMITTED" and records submit time
//    - `approve()` - sets status to "APPROVED" and calculates processing time
//    - `reject(reason)` - sets status to "REJECTED" with reason
//    - Properties: type, status, submitTime

let leaveRequest = {
  type: "Sick leave",
  status: "PENDING",
  approveTime: null,
  processingTime: null,
  submitTime: null,

  submit() {
    console.log(" ");
    this.status = "SUBMITTED";

    console.log("✓ Submitted:", this.type);
    console.log(" Status:", this.status);
  },
  approve() {
    if (this.status !== "SUBMITTED") {
      console.log("Please submit the leave request first.");
      return;
    }
    this.status = "APPROVED";
    this.submitTime = new Date();
    this.approveTime = new Date();
    this.processingTime = this.approveTime - this.submitTime;
    console.log("✓ Sick Leave APPROVED");
    console.log("Processing time:", this.submitTime.toLocaleString());
  },
  reject(reason) {},
};

leaveRequest.submit();
leaveRequest.approve();
console.log("Submit Time:", leaveRequest.submitTime);
console.log("Processing Time:", leaveRequest.processingTime, "milliseconds");
