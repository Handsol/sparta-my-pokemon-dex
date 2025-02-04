import React from "react";
import styled from "styled-components";

const PokemonCard = () => {
  return (
    <PokemonCardContainer>
      <button>추가</button>
    </PokemonCardContainer>
  );
};

export default PokemonCard;

const PokemonCardContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  margin: 20px;
  height: 200px;
  width: 100%;
`;
