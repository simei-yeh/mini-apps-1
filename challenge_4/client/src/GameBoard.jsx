import React from 'react'
import GameBoardCol from './GameBoardCol.jsx'

const GameBoard = ({ board }) => (
  <table>
    <tbody>
      {board.map((col, index) => <GameBoardCol key={index} fullCol={col} colCount={index} />)}
    </tbody>
  </table>
)

export default GameBoard;