import React from 'react'
import GameBoardSquare from './GameBoardSquare.jsx'


const GameBoardCol = ({ fullCol, colCount }) => (


  <td>
    {fullCol[colCount + 1].map((box, index) => <GameBoardSquare key={index} id={colCount + '' + index} box={box} />)}
    <th>Col {colCount}</th>
  </td>


)


export default GameBoardCol;