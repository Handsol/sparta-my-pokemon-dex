import { createContext, useContext, useState } from "react";
import pokemonList from "../data/MockData";

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [myPokemon, setMyPokemon] = useState([]);

  // 포켓몬리스트 -> 대쉬보드 포켓몬 추가
  const addMyPokemon = (pokemonId) => {
    // 추가를 누르면 포켓몬 리스트에서 값 가져오기
    const newPokemon = pokemonList.find((pokemon) => pokemon.id === pokemonId);

    // 중복 포켓몬이 있는지 확인하기
    const alreadyExists = myPokemon.some((pokemon) => pokemon.id === pokemonId);

    // 예외처리 2종

    // 만약 같은 포켓몬을 중복선택 했을 경우 알림
    if (alreadyExists) {
      alert("이미 데리고 있는 포켓몬입니다.");
      return;
    }

    // 만약 7마리 이상의 포켓몬을 선택하려는 경우 알림
    if (myPokemon.length === 6) {
      alert("더이상 포켓몬을 데리고 갈 수 없습니다.");
      return;
    }

    // 위 상황에 해당하지 않을 경우 포켓몬 추가
    setMyPokemon((prev) => {
      return [...prev, newPokemon];
    });
  };

  // 대쉬보드에서 포켓몬을 삭제하는 로직
  const removeMyPokemon = (pokemonId) => {
    setMyPokemon((prev) => {
      const resetPokemon = prev.filter((pokemon) => pokemon.id !== pokemonId);
      return resetPokemon;
    });
  };

  return (
    <PokemonContext.Provider
      value={{ pokemonList, myPokemon, addMyPokemon, removeMyPokemon }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export const usePokemon = () => {
  return useContext(PokemonContext);
};
