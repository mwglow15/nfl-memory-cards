import '../styles/header.css'

export default function Header( {currentScore, highScore} ) {
  return(
    <div className="header">
      <p className="title">NFL Memory Game</p>
      <div className="score-board">
        <div className="current-score score">Current Score: {currentScore}</div>
        <div className="high-score score">High Score: {highScore}</div>
      </div>
    </div>
  )
}