import {
  setAdults,
  setChildrenAge,
  setRooms,
  setFull,
} from './travelers_actions'
import { handleActions } from 'redux-actions'

export const initialState = {
  Adults: 2,
  ChildrenAge: 0,
  Rooms: 1,
}

const handlers = {
  [setAdults]: (state, action) => ({
    ...state,
    Adults: action.payload,
  }),
  [setChildrenAge]: (state, action) => ({
    ...state,
    ChildrenAge: action.payload,
  }),
  [setRooms]: (state, action) => ({
    ...state,
    Rooms: action.payload,
  }),
  [setFull]: (state, action) => ({
    ...state,
    ...action.payload,
  }),
}

export default handleActions(handlers, initialState)
