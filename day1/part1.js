const fs = require('fs');

const inputs = fs.readFileSync('./input.txt').toString().split('\n').map(Number)

let count = 0;
let lastInput;

inputs.forEach((input) => {
  if(!lastInput) {
    lastInput = input
    return;
  }

  if (input > lastInput) {
    count++
  }
  lastInput = input
})


console.log(count)
