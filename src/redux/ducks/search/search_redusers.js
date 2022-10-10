import { SEARCH_HOTELS } from './search_actions'

export const initialState = {
  data: [],
}

export const reduser = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_HOTELS:
      return {
        ...state,
        data: action.payload,
      }
    default:
      return state
  }
}
