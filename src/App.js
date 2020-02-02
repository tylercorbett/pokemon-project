import React, { useState } from 'react';
import './App.scss';

function App() {
  const [currentUserInput, setCurrentUserInput] = useState(null);
  const [currentLivesLeft, setCurrentLivesLeft] = useState(3);
  const [numberToGuess] = useState(Math.floor(Math.random() * (10 - 1)) + 1);

  const handleGuessClick = () => {
    if (currentLivesLeft === 0) {
      return
    }

    if (currentUserInput > 10 || currentUserInput < 1) {
      alert('you think you are clever you cunt'); 
      return;
    } 

    if (currentUserInput > numberToGuess) {
       setCurrentLivesLeft(currentLivesLeft - 1);
       if (currentLivesLeft === 1) {
        alert('game over');
        return;
      }
       alert('Your guess is too high! Try guessing a small number.');
    } else if (currentUserInput < numberToGuess) {
       setCurrentLivesLeft(currentLivesLeft - 1);
       if (currentLivesLeft === 1) {
         alert('game over');
         return;
       }
       alert('Your guess is too low! Try guessing a bigger number.');
    }
    

  };


  return (
    <div className='App'>
     <section className='lives-left'>
       <h2>Lives Left: {currentLivesLeft}</h2>
     </section>
     <section className='user-guess'>
       <h2>Enter Your Guess: {currentUserInput}</h2>
       <input type='number' min="1" max="10" onChange={event => setCurrentUserInput(event.target.value)} />
     </section>
     {numberToGuess}
     <section className='confirm-guess'>
       <button onClick={handleGuessClick}>GUESS</button>
     </section>
    </div>
  );
}

export default App;
