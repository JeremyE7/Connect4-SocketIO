import Square from './Square'

const BoardGame = ({ game, addPiece }) => {
  return (
    <section className='general-board'>
      <label htmlFor="" className='players'>
        <h2>Players:</h2>
        {game.players.map((player) => {
          return <span style={{ color: game.players.indexOf(player) === 0 ? 'red' : 'blue' }} key={player.id_player}>{player.name} <br /></span>
        })}
      </label>
      <div className='board'>
        {game.board.map((row, i) => {
          return row.map((piece, j) => {
            return <Square key={`${i}-${j}`} piece={piece} addPiece={addPiece} gameId={game.id} position={j} turn={game.turn} />
          }
          )
        })}
      </div>
      <label htmlFor="" className='turn'>
        <h2>
          Turno <br />
        </h2>
        <span style={{ color: game.turn === 0 ? 'red' : 'blue' }}>
          {game.turn === 0 ? 'Rojo' : 'Azul'}
        </span>
      </label>
    </section>
  )
}

export default BoardGame
