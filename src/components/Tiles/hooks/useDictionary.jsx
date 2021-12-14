
//React
import { useContext, useEffect, useState, useCallback } from 'react'
//Context
import MatchesContext from '../../../context/Matches/MatchesContext'
//Data
import dictionary from '../../../data/dictonary.json'

const { words } = dictionary

const useDictionary = () => {
  const {matches, addMatches} = useContext(MatchesContext)
  const [word, setWord] = useState([])
  const [existAtLeast1Word, setExistAtLeast1Word] = useState(false)

  const addLetter = letter => {
    setWord([...word, letter])
  }
  const removeLetter = letter => {
    word.splice(word.indexOf(letter), 1)
    setWord([...word])
  }
  const clearWord = useCallback(() => {
    setWord([])
  }, [])

  useEffect(() => {
    const joinWord = word.map(l => l[0]).join('').toLocaleLowerCase()

    if(word.length < 3 || matches.includes(joinWord)) return

    if(words.includes(joinWord)) {
      addMatches(joinWord)
    }
  }, [word, matches, addMatches])

  useEffect(() => {
    if(existAtLeast1Word && !word.length) {
      setExistAtLeast1Word(false)
    }

    if(!existAtLeast1Word && word.length) {
      setExistAtLeast1Word(true)
    }
  }, [word, existAtLeast1Word])

  return { 
    addLetter,
    removeLetter,
    clearWord,
    word,
    existAtLeast1Word,
    matches
  }
}

export default useDictionary