import { initialState as initialAuthorizeState } from './ducks/authorization/authoriz_redusers'
import { initialState as initialSearchState } from './ducks/search/search_redusers'
import { initialState as initialTimeState } from './ducks/travelTime/travelTime_redusers'
import { initialState as initialTravelersState } from './ducks/travelers/travelers_redusers'

const initialState = {
  authorization: initialAuthorizeState,
  search: initialSearchState,
  travelTime: initialTimeState,
  travelers: initialTravelersState,
}

export default initialState
