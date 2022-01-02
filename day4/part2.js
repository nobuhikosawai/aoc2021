const fs = require('fs');

const inputs = fs.readFileSync('./input.txt').toString().trim().split('\n\n');

const selectedNumbers = inputs[0].split(',').map(Number);

let bingoBoards = inputs.splice(1).reduce((acc, input) => {
  const board = input.split('\n').reduce((acc, val) => {
    acc.push(val.split(' ').filter(v => v).map(Number)); // remove double spaces
    return acc;
  },[]);

  acc.push(board);
  return acc;
}, []);

const markNumber = (board, num) => {
  for (row of board) {
    const idx = row.findIndex(v => v === num);
    if (idx >= 0) {
      row.splice(idx, 1, 'x');
      break;
    }
  }
}

const isBingo = (board) => {
  const rowBingo = board.some(row => row.every(v => v === 'x'));

  if (!rowBingo) {
    return [...Array(board[0].length)].some((_, i) => board.every(row => {
     return row[i] === 'x'
    }));
  }
  return true;
}

for (num of selectedNumbers) {
  bingoBoards.forEach(board => markNumber(board, num));

  if (bingoBoards.length > 1) {
    bingoBoards = bingoBoards.filter(board => !isBingo(board));
    continue;
  }

  const bingoBoard = bingoBoards[0];

  if (isBingo(bingoBoard)) {
    console.log('bingo board: ', bingoBoard)

    const sumOfBoard = bingoBoard.reduce((acc, row) => {
      const sumOfRow = row.reduce((acc, val) => {
        if (val !== 'x') {
          acc += val;
        }
        return acc;
      }, 0)
      acc += sumOfRow;
      return acc;
    }, 0)

    console.log('bingo number: ', num);
    console.log('board number sum: ', sumOfBoard);
    console.log('res: ', sumOfBoard * num);
    break;
  }
}
