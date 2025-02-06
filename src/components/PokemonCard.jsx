import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const PokemonCard = ({ pokemon, AddMyPokemon }) => {
  const navigate = useNavigate();
  const pokemonId = String(pokemon.id).padStart(3, "0");

  const handleCardClick = () => {
    navigate(`/pokemon/${pokemon.id}`);
  };

  return (
    <PokemonCardContainer>
      <PokemonInfo onClick={handleCardClick}>
        <PokemonImage src={pokemon.img_url} alt={pokemon.korean_name} />
        <h2>{pokemon.korean_name}</h2>
        <p>No. {pokemonId}</p>
      </PokemonInfo>
      <AddPokemonButton onClick={() => AddMyPokemon(pokemon)}>
        추가
      </AddPokemonButton>
    </PokemonCardContainer>
  );
};

// Styled-components

const PokemonCardContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  border: 1px solid #e2e2e2;
  padding: 10px;

  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.2s, box-shadow 0.2s;
`;

const PokemonInfo = styled.div`
  cursor: pointer;
`;

const PokemonImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const AddPokemonButton = styled.button`
  background-color: #f1f3f5;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;

  &:hover {
    background-color: #ff9900;
  }
`;

export default PokemonCard;
