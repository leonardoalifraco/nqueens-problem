"use strict";

let n = process.argv[2];
let board = createBoard(n);

solve(0);

function createBoard(n) {
	let rows = [];
	for(let x = 0; x < n; x++) {
		rows[x] = [];
		for (let y = 0; y < n; y++) {
			rows[x][y] = false;
		}
	}
	return rows;
}

function queenSafe(row, col) {
	for(let x = 0; x < n; x++) {
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

function min(x, y) {
	if (x < y) {
		return x;
	}
	else {
		return y;
	}
}

function solve(row) {
	for(let col = 0; col < n; col++) {
		if (queenSafe(row, col)) {
			board[row][col] = true;
			if (row == (n - 1)) {
				printBoard();
			}
			else {
				solve(row + 1)
			}
			board[row][col] = false;
		}
	}
}

function printBoard() {
	console.log(JSON.stringify(board));
}