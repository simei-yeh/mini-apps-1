import React from 'react'

const GameBoardSquare = ({ id, box, clickListener }) => (
  <tr>
    <td onClick={() => { clickListener(id) }}
      className={box}>
      {box}
    </td>
  </tr>

)


export default GameBoardSquare;