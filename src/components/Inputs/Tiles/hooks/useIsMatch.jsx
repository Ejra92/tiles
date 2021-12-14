//React
import { useEffect, useState } from 'react'

const useIsMatch = (word, matches) => {
  const [isMatch, setIsMatch] = useState('noMatch')

  useEffect(() => {
    if(!word.length) {
      setIsMatch('noMatch')
      return
    }

    const isMatchArg = matches.includes(word.map(l => l[0]).join('').toLowerCase())

    if(!isMatchArg) return
    
    setIsMatch('match')
  }, [matches, word])

  return isMatch
}

export default useIsMatch