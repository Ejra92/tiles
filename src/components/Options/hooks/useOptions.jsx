//React
import { useContext, useState } from 'react'
//Context
import TilesContext from '../../../context/Tiles/TilesContext'

const useTilesOpts = () => {
  const { 
    randomLetters,
    testBoard2Letters,
  } = useContext(TilesContext)

  const [isSelected, setIsSelected] = useState('Board2')
  
  const handleBoard = () => {
    setIsSelected('Board2')
    testBoard2Letters()
  }

  const handleRandom = () => {
    setIsSelected('Random')
    randomLetters()
  }

  return {
    isSelected,
    handleBoard,
    handleRandom
  }
}

export default useTilesOpts