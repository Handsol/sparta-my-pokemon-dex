import { usePokemon } from "../context/PokemonContext";
import DashboardCard from "./DashboardCard";
import styled from "styled-components";

const Dashboard = () => {
  const { myPokemon, removeMyPokemon } = usePokemon();

  return (
    <DashboardContainer>
      <DashboardTitle>나만의 포켓몬</DashboardTitle>
      <DashboardContent>
        {Array.from({ length: 6 }, (_, i) => {
          return myPokemon[i] ? (
            <DashboardCard
              key={i}
              pokemon={myPokemon[i]}
              removeMyPokemon={removeMyPokemon}
            />
          ) : (
            <EmptyPokemon key={i}>
              <img
                src="https://react-6-pokemon.vercel.app/assets/pokeball-13iwdk7Y.png"
                alt="빈 슬롯"
              />
            </EmptyPokemon>
          );
        })}
      </DashboardContent>
    </DashboardContainer>
  );
};

// Styled-components

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
  max-width: 1200px;
  min-height: 300px;
  border: 1px solid #e2e2e2;
  border-radius: 10px;
  margin: 0 auto;
  box-sizing: border-box;

  background-color: #f1f3f5;
`;

const DashboardTitle = styled.h1`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  padding-top: 30px;

  color: #333;
`;

const DashboardContent = styled.div`
  flex: 2;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(90px, 1fr));
  padding: 5%;
  width: 100%;

  grid-gap: 10px;
`;

const EmptyPokemon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 190px;

  background-color: white;
  border-radius: 10px;
  border: 1px solid #e2e2e2;
  padding: 10px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
  border: 2px dashed #ccc;

  img {
    width: 50px;
    height: auto;
  }
`;

export default Dashboard;
