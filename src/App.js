import React from 'react';
import logo from './images/logo.svg';
import styles from './App.scss';

function App() {
  return (
    <div className={styles.App}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Joey's First Coding Lesson
      </header>
    </div>
  );
}

export default App;
