import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
 let [counter, funcn]=useState(0);
 function addValue(){
  counter+=1;
  if(counter>20){
    counter=20;
  }
  else
   funcn(counter);
 }

 function subValue(){
   counter-=1;
  if(counter<0){
    counter=0;
  }
  else
   funcn(counter);
 }

  return (
    <>
      <h1>Counter</h1>
      <p>counter value: {counter}</p>
      <div class="container">
        <button onClick={addValue}>Add</button>
      <br />
      <button onClick={subValue}>Subtract</button>
      </div>
    </>
  )
}

export default App
