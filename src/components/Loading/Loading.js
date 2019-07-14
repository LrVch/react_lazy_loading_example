import React from 'react'

const Loading = ({pastDelay, error, retry}) => {
  if (error) {
    return <div>Error! <button onClick={retry}>Retry</button></div>;
  } else if (pastDelay) {
    return <div>Loading...</div>;
  }
  else {
    return null;
  }
}

export default Loading