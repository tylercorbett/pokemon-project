import React, { useState } from 'react';
import './App.scss';

function App() {
  const [currentUserInput, setCurrentUserInput] = useState(null);
  const [currentLivesLeft, setCurrentLivesLeft] = useState(3);
  const handleLivesLeft = () => {
  
  }
  const handleGuessClick = () => {
    alert('You Guessed X');
  };


  return (
    <div className='App'>
     <section className='lives-left'>
       <h2>Lives Left: {currentLivesLeft}</h2>
     </section>
     <section className='user-guess'>
       <h2>Enter Your Guess: {currentUserInput}</h2>
       <input type='number' min={1} max={10} onChange={event => setCurrentUserInput(event.target.value)} />
     </section>

     <section className='confirm-guess'>
       <button onClick={handleGuessClick}>GUESS</button>
     </section>
    </div>
  );
}

export default App;
