import React from 'react';

import logo from './logo.svg';
import './App.css';
import Counter from './features/counter/Counter'
import { useGetPokemonByNameQuery } from './services/pokemon';

function App() {

  const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur')

  return (
    <div className="App">
      <Counter />
      {
        error ? (
          <>Oh on, there was an error</>
        ) : isLoading ? (
          <>Loading...</>
        ) : data ? (
          <>
            <h3>{data.species.name}</h3>
            <img src={data.sprites.front_shiny} alt={data.species.name} />
          </>
        ) : null}
      <header className="App-header text-3xl">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
