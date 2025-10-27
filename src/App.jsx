import { useState } from 'react'
import './App.css'

function App() {

  const [dictionary, setDictionary] = useState(
    [

      { word: "React", meaning: "A JavaScript library for building user interfaces." },

      { word: "Component", meaning: "A reusable building block in React." },

      { word: "State", meaning: "An object that stores data for a component." }

    ]
  )

  const [word, setWord] = useState("");
  const [defination, setDefination] = useState("")

  const handleSearch = () => {
    setDefination("");
    dictionary.map((ele) => {
      if (ele.word.toLocaleLowerCase() === word.trim().toLocaleLowerCase()) {
        setDefination(ele.meaning);
      }
    });

    // if (defination === "") {
    //   setDefination("Word not found in the dictionary.")
    // }

  }


  return (
    <div>
      <h1>Dictionary App</h1>
      <div className="">
        <input value={word} type="text" onChange={(e) => {
          setWord(e.target.value)
        }} />
        <button onClick={handleSearch}>Search</button>
      </div>

      <h3>Definition:</h3> <p>{word ? (defination ? defination : "Word not found in the dictionary.") : ""}</p>

    </div>
  )
}

export default App
