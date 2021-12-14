//Types
import {
  RANDOM_LETTERS,
  TEST_BOARD_LETTERS
} from './tilesTypes'

export const tilesReducer = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case RANDOM_LETTERS: return {
      ...state,
      tilesData: [...payload]
    }
    case TEST_BOARD_LETTERS: return {
      ...state,
      tilesData: [...payload]
    }
    default:
      return state
  }
}