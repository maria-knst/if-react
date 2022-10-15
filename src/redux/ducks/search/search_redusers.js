import {
  searchDataRequested,
  searchDataFailed,
  searchDataSucceed,
} from './search_actions'
import { handleActions } from 'redux-actions'

export const initialState = {
  data: [],
  error: null,
  loading: false,
  searchingString: '',
  startDate: new Date(),
  endDate: new Date(),
  adults: 2,
  childrenAge: [],
  rooms: 1,
}

const handlers = {
  [searchDataRequested]: (state, action) => ({
    ...state,
    loading: true,
    ...action.payload,
  }),
  [searchDataSucceed]: (state, action) => ({
    ...state,
    loading: false,
    data: action.payload,
  }),
  [searchDataFailed]: (state, action) => ({
    ...state,
    loading: false,
    error: action.payload,
  }),
}

export default handleActions(handlers, initialState)
