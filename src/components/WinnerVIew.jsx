import Confetti from 'react-confetti'
import BoardGame from './BoardGame'

const WinnerVIew = ({ winner, game }) => {
  return (
    <div className='winner'>
    <h2>
      {winner !== 'tie' ? 'El ganador es' : 'Empate'} <br />
      {winner !== 'tie'
        ? <span style={{ color: winner }}>
          {winner === 'red' ? 'Rojo' : 'Azul'}
          <Confetti />
        </span>
        : null}
    </h2>
    <BoardGame game={game} small={true} />
    <button className='btn-play-again'>
      <a href='/'>Volver a jugar</a>
    </button>
  </div>
  )
}

export default WinnerVIew
