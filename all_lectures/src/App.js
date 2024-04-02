import React, { useState } from 'react';
import './App.css'
function App() {
  const [message, setMessage] = useState('');

  const displayMessage = () => {
    setMessage('HELLO THERE!');
  };

  return (
    <div className='App'>
      <h1>{message}</h1>
      <button onClick={displayMessage}>Click me</button>
    </div>
  );
}

export default App;
