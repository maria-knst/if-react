import { setStartData, setEndData } from './travelTime_actions'
import { handleActions } from 'redux-actions'

export const initialState = {
  start: new Date(),
  end: new Date(),
}

const handlers = {
  [setStartData]: (state, action) => ({
    ...state,
    start: action.payload,
  }),
  [setEndData]: (state, action) => ({
    ...state,
    end: action.payload,
  }),
}

export default handleActions(handlers, initialState)
