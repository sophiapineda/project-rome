import React, { useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ToDoInput from "../components/ToDoInput"
import ToDoRow from "../components/ToDoRow"

const toDo = function ({ title }) {
  this.title = title
}

const IndexPage = () => {
  const [toDoList, setToDoList] = useState([])
  const [userInput, setUserInput] = useState("")

  const addToDo = () => {
    setToDoList(prevToDoList => [
      ...prevToDoList,
      new toDo({ title: userInput }),
    ])
  }

  return (
    <Layout>
      <SEO title="Home" />
      <ToDoInput
        userInput={userInput}
        setUserInput={setUserInput}
        addToDo={addToDo}
      />
      {toDoList.map(t => (
        <ToDoRow toDo={t} />
      ))}
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
