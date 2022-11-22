import React, { useState } from "react"

function App() {
  const [books, setBooks] = useState([])

  const createBook = title => {
    console.log("need to add book with title:", title)
  }

  return <div>App</div>
}

export default App
