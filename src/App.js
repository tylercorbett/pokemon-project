import React from 'react';
import './App.scss';

function App() {
  const handleGuessClick = () => {
    alert('nice guess cunt');
  };


  return (
    <div className='App'>
     <section className='lives-left'>
       <h2>Lives Left: 3</h2>
     </section>
     <section className='user-guess'>
       <h2>Enter Your Guess:</h2>
       <input type='number' min={1} max={10}/>
     </section>

     <section className='confirm-guess'>
       <button onClick={handleGuessClick}>GUESS</button>
     </section>
    </div>
  );
}

export default App;
