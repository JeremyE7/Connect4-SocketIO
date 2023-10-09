const Square = ({ turn, piece, addPiece, position, gameId }) => {
  return (
        <div className="square" style={{ backgroundColor: piece }} onClick={() => addPiece({ gameId, piece: { x: position, value: turn === 0 ? 'red' : 'blue' } })}>
        </div>
  )
}

export default Square
