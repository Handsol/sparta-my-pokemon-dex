import React, { useState } from "react";
import Dashboard from "../components/Dashboard";
import styled from "styled-components";
import PokemonList from "../components/PokemonList";

const Dex = () => {
  const [MyPokemon, setMyPokemon] = useState(Array(6).fill(null));

  const handleMyPokemon = (pokemon) => {
    setMyPokemon((prevPokemon) => {
      const newPokemon = [...prevPokemon];
      const emptyPokemon = newPokemon.findIndex((item) => item === null);

      if (emptyPokemon !== -1) {
        newPokemon[emptyPokemon] = pokemon;
      } else {
        alert("포켓몬은 최대 6마리까지 보유할 수 있습니다.");
      }

      return newPokemon;
    });
  };

  return (
    <DexContainer>
      <Dashboard MyPokemon={MyPokemon} />
      <PokemonList AddMyPokemon={handleMyPokemon} />
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
