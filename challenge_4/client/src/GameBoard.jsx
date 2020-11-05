import React from 'react'
import GameBoardCol from './GameBoardCol.jsx'

const GameBoard = ({ board , clickListener }) => (
  <table>
    <tbody>
      {board.map((col, index) => <GameBoardCol key={index} fullCol={col} colCount={index} clickListener={clickListener} />)}
    </tbody>
  </table>
)

export default GameBoard;