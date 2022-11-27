import React from "react"
import "./index.css"
import ReactDOM from "react-dom/client"
import App from "./App"
import { Provider } from "./context/books"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <Provider value={10}>
      <App />
    </Provider>
  </React.StrictMode>
)
