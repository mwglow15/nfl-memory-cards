import '../styles/Card.css'

export default function Card({imagePath, teamName, onMove}) {
  return(
    <button className="team-card" onClick={onMove}>
      <img href={imagePath} className="image"></img>
      <div className="team-name">{teamName}</div>
    </button>
  )
}