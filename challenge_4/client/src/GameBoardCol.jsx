import React from 'react'
import GameBoardSquare from './GameBoardSquare.jsx'


const GameBoardCol = ({ fullCol, colCount, clickListener }) => (


  <td>
    {fullCol[colCount].map((box, index) => <GameBoardSquare key={index} id={colCount + '' + index} box={box} clickListener={clickListener}/>)}
    <th>Col {colCount}</th>
  </td>


)


export default GameBoardCol;