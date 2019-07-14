import React, { useState } from 'react'
import { connect } from 'react-redux'
import Loadable from 'react-loadable'
import Loading from '../../components/Loading/Loading'
import {ping} from '../redux/actions'

const PingPongC = Loadable({
  loader: () => import('../components/PingPongC/PingPongC'),
  loading: Loading,
});

const Go = ({ isPining, go }) => {
  const [isShow, setIsShow] = useState(false)

  const toggleShow = () => {
    setIsShow(isShow => !isShow)
  }

  const onMouseOver = () => {
    PingPongC.preload();
  };

  return (
    <div>
      <button onMouseOver={onMouseOver} onClick={toggleShow}>Show ping</button>
      {isShow && <PingPongC isPining={isPining} go={go} />}
    </div>
  )
}

const matStateToProps = state => ({
  isPining: state.pingpong  && state.pingpong.isPining
})

const matDispathToProps = dispatch => ({
  go: () => dispatch(ping())
})

export default connect(
  matStateToProps,
  matDispathToProps
)(Go)
