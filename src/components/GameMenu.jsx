import useGame from '../hooks/useGame'
import BoardGame from './BoardGame'
import SearchGame from './SearchGame'
import Loader from './Loader'
import WinnerVIew from './WinnerVIew'
import PlayerLeaveVIew from './PlayerLeaveVIew'

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
            ? <Loader />
            : <BoardGame game={game} addPiece={addPiece} />
          )
      }

      {winner && <WinnerVIew game={game} winner={winner}/>}

      {playerLeave
        ? <PlayerLeaveVIew />
        : null
      }
    </section>
  )
}

export default GameMenu
