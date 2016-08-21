'use strict';

const boardSize = process.argv[2];

function createBoard(n) {
  const rows = [];
  for (let x = 0; x < n; x++) {
    rows[x] = [];
    for (let y = 0; y < n; y++) {
      rows[x][y] = false;
    }
  }
  return rows;
}

const board = createBoard(boardSize);

function queenSafe(row, col, n) {
  for (let x = 0; x < n; x++) {
    if (board[row][x] || board[x][col]) {
      return false;
    }
  }
  for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
    if (board[i][j]) {
      return false;
    }
  }

  for (let i = row, j = col; i >= 0 && j < n; i--, j++) {
    if (board[i][j]) {
      return false;
    }
  }
  return true;
}

function printBoard() {
  console.log(JSON.stringify(board));
}

function solve(row, n) {
  for (let col = 0; col < n; col++) {
    if (queenSafe(row, col, n)) {
      board[row][col] = true;
      if (row === (n - 1)) {
        printBoard();
      } else {
        solve(row + 1, n);
      }
      board[row][col] = false;
    }
  }
}

solve(0, boardSize);
