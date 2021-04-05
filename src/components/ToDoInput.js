import React from 'react'

function ToDoInput({ userInput, setUserInput, addToDo }) {
  
  return (
    <div>
      <input
        type="text"
        value={userInput}
        onChange={event => setUserInput(event.target.value)}
      />
      <button  onClick={() => addToDo()} >add</button>
    </div>
  )
}

export default ToDoInput
