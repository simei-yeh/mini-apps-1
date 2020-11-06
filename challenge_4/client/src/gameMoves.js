checkVerticals = (player, col, row, board) => {
  let won = true;

  if (row >= 3) {
    return false;
  }

  for (let i = row; i < row + 4; i++) {
    if (player !== board[col][i]) {
      return false;
    }
  }
  console.log(won)

  return won;
}

checkHorizontals = (player, col, row, board) => {

  let leftMostCol = Math.max(0, col - 3);
  let lastColStart = Math.min(col, 3);
  let won = false;

  var horizontalsHelper = (startingCol) => {
    let count = 0;

    for (let i = startingCol; i < startingCol + 4; i++) {
      if (player !== board[i][row]) {
        return;
      } else {
        count++;
      }
    }

    if (count === 4) {return true;}
  }

  for (let i = leftMostCol; i <= lastColStart; i++) {
    if (horizontalsHelper(i)) {won = true;}
  }
  return won;
}

majorDiagonalsHelper = (player, col, row, board) => {
  let won = true;


  for (let i = col; i < col + 4; i++) {
    if (player !== board[i][row]) {
      return false;
    }
    row++;
  }

  return won;
}

checkMajorDiagonals = (player, col, row, board) => {

  if (col - row > 3 || col - row < -2) {return false;}

  let leftMostCol, leftMostRow, lastStartRow, lastStartCol;

  if (row > col) {
    leftMostCol = Math.max(col - 3, 0);
    leftMostRow = row - ( col - leftMostCol);
  } else {
    leftMostRow = Math.max(row - 3, 0);
    leftMostCol = col - (row - leftMostRow);
  }

  if (col <= row) {
    lastStartRow = Math.min(2, row);
    lastStartCol = col - (row - lastStartRow);
  } else {
    lastStartCol = Math.min(3, col);
    lastStartRow = row - (col - lastStartCol);
  }


  for (let i = leftMostCol; i <= lastStartCol; i++) {
    if (majorDiagonalsHelper(player, i, leftMostRow, board)) {
      return true;
    } else {
      leftMostRow++;
    }
  }

}

minorDiagonalsHelper = (player, col, row, board) => {
  let won = true;

  for (let i = col; i > col - 4; i--) {
    console.log('col, row', i, row)
    if (player !== board[i][row]) {
      return false;
    }
    row++;
  }

  return won;
}


checkMinorDiagonals = (player, col, row, board) => {

  if (col + row < 3 || col + row > 8) {
    return false;
  }

  let rightMostCol, rightMostRow, lastStartRow, lastStartCol;

  if (row > col) {
    rightMostRow = Math.max(row - 3, 0);
    rightMostCol = col + ( row - rightMostRow);
  } else {
    rightMostCol = Math.min(col + 3, 6);
    rightMostRow = row + (col - rightMostCol);
  }

  if (col <= row) {
    lastStartRow = Math.min(2, row);
    lastStartCol = col + (row - lastStartRow);
  } else {
    lastStartCol = Math.max(3, col);
    lastStartRow = row + (col - lastStartCol);
  }

  for (let i = rightMostCol; i >= lastStartCol; i--) {
    if (minorDiagonalsHelper(player, i, rightMostRow, board)) {
      return true;
    } else {
      rightMostRow++;
    }
  }

}


checkWinConditions = (player, sq, board) => {

  let col = parseInt(sq[0]);
  let row = parseInt(sq[1]);
  let won = false;
  console.log('check win conditions!', player, col, row)


  if (checkVerticals(player, col, row, board) ||
      checkHorizontals(player, col, row, board) ||
      checkMajorDiagonals(player, col, row, board) ||
      checkMinorDiagonals(player, col, row, board)) {
    won = true;
  }

  console.log(won)
  return won;
}

findValidMove = (square, currentBoard) => {

  let colNum = parseInt(square[0]);
  let currentCol = currentBoard[colNum];
  let lowestRow;

  for (let i = 0; i < currentCol.length; i++) {
    if (currentCol[i] && i === 0) {
      return 'invalid';
    } else if (!currentCol[i]) {
      lowestRow = i;
    }
  }

  return colNum + '' + lowestRow;
}

updateGameBoard = (player, sq, board) => {

  let col = sq[0];
  let row = sq[1];
  board[col][row] = player;

  console.log('updating game board!', player, board)
  return board;
}

module.exports = {
  checkWinConditions,
  findValidMove,
  updateGameBoard
}