//first move starts with X
//app detects win/tie and displays appropriate message
//button resets the game

var firstPlayer = "X";
var currentPlayer = firstPlayer;
var Xwins = 0;
var Owins = 0;

//toggle Players
var togglePlayer = function(currentPlayer) {
  if (currentPlayer === "X") {
    console.log('toggleplayer',currentPlayer);
    currentPlayer = "O";
  } else {
    currentPlayer = "X"
  }
}

//function to check if one player won 3 in a row
var checkWinCondition = function() {
  for (let i = 1; i <= 9; i++) {

  }
}

//clear all moves
document.getElementById("clear").addEventListener("click", function() {
  for (let i = 1 ; i <= 9; i++) {
    document.getElementById("box" + i).innerHTML = "";
  }
})


//add native event listener to each box

for (let i = 1 ; i <= 9; i++) {
  document.getElementById("box" + i).addEventListener("click", function() {
    document.getElementById("box" + i).innerHTML = currentPlayer;
    togglePlayer(currentPlayer);
    checkWinCondition();
  })
}

//present total wins by player

document.getElementById("clear").addEventListener("click", function() {
  document.getElementById("winsCount").innerHTML =
    "X wins  " + Xwins + " and   O wins  " + Owins;
})



