import { initialState as initialAuthorizeState } from './ducks/authorization/authoriz_redusers'
import { initialState as initialSearchState } from './ducks/search/search_redusers'

const initialState = {
  authorization: initialAuthorizeState,
  search: initialSearchState,
}

export default initialState
