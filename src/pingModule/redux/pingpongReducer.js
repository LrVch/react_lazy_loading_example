import {PING, PONG} from './constants'

const initialState = {
  isPining: false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

    case PING:
      return { ...state, isPining: true }
    case PONG:
      return { ...state, isPining: false }

    default:
      return state
  }
}
