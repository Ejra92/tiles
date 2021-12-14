//React
import { useReducer } from 'react'
//Context
import TilesContext from './TilesContext'
//Reducer
import { tilesReducer } from './tilesReducer'
//Types
import {
  RANDOM_LETTERS,
  TEST_BOARD_LETTERS
} from './tilesTypes'
//Data
import { board } from '../../data/letters.json'
//Utils
import unscrambleLetters from '../../components/Tiles/utils/unscrambleLetters'


const initialState = {
  tilesData: board
}

const TilesState = ({children}) => {
  const [state, dispatch] = useReducer(tilesReducer, initialState)

  const randomLetters = () => {
    const payload = unscrambleLetters(board)

    dispatch({
      payload,
      type: RANDOM_LETTERS
    })
  }
  const testBoard2Letters = () => {
    const payload = board

    dispatch({
      payload,
      type: TEST_BOARD_LETTERS
    })
  }

  return(
    <TilesContext.Provider value={{
      tilesData: state.tilesData,
      randomLetters,
      testBoard2Letters
    }}>
      {children}
    </TilesContext.Provider>
  )
}

export default TilesState