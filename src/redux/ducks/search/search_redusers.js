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
}

const handlers = {
  [searchDataRequested]: (state, action) => ({
    ...state,
    loading: true,
    searchingString: action.payload,
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
