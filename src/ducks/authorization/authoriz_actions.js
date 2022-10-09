export const SET_AUTHORIZE = 'SET_AUTHORIZE'
export const SET_UNAUTHORIZE = 'SET_UNAUTHORIZE'

export const ACTION_SET_AUTHORIZE = (payload) => {
  return {
    type: SET_AUTHORIZE,
    payload: payload,
  }
}

export const ACTION_SET_UNAUTHORIZE = () => {
  return {
    type: SET_UNAUTHORIZE,
  }
}
