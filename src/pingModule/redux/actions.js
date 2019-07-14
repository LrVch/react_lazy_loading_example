import * as cnst from './constants'

export const ping = () => ({
  type: cnst.PING
})

export const pong = () => ({
  type: cnst.PONG
})