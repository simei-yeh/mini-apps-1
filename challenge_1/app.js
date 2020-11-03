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
  let offsets = [0, 3, 6];
  let colRowCount = [1, 2, 3];

  var checkWins = function (type, str, x, y) {
    //base case
    // console.log(str, player)
    if (str === 'XXX' || str === 'OOO') {
      won = true;
      return;
    } else if (x.length <= 0 || y.length <= 0) {
      return;
    }

    for (let i = 0; i < y.length; i++) {
      // console.log(x, y[i], i)
      console.log(type)
      if (type === 'horizontal' || type === 'vertical') {
        if (document.getElementById('box' + (x + y[i])).innerHTML !== null) {
          currentBox = document.getElementById('box' + (x + y[i])).innerHTML;
          if (currentBox === player) {
            str = str + player;
            checkWins(type, str, x, y.slice(i + 1))
          }
        } else {
          return;
        }
      } else {
        console.log('entered diag')
        if (document.getElementById('box' + (x[i] + y[i])).innerHTML !== null) {
          currentBox = document.getElementById('box' + (x[i] + y[i])).innerHTML;
          if (currentBox === player) {
          console.log(type, str)
          str = str + player;
          checkWins(type, str, x.slice(i + 1), y.slice(i + 1))
          }
        } else {
          return;
        }
      }
    }
  }
  for (let i = 0; i < 3; i++) {
    checkWins('horizontal', '', offsets[i], colRowCount)
  }

  if (!won) {
    for (let i = 0; i < 3; i++) {
      checkWins('vertical', '', colRowCount[i], offsets)
    }
  }

  if (!won) {
    checkWins('majordiagonal', '', offsets, colRowCount)
  }

  if (!won) {
    let newArray = colRowCount.reverse();
    checkWins('minordiagonal', '', offsets, newArray);
  }

  // checkWins('vertical', '', rows, cols);
  return won;
}


// checkWins(str, x.slice(i + 1), y.slice(j));
// checkWins(str, x.slice(i), y.slice(j + 1));
// checkWins(str, x.slice(i + 1), y.slice(j + 1));

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



