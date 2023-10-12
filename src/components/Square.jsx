const Square = ({ turn, piece, addPiece, position, gameId }) => {
  const handleClick = () => {
    addPiece({ gameId, piece: { x: position, value: turn === 0 ? 'red' : 'blue' } })
  }

  return (
        <div className="square" style={{ backgroundColor: piece }} onClick={handleClick}>
        </div>
  )
}

export default Square
