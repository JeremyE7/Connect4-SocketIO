import { useState, useEffect } from 'react'

import io from 'socket.io-client'
const socket = io(import.meta.env.VITE_REACT_APP_SOCKET_CONNECTION)

const useGame = () => {
  const [game, setGame] = useState(null)
  const [winner, setWinner] = useState(null)
  const [playerLeave, setPlayerLeave] = useState(false)

  useEffect(() => {
    if (game) return
    socket.on('connect', () => {
      console.log('Conectado al servidor')
    })

    socket.on('game-created', (game) => {
      setPlayerLeave(false)
      setGame(game)
    })

    socket.on('game-joined', (game) => {
      setGame(game)
    })

    socket.on('piece-added', (game) => {
      setGame(game)
    })

    socket.on('winner-checked', (winner) => {
      setWinner(winner)
    })

    socket.on('player-disconnected', () => {
      setPlayerLeave(true)
      setGame(null)
    })

    socket.on('tie', () => {
      setWinner('tie')
    })
  }, [])

  const searchGame = (name) => {
    socket.emit('searching-player', name)
  }

  const addPiece = ({ gameId, piece }) => {
    socket.emit('add-piece', gameId, piece)
    socket.emit('check-winner', gameId)
  }

  return { game, searchGame, addPiece, winner, playerLeave, setPlayerLeave }
}

export default useGame
