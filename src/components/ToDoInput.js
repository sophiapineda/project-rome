import React from "react"

function ToDoInput({ userInput, setUserInput, addToDo }) {
  return (
    <div className="mt-3">
      <div className="form-group">
        <label className="control-label">Add ToDo</label>
        <div className="form-group">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              aria-label="Add a to-do!"
              value={userInput}
              onChange={event => setUserInput(event.target.value)}
            />
            <div className="input-group-append">
              <button onClick={() => addToDo()} className="btn btn-success">
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ToDoInput
