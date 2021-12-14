//CustomHook
import useIsSibling from './hooks/useIsSibling'
import useMatch from './hooks/useMatch'
//Utils
import statusStyle from './utils/statusStyle'
//StyleSheet
import './styles.css'

const Tile = props => {
  const {
    i,
    letter,
    addLetter,
    removeLetter,
    existAtLeast1Word,
    word
  } = props

  const siblingTile = useIsSibling(i, word)

  const useMatchProps = {
    i,
    letter,
    addLetter,
    removeLetter,
    existAtLeast1Word,
    word,
    siblingTile
  }

  const {
    handlePicked,
    tileStatus
  } = useMatch(useMatchProps)
  
  return (
    <div 
      onClick={handlePicked} 
      className={`tile dFlexCenter ${statusStyle[tileStatus] || ''}`}
    >
      <p> {letter} </p> 
    </div>
  )
}

export default Tile