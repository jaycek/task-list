import React from 'react'

const ChildComponent = ({log}) => {
  return (
    <div>
        <button onClick={log}>Click Me!</button>
    </div>
  )
}

export default ChildComponent