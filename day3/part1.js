const { readRowSyncAsString } = require('./util');

const inputs = readRowSyncAsString('./input.txt');
const numOfRecords = inputs.length;

const sums = inputs.reduce((acc, data) => {
  const nums = data.split('').map(Number)

  return nums.map((n, i) => {
    return n + (acc[i] ?? 0)
  })
}, []);

const threshold = numOfRecords * 0.5;

const gamma = parseInt(sums.map(s => {
  if (s > threshold) {
    return 1;
  }
  return 0;
}).join(''), 2);

const epsilon = 2 ** (sums.length) - 1 - gamma;

console.log('gamma: ', gamma);
console.log('epsilon: ', epsilon);
console.log('result: ', gamma * epsilon);
