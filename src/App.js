import React, { useEffect } from 'react';
import './App.css';
import use7Boom from './hooks/use7Boom'

function App() {
  const { sequence, boom, add1, current, checkBoom } = use7Boom()
  useEffect(() => {
    sequence(0)
  }, [])
  useEffect(() => {
    if (checkBoom(current)) {
      document.title ="Boom!"
    } else{
      document.title ="Counting"
    }
  }, [current])
  return (
    <div className="App">
      <header className="">
        ElbitTest
      </header>
      <div>
      <button onClick={add1}>Increase</button>
      <label style={ checkBoom(current) ? {   border: "3px dotted red", padding: "5px" } : {}}>{current}</label>
      </div>
      <div class="list">
        { boom.map((int, index) => {

          if (int != -1) {
            return (
              <div key={index} className="grey">
                { int  }
              </div>
            )
          }
          else {
            return (
              <div key={index} className="red">
                boom
              </div>
            )
          }

        }) }
      </div>


    </div>
  );
}

export default App;
