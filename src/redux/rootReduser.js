import { combineReducers } from 'redux'
import authorizationReduser from './ducks/authorization/authoriz_redusers'
import searchReduser from './ducks/search/search_redusers'
import travelTimeReduser from './ducks/travelTime/travelTime_redusers'
import travalersRediser from './ducks/travelers/travelers_redusers'

export default combineReducers({
  authorization: authorizationReduser,
  search: searchReduser,
  travelTime: travelTimeReduser,
  travelers: travalersRediser,
})
