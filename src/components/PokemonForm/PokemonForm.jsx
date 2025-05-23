import { useNavigate } from 'react-router-dom'; // Fix import path
import { useState } from 'react';

const initialState = {
  name: '',
  weight: 0,
  height: 0,
};

// src/components/PokemonForm/PokemonForm.jsx

  const [formData, setFormData] = useState(initialState);
  // New code
  const navigate = useNavigate();


const PokemonForm = (props) => {
  const [formData, setFormData] = useState(initialState);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.addPokemon(formData); // Add the new Pokémon
    setFormData(initialState); // Reset the form
    navigate('/pokemon'); // Redirect to the Pokémon list page
  };

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  return (
    <main>
      <h2>New Pokemon</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <label htmlFor="weight">Weight:</label>
        <input
          type="number"
          id="weight"
          name="weight"
          value={formData.weight}
          onChange={handleChange}
        />
        <label htmlFor="height">Height:</label>
        <input
          type="number"
          id="height"
          name="height"
          value={formData.height}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default PokemonForm;
