let claimQueue = [
  "Morning1",
  "Morning2",
  "Morning3",
  "Afternoon1",
  "Afternoon2",
  "Afternoon3",
];

let morningBatch = claimQueue.slice(0, 3);
console.log("Morning batch only (first 3):", morningBatch);

let afternoonBatch = claimQueue.slice(3, 6);
console.log("Afternoon batch only (last 3):", afternoonBatch);

let middleBatch = claimQueue.slice(2, 5);
console.log("Middle batch (index 2-5):", middleBatch);

//queue copy
let queueCopy = claimQueue.slice();
console.log("Full Copy", queueCopy);

//full
console.log("Original claim queue unchanged: ", claimQueue);
