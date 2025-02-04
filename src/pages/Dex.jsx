import React from "react";
import Dashboard from "../components/Dashboard";
import styled from "styled-components";
import PokemonList from "../components/PokemonList";

const Dex = () => {
  return (
    <DexContainer>
      <Dashboard />
      <PokemonList />
    </DexContainer>
  );
};

export default Dex;

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
