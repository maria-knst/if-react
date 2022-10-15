import { takeLatest, call, put, all } from 'redux-saga/effects'
import {
  SEARCH_DATA_REQUESTED,
  searchDataSucceed,
  searchDataFailed,
} from './search_actions'
import { BASE_PATH } from '../../../utils/utils'

export function* getSearchingSaga(action) {
  try {
    console.log(action.payload)
    const path = BASE_PATH +
        `?search=${action.payload.searchingString}&adults=${action.payload.adults}&children=${action.payload.childrenAge}&rooms=${action.payload.rooms}`;
    console.log(path)
    const response = yield fetch(path)
    const data = yield response.json()

    yield put(searchDataSucceed(data))
  } catch (e) {
    yield put(searchDataFailed(e.message))
  }
}

export default function* searchSaga() {
  yield takeLatest(SEARCH_DATA_REQUESTED, getSearchingSaga)
}
