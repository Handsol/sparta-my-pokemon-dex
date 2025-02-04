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
  margin: 0;
  padding: 10px;

  background-color: #ffffcc;
  height: 100vh;
  width: 100vw;
`;
