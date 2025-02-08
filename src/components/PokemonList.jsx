import { usePokemon } from "../context/PokemonContext";
import PokemonCard from "./PokemonCard";
import styled from "styled-components";

const PokemonList = () => {
  const { pokemonList, addMyPokemon } = usePokemon();

  return (
    <PokemonListContainer>
      {pokemonList.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          pokemon={pokemon}
          addMyPokemon={addMyPokemon}
        />
      ))}
    </PokemonListContainer>
  );
};

// Styled-components

const PokemonListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1200px;
  min-height: 500px;
  padding: 20px;

  border: 1px solid #e2e2e2;
  border-radius: 10px;
  background-color: #f1f3f5;
`;

export default PokemonList;
