//Types
import {
  ADD_MATCHES,
} from './matchesTypes'

export const matchesReducer = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case ADD_MATCHES: return {
      ...state,
      matches: [...state.matches, payload]
    }
    default:
      return state
  }
}