import React from 'react'

const TaskList = () => {

  const tasks=['Learn React','Practice coding',
                'Build projects']
 
  const handleTasks = (task)=>{
    console.log(tasks)
    console.log(event.target)
    console.log(event.type)

}

const handleClick =(task)=>{
    console.log(`You clicked on: ${task}`);
}
// const button = document.getElementById('myButton');
// button.addEventListener('click', function(event) {
//   console.log(event.type); // Output: "click"
// });

  return (
    <div>
        <h1>Task List</h1>
        {/* <button onClick={handleTasks}>Get Tasks</button> */}
        {/* <button id="myButton">Click Me</button> */}

       <ul>
           {tasks.map((task,index)=>(
            <li key={index}>
                {task}
                <button className="buttonStyle" onClick={()=>handleClick(task)}>Click me</button>
            </li>
           ))}
        </ul>
    </div>
  )
}

export default TaskList