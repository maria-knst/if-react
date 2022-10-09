import { createStore } from 'redux'
import { reduser } from "../ducks/authorization/authoriz_redusers";
import { initialState } from "../ducks/authorization/authoriz_redusers";

export default createStore(reduser, initialState)
