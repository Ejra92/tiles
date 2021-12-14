//React
import { useReducer } from 'react'
//Context
import MatchesContext from './MatchesContext'
//Reducer
import { matchesReducer } from './matchesReducer'
//Types
import { ADD_MATCHES } from './matchesTypes'

const initialState = {
  matches: []
}

const MatchesState = ({children}) => {
  const [state, dispatch] = useReducer(matchesReducer, initialState)

  const addMatches = payload => {
    dispatch({
      payload,
      type: ADD_MATCHES
    })
  }

  return(
    <MatchesContext.Provider value={{
      matches: state.matches,
      addMatches
    }}>
      {children}
    </MatchesContext.Provider>
  )
}

export default MatchesState