import * as cnst from './constants'

export const loadUser = (userName) => ({
  type: cnst.LOAD_USER_REQUEST,
  payload: {
    userName
  }
})

export const loadUserSuccess = (info) => ({
  type: cnst.LOADED_USER_SUCCESS,
  payload: {
    info
  }
})

export const loadUserFail = () => ({
  type: cnst.LOAD_USER_FAIL
})

export const loadUserCanseled = () => ({
  type: cnst.FETCH_USER_CANCELLED
})



