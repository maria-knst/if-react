import { initialState as initialAuthorizeState } from './ducks/authorization/authoriz_redusers'
import { initialState as initialSearchState } from './ducks/search/search_redusers'
import { initialState as initialTravelersState } from './ducks/travelers/travelers_redusers'

const initialState = {
  authorization: initialAuthorizeState,
  search: initialSearchState,
  travelers: initialTravelersState,
}

export default initialState
