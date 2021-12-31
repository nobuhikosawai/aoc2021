const fs = require('fs');

const inputs = fs.readFileSync('./input.txt').toString().trim().split('\n');

let x = 0;
let y = 0;

inputs.forEach(input => {
  const [command, arg] = input.split(' ');
  const value = Number(arg);

  switch(command) {
    case 'forward':
      x += value;
      break;
    case 'up':
      y -= value;
      break;
    case 'down':
      y += value;
      break;
  }
});

console.log('x: ', x)
console.log('y: ', y)

console.log('res: ', x * y)
