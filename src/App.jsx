import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import PokemonList from './components/PokemonList/PokemonList';
import { Route, Routes } from 'react-router';
import PokemonDetails from './components/PokemonDetails/PokemonDetails';


const initialState = [
  { _id: 1, name: 'bulbasaur', weight: 69, height: 7 },
  { _id: 2, name: 'ivysaur', weight: 130, height: 10 },
  { _id: 3, name: 'venusaur', weight: 1000, height: 20 },
  { _id: 4, name: 'charmander', weight: 85, height: 6 },
  { _id: 5, name: 'charmeleon', weight: 190, height: 11 },
];

  

const App = () => {
  const [pokemon, setPokemon] = useState(initialState);
  return (
    <>
      <NavBar />
      <h1>Welcome!</h1>
      <Routes>
        <Route path='/' element={<h2><u>Home</u></h2>} />
        <Route path="/pokemon" element={<PokemonList pokemon={pokemon} />} />
        {/* New route to view a specific pokemon */}
        <Route
          path="/pokemon/:pokemonId"
          element={<PokemonDetails pokemon={pokemon} />}
        />
        <Route path="*" element={<h2>Whoops, nothing here!</h2>} />
      </Routes>

    </>
  );
};

export default App;
