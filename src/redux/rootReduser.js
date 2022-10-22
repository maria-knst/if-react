import { combineReducers } from 'redux'
import authorizationReduser from './ducks/authorization/authoriz_redusers'
import searchReduser from './ducks/search/search_redusers'
import travalersRediser from './ducks/travelers/travelers_redusers'

export default combineReducers({
  authorization: authorizationReduser,
  search: searchReduser,
  travelers: travalersRediser,
})
