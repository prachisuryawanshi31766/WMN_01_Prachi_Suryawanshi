import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Button from './Components/Button';

function App() {


  const[count, setCount] =useState(0);
  
  return(
    <div className="App">
      <header className='App-header'>

        <h1>Button is Pressed {count} Times</h1>

        <Button title={"Button 1"}
        onClickHandler={ () =>{
          setCount(count +1 );
        }}/>
 


      </header>
    </div>
  );
}

export default App;
