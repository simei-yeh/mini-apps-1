import React from 'react'
import GameBoard from './GameBoard.jsx'
import moves from './gameMoves.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstPlayer: '',
      currentPlayer: '',
      move: 0,
      won: false,
      gameBoard: [
      {0: [0, 0, 0, 0, 0, 0]},
      {1: [0, 0, 0, 0, 0, 0]},
      {2: [0, 0, 0, 0, 0, 0]},
      {3: [0, 0, 0, 0, 0, 0]},
      {4: [0, 0, 0, 0, 0, 0]},
      {5: [0, 0, 0, 0, 0, 0]},
      {6: [0, 0, 0, 0, 0, 0]}
      ]
    }

    this.togglePlayer = this.togglePlayer.bind(this)
    this.clickColHandler = this.clickColHandler.bind(this)
  }

  componentDidMount() {
    this.setState ({
      firstPlayer: 'R',
      currentPlayer: 'R'
    })
  }



  togglePlayer (player) {
    this.state.currentPlayer = this.state.currentPlayer === 'B' ? 'R' : 'B';
  }

  clickColHandler(clickedCol) {
    let player = this.state.currentPlayer;
    let currentGame = this.state.gameBoard;
    let droppedSquare = moves.findValidMove(clickedCol, currentGame)

    console.log('dropped square', droppedSquare)

    if (this.state.won) {
      alert(player + ' has already won! Reset game board.')
    } else if (droppedSquare !== 'invalid') {
      this.state.move++;

      let updatedGame = moves.updateGameBoard(player, droppedSquare, currentGame)
      this.setState({
        gameBoard: updatedGame
      })

      if (this.state.move >= 7) {
        if (moves.checkWinConditions(player, droppedSquare, updatedGame)) {
          this.state.won = true;
          setTimeout(() => alert(player + ' wins the game! Reset game board.'), 0)
          this.state.firstPlayer = player;
        } else {
          this.togglePlayer(player)
        }
      } else {
        this.togglePlayer(player)
      }
    } else {
      alert('Invalid move! Choose another column.')
    }
  }




  render() {
    return (
      <div>
        Hello world! this is challenge 4
        <button>Clear Game Board</button>
        <GameBoard board={this.state.gameBoard} clickListener={this.clickColHandler} />
      </div>
    )
  }
}

export default App;