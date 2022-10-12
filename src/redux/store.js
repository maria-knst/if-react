import { createStore } from 'redux'
import rootReduser from './rootReduser'
import initialState from './initialState'
import {persistReducer, persistStore} from "redux-persist";
import LocalStorage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage: LocalStorage,
    blacklist: [],
    whitelist: ['authorization', 'search'],
};

const persistedReduser = persistReducer(persistConfig, rootReduser)

const store = createStore(
    persistedReduser,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

export default store;

export const persistor = persistStore(store);

