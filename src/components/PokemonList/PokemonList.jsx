import { Link } from 'react-router-dom'; // Import Link from react-router-dom

// src/components/PokemonList/PokemonList.jsx

const PokemonList = (props) => {
  return (
    <>
      <h2>Pokemon</h2>
      <ul>
        {props.pokemon.map((currentPokemon) => (
          <li key={currentPokemon.name}>
            <Link to={`/pokemon/${currentPokemon._id}`}>
              {currentPokemon.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

// src/components/PokemonList/PokemonList.jsx




export default PokemonList;
