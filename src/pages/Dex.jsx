import React, { useState } from "react";
import Dashboard from "../components/Dashboard";
import styled from "styled-components";
import PokemonList from "../components/PokemonList";

const Dex = () => {
  const [MyPokemon, setMyPokemon] = useState(Array(6).fill(null));

  const handleMyPokemon = (pokemon) => {
    setMyPokemon((prevPokemon) => {
      const alreadyExists = prevPokemon.some(
        (item) => item && item.id === pokemon.id
      );

      if (alreadyExists) {
        alert("이미 선택한 포켓몬입니다.");
        return prevPokemon;
      }

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

  const RemoveMyPokemon = (pokemon) => {
    setMyPokemon((prevPokemon) => {
      const newPokemon = prevPokemon.filter((item) => item !== pokemon);

      return [...newPokemon, ...Array(6 - newPokemon.length).fill(null)];
    });
  };

  return (
    <DexContainer>
      <Dashboard MyPokemon={MyPokemon} RemoveMyPokemon={RemoveMyPokemon} />
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
