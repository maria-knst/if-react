import { setAuthorize, setUnauthorize } from './authoriz_actions'
import { handleActions } from 'redux-actions'

export const initialState = {
  isAuthorize: false,
}

const handlers = {
  [setAuthorize]: (state, action) => ({
    ...state,
    isAuthorize: true,
  }),
  [setUnauthorize]: (state) => ({
    ...state,
    isAuthorize: false,
  }),
}

export default handleActions(handlers, initialState)
