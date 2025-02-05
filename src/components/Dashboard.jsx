import React from "react";
import styled from "styled-components";

const Dashboard = ({ MyPokemon = [] }) => {
  const filledSlots = [...MyPokemon, ...Array(6 - MyPokemon.length).fill(null)];

  return (
    <DashboardContainer>
      <DashboardTitle>나만의 포켓몬</DashboardTitle>
      <DashboardContent>
        {filledSlots.map((pokemon, index) => (
          <PokemonItem key={index}>
            {pokemon ? (
              <div>
                <PokemonImage src={pokemon.img_url} alt={pokemon.korean_name} />
                <h2>{pokemon.korean_name}</h2>
                <p>No. {String(pokemon.id).padStart(3, "0")}</p>
              </div>
            ) : (
              <MonsterBallImage
                src="https://react-6-pokemon.vercel.app/assets/pokeball-13iwdk7Y.png"
                alt="빈 슬롯"
              />
            )}
          </PokemonItem>
        ))}
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
  height: 300px;
  border: 1px solid #e2e2e2;
  border-radius: 10px;
  margin: 0 auto;

  background-color: #f1f3f5;
`;

const DashboardTitle = styled.h1`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;

  color: #333;
`;

const DashboardContent = styled.div`
  flex: 2;
  display: grid;
  grid-template-columns: repeat(6, 1fr);

  gap: 10px;
`;

const PokemonItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;

  width: 120px;
  height: 170px;
  padding: 10px;
  background-color: white;

  overflow: hidden;
  border-radius: 10px;
  border: 1px solid #e2e2e2;

  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
`;

const MonsterBallImage = styled.img`
  max-width: 50px;
  height: auto;
  opacity: 0.6;
`;

const PokemonImage = styled.img`
  max-width: 80px;
  height: auto;
`;

export default Dashboard;
