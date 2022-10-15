import { all } from 'redux-saga/effects'
import searchSaga from './ducks/search/search_sagas'

export default function* rootSaga() {
  yield all([searchSaga()])
}
