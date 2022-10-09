import { combineReducers } from "redux";
import { reduser as authorizationReduser} from "../ducks/authorization/authoriz_redusers";
import { reduser as searchReduser} from "../ducks/search/search_redusers";

export default combineReducers({
    authorization: authorizationReduser,
    search: searchReduser,
})