import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import firebase from "gatsby-plugin-firebase"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ToDoInput from "../components/ToDoInput"
import ToDoRow from "../components/ToDoRow"
import { doc } from "prettier"

const db = firebase.firestore()

const toDo = function ({ title }) {
  this.title = title
}

const IndexPage = () => {
  const [toDoList, setToDoList] = useState([])
  const [userInput, setUserInput] = useState("")

  useEffect(() => {
    db.collection("todos")
      .get()
      .then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }))
        setToDoList(data)
      })
  })
  // useEffect(() => {
  //   db.collection("todos")
  //     .get()
  //     .then(querySnapshot => {
  //       console.log("data", querySnapshot)
  //       setToDoList(querySnapshot.forEach(snap => ({ id: doc.id, ...doc.data() })))
  //       // querySnapshot.forEach((doc) => {
  //       //     // doc.data() is never undefined for query doc snapshots
  //       //     console.log(doc.id, " => ", doc.data());
  //       // });
  //     })
  //     .catch(error => {
  //       console.log("Error getting documents: ", error)
  //     })
  // }, [])

  const addToDo = () => {
    db.collection("todos")
      .add({
        title: userInput,
        isCompleted: false,
      })
      .then(docRef => {
        console.log("Document written with ID: ", docRef.id)
      })
      .catch(error => {
        console.error("Error adding document: ", error)
      })
      setUserInput("")
    // setToDoList(prevToDoList => [
    //   ...prevToDoList,
    //   new toDo({ title: userInput }),
    // ])
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
        <ToDoRow toDo={t} key={t.id} />
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
