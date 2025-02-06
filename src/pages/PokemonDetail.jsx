import MOCK_DATA from "../data/MockData";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";

const PokemonDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const pokemon = MOCK_DATA.find((pokemon) => pokemon.id === parseInt(id));

  const pokemonId = String(pokemon.id).padStart(3, "0");

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <PokemonDetailContainer>
      <h1>{pokemon.korean_name}</h1>
      <img src={pokemon.img_url} alt={pokemon.korean_name} />
      <p>No. {pokemonId}</p>
      <p>타입: {pokemon.types.join(", ")}</p>
      <p>{pokemon.description}</p>
      <GoBackButton onClick={handleGoBack}>뒤로 가기</GoBackButton>
    </PokemonDetailContainer>
  );
};

// Styled-components
const PokemonDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  height: 100vh;
  width: 100vw;

  background-color: #ffffcc;
`;

const GoBackButton = styled.button`
  background-color: #f1f3f5;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;

  &:hover {
    background-color: #ff9900;
  }
`;

export default PokemonDetail;
