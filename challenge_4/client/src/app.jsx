import React from 'react'
import GameBoard from './GameBoard.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstPlayer: '',
      currentPlayer: '',
      gameBoard: [
      {1: [0, 0, 0, 0, 0, 0]},
      {2: [0, 0, 0, 0, 0, 0]},
      {3: [0, 0, 0, 0, 0, 0]},
      {4: [0, 0, 0, 0, 0, 0]},
      {5: [0, 0, 0, 0, 0, 0]},
      {6: [0, 0, 0, 0, 0, 0]},
      {7: [0, 0, 0, 0, 0, 0]}
      ]
    }

    this.togglePlayer = this.togglePlayer.bind(this)

  }

  componentDidMount() {

  }



  togglePlayer (player) {
    if (player === 'R') {
      this.state.currentPlayer = 'B'
    } else {
      this.state.currentPlayer = 'R'
    }
  }

  clickColHandler() {

  }




  render() {
    return (
      <div>
        Hello world! this is challenge 4
        <GameBoard board={this.state.gameBoard} />
      </div>
    )
  }
}

export default App;