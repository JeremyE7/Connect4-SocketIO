import useGame from '../hooks/useGame'
import BoardGame from './BoardGame'
import SearchGame from './SearchGame'

const GameMenu = () => {
  const { searchGame, game, addPiece, winner, playerLeave } = useGame()
  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    const name = data.get('name')
    searchGame(name)
  }

  return (
    <section className='game-menu'>
      {!game
        ? (<SearchGame handleSubmit={handleSubmit} />)
        : (game.players.length < 2
            ? (<div className='winner'><span className="loader"></span> Esperando a otro jugador</div>)
            : <BoardGame game={game} addPiece={addPiece} />
          )}
      {winner && (
        <div className='winner'>
          <h2>
            {winner !== 'tie' ? 'El ganador es' : 'Empate'} <br />
            {winner !== 'tie'
              ? <span style={{ color: winner }}>
                {winner === 'red' ? 'Rojo' : 'Azul'}
              </span>
              : null}
          </h2>
          <button className='btn-play-again'>
            <a href='/'>Volver a jugar</a>
          </button>
        </div>
      )}
      {playerLeave
        ? (
          <div className='winner'>
            <h2>
              El otro jugador se ha ido <br />
            </h2>
            <button className='btn-play-again'>
              <a href='/'>Volver a jugar</a>
            </button>
          </div>
          )
        : null}
    </section>
  )
}

export default GameMenu
