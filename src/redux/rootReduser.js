import { combineReducers } from 'redux'
import authorizationReduser from './ducks/authorization/authoriz_redusers'
import searchReduser from './ducks/search/search_redusers'

export default combineReducers({
  authorization: authorizationReduser,
  search: searchReduser,
})
