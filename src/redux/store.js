import { createStore } from 'redux'
import rootReduser from './rootReduser'
import initialState from './initialState'

export default createStore(rootReduser, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
