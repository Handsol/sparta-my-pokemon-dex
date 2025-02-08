import { usePokemon } from "../context/PokemonContext";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import styled from "styled-components";

const Dex = () => {
  const { myPokemon, addMyPokemon, removeMyPokemon } = usePokemon(); // usePokemon 훅을 통해 상태와 함수 가져오기

  return (
    <DexContainer>
      <Dashboard />
      <PokemonList />
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
