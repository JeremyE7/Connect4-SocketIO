import { useState, useEffect } from 'react'

import io from 'socket.io-client'
const socket = io('http://localhost:4000')

const useGame = () => {
  const [game, setGame] = useState(null)
  const [winner, setWinner] = useState(null)
  const [playerLeave, setPlayerLeave] = useState(false)

  useEffect(() => {
    if (game) return
    console.log('Conectando al servidor desde el frontend')
    socket.on('connect', () => {
      console.log('Conectado al servidor')
    })

    socket.on('game-created', (game) => {
      console.log('Juego creado', game)
      setPlayerLeave(false)
      setGame(game)
    })

    socket.on('game-joined', (game) => {
      console.log('Juego unido', game)
      setGame(game)
    })

    socket.on('piece-added', (game) => {
      console.log('Pieza agregada', game)
      setGame(game)
    })

    socket.on('winner-checked', (winner) => {
      console.log('Ganador verificado', winner)
      setWinner(winner)
    })

    socket.on('player-disconnected', () => {
      console.log('Jugador abandono la partida')
      setPlayerLeave(true)
      setGame(null)
    })

    socket.on('tie', () => {
      console.log('Empate')
      setWinner('tie')
    })
  }, [])

  const searchGame = (name) => {
    socket.emit('searching-player', name)
  }

  const addPiece = ({ gameId, piece }) => {
    console.log('Agregando pieza', gameId, piece)
    socket.emit('add-piece', gameId, piece)
    socket.emit('check-winner', gameId)
  }

  return { game, searchGame, addPiece, winner, playerLeave, setPlayerLeave }
}

export default useGame
