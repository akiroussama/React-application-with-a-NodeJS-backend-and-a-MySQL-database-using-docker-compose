import React, { useEffect, useState } from "react";
import logo from "./ws.png";
import hotreload from "./hotreload.py.svg";
import "./App.css";

function App() {
  const [message, setMessage] = useState();
  useEffect(() => {
    fetch("/api/")
      .then(res => res.json())
      .then(res => setMessage(res.message))
      .catch(console.error);
  }, [setMessage]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        
        <p>{message || "Loading..."}</p>
        <p>
          Edit <code>src/App.js</code> and save to "H<img src={hotreload} width="32" />T" reload .
        </p>

       
      </header>
    </div>
  );
}

export default App;
