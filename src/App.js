import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [joke, setJoke] = useState(null)

  const getJoke = async () => {
    const jokeData = await fetch(`https://icanhazdadjoke.com/`,
      {
        headers: { Accept: "application/json" },
      }
    )
      .then(response => response.json())
    setJoke(jokeData)
  };

  return (
    <div className="App">
      <h2>Random Joke Generator</h2>
      <div className="joke_area">
        {joke && <h4>{joke.joke}</h4>}
        <div className='joke_button'>
          <button onClick={() => getJoke()}>Get a New Joke</button>
        </div>
      </div>
    </div>
  );
}

export default App;
