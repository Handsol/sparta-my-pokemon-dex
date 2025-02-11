import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { usePokemon } from "../context/PokemonContext";

const PokemonDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { myPokemon, pokemonList, addMyPokemon, removeMyPokemon } =
    usePokemon();

  // 선택한 포켓몬을 id를 통해 pokemonList(MOCK_DATA)에서 검색
  const pokemon = pokemonList.find((pokemon) => pokemon.id === parseInt(id));

  // 포켓몬 넘버가 3자리수로 출력되도록 설정
  const pokemonId = String(pokemon.id).padStart(3, "0");

  // 이미 선택된 포켓몬인지 확인
  const checkPokemon = pokemon.id;
  const alreadyExists = myPokemon.some(
    (pokemon) => pokemon.id === checkPokemon
  );

  // 돌아가기 버튼을 누르면 전 페이지로 이동
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
      {/* <AddPokemonButton onClick={() => addMyPokemon(pokemon.id)}>
        추가
      </AddPokemonButton>
      <RemovePokemonButton onClick={() => removeMyPokemon(pokemon.id)}>
        제거
      </RemovePokemonButton> */}
      {alreadyExists ? (
        <RemovePokemonButton onClick={() => removeMyPokemon(pokemon.id)}>
          제거
        </RemovePokemonButton>
      ) : (
        <AddPokemonButton onClick={() => addMyPokemon(pokemon.id)}>
          추가
        </AddPokemonButton>
      )}
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

const RemovePokemonButton = styled.button`
  background-color: #ccc;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;

  &:hover {
    background-color: #ff9900;
  }
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
