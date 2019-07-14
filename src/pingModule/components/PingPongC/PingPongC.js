import React from 'react'

const PingPongC = ({isPining, go}) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '20px' }}>
      {isPining.toString()}
      <br />
      <br />
      <button onClick={go}>Ping</button>
    </div>
  )
}

export default PingPongC
