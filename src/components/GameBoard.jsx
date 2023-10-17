import { useState, useEffect } from 'react'
import Card from './Card.jsx'
import '../styles/gameboard.css'

export default function GameBoard({ onMove, currentScore }){
  const [selectedTeams, setSelectedTeams] = useState([])
  const [teams, setTeams] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams")
        const json = await response.json()
        console.log(json)
        setTeams(await json.sports[0].leagues[0].teams)
      } catch(error) {
        console.log("error", error)
      }
    }

    fetchData()
  },[])

  // This function
  useEffect(() => {
    const teamIndices = []
    let index = ''

    for(let i = 0; i < 8;  i++) {
      do {
        index = Math.floor(Math.random() * 32)
      } while(teamIndices.includes(index))

      teamIndices.push(index)
    }

    setSelectedTeams(teamIndices)
  },[currentScore])

  return(
    <div className='gameboard'>
      {
        (selectedTeams.length > 0 &&
        teams.length > 0 &&
        selectedTeams.map((teamIndex) => <Card teamName={teams[teamIndex].team.displayName} 
                                              imagePath={teams[teamIndex].team.logos[0].href}
                                              onMove={onMove} id={teams[teamIndex].team.uid}
                                              background={"#" + teams[teamIndex].team.color} 
                                              key={teams[teamIndex].team.uid}
                                        />
        )
        )
      }
    </div>
  )
}

//<p key={teamIndex}>{teamIndex}</p>)//