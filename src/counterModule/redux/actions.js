import * as cnst from './constants'

export const increment = payload => ({
  type: cnst.INCREMENT,
  payload
})

export const decrement = payload => ({
  type: cnst.DECREMENT,
  payload
})