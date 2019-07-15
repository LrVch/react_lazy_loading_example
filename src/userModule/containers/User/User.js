import React, { 
  // useEffect
 } from 'react'
import { connect } from 'react-redux'
import { loadUser, loadUserCanseled } from '../../redux/actions';
import user$ from '../../redux/epics';
import { rootEpic$ } from '../../../rootEpics'

rootEpic$.next(user$)

const User = ({ info, isLoading, isError, loadUser, cancel }) => {

  // useEffect(() => {
  //   console.log('did mount')
  //   return () => {
  //     console.log('will ummount')
  //   }
  // }, [])

  return (
    <div>
      <hr />
      User info
      <br />
      <div style={{ height: '30px' }}>{isLoading && 'isLoading'}</div>
      {isError && <div>isError</div>}
      <br />
      <button onClick={() => loadUser('torvalds')}>Load</button>
      <button onClick={() => cancel('torvalds')}>CAncel</button>
      <br />
      <pre
        style={{ textAlign: 'left' }}>
        {Object.keys(info).length > 0 && JSON.stringify(info, '', 4)}
      </pre>
      <hr />
    </div>
  )
}

const matStateToProps = state => ({
  info: state.user && state.user.info,
  isLoading: state.user && state.user.isLoading,
  isError: state.user && state.user.isError,
})

const matDispatchToProps = dispatch => ({
  loadUser: name => dispatch(loadUser(name)),
  cancel: () => dispatch(loadUserCanseled())
})

export default connect(
  matStateToProps,
  matDispatchToProps
)(User)
