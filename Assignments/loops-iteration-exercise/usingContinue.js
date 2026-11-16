let temperatures = [98.6, 0, 101.2, 99.1, 0, 102.4];
let total = 0;
let readingsUsed = 0;

console.log("Temperature Readings:");

for (let i = 0; i < temperatures.length; i++) {
  if (temperatures[i] === 0) {
    console.log(
      `Reading ${i + 1}: ${temperatures[i]} - ` + "not taken, skipping",
    );

    continue;
  } else {
    console.log(`Reading ${i + 1}: ${temperatures[i]}`);
    total = total + temperatures[i];
    readingsUsed++;
  }
}

let average = total / readingsUsed;
console.log(`\nTotal readings used: ${readingsUsed} of ${temperatures.length}`);
console.log(`\nAverage temperature: ${average.toFixed(1)}`);
