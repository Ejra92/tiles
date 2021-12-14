//React
import { useContext, Children } from 'react'
//Context
import TilesContext from '../../context/Tiles/TilesContext'
//CustomComponents
import Tile from './Tile/Tile'
import Options from '../Options/Options'
import TilesInput from '../Inputs/Tiles/TilesInput'
//Hooks
import useDictionary from './hooks/useDictionary'
//StyleSheet
import './styles.css'

const Tiles = () => {
  const { tilesData } = useContext(TilesContext)
  const { 
    addLetter,
    removeLetter,
    clearWord,
    word,
    existAtLeast1Word,
    matches
  } = useDictionary()
    
  return (
    <div className="tiles">
      <Options
        clearWord={clearWord}
        existAtLeast1Word={existAtLeast1Word}
      />

      <div className="tiles__container">
        {Children.toArray(
          tilesData.map((letter, i) => {
            return (
              <Tile
                i={i+1}
                letter={letter}
                addLetter={addLetter}
                removeLetter={removeLetter}
                existAtLeast1Word={existAtLeast1Word}
                word={word}
              />
            )
          })
        )}
      </div>

      <TilesInput word={word} matches={matches} />
    </div>
  )  
}

export default Tiles