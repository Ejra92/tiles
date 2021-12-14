//React
import { useEffect, useState } from 'react'
//Utils
import dictionary from '../../../../data/dictonary.json'

const { words } = dictionary

const useMatch = props => {
  const {
    removeLetter,
    addLetter,
    letter,
    i,
    existAtLeast1Word,
    siblingTile,
    word //from context
  } = props

  const [wordIsMatching, setWordIsMatching] = useState(false)
  const [tileStatus, setTileStatus] = useState('')

  const handlePicked = () => {
    if(
      wordIsMatching ||
      (existAtLeast1Word && !siblingTile && tileStatus === 'blocked')
    ) return

    if(tileStatus === 'picked') { 
      removeLetter(letter + i) 
      setTileStatus('')
      return 
    }

    if(word.length < 5) {
      addLetter(letter + i)
      setTileStatus('picked')
      return
    }

    alert('Your word cannot have more than 5.')
  }
  
  useEffect(() => {
    const updateMatchingOrStatus = ({isMaching, status}) => {
      setWordIsMatching(isMaching)

      setTileStatus(status)
    }

    if(existAtLeast1Word && tileStatus === '' && !siblingTile) {
      setTileStatus('blocked')
    }

    if(tileStatus !== 'picked' && siblingTile) {
      setTileStatus('')
    }

    if(!word.length) {
      updateMatchingOrStatus({isMaching: false, status: ''})
    }

    if(words.includes(word.map(letter => letter[0]).join('').toLowerCase())) {
      updateMatchingOrStatus({isMaching: true, status: 'start'})
    }
  }, [word, existAtLeast1Word, tileStatus, siblingTile])

  return {
    handlePicked,
    tileStatus
  }
}

export default useMatch