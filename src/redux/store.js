import { applyMiddleware, compose, createStore } from 'redux'

import rootReduser from './rootReduser'
import initialState from './initialState'
import rootSaga from './rootSaga'

import createSagaMiddleware from '@redux-saga/core'
import { persistReducer, persistStore } from 'redux-persist'
import LocalStorage from 'redux-persist/lib/storage'
import logger from 'redux-logger'

const devToolsExtension =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const enhancers = [devToolsExtension]

const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware, logger]

const composedEnhancers = compose(applyMiddleware(...middlewares), ...enhancers)

const persistConfig = {
  key: 'root',
  storage: LocalStorage,
  blacklist: [],
  whitelist: ['authorization', 'search'],
}

const persistedReduser = persistReducer(persistConfig, rootReduser)

const store = createStore(persistedReduser, initialState, composedEnhancers)

sagaMiddleware.run(rootSaga)

export default store

export const persistor = persistStore(store)
