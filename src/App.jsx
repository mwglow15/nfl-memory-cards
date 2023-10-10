import { useState } from 'react'
import Header from './components/Header.jsx'
import './App.css'

function App() {
  const [currentScore, setCurrentScore] = useState(0)
  const [highScore, setHighScore] = useState(0)

  return(
    <Header currentScore={currentScore} highScore={highScore} />
  )
}

export default App
