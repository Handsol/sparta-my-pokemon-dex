import React from "react";
import styled from "styled-components";

const PokemonList = () => {
  return <PokemonListContainer></PokemonListContainer>;
};

export default PokemonList;

const PokemonListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;

  height: 200px;
  border: 1px solid gray;
  border-radius: 10px;
  margin-top: 10px;

  background-color: white;
`;
