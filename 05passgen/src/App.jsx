import { useState ,useEffect} from 'react'
import './App.css'
import Btn from '../components/Btn'
import Inpt from '../components/Inpt'
import Tick from '../components/tick'
import Slider from '../components/slider'
function App() {
  let [numTick, setNumTick] = useState(false);
  let[charTick,setCharTick]=useState(false);
  let[length,setLength]=useState(8);
  let[pass,setPass]=useState("");

   function copycode(){
    window.navigator.clipboard.writeText(pass);
    alert("Password copied to clipboard! 🎉");
  }

  function passGen(){
    let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(charTick==true){
      str+="!@#$%^&*()_+"+str+"!@#$%^&*()_+";
    }
    if(numTick==true){
      str="0123456789"+str+"0123456789";
    }
    let pass="";
    for(let i=0;i<length;i++){
       pass+=str.charAt(Math.floor(Math.random()*str.length));
    }
      setPass(pass);
  }

  useEffect(passGen, [numTick, charTick, length]);

  return (
    <div id="divTop">
      <div id="divMid">

        <div id="divInner">
         <Inpt pass={pass}/>
         <Btn onClick={copycode}/>
        </div>
        
        <div id="divEnd">
           <Slider value={length} onChange={(value)=>{setLength(value)}}/>
           <p id="plen">Length:{length}</p>

           <Tick checked={numTick} onClick={()=>{setNumTick(prev => !prev)}}/>
           <p>Numbers</p>

           <Tick  checked={charTick} onClick={()=>{setCharTick(prev => !prev)}}/>
           <p>Characters</p>
       </div>

      </div>
    </div>
  )
}

export default App
