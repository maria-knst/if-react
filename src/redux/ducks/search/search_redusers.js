import { searchHotels } from './search_actions'
import { handleActions } from 'redux-actions'

export const initialState = {
  data: [],
}

const handlers = {
  [searchHotels]: (state, action) => ({
    ...state,
    data: action.payload,
  }),
}

export default handleActions(handlers, initialState)
