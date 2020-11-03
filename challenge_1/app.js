//first move starts with X
//app detects win/tie and displays appropriate message
//button resets the game

var firstPlayer = "X";
var currentPlayer = firstPlayer;
var Xwins = 0;
var Owins = 0;
var gamePieces = 0;

//toggle Players
var togglePlayer = function (player) {
  console.log('toggleplayer', currentPlayer);
  if (player === "X") {
    currentPlayer = "O";
  } else {
    currentPlayer = "X"
  }
}

//function to check if one player won 3 in a row
var checkWinCondition = function (player) {
  let won = false;
  let array = [1, 2, 3];

  var checkWins = function (count, possArray) {
    //base case
    if (count === 3) {
      won = true;
      return;
    }

    for (let i = 1; i < 4; i++) {
      for (let j = 1; j < 4; j++) {
        let currentBox = document.getElementById('box' + (i * j)).innerHTML;
        console.log(i, j, count, currentBox)
        if (currentBox) {
          if (player === currentBox) {
            count++;
          }
          checkWins(count);
          count--;
        }
      }
    }
  }
  checkWins(0);
  return won;
}

//clear all moves
document.getElementById("clear").addEventListener("click", function () {
  for (let i = 1; i <= 9; i++) {
    document.getElementById("box" + i).innerHTML = "";
  }
})


//add native event listener to each box

for (let i = 1; i <= 9; i++) {
  document.getElementById("box" + i).addEventListener("click", function () {
    document.getElementById("box" + i).innerHTML = currentPlayer;
    gamePieces++;
    if (gamePieces >= 5 && checkWinCondition(currentPlayer)) {
      alert(currentPlayer + ' wins! Reset game board.');
      currentPlayer === 'X' ? Xwins++ : Owins++;
    };
    togglePlayer(currentPlayer);
  })
}

//present total wins by player

document.getElementById("clear").addEventListener("click", function () {
  document.getElementById("winsCount").innerHTML =
    "X wins  " + Xwins + " and   O wins  " + Owins;
})



