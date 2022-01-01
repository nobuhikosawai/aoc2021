const { readRowSyncAsString } = require('./util');

const inputs = readRowSyncAsString('./input.txt').map(v => [...v].map(Number));
const numOfBits = inputs[0].length;

const recordToNum = (record) => {
  return parseInt(record.map(r => r.toString()).join(''), 2);
}

const getRatingRecord = (type) => {
  let index = 0;
  let currentInputs = inputs;

  while(index < numOfBits) {
    let numOfOne = 0;
    let numOfZero = 0;
    currentInputs.forEach(input => {
      if(input[index] === 0) {
        numOfZero++;
      } else {
        numOfOne++;
      }
    });

    let filterValue;
    if (type === 'oxygen') {
      filterValue = numOfOne >= numOfZero ? 1 : 0;
    } else if (type === 'co2') {
      filterValue = numOfOne >= numOfZero ? 0 : 1;
    } else {
      throw new Error('unknown type');
    }

    const next = currentInputs.filter(val => val[index] === filterValue);
    if (next.length === 1) {
      console.log(next[0]);
      return next[0];
    }

    currentInputs = next;
    index++;
  }
}

const oxygenRecord = getRatingRecord('oxygen');
const co2Record = getRatingRecord('co2');

const oxygen = recordToNum(oxygenRecord);
const co2 = recordToNum(co2Record);

console.log('oxygen: ', oxygen);
console.log('co2: ', co2); 
console.log('res: ', oxygen * co2);
