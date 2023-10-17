import { useState } from 'react'
import Header from './components/Header.jsx'
import GameBoard from './components/GameBoard.jsx'
import './App.css'

function App() {
  const [currentScore, setCurrentScore] = useState(0)
  const [highScore, setHighScore] = useState(0)
  const [moves, setMoves] = useState([])

  function handleMove(e) {
    e.preventDefault()

    const teamId = e.currentTarget.dataset.id
    
    console.log(moves)
    if(moves.includes(teamId)) {
      if(highScore < currentScore) {
        setHighScore(currentScore)
      }
      setCurrentScore(0)
      setMoves([])
    }
    else {
      setMoves([...moves, teamId])
      setCurrentScore(currentScore + 1)
    }
  }

  return(
    <>
      <Header currentScore={currentScore} highScore={highScore} />
      <GameBoard onMove={handleMove} currentScore={currentScore} />
    </>
  )
}

export default App
