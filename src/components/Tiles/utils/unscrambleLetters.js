const generateRandomNumber = () => {
  Math.floor(Math.random() * 16)
}

const sortFunc = (a, b) => {
  if(a > b) return 1
  if(a < b) return -1
  return 0
}

const unscrambleLetters = letters => {
  const data = letters
    .map(letter => `${generateRandomNumber()}${letter}`)
    .sort(sortFunc)
    .map(letter => letter[letter.length - 1])
  
  return data
}

export default unscrambleLetters