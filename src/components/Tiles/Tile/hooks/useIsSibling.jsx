//React
import { useEffect, useState } from 'react'

const useIsSibling = (i, word) => {
  const [siblingTile, setSiblingTile] = useState(false)

  useEffect(() => {
    const someFunc = number => {
      const repeatLogic = (number - 4 === i || number + 4 === i)

      if(number % 4 === 0) return (number - 1 === i || repeatLogic)

      if([1, 5, 9, 13].includes(number)) return (number + 1 === i || repeatLogic)

      return (number - 1 === i || number + 1 === i || repeatLogic)
    } 

    const isSibling = word
      .map(letter => Number(letter.slice(1, letter.length)))
      .some(someFunc)

    setSiblingTile(isSibling)
  }, [word.length, word, i])

  return siblingTile
}

export default useIsSibling