checkVerticals = (player, col, row, board) => {
  let won = true;

  if (row >= 3) {
    return false;
  }

  for (let i = row; i < row + 4; i++) {
    if (player !== board[col][col][i]) {
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
      if (player !== board[i][i][row]) {
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


checkMajorDiagonals = (player, col, row, board) => {

  if (col - row > 3 || col - row < -2) {
    return false;
  }

  // let leftMostCol = Math.max(0, col - r);
  // let lastColStart = Math.min(col, 3);

}


checkMinorDiagonals = (player, col, row, board) => {

  if (col + row < 3 || col + row > 8) {
    return false;
  }

}


checkWinConditions = (player, sq, board) => {

  let col = parseInt(sq[0]);
  let row = parseInt(sq[1]);
  let won = false;
  console.log('check win conditions!', player, col, row)


  if (checkVerticals(player, col, row, board) ||
      checkHorizontals(player, col, row, board)) {
    won = true;
  }

  //check major diagonals


  //check minor diagonals

  console.log(won)
  return won;
}

findValidMove = (square, currentBoard) => {

  let colNum = parseInt(square[0]);
  let currentCol = currentBoard[colNum][colNum];
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
  board[col][col][row] = player;

  console.log('updating game board!', player, board)
  return board;
}

module.exports = {
  checkWinConditions,
  findValidMove,
  updateGameBoard
}