import React from 'react'
import TaskList from './TaskList'
import ParentComponent from './ParentComponent'

const App = () => {
  return (
    <div>
      <TaskList />
      <ParentComponent />
    </div>
  )
}

export default App