let waitTimes = [12, 18, 35, 8, 42];
let checkedCount = 0;
let totalPatients = waitTimes.length;

for (let i = 0; i < waitTimes.length; i++) {
  checkedCount++;
  console.log(`Patient ${i + 1}: ${waitTimes[i]} min`);
  if (waitTimes[i] > 30) {
    console.log("Over 30 minutes! Alerting the doctor.");
    break;
  }
}
console.log(`Checked ${checkedCount} of ${totalPatients} patients.`);
