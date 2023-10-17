import '../styles/Card.css'
import { useEffect } from 'react'

export default function Card({imagePath, teamName, onMove, background, id}) {

  useEffect(() => {
    console.log(background)
  })

  return(
    <button className="team-card" data-id={id} onClick={onMove} style={{backgroundColor: background}}>
      <img src={imagePath} className="image"></img>
      <div className="team-name">{teamName}</div>
    </button>
  )
}