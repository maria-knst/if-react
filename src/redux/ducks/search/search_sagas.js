import { takeLatest, call, put, all } from 'redux-saga/effects'
import {
  SEARCH_DATA_REQUESTED,
  searchDataSucceed,
  searchDataFailed,
} from './search_actions'
import { generateURL } from '../../../utils/utils'

export function* getSearchingSaga(action) {
  try {
    const path = generateURL(
      action.payload.searchingString,
      action.payload.startDate,
      action.payload.endDate,
      action.payload.adults,
      action.payload.childrenAge,
      action.payload.rooms,
    )
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
