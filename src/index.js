import React from "react"
import ReactDOM from "react-dom"
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"

import "./styles.css"

function App() {
  return (
    <div className="App">
      <Header companyName="AgroStar" />
      <Main />
      <Footer />
    </div>
  );
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
