const fs = require('fs');

const inputs = fs.readFileSync('./input.txt').toString().trim().split('\n').map(Number)

const slidingWindow = [];
let prevSum = 0;
let count = 0;

const sum = (arr) => arr.reduce((acc, val) => acc + val, 0)

inputs.forEach(input => {
  if (slidingWindow.length < 3) {
    slidingWindow.push(input);

    if (slidingWindow.length === 3) {
      prevSum = sum(slidingWindow)
    }
    return;
  }

  slidingWindow.shift();
  slidingWindow.push(input)

  const currentSum = sum(slidingWindow)

  if (currentSum > prevSum) {
    count++
  }

  prevSum = currentSum
})

console.log(count)

