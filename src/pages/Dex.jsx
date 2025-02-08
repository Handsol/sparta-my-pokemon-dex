import { usePokemon } from "../context/PokemonContext";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import styled from "styled-components";
import pokemonList from "../data/MockData";

const Dex = () => {
  const { myPokemon, addMyPokemon, removeMyPokemon } = usePokemon();

  return (
    <DexContainer>
      <Dashboard
        pokemonList={pokemonList}
        myPokemon={myPokemon}
        removeMyPokemon={removeMyPokemon}
      />
      <PokemonList pokemonList={pokemonList} addMyPokemon={addMyPokemon} />
    </DexContainer>
  );
};

// Styled-components

const DexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 20px;
  margin: 0;
  padding: 20px;

  background-color: #ffffcc;
  min-height: 500px;
  width: 100vw;
`;

export default Dex;
