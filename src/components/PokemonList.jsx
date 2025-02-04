import React from "react";
import styled from "styled-components";
import PokemonCard from "./PokemonCard";

const PokemonList = () => {
  return (
    <PokemonListContainer>
      <PokemonCard />
    </PokemonListContainer>
  );
};

export default PokemonList;

const PokemonListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;

  height: 100%;
  border: 1px solid #e2e2e2;
  border-radius: 10px;
  margin-top: 10px;

  background-color: #f1f3f5;
`;
