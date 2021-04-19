import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import firebase from "gatsby-plugin-firebase"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ToDoInput from "../components/ToDoInput"
import ToDoRow from "../components/ToDoRow"
import { doc } from "prettier"

const toDo = function ({ title }) {
  this.id = Date.now()
  this.title = title
}

const IndexPage = () => {
  const [toDoList, setToDoList] = useState([])
  const [userInput, setUserInput] = useState("")

  useEffect(() => {
    const dataInStorage = localStorage.getItem("toDoList")
    setToDoList(dataInStorage ? JSON.parse(dataInStorage).toDoList : [])
  }, [])

  useEffect(() => {
    localStorage.setItem("toDoList", JSON.stringify({ toDoList }))
  }, [toDoList])

  const addToDo = () => {
    setUserInput("")
    setToDoList(prevToDoList => [
      ...prevToDoList,
      new toDo({ title: userInput }),
    ])
  }
  const submitToDo = (toDo, userInput) => {
    const newToDoList = [...toDoList]
    newToDoList.filter(t => t === toDo)[0].title = userInput
    setToDoList(newToDoList)
  }

  const deleteToDo = toDo => {
    const newToDoList = [...toDoList]
    newToDoList.splice(newToDoList.indexOf(toDo), 1)
    setToDoList(newToDoList)
  }

  return (
    <Layout>
      <SEO title="Home" />

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <ToDoInput
              userInput={userInput}
              setUserInput={setUserInput}
              addToDo={addToDo}
            />
            <ul className="list-group">
              {toDoList.map(t => (
                <ToDoRow
                  toDo={t}
                  key={t.id}
                  submitToDo={submitToDo}
                  deleteToDo={deleteToDo}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p> */}
    </Layout>
  )
}

export default IndexPage
