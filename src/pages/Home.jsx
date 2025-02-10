import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Home = () => {
  const navigate = useNavigate();

  return (
    <HomeContainer>
      <img src="https://react-6-pokemon.vercel.app/assets/pokemon-logo-RN0wntMB.png" />
      <button
        onClick={() => {
          navigate("/dex");
        }}
      >
        포켓몬 도감 시작하기
      </button>
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  background-color: #ffffcc;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;

  img {
    width: 60%;
    height: auto;
  }

  button {
    background-color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 10px;
    cursor: pointer;
    font-size: 1.5rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

    &:hover {
      background-color: #ff9900;
      color: white;
    }
  }
`;

export default Home;
