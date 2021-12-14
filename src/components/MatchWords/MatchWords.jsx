//React
import { useContext } from 'react'
//Context
import MatchesContex from '../../context/Matches/MatchesContext'
//Stylesheet
import './styles.css'

const MatchWords = () => {
  const {matches} = useContext(MatchesContex)

  if(!matches.length) return null

  return (
    <div className="match-word">
      <h2>Match Words</h2>

      <ul>
        {matches.map((match) => (
          <li key={match}> 
            {match}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MatchWords