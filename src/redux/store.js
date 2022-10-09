import { createStore } from 'redux'
import rootReduser from './rootReduser'
import initialState from "./initialState";

export default createStore(rootReduser, initialState)
