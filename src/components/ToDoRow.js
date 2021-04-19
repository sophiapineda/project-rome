import React, { useState } from "react"

function ToDoRow({ toDo, submitToDo, deleteToDo }) {
  const { title } = toDo

  const [userInput, setUserInput] = useState("")
  const [isEditMode, setIsEditMode] = useState(false)

  const submitEditToDo = () => {
    submitToDo(toDo, userInput)
    setIsEditMode(false)
  }

  const activateEditMode = () => {
    setIsEditMode(true)
    setUserInput(title)
  }

  const submitDeleteToDo = () => {
    deleteToDo(toDo)
  }

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
  
      {!isEditMode && (
        <>
          {title}
          <span className="badge">
            <button onClick={() => activateEditMode()} className="btn btn-warning mr-2">Edit</button>
            <button onClick={() => submitDeleteToDo()} className="btn btn-danger">Delete</button>
          </span>
        </>
      )}
      {isEditMode && (
        <>
          <input
            className="form-control"
            type="text"
            value={userInput}
            onChange={event => setUserInput(event.target.value)}
          />
          <span className="badge">
            <button onClick={() => submitEditToDo()} className="btn btn-success mr-2">Save</button>
            <button onClick={() => setIsEditMode(false)} className="btn btn-danger">Cancel</button>
          </span>
        </>
      )}
    </li>
  )
}

export default ToDoRow
