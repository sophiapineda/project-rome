import React, { useState } from "react"

function ToDoRow({ toDo: { title } }) {
  const [userInput, setUserInput] = useState("")

  const [isEditMode, setIsEditMode] = useState(false)

  const submitEditToDo = () => {
    setIsEditMode(false)
  }

  const activateEditMode = () => {
    setIsEditMode(true)
    setUserInput(title)
  }

  return (
    <div>
      {!isEditMode && (
        <span>
          {title}
          <button onClick={() => activateEditMode()}>edit</button>
        </span>
      )}
      {isEditMode && (
        <span>
          <input
            type="text"
            value={userInput}
            onChange={event => setUserInput(event.target.value)}
          />
          <button onClick={() => submitEditToDo()}>save</button>
          <button onClick={() => setIsEditMode(false)}>cancel</button>
        </span>
      )}
    </div>
  )
}

export default ToDoRow
