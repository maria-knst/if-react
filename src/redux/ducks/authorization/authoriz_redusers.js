import { SET_AUTHORIZE, SET_UNAUTHORIZE } from './authoriz_actions'

export const initialState = {
  isAuthorize: false,
}

export const reduser = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTHORIZE:
      return {
        ...state,
        isAuthorize: true,
      }

    case SET_UNAUTHORIZE:
      return {
        ...state,
        isAuthorize: false,
      }

    default:
      return state
  }
}
