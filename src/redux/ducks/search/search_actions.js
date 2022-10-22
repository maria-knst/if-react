import { createAction } from 'redux-actions'

export const SEARCH_DATA_REQUESTED = 'SEARCH_DATA_REQUESTED'
export const SEARCH_DATA_SUCCEED = 'SEARCH_DATA_SUCCEED'
export const SEARCH_DATA_FAILED = 'SEARCH_DATA_FAILED'

export const searchDataRequested = createAction(SEARCH_DATA_REQUESTED)
export const searchDataSucceed = createAction(SEARCH_DATA_SUCCEED)
export const searchDataFailed = createAction(SEARCH_DATA_FAILED)
