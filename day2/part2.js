const fs = require('fs');

const inputs = fs.readFileSync('./input.txt').toString().trim().split('\n');

let x = 0;
let y = 0;
let aim = 0;

inputs.forEach(input => {
  const [command, arg] = input.split(' ');
  const value = Number(arg);

  switch(command) {
    case 'forward':
      x += value;
      y += aim * value;
      break;
    case 'up':
      aim -= value;
      break;
    case 'down':
      aim += value;
      break;
  }
});

console.log('x: ', x)
console.log('y: ', y)

console.log('res: ', x * y)
