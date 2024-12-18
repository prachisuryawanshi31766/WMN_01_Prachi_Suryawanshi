import { useState, useEffect } from 'react';
import './App.css';

import Button from './Components/Button';

function App() {

  return(
    <div className="App">
      <header className='App-header'>

        <Button title={"Button 1"}
        onClickHandler={ () =>{
          alert('Buy Fruits');
        }}/>

        <Button title ={"Button 2"}
        onClickHandler={ () =>{
          alert('Sell Fruits')
        }}/>

        <Button title ={"Button 3"}
        onClickHandler={ () => {
          alert('Buy Cloths');
        }}/>

        <Button title ={"Button 4"}
        onClickHandler={ () => {
          alert('Sell Cloth');
        }}/>

        <Button title ={"Button 5"}
        onClickHandler={ () => {
          alert ('Out of Stock')
        }}/>


      </header>
    </div>
  );
}

export default App;
