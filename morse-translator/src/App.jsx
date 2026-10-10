import UserInput from "./components/UserInput";
import MorseCode from "./components/MorseCode";
import './App.css'
import { useState } from "react";

const morseData = {
  A: '.-', B: '-...', C: '-.-.', D: '-..', E: '.', F: '..-.', G: '--.', H: '....', I: '..', J: '.---', K: '-.-', L: '.-..', M: '--', N: '-.', O: '---', P: '.--.', Q: '--.-', R: '.-.', S: '...', T: '-', U: '..-', V: '...-', W: '.--', X: '-..-', Y: '-.--', Z: '--..', '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.', '0': '-----', ' ': '/'
}

function translateToMorse(text){
  return text.toUpperCase().split('').map(char => morseData[char] || '').join(' ')
}

function App(){
  const [text, setText] = useState('')
  const [morse, setMorse] = useState('')

  const handleSubmit = () => {
    setMorse(translateToMorse(text))
  }
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8 p-8">
      <UserInput
       text={text}
       setText={setText}
       onSubmit={handleSubmit}
      />
      <MorseCode morse={morse}/>
    </div>
  )
}

export default App