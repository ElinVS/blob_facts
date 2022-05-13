import React, { useState } from "react"
import './App.css';

function App() {

  const [facts, setFacts] = useState("")

  const boredomBuster = function(){
    fetch("https://uselessfacts.jsph.pl//random.json?language=en")
    .then(response => response.json())
    .then(facts => setFacts(facts)) 
  }


  return (
      <>   
          <div className="container">
            <h2><em>Blob Facts</em></h2>
            <div id="blob" onClick={boredomBuster}><h1>{facts.text}</h1>
            </div>
          </div>
      </>
  );
}

export default App;
