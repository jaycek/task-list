import React from 'react'
import ChildComponent from './ChildComponent';

const ParentComponent = () => {

    const logMessage = () => {
        console.log('Button clicked in ChildComponent!');
      };

  return (
    <div>
        <ChildComponent log={logMessage}/>
    </div>
  )
}

export default ParentComponent