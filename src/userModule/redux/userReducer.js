import * as cts from './constants'
import { createSelector } from 'reselect'

const initialState = {
  info: {},
  isLoading: false,
  isError: false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

    case cts.LOAD_USER_REQUEST:
      return {
        ...state,
        info: {},
        isLoading: true,
        isError: false
      }
    case cts.LOADED_USER_SUCCESS:
      return {
        ...state,
        info: payload.info,
        isLoading: false
      }
    case cts.LOAD_USER_FAIL:
      return {
        ...state,
        isLoading: false,
        isError: true
      }
      case cts.FETCH_USER_CANCELLED:
          return {
            ...state,
            isLoading: false,
            isError: false
          }

    default:
      return state
  }
}

export const user = state => state.user
export const isUserLoading = createSelector(
  state => state.user,
  user => user.isLoading
)

