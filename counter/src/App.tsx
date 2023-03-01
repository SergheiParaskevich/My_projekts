import React from 'react';
import './App.css';
import WindowCounter from './components/DisplayCounter';
import SetCount from './components/SetCounter';

function App() {



let [inputMax, setInputMax] = React.useState<string>('');
let [inputMin, setInputMin] = React.useState<string>('');

const setNumber = () => {
 setInputMin(inputMin)
  
  
  
  }

const changeMaxCount = (event:React.ChangeEvent<HTMLInputElement>) => {
  inputMax =  event.currentTarget.value
    
}

const changeMinCount = (event:React.ChangeEvent<HTMLInputElement>) => {
  inputMin =  event.currentTarget.value
  
}

  return (
    <div className="App">
   
    <SetCount 
    changeMaxCount={changeMaxCount}
    changeMinCount={changeMinCount}
    setNumber={setNumber}/>
    <WindowCounter  inputMax={inputMax}
                    inputMin={inputMin}
                    setInputMax={setInputMax}
                    setInputMin={setInputMin}/>
                  
    </div>
    
    
  );
}

export default App;
