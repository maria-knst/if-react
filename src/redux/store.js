import {applyMiddleware, compose, createStore} from 'redux'
import rootReduser from './rootReduser'
import initialState from './initialState'
import { persistReducer, persistStore } from 'redux-persist'
import LocalStorage from 'redux-persist/lib/storage'
import logger from 'redux-logger'


const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const enhancers = [devToolsExtension]

const composedEnhancers = compose(applyMiddleware(logger), ...enhancers)

const persistConfig = {
  key: 'root',
  storage: LocalStorage,
  blacklist: [],
  whitelist: ['authorization', 'search'],
}

const persistedReduser = persistReducer(persistConfig, rootReduser)

const store = createStore(
  persistedReduser,
  initialState,
    composedEnhancers,
)

export default store

export const persistor = persistStore(store)
