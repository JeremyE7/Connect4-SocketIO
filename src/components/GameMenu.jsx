import useGame from '../hooks/useGame'
import BoardGame from './BoardGame'
import SearchGame from './SearchGame'

const GameMenu = () => {
  const { searchGame, game, addPiece, winner } = useGame()
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
              : (
                  <BoardGame game={game} addPiece={addPiece} />
                )}
            {winner && (
                <div className='winner'>
                    <h2>
                        The winner is:
                        <span style={{ color: winner }}>
                            {winner}
                        </span>
                    </h2>
                </div>
            )}
        </section>
  )
}

export default GameMenu
